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
let redditBtn = document.getElementById("redditBtn");
let chanBtn = document.getElementById("chanBtn");
homeBtn.onclick=function(){goHome()};
redditBtn.onclick=function(){goLink("https://www.reddit.com")};
chanBtn.onclick=function(){goLink("https://www.4chan.org")};

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
    let key = event.which;
    if (key === 13){
        goLink(liberalLinks(searchBar.value));
    }
}

searchBar.addEventListener("keyup", search);

searchBar.value = webview.src;

// END SEARCH FUNCTIONALITY