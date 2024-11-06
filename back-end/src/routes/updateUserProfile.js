
import jwt from 'jsonwebtoken';
import { ObjectID } from 'mongodb';
import { getDbConnection } from '../db';

export const updateUserProfile = {
    path: '/api/users/:userId',
    method: 'put',
    handler: async (req, res) => {
        const { authorization } = req.headers;
        const { userId } = req.params;
        const updates = {
            field: req.body.field,
            profileImage: req.body.profileImage,
            phone: req.body.phone,
            address: req.body.address,
            skills: req.body.skills,
            bio: req.body.bio,
        };
        console.log('Updates to be applied:', updates);

        if (!authorization) {
            return res.status(401).json({ message: 'No authorization has been set' });
        }
        const token = authorization.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(401).json({ message: 'Unable to verify token' });

            const { id } = decoded;

            if (id !== userId) return res.status(403).json({ message: 'Unable to update that user\'s data' });

            const db = getDbConnection('crm');

            // First, find the user
            const user = await db.collection('users').findOne({ _id: ObjectID(id) });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Proceed to update the user
            const result = await db.collection('users').findOneAndUpdate(
                { _id: ObjectID(id) },
                { $set: updates },
                { returnOriginal: false }
            );

            if (!result.value) {
                return res.status(404).json({ message: 'User not found after update' });
            }

            const { email, name, isVerified, info } = result.value;
            jwt.sign({ id, email, name, isVerified, info }, process.env.JWT_SECRET, { expiresIn: '2d' }, (err, token) => {
                if (err) {
                    return res.status(500).json(err);
                }
                return res.status(200).json({ token });
            });
        });
    }
};
