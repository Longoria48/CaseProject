//Create an instance of the cart object
let cart = shoppingCart;
cart.total = 0;

//function to create instances of products (bag & sweater) on load
let bag = new product("Fish Creek Tote Bag", 14.95,
    "Carry your pet supplies and accessories in a special tote from Fish Creek. 100% cotton.",
    "images/fishtote.gif"); 
    
let sweater = new product("Fish Creek Sweatshirt", 29.95,
    "A Fish Creek sweatshirt will warm you up on cool morning walks with your pet. 100% cotton. Size XL. $29.95",
    "images/fishsweat.gif");

//Reference the input elements for each product
let bagSubmitBtn = document.getElementById("bag");
let sweaterSubmitBtn = document.getElementById("sweater");

//put product into cart
function addMerchToCart(product)
{
  //call addMerch() passing in product obj
  //stores product into array
  cart.addMerch(product);

  //Display cart contents
  window.alert(cart.showCart());
}

//Onclick button should add selected item to cart obj and display an alert
bagSubmitBtn.onclick = function()
{
  //When the btn is clicked addMerchToCart() called
  addMerchToCart(bag);
}

//Onclick button should add selected item to cart obj and display an alert
sweaterSubmitBtn.onclick = function()
{
  addMerchToCart(sweater); 
}