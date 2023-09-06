import { response } from 'express';
import pool from '../Database/mysql.js';

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

export const getAllStates = async (req, res = response) => {
    try {
      
      const states = await pool.query('SELECT state_name FROM states');
      console.log('States:', states);
      res.json(states);
    } catch (e) {
          console.error('Error fetching states:', e);
      return res.status(500).json({
        resp: false,
        msg: e,
      });
    }
  };

  export const getDistrictsByState = async (req, res = response) => {
    try {
      console.log('Request URL:', req.url);
      const { state } = req.query;
      console.log('Selected State:', state); 
      
      const districts = await pool.query(
        'SELECT district_name FROM districts ' +
          'WHERE state_id = (SELECT state_id FROM states WHERE state_name = ?)',
        [state]
      );
      
      console.log('Districts:', districts);
      res.json(districts);
    } catch (e) {
      return res.status(500).json({
        resp: false,
        msg: e,
      });
    }
  };

  export const getTaluksByDistrict = async (req, res = response) => {
    try {
      const { district } = req.query;
  
      
      const taluks = await pool.query(
        'SELECT taluk_name FROM taluks ' +
          'WHERE district_id = (SELECT district_id FROM districts WHERE district_name = ?)',
        [district]
      );
      
      
      res.json(taluks);
    } catch (e) {
      return res.status(500).json({
        resp: false,
        msg: e,
      });
    }
  };


  export const getPincodesByTaluk = async (req, res = response) => {
  try {
    const { taluk } = req.query;

    const pincodes = await pool.query(
      'SELECT pincode FROM pincodes ' +
        'WHERE taluk_id = (SELECT taluk_id FROM taluks WHERE taluk_name = ?)',
      [taluk]
    );
    
    res.json(pincodes);
  } catch (e) {
    return res.status(500).json({
      resp: false,
      msg: e,
    });
  }
};