const axios = require('axios');

const datosJsonOntrack = async (programapesca)=>{
    let datosjson ;
    try {
        /*
        * Consumo del Endpoint de Ontrack que nos devuelve los datos por programas de pesca  
        */
        const response = await axios.post('http://159.223.161.160:8020/api/guiaList', {
          input_data: programapesca
        });
        const   data        =   response.data;
        if (data.error) {
            datosjson   =   {};
        }else{
            datosjson   =   data['Tiempo en ruta'].rows;
        }
    /*     console.log(datosjson) */
    } catch (error) {
        /* console.error('Error al obtener los datos del endpoint:', error); */
        datosjson   =   {};
    }
    return datosjson;
}
module.exports={
    datosJsonOntrack
}