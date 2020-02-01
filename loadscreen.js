let loadscreenImg = document.getElementById("loadImg");

// TODO: Fix bug that causes image src to change when the URL hasn't changed.
webview.addEventListener("loadredirect", function() {
	if (searchBar.value === webview.src) {
		loadscreenImg.src="";
	} else {
		loadscreenImg.src="senkoLoading.gif";
	}
});

webview.addEventListener("loadstop", function() {
	loadscreenImg.src="";
});
