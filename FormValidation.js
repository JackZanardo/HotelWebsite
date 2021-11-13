
var email;
var phone;


function ValidateUsername(tf, helpText) {
    var username = tf.value;
    var usernameRegex = new RegExp(/[A-Z]{1,}[a-z]{1,}/);
    if(usernameRegex.test(username)){
        tf.className = "valid";
        helpText.innerHTML = "";
        return true;
    }
    else {
        tf.className = "invalid";
        helpText.innerHTML = "User name must contain at least two letters (uppercase and lowercase).";
        return false;
    }
}

function ValidateEmail(tf, helpText){
    email = tf.value;
    var emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ;
    if(phone != "" && email == "") {
        tf.className = "valid";
        helpText.innerHTML = "";
        return true;
    }
    else if (email == "" && phone == ""){
        tf.className = "invalid";
        helpText.innerHTML = "Must enter email or phone.";
        return false;
    }
    else if(emailRegex.test(email)){
        tf.className = "valid";
        helpText.innerHTML = "";
        return true;
    }
    else {
        tf.className = "invalid";
        helpText.innerHTML = "Must enter a valid email.";
        return false;
    }
}

function ValidatePhone(tf, helpText){
    phone = tf.value;
    var phoneRegex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
    if(email != "" && phone == ""){
        tf.className = "valid";
        helpText.innerHTML = "";
        return true;
    }
    else if (email == "" && phone == ""){
        tf.className = "invalid";
        helpText.innerHTML = "Must enter email or phone.";
        return false;
    }
    else if(phoneRegex.test(phone)){
        tf.className = "valid";
        helpText.innerHTML = "";
        return true;
    }
    else {
        tf.className = "invalid";
        helpText.innerHTML = "Only enter digits into phone.";
        return false;
    }
}

function ValidateMessage(tf, helpText) {
    var message = tf.value;
    if(message){
        tf.className = "valid";
        helpText.innerHTML = "";
        return true; 
    }
    else {
        tf.className = "invalid";
        helpText.innerHTML = "Message can not be left empty.";
        return false;
    }
}

function ValidateForm(form) {
    let success = true;
    for (let i = 0; i < form.elements.length; i++) {
        let e = form.elements[i];
        if (e.onblur) { 
           success = e.onblur() && success;
        }
    }
    return success;
    
}

