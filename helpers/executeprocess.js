const   {consultarDatos}            =   require('../sql/callstoreprocedure');
const   {insertData}                =   require('../sql/models')
const   {datosJsonOntrack}          =   require('../functions/obtaindata');

/*
*   Permite Ejecutar el proceso para obtencion de datos e ingreso de información
*/
const processRecords = async () => {
    let msg = '';
    let parametro = '';
    try {
        const fecha_actual = new Date();
        const anio = fecha_actual.getFullYear();
        const mes = fecha_actual.getMonth() + 1;
        const dia = fecha_actual.getDate();
        const hora = fecha_actual.getHours();
        const minutos = fecha_actual.getMinutes();
        const segundos = fecha_actual.getMilliseconds();
        const datosFecha = anio.toString() + '-' + mes.toString().padStart(2, '0') + '-' + dia.toString().padStart(2, '0') + '-' + hora.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0') + ':' + segundos.toString().padStart(2, '0');
        console.log('Ejecucion Iniciada........... ', datosFecha);
        /*
         * Aqui se va  a obtener los datos de los programas de pesca
         */
        const query = 'Sp_Consulta_Programas_Pesca';
        parametro = 'PES'; //Opcion para Obtener los programas de pesca
        const datosprogramapesca = await consultarDatos(parametro, query);
        /*
         * Se Valida que vengan datos desde la bd
         */
        if (datosprogramapesca && datosprogramapesca.length > 0) {
            /*
             * Paso 1 : Recorro los datos por programa de Pesca para consultar 
             */
            for (const item of datosprogramapesca) {
                /*
                 * Paso 2 : Consulto a Ontrack por Programa de Pesca
                 */
                const jsonontrack   = await datosJsonOntrack(item.prgPesca);
                /*
                 * Paso 3 : Insertar los datos del objeto Tiempo en ruta 
                 */
                /* const createTable = await createTableIfNotExists() */
                const datinsert     =   await insertData(jsonontrack);
                console.log('Creacion Tabla',datinsert);

                //console.log(`Código: ${item.codmsg}, Programa de Pesca: ${item.prgPesca}`);
            }

        } else {
            msg = {
                'codmsg': 400,
                'typemessage': 'Error',
                'descriptionmessage': 'No se encontro datos Programa de Pesca'
            };
        }
        
        
        
        
        
       
        
    } catch (error) {
        console.error('Error al procesar los registros:', error);
    }
    return msg;
}
module.exports={
    processRecords
}