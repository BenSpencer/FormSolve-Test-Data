var requiredVersion = 5;
var useRedirect = false;
                         
var flash2Installed = false;
var flash3Installed = false;
var flash4Installed = false;
var flash5Installed = false;
var flash6Installed = false;
var maxVersion = 6;         
var actualVersion = 0;         
var hasRightVersion = false;
var jsVersion = 1.0; 

var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;    
var isWin = (navigator.appVersion.indexOf("Windows") != -1) ? true : false;

jsVersion = 1.1;

if(isIE && isWin){
	document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('flash2Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');
	document.write('flash3Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');
	document.write('flash4Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');
	document.write('flash5Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');  
	document.write('flash6Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n');  
	document.write('</SCR' + 'IPT\> \n');
}

function detectFlash() {  
	if(navigator.plugins) {
		if(navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var isVersion2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + isVersion2].description;

			//alert("Flash plugin description: " + flashDescription);
			var flashVersion = parseInt(flashDescription.charAt(flashDescription.indexOf(".") - 1));

			flash2Installed = flashVersion == 2;    
			flash3Installed = flashVersion == 3;
			flash4Installed = flashVersion == 4;
			flash5Installed = flashVersion == 5;
			flash6Installed = flashVersion >= 6;
		}
	}  	
	
	for(var i = 2; i <= maxVersion; i++) {	
		if (eval("flash" + i + "Installed") == true) actualVersion = i;
	}

	if(navigator.userAgent.indexOf("WebTV") != -1) actualVersion = 2;
	//alert("version detected: " + actualVersion);

	if(actualVersion >= requiredVersion) {
		hasRightVersion = true;						
	}
}

detectFlash();

// f : filename
// i : image to use if flash not found or compat
// v : version of flash file needs to run
// w : width
// h : height
// c : background color
// l : link
function getFlashString(f, i, v, w, h, c, l) {
	if(!c) c = "#ffffff";
	if(!v) v = "4";
	if(!l) l = "#";

	if(actualVersion >= v) {	
		var fStr = "<object id=main codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=" + v + ",0,0,0 height='" + h + "' width='" + w + "' classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 viewastext>";
		fStr +=	"<param name='_cx' value='15822'>";
		fStr +=	"<param name='_cy' value='8043'>";
		fStr +=	"<param name='FlashVars' value='15822'>";
		fStr +=	"<param name='Movie' value='" + f + "'>";
		fStr +=	"<param name='Src' value='" + f + "'>";
		//fStr +=	"<param name='WMode' value='Window'>";
		fStr +=	"<param name='WMode' value='transparent'>";
		fStr +=	"<param name='Play' value='-1'>";
		fStr +=	"<param name='Loop' value='-1'>";
		fStr +=	"<param name='Quality' value='High'>";
		fStr +=	"<param name='SAlign' value=''>";
		fStr +=	"<param name='Menu' value='-1'>";
		fStr +=	"<param name='Base' value=''>";
		fStr +=	"<param name='AllowScriptAccess' value='always'>";
		fStr +=	"<param name='Scale' value='ShowAll'>";
		fStr +=	"<param name='DeviceFont' value='0'>";
		fStr +=	"<param name='EmbedMovie' value='0'>";
		fStr +=	"<param name='BGColor' value='" + c + "'>";
		fStr +=	"<param name='SWRemote' value=''>";
		fStr +=	"<embed wmode='transparent' align=right src='" + f + "' quality=high bgcolor='" + c + "' width='" + w + "' height='" + h + "' name=main type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash'>";
		fStr +=	"</embed>";
		fStr +=	"</object>";
		return fStr;
	} else {
		return "<a href='" + l + "'><img src='" + i + "' width='" + w + "' height='" + h + "' border='0'></a>";
	}
}