if(booking.env.enable_scripts_tracking){booking.env.scripts_tracking.landing={loaded:true,run:false}
}booking.ensureNamespaceExists(sNSStartup);
booking[sNSStartup].back_to_search_anchor={priority:9,init:function(){var c=$("#back_to_search.show_anchor");
var f=$("#searchboxInc");
if(!f.length){return false
}var e=f.height()+f.offset().top;
var d=null;
var b=false;
var a=function(){if(!b){b=true;
c.slideDown("slow");
c.css("visibility","visible")
}};
$(".back_to_search").click(function(){$("body,html").animate({scrollTop:0},500);
return false
});
$(window).bind("scroll.back_to_search_anchor",function(){if(e<$(window).scrollTop()){if(!b&&d==null){d=setTimeout(a,200)
}}else{if(b){c.slideUp();
b=false;
clearTimeout(d);
d=null
}}})
},initElse:function(){}};
booking[sNSStartup].cp_consolidated_in_and_around=(function(){var d=function(){var e=$(".tab_promotions_wrapper").find("h4.in_and_around_tabs");
var f=$(".tab_promotions_wrapper").find(".tab_content");
a(e,f);
c();
b(e[0],f[0])
};
var c=function(){$(".tab_promotions_wrapper").delegate("h4.in_and_around_tabs","click",function(){var e="."+$(this).data("tabcontent");
b(this,e)
})
};
var b=function(e,f){$(e).siblings().removeClass("selected");
$(f).siblings().hide();
$(e).addClass("selected");
$(f).show()
};
var a=function(g,h){$.each(g,function(j,k){$(k).data("tabcontent","tab_content_"+j);
$(h[j]).addClass("tab_content_"+j)
});
var e=$('<div class="tab_container"></div>');
var f=$('<div class="tab_content_container"></div>');
e.append(g);
f.append(h);
$(".tab_promotions_wrapper").find("h3").after(e,f)
};
return{init:d}
}());
booking[sNSStartup].destinationThemes={priority:8,init:function(){$(".city_list_info").click(function(b){var a=$(this).attr("class");
if($(b.target).hasClass("city_price")){booking.google.trackEvent(booking.google.clickTracker,"DestThemes","City Closed Price - "+a);
return
}if($(this).next(".hotels_in_city").hasClass("closed")){$(".hotels_in_city.opened").each(function(){booking.google.trackEvent(booking.google.clickTracker,"DestThemes","City Open HList - "+a);
$(this).removeClass("opened");
$(this).slideUp();
$(this).addClass("closed");
$(this).parent().find(".city_from_price").show()
});
$(this).next(".hotels_in_city").removeClass("closed");
$(this).next(".hotels_in_city").slideDown();
$(this).next(".hotels_in_city").addClass("opened");
$(this).find(".city_from_price").hide()
}else{if($(this).next(".hotels_in_city").hasClass("opened")){booking.google.trackEvent(booking.google.clickTracker,"DestThemes","City Close HList - "+a);
$(this).next(".hotels_in_city").removeClass("opened");
$(this).next(".hotels_in_city").slideUp();
$(this).next(".hotels_in_city").addClass("closed");
$(this).parent().find(".city_from_price").show()
}}});
$(".city_list_info").hover(function(){$(this).find(".cityimage_marker").addClass("hovered");
$(this).find("h3.cityname").addClass("hovered");
$(this).find(".city_from_price a").addClass("hovered")
},function(){$(this).find(".cityimage_marker").removeClass("hovered");
$(this).find("h3.cityname").removeClass("hovered");
$(this).find(".city_from_price a").removeClass("hovered")
});
$(".hotel_block").click(function(){var b=$(this).attr("class");
booking.google.trackEvent(booking.google.clickTracker,"DestThemes","Hotel: "+b);
var a=$(this).find(".hotelname").attr("href");
location.href=a
});
$(".showall_in_city").click(function(){var a=$(this).attr("class");
booking.google.trackEvent(booking.google.clickTracker,"DestThemes","City Show All - "+a)
})
}};
function DSF_url_builder(){for(var a in this.buckets){if(this.buckets.hasOwnProperty(a)){this.buckets[a]=[]
}}this.processed=false
}DSF_url_builder.prototype.order=["themes","continents","countries","regions","cities"];
DSF_url_builder.prototype.buckets=[];
DSF_url_builder.prototype.buckets.continents=[];
DSF_url_builder.prototype.buckets.countries=[];
DSF_url_builder.prototype.buckets.regions=[];
DSF_url_builder.prototype.buckets.cities=[];
DSF_url_builder.prototype.buckets.themes=[];
DSF_url_builder.prototype.basic_url=booking.env.dsf_basic_url;
DSF_url_builder.prototype.processed=false;
DSF_url_builder.prototype.processBasicUrl=function(){var d={};
if(!this.basic_url){return d
}var e=this.basic_url.split(".");
var h=e[0];
h=h.replace(/^\//,"");
var a=h.split("/");
d.action_name=a.shift();
if(!this.processed){var g;
for(var b=0;
b<a.length;
b++){var c=a[b];
if(g){this.addToBucket(g,c)
}if($.inArray(c,this.order)){g=c
}}}this.processed=true;
d.extension="."+e.slice(1,e.length).join(".");
return d
};
DSF_url_builder.prototype.setBasicUrl=function(a){this.basic_url=a
};
DSF_url_builder.prototype.addCity=function(a){this.addToBucket("cities",a)
};
DSF_url_builder.prototype.addCountry=function(a){this.addToBucket("countries",a)
};
DSF_url_builder.prototype.addRegion=function(a){this.addToBucket("regions",a)
};
DSF_url_builder.prototype.addTheme=function(a){this.addToBucket("themes",a)
};
DSF_url_builder.prototype.addContinent=function(a){this.addToBucket("continents",a)
};
DSF_url_builder.prototype.addToBucket=function(b,a){if($.inArray(a.toLowerCase(),this.buckets[b])>-1){return
}this.buckets[b].push(a.toLowerCase())
};
DSF_url_builder.prototype.getUrl=function(d){var b="";
if(!d){b+="http://"+booking.env.b_hostname
}var e=this.processBasicUrl();
b+="/"+e.action_name;
var a=this.order.length;
for(var c=0;
c<a;
c++){var f=this.order[c];
if(!this.buckets[f]||this.buckets[f].length===0){continue
}b+="/"+f+"/";
b+=this.buckets[f].sort().join("/")
}b+=e.extension;
return b
};
booking[sNSExperiments].local_staff_recommendations=(function(){var g=0;
var h;
var e;
var i=500;
var b=5000;
var c;
var k=$("#sliderWrapper .next");
var f=$("#sliderWrapper .prev");
var d=function(){c.eq(g).fadeOut(i);
if(g==h-1){g=0
}else{g++
}c.eq(g).fadeIn(i)
};
var a=function(){c.eq(g).fadeOut(i);
if(g==0){g=h-1
}else{g--
}c.eq(g).fadeIn(i)
};
k.click(function(){d()
});
f.click(function(){a()
});
var j=function(){c=$("#districtsSlider li");
h=c.length;
c.eq(g).fadeIn(i);
e=setInterval(d,b);
$("#sliderWrapper").hover(function(){clearInterval(e)
},function(){e=setInterval(d,b)
})
};
return{init:j}
}());
$(function(){if(!B.atlas){return
}B.atlas.define("atlas-common-markers",["util-env"],function(f){var b,d=f.get("destinationId"),m=false,j=100;
function e(o,t,n){var y,v=35,s=56,p=5,w=27,u=this.ubber.$domNode,r={w:u.width(),h:u.height()},q={w:o.outerWidth(),h:o.outerHeight()};
s=(s>r.w-n.x-p)?p:s;
if((q.w+p+s>r.w)){q.w=r.w-p-s;
o.find(".iw-container").css({"max-width":q.w})
}y=n.x-p-q.w/2;
y=(y+q.w+p>r.w)?r.w-q.w-p-s:y;
return{x:(y-s<3)?3:y,y:(n.y+q.h>r.h-v)?n.y-q.h-w:n.y}
}function k(n){n.setIW({disablePan:true,className:"iw-overlay-lp",engine:"html",getPosition:e,isFixed:true})
}function i(){var n=this;
n.getMarkers(function(p){p=p||{};
var r,o=[].concat(p.b_hotels||[],p.b_cities||[],p.b_airports||[]),q=o.length;
n.updateMarkers(o);
if(d){while(q--){r=o[q];
if(r&&d===r.b_id){if(B.atlas.getVariant("eGBUAeCQWKXYZET")){n.setMarkerOptions(r.b_id,{cursor:"default"})
}n.setMarkerType(r.b_id,r.b_marker_type+"_current");
break
}}}});
n.closeIW()
}function h(n){var o=this;
if(b){clearTimeout(b)
}b=setTimeout(function(){o.setIconHover(n.id);
if(n.type==="geosearch_place"&&B.atlas.getVariant("eGHMDJKe")>0){o.openIW(n.id,n.data)
}else{if(/city|airport/.test(n.type)){o.openIWLoading(n.id);
if(n.data&&n.data.b_id===d){o.setIW({className:"iw-overlay-lp iw-"+n.type+"_current"})
}o.openIW(n.id,n.data)
}else{o.openIWLoading(n.id);
o.getIW(n.id,function(p){p.b_map_nights=f.get("checkinCheckoutInterval");
p.map_price_per_x_nights_txt=f.get("transPricePerXNights");
if(B.atlas.getVariant("eGYSaBXeHbCNHLDEMO")){p.transLengthOfStayExperiment=f.get("transLengthOfStayExperiment")
}o.openIW(n.id,p)
})
}}},j)
}function c(n){var o=this;
if(b){clearTimeout(b)
}o.setIconOut(n.id);
o.closeIW();
o.setIW({className:"iw-overlay-lp"})
}function a(o){var q=this,n=q.getMarker(o.id),p=(n&&n.b_url)?n.b_url:"";
if(p&&!(n.data.b_id===d&&B.atlas.getVariant("eGBUAeCQWKXYZET"))){location.assign(p)
}}function g(p,n){var o=this;
if(!n){return
}if(!o.getMarker(n)&&!m){m=true;
return o.once("markers-show",g,n)
}m=false;
o.openIWLoading(n);
o.setIconHover(n);
o.getIW(n,function(q){q.b_map_nights=f.get("checkinCheckoutInterval");
q.map_price_per_x_nights_txt=f.get("transPricePerXNights");
if(B.atlas.getVariant("eGYSaBXeHbCNHLDEMO")){q.transLengthOfStayExperiment=f.get("transLengthOfStayExperiment")
}o.openIW(n,q);
if(B.atlas.getVariant("eGBUTMcNTBZJNKWe")){var r=3000;
if(B.atlas.getVariant("eGBUTMcNTBZJNKWe")===2){r=8000
}b=setTimeout(function(){o.closeIW()
},r)
}})
}function l(n){k(n);
n.on("bounds-change",i,n);
n.on("marker-hover",h);
n.on("marker-out",c);
n.on("marker-click",a);
if(B.atlas.getVariant("eGBUTMcNTBZJNKWe")){n.on("open",g,d)
}}return{init:l,setupIW:k,autoopenIW:g,getIWPosition:e,markerHover:h,markerOut:c,markerClick:a,boundsChange:i}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("atlas-common-overlay",["jQuery","pubsub"],function(f,d,h){var p=".show_map",t="#close_map_lightbox, #close_map, #b_map_back_link",c="#b_map_tiles",s="#b_map_container",u="map_opened",e=new d(),w=B.env,o=(w.b_browser==="msie"&&w.b_browser_version<8),i=w.b_map_center_latitude||w.b_latitude,y=w.b_map_center_longitude||w.b_longitude,a=w.b_map_google_static_thumbnail_zoom_level||14,r=f(s),b=window.location;
if(B.atlas.getVariant("eGfBTeecfEDGTKWe")){t="#base_map_container_lp_lightbox .close_map_lightbox";
c="#base_map_container_lp_lightbox .base_map_tiles";
s="#base_map_container_lp_lightbox";
r=f(s)
}function j(E){var A={},z=f("#"+E),D=z.data("bbox")||w.b_map_bbox,C=z.data("coords");
if(D){C=D.split(",");
A.boundingBox={sw:[C[1],C[0]],ne:[C[3],C[2]]}
}else{C=(typeof C==="string")?C.split(","):[y,i];
A={center:[C[1],C[0]],zoom:parseInt(z.data("zoom")||a,10)}
}return A
}function x(){var A=r.position(),z={width:f(window).width()-2*A.left,height:f(window).height()-2*A.top};
f(c).css(z);
r.css(z)
}function k(A){var z=f(A.target);
if(z.closest(s).length===0&&z.attr("id")!=="b_map_container"){if(B.atlas.getVariant("eGBUdfYOAFbJGXdDC")){g()
}B.atlas.track("custom-click-outside")
}}function l(){var F,E=new RegExp("(?:"+u+"-)(.+)","i"),C=E.exec(b.hash),A={center:[i,y],zoom:a},z=f(window).scrollTop(),D=(B.track.getVariant("eGdfYOVLBRe"))?30:50;
if(C&&C.length===2){A=j(C[1])
}else{if(w.b_map_bbox){F=w.b_map_bbox.split(",");
A.boundingBox={sw:[F[1],F[0]],ne:[F[3],F[2]]}
}}if(o){x()
}if(B.atlas.getVariant("eGBUAeCLeYFPXfWe")>0){r.addClass("b_map_container_fixed").css({top:D,bottom:30})
}else{r.css({top:D+z,bottom:30-z})
}f("body").bind("click",k);
r.show();
e.trigger("open",A)
}function n(){r.hide();
f("body").unbind("click",k);
e.trigger("close")
}function m(z){b.hash=z||"";
if(typeof window.onhashchange===h){return(z)?l():n()
}}function v(z){var A=f(z.target).attr("id");
z.preventDefault();
z.stopPropagation();
if(B.atlas.assert.sr){B.track.goal("atlas_sr_open_click")
}else{if(B.atlas.assert.hp){B.track.goal("atlas_hp_open_click")
}}B.track.custom_goal("eGfBTeecfEDGTKWe",1);
m((A)?u+"-"+A:u)
}function g(){m(false)
}function q(){f(p).bind("click",v);
f(t).bind("click",g);
f(document).keyup(function(z){if(z.which===27){m()
}});
if(b.search.indexOf("map=1")>-1){if(B.atlas.assert.hp){B.track.goal("atlas_hp_open_auto")
}m(u)
}if(b.hash.indexOf(u)>-1){l()
}f(window).bind("hashchange",function(){return(b.hash.indexOf(u)>-1)?l():n()
});
if(o){f(window).bind("resize",x)
}}return{addEvents:q,changeHash:m,open:l,close:n,pubSub:e}
})
});
$(function(){if(!B.atlas){return
}B.atlas.require(["jQuery","atlas","util-env"],function(g,k,h){var b,c,i,a=B.atlas.assert,j=100,n=g("#b_map_container"),d=n.attr("data-latlng"),m=n.attr("data-zoom")||11,l=n.attr("data-bbox"),f=h.get("destinationId"),o={domNode:n.find("#b_map_tiles"),scrollwheel:false,panPosition:"RIGHT_TOP",zoomStyle:"SMALL",zoomPosition:"RIGHT_TOP"},e=["markers","bounds","markers","markers-ajax","iw","iw-ajax","hover"];
if(l){i=l.split(",");
o.boundingBox={sw:[i[1],i[0]],ne:[i[3],i[2]]}
}else{g.extend(o,{center:(d)?d.split(","):[0,0],zoom:parseInt(m,10)})
}if(B.atlas.getVariant("fBTeecTUbERVeUEIQZbIYBAEJHO")){o.scrollwheel=true
}e.push("styles-cartography");
if(B.atlas.getVariant("eGECAFRFEDEZRdcHe")){e.push("icons-zindex")
}else{e.push("icons-default")
}if(B.env.lp_landmarks_heatmap){e.push("heatmap")
}b=new k({modules:e,options:o});
b.done(function(){if(B.atlas.getVariant("eGfBTeecfEDGTKWe")){g(".expand_map").show()
}if(B.atlas.getVariant("fBTeecdJXIECAFJbXe")===1){b.setLimit(70)
}else{if(B.atlas.getVariant("fBTeecdJXIECAFJbXe")===2){b.setLimit(80)
}else{if(B.atlas.getVariant("fBTeecdJXIECAFJbXe")===3){b.setLimit(90)
}else{b.setLimit(60)
}}}typeof b.heatmap==="function"&&b.heatmap();
function p(r,w,q){var C,z=35,v=56,s=5,A=27,y=b.$domNode,u={w:y.width(),h:y.height()},t={w:r.outerWidth(),h:r.outerHeight()};
v=(v>u.w-q.x-s)?s:v;
if((t.w+s+v>u.w)){t.w=u.w-s-v;
r.find(".iw-container").css({"max-width":t.w})
}C=q.x-s-t.w/2;
C=(C+t.w+s>u.w)?u.w-t.w-s-v:C;
return{x:(C-v<3)?3:C,y:(q.y+t.h>u.h-z)?q.y-t.h-A:q.y}
}g("#fixed_map_container_wrapper").hide();
b.on("bounds-change",function(){b.getMarkers(function(r){var t,q=[].concat(r.b_hotels||[],r.b_cities||[],r.b_airports||[]),s=q.length;
b.updateMarkers(q);
if(f){while(s--){t=q[s];
if(t&&f===t.b_id){b.setMarkerType(t.b_id,t.b_marker_type+"_current");
break
}}}});
b.closeIW()
});
b.setIW({disablePan:true,className:"iw-overlay-lp",engine:"html",getPosition:p,isFixed:true});
b.on("marker-hover",function(q){if(c){clearTimeout(c)
}c=setTimeout(function(){b.openIWLoading(q.id);
b.setIconHover(q.id);
if(/city|airport/.test(q.type)){if(q.data&&q.data.b_id===f){b.setIW({className:"iw-overlay-lp iw-"+q.type+"_current"})
}b.openIW(q.id,q.data)
}else{b.getIW(q.id,function(r){r.b_map_nights=h.get("checkinCheckoutInterval");
r.map_price_per_x_nights_txt=h.get("transPricePerXNights");
b.openIW(q.id,r)
})
}},j)
});
b.on("marker-out",function(q){if(c){clearTimeout(c)
}b.setIconOut(q.id);
b.closeIW();
b.setIW({className:"iw-overlay-lp"})
});
b.on("marker-click",function(r){var q=b.getMarker(r.id),s=(q&&q.b_url)?q.b_url:"";
if(s){window.location.assign(s)
}})
})
})
});
booking[sNSStartup].postcard_min_rates_ga={priority:9,init:function(){$(".mrr li a").click(function(){var a=$(this).attr("data-amount");
if(typeof(booking.google.clickTracker)!="undefined"){booking.google.trackEvent(booking.google.clickTracker,"postcard min_rates - "+a)
}})
}};
booking[sNSStartup].show_city_description=(function(){var a=function(){$("#b-city_description").click(function(){$(this).addClass("is_open")
})
};
return{init:a}
}());
/*! echo.js v1.6.0 | (c) 2014 @toddmotto | https://github.com/toddmotto/echo */
;
!function(a,b){"function"==typeof define&&define.amd?define(function(){return b(a)
}):"object"==typeof exports?module.exports=b:a.echo=b(a)
}(this,function(s){var k,g,f,b,p,j={},h=function(){},q=function(a,c){var d=a.getBoundingClientRect();
return d.right>=c.l&&d.bottom>=c.t&&d.left<=c.r&&d.top<=c.b
},m=function(){(b||!g)&&(clearTimeout(g),g=setTimeout(function(){j.render(),g=null
},f))
};
return j.init=function(l){l=l||{};
var c=l.offset||0,d=l.offsetVertical||c,i=l.offsetHorizontal||c,e=function(a,n){return parseInt(a||n,10)
};
k={t:e(l.offsetTop,d),b:e(l.offsetBottom,d),l:e(l.offsetLeft,i),r:e(l.offsetRight,i)},f=e(l.throttle,250),b=l.debounce!==!1,p=!!l.unload,h=l.callback||h,j.render(),document.addEventListener?(s.addEventListener("scroll",m,!1),s.addEventListener("load",m,!1)):(s.attachEvent("onscroll",m),s.attachEvent("onload",m))
},j.render=function(){for(var t,l,c=document.querySelectorAll("img[data-echo]"),i=c.length,a={l:0-k.l,t:0-k.t,b:(s.innerHeight||document.documentElement.clientHeight)+k.b,r:(s.innerWidth||document.documentElement.clientWidth)+k.r},e=0;
i>e;
e++){l=c[e],q(l,a)?(p&&l.setAttribute("data-echo-placeholder",l.src),l.src=l.getAttribute("data-echo"),p||l.removeAttribute("data-echo"),h(l,"load")):p&&(t=l.getAttribute("data-echo-placeholder"))&&(l.src=t,l.removeAttribute("data-echo-placeholder"),h(l,"unload"))
}i||j.detach()
},j.detach=function(){document.removeEventListener?s.removeEventListener("scroll",m):s.detachEvent("onscroll",m),clearTimeout(g)
},j
});
booking[sNSExperiments]["fEWBebfEOVGHONAHRe"]={init:function(){$(".add_bookmark").click(function(a){a.preventDefault();
if(window.external){window.external.AddFavorite(location.href,document.title);
B.track.custom_goal("fEWBebfEOVGHONAHRe",1)
}})
}};
booking[sNSExperiments]["fEJdDBKJZZTbNQFKFbbcYOHT"]={init:function(){echo.init({offset:0,throttle:250,unload:false,callback:function(a,b){}})
}};
booking[sNSExperiments]["fEJdDBKJPbHRTcdbKOWe"]=(function(){var a={goalHasFired:false,expHash:"fEJdDBKJPbHRTcdbKOWe",recentlyViewedBlock:$("#LastViewedHotels")};
function b(g,i){i=i||100;
var k,h=+new Date(),f,j;
return function(){window.clearTimeout(k);
f=+new Date();
j=f-h;
if(j>=i){h=f;
g()
}else{k=window.setTimeout(g,i)
}}
}function d(k){var f=$(window).scrollTop(),h=$(window).height(),j=f+h,g=k.offset().top,i=g+k.height();
if(f<g&&j>i){return true
}else{return false
}}function e(g,f){$(window).bind("scroll.viewedHotels",b(function(){if(!a.goalHasFired){if(d(f)){booking.track.custom_goal(g,1);
this.goalHasFired=true;
$(window).unbind("scroll.viewedHotels")
}}},500))
}function c(){if(a.recentlyViewedBlock.length){e(a.expHash,a.recentlyViewedBlock)
}}return{init:c,initElse:c}
})();
booking[sNSStartup].lp_sh_js_cleanup={init:function(){$("#search_history_items_list").delegate(".lp-dest-search-history","click",function(a){var b=$(this).data("url");
if(a.ctrlKey||a.metaKey){window.open(b)
}else{window.location.href=b
}})
}};
booking[sNSStartup].lp_sh_new_tab={init:function(){$("#search_history_items_list").delegate(".b_new_tab_link","click",function(a){a.preventDefault();
var b=$(this).data("url");
window.open(b)
})
}};
booking[sNSExperiments]["ZXZAQUECNFBbAUIcTdC"]={init:function(){$("#home_featured_destinations").delegate("tr.dotter","click",function(a){var b=$(this).data("url");
if(a.target.nodeName!=="A"&&!$(this).hasClass("moreBoxFolded")&&!$(this).hasClass("moreBoxUnfolded")){window.location.href=b
}});
$("#home_featured_destinations").delegate("tr.dotter","mouseenter",function(a){if(!$(this).hasClass("moreBoxFolded")&&!$(this).hasClass("moreBoxUnfolded")){$(this).addClass("promo_even_on")
}});
$("#home_featured_destinations").delegate("tr.dotter","mouseleave",function(a){if(!$(this).hasClass("moreBoxFolded")&&!$(this).hasClass("moreBoxUnfolded")){$(this).removeClass("promo_even_on")
}})
}};
booking[sNSStartup].popularCities={priority:9,loadpos:0,savecheck:0,init:function(){$("#region_popular_cities_rd li").click(function(){window.location=$(this).find("a:first").attr("href")
})
}};
booking[sNSExperiments].ajax_acc_types=(function(){var f,g,i,e,a={};
function c(k){g.text(k)
}function d(k){e.after(k);
i.remove();
i=f.find("table.promos");
if(!booking.env.b_site_experiment_rewrite_tt){booking[sNSStartupLoad].tooltip_3.addTooltip(i)
}}function b(k){e.find("li.selected").toggleClass("selected dynamic");
k.parent().toggleClass("selected dynamic")
}function h(l,m){if(a[l]){return
}a[l]={};
var n=/<h2 class="specials"[^>]*>([^<]+)<\/h2>/.exec(m),k=/<\!\-\- start promotions\.inc \-\->[\s\S]+(<table class="promos"[^>]*>[\s\S]+<\/table>)[\s\S]*<\!\-\- end promotions\.inc \-\->/.exec(m);
if(n){a[l]["title"]=n[1]
}if(k){a[l]["body"]=k[1]
}else{alert("fail body")
}return a[l]
}function j(){f=$("#recommended_destinations");
g=f.find("h2.specials");
i=f.find("table.promos");
e=f.find("ul.postcard-nav");
f.find(".postcard-nav a").click(function(k){k.preventDefault();
var n=$(this),l=this.href,m=a[l];
if(n.parent().hasClass("selected")){return
}if(m){c(m.title);
b(n);
d(m.body);
return
}i.fadeTo(800,0.4);
$.ajax({async:true,cache:true,url:l,dataType:"text",success:function(q,o,r){var p=h(l,q);
c(p.title);
b(n);
d(p.body)
},error:function(){i.fadeTo(800,1)
}})
})
}return{init:j}
}());
$(function(){if(!B.atlas){return
}B.atlas.define("icons-zindex",["jQuery"],function(f){var e,d="//q-ec.bstatic.com/static/img/map_sprites_omnibus_mk3/635ad7902710fb05e761a015c754ac4c664951fe.png",b={url:d,w:18,h:27,x:33,y:33,z:500};
function c(h){return f.extend({},b,h)
}e={genius_current:c({w:22,h:36,x:176,y:60,z:1010}),hotel_current:c({w:22,h:36,x:198,y:60,z:1000}),landmark_current:c({w:22,h:36,x:66,y:60,z:350}),airport_current:c({w:22,h:36,x:132,y:60,z:340}),ski_lift_current:c({w:22,h:36,x:110,y:60,z:330}),transport_current:c({w:22,h:36,x:88,y:60,z:320}),city_current:c({w:22,h:36,x:154,y:60,z:310}),genius:c({x:136,z:800}),hotel_matching:c({x:0,z:700}),hotel:c({}),"default":c({}),hotel_not_matching:c({x:17,z:400}),landmark:c({x:51,z:300}),airport:c({x:102,z:250}),ski_lift:c({x:85,z:200}),transport:c({x:68,z:150}),city:c({x:118,z:100})};
function g(h){return(h&&e.hasOwnProperty(h))?e[h]:e["default"]
}function a(j){var h={},i=g(j);
switch(true){case (j==="genius"):case (j==="city"):case (j==="landmark"):case (j==="airport"):case (j==="transport"):case (j==="ski_lift"):case (j==="genius_current"):case (j==="city_current"):case (j==="airport_current"):case (j==="landmark_current"):case (j==="transport_current"):case (j==="ski_lift_current"):h=f.extend(h,i,{z:2000});
break;
case (j&&j.indexOf("_current")>-1):f.extend(h,i,{x:198,y:60,z:2000});
break;
default:f.extend(h,i,{x:153,y:33,z:2000})
}return h
}return{ICONS:e,getIcon:g,getHover:a}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("styles-cartography-experiment",["styles-cartography"],function(b){var a=[{featureType:"water",elementType:"geometry",stylers:[{color:"#7FC7E2"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#A9DD8E"}]}];
return{STYLES:b.STYLES.concat(a)}
})
});
booking[sNSExperiments].autocomplete_content=(function(){var a=function(){var d=$("#destination").width();
var c=$(".ac_content_wrapper").width()-d;
$(".ac_stub").css({width:d});
$(".ac_content").css({width:c})
};
a();
$(window).resize(function(){a()
});
var b=function(){$(".ac_content .wide:first-child h4").addClass("first");
$(".autocomplete_content #destination").click(function(){$(".ac_content_wrapper").slideDown("fast")
});
$(".autocomplete_content #destination").blur(function(){$(".ac_content_wrapper").slideUp("fast")
});
$("#frm").submit(function(){$(".ac_content_wrapper").slideUp("fast")
});
$(".ac_content a").mousedown(function(e){var c=$(this).parents("ul").attr("data-type");
if(c=="city"){$(this).bind("click",false);
var d=$(this).attr("data-dest_id");
var f=$(this).text();
$("#destination").attr("value",f);
$("#frm").append($("<input>",{type:"hidden",name:"dest_type",value:"city"}));
$("#frm").append($("<input>",{type:"hidden",name:"dest_id",value:d}));
$(".ui-menu").hide();
$(".ac_content_wrapper").slideUp("fast");
setTimeout(function(){booking[sNSStartup].calendar.openPopupCalendar($("#homein .calendarLink").get(0))
},500);
return false
}else{e.stopPropagation();
document.location=this.href
}})
};
return{init:b}
}());
(function(c){var d=c(window),a=c("html");
function b(){if(d.width()<1029){return c(".star_price span").addClass("font_resize")
}c(".star_price span").removeClass("font_resize")
}d.resize(b).trigger("resize")
})(jQuery);
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSStartup].city_tips={priority:9,init:function(){var c=$("#city_tips"),a=$(".show_more",c),b=c.data("limit")-1;
count=$("blockquote",c).length;
$("blockquote:gt("+b+")",c).hide();
if(b>=count){a.hide()
}a.click(function(){$("blockquote:hidden",c).slideDown("fast");
a.hide()
})
}};
$("#no_dates_friendly_popup").click(function(){$("#searchbox_btn").submit();
$("#smartDealsTrigger").attr("checked",true)
});
booking[sNSStartup].dsf_banners={init:function(){var a=$("#dsf_textarea");
var j=$("#dsf_textarea ul");
var d=$("li.dsf_add");
var k=$("#dsf_autocomplete");
var g=[];
var f=$("li.dsf_destination");
var e=(f.length>0)?booking.env.b_query_params_delimiter+""+f.data("name")+"="+f.data("id"):"";
var b=false;
var o="";
var i="dsf_theme tag";
if((booking.env.b_action=="continent"||booking.env.b_action=="country"||booking.env.b_action=="region")){o=' <img class="dsf_sprites" src="'+booking.env.icons+'/transparent.png" />';
i="dsf_theme tag delete";
b=true
}if(j.find("li.dsf_theme").length>0){g.push(j.find("li.dsf_theme").data("id"))
}m($("li.delete"));
a.click(function(){k.find("li").each(function(){var r=$(this).data("url");
if($.inArray(r,g)!=-1){$(this).hide()
}});
var q=a.outerWidth();
var p=a.height()+10;
k.css({top:p,width:q}).show()
});
$(document).click(function(p){var q=true;
$(p.target).parents().each(function(){if($(this).attr("id")=="dsf_suggestions"){q=false
}});
if(q&&k.is(":visible")){k.hide();
d.show()
}});
var l=new DSF_url_builder();
$("#dsf_linkto").click(function(){$.each(g,function(p,q){l.addTheme(q)
});
this.href=l.getUrl();
return true
});
$("#dsf_autocomplete li").click(function(){var p=$(this).data("name");
var r=$(this).data("url");
var q='<li data-id="'+r+'" class="dsf_theme tag delete">'+p+o+"</li>";
g.push(r);
if($("li.dsf_theme:last").length>0){$(q).insertAfter($("li.dsf_theme:last"))
}else{if($("li.dsf_add").length>0){$(q).insertBefore($("li.dsf_add"))
}else{j.html(q)
}}n(r);
k.hide();
d.show();
m($("li.delete"));
return false
});
function h(){var p=c()+booking.env.b_query_params_delimiter+"tags="+g.join(",")+e;
$("#dsf_linkto").attr("href",p)
}function c(){var p=(booking.env.b_protocol||"http")+"://"+booking.env.b_hostname;
p+="/destinationfinder"+booking.env.b_query_params_with_lang;
return p
}function n(p){var q=$("#dsf_imagecontainer");
var r=144;
if(p<=r){var t=booking.env.icons+"/destfinder_themes/searchbox/theme-"+p+".jpg";
var s="<p style=\"display: none; background-image: url('"+t+"');\"/>";
$("<img>").attr("src",t).load(function(){$(s).hide().appendTo(q).fadeIn(500,function(){q.find("p:first").remove()
})
})
}}function m(p){p.click(function(){var q=$(this).data("id");
g=jQuery.grep(g,function(r){return r!=q
});
h();
$(this).remove();
d.show()
})
}}};
booking[sNSExperimentsLoad]["bLYCNcUDERXFNBERNGae"]={priority:9,tracked:false,showAdvSearch:function(){if(this.tracked){return
}$(".b_advanced_search_toggler").bind("click",function(a){booking.track.exp("bLYCNcUDERXFNBERNGae");
$(this).unbind(a)
});
this.tracked=true
},init:function(){this.showAdvSearch();
var a={};
$(".exp_hoteltypes_checkbox label").click(function(b){var c=$(this).find("input");
if(a[c.data("name")]){return
}booking.google.trackEvent(booking.google.clickTracker,"more_nha_suggestion",c.data("name"));
a[c.data("name")]=true
})
},initElse:function(){this.showAdvSearch()
}};
booking.run("fFdHMdeUfACQVfRSXIHVeRe").onReady(function(){booking.track.onView("#tracking-for-fFdHMdeUfACQVfRSXIHVeRe").exp("fFdHMdeUfACQVfRSXIHVeRe")
});
if((B.env.b_action=="city")&&($(".hotel_list").length>0)){booking[sNSExperiments]["YdVJPdMZaSWCdDbfGYUZCC"]={init:function(){var d=$(".hotel_list").length;
if(d>1){$(".hotel_list:last").addClass("hotel_item_last")
}else{if(d==1){$(".carousel_left, .carousel_right").hide()
}}function f(){var j=[];
$(".hotel_list").each(function(){$thisElement=$(this);
$thisElement.show();
j.push($thisElement.height());
$thisElement.hide()
});
$(".hotel_item_first").show();
var h;
h=j[0];
for(var k=0;
k<j.length;
k++){if(j[k]>h){h=j[k]
}}$(".loc_lp_popular_hotel_inner, .carousel_left, .carousel_right").css("min-height",h+"px");
$(".carousel_content").width(Math.floor($("#loc_lp_popular_hotel").width()-70))
}var g;
var a;
function e(){g=$(".hotel_list").filter(":visible")
}function c(){e();
a=$(this);
if(a.hasClass("carousel_left")&&(!g.hasClass("hotel_item_first"))){g.hide();
g.prev(".hotel_list").fadeIn("normal")
}else{if(a.hasClass("carousel_right")&&(!g.hasClass("hotel_item_last"))){g.hide();
g.next(".hotel_list").fadeIn("normal")
}}b();
return false
}function b(){if(d>1){e();
if(g.hasClass("hotel_item_first")){$(".carousel_left").addClass("carousel_left_disabled");
$(".carousel_right").removeClass("carousel_right_disabled")
}else{if(g.hasClass("hotel_item_last")){$(".carousel_right").addClass("carousel_right_disabled");
$(".carousel_left").removeClass("carousel_left_disabled")
}else{$(".carousel_left, .carousel_right").removeClass("carousel_left_disabled carousel_right_disabled")
}}}}f();
$(window).resize(f);
$(".carousel_left, .carousel_right").click(c)
}}
}booking.lp_aa_temp_functions={setupGoals:function(a){$(window).bind("scroll.aa_"+a+"_goal1",booking.tools.functions.throttle(function(){if(booking.lp_aa_temp_functions.userSawXPixelsDown(30)){$(window).unbind("scroll.aa_"+a+"_goal1");
booking.track.custom_goal(a,1)
}},300));
var b=$("#booking-footer");
$(window).bind("scroll.aa_"+a+"_goal2",booking.tools.functions.throttle(function(){if(booking.tools.dom.isBlockVisibleInViewport(b)){$(window).unbind("scroll.aa_"+a+"_goal2");
booking.track.custom_goal(a,2)
}},300));
$(window).bind("scroll.aa_"+a+"_goal3",booking.tools.functions.throttle(function(){if(booking.lp_aa_temp_functions.userSawXPixelsDown(2000)){$(window).unbind("scroll.aa_"+a+"_goal3");
booking.track.custom_goal(a,3)
}},300))
},userSawXPixelsDown:function(a){return((booking.tools.dom.getWindowScrollTop()+booking.tools.dom.getWindowHeight())>a)
}};
booking[sNSExperiments]["fEDXfMPSXZJCUPeIaJeKe"]={init:function(){var a="fEDXfMPSXZJCUPeIaJeKe";
booking.lp_aa_temp_functions.setupGoals(a)
}};
booking[sNSExperiments]["fEDXfMPSXZJCUPeIaPWAUC"]={init:function(){var a="fEDXfMPSXZJCUPeIaPWAUC";
booking.lp_aa_temp_functions.setupGoals(a)
}};
booking[sNSExperiments]["fEDXaHZJCUPeIaJeKe"]={init:function(){var a="fEDXaHZJCUPeIaJeKe";
booking.lp_aa_temp_functions.setupGoals(a)
}};
booking[sNSExperiments]["fEDXaHZJCUPeIaPWAUC"]={init:function(){var a="fEDXaHZJCUPeIaPWAUC";
booking.lp_aa_temp_functions.setupGoals(a)
}};
(function(){booking[sNSExperiments]["fEDZdUdLZKbEaEIVC"]={init:function(){a({exp:"fEDZdUdLZKbEaEIVC",status:true,track:true,actions:"country|airport|region|district|landmark"})
},initElse:function(){a({exp:"fEDZdUdLZKbEaEIVC",status:false,track:true,actions:"country|airport|region|district|landmark"})
}};
booking[sNSStartup]["fEDZdUdLZKbEaEIVJdDBKC"]={init:function(){a({track:false,status:true,actions:"index|city"})
}};
function a(c){var g=B.env.b_action.match(new RegExp("("+c.actions+")")),b=$("#searchboxInc"),d,e,f;
if(!g||!b.length){return
}d=b.height()+b.offset().top;
e=$(window);
f=$("a.lp_back_to_top");
if(c.status){e.unbind("scroll.back_to_search_anchor").scroll(function(){var h=e.scrollTop()>d?"addClass":"removeClass";
f[h]("show")
});
f.click(function(h){h.preventDefault();
$("html,body").animate({scrollTop:0},1000)
})
}if(c.exp&&c.track){e.bind("scroll.back_to_top_track",function(){if(e.scrollTop()>d){booking.track.exp(c.exp);
e.unbind("scroll.back_to_top_track")
}})
}}})();
booking[sNSExperiments]["fEWWFSfQORHe"]=(function(){var a=function(){var c=$(".rec.lp_city_info_lightbox");
if(c.length){var f=$(".postcard"),d=$("h1",f),b=$("<a class='lp_city_info_lightbox_trigger'><span class='icon'></span>"+booking.env.exploreMessageTranslated+"</a>");
f.append(b).addClass("lp_city_info_lightbox_trigger_container");
b.click(function(h){B.lightbox.show(c.removeClass("lp_city_info_lightbox_hidden"),{customWrapperClassName:"lp_city_info_lightbox_wrapper",hideCallBack:function(){c.hide()
},positionAfterCallBack:function(){var i=$(".modal-wrapper");
if(i.height()>=c.height()){i.removeClass("lp_city_info_lightbox_scroll");
if($.browser.webkit){c.find("#districtsSlider li:visible").hide().show()
}}else{i.addClass("lp_city_info_lightbox_scroll")
}}});
var g=0;
c.find("#districtsSlider li").each(function(){var i=$(this).height();
g=Math.max(g,i)
});
c.find("#sliderWrapper").css("min-height",(g-15));
B.lightbox.rePosition()
});
$(window).resize(e);
e()
}function e(){var h=f.width()-d.outerWidth();
var g=b.outerWidth();
if(h<g+25){b.addClass("hidden-icon")
}else{if(h>g+65){b.removeClass("hidden-icon")
}}}};
return{init:a}
}());
booking[sNSExperiments]["fESedJfaAUaJfQKbFYPYO"]=(function(){var a=function(){$("#search_history_items_list").delegate(".b-destSearch_item","mouseenter",function(){B.track.custom_goal("fESedJfaAUaJfQKbFYPYO",1)
});
$("#search_history_items_list").delegate(".b-destSearch_item","click",function(){B.track.custom_goal("fESedJfaAUaJfQKbFYPYO",2)
})
};
return{init:a}
}());
booking[sNSExperiments]["fESaRQNcLTQFCSDWQecDKORe"]=(function(a,c){var b=function(){var g=a("#popularDestinations"),e=g.find("#lp_endorsements_popular_destinations_tooltip"),f="<div class='big-icon-endorsement dficon-{id}'></div><div class='amount-endorsement'><p class='quantity'>{quantity}</p><p>{recomendation-text}</p></div><div class='name'>{name}</div>";
a("body").append(e);
g.delegate(".endorsement","mouseenter",function(h){e.find(".lp_endorsements_popular_destinations_tooltip_content").html(d.call(this)).end().stop(true,true).fadeIn()
}).delegate(".endorsement","mouseleave",function(h){e.stop(true,true).fadeOut()
}).delegate(".endorsement","mousemove",function(h){e.css({left:h.pageX+20,top:h.pageY+20})
});
function d(){if(c.track.getVariant("fESaRQNcLTQFCSDWQecDKORe")==1){var h=a.extend({},e.data(),a(this).data());
return c.tmpl(f,h)
}else{return a(this).next(".lp_endorsement_tooltip_list").clone()
}}};
return{init:b}
}(jQuery,booking));
booking[sNSExperiments]["fESTfcbaZLOLcZGTGDCPZC"]=(function(){var a=function(){var d=$(".littlescore");
var c=d.find(".scorewordspan").css({cursor:"help"});
var b=d.find(".icon_minibubble");
c.mouseenter(function(){$(this).next(".icon_minibubble").mouseover()
}).mouseleave(function(f){f.toElement=f.toElement||f.relatedTarget;
if(!$(f.toElement).hasClass("icon_minibubble")){$(this).next(".icon_minibubble").mouseout()
}});
b.bind("mouseout.lp_expand_review_tooltip_hover_area",function(f){f.toElement=f.toElement||f.relatedTarget;
if($(f.toElement).closest(".scorewordspan").length){f.stopImmediatePropagation()
}}).each(function(){var e=$(this).data("events").mouseout;
if(e.length>1&&e[0].namespace!="lp_expand_review_tooltip_hover_area"){e.unshift(e.pop())
}})
};
return{init:a}
}());
booking[sNSExperiments]["fEJdDBKSVMPYWbHJOSRe"]=(function(){var a=function(){$(document).delegate(".tabs > ul > li","click",function(){var d=$(this),c=d.closest("ul"),b=c.children("li").removeClass("tab-selected");
c.siblings("div").children("div").hide().eq(b.index(d.addClass("tab-selected"))).show()
})
};
return{init:a}
}());
booking[sNSExperiments]["fEJdDBKFHMPfBJEUZC"]=(function(){var e=0;
var a;
var b;
var c;
var g;
var d;
var h=function(k){if(!($.browser.msie&&$.browser.version<8)&&B.env.shouldVBannerShow){if(k===0){$(".lp-index-promo-slider-paranja.v-com").fadeIn(250);
$(".lp-index-promo-slider-paranja.b-com").fadeOut(250)
}if(k!==0){$(".lp-index-promo-slider-paranja.v-com").fadeOut(250);
$(".lp-index-promo-slider-paranja.b-com").fadeIn(250)
}}if(k===e){return
}var j=k*-100;
b.animate({left:j+"%"},500,"easeOutCubic");
c.eq(e).removeClass("active");
c.eq(k).addClass("active");
a.eq(e).fadeOut(250,function(){a.eq(k).fadeIn(250)
});
a.not(":eq("+k+")").hide();
e=k
};
var f=function(){g=setTimeout(function(){var j=(e+1<d)?e+1:0;
h(j);
f()
},6500)
};
var i=function(){a=$(".lp-index-promo-slider-content");
d=a.length;
if(!d){return
}b=$(".lp-index-promo-slider-reel");
c=$(".lp-index-promo-slider-indicators span");
$("#index-banner-villas-com").delegate(".btn-primary","click",function(){B.track.custom_goal("fEJdDBKFHMPfBJEUZC",1)
});
$("#index-banner-booking-com-villas").delegate(".btn-primary","click",function(){B.track.custom_goal("fEJdDBKFHMPfBJEUZC",2)
});
$("#index-banner-secret-deals-newsletter-sign-up").delegate(".btn-primary","click",function(){B.track.custom_goal("fEJdDBKFHMPfBJEUZC",3)
});
$("#index-banner-secret-deals-ua-sign-in").delegate(".btn-primary","click",function(){B.track.custom_goal("fEJdDBKFHMPfBJEUZC",4)
});
$("#index-banner-secret-deals-page").delegate(".btn-primary","click",function(){B.track.custom_goal("fEJdDBKFHMPfBJEUZC",5)
});
$(".lp-index-promo-slider-indicators").delegate("span","click",function(){clearTimeout(g);
var k=$(this).data();
var j=k.number;
h(j)
});
f();
$(".lp-index-promo-slider").hover(function(){clearTimeout(g)
},function(){f()
})
};
return{init:i}
}());
booking[sNSExperiments]["fEJdDBKFOJIKELZHJOQUEKNdHT"]=(function(b){var a=function(g){if(b.env.b_action!="index"){return
}var d=$("#left");
if(!d.length){return
}var h=$(".lp_index_third_recommended_ufi_to_left_to_track",d).offset().top,c=$(".lp_index_third_recommended_ufi_to_left_temp_class:last"),f=c.prev(".recommendation_arrow_box"),e=f.length?f.offset().top:c.offset().top;
if(h<e){b.track.onView(".lp_index_third_recommended_ufi_to_left_to_track").exp("fEJdDBKFOJIKELZHJOQUEKNdHT");
if(g){d.append(f).append(c);
c.delegate("tr.dotter","click",function(i){var j=$(this).data("url");
if(i.target.nodeName!=="A"&&!$(this).hasClass("moreBoxFolded")&&!$(this).hasClass("moreBoxUnfolded")){window.location.href=j
}}).delegate("tr.dotter","mouseenter",function(i){if(!$(this).hasClass("moreBoxFolded")&&!$(this).hasClass("moreBoxUnfolded")){$(this).addClass("promo_even_on")
}}).delegate("tr.dotter","mouseleave",function(i){if(!$(this).hasClass("moreBoxFolded")&&!$(this).hasClass("moreBoxUnfolded")){$(this).removeClass("promo_even_on")
}});
b[sNSStartup]["loc_add_choose_date"]&&b[sNSStartup]["loc_add_choose_date"].init(c)
}}};
return{init:function(){a(true)
},initElse:function(){a(false)
}}
}(booking));
booking[sNSExperiments]["fESeCXeQFQRBbNKe"]={initElse:function(){if(B.env.lp_landmarks_heatmap===false){B.track.onView("#b_map_container").exp("fESeCXeQFQRBbNKe")
}},init:function(){if(!booking.atlas||!booking.atlas.require){return
}B.atlas.define("heatmap",["jQuery"],function(b){function a(){var c=this,d=c.Interface.map,o=null,i=40,g="/categ_heatmap",m={},h=b(".lp_landmarks_heatmap_container"),n=h.find(".lp_landmarks_heatmap_wrapper"),k=n.find(".lp_landmarks_heatmap_checkbox"),r=["rgba(138, 224, 92, 0)","rgba(138, 224, 92, 1)","rgba(245, 198, 12, 1)","rgba(245, 160, 12, 1)","rgba(245, 121, 12, 1)","rgba(247, 83, 54, 1)","rgba(186, 42, 17, 1)"],l;
b.get(g,{ufi:booking.env.b_ufi},function(s){if(typeof s!=="object"){return
}m=s;
f()
},"json");
function f(){var t,s=0;
for(t in m){n.find("li."+t).show();
s++
}B.track.onView("#b_map_container").exp("fESeCXeQFQRBbNKe");
j("visible_list",s+" items");
if(s){h.fadeIn(500);
q();
h.one("mouseenter",function(){j("show-list","")
}).bind("mouseenter",function(){clearTimeout(l);
n.stop(true,true).slideDown(300)
}).bind("mouseleave",function(){clearTimeout(l);
l=setTimeout(function(){n.stop(true,true).slideUp(300)
},400)
});
k.bind("change",p)
}}function q(){h.addClass("lp_landmarks_heatmap_container_sizing").css("min-width",h.width()+5).removeClass("lp_landmarks_heatmap_container_sizing")
}function p(z){var y=[],w=k.filter(":checked"),v,u,x,t,s=b(z.target);
if(s.is(":checked")){j("category-select",b(z.target).data("cat"))
}w.each(function(){v=m[b(this).data("cat")];
u=v?v.length:0;
for(x=0;
x<u;
x++){t=v[x];
y.push(new google.maps.LatLng(t.latitude,t.longitude))
}});
if(o){o.setData(y)
}else{o=new google.maps.visualization.HeatmapLayer({data:y,radius:e(),opacity:0.7,gradient:r,map:d});
c.on("zoom",function(A){o.set("radius",e(A))
})
}}function e(s){s=s||d.getZoom();
if(s<8){return 0
}if(s<12){return s
}return s<14?30:i
}var j=function(s,u,t){B.google.trackEvent("lp_heatmaps",s,u)
}
}return{heatmap:a}
})
}};
booking[sNSExperiments]["fEFNBMMbddbLZET"]={init:function(){var a="fEFNBMMbddbLZET";
if(B.track.getVariant(a)===false){return
}$(".postcard_link_to_sr").one("mouseover",function(){B.track.exp(a)
})
},initElse:function(){this.init()
}};
booking[sNSExperiments]["fEFNBOHSFVJWcSBXe"]={init:function(){var a="fEFNBOHSFVJWcSBXe";
if(B.track.getVariant(a)===false){return
}B.track.onView("#in_and_around").exp(a)
},initElse:function(){this.init()
}};
booking[sNSExperiments]["fEWUZJAEceIFXdAXFaO"]=(function(){var a=function(){var b=$(".lp-sh-hide-search");
b.click(function(c){c.stopPropagation();
$(this).parent(".b-popular_item").css({overflow:"hidden",border:"none"}).animate({opacity:0,height:"0px",padding:0,margin:0},100)
})
};
return{init:a}
}());
booking[sNSExperiments]["fEJMWLIZSVafBNfOEDRHe"]={init:function(){$(".sb_accomodation_type select[name=nflt]").change(function(){booking.google.trackEvent(booking.google.clickTracker,"Accommodation dropdown",$(this).val())
})
}};
(function(){var a=function(){var d=$(".lp_usps_available_onclick");
var b=$(".lp_usps_available_onclick_trigger",d);
var c=$(".lp_usps_available_onclick_content",d);
b.click(function(){B.lightbox.show(c.show(),{customWrapperClassName:"lp_usps_available_onclick_wrapper",hideCallBack:function(){c.hide()
},positionAfterCallBack:function(){var e=$(".modal-wrapper");
var f=(e.height()>=c.height())?"removeClass":"addClass";
e[f]("lp_usps_available_onclick_scroll")
}})
});
c.find(".usps_rate_guarantee_link").click(function(f){f.preventDefault();
f.stopImmediatePropagation()
})
};
booking[sNSExperiments]["fEDTBOPefWcVcZVHGO"]={init:a};
booking[sNSExperiments]["fEDTBOPefWcVcZVJBO"]={init:a};
booking[sNSExperiments]["fEDTBOPefWcVcZVEae"]={init:a};
booking[sNSExperiments]["fEDTBOPefWcVcZAeHHMO"]={init:a}
})();
booking[sNSExperiments]["TNVIdEbECELHbTUTZCRO"]=(function(){$("#villas-banner-type-country").delegate("#lp-villa-promo_track","click",function(){B.track.custom_goal("TNVIdEbECELHbTUTZCRO",1)
})
}());
booking[sNSExperiments]["TNVIdEbECELJTTUTZCRO"]=(function(){$("#villas-banner-type-region").delegate("#lp-villa-promo_track","click",function(){B.track.custom_goal("TNVIdEbECELJTTUTZCRO",1)
})
}());
B.runExp("eGfBTeecfEDGTKWe").onLoad(function(){if(!B.atlas){return
}B.atlas.require(["jQuery","atlas","atlas-common-overlay","atlas-common-markers"],function(c,e,g,i){var a,b=["markers","bounds","markers","markers-ajax","iw","iw-ajax","hover","icons-default"],h={domNode:c("#base_map_container_lp_lightbox .base_map_tiles"),scrollwheel:false,panPosition:"RIGHT_TOP",zoomStyle:"SMALL",zoomPosition:"RIGHT_TOP"};
function f(j){a=new e({modules:b,options:j});
a.done(function(){i.init(a);
a.trigger("open")
})
}function d(j){a.resize();
if(j.boundingBox){a.setBoundingBox([j.boundingBox.sw,j.boundingBox.ne])
}else{a.setCenter(j.center);
a.setZoom(j.zoom)
}a.trigger("open")
}g.pubSub.on("open",function(j){if(!a){f(c.extend(h,j))
}else{a.done(function(){d(c.extend(h,j))
})
}});
g.pubSub.on("close",function(){if(a){a.trigger("close")
}});
g.addEvents()
})
});
(function(c){var b="IZEZeYJKPVYeRfMNQcZROCHO";
function a(){if(c.env.b_action==="index"){c.track.onView("#b_"+b).exp(b)
}}c[sNSExperiments][b]={priority:9,init:a,initElse:a}
})(booking);
booking[sNSExperiments].preferred_filters={priority:9,init:function(){$(".facility_item").click(function(e){e.preventDefault();
B.track.exp("EKCCVFacWIdSAFTKe");
var d=$(this),a,i=$("#frm .b-form__footer .b-form-group__content"),g=d.data("type"),b=d.data("id"),h=g+"="+b,j="<a href='#' class='removeThisFacility use_sprites icon_remove'>&nbsp;</a>",f="<input type='hidden' id='filteredFacility' name='nflt' value='"+h+"'>",c="<div class='facility_preference'><h4>"+booking.env.tag_filter_by+"</h4><span class='facility_item facility_selected'>"+d.html()+j+"</span>"+f+"</div>";
if(!d.hasClass("facility_selected")){a=true
}$(".facility_selected").toggleClass("facility_selected");
$(".facility_preference").remove();
if(a){d.toggleClass("facility_selected");
i.append(c)
}if($("body").scrollTop()>=250){$("body").scrollTop(0)
}$("#searchboxInc form").animate({opacity:0.4},200).animate({opacity:1},200)
});
$(".facility_item .removeThisFacility").live("click",function(){$(".facility_preference").remove();
$(".filters_list a").removeClass("facility_selected");
return false
})
}};
booking[sNSExperiments]["fOFVfEQIJceNVYEEJHO"]=(function(){var f=0;
var g;
var e;
var h=500;
var b=8000;
var c;
var d=function(){c.eq(f).fadeOut(h);
if(f==g-1){f=0
}else{f++
}c.eq(f).fadeIn(h)
};
var a=function(){c.eq(f).fadeOut(h);
if(f===0){f=g-1
}else{f--
}c.eq(f).fadeIn(h)
};
var i=function(){var j=booking.env.region_attractions;
if(!j||booking.env.bot){return
}$(".regional_attractions_wrapper").append(j);
c=$(".lp-slider .item-container");
g=c.length;
c.eq(f).fadeIn(h);
e=setInterval(d,b);
$(".lp-region-highlights-for-city").hover(function(){clearInterval(e)
},function(){e=setInterval(d,b)
});
$(".lp-region-highlights-for-city .next").bind("click",d);
$(".lp-region-highlights-for-city .prev").bind("click",a);
booking.track.onView("#tracking-target-fOFVfEQIJceNVYEEJHO").exp("fOFVfEQIJceNVYEEJHO")
};
return{init:i,initElse:function(){booking.track.onView("#tracking-target-fOFVfEQIJceNVYEEJHO").exp("fOFVfEQIJceNVYEEJHO")
}}
}());
booking[sNSExperiments]["fOFVfEQIJceNVYJTVFKe"]=(function(){var f=0;
var g;
var e;
var h=500;
var b=8000;
var c;
var d=function(){c.eq(f).fadeOut(h);
if(f==g-1){f=0
}else{f++
}c.eq(f).fadeIn(h)
};
var a=function(){c.eq(f).fadeOut(h);
if(f===0){f=g-1
}else{f--
}c.eq(f).fadeIn(h)
};
var i=function(){var j=booking.env.region_attractions;
if(!j||booking.env.bot){return
}$(".regional_attractions_wrapper").append(j);
c=$(".lp-slider .item-container");
g=c.length;
c.eq(f).fadeIn(h);
e=setInterval(d,b);
$(".lp-region-highlights-for-region").hover(function(){clearInterval(e)
},function(){e=setInterval(d,b)
});
$(".lp-region-highlights-for-region .next").bind("click",d);
$(".lp-region-highlights-for-region .prev").bind("click",a);
booking.track.onView("#tracking-target-fOFVfEQIJceNVYJTVFKe").exp("fOFVfEQIJceNVYJTVFKe")
};
return{init:i,initElse:function(){booking.track.onView("#tracking-target-fOFVfEQIJceNVYJTVFKe").exp("fOFVfEQIJceNVYJTVFKe")
}}
}());
booking[sNSStartup].sb_destination_validation=(function(e,g){var a=e("#frm"),b=e("#destination"),d=e("#b_searchbox_errors"),c=a.find(".has-destination-validation-error-exp_promise");
function f(){if(b.length==0){return
}a.bind("submit.sb_destination_validation",function(){if(g.env.b_action!=="region"&&(e.trim(b.val())==""||b.val()==b.attr("title"))){d.show();
g.eventEmitter.trigger(g.Search.Events.DESTINATION_INVALID,"destination_is_not_empty");
if(c&&c[0]&&c[0].className){c[0].className=c[0].className.replace(/_promise/,"")
}return false
}})
}return{init:f,initElse:f,priority:10}
}($,booking));
booking[sNSExperiments]["bLYXKbOFYbOMFcUNbYBUC"]={init:function(){$(".b_advanced_search_toggler").bind("click",function(){B.track.exp("bLYXKbOFYbOMFcUNbYBUC")
})
},initElse:function(){this.init()
}};
if(booking.env.enable_scripts_tracking){booking.env.scripts_tracking.landing.run=true
};