const axios = require('axios');

const getClima = async(lat, lon) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c990d24fef27b550bc3fc6f61eab0183&units=metric`);

    if (respuesta.data.main.length === 0) {
        throw new Error('Error de acceso a url');
    }
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}