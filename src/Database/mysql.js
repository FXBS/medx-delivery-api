import mysql from 'mysql';
import { promisify } from 'util';

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: "",
//     database: 'frave_food'  
   
// });

const pool = mysql.createPool({
    host: 'medxlogisticserver2.mysql.database.azure.com',
    user: 'azurelogistic',
    password: "medx@2023",
    database: 'medx_delivery',
    // SslCa: 'DigiCertGlobalRootCA.crt.pem',
    ssl: {
        rejectUnauthorized: false, // Set this to true to perform SSL certificate validation
    },
    // MYSQLI_CLIENT_SSL  
   
});


pool.getConnection((err, connection) => {

    if( err ){
        if( err.code === 'PROTOCOL_CONNECTION_LOST' ) console.log('DATABASE CONNECTION WAS CLOSED');
        if( err.code === 'ER_CON_COUNT_ERROR' ) console.log('DATABASE HAS TO MANY CONNECTIONS');
        if( err.code === 'ECONNREFUSED' ) console.log('DATABASE CONNECTION WAS REFUSED');
        throw err;
    }

    if( connection ) connection.release();

    console.log('DataBase is connected to '+ process.env.DB_DATABASE);
    return;
});

pool.query = promisify( pool.query );


export default pool;