const express = require("express");
const axios = require("axios").default;
const app = express();

app.use(express.json());

app.get("/api/yplaylist", async (req, res) => {
  const { maxResults } = req.query;
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const CHANNEL_ID = process.env.CHANNEL_ID;

  const url = maxResults
    ? `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&channelId=${CHANNEL_ID}&maxResults=${maxResults}&type=video&order=viewCount`
    : `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&channelId=${CHANNEL_ID}&type=video&order=viewCount`;

  const { data } = await axios.get(url, {
    headers: { "Context-Type": "application/json" },
  });
  res.status(200).json(data);
});

module.exports = app;
