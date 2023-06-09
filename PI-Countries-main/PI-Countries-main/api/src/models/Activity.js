const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type:DataTypes.INTEGER,
      //defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: false,
      },

    duration: {
        type: DataTypes.NUMBER,
        validator: {
          min: 0,
          max:24,
        }
      },

    season: {
        type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),
        allowNull: false,
      },
   
    
  });
};