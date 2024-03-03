document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const validUsername = "admin";
        const validPassword = "123";

        if (username === validUsername && password === validPassword) {
            window.location.href = "../index.html";
        } else {
            // alert("Invalid username or password. Please try again.");
            displayErrorMessage("Invalid username or password. Please try again.");
        }
    });

    function displayErrorMessage(message) {
        const errorContainer = document.createElement("div");
        errorContainer.className = "error-message";
        errorContainer.textContent = message;

        loginForm.appendChild(errorContainer);
    }
});
  