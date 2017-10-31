//  This script opens a new popup window that will automatically close when the user 
//  leaves the parent window or closes the browser.  It includes a timout feature to 
//  automatically close the window after a specified amount of time.  The timer resets
//  each time the popup window is focused.  If the user has javascript disabled, 
//  the page will open in a new browser window.
//
//  *  Use the following html code on parent window to trigger the javascript:
//     < a href =  url 
//      target  =  windowName 
//      onClick =  openWindow( url , windowName , winProps , pTime ) 
//      title   =  "This link opens a new window" >
//      
//  *   url = location of the pop-up window
//      windowName = name of popup window (Required) 
//      winProps  = popup window properties (width, height, locations, scrollbars, etc.)
//      pTime = (optional) number of seconds for the timout feature. Omit or set to 0 to disable timeout.
//      
//  *   Add onBeforeUnload="closeWin()" onUnload="closeWin()" event handlers into the BODY tag
//
//  *   Add the following script to the head of the popup window:
//      if (window.opener) window.opener.ResetTimer();
//
//  *   Add the following code to the body of the popup window:
//        <script language="JavaScript">
//        <!--
//           document.write("<a href='javascript:window.close()'>Close Window</a>");
//        // -->
//        </script>
//        <noscript>Close this window to return ---- .</noscript>
//
//   © 2004 Southwest Airlines Co.  

var sUserAgent = navigator.userAgent.toLowerCase();
var isOpera = (sUserAgent.indexOf('opera')!=-1)?true:false;

var tmStart  = null;
var pTime = 0;

newWindow = null;
winProps = null;

function openWindow(url, windowName, winProps, pTime)   { 
   var tmStart = new Date();
   var WinName = windowName?windowName:'_blank'; 
   if(!winProps) winProps = 'width=400,height=350,scrollbars,resizable,toolbar,status,menubar,location';
   newWindow = window.open(url, WinName, winProps);
   
   if(newWindow && !isOpera) newWindow.focus();
   if (pTime > 0) {   
   Start(pTime);   
   } 
   return (newWindow)?false:true;      
}   
   
function Start(pTime) {
   tmStart = new Date();
   Timer = setTimeout(function() { UpdateTimer(pTime)}, 1000);   
}

function UpdateTimer(pTime) {
   if(Timer) {
      clearTimeout(Timer);
      Timer  = 0;      
   }

   if(!tmStart)
      tmStart   = new Date();
      
      var   tmDate = new Date();
      var   tmDiff = tmDate.getTime() - tmStart.getTime();
      
      tmDate.setTime(tmDiff);
      cntDown = tmDate.getSeconds();
      
      if (cntDown != pTime)  {
         Timer = setTimeout(function() { UpdateTimer(pTime)}, 1000);   
      }      
      else {
         Stop();
    }
}

function Stop() {
   if(Timer) {
      clearTimeout(Timer);
      Timer  = 0;
   }
   tmStart = null;
   closeWin();  
}

function closeWin() {
   if (newWindow && newWindow.open && !newWindow.closed) newWindow.close();
}
        
function ResetTimer() {
   tmStart = null;
}
