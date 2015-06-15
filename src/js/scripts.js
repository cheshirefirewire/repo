var button = document.getElementById("button");
var drawerContainer = document.getElementById("drawerContainer");
console.log(drawerContainer.classList);
//var drawer = document.getElementsByClassName("drawer");


button.addEventListener("click", function(){
	console.log("yo");
	if (drawerContainer.classList.contains("hide")){
		console.log("hide");
		drawerContainer.classList.remove("hide");
		drawerContainer.classList.add("slide_down");
	}else if (drawerContainer.classList.contains("slide_down")){
		drawerContainer.classList.remove("slide_down");
		drawerContainer.classList.add("slide_up");
	}else if (drawerContainer.classList.contains("slide_up")){
		drawerContainer.classList.remove("slide_up");
		drawerContainer.classList.add("slide_down");
	}else{
		alert("Dang, looks like it's not working out");
	}
});


/**/