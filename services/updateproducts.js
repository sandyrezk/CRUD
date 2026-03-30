
const router=require('express').Router()
const q = require('../database/dbconnections');


router.put("/updateproducts", (req, res) => {
  const { name, price, description, id } = req.body;
  q.execute(`UPDATE products SET name='${name}', price=${price}, description='${description}' 
WHERE id = ${id}`);
  res.json({ message: "update" });
});

module.exports=router
