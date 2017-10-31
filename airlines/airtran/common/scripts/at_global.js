/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 * collective initialization routines
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

window.onload = function() {	
	loadStyle();
	init();
}


/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 * style switcher functions written by Paul Sowden
 * details @ ALA: http://www.alistapart.com/stories/alternate/
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

var largerText = false;
 
function toggleText(linkObj) {
	if (! largerText) {
		largerText = true;
		if (linkObj)

			linkObj.innerHTML = 'shrink type';
		createCookie('style', 'larger', 365);
		setActiveStyleSheet('Larger text');
	} else {
		largerText = false;
		if (linkObj)
			linkObj.innerHTML = 'enlarge type';
		createCookie('style', 'normal', 365);
		setActiveStyleSheet('');
	}
}

function setActiveStyleSheet(title) {
	if (! document.getElementsByTagName) return;
	
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName('link')[i]); i++) {
		if(a.getAttribute('rel').indexOf('style') != -1 && a.getAttribute('title')) {
			a.disabled = true;
			if (a.getAttribute('title') == title) a.disabled = false;
		}
		// alert(a.getAttribute('title') + ': ' + a.disabled);
	}
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = '; expires='+date.toGMTString();
	}
	else expires = '';
	document.cookie = name+'='+value+expires+'; path=/';
}

function readCookie(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function loadStyle(e) {
	var cookie = readCookie("style");

	if (cookie == 'larger') {
		if (document.getElementById) {
			if (document.getElementById('toggleTextLink') != null) {
				if (! largerText) {
					toggleText(document.getElementById('toggleTextLink'));
				} else {
					document.getElementById('toggleTextLink').innerHTML = "shrink type"
				}
			}
		}
	}
}

function emailPage(){
   var loc =  top.location;
   var to = '';
   var subject = top.document.title;
  
   var body = 'Look at this page that I found on AirTran Airways\' website:\r\r';   

  	// BUILD MAIL MESSAGE COMPONENTS 
  	var doc = "mailto:" + to +  
    	"?subject=" + escape(subject) + 
    	"&body=" + escape(body) + escape(loc); 

  	// POP UP EMAIL MESSAGE WINDOW
  	window.location = doc;
}

var cookie = readCookie("style");
if (cookie == 'larger') {
	toggleText();
}


function openAd(url, w,h)	{
window.open(url, 'ads', 'toolbar=yes,location=no,directories=no,status=no,scrollbars=yes,resizable=yes, width= '+w+', height='+h+' ');
}

function printPage(url, w,h)	{
window.open(url, 'webpage', 'toolbar=no,menubar=yes,location=no,directories=no,status=no,scrollbars=yes,resizable=yes, width= '+w+', height='+h+' ');
}

function init() {}



/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 * domready.js
 * via http://snipplr.com/view.php?codeview&id=6029
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

if (typeof Event == 'undefined') Event = new Object();
Event.domReady = {
  add: function(fn) {
    if (Event.domReady.loaded) return fn();
    
    var observers = Event.domReady.observers;
    if (!observers) observers = Event.domReady.observers = [];
    observers[observers.length] = fn;
    
    if (Event.domReady.callback) return;
    Event.domReady.callback = function() {
      if (Event.domReady.loaded) return;
      
      Event.domReady.loaded = true;
      if (Event.domReady.timer) {
        clearInterval(Event.domReady.timer);
        Event.domReady.timer = null;
      }
      
      var observers = Event.domReady.observers;
      for (var i = 0, length = observers.length; i < length; i++) {
        var fn = observers[i];
        observers[i] = null;
        fn(); // make 'this' as window
      }
      Event.domReady.callback = Event.domReady.observers = null;
    };
    
    var ie = !!(window.attachEvent && !window.opera);
    var webkit = navigator.userAgent.indexOf('AppleWebKit/') > -1;
    
    if (document.readyState && webkit) {
      Event.domReady.timer = setInterval(function() {
        var state = document.readyState;
        if (state == 'loaded' || state == 'complete') {
          Event.domReady.callback();
        }
      }, 50);
    } else if (document.readyState && ie) {
      var src = (window.location.protocol == 'https:') ? '://0' : 'javascript:void(0)';
      document.write(
        '<script type="text/javascript" defer="defer" src="' + src + '" ' + 
        'onreadystatechange="if (this.readyState == \'complete\') Event.domReady.callback();"' + 
        '><\/script>');
    } else {
      if (window.addEventListener) {
        document.addEventListener("DOMContentLoaded", Event.domReady.callback, false);
        window.addEventListener("load", Event.domReady.callback, false);
      } else if (window.attachEvent) {
        window.attachEvent('onload', Event.domReady.callback);
      } else {
        var fn = window.onload;
        window.onload = function() {
          Event.domReady.callback();
          if (fn) fn();
        }
      }
    }
  }
}