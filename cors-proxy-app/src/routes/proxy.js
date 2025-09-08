const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.use(express.json()); // รองรับ JSON body

router.post('/', async (req, res) => {
    const { url: targetUrl, headers: customHeaders } = req.body;

    if (!targetUrl) {
        return res.status(400).send('Missing target URL');
    }

    try {
        const fetchOptions = {
            method: 'GET', // default เป็น GET
            headers: customHeaders || {},
        };

        const response = await fetch(targetUrl, fetchOptions);
        const data = await response.text();

        // Forward response headers (ยกเว้นบางตัว)
        for (const [key, value] of response.headers.entries()) {
            if (!['content-encoding', 'content-length', 'connection'].includes(key.toLowerCase())) {
                res.setHeader(key, value);
            }
        }

        res.status(response.status).send(data);
    } catch (err) {
        res.status(500).send('Error forwarding request');
    }
});

module.exports = router;