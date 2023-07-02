import Sequelize from 'sequelize';
import db from "./db";

const Docente = db.getSequelize().define("docentes",{
  nombre:{
    type: Sequelize.STRING,
    primaryKey: true
  }
});
export default Docente;
