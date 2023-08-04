import { Router } from 'express';
import * as pincode from '../Controller/PincodeController';
import { verifyToken } from '../Middleware/ValidateToken';

const router = Router();

// Route to get all states
router.get('/get-states', verifyToken, pincode.getAllStates);

// Route to get districts by state
router.get('/get-districts', verifyToken, pincode.getDistrictsByState);

// Route to get taluks by district
router.get('/get-taluks', verifyToken, pincode.getTaluksByDistrict);

// Route to get pincodes by taluk
router.get('/get-pincodes', verifyToken, pincode.getPincodesByTaluk);

// router.get('/get-pincodes', verifyToken, pincode.getPincodesByStateDistrictTaluk);

export default router;
