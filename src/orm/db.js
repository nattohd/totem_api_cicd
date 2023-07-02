import Sequelize from 'sequelize';


class DB{
  constructor(bd,usuario,clave, servidor){
     this.bd = bd;
     this.usuario = usuario;
     this.clave = clave;
     this.servidor = servidor;
     this.sequelize = new Sequelize(this.bd,this.usuario, this.clave,{
       host: this.servidor,
       dialect: 'mysql',
       pool:{
         max:5,
         min:0,
         acquire: 30000,
         idle: 10000
       },
       operatorsAliases: false
     });
  }
  test(){
    return this.sequelize.authenticate();
  }
  getSequelize(){
    return this.sequelize;
  }
}
let dataBase = new DB("totem", "root", "123456","bd");
export default dataBase;
