// Sticky Header
const header = document.querySelector(".header-wrapper");

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  if (scrollPos > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// Event when click menu bar
const menuBtn = document.querySelector("#menu-btn");
const navbarMin = document.querySelector(".navbar-min");
const closeBtn = document.querySelector(".close-btn");
const navLink = document.querySelectorAll(".navbar-min ul li a");
const body = document.querySelector("body");

menuBtn.addEventListener("click", function () {
  navbarMin.classList.add("active-header");
  body.classList.add("no-scroll");
});
closeBtn.addEventListener("click", function () {
  navbarMin.classList.remove("active-header");
  body.classList.remove("no-scroll");
});
navLink.forEach((element) => {
  element.addEventListener("click", function () {
    navbarMin.classList.remove("active-header");
    body.classList.remove("no-scroll");
  });
});

// Check input type number
function isNumber() {
  const inputNumber = document.querySelector("#zip-code").value;
  if (isNaN(inputNumber)) {
    return false;
  } else {
    return true;
  }
}

// Check inbox is checked or not
function checkboxIsChecked() {
  if (checkbox && checkbox.checked) {
    console.log("checked");
    return true;
  } else {
    console.log("Not checked");
    return false;
  }
}
const checkbox = document.getElementById("status");
console.log(checkbox);
checkbox.addEventListener("click", function () {
  checkboxIsChecked();
});

// Check input is empty or not
function validateFormData() {
  const inputs = document.querySelectorAll(
    "#name, #city, #email, #zip-code, #status"
  );
  for (let input of inputs) {
    if (
      input.value !== null &&
      isNumber() === true &&
      checkboxIsChecked() === true
    ) {
      return true;
    }
  }
  return false;
}

// Event when click submit button
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateFormData() === true) {
    alert("Thank you for your submission");
    clearInput();
  } else {
    alert("Please fill out the form correctly");
  }
});

// Clear input when submit success
function clearInput() {
  const inputs = document.querySelectorAll(
    "#name, #city, #email, #zip-code, #status"
  );
  for (let input of inputs) {
    if (input.type === "checkbox") {
      input.checked = false;
    } else if (input.type === "number") {
      input.value = "";
    } else {
      input.value = "";
    }
  }
}
