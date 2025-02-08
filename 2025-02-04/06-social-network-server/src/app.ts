import express from "express"
import config from "config"
import sequelize from "./db/sequelize"

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')

const app = express()

sequelize.sync({ force: true })

app.listen(port, () => console.log(`${name} app started on port ${port}...`))