// Toggle Password Visibility
function passwordVisibility(){
	var x = document.getElementById("password");
	var icon = document.getElementById("togglePassword")
	icon.classList.toggle("bi-eye");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

// Reset Pin
function passwordVisibility1(){
	var x = document.getElementById("password1");
	var icon = document.getElementById("togglePassword1")
	icon.classList.toggle("bi-eye");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

// Register Pin
function passwordVisibility2(){
	var x = document.getElementById("password2");
	var icon = document.getElementById("togglePassword2")
	icon.classList.toggle("bi-eye");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}