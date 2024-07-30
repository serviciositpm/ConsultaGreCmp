const   {consultarDatos} =    require('../sql/callstoreprocedure');


/*
*   Permite Ejecutar el proceso para obtencion de datos e ingreso de información
*/
const processRecords = async () => {
    let msg         =   ''; 
    let parametro   =   '';
    try {
        const fecha_actual                =   new Date();
        const anio                        =   fecha_actual.getFullYear();
        const mes                         =   fecha_actual.getMonth()+1;
        const dia                         =   fecha_actual.getDate();
        const hora                        =   fecha_actual.getHours();
        const minutos                     =   fecha_actual.getMinutes();
        const segundos                    =   fecha_actual.getMilliseconds();
        const datosFecha                  =   anio.toString()+'-'+mes.toString().padStart(2,'0')+'-'+dia.toString().padStart(2,'0')+'-'+hora.toString().padStart(2,'0')+':'+minutos.toString().padStart(2,'0')+':'+segundos.toString().padStart(2,'0');
        console.log('Ejecucion Iniciada........... ',datosFecha);
        /*
         * Aqui se va  a obtener los datos de los programas de pesca
        */
        const   query                     =   'Sp_Consulta_Programas_Pesca';
                parametro                 =   'PES'; //Opcion para Obtener los programas de pesca
        const   datosprogramapesca        =   await consultarDatos(parametro,query);
        console.log(datosprogramapesca);
        const   codmsg                    =   datosprogramapesca[0].codmsg;
        const   nropesca                  =   datosprogramapesca[0].prgPesca;
        /*
        * Se Valida que vengan datos desde la bd
        */
        if(codmsg==200){

        }else{
            msg = {'codmsg':400,'typemessage':'Error' ,'descriptionmessage':'No se encontro datos Programa de Pesca'};
        }
    } catch (error) {
        console.error('Error al procesar los registros:', error);
    }
    return msg;
}
module.exports={
    processRecords
}