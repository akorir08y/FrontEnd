var hosted_url = location.origin;

// Authenticate Registered Member Request(Client Side Way of Logging In)
function AuthMemberRequest(){
	// Form data
	var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
	
	// Form Validation
	if (username == "") {
		alert("Phone Number must be filled out");
		return false;
	} else if(password == ""){
		alert("Pin must be filled out");
		return false;
	}

    // Phone Number and Amount
    console.log("Username: "+ username);
    console.log("Password: "+ password);
	
}

// OTP Timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
	document.getElementById('time').style.display='block';
	document.getElementById('otp-field12').style.display ='block';
	
    var x = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
		
		console.log('The Timer is Starting');
        display.textContent = minutes + ":" + seconds;
		console.log('Timer Already Started');
		
		
		if (--timer < 0) {
            timer = duration;
            document.getElementById("send_otp_button").innerText = "Resend OTP";
			clearInterval(x);
			document.getElementById('otp-field12').style.display ='block';
			document.getElementById('time').style.display='none';
			document.getElementById('time').innerHTML ='01:00';
		}

    }, 1000);
}


// OTP Reset Timer
function startResetTimer(duration, display) {
    var timer = duration, minutes, seconds;
	document.getElementById('otp-field11').style.display ='block';
	document.getElementById('time1').style.display='block';
    // getOTP();
    var x = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
		console.log('Minutes: '+ minutes);
        seconds = parseInt(timer % 60, 10);
		console.log('Seconds: '+ seconds);

        minutes = minutes < 10 ? "0" + minutes : minutes;
		console.log('Minutes More: '+ minutes);
        seconds = seconds < 10 ? "0" + seconds : seconds;
		console.log('Seconds More: '+ seconds);

        display.textContent = minutes + ":" + seconds;


        if (--timer < 0) {
            timer = duration;
            document.getElementById("send-otp").innerText = "Resend OTP";
			clearInterval(x);
			document.getElementById('time1').style.display ='none';
			document.getElementById('otp-field11').style.display ='none';
			document.getElementById('time1').innerHTML ='01:00';
        }
    }, 1000);
}

// Start OTP Function
function startOTP() {
    var fiveMinutes = 60 * 1;
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}


// Start Reset OTP Function
function startResetOTP() {
	
    var fiveMinutes = 60 * 1;
    display = document.querySelector('#time1');
    startResetTimer(fiveMinutes, display);
}

function sendOTP(){
    startOTP();
    console.log("Sending OTP");
    console.log("Phone Number: " + username);
}


// Send Reset OTP
function sendResetOTP(){
    startResetOTP();
    console.log("Sending OTP");
    console.log("Phone Number: " + username);
}


// Get the OTP Pin
function confirmOTP(){
     // Form data
     var username = document.getElementById("phone_number").value;
     const inputs = document.querySelectorAll(".otp-field input");
     var password = "";
     inputs.forEach((input, index) => {
        password += input.value;
     });
	 
	console.log(password);
	
	var now_otp = "1234";

	if (now_otp === password){
		alert('OTP Verified');
		document.querySelectorAll(".otp-field input") = '';
	}else{
		alert('OTP Received is Wrong');
	}
}


// Confirm Reset OTP
// Get the OTP Pin
function confirmResetOTP(){
     // Form data
     var username = document.getElementById("phone_number").value;
     const inputs = document.querySelectorAll(".otp-field input");
     var password = "";
     inputs.forEach((input, index) => {
        password += input.value;
     });
	 
	console.log(password);
	
	var now_otp = "1234";

	if (now_otp === password){
		alert('OTP Verified');
	}else{
		alert('OTP Received is Wrong');
	}
}


// Reset Member Pin
// Authenticate Registered Member Request(Client Side Way of Logging In)
function resetMemberPin(){
    // Close the Modal and Login
    var modal = document.getElementById('id02');

    // Form data
	var username = document.getElementById("username1").value;
    var password = document.getElementById("password1").value;

    // Phone Number and Amount
    console.log("Username: "+ username);
    console.log("Password: "+ password);

    // Ajax STK Push Request
    let myObj = { previousAccessNumber: username, currentAccessNumber: username, pin:password };
    console.log(myObj)

    $.ajax({
        type: "POST",
        url: "/cfms/auth/reset",
        datatype: "json",
        data: myObj,
        success: function(response){
            console.log(response);
            // var finalResponse = JSON.parse(response);
            $("#responseDiv1").html("<b>Login Response : "+response.state+"</b>");
        },
        error: function(response){
            console.log(response);
        }

    });
}


// Reset Member Pin
// Authenticate Registered Member Request(Client Side Way of Logging In)
function personnelLogin(){
    // Close the Modal and Login
    var modal = document.getElementById('id03');

    // Form data
	var username = document.getElementById("username2").value;
    var password = document.getElementById("password2").value;

    // Phone Number and Amount
    console.log("Username: "+ username);
    console.log("Password: "+ password);

    // Ajax STK Push Request
    let myObj = { user: username, password:password };
    console.log(myObj)

    $.ajax({
        type: "POST",
        url: "/cfms/auth/personnel/login",
        datatype: "json",
        data: myObj,
        success: function(response){
            console.log(response);
            $("#responseDiv2").html("<b>Login Response : "+response.state+"</b>");
        },
        error: function(response){
            console.log(response);
        }

    });
}


// Reset Personnel Password
function resetPersonnelPassword(){
    // Close the Modal and Login
    var modal = document.getElementById('id04');

    // Form data
	var username = document.getElementById("username3").value;
    var password = document.getElementById("password3").value;

    // Phone Number and Amount
    console.log("Username: "+ username);
    console.log("Password: "+ password);

    // Ajax STK Push Request
    let myObj = { previousAccessNumber: username, currentAccessNumber: username, pin:password };
    console.log(myObj)

    $.ajax({
        type: "POST",
        url: "/cfms/auth/personnel/reset",
        datatype: "json",
        data: myObj,
        success: function(response){
            console.log(response);
            // var finalResponse = JSON.parse(response);
            $("#responseDiv3").html("<b>Login Response : "+response.state+"</b>");
        },
        error: function(response){
            console.log(response);
        }

    });
}


function clickEvent(first,last){
  if(first.value.length){
    document.getElementById(last).focus();
  }
}