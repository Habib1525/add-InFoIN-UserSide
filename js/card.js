const addproduct = () => {
  const productfield = document.getElementById('product-name');
  const productquantity = document.getElementById('idproduct-Quantity');
  const product = productfield.value;
  const quantity = productquantity.value;
  productfield.value ='';
  productquantity.value ='';
  console.log(product, quantity);
  displayproduct(product, quantity);
  saveproductlocalstorage(product, quantity);
}

const displayproduct = (product, quantity)=>{
  const ui = document.getElementById('product-container');
  const li = document.createElement('li');
  li.innerText = `${product}; ${quantity}` 
  ui.appendChild(li);

}

const getstoredshopingcart = ()=>{
  let cart = {};
  const storedcart = localStorage.getItem('cart');
  
  if(storedcart){
     cart = JSON.parse(storedcart);
  }
  return cart;
}

const saveproductlocalstorage = (product, quantity) =>{
   const cart = getstoredshopingcart();
   cart[product] = quantity;
   const cartStringified = JSON.stringify(cart);
   localStorage.setItem('cart', cartStringified);
 
}

const displayproductfromlocalstorage = ()=>{
  const savecard = getstoredshopingcart();
  for(const product in savecard){
    console.log(product, quantity);
    displayproduct(product,quantity);
  }
}
displayproductfromlocalstorage();