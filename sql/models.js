const   sql                     =   require('mssql/msnodesqlv8');
const   {insertDataSpGreCmp}    =   require('../helpers/executeprocess');

const insertDataOnTable = async (data) => {
    try {
        await sql.connect(configPrueba);

        for (const row of data) {
            const datosinsertados   =   await insertDataSpGreCmp(row[0],row[1],row[2],row[3],row[4],row[5].t,row[6],row[7].t,row[8],row[9],row[10],row[11].t,row[12]);
           
        }

        /* return 'Datos insertados satisfactoriamente mediante el procedimiento almacenado'; */
    } catch (error) {
        console.error('Error durante la inserción de datos:', error);
        return `Error durante la inserción de datos: ${error.message}`;
    } finally {
        await sql.close();
    }
}
module.exports = {
    createTableIfNotExists,
    insertData
}