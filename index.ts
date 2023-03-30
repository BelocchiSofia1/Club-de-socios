import GestorClub from "./GestorClub"

let argentina = new GestorClub();
//argentina.agregarSocio();
//argentina.agregarSocio();
//argentina.agregarSocio();

console.log(argentina.data);

argentina.buscarPorNombre("Leonel")
argentina.buscarPorDeporte(5);
argentina.buscarPorApellido("Ginobilli");
argentina.buscarPorTelefono(1155234);

console.log(argentina.data);


 
//const fs = require("fs")
//console.log(fs.readFileSync("./socios.json"));
//console.log(JSON.parse(fs.readFileSync("./socios.json")),"parse-read");
//let json = JSON.parse(fs.readFileSync("./socios.json"));
//console.log(JSON.stringify(json ,null, 2), "stringify");

