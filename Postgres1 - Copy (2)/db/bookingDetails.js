const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel');

const BookingDetails = sequelize.define('BookingDetails', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  discountAmount: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: false,
  },
  gst: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: false,
  },
  cartTotal: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: false,
  },
  route: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  busType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
BookingDetails.sync()
  .then(() => console.log('seatselected table synced'))
  .catch(err => console.error('Failed to sync seatselected table:', err));


module.exports = { BookingDetails };
