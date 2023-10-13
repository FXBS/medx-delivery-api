import { Router } from 'express';
import * as partner from '../Controller/PartnerController.js';
import { verifyToken } from '../Middleware/ValidateToken.js';

const router = Router();

// Add a new route to fetch partner details by partnerId
router.get('/get-partner-details',  partner.PartnerController);

// Add more partner-related routes as needed
// Example: router.post('/add-partner', verifyToken, partner.addPartner);

export default router;