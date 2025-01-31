import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the user login page');
});

export default router;