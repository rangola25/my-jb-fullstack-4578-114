import { AllowNull, 
    BelongsTo, 
    Column, 
    DataType, 
    Default, 
    ForeignKey, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript"
import Post from "./post"
import User from "./user"

@Table({
    underscored: true
})
export default class Comment extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Post)
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    postId: string

    @ForeignKey(() => User)
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    userId: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string

    @BelongsTo(() => Post)
    post: Post

    @BelongsTo(() => User)
    user: User
}