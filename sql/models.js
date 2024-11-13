const   {config}                =   require('../config/configDb')  ;
const   sql                     =   require('mssql/msnodesqlv8');
const   {insertDataSpGreCmp}    =   require('../sql/callstoreprocedure');

const insertDataOnTable = async (tiempoEnRuta,spname) => {
    try {
        await sql.connect(config);
        /*
        * Obtengo los datos de el reporte que me interesa que viene en parametros
        */
        /* console.log(tiempoEnRuta) */
        for (const row of tiempoEnRuta) {
            const mainRow = row.main_row;
            const subRows = row.sub_rows;
            for (const subRow of subRows) {
                /*
                * Se Valida que vengan siempre datos de Programa de Pesca , Chofer , Nro de Guia de Remisión, placa y ruta Desde.
                * Se QUita  && subRow[1] != '' por que hay veces q no viene el chofer
                */
                if (subRow[0] != '' && subRow[2] != '' && subRow[3] != '' && subRow[4] != '') {
                    const datosinsertados = await insertDataSpGreCmp(subRow[0], subRow[1], subRow[2], subRow[3], subRow[4], subRow[5].t, subRow[6], subRow[7].t, subRow[8], subRow[9], subRow[10], subRow[11].t, subRow[12], spname);
                    //console.log(datosinsertados);
                }

            }
        }
    
    } catch (error) {
        console.error('Error durante la inserción de datos:', error);
        return `Error durante la inserción de datos: ${error.message}`;
    } finally {
        await sql.close();
    }
}
module.exports = {
    insertDataOnTable
}