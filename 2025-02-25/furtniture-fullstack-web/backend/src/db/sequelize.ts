import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Furniture from "../models/furniture";

const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    models: [ Furniture ],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize