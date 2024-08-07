const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init(
  
  {
    // define columns
    id: {
      type:  DataTypes.INTEGER, //Set the data type to integer
      autoIncrement: true,    // Disallows NULL values 
      primaryKey: true,       // Set as the primary key
      allowNull: false,       // Automatically increment the value for each new record 
    },
  
  
    tag_name: {
      type: DataTypes.STRING,
    },

  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
