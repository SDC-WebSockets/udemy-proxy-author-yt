const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'proxy.html'));
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});