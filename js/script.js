// Check if enter is pressed to initialise the validation
function checkKey(event) {
  let getKeyCode = event.keyCode;
  console.log(event + " " + getKeyCode);
  if (getKeyCode === 13) {
    console.log("Enter has been pressed");
    let input = document.getElementById("password").value;
    console.log(input);
    validate(input);
  }
}

// This is the main function called when password is input
function validate(pswd) {
  let res = document.getElementById("password-check");
  //   checkLength(pswd);
  if (checkLength(pswd) === true) {
    if (numberSpecialSpacesCheck(pswd) === true) {
      console.log("Your password is valid");
      let success = document.createElement("h1");
      success.style = "color:green";
      success.innerHTML = "Your password is valid. Password is set to: " + pswd;
      res.appendChild(success);
    } else {
      let fail = document.createElement("h1");
      fail.style = "color:red";
      fail.innerHTML = "Your password is invalid";
      res.appendChild(fail);
    }
  } else {
    let fail = document.createElement("h1");
    fail.style = "color:red";
    fail.innerHTML = "Your password is invalid";
    res.appendChild(fail);
  }
}

// length check
function checkLength(pswd) {
  let res = document.getElementById("password-check");
  let info = document.createElement("small");
  let pswdLength = pswd.length;
  //   console.log(pswdLength);
  if (pswdLength >= 5 && pswdLength <= 10) {
    info.style = "color:green;display:block";
    info.innerHTML = "Password length OK";
    res.appendChild(info);
    return true;
  } else {
    info.style = "color:red;display:block";
    info.innerHTML = "Password length  must be atlest 5 and atmost 10";
    res.appendChild(info);
    return false;
  }
}

// number, special characters and spaces check
function numberSpecialSpacesCheck(pswd) {
  let res = document.getElementById("password-check");
  let info = document.createElement("small");
  let numberStatus = false,
    specialStatus = false,
    spaceStatus = false;
  let i = 0;
  console.log(pswd);
  while (i < pswd.length) {
    if (
      pswd[i] === "1" ||
      pswd[i] === "2" ||
      pswd[i] === "3" ||
      pswd[i] === "4" ||
      pswd[i] === "5" ||
      pswd[i] === "6" ||
      pswd[i] === "7" ||
      pswd[i] === "8" ||
      pswd[i] === "9"
    ) {
      numberStatus = true;
    }
    if (
      pswd[i] === "!" ||
      pswd[i] === "@" ||
      pswd[i] === "#" ||
      pswd[i] === "$" ||
      pswd[i] === "%" ||
      pswd[i] === "^" ||
      pswd[i] === "&" ||
      pswd[i] === "*" ||
      pswd[i] === "*"
    ) {
      specialStatus = true;
    }
    if (pswd[i] === " ") {
      spaceStatus = true;
    }
    i++;
  }

  if (
    numberStatus === true &&
    specialStatus === true &&
    spaceStatus === false
  ) {
    info.style = "color:green;display:block";
    info.innerHTML = "Password contains Special Characters OK";
    res.appendChild(info);
    info = document.createElement("small");
    info.style = "color:green;display:block";
    info.innerHTML = "Password contains No Spaces OK";
    res.appendChild(info);
    info = document.createElement("small");
    info.style = "color:green;display:block";
    info.innerHTML = "Password contains Number OK";
    res.appendChild(info);
    return true;
  } else if (
    numberStatus === false ||
    specialStatus === false ||
    spaceStatus === true
  ) {
    if (specialStatus === false) {
      info = document.createElement("small");
      info.style = "color:red;display:block";
      info.innerHTML = "Password should contain atleast one special character";
      res.appendChild(info);
    }
    if (spaceStatus === false) {
      info = document.createElement("small");
      info.style = "color:green;display:block";
      info.innerHTML = "Password contains No Spaces OK";
      res.appendChild(info);
    }
    if (numberStatus === false) {
      info = document.createElement("small");
      info.style = "color:red;display:block";
      info.innerHTML = "Password should contain atleast one number";
      res.appendChild(info);
    }
    return false;
  }
}
