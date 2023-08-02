// Add ContactUs JavaScript functionality here
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Perform form submission logic (e.g., send the data to a server)

    // Reset the form after submission
    contactForm.reset();
    alert("Thank you for your message! We will get back to you soon.");
  });
});