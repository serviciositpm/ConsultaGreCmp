const axios = require('axios');

const datosJsonOntrack = async (programapesca)=>{
    let datosjson = ''
    try {
        /*
        * Consumo del Endpoint de Ontrack que nos devuelve los datos por programas de pesca  
        */
        const response = await axios.post('http://159.223.161.160:8020/api/guiaList', {
          input_data: programapesca
        });
        const   data        =   response.data;
                datosjson   =   data['Tiempo en ruta'].rows;
    
        // Manejar la respuesta JSON
        /* console.log('Desviaciones de ruta:', data['Desviaciones de ruta']);
        console.log('Paradas No Permitidas:', data['Paradas No Permitidas']);
        console.log('Tiempo en Puntos de Control:', data['Tiempo en Puntos de Control']);
        console.log('Tiempo en ruta:', data['Tiempo en ruta']); */
        console.log(datosjson)
    } catch (error) {
        console.error('Error al obtener los datos del endpoint:', error);
    }
    return datosjson;
}
module.exports={
    datosJsonOntrack
}