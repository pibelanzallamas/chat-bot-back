const axios = require("axios");
const controller = {};

controller.request = (req, res) => {
  const { input, context, history } = req.body;
  const token = process.env.NLP_AI_KEY;

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
}

module.exports = controller;