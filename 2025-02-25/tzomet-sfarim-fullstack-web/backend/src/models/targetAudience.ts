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
import Presents from "./presents";

@Table({
    underscored: true,
})
export default class TargetAudience extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    code: string

    @AllowNull(false)
    @Column(DataType.ENUM('kids', 'teen', 'adults'))
    type: 'kids' | 'teen' | 'adults'

    @HasMany(() => Presents)
    presents: Presents[];
}
