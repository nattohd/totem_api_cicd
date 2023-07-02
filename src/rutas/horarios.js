import Horario from "../orm/Horario";

const obtenerHorarios = function(req, res){
    let nombre = req.query.nombre;
    let fecha = req.query.fecha;
    console.log(fecha);
    if(nombre != undefined){
      Horario.findAll({
        attributes: [
            "nro_lista"
            , 'fecha_clase'
            , 'rut_docente'
            , 'nombre_docente'
            , 'mail_docente'
            , 'programa_estudio'
            , 'codigo_asignatura'
            , 'nombre_asignatura'
            , 'seccion'
            , 'jornada'
            , 'sala'
            , 'dia'
            , 'modulo_inicio'
            , 'modulo_termino']
            , where: {
              nombre_docente: nombre,
              fecha_clase: fecha
            }
          }).then(horarios =>{
            res.send(JSON.stringify(horarios));
          });
  }else {
    Horario.findAll({
      attributes: [
          "nro_lista"
          , 'fecha_clase'
          , 'rut_docente'
          , 'nombre_docente'
          , 'mail_docente'
          , 'programa_estudio'
          , 'codigo_asignatura'
          , 'nombre_asignatura'
          , 'seccion'
          , 'jornada'
          , 'sala'
          , 'dia'
          , 'modulo_inicio'
          , 'modulo_termino']
          , where: {
            fecha_clase: fecha
          }
        }).then(horarios =>{
          res.send(JSON.stringify(horarios));
        });
  }
};

export default obtenerHorarios;
