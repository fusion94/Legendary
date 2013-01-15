/*
 * Legendary version 1.2
 * https://github.com/fusion94/Legendary
 *
 * Copyright 2011-2013, http://fusion94.org
 * Licensed under the Mozilla Public License Version 2.0
 */
 
var sexView = Titanium.UI.createView({
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
	url:'http://legendary.damagestudios.net/mobile/season5.php'
});

var refresh = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REFRESH
});

refresh.addEventListener('click', function() {
	webview.reload();
});

Titanium.UI.currentWindow.barColor='#000';
Titanium.UI.currentWindow.setRightNavButton(refresh);
Titanium.UI.currentWindow.add(sexView);
sexView.add(webview);