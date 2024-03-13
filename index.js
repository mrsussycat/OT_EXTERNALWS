const express = require('express');
const querystring = require('querystring');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/search', (req, res) => {
  const queryParams = querystring.parse(req.url.split('?')[1]);
  console.log(queryParams);
  const date = queryParams.date;

  if (date) {
    console.log(`Date query: ${date}`);
    res.send({ "Date": date });
  } else {
    console.log(`Date query: ${date}`);
    res.send({ "Invalid Date": "Invalid Date" });
  }
});

app.post('/data', (req, res) => {
  console.log(req.body);
  res.send({"response": req.body});
})

app.get('/:timeoutValue', (req, res) => {
  const timeoutValue = parseInt(req.params.timeoutValue, 10);
  setTimeout(() => {
    res.status(200).json({timeoutValue: timeoutValue});
  }, timeoutValue * 1000)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
