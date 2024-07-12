import { DataTypes } from 'sequelize';
import sequelize from '../../../db/connect.js'; // Importa la instancia de Sequelize configurada

const Clase = sequelize.define('Clase', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATEONLY, 
    allowNull: false
  },
  temario: {
    type: DataTypes.TEXT
  },
  profesorId: {
    type: DataTypes.INTEGER,
    allowNull: true, // Permite valores nulos
  },
  nivelId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
});

// Asociación con Profesor
Clase.belongsTo(sequelize.models.Profesor, { foreignKey: 'profesorId', onDelete: 'CASCADE' });

// Asociación con Nivel
Clase.belongsTo(sequelize.models.Nivel, { foreignKey: 'nivelId', onDelete: 'CASCADE' });

sequelize.sync({ alter: true }).then(() => {
  console.log('Modelos sincronizados con la base de datos');
}).catch((error) => {
  console.error('Error al sincronizar modelos:', error);
});

export default Direccion;