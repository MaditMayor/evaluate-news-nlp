var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const api_url = "https://api.meaningcloud.com/sentiment-2.1";
const api_key = process.env.API_KEY;

const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// Post Route
app.post("/api", async function (req, res) {
  const getAnalysis = await meaning_Cloud(req.body.url);
  console.log(getAnalysis);
  res.send(getAnalysis);
});

async function meaning_Cloud(articleUrl) {
  const formdata = new FormData();
  formdata.append("key", api_key);
  formdata.append("url", articleUrl);
  formdata.append("lang", "en");

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const res = await fetch(api_url, requestOptions);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});
