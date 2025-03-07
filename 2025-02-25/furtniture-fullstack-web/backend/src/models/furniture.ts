import {
    AllowNull,
    Column,
    DataType,
    Default,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";

@Table({
    underscored: true,
})
export default class Furniture extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column(DataType.STRING(40))
    name: string

    @AllowNull(false)
    @Column(DataType.STRING(40))
    dimensions: string

    @AllowNull(false)
    @Column(DataType.STRING(32))
    color: string

    @AllowNull(false)
    @Column(DataType.DECIMAL())
    price: number

}
