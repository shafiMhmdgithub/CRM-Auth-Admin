
import { v4 as uuid } from 'uuid';
import { getDbConnection } from '../db';
import { sendEmail } from './emailRoute';
import dotenv from 'dotenv';

dotenv.config();

export const forgotPasswordRoute = {
    path: '/api/forgot-password/:email',
    method: 'put',
    handler: async (req, res) => {
        const { email } = req.params;
        console.log("We have to check this email in db:", email);

        const db = getDbConnection('crm');
        const passwordResetCode = uuid();

        const { result } = await db.collection('users')
        .updateOne({ email }, { $set: { passwordResetCode } });

    if (result.nModified > 0) {
        try {
            const subject = 'Password Reset Link';
            const message = `To reset your password, click this link: 
            http://localhost:5173/reset-password/${passwordResetCode}`;

            await sendEmail(email, subject, message);
            console.log('Email has been sent to via mail!!');

            return res.sendStatus(200); // Email sent successfully
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    res.sendStatus(200);

    }
};

