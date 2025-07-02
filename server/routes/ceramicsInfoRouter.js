const router = require('express').Router();
const CeramicsInfo = require('../models/ceramicsInfoModel');

router.get('/ceramics', async (req, res) => {
    try {
        const ceramics = await CeramicsInfo.find();
        res.json(ceramics);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
