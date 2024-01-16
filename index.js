const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');
const PORT = process.env.PORT || 8080;

const users = {
  'username': 'password',
};

app.use(basicAuth({
  users,
  challenge: true, // Send a 401 Unauthorized response if credentials are not provided
  unauthorizedResponse: 'Unauthorized Access', // Customize the response for unauthorized requests
}));

app.get('/protected', (req, res) => {
  res.send('Access Granted');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
