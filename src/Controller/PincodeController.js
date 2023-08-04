import { response } from 'express';
import pool from '../Database/mysql';

export const getPincodesByStateDistrictTaluk = async (req, res = response) => {
  try {
    const { state, district, taluk } = req.query;

    const connection = await pool.getConnection();
    const [pincodes] = await connection.query(
      'SELECT pincode FROM pincodes ' +
        'WHERE taluk_id = (SELECT taluk_id FROM taluks WHERE taluk_name = ?) ' +
        'AND district_id = (SELECT district_id FROM districts WHERE district_name = ? AND state_id = (SELECT state_id FROM states WHERE state_name = ?))',
      [taluk, district, state]
    );
    connection.release();
    
    res.json(pincodes);
  } catch (e) {
    return res.status(500).json({
      resp: false,
      msg: e,
    });
  }
};
