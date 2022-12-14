"use strict";


window.onload = function () {

  let display = document.getElementById("display")
  let name;
  let role;

   name = localStorage.getItem("name");
   role = localStorage.getItem("role")



   display.innerHTML = "Welcome" + " " + role + " " + name ;
}


