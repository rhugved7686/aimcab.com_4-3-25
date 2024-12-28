// models/Trip.js
import { DataTypes } from 'sequelize';
import sequelize from '../utils/connectDB';

const Visitor = sequelize.define('Visitor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bookid: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  userid: {
    type: DataTypes.STRING(11),
    allowNull: true,
    defaultValue: null,
  },
  name: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null,
  },
  phone: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  email: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  date: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  pickup_location: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  drop_location: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  trip: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  dateend: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  timeend: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  created_at: {
    type: DataTypes.STRING(256),
    allowNull: false,
    defaultValue: '0',
  },
  oneway_distance: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  round_distance: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  select_car: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  booking_details: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  booking_details_round: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  booking_details_rental: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  name_email: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  offer: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
  },
  fullpay: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  partialpay: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  payment_success: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  payment_failed: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  payment_success_partial: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  query_status: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: 'New Query',
  },
  future_date: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  hatchback: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  sedan: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  ertiga: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
  innova: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'queries', // Table name as specified
  timestamps: false, // We assume you don't have `createdAt` or `updatedAt` columns
});

export default Visitor;
