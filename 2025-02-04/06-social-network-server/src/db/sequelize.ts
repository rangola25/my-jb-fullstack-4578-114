import { Sequelize } from "sequelize-typescript";
import User from "../models/User";
import config from "config";
import Post from "../models/Post";
import Comment from "../models/comment";
import Follows from "../models/follows";

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize({
    models: [ User, Post, Follows, Comment ],
    logging: isProduction ? false : console.log,
    dialect:'mysql',
    ...config.get('db')
})

export default sequelize