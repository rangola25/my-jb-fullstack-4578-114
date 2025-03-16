import { 
    AllowNull, 
    BelongsToMany, 
    Column, 
    DataType, 
    Default, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import Follow from "./follow";
import Vacation from "./vacation";

@Table({
    underscored: true,
})
export default class User extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @AllowNull(false)
    @Column(DataType.STRING)
    firstName: string

    @AllowNull(false)
    @Column(DataType.STRING)
    lastName: string

    @AllowNull(false)
    @Column(DataType.STRING)
    email: string

    @AllowNull(false)
    @Column(DataType.STRING)
    password: string

    @AllowNull(false)
    @Default("user")
    @Column(DataType.STRING)
    role: string

    @BelongsToMany(() => Vacation, () => Follow)
    vacations: Vacation[]

}