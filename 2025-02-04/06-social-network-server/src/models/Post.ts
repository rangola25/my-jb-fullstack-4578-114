import { AllowNull, Column, DataType, Default, Index, Model, PrimaryKey, Table } from "sequelize-typescript"

@Table({
    underscored: true
})
export default class Post extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @Index
    @Default(DataType.UUIDV4)
    @Column
    user_id: string

    @AllowNull(false)
    @Column
    title: string

    @AllowNull(false)
    @Column
    body: string

}