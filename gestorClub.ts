import {Deporte, Jugador} from "./Jugador"

const fs = require("fs")
const readlineSync = require("readline-sync")
export default class GestorClub{
    constructor(){
        fs.writeFileSync("socios.json", "[]")
    }

    //read() {return fs.readFileSync("./socios.json") }
    data() { return JSON.parse(fs.readFileSync("./socios.json"))}

    agregarSocio(){
        var nombre = readlineSync.question("Escriba el nombre del socio:").toLowerCase();
        var apellido = readlineSync.question("Escriba el apellido del socio:").toLowerCase();
        var fechaNacimiento = readlineSync.question("Escriba la fecha de nacimiento en formato YYYY/MM/DD:");
        var documento = readlineSync.question("Escriba el documento del socio: ");
        var telefono = readlineSync.question("Escriba el telefono: ");

        var arrayDeportes=["futbol", "basket", "zumba", "voley", "natacion", "gim"] 
       
        var deporte = readlineSync.keyInSelect(arrayDeportes,"seleccione deporte del socio");
    
        let nuevoSocio = new Jugador (nombre, apellido, fechaNacimiento, documento, telefono, deporte)

        //Agrego los socios existentes y el nuevo
        let socios = [...this.data(), nuevoSocio]
        //Escribo en mi archivo json todos los socios
       // fs.writefileSync("socios.json", socios)
        fs.writeFileSync("socios.json", JSON.stringify(socios, null, 2));
        }

        buscarPorNombre(nombre:string){
            let nombreSocio: string = this.data().find((socio: {nombre:string}) => socio.nombre === nombre.toLowerCase())
            console.log(nombreSocio);
            return nombreSocio;
        }

        buscarPorApellido(apellido:string){
            let apellidoSocio: string = this.data().find((socio: {apellido:string}) => socio.apellido === apellido.toLowerCase())
            console.log(apellidoSocio);
            return apellidoSocio;
        }

        buscarPorDeporte(deporte: number){
            let resultDeporte: number = this.data().find((socio: {deporte:number}) => socio.deporte === deporte)
            console.log(resultDeporte);
            return resultDeporte;
        }

        buscarPorTelefono(telefono: number){
            let numTelefono : number = this.data().find((socio: {telefono:number}) => socio.telefono === telefono)
            console.log(numTelefono);
            return numTelefono;
        }
}