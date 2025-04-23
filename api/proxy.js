import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(async (req, res) => {
  const url = req.query.url;
  if (!url || !url.startsWith('http')) {
    return res.status(400).json({ error: 'Invalid or missing URL' });
  }
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Node.js; Vercel Proxy)',
        'Accept': 'text/html,application/xhtml+xml'
      },
      timeout: 5000 // 5s timeout
    });
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    const data = await response.text();
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/html'
    });
    res.send(data);
  } catch (err) {
    console.error(`Proxy error for ${url}: ${err.message}`);
    res.status(500).json({
      error: 'Failed to fetch URL',
      details: err.message || 'Unknown error'
    });
  }
});

export default app;
