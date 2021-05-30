

var namE = document.getElementById("name");
var surname = document.getElementById("surname");
var city = document.getElementById("city");
var all = namE + surname + city;




document.querySelector("button").addEventListener("click", function () {
  var reset = confirm("Are you sure you want to reset?");

  if (reset == true) {
    namE.value = "";
    surname.value = "";
    city.value = "";
  }
});




// function myFunction() {
//     const inputs = document.querySelectorAll("form");
//     document.inputs.reset();
//   }


// function myFunction() {
//     const inputs = document.querySelectorAll("form");
//     document.document.querySelector("form").reset();
//   }



//   $(document).ready(function(){
//     $("button").click(function(){
//         $("form").trigger("reset");
//     });
// });