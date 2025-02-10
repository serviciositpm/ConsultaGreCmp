const   {config}                =   require('../config/configDb')  ;
const   sql                     =   require('mssql/msnodesqlv8');
const   {
            insertDataSpGreCmp, 
            insertDataSpGreCmpTiemposPtoControl,
            insertDataSpGreCmpPescas
        }                       =   require('../sql/callstoreprocedure');

const insertDataOnTable = async (objetoJsonInTrack,spname) => {
    try {
        await sql.connect(config);
        /*
        * Obtengo los datos de el reporte que me interesa que viene en parametros
        */
        /* console.log(tiempoEnRuta) */
        for (const row of objetoJsonInTrack) {
            const mainRow = row.main_row;
            const subRows = row.sub_rows;
            for (const subRow of subRows) {
                /*
                * Se Valida que vengan siempre datos de Programa de Pesca : Grupoing(Dispostivo) = subRow[0] ,Guia = subRow[2], Geocerca = subRow[4]
                */
                if (subRow[0] != '' && subRow[2] != '' && subRow[4] != '') {
                    //const datosinsertados = await insertDataSpGreCmp(subRow[0], subRow[1], subRow[2], subRow[3], subRow[4], subRow[5].t, subRow[6], subRow[7].t, subRow[8], subRow[9], subRow[10], subRow[11].t, subRow[12], spname);
                    const datosinsertados = await insertDataSpGreCmpTiemposPtoControl(subRow[0], subRow[1], subRow[2], subRow[3], subRow[4], subRow[5].t, subRow[6].t, subRow[7], spname);

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
const insertDataOnTablePesca = async (objetoJsonInTrack,spname) => {
    try {
        await sql.connect(config);
        /*
        * Obtengo los datos de el reporte que me interesa que viene en parametros
        */
        /* console.log(tiempoEnRuta) */
        for (const row of objetoJsonInTrack) {
            const mainRow = row.main_row;
            const subRows = row.sub_rows;
            for (const subRow of subRows) {
                /*
                * Se Valida que vengan siempre datos de Programa de Pesca : Grupoing(Dispostivo) = subRow[0] ,Guia = subRow[2], Geocerca = subRow[4]
                */
                if (subRow[0] != '' && subRow[3] != '' && subRow[4].t != '' && subRow[5].t != '' && subRow[9].t.startsWith('ZP-')) {
                    //const datosinsertados = await insertDataSpGreCmp(subRow[0], subRow[1], subRow[2], subRow[3], subRow[4], subRow[5].t, subRow[6], subRow[7].t, subRow[8], subRow[9], subRow[10], subRow[11].t, subRow[12], spname);
                    const datosinsertados = await insertDataSpGreCmpPescas(subRow[0], subRow[1], subRow[2], subRow[3], subRow[4].t, subRow[5].t, subRow[6], subRow[7],subRow[8],subRow[9].t,subRow[10], spname);

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
    insertDataOnTable,
    insertDataOnTablePesca
}