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
/*
* Invocación de Procedimiento en Sql para poder insertar datos de las guias con sus tiempos
*/
const insertDataSpGreCmpTiemposPtoControl = async (grouping,conductor,guia,placa,ptoControl,entrada,salida,permanencia, query) => {
    try {
        let pool = await sql.connect(config);
        let datosJson = await pool.request()
            .input('Grouping', sql.Char,grouping)
            .input('Conductor', sql.Char,conductor)
            .input('Guia', sql.Char,guia)
            .input('Placa', sql.Char,placa)
            .input('ptoControl', sql.Char,ptoControl)
            .input('entrada', sql.Char,entrada)
            .input('salida', sql.Char,salida)
            .input('permanencia', sql.Char,permanencia)
            .execute(query);
        return datosJson.recordsets[0];

    } catch (error) {
        console.log(error);
    }
};
/*
* Invocación de Procedimiento en Sql para poder insertar datos de las guias con sus tiempos de pesca
*/
const insertDataSpGreCmpPescas = async (grouping,conductor,Placa,Guia,Inicio,Fin,Duracion,TiempoTotal,TiempoEntre,Granja,Cantidad, query) => {
    try {
        let pool = await sql.connect(config);
        let datosJson = await pool.request()
            .input('Grouping', sql.Char,grouping)
            .input('Conductor', sql.Char,conductor)
            .input('Placa', sql.Char,Placa)
            .input('Guia', sql.Char,Guia)
            .input('Inicio', sql.Char,Inicio)
            .input('Fin', sql.Char,Fin)
            .input('Duracion', sql.Char,Duracion)
            .input('TiempoTotal', sql.Char,TiempoTotal)
            .input('TiempoEntre', sql.Char,TiempoEntre)
            .input('Granja', sql.Char,Granja)
            .input('Cantidad', sql.Char,Cantidad)
            .execute(query);
        return datosJson.recordsets[0];

    } catch (error) {
        console.log(error);
    }
};

module.exports={
    consultarDatos,
    insertDataSpGreCmp,
    insertDataSpGreCmpTiemposPtoControl,
    insertDataSpGreCmpPescas
}