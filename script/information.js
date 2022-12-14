"use strict";


window.onload = function () {

  let display = document.getElementById("display")
  let lastProductViewed;
  let role;

   lastProductViewed = localStorage.getItem("lastProduct");
   role = localStorage.getItem("role")



   display.innerHTML = "Welcome" + " " + role + " " + lastProductViewed ;
}


