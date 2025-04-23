const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send('No URL provided');
  try {
    const response = await fetch(url);
    const data = await response.text();
    res.set('Access-Control-Allow-Origin', '*');
    res.send(data);
  } catch (err) {
    res.status(500).send('Error fetching URL');
  }
});

module.exports = app;
