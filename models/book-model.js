'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id:{
      allowNull :false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    publised: DataTypes.DATE,
    author: [{
      first_name:  DataTypes.STRING,
      last_name:  DataTypes.STRING,
    }]
    
   
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};