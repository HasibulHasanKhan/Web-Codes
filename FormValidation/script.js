function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  let errors = [];

  // Validate name (not empty)
  if (name === "") {
    errors.push("Name is required.");
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Enter a valid email address.");
  }

  // Validate password (at least 6 characters)
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Display errors or submit form
  if (errors.length > 0) {
    errorMessage.innerHTML = errors.join("<br>");
    errorMessage.style.color = "red";
  } else {
    errorMessage.innerHTML = "Form submitted successfully!";
    errorMessage.style.color = "green";
    document.getElementById("myForm").submit(); // Submit form
  }
}

// Attach event listener to the form
document.getElementById("myForm").addEventListener("submit", validateForm);
