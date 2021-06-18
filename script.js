function validateForm() {
    let emailID = document.myForm.email.value;
    let atpos = emailID.indexOf("@");
    let dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || dotpos <= (atpos + 2) || emailID === "" || emailID === null) {
        // alert("Please enter a valid email");
        document.myForm.email.focus();
        document.getElementById("error-message").innerHTML = "Oops! Please check your email";
        document.getElementById("error-message").style.paddingTop = "2%";
        document.getElementById("error-message").style.paddingLeft = "3%";

        return false;
    }
    return true;
}