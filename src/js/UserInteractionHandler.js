var showMessageState = false;
toggleButton.addEventListener("click", showMessage);

function showMessage (){
	showMessageState = !showMessageState;
	if(showMessageState === false){
		messageArea.style.visibility = "hidden";
		toggleButton.textContent = "Render Content";
	}else{
		messageArea.style.visibility = "visible";
		toggleButton.textContent = "Hide Content";
	}
}