var navbarDropdowns = document.getElementsByClassName('dropdown-toggle');

for (var i=0; i<navbarDropdowns.length; i++){
	navbarDropdowns[i].addEventListener("click", function(){
		var img = this.getElementsByClassName("dropdown-icon")[0];
		img.classList.toggle("change-icon");
	})
}