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

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')
const force = config.get<boolean>('sequelize.sync.force') 

const app = express();

(async () => {
  await sequelize.sync({ force })

  app.use(json())

  app.use('/profile', profileRouter)
  app.use('/follows', followsRouter)
  app.use('/comments', commentRouter)
  app.use('/feed', feedRouter)
  app.use('/auth', authRouter)

  app.use(notFound)

  app.use(errorLogger)
  app.use(errorResponder)

  app.listen(port, () => console.log(`${name} app started on port ${port}...`))
})()


