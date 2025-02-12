import { Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript"

@Table({
    underscored: true
})
export default class Follows extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    follower_id: string

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    followee_id: string
}