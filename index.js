const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const USERNAME = 'user001';
const PASSWORD = 'password';

function isAuth(req, res, next) {
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    if (username === USERNAME && password === PASSWORD) {
        next();
    } 
    res.status(401).json({response: 'Access Forbidden, NEGATIVE'});
}


app.get('/', (req, res) => {
    res.status(200).json({response: 'GET POSITIVE'});
})

app.post('/', (req, res) => {
    res.status(200).json({response: 'POST POSITIVE'});
})

app.patch('/', (req, res) => {
    res.status(200).json({response: 'PATCH POSITIVE'});
})

app.get('/get408', (req, res) => {
  res.status(408).json({response: 'CODE - 408, POSITIVE'});
})

app.get('/secret', isAuth, (req, res) => {
    res.status(200).json({response: 'AUTH SUCCESSFUL, POSITIVE'});
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
