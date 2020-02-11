let tabs = [];
let tabBtns = [];
let tabBar = document.getElementById("tabBar");
const webviewClass = "tabWebview";
let selectedInd = 0;
let loadscreenImg = document.getElementById("loadImg");
let conWin = null;

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

newBtn = newButton();
delBtn = newButton();
tabBar.appendChild(delBtn);
tabBar.appendChild(newBtn);

function selectTab(index) {
    selectedInd = index;
    updateTabs();
    if (searchBar.value !== tabs[selectedInd].src) {
        searchBar.value = tabs[selectedInd].src;
    }
    if (tabs[index].src == "") {
        goHome();
    } else {
        goTab();
    }
}

function deleteTab(index) {
    if (index !== 0) {
        tabs[index].parentNode.removeChild(tabs[index]);
        tabs.splice(index, 1);
        selectTab(0);
        updateTabs();
        loadscreenImg.src="";
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
        tab.style.display="none";
        if (index === selectedInd) {
            tab.style.display="block";
        }
        
    });

    tabBtns.forEach(function(btn, index) {
        btn.innerHTML = "Tab: " + index;

        //btn.innerHTML = "Tab: " + index; // Switch to webpage title 
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
    
    tabs[selectedInd].addEventListener("loadstart", function() {
        loadscreenImg.src="images/senkoLoading.gif";
    });

    tabs[selectedInd].addEventListener("loadstop", function() {
        loadscreenImg.src="";
    });
    
    tabs[selectedInd].addEventListener("loadstop", function() {
          if (searchBar.value !== tabs[selectedInd].src) {
                  searchBar.value = tabs[selectedInd].src;
          }
    });
}

addTab(newWebview());
