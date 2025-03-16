import { Sequelize } from "sequelize-typescript";
import config from "config";
import User from "../models/user";
import Post from "../models/post";
import Follows from "../models/follow";
import Comment from "../models/comment";

// const isProduction = process.env.NODE_ENV === 'prod';
const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    models: [ User, Post, Follows, Comment ],
    // logging: isProduction ? false : console.log,
    dialect:'mysql',
    ...config.get('db'),
    logging, 
})

export default sequelize