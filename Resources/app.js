// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var quotesWin = Titanium.UI.createWindow({  
    title:'Quotes',
    url:'windows/quotes.js',    
    backgroundColor:'#000',
    barColor:'#000'
});

var quotesTab = Titanium.UI.createTab({  
    icon:'images/light_comment.png',
    title:'Quotes',
    window:quotesWin
});

var seasonsWin = Titanium.UI.createWindow({  
    title:'Seasons',
    url:'windows/seasons.js',
    backgroundColor:'#000',
    barColor:'#000'
});

var seasonsTab = Titanium.UI.createTab({  
    icon:'images/light_TV.png',
    title:'Seasons',
    window:seasonsWin
});

var popularWin = Titanium.UI.createWindow({  
    title:'Popular',
    url:'windows/popular.js',
    backgroundColor:'#000',
    barColor:'#000'
});

var popularTab = Titanium.UI.createTab({  
    icon:'images/light_star.png',
    title:'Popular',
    window:popularWin
});

var aboutWin = Titanium.UI.createWindow({  
    title:'About',
    url:'windows/about.js',
    backgroundColor:'#000',
    barColor:'#000'
});

var aboutTab = Titanium.UI.createTab({  
    icon:'images/light_info.png',
    title:'About',
    window:aboutWin
});

//  add tabs
tabGroup.addTab(quotesTab);  
tabGroup.addTab(seasonsTab);  
tabGroup.addTab(popularTab);  
tabGroup.addTab(aboutTab); 

// open tab group
setTimeout(function() {
    tabGroup.open({
    transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,
    // AnimationStyle Duration in milliseconds
    duration:1000}) 
}, 2500);
