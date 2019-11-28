const express = require('express');
const router = express.Router();
const axios = require('axios');
const {apiKey} = require('../credentials');
const base = 'https://api.darksky.net/forecast';

router.get('/weather/:lat,:lon', (req, res, next) => {
    const {lat, lon} = req.params;
    const url = `${base}/${apiKey}/${lat},${lon}`;
    axios.get(url).then((response) => {
        return res.status(200).json(response.data);
    }).catch(err => {
        return res.status(500).json(err);
    })
});

module.exports = router;
