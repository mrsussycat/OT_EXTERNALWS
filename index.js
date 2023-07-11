const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

function isAuth(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === 'password') {
      next();
    } else {
      res.status(401);
      res.send('Access forbidden');
    }
}

app.get('/getData', (req, res) => {
    res.status(200).json({response: 'POSITIVE'});
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