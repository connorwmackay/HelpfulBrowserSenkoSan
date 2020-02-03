
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'outerBounds': {
            'width':1080,
            'height':720
        }
    });
});
