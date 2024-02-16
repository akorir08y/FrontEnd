function callPage(){
		$.ajax({
			url: "register-member.html",
			type: "GET",
			dataType: "text",
			withCredentials: true,
			success: function(response){
				console.log('The page was loaded', response);
				$('.content').html(response);
			},
			error: function(error){
				console.log('The page was not loaded');
			},
			complete: function(xhr, status){
				console.log('The request is complete');
			}
		});
}


function fetch(){	
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	    if(this.readyState === 4 && this.status === 200){
	        var response = this.responseText;
	        document.getElementById("content").innerHTML=response;
	    }
    };
    request.open("GET", "profile.html", true);
	request.send();
}


function offeringStatement(){	
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	    if(this.readyState === 4 && this.status === 200){
	        var response = this.responseText;
	        document.getElementById("content").innerHTML=response;
	    }
    };
    request.open("GET", "statement.html", true);
	request.send();
}


function getSettings(){	
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	    if(this.readyState === 4 && this.status === 200){
	        var response = this.responseText;
	        document.getElementById("content").innerHTML=response;
	    }
    };
    request.open("GET", "settings.html", true);
	request.send();
}


function getNavigation(){
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "block";
}

function getNavigation1(){
	document.getElementById("content1").style.display = "block";
	document.getElementById("content2").style.display = "none";
}