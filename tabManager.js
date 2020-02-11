let tabs = [];
let tabBtns = [];
let tabBar = document.getElementById("tabBar");
const webviewClass = "tabWebview";
let selectedInd = 0;

if (selectedInd === undefined) {
    selectedind = 0;
}

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
    selectTab(tabs.length-1);
    goHome();
}

function deleteTab(index) {
    if (index !== 0) {
        tabs.splice(index, 1);
    }
    updateTabs();
}

newBtn = newButton();
delBtn = newButton();
tabBar.appendChild(delBtn);
tabBar.appendChild(newBtn);

function selectTab(index) {
    selectedInd = index;
    tabs.forEach(function(tab, index) {
        tab.style.display="none";
    });
    tabs[selectedInd].style.display="block";
    updateTabs();
    if (tabs[selectedInd].src !== "") {
        goTab();
    }
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
        if (index === selectedInd) {
            btn.className="tabSelected";
        } else {
            btn.className="tabBtn";
        }
        btn.onclick=function(){selectTab(index)};
        tabBar.appendChild(btn);
    });
    tabBar.removeChild(delBtn);
    tabBar.removeChild(newBtn);
    newBtn.innerHTML = "New";
    newBtn.onclick=function(){addTab()};
    delBtn.innerHTML = "Del";
    delBtn.onclick=function(){deleteTab(selectedInd)};
    tabBar.appendChild(delBtn);
    tabBar.appendChild(newBtn);
}

addTab(newWebview());
