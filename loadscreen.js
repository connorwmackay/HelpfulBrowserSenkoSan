let loadscreenImg = document.getElementById("loadImg");

// TODO: Fix bug that causes image src to change when the URL hasn't changed.
tabs[selectedInd].addEventListener("loadstart", function() {
	loadscreenImg.src="images/senkoLoading.gif";
});

tabs[selectedInd].addEventListener("loadstop", function() {
	loadscreenImg.src="";
});
