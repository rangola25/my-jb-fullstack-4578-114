import { AllowNull, Column, DataType, Default, Index, Model, PrimaryKey, Table } from "sequelize-typescript"

@Table({
    underscored: true
})
export default class Comment extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @Index
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    post_id: string

    @Index
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    user_id: string

    @AllowNull(false)
    @Column
    body: string

}