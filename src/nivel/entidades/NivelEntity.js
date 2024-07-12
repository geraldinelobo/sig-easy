import {DataTypes} from "sequelize";
import sequelize from "../../../db/connect.js";
import { text } from "express";

const Nivel = sequelize.define('Nivel', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.TEXT
    },
    programa: {
      type: DataTypes.TEXT
    },
    cursoId: {
        type: DataTypes.INTEGER,
        allowNull: true, // Permite valores nulos
      },
  });
  
  Nivel.belongsTo(sequelize.models.Curso, { foreignKey: 'cursoId', onDelete: 'CASCADE' });

  // Sincronizar el modelo con la base de datos (crear la tabla si no existe)
  sequelize.sync()
    .then(() => {
      console.log('La tabla de Nivel ha sido creada.');
    })
    .catch((error) => {
      console.error('Error al crear la tabla de Nivel:', error);
    });
  
  export default Curso;