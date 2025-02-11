import express, { json } from "express"
import config from "config"
import sequelize from "./db/sequelize"
import profileRouter from "./routers/profile"
import errorLogger from "./middlewares/error/error-logger"
import notFound from "./middlewares/not-found"
import errorResponder from "./middlewares/error/error-responder"
import followersRouter from "./routers/followers"
import followeeRouter from "./routers/follwee"
import followRouter from "./routers/follow"
import unfollowRouter from "./routers/unfollow"
import commentRouter from "./routers/comments"

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')
const force = config.get<boolean>('sequelize.sync.force') 

const app = express();

(async () => {
  await sequelize.sync({ force })

  app.use(json())

  app.use('/profile', profileRouter)
  app.use('/follows/followers', followersRouter)
  app.use('/follows/followee', followeeRouter)
  app.use('/follows/follow', followRouter)
  app.use('/follows/unfollow', unfollowRouter)
  app.use('/comments', commentRouter)

  app.use(notFound)

  app.use(errorLogger)
  app.use(errorResponder)

  app.listen(port, () => console.log(`${name} app started on port ${port}...`))
})()


