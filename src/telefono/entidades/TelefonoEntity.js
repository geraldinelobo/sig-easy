import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connect.js'; // Importa la instancia de Sequelize configurada

const Telefono = sequelize.define('Telefono', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
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
Telefono.belongsTo(sequelize.models.Alumno, { foreignKey: 'alumnoId', onDelete: 'CASCADE' });

// Asociación con Profesor
Telefono.belongsTo(sequelize.models.Profesor, { foreignKey: 'profesorId', onDelete: 'CASCADE' });

sequelize.sync({ alter: true }).then(() => {
  console.log('Modelos sincronizados con la base de datos');
}).catch((error) => {
  console.error('Error al sincronizar modelos:', error);
});

export default Telefono;