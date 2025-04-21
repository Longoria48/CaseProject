/*Add object-oriented programming techniques to your project by creating custom objects to manage some of the tasks in your project.
Create a constructor function for a class of objects and then add methods to your object class prototypes.
Create instances of each object class in your code.
Your objects and object classes should be designed in such a way that they could be used with other applications. Chapter 8*/

//Creating shopping cart
let shoppingCart = {
    merchArray: [],
    name: null,
    price: 0,
    description: null,
    img: null,
    total: 0,
    addMerch: function(item)    //method passing an item into an array or (cart) and updating the total
    {
        //add selected merch to merch array
        this.merchArray.push(item);

        //Update the total with the item price
        this.total += item.price;
    },
    showCart: function()        //method to display the contents of the cart to the user
    {
        //Create a msg variable to display msg for ease of use
        let alertMsg = "Your cart: ";

        for(let i=0; i<this.merchArray.length; i++)
        {
            //custom msg to keep track of #items in cart as well as display properties of item to user
            alertMsg += "["+i+1+"]" + this.merchArray.name + " $" + this.merchArray.price + " - " + this.merchArray.description;
        }
        //Include total in the alert outside of for loop
        alertMsg += "Total: $" + this.total.toFixed(2);

        //return the full concatonated string
        return alertMsg;
    }

};

//Create a basic product
function product(name, price, description, img)
{
    this.name = name;
    this.price = price;
    this.description = description;
    this.img = img;
}

//Method of product class to showProduct
product.prototype.showProduct = function()
{
    //Should be able to change update the form to display the products...not sure if it works. lol
    let form = "<section class= 'shop'><h3>" +this.name+ "</h3>";
    form += "<img src= " +this.img+ " alt=" +this.name+ " width='150' height='150'>";
    form += "<p> " +this.description+ " $" +this.price.toFixed(2)+ "</p>"; 
    form += "<form>";
    form += "<input type='submit' value='Add to Cart'></form></section>";

    return form;
};