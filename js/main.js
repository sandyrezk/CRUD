
let productName=document.getElementById('productName')
let productPrice=document.getElementById('productPrice')
let productDesc=document.getElementById('productDesc')



let products=[]
function getdatafromapi(){
fetch('http://localhost:3000/getallproducts')
      .then(response => response.json())
      .then(json =>{
        products=json.products;
        showdata();
      console.log(products)
    })

}

getdatafromapi()

    function showdata(){
      let str=``
      for(let index=0;index<products.length;index++){
        str+=`
         <tr>
            <td>${products[index].name}</td>
            <td>${products[index].price}</td>
            <td>${products[index].description}</td>
            <td>
                <button onclick=' Deleteproduct(${products[index].id}) ' class="btn btn-danger">Delete</button>
                <button onclick='Updateproduct(${index},${products[index].id})' class="btn btn-success">Update</button>
            </td>
            </tr>
        
        `
      }

      document.getElementById('tbody').innerHTML=str
    }
    function inputdata(){
      let data={
        name: productName.value,
        price: productPrice.value,
        description: productDesc.value
      }
      crudproduct('addproducts','POST',data)
      
    }


    function crudproduct(endPoint,method,data){
 
// POST request using fetch()
fetch(`http://localhost:3000/${endPoint}`, {
    
    // Adding method type
    method: method,
    
    // Adding body or contents to send
    body: JSON.stringify(data),
    
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(obj => {
    getdatafromapi();   // تحديث الجدول فورًا بعد أي عملية
});
}
function Deleteproduct(id){
        crudproduct('deleteproduct','Delete',{id})


}
let productid
function Updateproduct(index,id){
productid=id
productName.value=products[index].name
productPrice.value=products[index].price
productDesc.value=products[index].description
document.getElementById('update').style.display='block'
document.getElementById('add').style.display='none'

}
function sendupdate(){
  let data={
      id:productid,
        name: productName.value,
        price: productPrice.value,
        description: productDesc.value
      }
      crudproduct('updateproducts','PUT',data)
      document.getElementById('update').style.display='none'
document.getElementById('add').style.display='block'
      
    }

