require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.json());

const token = process.env.NLP_AI_KEY;

app.post("/api/nlpcloud", (req, res) => {
  const { input, context, history } = req.body;

  axios
    .post(
      "https://api.nlpcloud.io/v1/gpu/dolphin-yi-34b/chatbot",
      {
        input,
        context,
        history,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
