const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    // Get user's IP address
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Call the IP geolocation API
    try {
        const response = await axios.get(`https://ipapi.co/${ip}/json/`);
        const locationData = response.data;

        // Log the IP address and location data
        console.log(`IP Address: ${ip}`);
        console.log(`Location Data:`, locationData);

        // Send response to the client
        res.json({
            ip: ip,
            location: locationData
        });
    } catch (error) {
        console.error('Error fetching location data:', error);
        res.status(500).send('Could not fetch location data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
