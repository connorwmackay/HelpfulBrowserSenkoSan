let webview = document.createElement("webview");

let webviewConfig = {
    "home":"https://www.google.co.uk",
    "size":"position: absolute; width: 99%; height: 97%;"
};

webview.src = webviewConfig["home"];
webview.style = webviewConfig["size"];

let searchBar = document.getElementById("searchBar");

function goHome() {
    webview.src = webviewConfig["home"];
    searchBar.value = "";
}

function goLink(link) {
    webview.src = link;
    searchBar.value = "";
}


let homeBtn = document.getElementById("homeBtn");
let redditBtn = document.getElementById("redditBtn");
let chanBtn = document.getElementById("chanBtn");
homeBtn.onclick=function(){goHome()};
redditBtn.onclick=function(){goLink("https://www.reddit.com")};
chanBtn.onclick=function(){goLink("https://www.4chan.org")};

// START SEARCH FUNCTIONALITY

function liberalLinks(link) {
    let start = "https://";
    let startw = "www.";
    let linkSt = "";
    let linkStw = "";
    
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
        return start + link;
        
    }else{
        return link;   
    }
}

function search(link) {
    goLink(liberalLinks(link));
    searchBar.value = "";
}

let searchBtn = document.getElementById("searchBtn");
searchBtn.onclick=function(){search(searchBar.value)};

// END SEARCH FUNCTIONALITY

document.body.appendChild(webview);