import { response } from 'express';
import bcrypt from 'bcrypt';
import pool from '../Database/mysql.js';


export const registerClient = async ( req, res = response ) => {

    const { firstname, lastname, phone, email, password, notification_token } = req.body;
    const imagePath = req.file.filename;

    try {
        
        let salt = bcrypt.genSaltSync();
        const pass = bcrypt.hashSync( password, salt );

        const validatedEmail = await pool.query('SELECT email FROM users WHERE email = ?', [email]);

        if( validatedEmail.length  > 0 ){
            return res.status(401).json({
                resp: false,
                msg : 'Email already exists'
            });
        }

        await pool.query(`CALL SP_REGISTER(?,?,?,?,?,?,?,?);`, [firstname, lastname, phone, imagePath, email, pass, 2, notification_token]);

        res.json({
            resp: true,
            msg : 'Client successfully registered',
        });



    } catch (err) {
        return res.status(500).json({
            resp: false,
            msg : err
        });
    }

}


export const registerDelivery = async (req, res = response) => {

    try {

        const { firstname, lastname, phone, email, password, notification_token } = req.body;
        const imagePath = req.file.filename;

        const validatedEmail = await pool.query('SELECT email FROM users WHERE email = ?', [email]);

        if( validatedEmail.length  > 0 ){
            return res.status(401).json({
                resp: false,
                msg : 'Email already exists'
            });
        }

        let salt = bcrypt.genSaltSync();
        const pass = bcrypt.hashSync( password, salt );

        await pool.query(`CALL SP_REGISTER(?,?,?,?,?,?,?,?);`, [firstname, lastname, phone, imagePath, email, pass, 3, notification_token]);

        res.json({
            resp: true,
            msg : 'Devlivery successfully registered',
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }


}

export const registerDeliveryPartner = async (req, res = response) => {

    try {

        const { partnerId,firstname, lastname,selectedState,selectedDistrict,selectedPincodes, phone, email,  password } = req.body;
        const imagePath = req.file.filename;

        console.log('All Details:',partnerId, firstname, lastname,selectedState,selectedDistrict,selectedPincodes, phone, email,  password,imagePath);
        console.log('all details :', selectedState,selectedDistrict,selectedPincodes);
        
        
        const validatedEmail = await pool.query('SELECT email FROM users WHERE email = ?', [email]);
        
        if( validatedEmail.length  > 0 ){
                return res.status(401).json({
                        resp: false,
                        msg : 'Email already exists'
                    });
                }
                
                let salt = bcrypt.genSaltSync();
                const pass = bcrypt.hashSync( password, salt );
                console.log('password:', pass);

        const queryResult = await pool.query(`CALL SP_REGISTER_PARTNER(?,?,?,?,?,?,?,?,?,?,?);`, [partnerId, firstname, lastname, phone, selectedState,selectedDistrict,selectedPincodes, imagePath, email, pass, 4]);



        console.log('Query Result:', queryResult);

        // Check the structure of the queryResult and log individual rows if needed
        if (queryResult && queryResult[0] && queryResult[0][0]) {
        const rows = queryResult[0][0];
        console.log('Query Rows:', rows);
        }


        res.json({
            resp: true,
            msg : 'Devlivery Partner successfully registered',
        });

        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }
    console.log('Query error :', response.json);


}