const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hola mundo!");
});
process.env.PORT = 3000;
app.listen(process.env.PORT, function() {
  console.log("Example app listening on port 3000!");
});
