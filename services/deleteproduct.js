const router=require('express').Router()
const q = require('../database/dbconnections');


router.delete("/deleteproduct", (req, res) => {
  const { id } = req.body;
  q.execute(`DELETE from products WHERE id = ${id}`);
  res.json({ message: "delete" });
});
module.exports=router