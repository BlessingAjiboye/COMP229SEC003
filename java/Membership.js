// JavaScript source code
'use strict';



    function validateEmail() {
    var emailInput = document.getElementById("emailbox");
    var errorDiv = document.getElementById("emailError");
    try {
        if (emailInput.value.length == 0) {
            emailInput.style.background = "rgb(255,233,233)";
            throw "Email address is a required field";
        }
        // replace with conditional expression
        if (emailInput.value.search("@") === -1 || 
        emailInput.value.lastIndexOf(".") === -1) {
            throw "Please provide a valid email address";
        }

        // remove any email error styling and message
        emailInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        // convert email address to lowercase
        // replace with code to convert email address to lowercase
        emailInput.value = emailInput.value.toLowerCase();

        // copy valid email value to profile object
        profile.email = emailInput.value;
        // copy profile.email value to profile section
        document.getElementById("profileEmail").innerHTML = profile.email;
        // make profile section and email section visible
        document.getElementById("profile").style.display = "block";
        document.getElementById("emailSection").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        // change input style
        emailInput.style.background = "rgb(255,233,233)";
    }
    }

    function validateFirstname() {
    var fnInput = document.getElementById("fname");
    var errorDiv = document.getElementById("fnameError");
    try {
        
        if (fnInput.value.length == 0) {
            fnInput.style.background = "rgb(255,233,233)";
            throw "First Name is a required field";
        }
        // replace with conditional expression
        if (fnInput.value.length < 3) {
            throw "Firstname must be at least 3 characters long";
        }
        // remove any username error styling and message
        fnInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        // copy valid username value to profile object
        profile.firstname = fnInput.value;
        // copy profile.username value to profile section
        document.getElementById("profileFirstname").innerHTML = profile.firstname;
        // make profile section and username section visible
        document.getElementById("firstnameSection").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        // change input style
        fnInput.style.background = "rgb(255,233,233)";
    }
    }


    function validateLastName() {
    var lnInput = document.getElementById("lname");
    var errorDiv = document.getElementById("lnameError");
    try {
        // replace with conditional expression
        if (lnInput.value.length == 0) {
            lnInput.style.background = "rgb(255,233,233)";
            throw "Last Name is a required field";
        }
        if (lnInput.value.length < 3) {
            throw "Lastname must be at least 3 characters long";
        }
        // remove any lastname error styling and message
        lnInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        // copy valid lastname value to profile object
        profile.lastname = lnInput.value;
        // copy profile.lastname value to profile section
        document.getElementById("profileLastname").innerHTML = profile.lastname;
        // make profile section and lastname section visible
        document.getElementById("lastnameSection").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        // change input style
        lnInput.style.background = "rgb(255,233,233)";
    }
    }


    //var enteredAge = document.getElementById("age").value;
    
    function validateAge() {
	var ageInput = document.getElementById("age");
    var errorDiv = document.getElementById("ageError");
	var regEx = /^[0-9]*$/;
	
    try {
        // Validate Age
                if (ageInput.value.length == 0) {
                    ageInput.style.background = "rgb(255,233,233)";
                    throw "Age is a required field";
                }
                if ((regEx.test(ageInput.value)) == false){
                    ageInput.style.background = "rgb(255,233,233)";
                    throw "Age is a numeric field";
                }
                if (ageInput.value < 18) {
                    ageInput.style.background = "rgb(255,233,233)";
                    throw "Age must be over 18";
                }
                
        // remove any username error styling and message
        ageInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        // copy valid username value to profile object
        profile.age = ageInput.value;
        // copy profile.age value to profile section
        document.getElementById("profileAge").innerHTML = profile.age;
        // make profile section and age section visible
        document.getElementById("AgeSection").style.display = "block";
        
    }
    catch (msg) {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        // change input style
        ageInput.style.background = "rgb(255,233,233)";
    }
    }

    // validate entered password
    function validatePassword() {
    var pw1Input = document.getElementById("pw1");
    var pw2Input = document.getElementById("pw2");
    var errorDiv = document.getElementById("pw1Error");

    try {
        if (pw1Input.value.length == 0) {
            pw1Input.style.background = "rgb(255,233,233)";
            throw "Password is a required field";
        }
        // replace with conditional expression
        if (/.{4,}/.test(pw1Input.value) === false) {
            throw "Password must be at least 6 characters";
        } else if (pw1Input.value.localeCompare(pw2Input.value) !== 0) {
            throw "Passwords must match";
        } 
        
       // remove any password error styling and message
        pw1Input.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";

    }
    catch (msg) {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        // change input style
        pw1Input.style.background = "rgb(255,233,233)";
        pw2Input.style.background = "rgb(255,233,233)";
    }
    }
    
    // validate entered password
        function validatePasswordtwo() {
        var pw1Input = document.getElementById("pw1");
        var pw2Input = document.getElementById("pw2");
        var errorDiv = document.getElementById("pw2Error");
    
        try {
            if (pw2Input.value.length == 0) {
                pw2Input.style.background = "rgb(255,233,233)";
                throw "Password (Confirm) is a required field";
            }
            // replace with conditional expression
            if (/.{4,}/.test(pw2Input.value) === false) {
                throw "Password must be at least 6 characters";
            } else if (pw2Input.value.localeCompare(pw1Input.value) !== 0) {
                throw "Passwords must match";
            } 
            
           // remove any password error styling and message
            pw2Input.style.background = "";
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
    
        }
        catch (msg) {
            // display error message
            errorDiv.style.display = "block";
            errorDiv.innerHTML = msg;
            // change input style
            pw2Input.style.background = "rgb(255,233,233)";
        }
        }
        
    function validateAddress() {
	var adInput = document.getElementById("address");
    var errorDiv = document.getElementById("addressError");
    try {
        
        if (adInput.value.length == 0) {
            adInput.style.background = "rgb(255,233,233)";
            throw "Address is a required field";
        }
        
        // remove any address error styling and message
        adInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        // copy valid address value to profile object
        profile.address = adInput.value;
        // copy profile.address value to profile section
        document.getElementById("profileAddress").innerHTML = profile.address;
        // make profile section and address section visible
        document.getElementById("AddressSection").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        
        // change input style
        adInput.style.background = "rgb(255,233,233)";
    }
    }
    
    function validateCity() {
	var ciInput = document.getElementById("city");
    var errorDiv = document.getElementById("cityError");
    try {
        if (ciInput.value.length == 0) {
            ciInput.style.background = "rgb(255,233,233)";
            throw "City name is a required field";
        }
        if (ciInput.value.length < 3) {
            ciInput.style.background = "rgb(255,233,233)";
            throw "City name must be at least 3 characters long";
        }
        
        // remove any city error styling and message
        ciInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        // copy valid city value to profile object
        profile.city = ciInput.value;
        // copy profile.city value to profile section
        document.getElementById("profileCity").innerHTML = profile.city;
        // make profile section and city section visible
        document.getElementById("CitySection").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        
        // change input style
        ciInput.style.background = "rgb(255,233,233)";
    }
    }

    
    function validateProvince() {
		var prInput = document.getElementById("province");
        var errorDiv = document.getElementById("provinceError");
        
        try {
            if (prInput.value.length == 0) {
                prInput.style.background = "rgb(255,233,233)";
                throw "Province name is a required field";
            }
           
            // remove any city error styling and message
            prInput.style.background = "";
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
            // copy valid city value to profile object
            profile.province = prInput.value;
            // copy profile.city value to profile section
            document.getElementById("profileProvince").innerHTML = profile.province;
            // make profile section and city section visible
            document.getElementById("ProvinceSection").style.display = "block";
        }
        catch (msg) {
            // display error message
            errorDiv.style.display = "block";
            errorDiv.innerHTML = msg;
            
            // change input style
            prInput.style.background = "rgb(255,233,233)";
        }
        }
        

    
    function validatePostCode() {
		var pcInput = document.getElementById("postalcode");
        var errorDiv = document.getElementById("postalcodeError");
        
    try {
        
        // Validate Post Code
                if (pcInput.value.length == 0) {
                    pcInput.style.background = "rgb(255,233,233)";
                    throw "Postal Code is a required field";
                }
                var regEx = /^[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]$/;
                if (regEx.test(pcInput.value)) {
                    pcInput.style.background = "";
                }
                else {
                    pcInput.style.background = "rgb(255,233,233)";
                    throw "Invalid Postal Code";
                }

        // remove any postcode error styling and message
        pcInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        // copy valid postcode value to profile object
        profile.postcode = pcInput.value;
        // copy profile.postcode value to profile section
        document.getElementById("profilePostal").innerHTML = profile.postcode;
        // make profile section and postcode section visible
        document.getElementById("profile").style.display = "block";
        document.getElementById("PostalSection").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        // change input style
        pcInput.style.background = "rgb(255,233,233)";
    }
    }

   
  
     	
     
      	
    
    function setUpPages() {
		validateEmail();
	    validateFirstname();
	    validateLastName();
	    validateAge();
	    validatePassword();
	    validatePasswordtwo()
	    validateAddress();
	    validateCity();    
	    validateProvince();
	    validatePostCode();
    }
    
    


    if (window.addEventListener) {
        window.addEventListener("onsubmit", setUpPages, false);
    } 
       