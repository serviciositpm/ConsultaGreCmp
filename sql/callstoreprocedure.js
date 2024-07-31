const sql       =   require('mssql/msnodesqlv8');
const {config}  =   require('../config/configDb');
/*
 * Invocar Procedimiento Sql que devuelve los programas de pesca por día
 */
const consultarDatos = async (opcion, query) => {
    try {
        let pool = await sql.connect(config);
        let datosJson = await pool.request()
            .input('opcion', sql.Char, opcion)
            .execute(query);
        return datosJson.recordsets[0];

    } catch (error) {
        console.log(error);
    }
};
/*
* Invocación de Procedimiento en Sql para poder insertar datos de las guias con sus tiempos
*/
const insertDataSpGreCmp = async (grouping,conductor,guia,placa,desde,horasalida,hasta,horallegada,tiempoEntrayecto,tiempodetenido,tiempototal,velocidadmaxima,kmrecorridos, query) => {
    try {
        let pool = await sql.connect(config);
        let datosJson = await pool.request()
            .input('Grouping', sql.Char,grouping)
            .input('Conductor', sql.Char,conductor)
            .input('Guia', sql.Char,guia)
            .input('Placa', sql.Char,placa)
            .input('Desde', sql.Char,desde)
            .input('HoraSalida', sql.Char,horasalida)
            .input('Hasta', sql.Char,hasta)
            .input('HoraLlegada', sql.Char,horallegada)
            .input('TiempoEnTrayecto', sql.Char, tiempoEntrayecto)
            .input('TiempoDetenido', sql.Char, tiempodetenido)
            .input('TiempoTotal', sql.Char, tiempototal)
            .input('VelocidadMaxima', sql.Char, velocidadmaxima)
            .input('KMRecorridos', sql.Char, kmrecorridos)
            .execute(query);
        return datosJson.recordsets[0];

    } catch (error) {
        console.log(error);
    }
};

module.exports={
    consultarDatos,
    insertDataSpGreCmp
}