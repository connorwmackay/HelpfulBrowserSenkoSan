const settings = {
    "home":"https://www.google.co.uk",
    "searchEngine":"https://google.com/search?q="
};

let homeBtn = document.getElementById("homeBtn");
let backBtn = document.getElementById("backBtn");
let reloadBtn = document.getElementById("reloadBtn");
let forwardBtn = document.getElementById("forwardBtn");
homeBtn.onclick=function(){goHome()};
backBtn.onclick=function(){tabs[selectedInd].back()};
forwardBtn.onclick=function(){tabs[selectedInd].forward();};
reloadBtn.onclick=function(){tabs[selectedInd].reload();};

tabs[selectedInd].addEventListener("permissionrequest", function(e) {
    if (e.permission === "fullscreen") {
	e.request.allow();
    }
});

