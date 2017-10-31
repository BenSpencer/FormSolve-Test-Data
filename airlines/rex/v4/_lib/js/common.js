// the following are set in the page header:

var secure; //this variable will be set true for the secure page
			//set this 'true' just after the include of this file 


// rootPath
// pLd
var IE = document.all ? true : false;
var IE4 = (document.all && !document.getElementById) ? true : false;
var NS4 = (document.layers) ? true : false;
var IE5 = (document.all && document.getElementById) ? true : false;
var NS6 = (document.getElementById && !document.all) ? true : false;
var NS7 = (document.getElementById && !document.all && window.navigator.userAgent.indexOf("Netscape/7") != -1) ? true : false;
var OP = window.navigator.userAgent.indexOf("Opera") != -1 ? true : false;
var DOM = document.getElementById;

var agt = navigator.userAgent.toLowerCase();
var is_win = ((agt.indexOf("win")!= -1) || (agt.indexOf("16bit")!= -1));
var is_mac = (agt.indexOf("mac")!= -1);

var rePosArr = new Array(); // Keep the function names to reposition in an array (set from page)
var initArr = new Array(); // Keep names of initilisation functions in an array (set from page)
var initRePos = false; // Determines whether page needs repositioning after load
var initFini = false; // Once scripts have finished configuring

function initCommon() {
	if(document.images["welcomexy"]) setLayer('welcomeLayer', 1, s_getStart("x", "welcomexy") - 190, s_getStart("y", "welcomexy") + 10);
	var ts = readCookie("textSize");
	if(ts && ts != "normal") arrPut("initArr", "setActiveStyleSheet('" + ts + "')");
}

function rePosCommon() {	
	if(document.images["welcomexy"]) setLayer('welcomeLayer', 1, s_getStart("x", "welcomexy") - 190, s_getStart("y", "welcomexy") + 10);	
}

function createCookie(name,value,days) {
	if(days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = ";expires="+date.toGMTString();
	} else
		expires = "";

	document.cookie = name + "=" + value + expires + ";path=/;";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}
	
	return null;
}

function setActiveStyleSheet(title) {
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
			a.disabled = true;
			if(a.getAttribute("title") == title) a.disabled = false;
		}
	}
	createCookie("textSize", title, 365);
	
	if(!initFini)
		initRePos = true;
	else
		rePos();
}

var opac = 0;
// lname : layer name
// d : dirction in / out
function fade(lname, d) {
	if(!DOM || OP) return;
	if(!d) d = "in";	
	var incr;
	var targ;
	if(d == "in") {
		incr = 5;
		targ = 100;
	} else {
		incr =-5;
		targ = 0;
	}
		
	if(opac!= targ) { 
		opac += incr; 
		//if(IE5 && !is_mac) document.getElementById(lname).filters.alpha.opacity = opac; 
		if(NS6) document.getElementById(lname).style.MozOpacity = opac/100; 
		setTimeout("fade('" + lname + "', '" + d + "')", 50); 
	} 
} 

// capture mouse positions
if(!IE) document.captureEvents(Event.MOUSEMOVE) 
document.onmousemove = getMouseXY;
var mseX = 0; // mouse x
var mseY = 0; // mouse y

// get mouse screen positions
function getMouseXY(e) {
	if(IE) {
		mseX = event.clientX + document.body.scrollLeft + window.screenLeft;
		mseY = event.clientY + document.body.scrollTop + window.screenTop;
	} else {
		mseX = e.pageX + window.screenX + 10;
		mseY = e.pageY + window.screenY + 120;
	}
	  
	if(mseX < 0) mseX = 0;
	if(mseY < 0) mseY = 0;
}


// Default initialisation function
function init() {
	pLd = true;
	arrLoad(initArr);
}

// Default resize function
function rePos() {
	if(pLd)
		arrLoad(rePosArr);
}

// opens window;
// p : window page to open
// w : width
// h : height
// x : x pos
// y : y pos 
function popUpWin(p, w, h, x, y) {
	
	if(x == null) x = screenCenter(w, h)[0];
	if(y == null) y = screenCenter(w, h)[1];
	
	winOpen = window.open(p, "pupUpWin", "width=" + w + ",height=" + h + ",top=" + y + ",left=" + x + ",scrollbars=no,toolbar=no,location=no,resizable=no");
}

