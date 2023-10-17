import { response } from 'express';
import pool from '../Database/mysql.js';


export const addNewOrders = async (req, res = response ) => {

    try {

        const { uidAddress, total, typePayment,  products } = req.body;

        const addressData = await pool.query('SELECT Latitude, Longitude FROM addresses WHERE id = ?', [uidAddress]);

        if (addressData.length === 0) {
            return res.status(400).json({
                resp: false,
                msg : 'Invalid address ID'
            });
        }

        const latitude = addressData[0].Latitude;
        const longitude = addressData[0].Longitude;

        // Log data before inserting into the orders table
        console.log('Data before inserting into orders table:', {
            client_id: req.uid,
            address_id: uidAddress,
            latitude,
            longitude,
            amount: total,
            pay_type: typePayment
        });

        const orderdb = await pool.query('INSERT INTO orders (client_id, address_id, latitude, longitude, amount, pay_type) VALUES (?,?,?,?,?,?)', [ req.uid, uidAddress,latitude, longitude, total, typePayment ]);

        products.forEach(o => {
             pool.query('INSERT INTO orderDetails (order_id, product_id, quantity, price) VALUES (?,?,?,?)', [ orderdb.insertId, o.uidProduct, o.quantity, o.quantity * o.price ]);
        });

        res.json({
            resp: true,
            msg : 'New Order added successfully'
        });

    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}


export const getOrdersByStatus = async (req, res = response ) => {

    try {

        const ordersdb = await pool.query(`CALL SP_ALL_ORDERS_STATUS(?);`, [ req.params.statusOrder ]);

        // res.json({
        //     resp: true,
        //     msg : 'Orders by ' + req.params.statusOrder,
        //     ordersResponse : ordersdb[0]
        // });


        const jsonResponse = {
      resp: true,
      msg: 'Orders by ' + req.params.statusOrder,
      ordersResponse: ordersdb[0],
    };

    console.log('JSON Response for order by status :', jsonResponse); // Log the JSON response

    res.json(jsonResponse);
        
    } catch (e) {

         console.error('Error:', e); // Log the error


        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const getDetailsOrderById = async ( req, res = response ) => {

    try {

        const detailOrderdb = await pool.query(`CALL SP_ORDER_DETAILS(?);`, [ req.params.idOrderDetails ]);

        res.json({
            resp: true,
            msg : 'Order details by ' + req.params.idOrderDetails,
            detailsOrder: detailOrderdb[0]
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const updateStatusToDispatched = async ( req, res = response ) => {

    try {

        const { idDelivery, idOrder } = req.body;

        await pool.query('UPDATE orders SET status = ?, delivery_id = ? WHERE id = ?', [ 'DISPATCHED TO PARTNER', idDelivery, idOrder ]);

        res.json({
            resp: true,
            msg : 'Order DISPATCHED'
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}


export const updateStatusToAgent = async ( req, res = response ) => {

    try {

        const { idDelivery, idOrder } = req.body;

        await pool.query('UPDATE orders SET status = ?, delivery_id = ? WHERE id = ?', [ 'ASSIGNED TO AGENT', idDelivery, idOrder ]);

        res.json({
            resp: true,
            msg : 'Order DISPATCHED TO AGENT'
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}



export const getOrdersByDelivery = async ( req, res = response ) => {

    try {

        const ordersDeliverydb = await pool.query(`CALL SP_ORDERS_BY_DELIVERY(?,?);`, [ req.uid, req.params.statusOrder ]);

        res.json({
            resp: true,
            msg : 'All Orders By Delivery',
            ordersResponse : ordersDeliverydb[0]
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const updateStatusToOntheWay = async ( req, res = response ) => {

    try {

        const { latitude, longitude } = req.body;

        await pool.query('UPDATE orders SET status = ?, latitude = ?, longitude = ? WHERE id = ?', ['ON WAY', latitude, longitude, req.params.idOrder ]);

        res.json({
            resp: true,
            msg : 'ON WAY'
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}

export const updateStatusToDelivered = async ( req, res = response ) => {

    try {

        await pool.query('UPDATE orders SET status = ? WHERE id = ?', ['DELIVERED', req.params.idOrder ]);

        res.json({
            resp: true,
            msg : 'ORDER DELIVERED'
        });
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            msg : e
        });
    }

}