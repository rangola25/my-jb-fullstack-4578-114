import express from "express"
import config from "config"
import sequelize from "./db/sequelize"

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')
const syncOptions = config.get<object>('database.sync') 

const app = express()

sequelize.sync(syncOptions).then(() => {
    console.log('Database synchronized')
  }).catch((err) => {
    console.error('Error syncing database:', err)
  })

app.listen(port, () => console.log(`${name} app started on port ${port}...`))