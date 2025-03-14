document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let phoneNumber = document.getElementById("phone").value;
    
    
    let storedData = JSON.parse(localStorage.getItem("children")) || [];

    let existingUser = storedData.find(profile => profile.phone === phoneNumber);

    if (existingUser) {
        alert("Login successful! Redirecting to Home Page...");
        window.location.href = "SL.html"; // Redirect to Diet Chart
    } else {
        alert("New user detected! Redirecting to Child Login Page...");
        window.location.href = "child.html"; // Redirect to Profile Creation
    }
});