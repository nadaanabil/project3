

var productNameInput=document.getElementById("productName");
var productCompanyInput=document.getElementById("productCompany");
var productPriceInput=document.getElementById("productPrice");
var productDescInput=document.getElementById("productDesc");
var addBtn=document.getElementById("submitBtn")
var productsList=[];

if(localStorage.getItem("productsList")==null)
    {
        productsList=[];
    }
else{
    productsList=JSON.parse(localStorage.getItem("productsList"))
    displayData();
}
addBtn.onclick=function(){
  
   addProduct();
    displayData();
    resetForm()
}
function addProduct(){
     var product=
       {
           name:productNameInput.value,
           company:productCompanyInput.value,
           price:productPriceInput.value,
           desc:productDescInput.value,
       }
   
   productsList.push(product)
localStorage.setItem("productsList",JSON.stringify(productsList));
}


function displayData(){
    var cols="";
    for(var i=0;i<productsList.length;i++){
        cols+="<div class='col-md-3'><div class='product'><h3>"+productsList[i].name+"</h3><h3>"+productsList[i].company+"</h3> <h3 class='text-danger'>"+productsList[i].price+"</h3><p class='text-info'>"+productsList[i].desc+"</p><button onclick='deleteProduct("+i+")' class='btn btn-danger'>delete</button></div></div>"
    }
     document.getElementById("rowData").innerHTML=cols;
}
function deleteProduct(id){
 
    productsList.splice(id,1);
    localStorage.setItem("productsList",JSON.stringify(productsList));
   displayData()
}
function resetForm(){
   var inputs = document.getElementsByClassName("form-control")
   for(var i=0;i<inputs.length;i++){
       inputs[i].value=""
   }
}













 
 
 
 