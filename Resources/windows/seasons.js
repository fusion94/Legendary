/*
 * Legendary version 1.2
 * https://github.com/fusion94/Legendary
 *
 * Copyright 2011-2013, http://fusion94.org
 * Licensed under the Mozilla Public License Version 2.0
 */
 
var defaultColor = "#000";

var data = [

	{title:'Season 1', hasChild:true, url:'seasons/season1.js',color:defaultColor},
	{title:'Season 2', hasChild:true, url:'seasons/season2.js',color:defaultColor},
	{title:'Season 3', hasChild:true, url:'seasons/season3.js',color:defaultColor},
	{title:'Season 4', hasChild:true, url:'seasons/season4.js',color:defaultColor},
	{title:'Season 5', hasChild:true, url:'seasons/season5.js',color:defaultColor},
	{title:'Season 6', hasChild:true, url:'seasons/season6.js',color:defaultColor},
	{title:'Season 7', hasChild:true, url:'seasons/season7.js',color:defaultColor}
];

// create table view
var tableview = Titanium.UI.createTableView({
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
	backgroundImage:'../images/plaid.png',
	//backgroundColor: 'transparent',
	selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.url)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.url,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);