import sequelize from "../utils/connectDB";
import { DataTypes } from "sequelize";


const OneWay = sequelize.define({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  source_state: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  },
  source_city: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  },
  destination_state: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  },
  destination_city: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  },
  hatchback: {
    type: DataTypes.INTEGER(5),
    allowNull: false,
    defaultValue: 0,
  },
  sedan: {
    type: DataTypes.INTEGER(5),
    allowNull: false,
    defaultValue: 0,
  },
  SedanPremium: {
    type: DataTypes.INTEGER(5),
    allowNull: true,
    defaultValue: null,
  },
  suv: {
    type: DataTypes.INTEGER(5),
    allowNull: false,
    defaultValue: 0,
  },
  suvplus: {
    type: DataTypes.INTEGER(5),
    allowNull: false,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  }
}, {
  tableName: 'oneway_trip',
  timestamps: false,
});

export default OneWay;