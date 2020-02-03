let loadscreenImg = document.getElementById("loadImg");

// TODO: Fix bug that causes image src to change when the URL hasn't changed.
webview.addEventListener("loadstart", function() {
	loadscreenImg.src="images/senkoLoading.gif";
});

webview.addEventListener("loadstop", function() {
	loadscreenImg.src="";
});
