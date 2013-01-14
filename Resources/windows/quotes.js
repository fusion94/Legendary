var quotesView = Titanium.UI.createView({
	backgroundColor:'#000',
	backgroundImage:'../images/plaid.png',
    bottom:0,
    left:0,
    top:0, 
    right:0	
});

var webview = Titanium.UI.createWebView({
	backgroundColor:'#000',
	backgroundImage:'../images/plaid.png',
	url:'http://legendary.damagestudios.net/mobile/random.php'
});

var refresh = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REFRESH
});

refresh.addEventListener('click', function() {
	webview.reload();
});

Titanium.UI.currentWindow.setRightNavButton(refresh);
Titanium.UI.currentWindow.add(quotesView);
quotesView.add(webview);