import { 
    AllowNull, 
    BelongsTo, 
    Column, 
    DataType, 
    Default, 
    ForeignKey, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import Author from "./author";

@Table({
    underscored: true,
})
export default class Book extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @ForeignKey(() => Author)
    @AllowNull(false)
    @Column(DataType.UUID)
    authorId: string

    @AllowNull(false)
    @Column(DataType.STRING(120))
    name: string

    @AllowNull(false)
    @Column(DataType.INTEGER)
    amountOfPages: number

    @AllowNull(false)
    @Column(DataType.INTEGER)
    price: number

    @BelongsTo(() => Author)
    author: Author;
}
