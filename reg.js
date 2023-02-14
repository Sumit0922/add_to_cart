// var UserId;
// var password;

function register() {
    var password = document.getElementById('password').value;
    var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (regex.test(password)) {
    var pass = document.getElementById('password').value;
    var reEnter = document.getElementById("confirm_password").value;
    var user = document.getElementById("username").value;
    if (pass == reEnter) {
        // pass = password;
        // user = UserId;
        localStorage.setItem("savepass", pass)
        localStorage.setItem("saveid", user)

        window.location.href = ("C:/Users/Sumit Rahangdale/OneDrive/Desktop/intern/shopping.html");

    }
    else {
        alert("Please Enter the Matching Password")
    }

    }

    else{
      alert("Password must contain at least one letter, one digit, and one special character, and be at least 8 characters long.");
    
} 
}
// for the login page
function Enter() {
    var savePass = localStorage.getItem("savepass");
    var saveId = localStorage.getItem("saveid");
    var get = document.getElementById("Shop").value;
    var int = document.getElementById("ping").value;
    if (get===saveId && int===savePass) {
        window.location.href = ("C:/Users/Sumit Rahangdale/OneDrive/Desktop/intern/pro.html")
    }
    else {
        confirm("Please Enter The Valid Input")
    }
}
// for the showpassword in register side
function showPassword() {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
// for the cancel button
function cancel(){
    window.location.href= ("C:/Users/Sumit Rahangdale/OneDrive/Desktop/intern/shopping.html")
}

