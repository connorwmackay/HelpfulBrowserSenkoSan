let webview = document.getElementById("webview");

const settings = {
    "home":"https://www.google.co.uk",
    "searchEngine":"https://google.com/search?q="
};

let homeBtn = document.getElementById("homeBtn");
let backBtn = document.getElementById("backBtn");
let reloadBtn = document.getElementById("reloadBtn");
let forwardBtn = document.getElementById("forwardBtn");
homeBtn.onclick=function(){goHome()};
backBtn.onclick=function(){webview.back()};
forwardBtn.onclick=function(){webview.forward();};
reloadBtn.onclick=function(){webview.reload();};

webview.addEventListener("permissionrequest", function(e) {
    if (e.permission === "fullscreen") {
	e.request.allow();
    }
});

