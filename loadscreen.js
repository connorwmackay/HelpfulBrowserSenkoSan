let loadscreenImg = document.getElementById("loadImg");

// TODO: Fix bug that causes image src to change when the URL hasn't changed.
selectedTab.addEventListener("loadstart", function() {
	loadscreenImg.src="images/senkoLoading.gif";
});

selectedTab.addEventListener("loadstop", function() {
	loadscreenImg.src="";
});
