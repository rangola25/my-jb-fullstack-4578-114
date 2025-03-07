import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Presents from "../models/presents";
import TargetAudience from "../models/targetAudience";

const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    // [ add ALL model classes you created to the array ]:
    models: [ TargetAudience, Presents],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize