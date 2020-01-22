let webview = document.getElementById("webview");


let webviewConfig = {
    "home":"https://www.google.co.uk",
};

let searchBar = document.getElementById("searchBar");

function goHome() {
    webview.src = webviewConfig["home"];
    searchBar.value = "";
}

function goLink(link) {
    webview.src = link;
    searchBar.value = webview.src;
}


let homeBtn = document.getElementById("homeBtn");
let backBtn = document.getElementById("backBtn");
let reloadBtn = document.getElementById("reloadBtn");
let forwardBtn = document.getElementById("forwardBtn");
homeBtn.onclick=function(){goHome()};
backBtn.onclick=function(){webview.back()};
forwardBtn.onclick=function(){webview.forward();};
reloadBtn.onclick=function(){webview.reload();};

// START SEARCH FUNCTIONALITY

function liberalLinks(link) {
    const start = "https://";
    const startw = "www.";
    let linkSt = "";
    let linkStw = "";
    const searchEngine = "https://www.google.com/search?q=";

    for (let i=0; i < 8; i++) {
        linkSt += link[i];
    }
    
    for (let i=8; i < 12; i++) {
        linkStw += link[i];
    }
    
    if (start !== linkSt) {
        if (startw === linkStw) {
            return start + startw + link;
        }
        if (link.includes('.') === true) {
            return start + link;
        }else{
            return searchEngine + link;
        }
            
    }else{
            return link;
    }
}

function search() {
    
}

searchBar.addEventListener("keyup", function() {
    let key = event.which;
    if (key === 13){
        goLink(liberalLinks(searchBar.value));
    }
});
webview.addEventListener("loadstop",function() {
    if (searchBar.value !== webview.src) {
        searchBar.value = webview.src;
    }
});

// END SEARCH FUNCTIONALITY