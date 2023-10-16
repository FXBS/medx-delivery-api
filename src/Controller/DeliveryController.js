import { response } from 'express';
import pool from '../Database/mysql.js';

export const getAllDelivery = async ( req, res = response ) => {

    try {

        let deliverydb = await pool.query(`CALL SP_ALL_DELIVERYS();`);

        res.json({
            resp: true,
            msg : 'Get All Delivery',
            delivery: deliverydb[0] 
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}


export const getAllDeliveryAgentsForPartner = async ( req, res = response ) => {

    try {

          const { partnerId } = req.query;
      console.log('PartnerId :', partnerId);

      

        const deliverydb = await pool.query(`CALL SP_ALL_DELIVERY_AGENTS_FOR_PARTNER(?);`,[partnerId]);

        
              console.log('Query Result:', deliverydb);

        // Check the structure of the queryResult and log individual rows if needed
        if (deliverydb && deliverydb[0] && deliverydb[0][0]) {
        const rows = deliverydb[0][0];
        console.log('Query Rows:', rows);
        }


        res.json({
            resp: true,
            msg : 'Get All Delivery Agents For a Partner',
            delivery: deliverydb[0] 
        });
        
    } catch (e) {

        console.error('Error:', e); // Log the error for debugging
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}


export const getAllDeliveryPartner = async ( req, res = response ) => {

    try {

        let deliverydb = await pool.query(`CALL SP_ALL_DELIVERY_PARTNER();`);

        res.json({
            resp: true,
            msg : 'Get All Delivery Partner',
            delivery: deliverydb[0] 
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