// opens calender
// d : day
// m : month
// f : form
// o : offset
function popUpCal(d, m, f, o) {
	if(!o) o = 0;
	popUpWin(rootPath + "v2/calender.aspx?day=" + d + "&month=" + m + "&form=" + f + "&offset=" + o, 240, 210, mseX + 10, mseY - 10);
	//popUpWin(rootPath + "/calender.aspx?day=" + d + "&month=" + m + "&form=" + f + "&offset=" + o, 240, 200, mseX + 10, mseY - 10);
	//popUpWin(rootPath + "test.aspx?day=" + d + "&month=" + m + "&form=" + f + "&offset=" + o, 240, 200, mseX + 10, mseY - 10);
}

// returns an array with centre points 
// xL the x length of the window to open
// yL the y length
function screenCenter(xL, yL) {
	var scrW = screen.width;
	var scrH = screen.height;
	
	var xPos = 0;
	var yPos = 0;
	
	if(scrW > xL)
		xPos = Math.floor((scrW - xL) / 2);
		
	if(scrH > yL)
		yPos = Math.floor(((scrH - yL) / 2));
		
	cooArr = new Array(xPos, yPos);
	return cooArr;
}

// Places an item into specified position of an array
// n	: name of array
// v	: value to add
// pos	: position to add value
function arrPut(n, v, pos) {
	arr = eval(n);
	l = arr.length;
	t1 = null;
	t2 = null;
	if(pos >= l || !pos && pos != 0)
		arr[l] = v;
	else {
		for(i = 0; i < l; i++) {
			if(i == pos) {
				t1 = arr[i];
				arr[i] = v;
			}
			if(t1) {
				if(i + 1 < l)
					t2 = arr[i + 1];
				arr[i + 1] = t1;
				t1 = null;
			} else if(t2) {
				if(i + 1 < l)
					t1 = arr[i + 1];
				arr[i + 1] = t2;
				t2 = null;
			}
		}
	}
}

// executes values in array
// n	: name of array
function arrLoad(n) {
	arr = eval(n);
		
	for(i = 0; i < arr.length; i++)
		eval(arr[i]);
}

// o	: origin
// d	: destination
// i	: image name
// day	: day
// mon	: month
function bookForm(o, d, i, day, mon) {
	var l = null;
	if(NS4 && !isWebImg(iUp)) {			
		imgs = document.layers[infL].document.images;
		l = infL;
	} else {
		imgs = document.images;
	}
	
	iEx = ".gif";
	if(isWebImg(i)) iEx = "2.gif";
	
	if(iUp) imgs[iUp].src = up + iEx;
	
	if(NS4 && isWebImg(i)) {
		imgs = document.images;
		l = null;
	} else {
		l = infL;
	}
	
	if(iUp == i) {												
		origin = null;
		dest = null;
		setLayer(frmL, 0, s_getStart("x", i, l) + (isWebImg(i) ? 0 : frmOffX), s_getStart("y", i, l) + frmOffY);
		imgs[i].src = up + iEx;
		iUp = null;																					
	} else {												
		origin = o;
		dest = d;
		
		if(day) {
			copyValue(day, fbn['depDay']);
			copyValue(day, fgt['date.0']);
			fbn['depDay'].onchange();
			fgt['date.0'].onchange();
		}
			
		if(mon) {
			copyValue(mon, fbn['depMon']);
			copyValue(mon, fgt['mon_abbr.0']);
			fbn['depMon'].onchange();
			fgt['mon_abbr.0'].onchange();
		}
			
		copyValue(o, fbn['origin']);
		copyValue(o, fgt['depart']);
		copyValue(d, fgt['dest.0']);		
		
		setLayer(frmL, 1, s_getStart("x", i, l) + (isWebImg(i) ? 0 : frmOffX), s_getStart("y", i, l) + frmOffY);
		imgs[i].src = dn + iEx;
		iUp = i;																						
	}
}

// i	: image name
function isWebImg(i) {
	if(i) {
		if(i.indexOf("web") == -1)
			return false;
		else
			return true;
	}
	return false;		
}

