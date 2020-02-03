let searchBar = document.getElementById("searchBar");
let box = document.getElementById("box");
let bg = document.getElementById("bg");

function goHome() {
    searchBar.value = "";
    box.value="";
    webview.terminate();
    webview.src="";
    webview.style.display="none";
    box.style.display="block";
    bg.style.display="block";    
}


function fixUrl(url) {
	const protocolPrefix = "https://";
	const domainPrefix = "www";

	let urlPrefix = "";
	for (let i=0; i < 8; i++) {
		urlPrefix += url[i];
	}

	let urlDomainPrefix = "";
	for (let i=8; i < 12; i++) {
		urlDomainPrefix += url[i];
	}
	
	if (protocolPrefix !== urlPrefix) {
		if (domainPrefix === urlDomainPrefix) {
			return  protocolPrefix + domainPrefix + url;
		}else if (url.includes(".") === true) {
			return protocolPrefix + url;
		}else{
			return settings["searchEngine"]  + url;
		}
	}else{
		return url;
	}
}

function updateUrl(url) {
	webview.src = url;
}

searchBar.addEventListener("keyup", function() {
	let keyPressed = event.which;
	let returnKey = 13;

	if (keyPressed === returnKey) {
	    webview.src="";
            updateUrl(fixUrl(searchBar.value));	
            webview.style.display="block";
            box.style.display="none";
            bg.style.display="none";
            box.value="";    
        }
});

box.addEventListener("keyup", function() {
    let keyPressed = event.which;
    let returnKey = 13;

    if (keyPressed === returnKey) {
        webview.src="";
        updateUrl((settings["searchEngine"] + box.value));
        webview.style.display="block";
        box.style.display="none";
        bg.style.display="none";
        box.value="";
    }
});

webview.addEventListener("loadstop", function() {
	if (searchBar.value !== webview.src) {
		searchBar.value = webview.src;
	}
});
