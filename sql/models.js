const   {config}                =   require('../config/configDb')  ;
const   sql                     =   require('mssql/msnodesqlv8');
const   {insertDataSpGreCmp}    =   require('../sql/callstoreprocedure');

const insertDataOnTable = async (data,spname) => {
    try {
        await sql.connect(config);
        for (const row of data) {
            /*
            * Se Valida que vengan siempre datos de Programa de Pesca , Chofer y Nro de Guia de Remisión
            */
           /*  if (row[0]!='' && row[1]!='' && row[2]!=''){ */
            const datosinsertados   =   await insertDataSpGreCmp(row[0],row[1],row[2],row[3],row[4],row[5].t,row[6],row[7].t,row[8],row[9],row[10],row[11].t,row[12],spname);
            console.log(datosinsertados);
           /*  } */
        }

        /* return datosinsertados; */
    } catch (error) {
        /* console.error('Error durante la inserción de datos:', error); */
        return `Error durante la inserción de datos: ${error.message}`;
    } finally {
        await sql.close();
    }
}
module.exports = {
    insertDataOnTable
}