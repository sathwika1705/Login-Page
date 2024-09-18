function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Username and password are required.";
        return false;
    }

    // Dummy login check (can be replaced with actual authentication)
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        return true;
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Invalid username or password.";
        return false;
    }
}
