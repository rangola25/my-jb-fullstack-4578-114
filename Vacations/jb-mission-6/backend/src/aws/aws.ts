import { CreateBucketCommand, S3Client, PutBucketCorsCommand } from "@aws-sdk/client-s3";
import config from 'config'

// read the config of s3, and clone it deeply
const s3Config = JSON.parse(JSON.stringify(config.get('s3.connection')))

// if we're NOT running localstack, i.e. we want to run against AWS PRODUCTION servers
// then we MUST delete the endpoint property from the config object
if (!config.get<boolean>('s3.isLocalstack')) delete s3Config.endpoint

// init the client
const s3Client = new S3Client(s3Config)

export async function createAppBucketIfNotExist() {
    try {
        await s3Client.send(
            new CreateBucketCommand({
                Bucket: config.get<string>('s3.bucket'),
                // CORSConfiguration: corsConfig,
            })
        )
        console.log('Bucket created successfully');

        // Set the CORS configuration after creating the bucket
        const corsConfig = {
            CORSRules: [
                {
                    AllowedOrigins: ["http://localhost:5173/"], // Allow requests from your frontend
                    AllowedMethods: ["GET", "POST", "PUT", "DELETE"], // Specify the allowed HTTP methods
                    AllowedHeaders: ["*"], // Allow all headers
                    MaxAgeSeconds: 3000, // Cache the preflight response
                },
            ],
        };

        // Apply CORS configuration
        await s3Client.send(
            new PutBucketCorsCommand({
                Bucket: config.get<string>('s3.bucket'),
                CORSConfiguration: corsConfig,
            })
        );

        console.log('CORS configuration applied successfully');
    } catch (e) {
        // ignore
        console.log('Bucket probably already exist')
    }
}

export default s3Client