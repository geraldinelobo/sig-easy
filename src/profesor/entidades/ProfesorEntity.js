import  { DataTypes }  from "sequelize";
import sequelize from "../../../db/connect.js";

const Profesor = sequelize.define('Profesor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dni: {
    type: DataTypes.INTEGER,
    unique: true
    },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
   email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Asegura que cada email sea único en la base de datos
  }
});

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
sequelize.sync()
  .then(() => {
    console.log('La tabla de Profesores ha sido creada.');
  })
  .catch((error) => {
    console.error('Error al crear la tabla de Profesores:', error);
  });

  
export default Profesor;
