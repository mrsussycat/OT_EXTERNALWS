const express = require('express');
const app = express();

app.get('/message', (req, res) => {
    res.json({"response": "Get OK"});
});

app.put('/message', (req, res) => {
    res.json({"response": "Put OK"});
});

app.post('/message', (req, res) => {
    res.json({"response": "Post OK"});
});

app.delete('/message', (req, res) => {
    res.json({"response": "Delete OK"});
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});