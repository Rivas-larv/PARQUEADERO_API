//Exportar archivo.js con dos parametros
module.exports = (sequelize, DataTypes) => {
  //Instanciar Vehicle usando define(Sequelize)
  const Vehicle = sequelize.define('Vehicle', {
      //Asignar valores del OBJ, "Vehiculo" y body
      plate: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      type: {
        type: DataTypes.ENUM('car', 'motorcycle'),
        allowNull: false
      },
      entryTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      exitTime: {
        type: DataTypes.DATE
      }
    });
  
    return Vehicle;
  };
  