let webview = document.createElement("webview");

let webviewConfig = {
    "home":"https://www.google.co.uk",
    "size":"position: absolute; width: 99%; height: 97%;"
};

webview.src = webviewConfig["home"];
webview.style = webviewConfig["size"];

let searchBar = document.createElement("input");

function goHome() {
    webview.src = webviewConfig["home"];
    searchBar.value = "";
}

function goLink(link) {
    webview.src = link;
    searchBar.value = "";
}


let homeBtn = document.createElement("button");
let redditBtn = document.createElement("button");
let chanBtn = document.createElement("button");
homeBtn.onclick=function(){goHome()};
redditBtn.onclick=function(){goLink("https://www.reddit.com")};
chanBtn.onclick=function(){goLink("https://www.4chan.org")};
homeBtn.innerHTML = "Home";
redditBtn.innerHTML = "Reddit";
chanBtn.innerHTML = "4Chan";

searchBar.type="text";
searchBar.placeholder="Type a url";

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

let searchBtn = document.createElement("button");
searchBtn.onclick=function(){search(searchBar.value)};
searchBtn.innerHTML = "Search";

// END SEARCH FUNCTIONALITY

let spaceBr = document.createElement("br");

const elements = [homeBtn, redditBtn, chanBtn, searchBar, searchBtn, spaceBr, webview];
for (let i=0; i < elements.length; i++) {
    document.body.appendChild(elements[i]);
}