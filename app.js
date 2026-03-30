const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors()); // يسمح لأي origin

/*
1-addproducts
2-getallproducts
3-updateproduct
4-deleteproduct
*/

app.use(express.json());

app.use(require("./services/addproducts"))
app.use(require("./services/getproduct"))
app.use(require("./services/updateproducts"))
app.use(require("./services/deleteproduct"))


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
