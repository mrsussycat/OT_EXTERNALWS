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

app.get('/string', (req, res) => {
    res.send("hello world GET");
});

app.post('/string', (req, res) => {
    res.send("hello world POST");
});

app.get('/:timeout', (req, res) => {
    const timeout = parseInt(req.params.timeout); // Parse the timeout parameter to an integer
    setTimeout(() => {
        res.json({"response": "Delayed response after " + timeout + " seconds"});
    }, timeout * 1000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
