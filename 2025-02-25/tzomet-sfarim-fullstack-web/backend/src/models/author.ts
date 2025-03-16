import {
    AllowNull,
    Column,
    DataType,
    Default,
    HasMany,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Book from "./book";

@Table({
    underscored: true,
})
export default class Author extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column(DataType.STRING(40))
    firstName: string

    @AllowNull(false)
    @Column(DataType.STRING(40))
    lastName: string

    @HasMany(() => Book)
    book: Book[];
}
