function validation(){
	var username = document.getElementById("phone_number").value;
	var fullname = document.getElementById("fullname").value;
	var email = document.getElementById("email").value;
	var church_code = document.getElementById("church_code").value;
	var password = document.getElementById("password").value;
	var confirm_password = document.getElementById("confirm_password").value;
	
	if (username == ""){
		document.getElementById("result_p").innerHTML = "Enter Phone Number";
		return false;
	}else if(username.length < 12){
		document.getElementById("result_p").innerHTML = "Phone Number needs at least 12 digits";
		return false;
	}
	
	if(email == ""){
		document.getElementById("result_e").innerHTML = "Enter Email";
		return false;
	}else if(email.includes("@") == false){
		document.getElementById("result_e").innerHTML = "A valid email contains @ character";
		return false;
	}
	
	if(church_code == ""){
		document.getElementById("result_c").innerHTML = "Enter Church Code";
		return false;
	}else if(church_code.length < 5){
		document.getElementById("result_c").innerHTML = "The Church needs at least 5 digits";
		return false;
	}
	
	if(password == ""){
		document.getElementById("result_pp").innerHTML = "Enter Password";
		return false;
	}else if(password.length < 4){
		document.getElementById("result_pp").innerHTML = "Password Needs at least 4 digits";
		return false;
	}
	
	if(confirm_password == ""){
		document.getElementById("result_cp").innerHTML = "Enter Password";
		return false;
	}else if(confirm_password.length < 4){
		document.getElementById("result_cp").innerHTML = "Password Needs at least 4 digits";
		return false;
	}
	
	if (password != confirm_password){
		document.getElementById("result_pp").innerHTML = "Password do not match";
		document.getElementById("result_cp").innerHTML = "Password do not match";
		return false;
	}
}