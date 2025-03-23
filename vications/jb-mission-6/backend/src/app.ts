import express, { json } from "express"
import config from 'config'
import sequelize from "./db/sequelize"
// import authRouter from "./routers/auth"
import errorLogger from "./middlewares/error/error-logger"
import errorResponder from "./middlewares/error/error-responder"
import notFound from "./middlewares/not-found"
import { enforceAuth } from "./middlewares/enforce-auth"
import cors from 'cors'
import authRouter from "./routers/auth"
import adminRouter from "./routers/admin"
import userRouter from "./routers/vacations"
import followRouter from "./routers/follow"
import fileUpload from "express-fileupload"
import { createAppBucketIfNotExist } from "./aws/aws"

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')
const force = config.get<boolean>('sequelize.sync.force')

const app = express();

(async () => {
    await sequelize.sync({ force })
    await createAppBucketIfNotExist();

    // middlewares
    app.use(cors()) // allow any client to use this server

    app.use(json()) // a middleware to extract the post/put/patch data and save it to the request object in case the content type of the request is application/json
    app.use(fileUpload())
    
    // [ if we have auth in this app, uncomment this ]:
    app.use('/auth', authRouter)

    // [ here is the place to mount routers on the app]:
    app.use('/vacations', userRouter)
    app.use('/admin', adminRouter)
    app.use('/likes', followRouter)

    // special notFound middleware
    app.use(notFound)

    // error middleware
    app.use(errorLogger)
    app.use(errorResponder)

    app.listen(port, () => console.log(`${name} started on port ${port}...`))
})()
