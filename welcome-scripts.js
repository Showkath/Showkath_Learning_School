// Welcome Message
document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const userType = urlParams.get("type");
  const userName = urlParams.get("name");
  const welcomeMessage = document.getElementById("welcome-message");

  switch (userType) {
    case "student":
      welcomeMessage.textContent = "Welcome to Student, " + userName + "!";
      break;
    case "admin":
      welcomeMessage.textContent = "Welcome to Admin, " + userName + "!";
      break;
    case "lecturer":
      welcomeMessage.textContent = "Welcome to Lecturer, " + userName + "!";
      break;
    default:
      welcomeMessage.textContent = "Welcome!";
  }
});