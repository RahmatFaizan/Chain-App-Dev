//

/* ---- --- Fixed Navbar --- ----*/

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
});

//

/*---- Hamburger  ----  */

const hamburger = document.querySelector(".hamburger");
const phonemenu = document.querySelector(".menu");
const menuUl = document.querySelector(".menu-ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("close-hamburger");
  var menuHeight = menuUl.getBoundingClientRect().height;
  if (phonemenu.style.height == 0) {
    phonemenu.style.height = `${menuHeight}px`;
  } else {
    phonemenu.style.height = "";
  }
});

/* ---- --- Sign in Now ---  ----*/

let user = document.querySelector(".user");
let signInNowBtn = document.querySelectorAll(".signInNow");
let loginClosebtn = document.querySelectorAll(".login-close-btn");
let Loginbtn1 = document.getElementById("Login-1");
let Signupbtn1 = document.getElementById("Signup-1");
let backBtn = document.querySelectorAll(".backBtn");
let accountType = document.querySelector(".account-type");

//

signInNowBtn.forEach((e) => {
  e.addEventListener("click", () => {
    user.classList.add("visibile");
  });
});

//

loginClosebtn.forEach((e) => {
  e.addEventListener("click", (e) => {
    user.classList.remove("visibile");
  });
});

//

backBtn.forEach((e) => {
  e.addEventListener("click", (e) => {
    document.querySelector(".login").classList.remove("d-block");
    document.querySelector(".signup").classList.remove("d-block");
    document.querySelector(".login-signup").classList.remove("d-none");
    accountType.innerText = "LOGIN";
  });
});

//

Loginbtn1.addEventListener("click", () => {
  document.querySelector(".login").classList.add("d-block");
  document.querySelector(".signup").classList.remove("d-block");
  document.querySelector(".login-signup").classList.add("d-none");
});

//

Signupbtn1.addEventListener("click", () => {
  document.querySelector(".signup").classList.add("d-block");
  document.querySelector(".login").classList.remove("d-block");
  document.querySelector(".login-signup").classList.add("d-none");
  accountType.innerText = "REGISTER";
});

//
