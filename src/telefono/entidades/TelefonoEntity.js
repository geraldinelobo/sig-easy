import  { DataTypes }  from "sequelize";
import sequelize from "../../../db/connect.js";

const Telefono = sequelize.define('Telefono', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numero: {
    type: DataTypes.INTEGER,
    unique: true
    }
});

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
sequelize.sync()
  .then(() => {
    console.log('La tabla de Telefonos ha sido creada.');
  })
  .catch((error) => {
    console.error('Error al crear la tabla de Telefonos:', error);
  });

  
export default Telefono;