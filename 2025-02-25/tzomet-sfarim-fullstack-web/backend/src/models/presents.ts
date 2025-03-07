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
import TargetAudience from "./targetAudience";

@Table({
    underscored: true,
})
export default class Presents extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    code: string
    
    @ForeignKey(() => TargetAudience)
    @AllowNull(false)
    @Column(DataType.UUID)
    targetCode: string

    @AllowNull(false)
    @Column(DataType.UUID)
    presentName: string

    @AllowNull(false)
    @Column(DataType.STRING(120))
    presentDescription: string

    @AllowNull(false)
    @Column(DataType.INTEGER)
    price: number

    @AllowNull(false)
    @Column(DataType.INTEGER)
    discount: number

    @BelongsTo(() => TargetAudience)
    targetAudience: TargetAudience;
}
