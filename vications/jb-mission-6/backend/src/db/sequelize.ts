import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Vacation from "../models/vacation";
import User from "../models/user";
import Follow from "../models/follow";

const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    // [ add ALL model classes you created to the array ]:
    models: [ Vacation, User, Follow ],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize