
const router=require('express').Router()
const q = require('../database/dbconnections');

router.post("/addproducts", (req, res) => {
  const { name, price, description } = req.body;
  q.execute(
    `insert into products (name,price,description)values('${name}','${price}','${description}')`,
  );
  res.json({ message: "success" });
});
module.exports=router