import { response } from 'express';
import bcrypt from 'bcrypt';
import pool from '../Database/mysql.js';
import { generateJsonWebToken } from '../Lib/JwToken.js';


export const PartnerController = async (req, res = response) => {
    try {
      const partnerId = req.query.partnerId; // Assuming the partnerId is passed as a query parameter
  
      // Execute a SQL query to fetch partner details from the medx_delivery_partner table
      const query = `
        SELECT partner_first_name, partner_last_name, partner_emailId, partner_phone_no,selected_state, selected_district, selected_pincodes
        FROM medx_delivery_partner
        WHERE partner_id = ?`;
  
      const [partnerDetails] = await pool.query(query, [partnerId]);
  
      if (partnerDetails.length === 0) {
        // No partner found with the given partner ID
        return res.status(404).json({ error: 'Partner not found' });
      }
  
      // Partner found, generate a JWT token
      const token = generateJsonWebToken(partnerId); // Replace with your token generation logic
  
      // Return partner details and the token as a JSON response
      res.json( partnerDetails);

    //   console.log(partnerDetails);
      console.log( partnerDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };