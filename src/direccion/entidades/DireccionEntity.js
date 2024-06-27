import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connect.js'; // Importa la instancia de Sequelize configurada

const Direccion = sequelize.define('Direccion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  calle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING
  },
  alumnoId: {
    type: DataTypes.INTEGER,
    allowNull: true, // Permite valores nulos
  },
  profesorId: {
    type: DataTypes.INTEGER,
    allowNull: true, // Permite valores nulos
  },
});

// Asociación con Alumno
Direccion.belongsTo(sequelize.models.Alumno, { foreignKey: 'alumnoId', onDelete: 'CASCADE' });

// Asociación con Profesor
Direccion.belongsTo(sequelize.models.Profesor, { foreignKey: 'profesorId', onDelete: 'CASCADE' });

sequelize.sync({ alter: true }).then(() => {
  console.log('Modelos sincronizados con la base de datos');
}).catch((error) => {
  console.error('Error al sincronizar modelos:', error);
});

export default Direccion;