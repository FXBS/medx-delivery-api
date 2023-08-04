import { Router } from 'express';
import * as pincode from '../Controller/PincodeController';
import { verifyToken } from '../Middleware/ValidateToken';

const router = Router();

router.get('/get-pincodes', verifyToken, pincode.getPincodesByStateDistrictTaluk);

export default router;
