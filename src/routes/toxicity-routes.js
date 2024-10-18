import express from 'express';
import { body, validationResult } from 'express-validator';
import { checkToxicity } from '../controllers/toxicityController.js';

const router = express.Router();

/**
 * @route POST /isMessageToxic
 * @desc Check if a message is toxic using OpenAI's GPT-4 model
 * @access Public
 */
router.post(
    '/',
    [
        body('message')
            .isString()
            .withMessage('Message must be a string')
            .isLength({ min: 1 })
            .withMessage('Message cannot be empty'),
    ],
    (req, res) => {
        // Validate input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        checkToxicity(req, res);
    }
);

export default router;
