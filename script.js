// Tambahkan kode JavaScript kalian di file ini
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
function isNumber(number) {
  // const inputNumber = document.querySelector("#zip-code").value;
  if (isNaN(number)) {
    return false;
  } else {
    return true;
  }
}

// Check inbox is checked or not
function checkboxIsChecked() {
  if (checkbox && checkbox.checked) {
    return true;
  } else {
    return false;
  }
}
const checkbox = document.getElementById("status");
checkbox.addEventListener("click", function () {
  checkboxIsChecked();
});

// Check input is empty or not
function validateFormData(obj) {
    if (obj != null && isNumber(obj.zipCode) && checkboxIsChecked()) {
        return true
    }
    return false
}


// Event when click submit button
const form = document.querySelector("form");
const warning = document.querySelector("#warning");

function submit(event){
  event.preventDefault();
  const input = validateFormData(handleGetFormData());
  if (input == false) {
    warning.innerHTML = "<p>Periksa form anda sekali lagi</p>";
  } else {
    warning.innerHTML = "";
    clearInput();
  }
}

form.addEventListener("submit", submit);


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

// Function to read the input form data
const handleGetFormData = () => ({
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  city: document.getElementById("city").value,
  zipCode: document.getElementById("zip-code").value,
  status: document.getElementById("status").checked,
});
