//importo Sequelize
import Sequelize from 'sequelize';
//configuro el dotenv
import dotenv from 'dotenv';
dotenv.config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres' /*mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export default sequelize;

