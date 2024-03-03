document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const newUsername = document.getElementById("newUsername").value;
        const email = document.getElementById("email").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (newPassword === confirmPassword) {
            alert("Registered successfully!");
            window.location.href = "../pages/login.html";
        } else {
            displayErrorMessage("Passwords do not match!");
        }
    });

    function displayErrorMessage(message) {
        const errorContainer = document.createElement("div");
        errorContainer.className = "error-message";
        errorContainer.textContent = message;

        registerForm.appendChild(errorContainer);
    }
});
