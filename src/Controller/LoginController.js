import { response } from 'express';
import bcrypt from 'bcrypt';
import pool from '../Database/mysql.js';
import { generateJsonWebToken } from '../Lib/JwToken.js';


export const loginController = async ( req, res = response ) => {

    try {

        const { email, password } = req.body;
        console.log(email,password);
        // let salt = bcrypt.genSaltSync();
        // const pass = bcrypt.hashSync( password, salt );
        // console.log(pass);
        const validatedEmail = await pool.query('SELECT email FROM users WHERE email = ?', [ email ]);

        console.log("email validation ",validatedEmail);

        console.log("email validation length ",validatedEmail.length);

        if( validatedEmail.length == 0 ){
            return res.status(400).json({
                resp: false,
                msg : 'Wrong email Credentials'
            });
            
        }

        // const userdb = await pool.query(`CALL SP_LOGIN(?);`, [email]);
        
        const emailParameter = "_utf8mb4'" + email + "' COLLATE utf8mb4_general_ci";
        const userdb = await pool.query(`CALL SP_LOGIN(${emailParameter});`);
        
            try {
        const user = userdb[0][0];
        console.log("User DB details:", userdb); 
        console.log("User details:", user); 
        console.log("User Password:", user['passwordd']);
        // rest of the code
        } catch (error) {
        console.error("Error executing database query:", error);
        return res.status(500).json({
            resp: false,
            msg: "Internal Server Error",
        });
        }


    //   const userdb = await pool.query(`SELECT p.uid, p.firstName, p.lastName, p.image, u.email, u.passwordd, u.rol_id, u.notification_token FROM person p
    //   INNER JOIN users u ON p.uid = u.persona_id
    //   WHERE u.email = ? AND p.state = TRUE;`, [email]);

    

        const user = userdb[0][0];
        console.log("User DB details:", userdb); 
        console.log("User details:", user); 
        console.log("User Password:", user['passwordd']); 
        
        if( !await bcrypt.compareSync( password, user['passwordd'] )){
                return res.status(401).json({
                        resp: false,
                        msg : 'Wrong Credentials'
                    }); 
                }
                // const user = validatedEmail[0];
        //         console.log(user.passwordd);
        // if (password !== user.passwordd) {
        //     return res.status(401).json({
        //       resp: false,
        //       msg: 'Wrong password Credentials',
        //     });
        //   }

        let token = await generateJsonWebToken( user.uid );

        res.json({
            resp: true,
            msg : 'Welcome to Med-X Delivery',
            user: {
                uid: user.uid,
                partnerId:user.partnerId,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                selectedState: user.selectedState,
                selectedDistrict: user.selectedDistrict,
                selectedPincodes: user.selectedPincodes,
                image: user.image,
                email: user.email,
                rol_id: user.rol_id,
                notification_token: user.notification_token
            },
            token
        });


    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }


}


export const renewTokenLogin = async ( req, res = response ) => {

    try {

        const token = await generateJsonWebToken( req.uid );

        const userdb = await pool.query(`CALL SP_RENEWTOKENLOGIN(?);`, [ req.uid ]);

        const user = userdb[0][0];
        
        res.json({
            resp: true,
            msg : 'Welcome to Med-X Delivery',
            user: {
                uid: user.uid,
                partnerId:user.partnerId,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                selectedState: user.selectedState,
                selectedDistrict: user.selectedDistrict,
                selectedPincodes: user.selectedPincodes,
                image: user.image,
                phone: user.phone,
                email: user.email,
                rol_id: user.rol_id,
                notification_token: user.notification_token
            },
            token
        });
        
    } catch (e) {
        res.status(500).json({
            resp: false,
            msg : e
        });
    }

}