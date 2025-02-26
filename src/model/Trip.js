import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/connectDB';
// Ensure sequelize is initialized properly

if (!sequelize) {
  throw new Error("Sequelize instance is undefined. Ensure the database connection is initialized properly.");
}

const Trip = sequelize.define('Trip', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    user_pickup: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    user_drop: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    time: {
        type: DataTypes.STRING(256),
        allowNull: true,
    },
    hours: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    user_trip_type: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    bookid: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    distance: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    car: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    baseAmount: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '0',
    },
    driver_bhata: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    nightcharges: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    gst: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    service_charge: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    partial: {
        type: DataTypes.STRING(11),
        allowNull: false,
        defaultValue: '0',
    },
    offer: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    offerpartial: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    offeramount: {
        type: DataTypes.STRING(11),
        allowNull: true,
    },
    offerpercent: {
        type: DataTypes.STRING(3),
        allowNull: true,
        defaultValue: '0',
    },
    txnid: {
        type: DataTypes.STRING(256),
        allowNull: true,
    },
    paid: {
        type: DataTypes.STRING(11),
        allowNull: false,
        defaultValue: '0',
    },
    remaining: {
        type: DataTypes.STRING(11),
        allowNull: false,
        defaultValue: '0',
    },
    payment: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    dateend: {
        type: DataTypes.STRING(12),
        allowNull: true,
    },
    timeend: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    bookingtype: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    userid: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    vendorid: {
        type: DataTypes.STRING(256),
        allowNull: true,
        defaultValue: '0',
    },
    driverid: {
        type: DataTypes.STRING(256),
        allowNull: false,
        defaultValue: '0',
    },
    cabid: {
        type: DataTypes.STRING(11),
        allowNull: false,
        defaultValue: '0',
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.STRING(256),
        allowNull: false,
        defaultValue: '0',
    },
    b2bid: {
        type: DataTypes.STRING(11),
        allowNull: false,
        defaultValue: '0',
    },
    garage_out: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    trip_started: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    cancelled_trip: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    odometer_start: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    odometer_end: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    penalty: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    booking_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    from_location: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    return_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    to_location: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    trip_type: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    base_amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'user_booking',
    timestamps: false,
});

export default Trip;
