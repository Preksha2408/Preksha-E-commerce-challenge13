const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    // define columns

    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      
    },

    category_name: {
      type: DataTypes.STRING,
    
    },


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
