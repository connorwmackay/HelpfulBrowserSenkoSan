let tabs = [];
let tabBtns = [];
let tabBar = document.getElementById("tabBar");
const webviewClass = "tabWebview";
let selectedTab = null;

function newWebview() {
    return document.createElement("webview");
}

function newButton() {
    return document.createElement("button");
}

function addTab() {
    tabs.push(newWebview());
    document.body.appendChild(tabs[(tabs.length-1)]);
    updateTabs();
    selectTab(tabs[(tabs.length-1)]);
    goHome();
}

newBtn = newButton();
tabBar.appendChild(newBtn);

function selectTab(index) {
    selectedTab = tabs[index];
    tabs.forEach(function(tab, index) {
        tab.style.display="none";
    });
    selectedTab.style.display="block";
    updateTabs();
}

function updateTabs() {
    tabBtns.forEach(function(btn) {
       tabBar.removeChild(btn); 
    });
    tabBtns.length = 0; 

    tabs.forEach(function(tab, index) {
        tab.className=webviewClass;
        tabBtns.push(newButton());
    });

    tabBtns.forEach(function(btn, index) {
        btn.innerHTML = "Tab: " + index; // Set innerHTML to webpage title
        btn.onclick=function(){selectTab(index)};
        tabBar.appendChild(btn);
    });
    tabBar.removeChild(newBtn);
    newBtn.innerHTML = "New";
    newBtn.onclick=function(){addTab()};
    tabBar.appendChild(newBtn);
}

function deleteTab(index) {
    tabs.splice(index, 1);
    updateTabs(); 
}

addTab(newWebview());
selectTab(0);