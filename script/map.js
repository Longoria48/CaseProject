// Function to set up and display the Amarillo College Map
function initMap() {

   // Page objects
   let displayMap = document.getElementById("displayMap");
   let routeBox = document.getElementById("routeBox");
   let displayMap2 = document.getElementById("displayMap2");

   // Create a map showing the Fish Creek Clinic
   let fishcreek = { lat: 35.80760051895018, lng: -102.0401809153454 };

   
 // declare a varible to hold
   let myMap = new google.maps.Map(displayMap, {
      zoom: 11,
      center: fishcreek,
      fullscreenControl: false
   });

   //Add a marker for the Fish Creek
   new google.maps.Marker({
      position: fishcreek,
      map: myMap,
      title: "Fish Creek Animal Clinic"
   });

   // Get the device's current position
   navigator.geolocation.getCurrentPosition(getPos, handleError);

   function getPos(pos) { //pos: is current position of the device: mobile/computer
      let myPosition = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
      }

      //Display the latitude, longitude & altitude in the referenced element
      document.getElementById("latitude").textContent = pos.coords.latitude.toFixed(5);
      document.getElementById("longitude").textContent = pos.coords.longitude.toFixed(5);
      
      //Some devices do not support altitude if it has a value display it
      if(pos.coords.altitude)
      {
         document.getElementById("altitude").textContent = pos.coords.altitude.toFixed(2);
      }
      else
      {
         //otherwise let the user know their device doesn't support it
         alert("Altitude feature not available on this device");
      }

      console.log(myPosition);

      // Set up direction service and rendering
      let routeFind = new google.maps.DirectionsService(); // find the routing
      let routeDraw = new google.maps.DirectionsRenderer(); // draw the routing

      // Drive from current location to fishcreek
      let myRoute = {
         origin: myPosition,
         destination: fishcreek,
         travelMode: "DRIVING"
      }

      // Generate directions for the route
      routeFind.route(myRoute, function (result, status) {
         if (status == "OK") {
            routeDraw.setDirections(result);
            // Display route and directions
            routeDraw.setMap(myMap);
            routeDraw.setPanel(routeBox);
         } else {
            routeBox.textContent = "Directions Unavailable: " + status;
         }
      });

   }

   // In case of geolocation error
   function handleError(err) {
      console.log("Geolocation error: " + err.message);
   }
}