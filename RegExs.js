// for name input
function nameRegEx(name) {
  let letter = new RegExp("^((?=.*[a-z])|(?=.*[A-Z]))"); // At least one letter
  let maxLength = new RegExp("^(?=.{1,10}$)"); // Min 1 max 10 leng. controll
  if(!letter.test(name)){
    return 'Your name must contain at least one letter!';
  } else if(!maxLength.test(name)){
    return "Name's min length can be 1 and max length can be 10!";
  } else {
    return true;
  }
}

// for username input
function usernameRegEx(username) {
  let length = new RegExp("^(?=.{3,10}$)"); // Min 3 max 10 len. controll
  let specialCharacter = new RegExp("^(?=.[!@#\$%\^&])"); // Special char. controll
  if(!length.test(username)){
    return "Username's min length can be 3 and max length can be 10!";
  } else if(specialCharacter.test(username)){
    return 'Username must not contain special characters!';
  } else {
    return true;
  }
}

// for mail input
function mailRegEx(mail) {
  let mailControl = /^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if(!mailControl.test(mail)){
    return 'Enter the valid mail address please!';
  } else {
    return true;
  }
}

// for password input
function passwordRegEx(password) {
  let lowerCase = new RegExp("^(?=.*[a-z])");
  let upperCase = new RegExp("^(?=.*[A-Z])");
  let number    = new RegExp("^(?=.*[0-9])");
  let length    = new RegExp("^(?=.{6,25}$)");
  if (!lowerCase.test(password)){
    return 'Password must contain at least one lower case character!';
  } else if (!upperCase.test(password)){
    return 'Password must contain at least one upper case character!';
  } else if (!number.test(password)){
    return 'Password must contain at least one number!';
  } else if (!length.test(password)){
    return "Password's min length can be 6 and max length can be 25!";
  } else {
    return true;
  }
}
