/*
   Deluxe Menu Data File
   Created by Deluxe Tuner v4.1
   http://deluxe-menu.com
*/


// -- Deluxe Tuner Style Names
var itemStylesNames=["Top Item",];
var menuStylesNames=["Submenu",];
// -- End of Deluxe Tuner Style Names

//--- Common
var menuIdentifier="deluxeMenu";
var isHorizontal=1;
var smColumns=1;
var smOrientation=0;
var dmRTL=0;
var pressedItem=-2;

//--- Dimensions
var menuWidth="700px";
var menuHeight="";
var smWidth="200px";
var smHeight="";

//--- Positioning
var absolutePos=0;
var posX="";
//var posY="";
var posY="12px";
var subMenuAlign="left";
var subMenuVAlign="top";
var topDX=0;
var topDY=0;
var DX=0;
var DY=0;

//--- Font
//var fontStyle=["normal 11px Trebuchet MS, Tahoma","normal 11px Trebuchet MS, Tahoma"];
var fontStyle=["bold 11px Tahoma, Trebuchet MS","bold 11px Tahoma, Trebuchet MS"];
//var fontColor=["#000000","#FFFFFF"];
var fontColor=["#000000","#000000"];
var fontDecoration=["none","none"];
var fontColorDisabled="#84568F";

//--- Appearance
var menuBackColor="";
//var menuBackColor="#003366"; //test
var menuBackImage="";
var menuBackRepeat="repeat";
 var menuBorderColor="#242424";
//var menuBorderColor="#003366";
var menuBorderWidth="0px";
var menuBorderStyle="solid";
var smFrameImage="";
var smFrameWidth=0;

//--- Item Appearance
//var itemBackColor=["#CB99D2","#851F85"];
var itemBackColor=["#EAE8E7","#FCD116"];
var itemBackImage=["",""];
var itemSlideBack=0;
//var itemBorderWidth="1px";
var itemBorderWidth="0px";
//var itemBorderColor=["#CB99D2","#3D0D48"];
var itemBorderColor=["#003366","#003366"];
var itemBorderStyle=["solid","solid"];
var itemSpacing=0;
//var itemPadding="0px 7px 0px 5px";
var itemPadding="0px 0px 0px 5px";
var itemAlignTop="left";
var itemAlign="left";
var itemCursor="pointer";

//--- Item Icons
var iconTopWidth="";
var iconTopHeight="";
var iconWidth="";
var iconHeight="";
//var arrowImageMain=["deluxe-menu.files/arrv_white.gif",""];
//var arrowImageMain=["v6/_lib/js/deluxe-menu.files/arrv_white.gif",""];
var arrowImageMain=["",""];
var arrowWidth=7;
var arrowHeight=7;
//var arrowImageSub=["deluxe-menu.files/arr_black.gif","deluxe-menu.files/arr_white.gif"];
var arrowImageSub=[ "v6/_lib/js/deluxe-menu.files/arr_black.gif", "v6/_lib/js/deluxe-menu.files/arr_black.gif"];
var arrowWidthSub=0;
var arrowHeightSub=0;

//--- Separators
var separatorImage="";
var separatorColor="";
var separatorWidth="100%";
var separatorHeight="3px";
var separatorAlignment="left";
var separatorVImage="";
var separatorVColor="";
var separatorVWidth="3px";
var separatorVHeight="100%";
var separatorPadding="0px";

//--- Transitional Effects & Sound
//var transparency="85";
var transparency="100";
var transition=104;
var transOptions="";
var transDuration=350;
var transDuration2=200;
var shadowLen=3;
var shadowColor="#B1B1B1";
var shadowTop=0;
var onOverSnd="";
var onClickSnd="";

//--- CSS Support (CSS-based Menu)
var cssSubmenu="";
var cssItem=["",""];
var cssItemText=["",""];

//--- Floatable Menu
var floatable=0;
var floatIterations=6;
var floatableX=1;
var floatableY=1;
var floatableDX=15;
var floatableDY=15;

//--- AJAX-like Technology
var dmAJAX=0;
var ajaxReload=0;

//--- Advanced Features
var saveNavigationPath=1;
var noWrap=0;
var showByClick=0;
var smShowPause=200;
var smHideOnClick=1;
var smHidePause=1000;
var smSmartScroll=1;
var topSmartScroll=0;
var dm_writeAll=1;
var dmObjectsCheck=0;
var useIFRAME=0;
var popupMode=0;
var dynamic=0;
var keystrokes=0;
var dm_focus=1;
var dm_actKey=113;
//var pathPrefix_img="";
var pathPrefix_img= rootPath ;
//var pathPrefix_link="";
var pathPrefix_link=rootPath ;

//--- Movable Menu
var movable=0;
var moveWidth=12;
var moveHeight=20;
var moveColor="#DECA9A";
var moveImage="";
var moveCursor="move";
var smMovable=0;
var closeBtnW=15;
var closeBtnH=15;
var closeBtn="";
//var blankImage="deluxe-menu.files/blank.gif";
var blankImage= rootPath + "v6/_lib/js/deluxe-menu.files/blank.gif";

//--- Deprecated Features
var beforeItemImage=["",""];
var afterItemImage=["",""];
var beforeItemImageW="";
var afterItemImageW="";
var beforeItemImageH="";
var afterItemImageH="";
var statusString="";
var itemTarget="";
var dmSearch=0;

var itemStyles = [
   // ["itemHeight=21px","itemBackImage=deluxe-menu.files/btn_magentablack.gif,deluxe-menu.files/btn_magenta.gif","itemSlideBack=3","itemBorderWidth=0px","fontStyle='normal 11px Tahoma','normal 11px Tahoma'","fontColor=#FFFFFF,#FFFFFF"],
    ["itemHeight=32px","itemBackImage=v6/_lib/img/BLUESTRIP_NAVBAR_Background.gif,v6/_lib/img/NAVBAR_HOVER_STRIP.gif","itemSlideBack=1","itemBorderWidth=0px","fontStyle='bold 11px Tahoma','bold 11px Tahoma'","fontColor=#FFFFFF,#FFFFFF"],
];
var menuStyles = [
   // ["menuBackColor=#CB99D2","menuBorderWidth=1px","menuBorderStyle=solid","menuBorderColor=#242424","itemSpacing=2","itemPadding=1px 5px 1px 10px"],
    ["menuBackColor=#003366","menuBorderWidth=1px","menuBorderStyle=solid","menuBorderColor=#242424","itemSpacing=0","itemPadding=5px 5px 5px 10px"],
  
];
dm_init();