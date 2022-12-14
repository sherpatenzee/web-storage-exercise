"use strict";


window.onload = function () {

  let enterBtn = document.getElementById("btn");
  enterBtn.onclick = enterBtnOnClick;

}

function enterBtnOnClick() {
 
  let name = document.getElementById("nameField").value

  localStorage.setItem("lastProduct", name);

  let role = document.querySelector('input[name="radio"]:checked').value;
  localStorage.setItem("role", role);




  location.href = "information.html";

}