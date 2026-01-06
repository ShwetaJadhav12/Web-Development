document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (name === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    if (name === "shweta" && password === "@@@@") {
        alert("Login Successful");
        NavigateToHome();
    } else {
        alert("Invalid credentials");
    }
});

function NavigateToHome() {
    window.location.href = "home.html";
}
