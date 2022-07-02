const express = require("express");

require("dotenv").config();
const axios = require("axios");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

const sendMessageToDiscord = async (content) => {
  const url = process.env.DISCORD_PRIVATE_URL;

  const options = {
    url,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      authorization: process.env.DISCORD_AUTH,
    },
    data: {
      content: content,
    },
  };

  axios(options)
    .then((response) => {
      return true;
    })
    .catch((error) => {
      console.error(error);
    });
};

app.post("/", (req, response) => {
  const { text } = req.body;

  console.log(text);

  sendMessageToDiscord(text) ? response.status(200) : response.status(404);
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
