document.getElementById("login-submit").addEventListener("click", function () {
    //get user email
    const userEmail = document.getElementById("user-email");
    const userEmailValue = userEmail.value;
    // console.log(userEmailValue);

    //get user password
    const userPassword = document.getElementById("user-password");
    const userPasswordValue = userPassword.value;
    //console.log(userPasswordValue);

    if (userEmailValue == "ripon@gmail.com" && userPasswordValue == "secret") {
        window.location.href = "banking.html";
    }
})