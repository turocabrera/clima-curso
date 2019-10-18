const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,

        headers: { 'x-rapidapi-key': '4be1364c24msh527c6d9dd2925c8p1ef6b7jsnca3272c5fabc' }
    });

    const respuesta = await instance.get();
    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLng
}