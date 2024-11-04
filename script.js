// DOM elements
const formTitle = document.getElementById("form-title");
const authForm = document.getElementById("auth-form");
const authButton = document.getElementById("auth-button");
const toggleText = document.getElementById("toggle-text");
const toggleLink = document.getElementById("toggle-link");
const message = document.getElementById("message");

// Flag to switch between Login and Signup
let isLoginMode = false;

// Toggle between Login and Signup
toggleLink.addEventListener("click", () => {
  isLoginMode = !isLoginMode;
  if (isLoginMode) {
    formTitle.innerText = "Log In";
    authButton.innerText = "Log In";
    toggleText.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Sign Up</a>`;
  } else {
    formTitle.innerText = "Sign Up";
    authButton.innerText = "Sign Up";
    toggleText.innerHTML = `Already have an account? <a href="#" id="toggle-link">Log In</a>`;
  }
  message.innerText = "";  // Clear any previous messages
});

// Handle form submission
authForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (isLoginMode) {
    // Log In Logic
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
      message.style.color = "green";
      message.innerText = "Login successful!";
    } else {
      message.style.color = "red";
      message.innerText = "Invalid username or password!";
    }
  } else {
    // Sign Up Logic
    if (localStorage.getItem(username)) {
      message.style.color = "red";
      message.innerText = "Username already exists!";
    } else {
      localStorage.setItem(username, password);
      message.style.color = "green";
      message.innerText = "Signup successful! You can now log in.";
      isLoginMode = true;
      formTitle.innerText = "Log In";
      authButton.innerText = "Log In";
      toggleText.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Sign Up</a>`;
    }
  }
});
