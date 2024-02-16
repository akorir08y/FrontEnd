const inputs = document.querySelectorAll(".otp-field input");
var togglePassword = document.querySelector("#togglePassword");
var password = document.querySelector("#password");

inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("keyup", handleOtp);
    input.addEventListener("paste", handleOnPasteOtp);
});



function handleOtp(e) {
    /**
     * <input type="text" 👉 maxlength="1" />
     * 👉 NOTE: On mobile devices `maxlength` property isn't supported,
     * So we to write our own logic to make it work. 🙂
     */
    const input = e.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9a-z]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if (fieldIndex < inputs.length - 1 && isValidInput) {
        input.nextElementSibling.focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus();
    }

    if (fieldIndex == inputs.length - 1 && isValidInput) {
        submit();
    }
}

function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
        inputs.forEach((input, index) => (input.value = value[index]));
        submit();
    }
}

function submit() {
    console.log("Submitting...");
    // 👇 Entered OTP
    let otp = "";
    inputs.forEach((input) => {
        otp += input.value;
        input.disabled = true;
        input.classList.add("disabled");
    });
    console.log(otp);
    // 👉 Call API below
}


function passwordVisibility(){
	var x = document.getElementById("password");
	var icon = document.getElementById("togglePassword");
	icon.classList.toggle("bi-eye");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}


function passwordVisibility1(){
	var x = document.getElementById("password1");
	var icon = document.getElementById("togglePassword1");
	icon.classList.toggle("bi-eye");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}


function passwordVisibility2(){
	var x = document.getElementById("password2");
	var icon = document.getElementById("togglePassword2");
	icon.classList.toggle("bi-eye");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}




function fetch(){
	    var request = new XMLHttpRequest();
	    request.onreadystatechange = function(){
	       if(this.readyState === 4 && this.status === 200){
	          var response = this.responseText;
				document.getElementById("content").innerHTML=response;
	       }
            };
        request.open("GET", "register.html", true);
	    request.send();
 }