import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Presents from "../models/book";
import TargetAudience from "../models/author";
import Author from "../models/author";
import Book from "../models/book";

const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    // [ add ALL model classes you created to the array ]:
    models: [ Author, Book ],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize