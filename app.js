const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener cliema',
        demand: true
    }
}).argv;



const getInfo = async(direccion) => {

    let coordenadas = await lugar.getLugarLatLng(direccion);

    let resp = await clima.getClima(coordenadas.lat, coordenadas.lon);

    return resp;
}

getInfo(argv.direccion).then(resp => {
    console.log(`El clima de ${argv.direccion} es de ${resp} grados`);
}).catch(err => {
    console.log(`No se pudo obtener clima de ${argv.direccion}`, err);
});