'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model
    
  class Masterabsen extends Model{

  }


  Masterabsen.init({
    username: DataTypes.STRING,
    image: DataTypes.STRING,
    location: DataTypes.STRING,
    absenDay: DataTypes.STRING
  }, {sequelize});
  Masterabsen.associate = function(models) {
    // associations can be defined here
    // Masterabsen.belongsTo(models.User,{ foreignKey: 'UserId'})
    // Masterabsen.belongsTo(models.Product,{ foreignKey: 'ProductId'})
  };
  return Masterabsen;
};