const express = require("express");

const app = express();

let count = 0;
app.get("/", (req, res) => {
  count++;
  res.send("Hello World! this page has been viewed " + count + " times!");
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
