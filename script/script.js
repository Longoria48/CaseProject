//adding a h2 greeting heading to the customer
//declaring a const variable to hold the current time
const time = new Date().getHours();
//declare greeting variable to update depending on the conditional statement
let greeting = "";

//will check the time and display the corresponding statement to the end-user
if (time < 11)
{
  greeting = "hopes you are having a swimming morning!";
}
else if (time < 20) 
{
  greeting = "hopes you are having a ta-ruffic day!";
}
else
{
  greeting = "hopes you have a paw-some evening!";
}
//display the greeting element in the h2 display element added into the header
document.getElementById("greeting").innerHTML = greeting;

//Exception Handling-contact form if numbers are entered into name input boxes
function validateName()
{
  let firstName = document.getElementById("myFirstName").value;
  let lastName = document.getElementById("myLastName").value;
  let digits = /[0-9]/; //found on w3schools href=https://www.w3schools.com/jsref/jsref_regexp_digit.asp

  if(digits.test(firstName)) //The test() method tests for a match in a string. https://www.w3schools.com/jsref/jsref_regexp_test.asp
  {
    document.getElementById("myFirstName").setCustomValidity("Cannot contain numbers");
    return false; // stop submission
  }
  else if(digits.test(lastName))
  {
    document.getElementById("myLastName").setCustomValidity("Cannot contain numbers");
    return false;
  }
  else
  {
    return true; //return true and continue
  }
}
document.getElementById("myFirstName").addEventListener("input",validateName);
document.getElementById("myLastName").addEventListener("input",validateName);


//Verify email entered by user is not an AOL email using RegExp
function validateEmail()
{
  let customerEmail = document.getElementById("myEmail").value;
  let RegExp = /\baol.com\b/;

  if(RegExp.test(customerEmail))
  {
    document.getElementById("myEmail").setCustomValidity("aol.com emails are not accepted");
    return false;
  }
  else
  {
    return true;
  }

}
document.getElementById("myEmail").addEventListener("input",validateEmail);

let submitBtn = document.getElementById("mySubmit");
let zip = document.getElementById("zipcode");

//function to validate the zipcode entered by a customer
zip.onchange = function()
{
  let codeValue = zip.value;

  let xhr = new XMLHttpRequest();
  let url = `http://api.zippopotam.us/us/${codeValue}`

  xhr.onreadystatechange = function()
  {
    if(xhr.readyState === 4 && xhr.status === 200)  //if successful request
    {
      let json = JSON.parse(xhr.response);
      zip.value = json.places[0]["place name"];
      zip.setCustomValidity("");  //clear the error
      return true;
    }
    else
    {
      zip.setCustomValidity("Invalid zipcode"); //Show error to user if invalid zip
      return false;
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}