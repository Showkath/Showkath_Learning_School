// Login Functionality
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulating login authentication - Replace this with actual authentication logic
    if (username === "student" && password === "student123") {
      window.location.href = "welcome.html?type=student&name=" + username;
    } else if (username === "admin" && password === "admin123") {
      window.location.href = "welcome.html?type=admin&name=" + username;
    } else if (username === "lecturer" && password === "lecturer123") {
      window.location.href = "welcome.html?type=lecturer&name=" + username;
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});