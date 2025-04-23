import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: 'No URL provided' });
  }
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Node.js; Vercel Proxy)' },
    });
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.text();
    res.set('Access-Control-Allow-Origin', '*');
    res.send(data);
  } catch (err) {
    console.error(`Proxy error: ${err.message}`);
    res.status(500).json({ error: 'Failed to fetch URL', details: err.message });
  }
});

export default app;
