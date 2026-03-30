
const router=require('express').Router()
const q = require('../database/dbconnections');



router.get("/getallproducts", (req, res) => {
  q.execute(`select * from products`, (err, result) => {
    res.json({ message: "success", products: result });
  });
});
module.exports=router