import express, { json } from "express"
import config from "config"
import errorLogger from "./middlewares/error/error-logger"
import notFound from "./middlewares/not-found"
import errorResponder from "./middlewares/error/error-responder"
import cors from 'cors'
import { connect } from "./db/mongoose"
import typesRouter from "./routers/type"
import toysRouter from "./routers/toys"

const app = express();

export async function start() {
  // await sequelize.sync({ force })

  await connect()

  app.use(cors())
  // app.use(cors({
  //   origin: 'http://localhost:5173'
  // }))
  app.use(json())

  app.use('/types', typesRouter)
  app.use('/toys', toysRouter)

  app.use(notFound)

  app.use(errorLogger)
  app.use(errorResponder)

}

export default app