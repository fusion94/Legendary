var aboutView = Titanium.UI.createView({
	backgroundColor:'#000',
	backgroundImage:'../images/plaid.png',
    bottom:0,
    left:0,
    top:0, 
    right:0	
});

var legendaryLabel = Titanium.UI.createLabel({
	color:'#fff',
	text:'Legendary',
	font:{fontSize:36,fontFamily:'PT Sans'},
	//font:{fontSize:36,fontFamily:'Helvetica'},
	width:'auto',
	height:'auto',
	top:20,
	left:15
});

var legendaryVersion = Titanium.UI.createLabel({
    color:'#fff',
    text:'v ' + Titanium.App.version,
    font:{fontSize:18,fontFamily:'PT Sans'},
    //font:{fontSize:18,fontFamily:'Helvetica'},
    width:'auto',
    height:'auto',
    top:65,
    left:145
});

var legendaryLogo = Titanium.UI.createImageView({
	image:'../images/LegendaryIcon.png',
	width:'auto',
	height:'auto',
	top:5,
	right:15
});

var aboutLabel = Titanium.UI.createLabel({
	color:'#fff',
	text:'Legendary displays catchphrases and memorable quotes from the character Barney Stinson (played by Neil Patrick Harris) from the hit show "How I Met Your Mother"',
	font:{fontSize:18,fontFamily:'PT Sans'},
	//font:{fontSize:18,fontFamily:'Helvetica'},
	width:'auto',
	height:'auto',
	top:115,
	left:15,
	right:15
});

var otherLabel = Titanium.UI.createLabel({
	color:'#fff',
	text:'Designed & Developed by',
	font:{fontSize:18,fontFamily:'PT Sans'},
	//font:{fontSize:18,fontFamily:'Helvetica'},
	width:'auto',
	height:'auto',
	bottom:90
});

var damageLogo = Titanium.UI.createImageView({
	image:'../images/damageweblogo.png',
	width:'auto',
	height:'auto',
	bottom:35
});

Titanium.UI.currentWindow.add(aboutView);
aboutView.add(legendaryLabel);
aboutView.add(legendaryVersion);
aboutView.add(legendaryLogo);
aboutView.add(aboutLabel);
aboutView.add(otherLabel);
aboutView.add(damageLogo);
