import express, { json } from "express"
import config from "config"
import sequelize from "./db/sequelize"
import profileRouter from "./routers/profile"
import errorLogger from "./middlewares/error/error-logger"
import notFound from "./middlewares/not-found"
import errorResponder from "./middlewares/error/error-responder"
import commentRouter from "./routers/comments"
import followsRouter from "./routers/follows"
import feedRouter from "./routers/feed"
import authRouter from "./routers/auth"
import cors from 'cors'
import fileUpload from "express-fileupload"
import { createAppBucketIfNotExist } from "./aws/aws"

const force = config.get<boolean>('sequelize.sync.force') 

const app = express();

export async function start() {
  await sequelize.sync({ force })

  await createAppBucketIfNotExist();

  app.use(cors())
  // app.use(cors({
  //   origin: 'http://localhost:5173'
  // }))
  app.use(json())
  app.use(fileUpload())

  app.use('/profile', profileRouter)
  app.use('/follows', followsRouter)
  app.use('/comments', commentRouter)
  app.use('/feed', feedRouter)
  app.use('/auth', authRouter)

  app.use(notFound)

  app.use(errorLogger)
  app.use(errorResponder)

}

export default app