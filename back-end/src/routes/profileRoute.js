import {getDbConnection} from '../db';
import { ObjectID } from 'mongodb';
export const profileRoute = {
    path: '/api/profile/:userId', // Correctly defined to accept a userId
    method: 'get',
    handler: async (req, res) => {
        const { userId } = req.params; // Make sure to destructure userId
        const db = getDbConnection('crm');

        try {
            const user = await db.collection('users').findOne({ _id: ObjectID(userId) });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
};
