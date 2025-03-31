//adding a h2 greeting heading to the customer

//declaring a const variable to hold the current time
const time = new Date().getHours();

//declare greeting variable to update depending on the conditional statement
let greeting = "";

//will check the time and display the corresponding statement to the end-user
if (time < 11)
{
  greeting = "hopes you are having a great morning";
}
else if (time < 20) 
{
  greeting = "hopes you are having a great day";
}
else
{
  greeting = "hopes you have a great evening";
}
//display the greeting element in the h2 display element added into the header
document.getElementById("greeting").innerHTML = greeting;