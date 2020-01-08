const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hola mundo!");
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
