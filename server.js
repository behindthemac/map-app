require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send("Error loading the page");
      return;
    }
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const modifiedData = data.replace('API_KEY_PLACEHOLDER', apiKey);
    res.send(modifiedData);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
