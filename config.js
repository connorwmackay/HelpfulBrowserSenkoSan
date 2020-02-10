const settings = {
    "home":"https://www.google.co.uk",
    "searchEngine":"https://google.com/search?q="
};

let homeBtn = document.getElementById("homeBtn");
let backBtn = document.getElementById("backBtn");
let reloadBtn = document.getElementById("reloadBtn");
let forwardBtn = document.getElementById("forwardBtn");
homeBtn.onclick=function(){goHome()};
backBtn.onclick=function(){selectedTab.back()};
forwardBtn.onclick=function(){selectedTab.forward();};
reloadBtn.onclick=function(){selectedTab.reload();};

selectedTab.addEventListener("permissionrequest", function(e) {
    if (e.permission === "fullscreen") {
	e.request.allow();
    }
});

