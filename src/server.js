import cors from "cors";
import bodyParser from 'body-parser';
import path from  "path";
import db from "./orm/db";
import rutaDocentes from "./rutas/docentes";
import rutaHorarios from "./rutas/horarios";
let express = require("express");
let app = express();
app.use(cors({origin:"*"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get("/obtener_docentes", rutaDocentes);
app.get("/obtener_horarios", rutaHorarios);
app.listen(55000);

console.log("Running at Port 55000");
