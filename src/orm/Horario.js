import Sequelize from 'sequelize';
import db from "./db";

const Horario = db.getSequelize().define("horarios",{
  nro_lista:{
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  fecha_clase:{
    type: Sequelize.DATEONLY
  },
  rut_docente:{
    type: Sequelize.STRING
  },
  nombre_docente:{
    type: Sequelize.STRING
  },
  mail_docente:{
    type: Sequelize.STRING
  },
  programa_estudio:{
    type: Sequelize.STRING
  },
  codigo_asignatura:{
    type: Sequelize.STRING
  },
  nombre_asignatura:{
    type: Sequelize.STRING
  },
  seccion:{
    type: Sequelize.STRING
  },
  jornada:{
    type: Sequelize.STRING
  },
  sala:{
    type: Sequelize.STRING
  },
  dia:{
    type: Sequelize.STRING
  },
  modulo_inicio:{
    type: Sequelize.INTEGER
  },
  modulo_termino:{
    type: Sequelize.INTEGER
  }
});
export default Horario;
