// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validate() {
    // Retrieving the values of form elements
    var name = document.usernameForm.username.value;
    window.sessionStorage.setItem('username', name);
	// Defining error variables with a default value
    var nameErr = true;

    // Validate username
    if(name == "") {
        printError("nameErr", "Please enter your username!");
    } else {
        var regex = /^[a-zA-Z0-9\s]{3,}$/;
        if(regex.test(name) === false) {
            printError("nameErr", "Username must contain at least 3 characters!");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(nameErr == true) {
       return false;
    } else {
      // Redirecting to new page
        window.location = "nbaplayers.html";
        return false;
    }
};