// sets the GetThere form values and submits
function bookFlight() {
	copyValue(fbn['depDay'][fbn['depDay'].selectedIndex].value, fgt['date.0']);
	copyValue(fbn['depMon'][fbn['depMon'].selectedIndex].value, fgt['mon_abbr.0']);
	copyValue(fbn['retDay'][fbn['retDay'].selectedIndex].value, fgt['date.1']);
	copyValue(fbn['retMon'][fbn['retMon'].selectedIndex].value, fgt['mon_abbr.1']);
	
	copyValue(fbn['adults'][fbn['adults'].selectedIndex].value, fgt['persons.1']);
	copyValue(fbn['seniors'][fbn['seniors'].selectedIndex].value, fgt['persons.2']);
	//copyValue(fbn['child'][fbn['child'].selectedIndex].value, fgt['persons.3']);
	
	copyValue(fbn['origin'][fbn['origin'].selectedIndex].value, fgt['depart']);
	copyValue(dest, fgt['dest.0']);
					
	if(validateAir(fgt)) fgt.submit();
}

// l : layer name
// s : string
function writeLayer(l, s) {
	
	if(NS4) 
	{
		//alert('NS4');	
		document.layers[l].document.open();
		document.layers[l].document.write(s)
		document.layers[l].document.close();
	} 
	else if(IE4) 
	{
		//alert('NS4');
		document.all[l].innerHTML = s;
	} 
	else if(IE5 || NS6) 
	{
		//alert(document.getElementById(l).Id);
		document.getElementById(l).innerHTML = s;
		//alert(s);
	}			
}

// Return Layer Object
function getObj(id) {			
	if (NS4) {return eval("document." + id);
		origWidth = innerWidth;
		origHeight = innerHeight;
	} else if (IE4) {
		return eval("document.all." + id);
	} else if (IE5 || NS6) {
		return document.getElementById(id);
	}
}

// id	: layer id
// v	: visible 1 , 0
// x	: x coord
// y	: y coord
function setLayer(id, v, x, y) {
	obj = getObj(id);
	if (NS4) {
		if(v != null) {
			var str = (v) ? 'show' : 'hide';
			obj.visibility = str;
		}
		if(x) obj.left = x;
		if(y) obj.top = y;	
											
	} else {
		if(v != null) {
			var str = (v) ? 'visible' : 'hidden';
			obj.style.visibility = str;
		}
		if(x) obj.style.left = x;
		if(y) obj.style.top = y;
	}	
}

// used to copy values to a form field
// value	: value to put in field
// el		: element ref to populate
function copyValue(value, el) {
	for(i = 0; i < el.length; i++) {
		if(el[i].value == value) 
			el[i].selected = true;
		else
			el[i].selected = false;
	}
}

function changeIndex(f, n, i) {
	e = eval("f['" + field + "']");
	if(e) {
		for(i = 0; i < e.length; i++) {
			if(i == index)
				e[i].selected = true;
			else
				e[i].selected = false;
		}
	}
}	

// set the date dropdowns to current date
// el		: element ref
// type		: date type
// v		: value
// o		: offset
function setDD(el, type, v, o) {
	if(!o) o = 0;
	var td = new Date();
	var d = new Date(td.getFullYear(), td.getMonth(), td.getDate() + 1);

	if(type == "month") {
		count = 12;
		sel = parseInt(v != null ? v : d.getMonth()) + o;
	} else {
		count = 31;
		sel = parseInt(v != null ? v : d.getDate() - 1) + o;
	}
	
	for(x = 0; x < count + o; x++) {
		if(x == sel)
			el[x].selected = true;		
		else
			el[x].selected = false;
	}
}

// key	: querysting name to return value
function QueryString(key)
{
	var value = null;
	for (var i=0;i<QueryString.keys.length;i++)
	{
		if (QueryString.keys[i]==key)
		{
			value = QueryString.values[i];
			break;
		}
	}
	return value;
}

// s : full string
// r : string to replace
// v : value to replace with
function replaceText(s, r, v) {
	while(s.match(r))
		s = s.replace(r, v);
	
	return s;
}

QueryString.keys = new Array();
QueryString.values = new Array();
function QueryString_Parse()
{
	var query = window.location.search.substring(1);
	var pairs = query.split("&");
	
	for (var i=0;i<pairs.length;i++)
	{
		var pos = pairs[i].indexOf('=');
		if (pos >= 0)
		{
			var argname = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos+1);
			QueryString.keys[QueryString.keys.length] = argname;
			QueryString.values[QueryString.values.length] = value;		
		}
	}
}
QueryString_Parse();