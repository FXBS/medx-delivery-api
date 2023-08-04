import { response } from 'express';
import pool from '../Database/mysql';


export const getAllStates = async (req, res = response) => {
    try {
      const connection = await pool.getConnection();
      const [states] = await connection.query('SELECT state_name FROM states');
      connection.release();
      
      res.json(states);
    } catch (e) {
      return res.status(500).json({
        resp: false,
        msg: e,
      });
    }
  };

  export const getDistrictsByState = async (req, res = response) => {
    try {
      const { state } = req.query;
  
      const connection = await pool.getConnection();
      const [districts] = await connection.query(
        'SELECT district_name FROM districts ' +
          'WHERE state_id = (SELECT state_id FROM states WHERE state_name = ?)',
        [state]
      );
      connection.release();
      
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
  
      const connection = await pool.getConnection();
      const [taluks] = await connection.query(
        'SELECT taluk_name FROM taluks ' +
          'WHERE district_id = (SELECT district_id FROM districts WHERE district_name = ?)',
        [district]
      );
      connection.release();
      
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
  
      const connection = await pool.getConnection();
      const [pincodes] = await connection.query(
        'SELECT pincode FROM pincodes ' +
          'WHERE taluk_id = (SELECT taluk_id FROM taluks WHERE taluk_name = ?)',
        [taluk]
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