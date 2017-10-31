if(booking.env.enable_scripts_tracking){booking.env.scripts_tracking.jquery={loaded:!!window.jQuery,run:!!window.jQuery};
booking.env.scripts_tracking.main={loaded:true,run:false}
}B.tools={inherits:function(d,c,f){var e=function(){};
e.prototype=c.prototype;
d.superClass_=c.prototype;
d.prototype=new e();
d.prototype.constructor=d;
if(f){$.extend(d.prototype,f)
}},base:function(g,c,j){var e=arguments.callee.caller;
if(!e){throw Error("arguments.caller not defined. tools.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C")
}if(e.superClass_){return e.superClass_.constructor.apply(g,Array.prototype.slice.call(arguments,1))
}var d=Array.prototype.slice.call(arguments,2);
var h=false;
for(var f=g.constructor;
f;
f=f.superClass_&&f.superClass_.constructor){if(f.prototype[c]===e){h=true
}else{if(h){return f.prototype[c].apply(g,d)
}}}if(g[c]===e){return g.constructor.prototype[c].apply(g,d)
}else{throw Error("tools.base called from a method of one name to a method of a different name")
}},addSingletonGetter:function(c){c.getInstance=function(){if(!c.__instance__){c.__instance__=new c()
}return c.__instance__
}
},abstractMethod:function(){throw Error("unimplemented abstract method")
},parseInt:function(c){return parseInt(c,10)
},string:{substitute:function(f,e){for(var c=1;
c<arguments.length;
c++){var d=String(arguments[c]).replace(/\$/g,"$$$$");
f=f.replace(/\%s/,d)
}return f
}},object:{clone:function(e){var d=$.type(e);
if(d==="object"||d==="array"){if(typeof e.clone==="function"){return e.clone()
}else{var f=(d==="array"?[]:{});
for(var c in e){if(e.hasOwnProperty(c)){f[c]=B.tools.object.clone(e[c])
}}return f
}}else{return e
}},keys:(Object.keys||(function(e){if(e!==Object(e)){throw new TypeError("Invalid object")
}var d=[];
for(var c in e){if(e.hasOwnProperty(c)){d.push(c)
}}return d
})),each:function(g,j,c){var k=Array.prototype.forEach,f={};
var h,d;
if(!g){return
}if(k&&g.forEach===k){g.forEach(j,c)
}else{if(g.length===+g.length){for(h=0,d=g.length;
h<d;
h++){if(j.call(c,g[h],h,g)===f){return
}}}else{var m;
try{m=B.tools.object.keys(g)
}catch(l){m=[]
}for(h=0,d=m.length;
h<d;
h++){if(j.call(c,g[m[h]],m[h],g)===f){return
}}}}},defaults:function(e,c){var d;
e=e||{};
c=c||{};
for(d in c){if(c.hasOwnProperty(d)){if(e[d]==null){e[d]=c[d]
}}}return e
},reduce:function(j,g,d,h){var f=arguments.length>2,c="Reduce of empty array with no initial value",e=Array.prototype.reduce;
if(j==null){j=[]
}if(e&&j.reduce===e){if(h){g=$.proxy(g,h)
}return f?j.reduce(g,d):j.reduce(g)
}B.tools.object.each(j,function(m,k,l){if(!f){d=m;
f=true
}else{d=g.call(h,d,m,k,l)
}});
if(!f){throw new TypeError(c)
}return d
},filter:function(g,d,f){var c=[],e=Array.prototype.filter;
if(g==null){return c
}if(e&&g.filter===e){return g.filter(d,f)
}B.tools.object.each(g,function(k,h,j){if(d.call(f,k,h,j)){c.push(k)
}});
return c
},map:function(g,e,f){var c=[],d=Array.prototype.map;
if(g==null){return c
}if(d&&g.map===d){return g.map(e,f)
}B.tools.object.each(g,function(k,h,j){c.push(e.call(f,k,h,j))
});
return c
},getByName:function(d,e){var f=d.split(".");
var g=e||window;
for(var c;
c=f.shift();
){if(g[c]!==null&&g[c]!==undefined){g=g[c]
}else{return null
}}return g
}},array:{toObject:function(d){var f={};
for(var e=0,c=d.length;
e<c;
e++){f[d[e]]=true
}return f
}},dom:{window:$(window),getBlockWidth:function(c){return(c.width())
},getBlockHeight:function(c){return(c.height())
},getBlockOffset:function(e,f){var d=(e.offset());
var c={left:0,top:0};
if(f){c=(f.offset())
}return{left:d.left-c.left,top:d.top-c.top}
},getBounds:function(g){var d=$(g);
var f=(d.offset());
var e=d.outerWidth();
var c=d.outerHeight();
return{left:f.left,right:f.left+e,top:f.top,bottom:f.top+c,width:e,height:c}
},boundsOverlap:function(d,c){return(d.left<c.right&&d.right>c.left&&d.top<c.bottom&&d.bottom>c.top)
},getWindowWidth:function(){return B.tools.dom.getBlockWidth(B.tools.dom.window)
},getWindowHeight:function(){return B.tools.dom.getBlockHeight(B.tools.dom.window)
},getWindowScrollLeft:function(){return(B.tools.dom.window.scrollLeft())
},getWindowScrollTop:function(){return(B.tools.dom.window.scrollTop())
},watchIfBlockVisibleInViewport:function(f,h,g,d){function c(){if(B.tools.dom.isBlockVisibleInViewport(f,g)){h();
if(!d){e()
}}}function e(){B.tools.dom.window.unbind("resize scroll",c)
}B.tools.dom.window.bind("resize scroll",c);
setTimeout(c,0);
return{forceCheck:c,stopWatch:e}
},isBlockVisibleInViewport:function(h,d){if(!h||h.length===0||!h.is(":visible")){return false
}var e=h.offset().top;
var c={top:e,bottom:e+h.innerHeight()};
var g=B.tools.dom.getWindowScrollTop();
var f={top:g,bottom:g+B.tools.dom.getWindowHeight()};
if(d){return(c.top>=f.top&&c.bottom<=f.bottom)
}else{return((c.top>=f.top&&c.top<=f.bottom)||(c.bottom>=f.top&&c.bottom<=f.bottom)||(c.top<f.top&&c.bottom>f.bottom))
}},popupCancel:function(c){window.open(c,"","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=400,height=350,left=200,top=200");
return false
}},css:{CSS_OPACITY_SUPPORT:("opacity" in document.body.style)},url:{parse:function(f,d,c){d=d||"&";
c=c||"=";
f=f||"";
var e={};
B.tools.object.each(f.split(d),function(g){var h=g.split(c);
e[h.shift()]=h.join(c)
});
return e
},stringify:function(f,e,d){e=e||"&";
d=d||"=";
var c=[];
B.tools.object.each(f,function(h,g){c.push(g+d+h)
});
return c.join(e)
}},functions:{throttle:function(d,f,l){var c,h,m;
var j=null;
var g=0;
var k=l||{};
var e=function(){g=k.leading===false?0:+new Date();
j=null;
m=d.apply(c||{},h||[]);
c=h=null
};
return function(){var n=+new Date();
if(!g&&k.leading===false){g=n
}var o=f-(n-g);
c=this;
h=arguments;
if(o<=0){clearTimeout(j);
j=null;
g=n;
m=d.apply(c,h);
c=h=null
}else{if(!j&&k.trailing!==false){j=setTimeout(e,o)
}}return m
}
}}};
B.tools.dom.Bounds;
(function(d,g){var c=["click"],e=function(){};
d.action=f;
function f(h,j){if(arguments.length<=1){return f._list[h]||e
}f._list[h]=typeof j==="function"?j:e
}f._list={};
f._type={};
g.each(c,function(h,j){f._type[j]=function(){g(document.body).delegate("[data-action-"+j+"]",j,k);
function k(l){var m=g(this).attr("data-action-"+j);
if(m in f._list){f._list[m]({},l);
d.eventEmitter.trigger("ACTION:"+m,{})
}}}
});
g(function(){g.each(f._type,function(h,j){j()
})
})
}(window.booking,window.jQuery));
(function(e){var c="function",f="object",h="reject",d="fulfill",g=0,j=typeof module==f&&module.exports;
function k(){this._act=g;
this._cbs=[];
this._ebs=[]
}k.tick=function(l){j?process.nextTick(l):setTimeout(l,0)
};
k.prototype={_exec:function(m){var n=this._val,l=this._act;
k.tick(function(){var p,r,o;
while(p=m.shift()){r=p.pr;
o=p.cb;
if(typeof o==c){try{r.fulfill(o(n))
}catch(q){r.reject(q)
}}else{r[l](n)
}}})
},reject:function(m){var l=this;
if(l._act===g){l._val=m;
l._act=h;
l._exec(l._ebs)
}},fulfill:function(n){var q,m,l=this,p=1;
if(l._act===g){try{if(n===l){throw TypeError()
}m=n&&typeof n;
q=(m===c||m===f)&&n.then
}catch(o){l.reject(o);
return
}if(typeof q==c){try{q.call(n,function(r){p=p&&l.fulfill(r)
},function(t){p=p&&l.reject(t)
})
}catch(o){p=p&&l.reject(o)
}}else{l._val=n;
l._act=d;
l._exec(l._cbs)
}}},then:function(l,m){var n=this,o=new k();
if(n._act===g){n._cbs.push({cb:l,pr:o});
n._ebs.push({cb:m,pr:o})
}else{n._exec([{cb:n._act==h?m:l,pr:o}])
}return o
}};
if(j){module.exports=k
}else{e.p0=k
}})(booking);
booking.promise=function(){return new booking.p0()
};
booking.promise.when=function(f){var e,d,c;
e=f.length;
d=[];
c=booking.promise();
if(!e){c.fulfill([]);
return c
}booking.tools.object.each(f,function(h,g){h.then(function(j){e--;
d[g]=j;
if(!e){c.fulfill(d)
}},function(j){c.reject(j)
})
});
return c
};
var goog=goog||{};
goog.inherits=B.tools.inherits;
goog.base=B.tools.base;
goog.abstractMethod=B.tools.abstractMethod;
goog.addSingletonGetter=B.tools.addSingletonGetter;
goog.isBoolean=function(c){return(typeof c==="boolean")
};
goog.isNumber=function(c){return(typeof c==="number")
};
goog.isString=function(c){return(typeof c==="string")
};
goog.isObject=function(d){var c=typeof d;
return((c==="object"&&d!=null)||c==="function")
};
goog.isArray=function(c){return($.type(c)==="array")
};
goog.isFunction=function(c){return($.type(c)==="function")
};
function bookmark(d,g,c){if(window.sidebar&&window.sidebar.addPanel){window.sidebar.addPanel(g,d,"")
}else{if(window.external){try{window.external.AddToFavoritesBar(d,g)
}catch(f){window.external.AddFavorite(d,g)
}}else{if(window.opera&&window.print){c.title=g
}}}return false
}function addBookmark(d,c){if(window.sidebar){window.sidebar.addPanel(d,c,"")
}else{if(document.all){window.external.AddFavorite(c,d)
}else{alert("Sorry your browser doesn't support this function\nTo bookmark this page\nWindows users press ctrl + D\nMac users press cmd + D")
}}}function hideFrameContainer(d,h,e){if(document.getElementById){var j=document.getElementById(d);
var g=document.getElementById(h);
j.style.display="none";
document.getElementById("headline_newsletter").style.display="block";
document.getElementById("headline_createprofile").style.display="none"
}}function changeHeadline(){document.getElementById("headline_newsletter").style.display="none";
document.getElementById("headline_createprofile").style.display="block"
}function hideEl(c){if($.isArray(c)){$.each(c,function(){hideEl(this)
})
}$("#"+c).hide()
}function showEl(c){$("#"+c).show()
}function showFrameContainer(k,g,j,d,h,w,p,m,t){if(document.getElementById){var o=document.getElementById(k);
var q=document.getElementById(g);
var n=document.getElementById(j);
if(q.style.display=="block"){q.style.display="none";
return false
}if(n.src!=d){n.src=d
}q.style.visibility="hidden";
q.style.display="block";
var u=$(o).position()||{};
var l=u.left,r=u.top;
if(p){l+=p
}if(m){r+=m
}if(!h){h=q.offsetWidth
}var x=document.getElementById("bodyconstraint").offsetWidth;
if((l+h)>x){l=(x-h-40)
}q.style.left=l+"px";
q.style.top=r+"px";
q.style.visibility="visible";
return false
}else{window.open(d)
}}function sSc(d,c,e){if(document.getElementById){document.getElementById("rsc_"+d).innerHTML=e
}}function sSc3(c,d){$("li[id^="+c+"]").attr("style","display: none; ");
$("li[id^="+d+"]").removeAttr("style")
}function sSc2(f,e,g){if(document.getElementById){if(document.getElementById("rnr")){document.getElementById("rnr").innerHTML=f
}for(var d=-1;
d<10;
d++){var c=document.getElementById("rl"+d);
if(c){c.style.color="";
c.style.textDecoration="underline"
}}e.style.color="#003580";
e.style.textDecoration="none";
e.blur();
$("#gr_profile_chooser ul").removeClass().addClass(g);
$(".review_filter_sub").text($(e).find(".key").text());
if(g=="group"||g=="review_category_group_of_friends"){classname="group_big"
}else{if(g=="solo_traveller"){classname="solo_big"
}else{if(g=="family_with_young_children"||g=="review_category_family"){classname="youngchildren_big"
}else{if(g=="mature_couple"){classname="maturecouple_big"
}else{if(g=="family_with_older_children"){classname="oldchildren_big"
}else{if(g=="with_friends"){classname="withfriends_big"
}else{if(g=="young_couple"||g=="review_category_couple"){classname="youngcouple_big"
}else{classname="global_big"
}}}}}}}$(".review_user_type").attr("class","review_user_type type_"+classname)
}}if($.ajaxSetup){$.ajaxSetup({cache:false,beforeSend:function(c){c.setRequestHeader("X-Booking-Pageview-Id",booking.env.pageview_id);
c.setRequestHeader("X-Booking-AID",booking.env.aid);
c.setRequestHeader("X-Booking-Session-Id",booking.env.b_sid)
}})
}$("#signup_box").hide();
$(".userdataform").hide();
function ShowHideSignup(){$("#signup_box").animate({height:"toggle"},{duration:500});
return false
}$("#signup_box #signupForm").click(function(c){c.stopPropagation()
});
$("#signup_box .userdataform").click(function(c){c.stopPropagation()
});
$(function(){$(".newsletter_ajax_error").hide();
$('input#to[type="text"]').css({backgroundColor:"#FFFFFF"});
$('input#to[type="text"]').focus(function(){$(this).css({color:"#003580"});
if(this.value==this.defaultValue){this.value=""
}if(this.value!=this.defaultValue){this.select()
}});
$("input.text-input").blur(function(){$(this).css({backgroundColor:"#FFFFFF"})
});
$("div#newsletterform_form a.flashdeals_nosubscribe").click(function(){$("div#flashdealsbg_wrapper h2.flashdeals_header_one").hide();
$("div#flashdealsbg_wrapper h2.flashdeals_header_two").show();
$("div#flashdealsbg_wrapper h3.flashdeals_subheader_one").hide();
$("div#flashdealsbg_wrapper h3.flashdeals_subheader_two").show();
$("div#flashdealsbg_wrapper a.flashdeals_nosubscribe").hide();
$("div#flashdealsbg_wrapper a.flashdeals_gotobooking").show();
$("div#flashdealsbg_wrapper input.newsletter_button").hide();
$("div#flashdealsbg_wrapper input.newsletter_button_deals").show();
return false
})
});
(function(e,d){d=d||{};
var f=e.console||{};
f.warn=f.warn||function(){};
var c={_list:{},get:function(h){return c._list[h]
},set:function(h,j){var h=h||"";
var j=j||"";
if(typeof h==="string"){h=h.replace(/^\s+|\s+$/g,"")
}if(typeof j==="string"){j=j.replace(/^\s+|\s+$/g,"")
}if((h.length>0&&typeof h==="string")||typeof h!=="string"){if(typeof c._list[h]!=="undefined"){f.warn("Booking Strings: replacing string with id: "+h)
}c._list[h]=j
}else{f.warn("Booking Strings: trying to insert string with empty id")
}}};
var g=function(h,j){return c[typeof j!=="undefined"?"set":"get"](h,j)
};
d.strings=g;
d.strings.get=c.get;
d.strings.set=c.set;
d.tmpl=function(h,j){return h.replace(/{([^{}]*)}/g,function(l,k){var m=j[k];
return typeof m==="string"||typeof m==="number"?m:l
})
}
})(window,booking);
var getLocalStorage=(function(){var d=false;
try{if("localStorage" in window&&window.localStorage!==null){localStorage.setItem("booking_com",true);
if(localStorage.getItem("booking_com")){d=true
}}}catch(c){d=false
}if(booking.env){booking.env.b_has_local_storage=d
}}());
window.jQuery.cookie=function(d,l,o){if(typeof l!="undefined"){o=o||{};
if(l===null){l="";
o=$.extend({},o);
o.expires=-1
}var g="";
if(o.expires&&(typeof o.expires=="number"||o.expires.toUTCString)){var h;
if(typeof o.expires=="number"){h=new Date();
h.setTime(h.getTime()+(o.expires*24*60*60*1000))
}else{h=o.expires
}g="; expires="+h.toUTCString()
}var n=o.path?"; path="+(o.path):"";
var j=o.domain?"; domain="+(o.domain):"";
var c=o.secure?"; secure":"";
document.cookie=[d,"=",encodeURIComponent(l),g,n,j,c].join("")
}else{var f=null;
if(document.cookie&&document.cookie!=""){var m=document.cookie.split(";");
for(var k=0;
k<m.length;
k++){var e=jQuery.trim(m[k]);
if(e.substring(0,d.length+1)==(d+"=")){f=decodeURIComponent(e.substring(d.length+1));
break
}}}return f
}};
(function(n,p,l){var e="experiments",h="startup",f="experiments_load",o="startup_load",m=p.env,d=false,q=m&&m.b_site_type_id||"",j=l(document),c=function(t){return typeof t==="function"
},r=function(u){var t="b_site_experiment_"+u;
var w=p.jst&&p.jst[u]>0;
return((t in m)&&+m[t]>0)||w
},g;
p.ensureNamespaceExists(e);
p.ensureNamespaceExists(h);
p.ensureNamespaceExists(f);
p.ensureNamespaceExists(o);
g=p[h];
g.init=function(D){var E=[],O=9,G,y,x,J,I,H,N,M,A,F,w,L,K,C,t=D==="ready";
if(p.env.b_inc_filters){var z=p.env.b_inc_filters;
for(sFiltrGrp in z){var u=z[sFiltrGrp];
for(sFiltr in u){p.jst[sFiltr]=u[sFiltr]
}}}G=t?e:f;
x=p[G];
for(J in x){if(p.b_disable_run){if(isNaN(m["b_site_experiment_"+J])&&(jst=p.jst&&p.jst[J]===undefined)){continue
}}if(x[J]){E.push([x[J].priority||O,J,G,!r(J)])
}}y=t?h:o;
I=p[y];
for(H in I){w=I[H];
E.push([w.priority||O,H,y,false])
}if(E.length>0){if(B.non_lexical_sort){E.sort(function(Q,P){if(Q[2]!=P[2]){return Q[2]>P[2]?-1:1
}else{return Q[0]-P[0]
}})
}else{E.sort()
}for(K=0,C=E.length;
K<C;
K+=1){N=E[K];
M=N[1];
A=N[2];
w=p[A][M];
l.extend(w,{strings:p.strings});
F=N[3]?w.initElse:w.init;
w.ns="booking."+A;
w.name=M;
if(c(F)){setTimeout((function(P,R,Q){return function(){L=P.execute(R,Q);
if(L===true){Q.init=Q.initElse=null
}}
})(this,F,w),0)
}}}l(document).trigger(D+":finished");
if(t&&!d){d=true;
p.track.exp(p.track.queue.join(","))
}};
g.execute=function(u,t){return u.call(t)
};
m.amTracking=[];
(function(){var y=20,z=Object.prototype.toString,I=Array.prototype.slice,F=l(n),N=l(document),w=function(S){var U=S.offset(),R=(typeof U.constructor==="function")?U.constructor:{name:"OtherConstructor"},T;
if(R.name==="ClientRect"){T=l(S.trackingSelector).eq(0).offset();
if(T){return T.top
}return false
}return U.top
},J=function(S){var R=w(S);
if(R===false){return false
}return((F.scrollTop()+F.height())>(R+y))&&S.is(":visible")
},G=function(R,T){try{F.trigger(R,T)
}catch(S){}},H={css:jQuery.fn.css,show:jQuery.fn.show,hide:jQuery.fn.hide,toggle:jQuery.fn.toggle},O={show:/block|inline|list-item|inline-block/,hide:/none/};
jQuery.fn.css=function(T,S){var R=H.css.apply(this,I.apply(arguments));
if(this.selector){if(typeof S!=="undefined"&&T==="display"){G("ELEMENT_DISPLAY:"+this.selector,{elem:this,value:S})
}else{if(z.apply(T)==="[object Object]"&&"display" in T){G("ELEMENT_DISPLAY:"+this.selector,{elem:this,value:T.display})
}}}return R
};
l.each("show hide toggle".split(" "),function(R,S){jQuery.fn[S]=function(){var T=H[S].apply(this,I.apply(arguments));
if(this.selector){G("ELEMENT_DISPLAY:"+this.selector,{elem:this,value:this.css("display")})
}return T
}
});
var P=[],K=[],E=[],Q,x,u,A,t,M,D={};
t=function(){M=false
};
x=function(){var Z,T="",Y,S,R=[];
Q=false;
if(M||p.sending_logo){Q=setTimeout(x,50);
return
}if(P.length>0||K.length>0||E.length>0){M=true;
F.trigger("ClickTale:TrackDynamic",{experiments:P});
Z=K.length?";what="+K.join(","):"";
if(E.length){T=";custom=";
for(var W=0,U=E.length;
W<U;
W++){T+=E[W].join("|");
if(W+1<U){T+=","
}}}S=l("#req_info").html()||"";
for(var X=0,V=P.length;
X<V;
X++){if(S.indexOf(P[X])===-1){R.push(P[X])
}}R=R.join(",");
Y=document.createElement("img");
Y.setAttribute("style","height:1px;width:1px;visibility:hidden;float:left;");
Y.onload=Y.onerror=t;
Y.src="/js_tracking?ver=1"+Z+T+";sid="+m.b_sid+";aid="+m.b_aid+";lang="+m.b_lang_for_url+";new=1;pid="+m.pageview_id+";exps="+P.join(",")+";stype="+q;
document.body.appendChild(Y);
l("#req_info").html(S+","+R);
if(m.b_js_tracking_info_to_console&&n.console){if(P.length){n.console.info("JS exp tracking triggered: "+P.join(", "))
}if(K.length){n.console.info("JS goal tracking triggered: "+K.join(", "))
}if(E.length){n.console.info("JS custom goal tracking triggered: "+E.join(", "))
}}P=[];
K=[];
E=[]
}};
u=function(T,S,W){if(typeof T==="undefined"||T===null||m.b_browser==="bot"){return
}var Y=(l.isArray(T)?T:(T.split?T.split(","):[])),X,U,V,R=p.env.js_experiment_tracking||{},Z,ab,aa;
if(!d){p.track.queue.push(T)
}for(X=0,U=Y.length;
X<U;
X+=1){aa=Y[X];
ab=p.jst&&typeof p.jst[aa]!=="undefined"&&p.jsdt&&!p.jsdt[aa];
Z=(isNaN(+aa)&&!!R?R[aa]:aa)||(ab?aa:false);
if((/^[0-9]+$/.test(Z)||ab)&&typeof m.amTracking["e"+Z]==="undefined"){P.push(Z);
m.amTracking["e"+Z]=1
}}if(S&&typeof m.amTracking["g"+S]==="undefined"){if(!W){K.push(S);
m.amTracking["g"+S]=1
}else{E.push([S,W]);
D[S]=W
}}if(T!==true&&!P.length){return false
}else{if(R&&R.njst&&/^[0-9]+$/.test(R.njst)&&typeof m.amTracking["e"+R.njst]==="undefined"){P.push(R.njst);
m.amTracking["e"+R.njst]=1
}}if(Q){n.clearTimeout(Q);
Q=false
}Q=n.setTimeout(x,50)
};
var C=p.track.queue;
p.track={queue:C,exp:u,goal:function(R){if(!R){return
}u(true,R)
},custom_goal:function(R,S){if(!R||+S<1||+S>5||isNaN(p.jst[R])||p.jsdt[R]){return
}u(true,R,S)
},getVariant:function(R){if(R&&p.jst&&!isNaN(p.jst[R])){return p.jst[R]
}return false
},onView:function(R){var S=l(R).eq(0),T=this.exp;
S.trackingSelector=R;
return{exp:function(){var U=I.apply(arguments),V=l.proxy(function(){var W;
if(J(S)){W="ONVIEW:"+(z.apply(R)==="[object String]"?R:l(R).selector);
F.trigger(W,{source:R});
T.apply(p.track,this.args);
F.unbind("resize scroll",V)
}},{args:U});
if(S.length){if(S.css("display")==="none"){S.css({display:"block",visibility:"hidden"})
}F.bind("resize scroll",V);
V()
}}}
},onNav:function(){return{exp:function(){}}
}};
l.each("blur change click dblclick mouseover mouseout".split(" "),function(S,R){var U=R.slice(0,1),T=R.replace(U,U.toUpperCase());
p.track[R]=p.track["on"+T]=function(V){var W=l(V);
return{exp:function(){var X=I.apply(arguments),Y=l.proxy(function(){p.track.exp.apply(p.track,this.args);
W.unbind(R,Y)
},{args:X});
W.bind(R,Y)
}}
};
p.track["live"+T]=function(V){return{exp:function(){var W=I.apply(arguments),X=l.proxy(function(){p.track.exp.apply(p.track,this.args);
l(V).unbind(R,X)
},{args:W});
N.delegate(V,R,X)
}}
}
});
l.each("show hide".split(" "),function(S,R){p.track[R]=function(T){var U=l(T);
if(!U.selector){return{exp:function(){}}
}return{exp:function(){var V=I.apply(arguments),W=l.proxy(function(X,Y){if(O[R].test(Y.value)&&(Y.elem.selector===U.selector||(U.length===1&&Y.elem[0]===U[0]))){p.track.exp.apply(p.track,this.args);
F.unbind("ELEMENT_DISPLAY:"+U.selector,W)
}},{args:V});
F.bind("ELEMENT_DISPLAY:"+U.selector,W)
}}
}
});
l.each("blur change click dblclick mouseover mouseout".split(" "),function(T,S){var R="[data-track-on-"+S+"]",U=function(){p.track.exp.call(p.track,l(this).data("track-on-"+S)+"")
};
N.delegate(R,S,U)
});
var L={mouseenter:"hover",hover:"hover",click:"click"};
N.delegate("[data-google-track]","click hover mouseenter mouseleave",function(S){var R=(l(this).data("google-track")||"").split("/");
if(R[0].toLowerCase()===L[S.type]){p.google.trackEvent.apply(p.google,R)
}});
N.delegate("[data-ga-track]","click",function(S){var R=(l(this).data("ga-track")||"").split(":");
if(R[0].toLowerCase()===L[S.type]){p.google.trackPageview.apply(p.google,R)
}})
})();
m.trackExperiment=function(){p.track.exp.apply(this,Array.prototype.slice.apply(arguments))
};
l(function(){j.trigger("ready:before");
p[h].init("ready")
});
l(n).load(function(){p[h].init("load")
});
p.run=function(t){return{afterReady:function(u){this.onReady(function(){j.bind("ready:finished",u)
})
},onReady:function(u){p[h][t]={priority:9,init:u}
},onLoad:function(u){p[o][t]={priority:9,init:u}
}}
};
p.runExp=function(t){return{beforeReady:function(u){j.bind("ready:before",u)
},afterReady:function(u){this.onReady(function(){j.bind("ready:finished",u)
})
},onReady:function(u){p[e][t]={priority:9,init:u}
},afterLoad:function(u){this.onLoad(function(){j.bind("load:finished",u)
})
},onLoad:function(u){p[f][t]={priority:9,init:u}
}}
};
p.env.b_occupancy=(function k(){var A=p.env.b_group,u,y,x,z=0,w=0,t={adults:2,children:0,guests:2},C;
if(Object.prototype.toString.apply(A)!=="[object Array]"){return t
}y=A.length;
x=A[0];
C=y>1||(y===1&&(x.guests===1||x.guests>2||x.children>0));
if(!C){return t
}for(u=0;
u<y;
u+=1){x=A[u];
z+=x.guests;
w+=x.children
}return{adults:z,children:w,guests:z+w}
})();
p.eventEmitter=l(n);
n.sNSExperiments=e;
n.sNSStartup=h;
n.sNSExperimentsLoad=f;
n.sNSStartupLoad=o
})(this,this.booking,this.jQuery);
(function(k,n){var h=n.startup,m=Array.prototype.slice,d=Object.prototype.toString,e=function(){return +new Date+Math.random()+""
},j=function(p){var q,u,t,r=false,o;
if(p.length){for(q=0,u=p.length;
q<u;
q+=1){t=p[q];
if(t&&d.apply(t)==="[object Function]"){o=q;
r=t;
break
}}}return{handler:r,handlerIndex:o}
},f={},g=n.env;
function l(o){return(typeof o==="object"&&typeof o.nodeName==="string")
}var c=function(o){return function(){var u,r,w=Array.prototype.slice,t,p,q=w.apply(arguments);
if(this.length){u=j(q);
r=u.handler;
p=u.handlerIndex;
if(r){q[p]=function(x){if(typeof ClickTaleExec!=="function"||!l(this)){return r.apply(this,w.apply(arguments))
}if(!/submit/i.test(x.type)){if(this===k){ClickTaleExec("jQuery(window)."+x.type+"()");
return r.apply(this,w.apply(arguments))
}else{if(this===document){ClickTaleExec("jQuery(document)."+x.type+"()");
return r.apply(this,w.apply(arguments))
}else{if(this===document.documentElement){ClickTaleExec("jQuery(document.documentElement)."+x.type+"()");
return r.apply(this,w.apply(arguments))
}}}}var H=$(this),z=H.attr("id"),D=x.type,F,G,A=this.tagName.toLowerCase(),C,E,y;
if(z){E=$("#"+z).index(this);
y='jQuery("#'+z+'").eq('+E+")"
}else{F=H.closest("[id]");
G=F.attr("id");
C=$("#"+G).index(F);
E=F.find(A).index(this);
y='jQuery("#'+G+'").eq('+C+').find("'+A+'").eq('+E+")"
}if(!/submit/i.test(x.type)){if(D==="change"){y+='.val("'+H.val()+'")'
}y+="."+D+"()";
if(!H.hasClass("ClickTaleSensitive")){if(x.handleObj&&x.handleObj.guid&&H.data("events")&&H.data("events")[D]&&H.data("events")[D][0]&&H.data("events")[D][0]["guid"]){if(x.handleObj.guid===H.data("events")[D][0]["guid"]){ClickTaleExec(y)
}}}}return r.apply(this,w.apply(arguments))
};
t=r.bookingClicktaleEventHandlerID=e();
f[t]=q[p]
}}return o.apply(this,q)
}
};
if(!g.b_site_experiment_clicktale&&!/clicktale/.test(document.location.hostname)){return
}(function(){var o=$.fn.bind,p=$.fn.unbind,q=$.fn.live;
$.fn.bind=c(o);
$.fn.live=c(q);
$.fn.unbind=function(){var r=m.apply(arguments),u,t;
if(this.length){u=j(r);
t=u.handler.bookingClicktaleEventHandlerID;
if(t&&f[t]){r[u.handlerIndex]=f[t]
}}return p.apply(this,r)
}
})()
})(this,this.booking);
$(function(){if(!booking.env.b_site_experiment_clicktale&&!/clicktale/.test(document.location.hostname)){return
}ClickTaleEvent=(typeof ClickTaleEvent==="function")?ClickTaleEvent:function(){};
ClickTaleRegisterElementAction=(typeof ClickTaleRegisterElementAction==="function")?ClickTaleRegisterElementAction:function(){};
ClickTaleRegisterFormSubmitNotSent=(typeof ClickTaleRegisterFormSubmitNotSent==="function")?ClickTaleRegisterFormSubmitNotSent:function(){};
ClickTaleRegisterFormSubmitSent=(typeof ClickTaleRegisterFormSubmitSent==="function")?ClickTaleRegisterFormSubmitSent:function(){};
ClickTaleRegisterFormSubmitFailure=(typeof ClickTaleRegisterFormSubmitFailure==="function")?ClickTaleRegisterFormSubmitFailure:function(){};
ClickTaleRegisterFormSubmitSuccess=(typeof ClickTaleRegisterFormSubmitSuccess==="function")?ClickTaleRegisterFormSubmitSuccess:function(){};
var n=function(x){if("ClickTaleContext" in window&&l(ClickTaleContext)==="[object Object]"){try{ClickTaleContext.getAggregationContextAsync("1",x)
}catch(w){}}},j=$("[data-clicktale-signify]"),p=$(".clicktale-propagation, .bigbluebutton"),k=booking.env,c=k.b_occupancy||{},r=k.all_experiment_labels_running_for_clicktale,t={index:"#b_searchbox_errors",searchresults:".dateerrors",hotel:".dateerrors",city:".dateerrors",country:".dateerrors",book:".errorSimpleMsg",confirmation:""},e=$(".clicktalecatch"),u=t[k.b_action],o=$(u),q=k.b_action==="searchresults",d=$("#basiclayout").length,h,g,f=$(window),m={"0":"User not logged in","1":"User recognized","2":"User logged in"},l=function(w){return Object.prototype.toString.apply(w)
};
if(j.length){j.map(function(){var w=$(this),y=w.data("clicktale-signify").split("_"),x=y[0];
if(x==="hover"){x="mouseenter"
}w.bind(x,function(){ClickTaleEvent(y[1]+" "+x+"ed")
})
})
}p.click(function(w){ClickTaleRegisterElementAction("click",w)
});
if(k.rtl){ClickTaleEvent("Right To Left")
}if(k.b_action==="book"){ClickTaleEvent("Booking step "+k.b_stage);
if(typeof(k.bs_multi_room)!="undefined"){if(k.bs_multi_room){ClickTaleEvent("Booking multiple room booking")
}else{ClickTaleEvent("Booking single room booking")
}}}if(/utm_medium/.test(document.location.search)){ClickTaleEvent("Source: email")
}if(k.b_locale){ClickTaleEvent("Language: "+k.b_locale)
}if(q){if(k.b_is_disambiguation){ClickTaleEvent("Disambiguation Page")
}else{if(d){ClickTaleEvent("Search results Page")
}else{ClickTaleEvent("Deal Finder Page")
}}}if(k.b_action==="myreservations"){ClickTaleEvent("My bookings Page")
}ClickTaleEvent(m[k.auth_level]);
for(h=0,g=r.length;
h<g;
h+=1){ClickTaleEvent(r[h])
}if(k.b_is_internal_ip){ClickTaleEvent("Internal IP")
}ClickTaleEvent(k.user_has_dates?"Dates chosen":"Dates not chosen");
ClickTaleEvent(c.adults+" adults");
ClickTaleEvent(c.children+" children");
ClickTaleEvent(((k.b_group&&$.isArray(k.b_group)&&k.b_group.length)?k.b_group.length:1)+" rooms selected");
if(k.b_action==="hotel"){ClickTaleEvent($(".maintr").length+" rooms in rooms table");
ClickTaleEvent(k.b_acc_type)
}if(booking.env&&booking.env.b_action!="book"){if(u&&o.length&&o.is(":visible")){ClickTaleRegisterFormSubmitFailure()
}else{ClickTaleRegisterFormSubmitSuccess()
}}f.bind("Form:NotValid",function(w,x){ClickTaleRegisterFormSubmitNotSent(x.form)
});
f.bind("Form:Valid",function(w,x){ClickTaleRegisterFormSubmitSent(x.form)
});
$(".ctaction").live("click",function(){var w=$(".ctaction").index(this);
ClickTaleExec('jQuery(".ctaction:eq('+w+')").click()')
});
$(".b_advanced_search_toggler").bind("click",function(){ClickTaleEvent("Advanced search is opened")
});
e.bind("input keydown blur",function(){(window.ClickTaleExec||function(){})('jQuery(".clicktalecatch:eq('+e.index(this)+')").val("'+$(this).val()+'");')
});
e.bind("auto_completed",function(){(window.ClickTaleExec||function(){})('jQuery(".clicktalecatch:eq('+e.index(this)+')").val("'+$(this).val()+'");')
});
n(function(w){$("#bOn").click()
});
f.bind("ClickTale:TrackDynamic",function(A,D){var C=D.experiments,y,w,x,z;
for(x=0,z=C.length;
x<=z;
x+=1){y=C[x]+"";
if(y in k.clicktale_experiment_ids){w=k.clicktale_experiment_ids[y];
if(w in k.all_experiment_names_running_for_clicktale){ClickTaleEvent("Experiment "+w+" variant "+k.all_experiment_names_running_for_clicktale[w])
}}}});
if(k.b_action){ClickTaleEvent("Action: "+k.b_action)
}});
if(booking.env.b_site_experiment_clicktale){function safeClickTaleRegisterFormSubmit(c){if(typeof ClickTaleRegisterFormSubmit==="function"){ClickTaleRegisterFormSubmit(c)
}}function safeClickTaleRegisterFormSubmitSent(c){if(typeof ClickTaleRegisterFormSubmitSent==="function"){ClickTaleRegisterFormSubmitSent(c)
}}function safeClickTaleRegisterFormSubmitNotSent(c){if(typeof ClickTaleRegisterFormSubmitNotSent==="function"){ClickTaleRegisterFormSubmitNotSent(c)
}}function safeClickTaleRegisterFormSubmitSuccess(c){if(typeof ClickTaleRegisterFormSubmitSuccess==="function"){ClickTaleRegisterFormSubmitSuccess(c)
}}function safeClickTaleRegisterFormSubmitFailure(c){if(typeof ClickTaleRegisterFormSubmitFailure==="function"){ClickTaleRegisterFormSubmitFailure(c)
}}if(booking.env.b_action==="book"){jQuery(document).ready(function(){jQuery("form").bind("submit.CT",function(){safeClickTaleRegisterFormSubmit(this);
safeClickTaleRegisterFormSubmitSent(this)
});
if($.trim($(".errorSimpleMsg").text())&&jQuery("#top_warning").length>0){safeClickTaleRegisterFormSubmitFailure()
}else{safeClickTaleRegisterFormSubmitSuccess()
}})
}}booking[sNSStartup].popups={priority:9,curPopup:null,tempTar:null,sizes:{s:{width:300,height:400},m:{width:400,height:400},l:{width:600,height:580},xl:{width:850,height:600}},init:function(){var c=this;
$(".popup_s, .popup_m, .popup_l, .popup_xl").click(function(){var f="l";
var d=$(this).attr("class").split(" ");
for(var e=0;
e<d.length;
e++){if(d[e].indexOf("popup_")>-1){f=d[e].split("_")[1]
}}c.tempTar=$(this).attr("href");
c.openPopup(f);
return false
})
},openPopup:function(d){var c=this;
if(this.curPopup){this.curPopup.close();
this.curPopup=null;
var d=d;
setTimeout(function(){c.openPopup(d)
},300)
}else{var e=this.sizes[d];
this.curPopup=window.open(this.tempTar,"","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width="+e.width+",height="+e.height+",left=200,top=200");
this.curPopup.focus();
this.tempTar=null
}}};
(function(){var j=Array.prototype.slice;
var d=(typeof setImmediate==="function");
function h(m,l,k){return function(){return m.apply(l,k)
}
}function f(k){k||(k={});
this._events={};
this._listening=[];
this.context=k.context;
this.eventCount=0;
if(k.debug){this._debug=true;
this._last={time:0,eventCount:0}
}if(k.async){this._async=true;
this.emitSync=this.emit;
this.emit=this.emitNext
}}f.prototype.addListener=function(l,o,n){var k=this._events[l]||(this._events[l]=[]);
k.push(n?{fn:o,context:n}:o);
for(var m=0;
m<k.length;
m++){if(k[m]==null){k.splice(m,1)
}}return this
};
f.prototype.once=function(m,n){var l=this;
var o=false;
function k(){if(!o){o=true;
n.apply(this,arguments);
l.removeListener(m,k)
}}return this.addListener(m,k)
};
f.prototype.removeListener=function(n,q,p){var m=this;
var l=this._events[n];
if(n==="*"){if(!q){this._events={}
}else{for(var k in this._events){if(this._events.hasOwnProperty(k)){m.removeListener(k,q)
}}}}else{if(q&&l){for(var o=0;
o<l.length;
o++){if(l[o]&&(l[o]===q||l[o].fn===q)){l[o]=null
}}if(l.length===0){delete this._events[n]
}}else{delete this._events[n]
}}return this
};
f.prototype.emitNext=function(m){var k=this,l=arguments;
var n=h(f.prototype.emit,k,l);
return d?setImmediate(n):setTimeout(n,0)
};
f.prototype.emit=function(m){var k=this._events[m];
this._debug&&this.tick();
if(!k){return this
}for(var o=0;
o<k.length;
o++){var q=k[o];
if(!q){continue
}var n=q.context||this._context||this;
var p=q.fn||q;
var r=arguments.length;
switch(r){case 1:p.call(n);
break;
case 2:p.call(n,arguments[1]);
break;
case 3:p.call(n,arguments[1],arguments[2]);
break;
default:var l=new Array(r-1);
for(o=1;
o<r;
o++){l[o-1]=arguments[o]
}p.apply(n,l)
}}return this
};
f.prototype.tick=function(){var k=+new Date;
var l=this._last;
this.eventCount++;
if(k-l.time>5000){this.rate=Math.floor((this.eventCount-l.eventCount)/(k-l.time)/1000);
this._last={time:k,eventCount:this.eventCount}
}};
f.prototype.proxy=function(l){var k=this;
return function(){var m=j.call(arguments,0);
m.unshift(l);
k.emit.apply(k,m)
}
};
f.prototype.listenTo=function(o,k,m,l){var n=new g(o,k,m,l);
n.attach();
this._listening.push(n)
};
f.prototype.stopListening=function(o,k,m){for(var l=0,n;
n=this._listening[l];
l++){if(n.matches(o,k,m)){n.detach()
}}};
f.prototype.destroy=function(){this.removeListener("*");
this.stopListening()
};
function g(n,k,m,l){this.target=n;
this.name=k;
this.fn=m;
this.context=l
}g.prototype.attach=function(){var k=this.target;
var l=k.addListener||k.on||k.bind;
l.call(k,this.name,this.fn,this.context);
return this
};
g.prototype.detach=function(){var k=this.target;
var l=k.removeListener||k.off||k.unbind;
l.call(k,this.name,this.fn);
return this
};
g.prototype.matches=function(m,k,l){return((!m||m===this.target)&&(!k||k===this.name)&&(!l||l===this.fn))
};
f.extend=function(n,k){f.call(n,k);
var m=f.prototype;
for(var l in m){if(!m.hasOwnProperty(l)){continue
}n[l]=m[l]
}return n
};
f.create=function(k){return new f(k)
};
var c={on:"addListener",off:"removeListener",trigger:"emit"};
for(var e in c){if(!c.hasOwnProperty(e)){continue
}f.prototype[e]=f.prototype[c[e]]
}if(typeof module!=="undefined"&&module.exports){module.exports=f
}else{if(typeof define!=="undefined"){define("Emmy",function(){return f
})
}else{this.Emmy=f
}}}).call(this);
booking.events={Emitter:window.Emmy};
window.Emmy=undefined;
(function(){var d=$(document.body),h=Object.prototype.toString,c=function(k){return h.apply(k)==="[object String]"
};
function g(l,k,m){d.append(k=$('<div style="position:fixed;top:-10000px;left:-10000px"></div>').append(l=$(l).clone()));
m={height:l.height(),width:l.width()};
k.remove();
return m
}function f(m,l,k){m.width(l.width).height(Math.floor(l.width*k))
}function j(m,l,k){m.height(l.height).width(Math.floor(l.height/k))
}function e(m,l){m=$(m);
m.removeAttr("height").removeAttr("width");
var n=m.data("current-dimensions")||g(m),k;
n.height=+n.height;
n.width=+n.width;
k=n.height/n.width;
if(n.width<=l.width&&n.height<=l.height){return
}if(n.width>l.width&&n.height<=l.height){f(m,l,k);
return
}if(n.width<=l.width&&n.height>l.height){j(m,l,k);
return
}if((l.width*k)<=l.height){f(m,l,k);
return
}j(m,l,k)
}window.booking.fitImage=e
})();
B.Search=B.Search||{};
B.Search.Events={DESTINATION_CHANGED:"SEARCH:DESTINATION_CHANGED",DESTINATION_INVALID:"SEARCH:DESTINATION_INVALID",DATE_CHANGED:"SEARCH:date_changed",DATE_MONTH_CHANGED:"SEARCH:month_changed",DATE_MODE_CHANGED:"SEARCH:mode_changed",DATE_INVALID:"SEARCH:dates_invalid",DATE_VALID:"SEARCH:dates_valid",FLEXIBLE_MONTHYEAR_CHANGED:"SEARCH:flexible_monthyear_changed",FLEXIBLE_INTERVAL_CHANGED:"SEARCH:flexible_interval_changed",FLEXIBLE_INVALID:"SEARCH:monthyear_invalid",FLEXIBLE_VALID:"SEARCH:monthyear_valid",GROUP_CHANGED:"SEARCH:group_changed",GROUP_MODE_CHANGED:"SEARCH:group_mode_changed",GROUP_VALID:"SEARCH:group_valid",GROUP_INVALID:"SEARCH:group_invalid",ADVANCED_SEARCH_ENABLED:"SEARCH:advanced_search_enabled",ADVANCED_SEARCH_DISABLED:"SEARCH:advanced_search_disabled"};
B.Search.TrackingEvents={DESTINATION_CHANGED:"destination_changed",CHECKOUT_DATEPICKER:"checkout_changed_datepicker",CHECKOUT_MONTH_SELECTOR:"checkout_changed_month_selector",CHECKOUT_DAY_SELECTOR:"checkout_changed_day_selector",CHECKIN_DATEPICKER:"checkin_changed_datepicker",CHECKIN_MONTH_SELECTOR:"checkin_changed_month_selector",CHECKIN_DAY_SELECTOR:"checkin_changed_day_selector",NO_DATES_SELECTED:"no_dates_selected",FLEXIBLE_INTERVAL_SELECTED:"flexible_interval_selected",FLEXIBLE_MONTH_SELECTED:"flexible_month_selected",GROUP_ADVANCED_MODE_SELECTED:"group_advanced_mode_selected",GROUP_BASIC_MODE_SELECTED:"group_basic_mode_selected",GROUP_PREDEFINED_OPTION_SELECTED:"group_predefined_option_selected",GROUP_ROOMS_NUMBER_CHANGED:"rooms_number_changed",GROUP_ADULTS_NUMBER_CHANGED:"adults_number_changed",GROUP_CHILDREN_NUMBER_CHANGED:"children_number_changed",GROUP_CHILDREN_AGE_CHANGED:"children_age_changed",ADVANCED_SEARCH_CHANGED:"advanced_search_changed",ADVANCED_SEARCH_ENABLED:"advanced_search_enabled",ADVANCED_SEARCH_DISABLED:"advanced_search_disabled",FORM_SUBMITTED:"form_submitted"};
B.Search.DateModes={REGULAR:"regular",NODATES:"no-dates",FLEXIBLE:"flexible"};
B.Search.GroupModes={REGULAR:"basic",CUSTOM:"custom"};
B.Search.rawGroupConfiguration;
B.Search.groupConfiguration;
B.Search.childrenConfiguration;
B.Search.createGroup=function(c){if(!c||typeof c!=="object"){return new B.Search.InvalidGroup()
}return new B.Search.Group(c)
};
B.Search.AbstractGroup=function(){};
B.Search.AbstractGroup.prototype.parseChildrenConfig=function(c){var d=[],e;
if(!c.childrenAges&&c.childrenages){c.childrenAges=c.childrenages
}if(c.childrenAges instanceof Array){d=c.childrenAges
}else{if(typeof c.childrenAges==="string"){d=c.childrenAges.split(",")
}else{if(c.children instanceof Array){d=c.children
}else{if(typeof c.children!=="undefined"){e=parseInt(c.children,10);
if(isNaN(e)){d=[]
}else{d=new Array(e)
}}else{d=[]
}}}}return{childrenAges:d,children:d.length}
};
B.Search.AbstractGroup.prototype.parseConfig=function(c,e){var d={};
if(c.adults){d.adults=c.adults
}if(c.rooms){d.rooms=c.rooms
}if(d.rooms===0){d.rooms=1
}$.extend(d,this.parseChildrenConfig(c));
if(c.name){d.name=c.name
}if(c.type){d.type=c.type
}if(e&&e.useDefaults){d=$.extend({adults:2,rooms:1,children:0,childrenAges:[]},d)
}return d
};
B.Search.AbstractGroup.prototype.applyConfig=function(c){var d;
if(c.name!==d){this.name=c.name
}if(c.type!==d){this.type=c.type
}if(c.rooms!==d){this.rooms=c.rooms
}if(c.adults!==d){this.adults=c.adults
}if(c.children!==d){this.children=c.children
}if(c.childrenAges!==d){this.childrenAges=c.childrenAges
}};
B.Search.InvalidGroup=function(){};
B.Search.InvalidGroup.prototype=new B.Search.AbstractGroup();
B.Search.InvalidGroup.prototype.valueOf=function(){return null
};
B.Search.Group=function(c){var d=this.parseConfig(c,{useDefaults:true});
this.applyConfig(d)
};
B.Search.Group.prototype=new B.Search.AbstractGroup();
B.Search.Group.prototype.update=function(c){var d=this.parseConfig(c);
this.applyConfig(d);
return this
};
B.Search.Group.prototype.toString=function(){return this.valueOf()
};
B.Search.Group.prototype.valueOf=function(){var c=["Group:"];
if(this.name){c.push("Name: "+this.name)
}if(this.type){c.push("Type: "+this.type)
}c.push(this.rooms);
c.push(this.adults);
c.push(this.children);
c.push(this.childrenAges.join("|"));
return c.join(",")
};
B.Search.ONE_DAY=1000*60*60*24;
B.Search.createDate=function(j){var f,k,c,e,g,d,h;
switch(typeof j){case"string":h=j.split("-");
if(h.length>1){f=parseInt(h[0],10);
k=parseInt(h[1],10)-1
}if(h.length===3){c=parseInt(h[2],10)
}break;
case"object":f=parseInt(j.year,10);
k=parseInt(j.month,10);
c=parseInt(j.date,10);
break;
case"undefined":e="invalid";
break
}d=typeof f==="number"&&!isNaN(f)&&typeof k==="number"&&!isNaN(k);
g=d&&typeof c==="number"&&!isNaN(c)&&c!==0;
if(g){return new B.Search.Date({year:f,month:k,date:c})
}else{if(d){return new B.Search.MonthDate({year:f,month:k})
}else{return new B.Search.InvalidDate()
}}};
B.Search.AbstractDate=function(){};
B.Search.AbstractDate.prototype.initValue_=function(){this.dateObject_=new Date(this.year,this.month,this.date||1);
this.value_=Math.floor(this.dateObject_.valueOf()/B.Search.ONE_DAY)
};
B.Search.AbstractDate.toString=function(){throw"Abstract method should be override in child classes"
};
B.Search.AbstractDate.prototype.valueOf=function(){if(!this.value_){this.initValue_()
}return this.value_
};
B.Search.Date=function(c){this.year=c.year;
this.month=c.month;
this.date=c.date;
this.type="valid"
};
B.Search.Date.prototype=new B.Search.AbstractDate;
B.Search.Date.prototype.toString=function(){var c=[],d=this.month+1;
c.push(this.year);
if(d<=9){c.push("0"+d)
}else{c.push(d)
}if(this.date<=9){c.push("0"+this.date)
}else{c.push(this.date)
}return c.join("-")
};
B.Search.MonthDate=function(c){this.year=c.year;
this.month=c.month;
this.type="month"
};
B.Search.MonthDate.prototype=new B.Search.AbstractDate;
B.Search.MonthDate.prototype.toString=function(){var c=[],d=this.month+1;
c.push(this.year);
if(d<=9){c.push("0"+d)
}else{c.push(d)
}return c.join("-")
};
B.Search.InvalidDate=function(){this.type="invalid"
};
B.Search.toString=function(){return"Invalid Date"
};
B.Search.InvalidDate.prototype=new B.Search.AbstractDate;
B.Search.AbstractWidget=function(c,d){};
B.Search.AbstractWidget.prototype.initialize=function(c,d){this.$element=c;
this.setOptions(d)
};
B.Search.AbstractWidget.prototype.setOptions=function(c){if(!this.options){this.options={}
}this.options=$.extend(this.options,c)
};
B.Search.AbstractWidget.prototype.initEvents=function(){throw"Abstract intiEvents method should be implemented in widget instances"
};
B.Search.AbstractWidget.prototype.onExternalEventConfigChanged=function(){throw"Abstract onExternalEventConfigChanged method should be implemented in widget instances"
};
B.Search.AbstractWidget.prototype.getConfig=function(){throw"Abstract getConfig method should be implemented in widget instances"
};
B.Search.AbstractWidget.prototype.trigger=function(c,d){if(c==="groupChanged"&&typeof this.onExternalEventConfigChanged==="function"){this.onExternalEventConfigChanged.apply(this,[].slice.call(arguments,1))
}};
B.Search.AbstractWidget.prototype.onInit=function(){var c=this;
if(typeof this.options.onInit==="function"){window.setTimeout(function(){c.options.onInit.call(c,c.getConfig())
},10)
}};
B.Search.AbstractWidget.prototype.onChange=function(){if(typeof this.options.onChange==="function"){this.options.onChange.call(this,this.getConfig())
}};
B.Search.AbstractWidget.prototype.tryCallback=function(d,e,f){var c;
if(!d){return
}e=e||[];
if(typeof this.options[d]==="function"){c=this.options[d]
}else{if(typeof f==="function"){c=f
}}if(c){c.apply(this,e)
}};
B.Search.AbstractWidget.prototype.DISABLED_CLASS="disabled";
B.Search.AbstractWidget.prototype.hide=function(){this.$element.toggleClass(this.DISABLED_CLASS,true)
};
B.Search.AbstractWidget.prototype.show=function(){this.$element.toggleClass(this.DISABLED_CLASS,false)
};
B.Search.createWidgetPlugin=function(d,c){if($.fn[d]){throw"Jquery plugin "+d+" is already defined"
}$.fn[d]=(function(e,f){var g=[];
return function(l){if(l==="notify"){var h=arguments[1],j=arguments[2];
for(var k=0;
k<g.length;
k++){g[k].trigger(h,j)
}}return this.each(function(){var o=e,n=$(this),p=n.data(),m=p[o];
if(!m){m=new f(n,l);
n.data(o,m);
g.push(m)
}else{m.setOptions(l)
}})
}
}(d,c));
return $.fn[d]
};
B.Search.validators={storage_:[]};
B.Search.Validator=function(){};
B.Search.Validator.prototype.name="general";
B.Search.Validator.prototype.type="general";
B.Search.Validator.prototype.success=undefined;
B.Search.Validator.prototype.fail=undefined;
B.Search.Validator.prototype.test=function(){};
B.Search.Validator.prototype.validate=function(){var f=this.test(),c=f?"fail":"success",d={name:this.name,status:c},e=c+"Callback";
if(typeof this[c]==="function"){d.message=this[c]()
}else{if(typeof this[c]!=="undefined"){d.message=this[c]
}}if(typeof this[e]==="function"){d.callback=this[e]
}if(this.validationParameters){d.validationParameters=this.validationParameters
}return new B.Search.ValidationResult(d)
};
B.Search.ValidationResult=function(c){this.setOptions_(c)
};
B.Search.ValidationResult.prototype.status=undefined;
B.Search.ValidationResult.prototype.message=undefined;
B.Search.ValidationResult.prototype.callback=function(){};
B.Search.ValidationResult.prototype.valueOf=function(){return this.status!=="fail"
};
B.Search.ValidationResult.prototype.toString=function(){return this.message||""
};
B.Search.ValidationResult.prototype.setOptions_=function(c){if(!c){return this
}if(c.name){this.name=c.name
}if(c.status){this.status=c.status
}if(c.message){this.message=c.message
}if(typeof c.callback==="function"){this.callback=c.callback
}if(c.validationParameters){this.validationParameters=c.validationParameters
}return this
};
B.Search.validators.create=function(d){var c=new B.Search.Validator();
if(!d){return c
}if(d.name){c.name=d.name
}if(d.type){c.type=d.type
}if(d.success){c.success=d.success
}if(d.fail){c.fail=d.fail
}if(d.failCallback){c.failCallback=d.failCallback
}if(d.successCallback){c.successCallback=d.successCallback
}if(d.test){c.test=d.test
}B.Search.validators.storage_.push(c);
return c
};
B.Search.validators.all=function(){return this.storage_
};
B.Search.validators.allOfType=function(e){var c=[];
for(var d=0;
d<this.storage_.length;
d++){if(this.storage_[d].type===e){c.push(this.storage_[d])
}}return c
};
B.Search.DEFAULT_GROUP_COFIGURATION={adults:2,rooms:1,children:0};
B.Search.Interface=function(){var c=this;
this.datesStorage={checkin:B.Search.createDate(),checkout:B.Search.createDate(),mode:"regular"};
this.groupStorage={value:B.Search.createGroup()};
this.flexibleDatesStorage={interval:null,monthYear:B.Search.createDate()};
this.destinationStorage={value:null};
this.advancedSearchStorage={state:"disabled"};
this.dates=function(){var d;
switch(arguments.length){case 0:return{checkin:this.getDate_("checkin"),checkout:this.getDate_("checkout"),mode:this.getDatesMode_(),validate:function(){return c.validateDates_.apply(c,[].slice.call(arguments,0))
},setMode:function(){return c.setDatesMode_.apply(c,[].slice.call(arguments,0))
},validationResults:function(){return c.validationResults
}};
case 1:return this.getDate_(arguments[0]);
case 2:if(arguments[0]==="mode"){return c.setDatesMode_.apply(c,[].slice.call(arguments,1))
}else{d=B.Search.createDate(arguments[1]);
return this.setDate_(arguments[0],d)
}default:d=B.Search.createDate(arguments[1]);
return this.setDate_(arguments[0],d)
}};
this.flexibleDates=function(){return{interval:function(){if(arguments.length===1){return c.setInterval_.apply(c,[].slice.call(arguments,0))
}else{return c.getInterval_()
}},monthYear:function(){if(arguments.length===1){return c.setMonthYear_.apply(c,[].slice.call(arguments,0))
}else{return c.getMonthYear_()
}},validate:function(){return c.validateFlexibleDates_.apply(c,[].slice.call(arguments,0))
}}
};
this.destination=function(){switch(arguments.length){case 0:return this.getDestination_();
default:return this.setDestination_(arguments[0])
}};
this.group=function(){switch(arguments.length){case 0:return{value:this.getGroup_(),mode:function(d){if(d){return c.setGroupMode_.apply(c,[].slice.call(arguments,0))
}else{return c.getGroupMode_.apply(c,[].slice.call(arguments,0))
}},validate:function(){return c.validateGroup_.apply(c,[].slice.call(arguments,0))
},setMode:function(){return c.setGroupMode_.apply(c,[].slice.call(arguments,0))
}};
break;
case 1:if(arguments[0]==="reset"){return this.setGroup_("config",B.Search.DEFAULT_GROUP_COFIGURATION)
}else{if(arguments[0]==="value"){return this.getGroup_()
}else{if(typeof arguments[0]==="string"){return this.getGroup_(arguments[0])
}else{return this.setGroup_("config",arguments[0])
}}}break;
default:if(arguments[0]==="reset"){return this.setGroup_("config",arguments[1])
}return this.setGroup_(arguments[0],arguments[1])
}};
this.advanced=function(){return{mode:function(d){if(d){return c.setAdvancedSearchMode_.apply(c,[].slice.call(arguments,0))
}else{return c.getAdvancedSearchMode_.apply(c,[].slice.call(arguments,0))
}},enable:function(){return c.setAdvancedSearchMode_.apply(c,["enabled"])
},disable:function(){return c.setAdvancedSearchMode_.apply(c,["disabled"])
}}
}
};
B.Search.Interface.prototype={constructor:B.Search.Interface,sanitizeDateType_:function(c){if(c==="checkin"||c==="checkout"){return c
}else{return null
}},getDate_:function(d){var c=this.sanitizeDateType_(d);
return this.datesStorage[c]
},setDate_:function(g,h){var c=B.Search.createDate(h),e=c.type==="valid"?B.Search.Events.DATE_CHANGED:B.Search.Events.DATE_MONTH_CHANGED,d=this.sanitizeDateType_(g),f=this.datesStorage[d];
if(d){if(c.type!==f.type||c.valueOf()!==f.valueOf()){this.datesStorage[d]=c;
B.eventEmitter.trigger(e,{type:d,value:c})
}}else{window.onerror("attempt_to_set_date_with_wrong_type:_"+g,window.location)
}return c
},validateDates_:function(f){if(f==="reset"){B.eventEmitter.trigger(B.Search.Events.DATE_VALID);
return true
}var d=B.Search.validators.allOfType("dates"),e=B.tools.object.map(d,function(h,g){return h.validate()
}),c=B.tools.object.reduce(e,function(g,h){return g&&(h.status==="success")
},true);
if(c){this.validationResults=null
}else{this.validationResults=e
}B.eventEmitter.trigger(c?B.Search.Events.DATE_VALID:B.Search.Events.DATE_INVALID,{validators:e});
return c
},sanitizeDatesMode_:function(c){if(c==="regular"||c==="no-dates"||c==="flexible"){return c
}else{return null
}},getDatesMode_:function(){return this.datesStorage.mode
},setDatesMode_:function(d){var c=this.sanitizeDatesMode_(d);
if(c&&this.datesStorage.mode!==c){this.datesStorage.mode=c;
B.eventEmitter.trigger(B.Search.Events.DATE_MODE_CHANGED,{mode:c})
}return this
},getMonthYear_:function(){return this.flexibleDatesStorage.monthYear
},setMonthYear_:function(d){var c=B.Search.createDate(d),e=this.flexibleDatesStorage.monthYear;
if(c.valueOf()!==e.valueOf()){this.flexibleDatesStorage.monthYear=c;
B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_MONTHYEAR_CHANGED,{value:c})
}return c
},getInterval_:function(){return this.flexibleDatesStorage.interval
},setInterval_:function(c){if(!(c==="weekend"||c==="week")){c="any"
}if(this.flexibleDatesStorage.interval!==c){this.flexibleDatesStorage.interval=c;
B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_INTERVAL_CHANGED,{value:c})
}return this
},validateFlexibleDates_:function(){var c=B.Search.validators.allOfType("flexible"),d=B.tools.object.map(c,function(g,f){return g.validate()
}),e=B.tools.object.reduce(d,function(f,g){return f&&(g.status==="success")
},true);
B.eventEmitter.trigger(e?B.Search.Events.FLEXIBLE_VALID:B.Search.Events.FLEXIBLE_INVALID,{validators:d});
return e
},getDestination_:function(){return this.destinationStorage.value
},setDestination_:function(d){var c=d&&d.data,e=this.destinationStorage&&this.destinationStorage.value&&this.destinationStorage.value;
if(c){if(!e||e&&(e.dest_id!==c.dest_id)){this.destinationStorage.value=c;
B.eventEmitter.trigger(B.Search.Events.DESTINATION_CHANGED,this.destinationStorage.value)
}}},getGroup_:function(c){if(!c){return this.groupStorage.value
}else{return this.groupStorage.value[c]
}},setGroup_:function(g,h){var d,f;
if(g==="rooms"||g==="adults"||g==="children"||g==="childrenAges"||g==="type"||g==="name"){this.setGroupValue_(g,h)
}else{if(g==="config"){if(h instanceof B.Search.Group){d=h
}else{d=B.Search.createGroup(h)
}for(var e=0,j=d.childrenAges.length;
e<j;
e++){if(d.childrenAges[e]===f){d.childrenAges[e]=this.groupStorage.value.childrenAges[e]||0
}}if(d.valueOf()!==this.groupStorage.value.valueOf()){this.groupStorage.value=d;
this.triggerGroupEvent()
}}}},setGroupValue_:function(d,e){var c,f={};
f[d]=e;
c=B.Search.createGroup(this.groupStorage.value);
c.update(f);
if(c.valueOf()!==this.groupStorage.value.valueOf()){this.groupStorage.value=c;
this.triggerGroupEvent()
}},getGroupMode_:function(){return this.groupStorage.mode
},setGroupMode_:function(c){if(!(c==="basic"||c==="custom")){c="custom"
}if(c&&this.groupStorage.mode!==c){this.groupStorage.mode=c;
B.eventEmitter.trigger(B.Search.Events.GROUP_MODE_CHANGED,{mode:c})
}return this
},triggerGroupEvent:function(){B.eventEmitter.trigger(B.Search.Events.GROUP_CHANGED,this.groupStorage.value)
},validateGroup_:function(e){if(e==="reset"){B.eventEmitter.trigger(B.Search.Events.GROUP_VALID);
return true
}var c=B.Search.validators.allOfType("group"),d=B.tools.object.map(c,function(h,g){return h.validate()
}),f=B.tools.object.reduce(d,function(g,h){return g&&(h.status==="success")
},true);
B.eventEmitter.trigger(f?B.Search.Events.GROUP_VALID:B.Search.Events.GROUP_INVALID,{validators:d});
return f
},setAdvancedSearchMode_:function(c){if(c!==this.advancedSearchStorage.state&&(c==="enabled"||c==="disabled")){this.advancedSearchStorage.state=c;
B.eventEmitter.trigger((c==="enabled")?B.Search.Events.ADVANCED_SEARCH_ENABLED:B.Search.Events.ADVANCED_SEARCH_DISABLED)
}},getAdvancedSearchMode_:function(){return this.advancedSearchStorage.state
}};
B.search=new B.Search.Interface();
booking[sNSStartup].initSearchValues={init:function(){this.initDestination();
this.initDates();
this.initGroup()
},initDates:function(){var c,d;
function f(h,g){var k=g.split("-"),j=new Date(k[0],k[1]-1,h,0,0,0,0);
if(isNaN(j.getTime())){return false
}return new B.Search.Date({year:k[0],month:k[1]-1,date:h})
}function e(h){var j=h.split("-"),g=new Date(j[0],j[1]-1,j[2],0,0,0,0);
if(isNaN(g.getTime())){return false
}return new B.Search.Date({year:j[0],month:j[1]-1,date:j[2]})
}if(B.env.s_value_checkin_monthday&&B.env.s_value_checkin_year_month){c=f(B.env.s_value_checkin_monthday,B.env.s_value_checkin_year_month);
if(c){B.search.dates("checkin",c)
}}else{if(B.env.b_checkin_date){c=e(B.env.b_checkin_date);
if(c){B.search.dates("checkin",c)
}}else{if(B.env.b_session_checkin_date){c=e(B.env.b_session_checkin_date);
if(c){B.search.dates("checkin",c)
}}}}if(B.env.s_value_checkout_monthday&&B.env.s_value_checkout_year_month){d=f(B.env.s_value_checkout_monthday,B.env.s_value_checkout_year_month);
if(d){B.search.dates("checkout",d)
}}else{if(B.env.b_checkout_date){d=e(B.env.b_checkout_date);
if(d){B.search.dates("checkout",d)
}}else{if(B.env.b_session_checkout_date){d=e(B.env.b_session_checkout_date);
if(d){B.search.dates("checkout",d)
}}}}if(B.env.b_no_dates_mode){B.search.dates("mode",B.Search.DateModes.NODATES)
}},initGroup:function(){try{var f=B.env.b_group&&B.env.b_group[0],g=B.env.b_group_rooms_wanted,h=[];
if(f&&g){if(f.ages){for(var c=0;
c<f.ages.length;
c++){if(typeof f.ages[c].age!=="undefined"){h.push(f.ages[c].age)
}}}B.search.group({adults:f.guests,childrenAges:h,rooms:g})
}else{if(B.search.group("value") instanceof B.Search.InvalidGroup){B.search.group({adults:2,rooms:1,type:B.Search.GroupModes.REGULAR})
}}}catch(d){throw"Unable to set group"
}},initDestination:function(){var c={name:undefined,data:{}};
if(B&&B.env){if(B.env.sess_dest_id){c.data.dest_id=B.env.sess_dest_id
}if(B.env.sess_dest_type){c.data.dest_type=B.env.sess_dest_type
}if(B.env.sess_dest_fullname){c.data.name=B.env.sess_dest_fullname;
c.term=B.env.sess_dest_fullname
}}if(c.data.dest_id&&c.data.dest_type&&c.data.name){B.search.destination(c)
}},priority:5};
(function(g,f){function c(u,y){this.$element=u;
this.$inputs=u.find("select, input");
this.options=y||{};
var x=u.find(".b-date-selector__control-dayselector select"),n=u.find(".b-date-selector__control-monthselector select");
function k(A){if(typeof A!=="string"){return false
}var z=A.split("-");
if(z.length!==2){return false
}return{year:parseInt(z[0],10),month:parseInt(z[1],10)-1}
}function r(A){var z=document.createElement("option");
z.innerHTML=A.text;
z.selected=A.selected;
z.value=A.value;
return z
}function m(A,z){var C=g.env.b_lang;
if(isNaN(z)){return A
}else{if(C=="ja"||C=="zh"||C=="ko"||C=="hu"){return A+" "+y.dayNames[z]
}else{return y.dayNames[z]+" "+A
}}}function o(C){var z=x.get(0),H=x.val(),E,G,F,A;
if(C.year&&C.month){E=new Date(C.year,C.month,1).getDay(),A=y.daysInMonth[C.month];
H=C.date
}else{if(!C){A=31
}else{return
}}while(z.firstChild){z.removeChild(z.firstChild)
}G=document.createDocumentFragment();
F=document.createElement("option");
F.innerHTML=g.env.sbox_day;
F.value=0;
G.appendChild(F);
for(var D=1;
D<=A;
D++){G.appendChild(r({text:m(D,(E-1+D)%7),selected:H==D,value:D}))
}z.appendChild(G)
}function q(z){var A=z.year+"-"+(z.month+1);
n.val(A)
}function t(z){o(h());
l();
if(z&&z.originalEvent){if(y.type==="checkin"){g.Search.tracker.trackEvent(g.Search.TrackingEvents.CHECKIN_MONTH_SELECTOR)
}else{if(y.type==="checkout"){g.Search.tracker.trackEvent(g.Search.TrackingEvents.CHECKOUT_MONTH_SELECTOR)
}}}}function j(z){l();
if(z&&z.originalEvent){if(y.type==="checkin"){g.Search.tracker.trackEvent(g.Search.TrackingEvents.CHECKIN_DAY_SELECTOR)
}else{if(y.type==="checkout"){g.Search.tracker.trackEvent(g.Search.TrackingEvents.CHECKOUT_DAY_SELECTOR)
}}}}function l(){var z=h();
if(!z){return
}if(y.type==="checkin"){g.search.dates("checkin",z)
}else{if(y.type==="checkout"){g.search.dates("checkout",z)
}}}function p(z){o(z);
q(z)
}function h(){var z=k(n.val());
z.date=x.val();
if(!z||isNaN(z.date)){return false
}return z
}function w(A,z){if(!z){return
}if(z.type===y.type){p(z.value)
}}n.bind("change.dateSelector",t);
x.bind("change.dateSelector",j);
n.trigger("change.dateSelector");
u.bind("dateSelected",w)
}c.prototype.setOptions=function(h){if(!h){return this
}if(h.disabled){this.$inputs.attr("disabled",true)
}else{this.$inputs.removeAttr("disabled")
}return this
};
c.prototype.getOption=function(h){if(!h){return this.options
}if(this.options[h]){return this.options[h]
}else{return null
}};
c.prototype.trigger=function(j,h){if(!j){return this
}if(j==="disable"){this.setOptions({disabled:true})
}else{if(j==="enable"){this.setOptions({disabled:false})
}}return this
};
function d(){this.instances_=[]
}d.prototype.create=function(j,k){var h=new c(j,k);
this.add(h);
return h
};
d.prototype.add=function(h){this.instances_.push(h);
return h
};
d.prototype.all=function(){return this.instances_
};
d.prototype.notifyAll=function(l,h){var k=this.all();
for(var j=0;
j<k.length;
j++){k[j].trigger.apply(k[j],[].slice.call(arguments,0))
}return this.instances_
};
var e=g.Search.datePickerController=new d();
f.fn.dateSelector=function(h){var j=g.env.b_simple_weekdays_for_js.slice(0);
j.unshift(j.pop());
return this.each(function(){var m=f(this),k=m.data(),l=k.calendar2;
if(!l){e.create(m,f.extend({daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],dayNames:j},h,k))
}else{l.setOptions(h)
}})
}
}(B,$));
booking[sNSStartup].search_utilities={init:function(){B.Search=B.Search||{};
B.Search.openDatepicker=function(f){var d,h={selector:null,duration:null},e=$.extend({},h,f),c,g,j=function(){d.show()
};
c=e.selector;
g=e.duration;
$.fn.calendar2("each",function(k){if(c){if(k.$input.is(c)){d=k;
return false
}}else{d=k;
return false
}});
if(d){B.WindowScroller.scrollToBlock(d.$input,g,undefined,j)
}};
$(window).delegate(".js-open-datepicker","click",function(e){e.preventDefault();
var c=$(this),f=c.data(),d={};
if(typeof f.selector!=="undefined"){d.selector=f.selector
}if(typeof f.duration!=="undefined"){d.duration=f.duration
}B.Search.openDatepicker(d)
})
},priority:5};
/*!
* Dropdown/tooltip lib, don't use it now, still in development
*
* @name fly
* @version v0.0.0
* @author Artur Burtsev <artur.burtsev@booking.com>
*/
;
(function(){var c={_count:0,_mixin:{}};
c._base={EVENTS:{HIDE:"hide",SHOW:"show",ROOTREADY:"rootready"},_ctor:function d(){},_$root:null,_emmiter:null,$handle:null,defaults:{content:""},ens:"",options:null,create:function(g,e){var f=this.extend({ens:".ns"+c._count++,$handle:$(g),_emmiter:$({})});
f.options=$.extend({},f.defaults,e);
return f._init()
},extend:function(e){this._ctor.prototype=this;
if(e&&"defaults" in e){e.defaults=$.extend({},this.defaults,e.defaults)
}return $.extend(new this._ctor(),e)
},root:function(){if(!this.$root){var e=this.options;
this.$root=$("<div/>").addClass(e.baseClass).addClass(e.extraClass).addClass(e.hideClass).appendTo("body");
this.trigger(this.EVENTS.ROOTREADY)
}return this.$root
},_init:function(){this._action(true);
this.init();
return this
},_destroy:function(){this.destroy();
if(this._$root){this._$root.remove();
this._$root=null
}this._action(false)
},_action:function(){},_content:function(e){var f=this.options.content;
if(typeof f==="function"){if(f.length){f.call(this,e)
}else{e(f.call(this))
}}else{e(f)
}},_position:function(){},init:function(){},destroy:function(){},show:function(g){if(!arguments.length){return this._content($.proxy(this.show,this))
}var f=this.options;
var j=this._position();
var e=f.position.split(" ");
var h=f.baseClass;
this.trigger(this.EVENTS.SHOW);
this.root().html(g||"").css(this._position()).addClass([h+"_"+e[0],h+"_arrow-"+e[1]].join(" "));
this.root().removeClass(f.hideClass)
},hide:function(){this.trigger(this.EVENTS.HIDE);
this.root().addClass(this.options.hideClass)
},toggle:function(){this[this.hidden()?"show":"hide"]()
},hidden:function(){return this.root().hasClass(this.options.hideClass)
}};
$.each(["bind","unbind","one","trigger"],function(e,f){c._base[f]=function(){this._emmiter[f].apply(this._emmiter,arguments)
}
});
c._mixin.rect=function(e){var f=e[0].getBoundingClientRect();
if(!("width" in f)){f=$.extend({},f);
f.width=e.outerWidth();
f.height=e.outerHeight()
}return f
};
c._mixin.position=function(){var j={};
var e=$(window);
var m=this.options.position.split(" ");
var g=this.options.arrowSize;
var k=m.shift();
var o=m.shift();
var n={};
var f=this._rect(this.$handle);
var l=this._rect(this.root());
var p={top:e.scrollTop(),left:e.scrollLeft()};
switch(o){case"top":n.top=f.height/2-g*1.5;
break;
case"left":n.left=f.width/2-g*1.5;
break;
case"right":n.left=f.width/2-l.width+g*1.5;
break;
case"bottom":n.top=f.height/2-l.height+g*1.5;
break;
default:n.top=(f.height-l.height)/2;
n.left=(f.width-l.width)/2;
break
}switch(k){case"left":j.top=p.top+f.top+n.top;
j.left=p.left+f.left-l.width-g;
break;
case"right":j.top=p.top+f.top+n.top;
j.left=p.left+f.left+f.width+g;
break;
case"top":j.top=p.top+f.top-l.height-g;
j.left=p.left+f.left+n.left;
break;
default:j.top=p.top+f.top+f.height+g;
j.left=p.left+f.left+n.left
}return j
};
c.dropdown=c._base.extend({_action:function(e){if(e){this.$handle.bind("click"+this.ens,$.proxy(this._bindAction,this))
}else{this.$handle.unbind("click"+this.ens)
}},_bindAction:function(){var f=this;
var g=this.root();
var h=this.$handle;
if(!this.hidden()){return this.hide()
}this.one(f.EVENTS.HIDE,function(){$(document).unbind("click"+f.ens+" keydown"+f.ens)
});
$(document).bind("click"+f.ens,function(j){var k=j.target;
if(e(g,k)&&e(h,k)){f.hide()
}}).bind("keydown"+f.ens,function(j){if(j.which===27){f.hide()
}});
this.show();
function e(k,j){return k[0]!==j&&!$.contains(k[0],j)
}},defaults:{baseClass:"fly-dropdown",hideClass:"fly-dropdown_hidden",extraClass:"",position:"bottom center",arrowSize:10},_rect:c._mixin.rect,_position:c._mixin.position});
$.fly=c
})();
(function(c,d){if(!d){return
}d.easing.jswing=d.easing.swing;
d.extend(d.easing,{def:"easeOutQuad",swing:function(f,g,e,j,h){return d.easing[d.easing.def](f,g,e,j,h)
},easeInQuad:function(f,g,e,j,h){return j*(g/=h)*g+e
},easeOutQuad:function(f,g,e,j,h){return -j*(g/=h)*(g-2)+e
},easeInOutQuad:function(f,g,e,j,h){if((g/=h/2)<1){return j/2*g*g+e
}return -j/2*((--g)*(g-2)-1)+e
},easeInCubic:function(f,g,e,j,h){return j*(g/=h)*g*g+e
},easeOutCubic:function(f,g,e,j,h){return j*((g=g/h-1)*g*g+1)+e
},easeInOutCubic:function(f,g,e,j,h){if((g/=h/2)<1){return j/2*g*g*g+e
}return j/2*((g-=2)*g*g+2)+e
},easeInQuart:function(f,g,e,j,h){return j*(g/=h)*g*g*g+e
},easeOutQuart:function(f,g,e,j,h){return -j*((g=g/h-1)*g*g*g-1)+e
},easeInOutQuart:function(f,g,e,j,h){if((g/=h/2)<1){return j/2*g*g*g*g+e
}return -j/2*((g-=2)*g*g*g-2)+e
},easeInQuint:function(f,g,e,j,h){return j*(g/=h)*g*g*g*g+e
},easeOutQuint:function(f,g,e,j,h){return j*((g=g/h-1)*g*g*g*g+1)+e
},easeInOutQuint:function(f,g,e,j,h){if((g/=h/2)<1){return j/2*g*g*g*g*g+e
}return j/2*((g-=2)*g*g*g*g+2)+e
},easeInSine:function(f,g,e,j,h){return -j*Math.cos(g/h*(Math.PI/2))+j+e
},easeOutSine:function(f,g,e,j,h){return j*Math.sin(g/h*(Math.PI/2))+e
},easeInOutSine:function(f,g,e,j,h){return -j/2*(Math.cos(Math.PI*g/h)-1)+e
},easeInExpo:function(f,g,e,j,h){return(g==0)?e:j*Math.pow(2,10*(g/h-1))+e
},easeOutExpo:function(f,g,e,j,h){return(g==h)?e+j:j*(-Math.pow(2,-10*g/h)+1)+e
},easeInOutExpo:function(f,g,e,j,h){if(g==0){return e
}if(g==h){return e+j
}if((g/=h/2)<1){return j/2*Math.pow(2,10*(g-1))+e
}return j/2*(-Math.pow(2,-10*--g)+2)+e
},easeInCirc:function(f,g,e,j,h){return -j*(Math.sqrt(1-(g/=h)*g)-1)+e
},easeOutCirc:function(f,g,e,j,h){return j*Math.sqrt(1-(g=g/h-1)*g)+e
},easeInOutCirc:function(f,g,e,j,h){if((g/=h/2)<1){return -j/2*(Math.sqrt(1-g*g)-1)+e
}return j/2*(Math.sqrt(1-(g-=2)*g)+1)+e
},easeInElastic:function(f,h,e,m,l){var j=1.70158;
var k=0;
var g=m;
if(h==0){return e
}if((h/=l)==1){return e+m
}if(!k){k=l*0.3
}if(g<Math.abs(m)){g=m;
var j=k/4
}else{var j=k/(2*Math.PI)*Math.asin(m/g)
}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*l-j)*(2*Math.PI)/k))+e
},easeOutElastic:function(f,h,e,m,l){var j=1.70158;
var k=0;
var g=m;
if(h==0){return e
}if((h/=l)==1){return e+m
}if(!k){k=l*0.3
}if(g<Math.abs(m)){g=m;
var j=k/4
}else{var j=k/(2*Math.PI)*Math.asin(m/g)
}return g*Math.pow(2,-10*h)*Math.sin((h*l-j)*(2*Math.PI)/k)+m+e
},easeInOutElastic:function(f,h,e,m,l){var j=1.70158;
var k=0;
var g=m;
if(h==0){return e
}if((h/=l/2)==2){return e+m
}if(!k){k=l*(0.3*1.5)
}if(g<Math.abs(m)){g=m;
var j=k/4
}else{var j=k/(2*Math.PI)*Math.asin(m/g)
}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*l-j)*(2*Math.PI)/k))+e
}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*l-j)*(2*Math.PI)/k)*0.5+m+e
},easeInBack:function(f,g,e,k,j,h){if(h==undefined){h=1.70158
}return k*(g/=j)*g*((h+1)*g-h)+e
},easeOutBack:function(f,g,e,k,j,h){if(h==undefined){h=1.70158
}return k*((g=g/j-1)*g*((h+1)*g+h)+1)+e
},easeInOutBack:function(f,g,e,k,j,h){if(h==undefined){h=1.70158
}if((g/=j/2)<1){return k/2*(g*g*(((h*=(1.525))+1)*g-h))+e
}return k/2*((g-=2)*g*(((h*=(1.525))+1)*g+h)+2)+e
},easeInBounce:function(f,g,e,j,h){return j-d.easing.easeOutBounce(f,h-g,0,j,h)+e
},easeOutBounce:function(f,g,e,j,h){if((g/=h)<(1/2.75)){return j*(7.5625*g*g)+e
}else{if(g<(2/2.75)){return j*(7.5625*(g-=(1.5/2.75))*g+0.75)+e
}else{if(g<(2.5/2.75)){return j*(7.5625*(g-=(2.25/2.75))*g+0.9375)+e
}else{return j*(7.5625*(g-=(2.625/2.75))*g+0.984375)+e
}}}},easeInOutBounce:function(f,g,e,j,h){if(g<h/2){return d.easing.easeInBounce(f,g*2,0,j,h)*0.5+e
}return d.easing.easeOutBounce(f,g*2-h,0,j,h)*0.5+j*0.5+e
}})
}(window.booking,window.jQuery));
/*!
* jQuery hashchange event - v1.3 - 7/21/2010
* http://benalman.com/projects/jquery-hashchange-plugin/
*
* Copyright (c) 2010 "Cowboy" Ben Alman
* Dual licensed under the MIT and GPL licenses.
* http://benalman.com/about/license/
*/
(function($,g,d){var e="hashchange",k=document,h,j=$.event.special,l=k.documentMode,f="on"+e in g&&(l===d||l>7);
function c(m){m=m||location.href;
return"#"+m.replace(/^[^#]*#?(.*)$/,"$1")
}$.fn[e]=function(m){return m?this.bind(e,m):this.trigger(e)
};
$.fn[e].delay=50;
j[e]=$.extend(j[e],{setup:function(){if(f){return false
}$(h.start)
},teardown:function(){if(f){return false
}$(h.stop)
}});
h=(function(){var m={},t,p=c(),n=function(u){return u
},o=n,r=n;
m.start=function(){t||q()
};
m.stop=function(){t&&clearTimeout(t);
t=d
};
function q(){var w=c(),u=r(p);
if(w!==p){o(p=w,u);
$(g).trigger(e)
}else{if(u!==p){location.href=location.href.replace(/#.*/,"")+u
}}t=setTimeout(q,$.fn[e].delay)
}$.browser.msie&&!f&&(function(){var u,w;
m.start=function(){if(!u){w=$.fn[e].src;
w=w&&w+c();
u=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){w||o(c());
q()
}).attr("src",w||"javascript:0").insertAfter("body")[0].contentWindow;
k.onpropertychange=function(){try{if(event.propertyName==="title"){u.document.title=k.title
}}catch(x){}}
}};
m.stop=n;
r=function(){return c(u.location.href)
};
o=function(A,x){var z=u.document,y=$.fn[e].domain;
if(A!==x){z.title=k.title;
z.open();
y&&z.write('<script>document.domain="'+y+'"<\/script>');
z.close();
u.location.hash=A
}}
})();
return m
})()
})(jQuery,window);
(function(c){c.fn.hint=function(d){if(!d){d="blur"
}return this.each(function(){var j=c(this),g=j.attr("title"),f=c(this.form),h=c(window);
function e(){if(j.val()===g&&j.hasClass(d)){j.val("").removeClass(d)
}}if(g){j.blur(function(){if(this.value===""){j.val(g).addClass(d)
}}).focus(e).blur();
f.submit(e);
h.unload(e)
}})
}
})(jQuery);
if(!booking.env.no_search_placeholder_ie){$("input#destination:text").hint();
$("input#keyword.faq_search_input").hint()
}(function(h,g,m){var l=g.event,k;
l.special.smartresize={setup:function(){g(this).bind("resize",l.special.smartresize.handler)
},teardown:function(){g(this).unbind("resize",l.special.smartresize.handler)
},handler:function(e,p){var o=this,n=arguments;
e.type="smartresize",k&&clearTimeout(k),k=setTimeout(function(){g.event.handle.apply(o,n)
},p==="execAsap"?0:100)
}},g.fn.smartresize=function(c){return c?this.bind("smartresize",c):this.trigger("smartresize",["execAsap"])
},g.Mason=function(d,e){this.element=g(e),this._create(d),this._init()
},g.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},g.Mason.prototype={_filterFindBricks:function(d){var c=this.options.itemSelector;
return c?d.filter(c).add(d.find(c)):d
},_getBricks:function(d){var c=this._filterFindBricks(d).css({position:"absolute"}).addClass("masonry-brick");
return c
},_create:function(r){this.options=g.extend(!0,{},g.Mason.settings,r),this.styleQueue=[];
var q=this.element[0].style;
this.originalStyle={height:q.height||""};
var p=this.options.containerStyle;
for(var o in p){this.originalStyle[o]=q[o]||""
}this.element.css(p),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={x:parseInt(this.element.css("padding-"+this.horizontalDirection),10),y:parseInt(this.element.css("padding-top"),10)},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";
var n=this;
setTimeout(function(){n.element.addClass("masonry")
},0),this.options.isResizable&&g(h).bind("smartresize.masonry",function(){n.resize()
}),this.reloadItems()
},_init:function(c){this._getColumns(),this._reLayout(c)
},option:function(d,e){g.isPlainObject(d)&&(this.options=g.extend(!0,this.options,d))
},layout:function(x,w){for(var u=0,t=x.length;
u<t;
u++){this._placeBrick(x[u])
}var r={};
r.height=Math.max.apply(Math,this.colYs);
if(this.options.isFitWidth){var q=0;
u=this.cols;
while(--u){if(this.colYs[u]!==0){break
}q++
}r.width=(this.cols-q)*this.columnWidth-this.options.gutterWidth
}this.styleQueue.push({$el:this.element,style:r});
var p=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",o=this.options.animationOptions,n;
for(u=0,t=this.styleQueue.length;
u<t;
u++){n=this.styleQueue[u],n.$el[p](n.style,o)
}this.styleQueue=[],w&&w.call(x),this.isLaidOut=!0
},_getColumns:function(){var d=this.options.isFitWidth?this.element.parent():this.element,c=d.width();
this.columnWidth=this.isFluid?this.options.columnWidth(c):this.options.columnWidth||this.$bricks.outerWidth(!0)||c,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((c+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)
},_placeBrick:function(F){var E=g(F),D,C,A,z,y;
D=Math.ceil(E.outerWidth(!0)/this.columnWidth),D=Math.min(D,this.cols);
if(D===1){A=this.colYs
}else{C=this.cols+1-D,A=[];
for(y=0;
y<C;
y++){z=this.colYs.slice(y,y+D),A[y]=Math.max.apply(Math,z)
}}var x=Math.min.apply(Math,A),w=0;
for(var u=0,t=A.length;
u<t;
u++){if(A[u]===x){w=u;
break
}}var r={top:x+this.offset.y};
r[this.horizontalDirection]=this.columnWidth*w+this.offset.x,this.styleQueue.push({$el:E,style:r});
var q=x+E.outerHeight(!0),p=this.cols+1-t;
for(u=0;
u<p;
u++){this.colYs[w+u]=q
}},resize:function(){var c=this.cols;
this._getColumns(),(this.isFluid||this.cols!==c)&&this._reLayout()
},_reLayout:function(d){var c=this.cols;
this.colYs=[];
while(c--){this.colYs.push(0)
}this.layout(this.$bricks,d)
},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())
},reload:function(c){this.reloadItems(),this._init(c)
},appended:function(f,e,o){if(e){this._filterFindBricks(f).css({top:this.element.height()});
var n=this;
setTimeout(function(){n._appended(f,o)
},1)
}else{this._appended(f,o)
}},_appended:function(e,d){var f=this._getBricks(e);
this.$bricks=this.$bricks.add(f),this.layout(f,d)
},remove:function(c){this.$bricks=this.$bricks.not(c),c.remove()
},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""
});
var f=this.element[0].style;
for(var e in this.originalStyle){f[e]=this.originalStyle[e]
}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),g(h).unbind(".masonry")
}},g.fn.imagesLoaded=function(n){function p(){n.call(w,u)
}function o(d){var e=d.target;
e.src!==r&&g.inArray(e,q)===-1&&(q.push(e),--t<=0&&(setTimeout(p),u.unbind(".imagesLoaded",o)))
}var w=this,u=w.find("img").add(w.filter("img")),t=u.length,r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",q=[];
return t||p(),u.bind("load.imagesLoaded error.imagesLoaded",o).each(function(){var c=this.src;
this.src=r,this.src=c
}),w
};
var j=function(c){h.console&&h.console.error(c)
};
g.fn.masonry=function(d){if(typeof d=="string"){var e=Array.prototype.slice.call(arguments,1);
this.each(function(){var c=g.data(this,"masonry");
if(!c){j("cannot call methods on masonry prior to initialization; attempted to call method '"+d+"'");
return
}if(!g.isFunction(c[d])||d.charAt(0)==="_"){j("no such method '"+d+"' for masonry instance");
return
}c[d].apply(c,e)
})
}else{this.each(function(){var f=g.data(this,"masonry");
f?(f.option(d||{}),f._init()):g.data(this,"masonry",new g.Mason(d,this))
})
}return this
}
})(window,jQuery);
(function(d){var c=false;
d.extend({noticeAdd:function(p){if(!d.canShowNotice()){return false
}var f={inEffect:{opacity:"show"},inEffectDuration:600,stayTime:3000,text:"",stay:false,type:"notice",destination:"",platform:"mac",addClassName:"",injectHTML:false};
var p,l,m,o,n,e,k=false;
p=d.extend({},f,p);
var h=booking.track.getVariant("PYBRRCbbAPQHafJdHZcKWe");
var g=navigator&&navigator.platform&&(navigator.platform.indexOf("Mac")==-1&&navigator.platform.indexOf("iPad")==-1&&navigator.platform.indexOf("iPhone")==-1),j=navigator&&navigator.platform&&(navigator.platform.indexOf("Mac")>=0||navigator.platform.indexOf("iPad")>=0||navigator.platform.indexOf("iPhone")>=0);
if(g&&!h){p.platform="win"
}if(!d(".notice-wrap").length){l=d("<div></div>").addClass("notice-wrap").addClass(p.platform).appendTo("body");
l[0].id="growl_squash"
}else{l=d(".notice-wrap")
}if(p.platform==="win"){booking.track.exp("YSDVYRGMYGbRRDORe")
}else{if(j){booking.track.exp("YSDVYRGMYGbRRDOLcHGaT")
}}if(booking.track.getVariant("YSDVYRGMYGbRRDORe")&&(p.platform==="win")){k="__placement"+booking.track.getVariant("YSDVYRGMYGbRRDORe")
}else{if(booking.track.getVariant("YSDVYRGMYGbRRDOLcHGaT")&&j){k="__placement"+booking.track.getVariant("YSDVYRGMYGbRRDOLcHGaT")
}}if(k){l.addClass(k)
}m=d("<div></div>").addClass("notice-item-wrapper");
e=(p.destination=="")?"<p>"+p.text+"</p>":'<p><a href="'+p.destination+'">'+p.text+"</a></p>";
if(p.close=="all"){o=d("<div></div>").hide().addClass("notice-item "+p.type+" "+p.addClassName).appendTo(l).html(e).animate(p.inEffect,p.inEffectDuration).wrap(m).click(function(r){if(booking.env.b_action==="hotel"){var q=JSON.parse($.cookie("bs"))||{};
q.gc=1;
if(typeof(JSON)!="undefined"){$.cookie("bs",JSON.stringify(q),{path:"/",domain:booking.env.b_domain_end})
}}booking.google.trackEvent(booking.google.clickTracker,"growl_removed",r&&r.target&&$(r.target).closest(".notice-item-close-x").length?"x":"message");
d.noticeRemove(o,p.addClassName,false,true);
return false
});
n=d("<div></div>").addClass("notice-item-close-x").prependTo(o)
}else{o=d("<div></div>").hide().addClass("notice-item "+p.type).appendTo(l).html(e).animate(p.inEffect,p.inEffectDuration).wrap(m);
n=d("<div></div>").addClass("notice-item-close-x").prependTo(o).click(function(){d.noticeRemove(o,false,false,true);
if(p.type=="language"){if(typeof(b_cookie)=="undefined"){b_cookie={}
}b_cookie.langPrompt="dontshow";
if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:booking.env.b_domain_end})
}}return false
})
}if(p.injectHTML){o.prepend(p.injectHTML)
}if(p.type=="language"){$(".notice-item p").css("cursor","pointer");
$(".notice-item p").click(function(){$("#langselectformlist").val(booking.env.browser_lang);
$("#languageselect")[0].submit();
d.noticeRemove(o);
return false
})
}if(navigator.userAgent.match(/MSIE 6/i)){l.css({top:document.documentElement.scrollTop})
}if(!p.stay){setTimeout(function(){d.noticeRemove(o,"",1)
},p.stayTime)
}if(B.track.getVariant("cQZFMQKSYUYVVPNTDAeWDHeUddRUZYO")>=0){booking.eventEmitter.triggerHandler("growl:show",p)
}},noticeAddBig:function(f){if(!d.canShowNotice()){return false
}var j={inEffect:{opacity:"show"},inEffectDuration:600,stayTime:3000,text:"",stay:false,type:"notice"};
var f,k,h,g,e;
f=d.extend({},j,f);
k=(!d(".notice-wrap").length)?d("<div></div>").addClass("notice-wrap").appendTo("body"):d(".notice-wrap");
h=d("<div></div>").addClass("notice-item-wrapper");
g=d("<div></div>").hide().addClass("notice-item-big "+f.type).appendTo(k).html("<p>"+f.text+"</p>").animate(f.inEffect,f.inEffectDuration).wrap(h);
e=d("<div></div>").addClass("notice-item-close").prependTo(g).html("x").click(function(){d.noticeRemove(g,false,false,true)
});
if(navigator.userAgent.match(/MSIE 6/i)){k.css({top:document.documentElement.scrollTop})
}if(!f.stay){setTimeout(function(){d.noticeRemove(g)
},f.stayTime)
}},noticeRemove:function(g,f,e,h){if(h){d.setCookieOnClose()
}if(B.track.getVariant("NLJZRRDVdJUGBeQEHT")===1){g.animate({opacity:"0"},600,function(){});
g.parent().animate({opacity:"0"},600,function(){g.parent().animate({height:"0px"},300,function(){g.parent().remove()
})
})
}else{if(B.track.getVariant("NLJZRRDVdJUGBeQEHT")===2){g.animate({opacity:"0"},600,function(){g.parent().animate({height:"0px"},300,function(){g.parent().remove()
})
})
}else{g.animate({opacity:"0"},600,function(){g.parent().animate({height:"0px"},300,function(){g.parent().remove()
})
})
}}if(f&&f!=""){$("."+f).removeClass(f)
}},canShowNotice:function(){var e=parseInt($.cookie("gcsw_cm"));
if(e==1){$.cookie("gcsw_cm","2",{path:"/",domain:booking.env.b_domain_end})
}return true
},setCookieOnClose:function(){$.cookie("gcsw_cm","1",{path:"/",domain:booking.env.b_domain_end});
return
}})
})(jQuery);
(function(c){c.fn.placeholder=function(e){var d=c.extend({attr:"placeholder",emptyClass:"empty"},e);
if(d.attr==="placeholder"&&"placeholder" in document.createElement("input")){return this
}return this.each(function(){var g=c(this),j=g.attr(d.attr),f=g.attr("type")==="password",h;
if(!j){return
}if(f){h=c('<input type="text" />').attr({value:j,className:g[0].className}).insertAfter(g.hide())
}g.closest("form").submit(function(){g.trigger("focus")
});
g.val(j).addClass(d.emptyClass);
g.focus(function(){if(g.val()==j){g.val("").removeClass(d.emptyClass)
}});
g.blur(function(){if(c.trim(this.value)!==""){return
}if(f){g.after(h).hide()
}else{g.val(j).addClass(d.emptyClass)
}});
if(f){h.addClass(d.emptyClass).focus(function(){h.detach();
g.show().focus()
})
}})
}
})(jQuery);
jQuery.fn.pulse=function(c,f,d,j,l){if(isNaN(d)){l=j;
j=d;
d=1
}var k=jQuery.speed(f,j,l),h=k.queue!==false,g=0;
for(var e in c){g=Math.max(c[e].length,g)
}k.times=k.times||d;
return this[h?"queue":"each"](function(){var o={},n=jQuery.extend({},k),m=jQuery(this);
p();
function p(){var t={},q=false;
for(var r in c){o[r]=o[r]||{runs:0,cur:-1};
if(o[r].cur<c[r].length-1){++o[r].cur
}else{o[r].cur=0;
++o[r].runs
}if(c[r].length===g){q=n.times>o[r].runs
}t[r]=c[r][o[r].cur]
}n.complete=p;
n.queue=false;
if(q){m.animate(t,n)
}else{k.complete.call(m[0])
}}})
};
(function(f){var c=f.scrollTo=function(d,g,h){f(window).scrollTo(d,g,h)
};
c.defaults={axis:"xy",duration:parseFloat(f.fn.jquery)>=1.3?0:1};
c.window=function(d){return f(window)._scrollable()
};
f.fn._scrollable=function(){return this.map(function(){var d=this,g=!d.nodeName||f.inArray(d.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;
if(!g){return d
}var h=(d.contentWindow||d).document||d.ownerDocument||d;
return f.browser.safari||h.compatMode=="BackCompat"?h.body:h.documentElement
})
};
f.fn.scrollTo=function(h,g,d){if(typeof g=="object"){d=g;
g=0
}if(typeof d=="function"){d={onAfter:d}
}if(h=="max"){h=9000000000
}d=f.extend({},c.defaults,d);
g=g||d.speed||d.duration;
d.queue=d.queue&&d.axis.length>1;
if(d.queue){g/=2
}d.offset=e(d.offset);
d.over=e(d.over);
return this._scrollable().each(function(){var p=this,n=f(p),o=h,l,m={},j=n.is("html,body");
switch(typeof o){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(o)){o=e(o);
break
}o=f(o,this);
case"object":if(o.is||o.style){l=(o=f(o)).offset()
}}f.each(d.axis.split(""),function(t,u){var x=u=="x"?"Left":"Top",w=x.toLowerCase(),z="scroll"+x,r=p[z],q=c.max(p,u);
if(l){m[z]=l[w]+(j?0:r-n.offset()[w]);
if(d.margin){m[z]-=parseInt(o.css("margin"+x))||0;
m[z]-=parseInt(o.css("border"+x+"Width"))||0
}m[z]+=d.offset[w]||0;
if(d.over[w]){m[z]+=o[u=="x"?"width":"height"]()*d.over[w]
}}else{var y=o[w];
if(!y){return false
}m[z]=y.slice&&y.slice(-1)=="%"?parseFloat(y)/100*q:y
}if(/^\d+$/.test(m[z])){m[z]=m[z]<=0?0:Math.min(m[z],q)
}if(!t&&d.queue){if(r!=m[z]){k(d.onAfterFirst)
}delete m[z]
}});
k(d.onAfter);
function k(q){n.animate(m,g,d.easing,q&&function(){q.call(this,h,d)
})
}}).end()
};
c.max=function(j,k){var o=k=="x"?"Width":"Height",n="scroll"+o;
if(!f(j).is("html,body")){return j[n]-f(j)[o.toLowerCase()]()
}var p="client"+o,g=j.ownerDocument.documentElement,d=j.ownerDocument.body;
return Math.max(g[n],d[n])-Math.min(g[p],d[p])
};
function e(d){return typeof d=="object"?d:{top:d,left:d}
}})(jQuery);
/*!
* accounting.js v0.3.2
* Copyright 2011, Joss Crowcroft
*
* Freely distributable under the MIT license.
* Portions of accounting.js are inspired or borrowed from underscore.js
*
* Full details and documentation:
* http://josscrowcroft.github.com/accounting.js/
*/
(function(r,j){var q={};
q.version="0.3.2";
q.settings={currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}};
var t=Array.prototype.map,m=Array.isArray,h=Object.prototype.toString;
function e(w){return !!(w===""||(w&&w.charCodeAt&&w.substr))
}function n(w){return m?m(w):h.call(w)==="[object Array]"
}function u(w){return w&&h.call(w)==="[object Object]"
}function k(x,w){var y;
x=x||{};
w=w||{};
for(y in w){if(w.hasOwnProperty(y)){if(x[y]==null){x[y]=w[y]
}}}return x
}function c(C,A,z){var y=[],x,w;
if(!C){return y
}if(t&&C.map===t){return C.map(A,z)
}for(x=0,w=C.length;
x<w;
x++){y[x]=A.call(z,C[x],x,C)
}return y
}function o(x,w){x=Math.round(Math.abs(x));
return isNaN(x)?w:x
}function g(x){var w=q.settings.currency.format;
if(typeof x==="function"){x=x()
}if(e(x)&&x.match("%v")){return{pos:x,neg:x.replace("-","").replace("%v","-%v"),zero:x}
}else{if(!x||!x.pos||!x.pos.match("%v")){return(!e(w))?w:q.settings.currency.format={pos:w,neg:w.replace("%v","-%v"),zero:w}
}}return x
}var l=q.unformat=q.parse=function(z,w){if(n(z)){return c(z,function(A){return l(A,w)
})
}z=z||0;
if(typeof z==="number"){return z
}w=w||q.settings.number.decimal;
var y=new RegExp("[^0-9-"+w+"]",["g"]),x=parseFloat((""+z).replace(/\((.*)\)/,"-$1").replace(y,"").replace(w,"."));
return !isNaN(x)?x:0
};
var d=q.toFixed=function(y,w){w=o(w,q.settings.number.precision);
var x=Math.pow(10,w);
return(Math.round(q.unformat(y)*x)/x).toFixed(w)
};
var f=q.formatNumber=function(y,C,F,A){if(n(y)){return c(y,function(G){return f(G,C,F,A)
})
}y=l(y);
var w=k((u(C)?C:{precision:C,thousand:F,decimal:A}),q.settings.number),D=o(w.precision),z=y<0?"-":"",x=parseInt(d(Math.abs(y||0),D),10)+"",E=x.length>3?x.length%3:0;
return z+(E?x.substr(0,E)+w.thousand:"")+x.substr(E).replace(/(\d{3})(?=\d)/g,"$1"+w.thousand)+(D?w.decimal+d(Math.abs(y),D).split(".")[1]:"")
};
var p=q.formatMoney=function(y,x,A,F,z,E){if(n(y)){return c(y,function(G){return p(G,x,A,F,z,E)
})
}y=l(y);
var w=k((u(x)?x:{symbol:x,precision:A,thousand:F,decimal:z,format:E}),q.settings.currency),D=g(w.format),C=y>0?D.pos:y<0?D.neg:D.zero;
return C.replace("%s",w.symbol).replace("%v",f(Math.abs(y),o(w.precision),w.thousand,w.decimal))
};
q.formatColumn=function(E,y,C,H,A,G){if(!E){return[]
}var w=k((u(y)?y:{symbol:y,precision:C,thousand:H,decimal:A,format:G}),q.settings.currency),F=g(w.format),D=F.pos.indexOf("%s")<F.pos.indexOf("%v")?true:false,x=0,z=c(E,function(L,J){if(n(L)){return q.formatColumn(L,w)
}else{L=l(L);
var I=L>0?F.pos:L<0?F.neg:F.zero,K=I.replace("%s",w.symbol).replace("%v",f(Math.abs(L),o(w.precision),w.thousand,w.decimal));
if(K.length>x){x=K.length
}return K
}});
return c(z,function(J,I){if(e(J)&&J.length<x){return D?J.replace(w.symbol,w.symbol+(new Array(x-J.length+1).join(" "))):(new Array(x-J.length+1).join(" "))+J
}return J
})
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=q
}exports.accounting=q
}else{if(typeof define==="function"&&define.amd){define([],function(){return q
})
}else{q.noConflict=(function(w){return function(){r.accounting=w;
q.noConflict=j;
return q
}
})(r.accounting);
r.accounting=q
}}}(this));
(function(h){var f={image:'<div class="image"><img src="{image_src}" /></div>',booker_country:'<p class="booker_from">{booker_country}</p>'};
if(!booking.env.i18nas){return
}var g=booking.env.i18nas;
for(var d in g){if(g.hasOwnProperty(d)&&typeof g[d]==="string"){g[d]=g[d].replace(/\\/g,"")
}}for(var e in f){f[e]=booking.tmpl(f[e],g)
}function c(l,k){this.$=h(l);
k=k||[];
if(typeof k=="string"){k=[k]
}this._last=0;
this.sources={};
var j=this;
h.each(k,function(){if(typeof c.defaultSources[this]!="undefined"){j.sources[this]=c.defaultSources[this]
}});
this.queues={};
this.$.delegate(".activity_box","click",function(){var m=h(this).find("a").first();
if(m.length){m.click()
}});
this.$.delegate("a","click",function(n){var m=h(this);
n.stopPropagation();
clearTimeout(j.timer);
booking.google.trackEvent(booking.google.clickTracker,"Activity feed",m.closest("li").attr("class"));
window.location=this.href
});
this.next(3)
}c.prototype.fetchSource=function(l,m){var k=this.sources[l].url;
var j=this;
h.ajax({url:k,dataType:"json",data:{last:this._last},success:function(n){if(n.length){j.queues[l]=n;
if(typeof(m)=="function"){m.call(j)
}}else{if(!j._last||j._last==0){h("#activity_stream_box").hide()
}}},error:function(){if(!j._last||j._last==0){h("#activity_stream_box").hide()
}}})
};
c.prototype.getSourceKeys=function(){var j=[];
for(var k in this.sources){j.push(k)
}return j
};
c.prototype.next=function(l){var j=this.getSourceKeys();
var k="recent_bookings_per_city";
if(this.queues[k]&&this.queues[k].length){this.nextFromSource(k,l);
if(this.timer){clearTimeout(this.timer)
}this.timer=setTimeout(h.proxy(this.next,this),(Math.random()+1)*4000)
}else{this.fetchSource(k,function(){this.$.removeClass("loading");
this.nextFromSource(k,l);
if(this.timer){clearTimeout(this.timer)
}this.timer=setTimeout(h.proxy(this.next,this),(Math.random()+1)*4000)
})
}};
c.prototype.nextFromSource=function(k,l){l=l||1;
var j=this.queues[k].shift();
if(j.timestamp){this._last=Math.max(j.timestamp*1,this._last)
}else{this._last=Math.max(j.id*1,this._last)
}j=this.sources[k].transform(j);
this.addItem(j);
if(l>1){this.next(l-1)
}};
c.prototype.addItem=function(n){if(h.isArray(n)){for(var l=0;
l<n.length;
l++){this.addItem(n[l])
}return
}for(var k in n){if(n[k]===undefined){return
}}var j=h("<li></li>");
var p;
if(typeof n=="string"){p=n
}else{if(typeof n=="object"&&n.type){var m=n.type;
p=this.imageFor(n);
if(n.location){p+=booking.tmpl(f.booker_country,n)
}if(n.location&&n.location_url){var o='<a href="'+n.location_url+'">'+n.location+"</a>";
if(n.type=="book"){p+=booking.tmpl(booking.env.i18nas.booked_at,{as_hotel:o})
}else{if(n.type=="reservation"){p+=booking.jstmpl.translations("vp_activity_feed_booked",n.ago,{hotel_name:o,minutes:n.ago})
}else{if(n.type=="review"){p+=booking.jstmpl.translations("vp_activity_feed_reviewed",n.ago,{hotel_name:o,minutes:n.ago})
}}}}j.addClass(n.type)
}else{window.console&&console.error("AS: tried to add invalid item",n);
return
}}j.html('<div class="activity_box">'+p+"</div>");
if(booking.feature.transition){this.animateWithTransitions(j)
}else{this.animateWithJQuery(j)
}this.trimList()
};
c.prototype.imageFor=function(k){switch(k.type){case"download":case"download_summary":var j=k.platform.toLowerCase().replace(/\s/g,"_");
return booking.tmpl(f.download_image,{platform:j});
case"recommendation":return booking.tmpl(f.dsf_image,k);
default:return booking.tmpl(f.image,k)
}};
c.prototype.animateWithTransitions=function(j){j.addClass("new");
this.$.prepend(j);
setTimeout(function(){j.removeClass("new")
},30)
};
c.prototype.animateWithJQuery=function(j){j.css({opacity:0,position:"absolute"});
this.$.prepend(j);
var k=j.height();
j.css({opacity:0,height:0,position:""});
j.animate({height:k},{duration:300,queue:false}).animate({opacity:1},500)
};
c.prototype.trimList=function(){var j=this.$.children();
if(j.length>10){j.slice(10).remove()
}};
c.defaultSources={recent_bookings_per_country:{url:h("#activity_stream_box").attr("data-href-country"),transform:function(k){var j=k.h_city;
if(k.h_country){j+=", "+k.h_country
}return{type:k.type||"book",user_location:k.b_country,image_src:k.city_square64,location:j,location_url:k.sr_url}
}},recent_bookings_per_city:{url:h("#activity_stream_box").attr("data-href-city"),transform:function(j){return{type:j.type||"book",user_location:j.booker_country,image_src:j.image,location:j.hotel_name,location_url:j.hotel_uri,booker_country:j.booker_country,ago:j.ago||1}
}}};
booking.ensureNamespaceExists("modules");
booking.modules.ActivityStream=c
})(jQuery);
$(document).ready(function(){var c=document.getElementById("activity_items");
if(c){window.as=new booking.modules.ActivityStream(c,"recent_bookings_per_city")
}});
if(!window.console){window.console=new function(){this.log=function(c){};
this.dir=function(c){};
this.debug=function(c){};
this.info=function(c){};
this.warn=function(c){};
this.table=function(c){};
this.trace=function(){};
this.time=function(c){};
this.timeEnd=function(c){};
this.info=function(c){}
}
}booking[sNSStartup].anchorJump={priority:9,init:function(){if($("#newsletterbox .error").length){location.href=location.href+"#errormsg"
}$(".forgotten a, a.forgotten").click(function(){window.open(this.href,"","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=500,height=500,left=200,top=200");
return false
})
}};
(function(d,c){d.appDownloadWidget=(function(){var j={formSelector:".app_widget",inputSelector_sms:".sms_input",inputSelector_email:".email_input",buttonSelector:"button, input[type=submit]",validationPattern_sms:/^[1-9][0-9]{9,14}$/,validationPattern_email:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,autoBind:true,url_sms:"/send_app_sms",url_email:"/send_app_email",type:"sms"};
function k(o){this.options=c.extend({},j,o);
this.$form=c(this.options.formSelector);
if(this.$form.length!==1){throw new Error("Invalid selector! More than one or no instance selected.")
}if(this.options.autoBind){this.bindEvents()
}}k.prototype.bindEvents=function h(){var o=this;
this.$form.bind("submit",function(w){w.preventDefault();
var x=o.options.type,z=o.options["validationPattern_"+x],t=o["send"+(x==="sms"?"Number":"Email")],A=c(this),y=A.find(o.options["inputSelector_"+x]),q=A.data("lang"),p=A.data("source"),r=A.data("tid"),u=y.val();
if(!u){return
}if(!z.test(u)){o.showMessage("validation");
return
}o.hideMessages();
A.find(o.options.buttonSelector).attr("disabled",true);
y.attr("disabled",true);
t.call(o,u,q,p,r)
})
};
k.prototype.sendNumber=function e(o,t,q,r){var p={telno:o,language:t,source:q,tid:r};
g.call(this,"sms",p)
};
k.prototype.sendEmail=function l(o,t,q,r){var p={email:o,language:t,source:q,tid:r};
g.call(this,"email",p)
};
k.prototype.showMessage=function n(p){var o=this.$form.find("[data-message-type*="+p+"]"),q=this.$form.find("[data-message-type]:visible");
if(o.length>1){o=o.filter("[data-message-for="+this.options.type+"]")
}if(q.get(0)!==o.get(0)){this.hideMessages();
o.slideDown()
}d.eventEmitter.trigger("appWidget:message",p)
};
k.prototype.hideMessages=function m(){this.$form.find("[data-message-type]").slideUp()
};
k.prototype.setType=function f(o){if({sms:1,email:1}[o]){this.options.type=o
}};
function g(o,q){var p=this;
o=o==="email"?"email":"sms";
c.ajax({url:p.options["url_"+o],type:"post",data:q,success:function(r){p.showMessage(r.isOk==="true"?"success":"limit")
},error:function(){p.showMessage("network")
}})
}return k
})()
})(booking,jQuery);
(function(d,c){c.ensureNamespaceExists(sNSStartup);
c[sNSStartup].bookingSticker=function(){var A,f,p,w,o,u,h,x,t,C,g,y,k,j;
c[sNSStartup].bookingSticker.stickToZIndex=typeof(c[sNSStartup].bookingSticker.stickToZIndex)==="undefined"?999:c[sNSStartup].bookingSticker.stickToZIndex;
c[sNSStartup].bookingSticker.stickedElements=typeof(c[sNSStartup].bookingSticker.stickedElements)==="undefined"?[]:c[sNSStartup].bookingSticker.stickedElements;
c[sNSStartup].bookingSticker.stickers=typeof(c[sNSStartup].bookingSticker.stickers)==="undefined"?[]:c[sNSStartup].bookingSticker.stickers;
var q=function(J){if(w.scrollTop()>k-f.data("stick-to-offset")){z()
}if(w.scrollTop()<=k-f.data("stick-to-offset")){F()
}};
var I=function(J){f.css("width","auto");
p.css("width","auto").html(f.html());
if(p.is(":visible")){f.css("width",p.width());
l(p)
}else{f.css("width",f.width());
l(f)
}e();
q()
};
var z=function(){if((-parseInt(f.css("top"),10)||0)<parseInt(f.height(),10)&&c[sNSStartup].bookingSticker.stickedElements.indexOf(f)===-1){m();
D()
}if(w.scrollTop()+parseInt(f.height(),10)+f.data("stick-to-offset")>e()){f.css({top:-((w.scrollTop()+parseInt(f.height(),10))-e())});
if(-parseInt(f.css("top"),10)>parseInt(f.height(),10)){n();
D()
}return
}if(j){f.css({top:f.data("stick-to-offset")});
return
}l(f);
f.addClass("sticked").css({top:f.data("stick-to-offset"),"z-index":c[sNSStartup].bookingSticker.stickToZIndex}).before(p);
c[sNSStartup].bookingSticker.stickToZIndex--;
j=true;
m();
D();
return
};
var F=function(){if(!j){return
}f.removeClass("sticked").css({top:g,"z-index":y});
p.remove();
c[sNSStartup].bookingSticker.stickToZIndex++;
j=false;
n();
D();
return
};
var m=function(){if(c[sNSStartup].bookingSticker.stickedElements.indexOf(f)===-1){c[sNSStartup].bookingSticker.stickedElements.push(f);
r()
}};
var n=function(){var J=c[sNSStartup].bookingSticker.stickedElements.indexOf(f);
if(J!==-1){c[sNSStartup].bookingSticker.stickedElements.splice(J,1);
r()
}};
var r=function(){c[sNSStartup].bookingSticker.stickedElements.sort(function(K,J){if(K.data("elem-original-offset-top")>J.data("elem-original-offset-top")){return 1
}if(K.data("elem-original-offset-top")<J.data("elem-original-offset-top")){return -1
}return 0
})
};
var D=function(){if(c[sNSStartup].bookingSticker.stickedElements.length>0){for(var K=0;
K<c[sNSStartup].bookingSticker.stickedElements.length;
K++){c[sNSStartup].bookingSticker.stickedElements[K].data("stick-to-offset",0);
if(K>0){var J=K,L=K-1,M=0;
while(L>=0){M+=c[sNSStartup].bookingSticker.stickedElements[L].height();
L--
}c[sNSStartup].bookingSticker.stickedElements[J].data("stick-to-offset",M)
}}}};
var e=function(){var J=A&&A.offset&&A.offset();
t=J?(A.selector==="html"?0:parseInt(J.top,10)):0;
o=parseInt(A.css("border-bottom-width"),10);
h=parseInt(A.css("padding-bottom"),10);
u=t+parseInt(A.height(),10)+h+o;
return u
};
var l=function(K){var L=d(K),J=["inline","inline-block","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group"];
f.css({width:L.width()});
if(J.indexOf(L.css("display"))>1){f.find("td, th").each(function(N,M){var O=d(L.find("td, th").get(N));
d(M).css({width:O.width()})
})
}};
var G=function(){w.bind({scroll:q,resize:I,load:I})
};
var H=function(){if(p.is(":visible")){k=parseInt(p.offset().top,10)
}else{k=parseInt(f.offset().top,10)
}I();
D();
q()
};
var E=function(L,J){A=!!J?d(J):d("html");
x=parseInt(A.height(),10);
f=d(L);
C=parseInt(f.height(),10);
if(!f.length){return
}if(C>=x){return
}var K=c[sNSStartup].bookingSticker.stickers;
if(K.indexOf(this)===-1){K.push(this)
}w=d(window);
elemOriginalCSSDisplay=f.css("display");
emOriginalCSSTop=f.css("top");
y=f.css("z-index");
e();
k=parseInt(f.offset().top,10);
f.data("elem-original-offset-top",k);
f.data("stick-to-offset",0);
p=f.clone(false).css({visibility:"hidden"}).addClass("sticked-placeholder");
l(f);
G();
m();
D();
q()
};
return{priority:9,init:E,restartPosition:H}
};
c[sNSStartup].bookingSticker.update=function(){var e=c[sNSStartup].bookingSticker.stickers||[];
if(!e.length){return
}d.each(e,function(f,g){g.restartPosition()
})
}
}(window.jQuery,window.booking));
booking[sNSExperiments]["HOUPESfVZNOSWe"]=(function(){var c=function(){if(booking.track.getVariant("HOUPESfVZNOSWe")===false){return
}function d(f,g){var j={aggressive:false,sensitivity:20,timer:500,callback:function(){}};
g=$.extend({},j,g);
setTimeout(h,g.timer);
function h(){$("html").bind("mouseleave",l);
$("html").bind("keydown",m)
}function l(p){if(p.clientY>g.sensitivity||(n("viewedBCheckBounce","true")&&!g.aggressive)){return
}e();
g.callback()
}var o=false;
function m(p){if(o||n("viewedBCheckBounce","true")&&!g.aggressive){return
}if(!p.metaKey||p.which!=76){return
}o=true;
e();
g.callback()
}function n(q,p){return $.cookie(q)===p
}function e(){if(f){f.style.display="block"
}k()
}function k(){$.cookie("viewedBCheckBounce","true",{expires:30,path:"/",domain:booking.env.b_domain_end});
$("html").unbind("mouseleave",l);
$("html").unbind("keydown",m)
}return{fireBCheckBounce:e,disableBCheckBounce:k}
}booking.env.showCheckBounceLightBox=1;
$(document).delegate("a","click contextmenu",function(){booking.env.showCheckBounceLightBox=0;
return true
});
d(false,{callback:function(){if(booking.env.showCheckBounceLightBox==0){return
}if(!$("#notification_lightbox").find("input[name=dest_id]").length){return
}booking.track.exp("HOUPESfVZNOSWe");
if(booking.track.getVariant("HOUPESfVZNOSWe")===0){return
}$(".user_center_popover, #inspire_filter_block").hide();
booking[sNSStartup].lightbox.show($("#notification_lightbox"),{customWrapperClassName:"notification-lightbox-container"});
booking.env.b_exclude_lang_firstname=1;
var f=$("#notification_lightbox .linedinput");
var e=f.val();
f.click(function(){var g=$(this);
if(g.val()===e){g.val("")
}else{g.select()
}});
f.blur(function(){var g=$(this);
if(g.val()===""){g.val(e)
}})
}})
};
return{init:c,initElse:c}
}());
booking.browserStorageHandler=(function(g,c,d,h){var k=false;
try{k=(g.localStorage&&g.sessionStorage?true:false);
if(k){g.localStorage.setItem("btest","1")
}}catch(j){k=false
}var f={_readCookie:function(n){var l={};
try{if(typeof(JSON)!=="undefined"){l=JSON.parse(h.cookie(n))||{}
}}catch(m){}return l
},_modifySingleValue:function(p,n,e,u,m){if(!n||!e){return
}if(k&&!m){var o=(p==="session"?g.sessionStorage:g.localStorage);
if(n==="delete"){o.removeItem(e)
}else{o.setItem(e,u)
}}else{var r,l,t,q;
if(p==="session"){r="bs"
}else{r="b";
q=30
}l=this._readCookie(r);
if(n==="delete"){delete l[e]
}else{l[e]=u
}if(h.isEmptyObject(l)){t=null
}else{t=JSON.stringify(l)
}h.cookie(r,t,{expires:q,path:"/",domain:d.b_domain_end})
}},_getValue:function(o,l,m){if(!l){return undefined
}if(k&&!m){var n=(o==="session"?g.sessionStorage:g.localStorage);
return n.getItem(l)
}else{var p,e;
if(o==="session"){p="bs"
}else{p="b"
}e=this._readCookie(p);
return e[l]
}}};
return{addSessionValue:function(e,m,l){return f._modifySingleValue("session","add",e,m,l)
},deleteSessionValue:function(e,l){return f._modifySingleValue("session","delete",e,undefined,l)
},getSessionValue:function(e,l){return f._getValue("session",e,l)
},addPermanentValue:function(e,m,l){return f._modifySingleValue("permament","add",e,m,l)
},deletePermanentValue:function(e,l){return f._modifySingleValue("permanent","delete",e,undefined,l)
},getPermanentValue:function(e,l){return f._getValue("permanent",e,l)
}}
})(window,document,booking.env,window.jQuery);
(function(){var j=booking.env,h="",e=j.b_timestamp*1000,d=false,c=Math.abs(+new Date()-new Date(e))>=24*3600*1000,f=typeof j.bse_dirty_dates!=="undefined"&&c,k=j.bse_dirty_dates&&c,g=booking[sNSStartup].calendar={priority:9,version:1.4,datefmt:"YYYY MM DD",minimalDays:1,maximalDays:30,oldDays:1,from:{date:null,day:null,month:null,year:null},till:{date:null,day:null,month:null,year:null},viewDateFrom:k?new Date(e):new Date(),viewDateTill:k?new Date(e):new Date(),oneDayInMS:86400000,calendars:[],calendarTypes:{checkin_day:{isTill:false,isDay:true},checkin_monthday:{isTill:false,isDay:true},checkin_year_month:{isTill:false,isDay:false},pre_checkin_year_month:{isTill:false,isDay:false},checkout_day:{isTill:true,isDay:true},checkout_monthday:{isTill:true,isDay:true},checkout_year_month:{isTill:true,isDay:false},pre_checkout_year_month:{isTill:true,isDay:false},start_monthday:{isTill:false,isDay:true},start_year_month:{isTill:false,isDay:false},end_monthday:{isTill:true,isDay:true},end_year_month:{isTill:true,isDay:false}},maxMonthsInFuture:12,maxDaysInFuture:365,maxDaysInThePast:1,syncDate:null,userServDate:false,hasDataRange:false,dateFormat:function(r,F,z){var t=/D{1,4}|M{1,4}|YY(?:YY)?/g,q=function(y,m){y=String(y);
m=m||2;
while(y.length<m){y="0"+y
}return y
};
var p=this;
if(arguments.length==1&&Object.prototype.toString.call(r)=="[object String]"&&!/\d/.test(r)){F=r;
r=undefined
}r=r?new Date(r):new Date;
if(isNaN(r)){throw SyntaxError("invalid date")
}F=String(F||p.datefmt);
if(F.slice(0,4)=="UTC:"){F=F.slice(4);
z=true
}var C=z?"getUTC":"get",w=r[C+"Date"](),l=r[C+"Day"](),o=r[C+"Month"](),x=r[C+"FullYear"](),A=r[C+"Hours"](),u=r[C+"Minutes"](),E=r[C+"Seconds"](),n={D:w,DD:q(w),DDD:j.b_simple_weekdays_for_js[(l+6)%7],DDDD:j.b_long_weekdays[(l+6)%7],M:o+1,MM:q(o+1),MMM:j.b_short_months_abbr[o],MMMM:j.b_short_months[o],YY:String(x).slice(2),YYYY:x};
return F.replace(t,function(m){return m in n?n[m]:m.slice(1,m.length-1)
})
},searchMinDays:function(l){this.minimalDays=l
},maxYearsInFuture:function(){this.today=(k)?this.noHourDate(new Date(e)):this.noHourDate(null);
this.maxMonthsInFuture=12;
this.maxDaysInFuture=parseInt(j.calendar_days_allowed_number);
if(j.b_site_experiment_rolling_calendar_year){if(this.maxMonthsInFuture<13){this.maxMonthsInFuture=13
}}this.tomorrow=this.dateAfterDays(this.today,1);
this.endOfYear1=this.dateAfterDays(this.today,this.maxDaysInFuture);
this.endOfYear2=this.dateAfterDays(this.today,this.maxDaysInFuture-1)
},setPast:function(l){this.maxDaysInThePast=l
},syncDates:function(l,m,r,o,q){$(".b_check_blocked").removeClass("b_check_blocked");
if(!q){$("#availcheck").attr("checked",false);
$("#define_group input, #define_group select").removeAttr("disabled");
$("#define_group").removeClass("disableme")
}if(l){this.till.day=(m==null)?this.till.day:m;
this.till.month=(r==null)?this.till.month:r;
this.till.year=(o==null)?this.till.year:o;
if(this.till.day!=null&&this.till.month!=null&&this.till.year!=null){this.till.date=new Date(this.till.year+"/"+this.till.month+"/"+this.till.day+" 00:00:00");
this.viewDateTill=new Date(this.till.year+"/"+this.till.month+"/"+this.till.day+" 00:00:00")
}}else{this.hasDataRange=true;
this.from.day=(m==null)?this.from.day:m;
this.from.month=(r==null)?this.from.month:r;
this.from.year=(o==null)?this.from.year:o;
if(this.from.day!=null&&this.from.month!=null&&this.from.year!=null){this.from.date=new Date(this.from.year+"/"+this.from.month+"/"+this.from.day+" 00:00:00");
this.viewDateFrom=new Date(this.from.year+"/"+this.from.month+"/"+this.from.day+" 00:00:00")
}}var p=false;
if(!l&&this.from.date!=null){if(this.till.date!=null){if(this.till.date<=this.from.date){if(booking.env.b_site_experiment_av_calendar&&booking.avCalendar.isCheckInAvailable(this.from)){this.till.date=new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from)+" 00:00:00")
}else{this.till.date=this.dateAfterDays(this.from.date,this.oldDays)
}p=true
}else{if(booking.env.b_site_experiment_av_calendar&&booking.avCalendar.isCheckOutAvailable(this.from,this.till)===false){this.till.date=new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from)+" 00:00:00");
p=true
}}}else{if(!q){if(booking.env.b_site_experiment_av_calendar&&booking.avCalendar.isCheckInAvailable(this.from)){this.till.date=new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from)+" 00:00:00")
}else{this.till.date=this.dateAfterDays(this.from.date,this.minimalDays)
}p=true
}}}else{if(l&&this.till.date!=null){if(this.from.date==null){if(!q){this.from.date=this.dateAfterDays(this.till.date,~(this.minimalDays-1));
p=true
}}}}if(p){if(!l){this.till.year=this.till.date.getFullYear();
this.till.month=this.till.date.getMonth()+1;
this.till.day=this.till.date.getDate();
this.viewDateTill=new Date(this.till.year+"/"+this.till.month+"/"+this.till.day+" 00:00:00")
}else{this.from.year=this.from.date.getFullYear();
this.from.month=this.from.date.getMonth()+1;
this.from.day=this.from.date.getDate();
this.viewDateFrom=new Date(this.from.year+"/"+this.from.month+"/"+this.from.day+" 00:00:00")
}}for(var n=0;
n<this.calendars.length;
n++){$(this.calendars[n]).trigger("changed_date",[l,p])
}booking.eventEmitter.trigger("CALENDAR:dates_changed",{type:(l)?"checkout":"checkin",otherChanged:p,oldApi:this})
},updateCalendarTables:function(l){if($(l).hasClass("calendarTill")){this.rebuildCalendarTable($("table",l).get(0),true,this.viewDateTill.getMonth()+1,this.viewDateTill.getFullYear())
}else{this.rebuildCalendarTable($("table",l).get(0),false,this.viewDateFrom.getMonth()+1,this.viewDateFrom.getFullYear())
}},init:function(){if(this.calendarReady){return
}this.calendarReady=true;
this.maxYearsInFuture();
this.initAddHandlers()
},initAddHandlers:function(){var l=this;
$("select").each(function(){if(l.calendarTypes[$(this).attr("name")]){l.calendars.push(this);
var m=$(this).val();
if(m!="0"){var o=l.calendarTypes[$(this).attr("name")];
if(o.isDay){if(o.isTill){l.till.day=m
}else{l.from.day=m
}}else{var n=m?m.split("-"):"";
if(n.length&&n.length>0){if(o.isTill){l.till.year=n[0];
l.till.month=n[1]
}else{l.from.year=n[0];
l.from.month=n[1]
}}}}$(this).bind("changed_date",function(q,p,t){$("input",this.parentNode).each(function(){if(l.calendarTypes[$(this).attr("name")]){var u=l.calendarTypes[$(this).attr("name")];
if(u.isDay&&u.isTill&&l.till.day!=null){$(this).val(l.till.day)
}if(u.isDay&&!u.isTill&&l.from.day!=null){$(this).val(l.from.day)
}if(!u.isDay&&u.isTill&&l.till.month!=null&&l.till.year!=null){$(this).val(l.till.year+"-"+l.till.month)
}if(!u.isDay&&!u.isTill&&l.from.month!=null&&l.from.year!=null){$(this).val(l.from.year+"-"+l.from.month)
}}});
var r=l.calendarTypes[$(this).attr("name")];
if(((p||t)&&r.isTill)||((!p||t)&&!r.isTill)){if(r.isDay){if((r.isTill&&l.till.year!=null&&l.till.month!=null)||(!r.isTill&&l.from.year!=null&&l.from.month!=null)){l.rebuildDaySelect(this,r.isTill)
}}else{if(r.isTill&&l.till.year!=null&&l.till.month!=null){l.selectOption(this,l.till.year+"-"+l.till.month)
}else{if(!r.isTill&&l.from.year!=null&&l.from.month!=null){l.selectOption(this,l.from.year+"-"+l.from.month)
}}}}});
$(this).change(function(){var t=l.calendarTypes[$(this).attr("name")];
var r=$(this).val();
var q=r.split("-");
if(r!="0"){if($(this).parents(".newcalendar").length){var p=$(this).parents(".newcalendar");
if(q.length&&q.length>1){if($(this).parents(".calendarTill").length){l.viewDateTill=new Date(q[0]+"/"+q[1]+"/"+l.viewDateTill.getDate()+" 00:00:00");
l.rebuildCalendarTable($("table",p).get(0),true,l.viewDateTill.getMonth()+1,l.viewDateTill.getFullYear())
}else{l.viewDateFrom=new Date(q[0]+"/"+q[1]+"/"+l.viewDateFrom.getDate()+" 00:00:00");
l.rebuildCalendarTable($("table",p).get(0),false,l.viewDateFrom.getMonth()+1,l.viewDateFrom.getFullYear())
}}}else{l.syncDates(t.isTill,(t.isDay)?r:null,(t.isDay)?null:((q.length&&q.length>1)?q[1]:null),(t.isDay)?null:q[0])
}}l.trackDateInteraction(t.isTill?"checkOut":"checkIn",t.isDay?"daySelect":"monthSelect")
})
}});
$(".newcalendar").each(function(){if($(this).hasClass("calendarTill")){l.rebuildCalendarTable($("table",this).get(0),true,l.viewDateTill.getMonth()+1,l.viewDateTill.getFullYear())
}else{l.rebuildCalendarTable($("table",this).get(0),false,l.viewDateFrom.getMonth()+1,l.viewDateFrom.getFullYear())
}l.calendars.push(this);
$(this).bind("changed_date",function(p,o,r){if($(this).hasClass("calendarTill")){if(l.till.month!=null&&l.till.year!=null){var q=(l.till.day)?l.till.day:1;
l.viewDateTill=new Date(l.till.year+"/"+l.till.month+"/"+q+" 00:00:00");
l.rebuildCalendarTable($("table",this).get(0),true,l.till.month,l.till.year)
}}else{if(l.from.month!=null&&l.from.year!=null){var q=(l.from.day)?l.from.day:1;
l.viewDateFrom=new Date(l.from.year+"/"+l.from.month+"/"+q+" 00:00:00");
l.rebuildCalendarTable($("table",this).get(0),false,l.from.month,l.from.year)
}}l.updateLabels()
});
var n=$(this);
n.undelegate("td","click").delegate("td","click",function(){var o=$(this).text();
if($("a",this).length){m(o)
}return false
});
function m(q,p){if(!parseInt(q)){return
}if(n.hasClass("calendarTill")){l.syncDates(true,q,l.viewDateTill.getMonth()+1,l.viewDateTill.getFullYear());
l.trackDateInteraction("checkOut","icon")
}else{l.syncDates(false,q,l.viewDateFrom.getMonth()+1,l.viewDateFrom.getFullYear());
l.trackDateInteraction("checkIn","icon")
}l.closePopupCalendar();
var r=booking.formatter.date(l.from.year+"-"+(l.from.month)+"-"+l.from.day,"short_date"),o=booking.formatter.date(l.till.year+"-"+(l.till.month)+"-"+l.till.day,"short_date");
$(".checkinDateSection .selected_date").text(r);
$(".checkoutDateSection .selected_date").text(o);
l.checkFormPost()
}$(".nextmonth",this).bind("click",function(){if(!$(this).hasClass("disabled")){var o=$(this).parents(".newcalendar").get(0);
if($(this).parents(".calendarTill").length){l.viewDateTill=l.dateAfterDays(l.viewDateTill,0,1);
l.rebuildCalendarTable($("table",o).get(0),true,l.viewDateTill.getMonth()+1,l.viewDateTill.getFullYear())
}else{l.viewDateFrom=l.dateAfterDays(l.viewDateFrom,0,1);
l.rebuildCalendarTable($("table",o).get(0),false,l.viewDateFrom.getMonth()+1,l.viewDateFrom.getFullYear())
}}this.blur();
return false
});
$(".prevmonth",this).bind("click",function(){if(!$(this).hasClass("disabled")){var o=$(this).parents(".newcalendar").get(0);
if($(this).parents(".calendarTill").length){l.viewDateTill=l.dateAfterDays(l.viewDateTill,0,-1);
l.rebuildCalendarTable($("table",o).get(0),true,l.viewDateTill.getMonth()+1,l.viewDateTill.getFullYear())
}else{l.viewDateFrom=l.dateAfterDays(l.viewDateFrom,0,-1);
l.rebuildCalendarTable($("table",o).get(0),false,l.viewDateFrom.getMonth()+1,l.viewDateFrom.getFullYear())
}}this.blur();
return false
});
$("select",this).each(function(){var o=$(this).attr("name");
var p=$(this).val();
if(l.calendarTypes[o]){if(!l.calendarTypes[o].isDay){$(this).attr("name","pre_"+o);
$(this.parentNode).append('<input type="hidden" name="'+o+'" value="'+p+'" />')
}}else{$(this).change(function(){var q=$(this).val();
if(q!="0"){var r=q.split("-");
if(r.length&&r.length>0){oCalendar=$(this).parents(".newcalendar");
if($(this).parents(".calendarTill").length){l.viewDateTill=new Date(r[0]+"/"+r[1]+"/1 00:00:00");
l.rebuildCalendarTable($("table",oCalendar).get(0),true,r[1],r[0])
}else{l.viewDateFrom=new Date(r[0]+"/"+r[1]+"/1 00:00:00");
l.rebuildCalendarTable($("table",oCalendar).get(0),false,r[1],r[0])
}}}})
}})
});
if(!(B.track.getVariant("GWcOCBFO")===1||B.track.getVariant("GWcOCBSXHe")===1)){$(".calendarLink").bind("click.calendar",function(){window.calendarRef=$(this).parent().attr("class");
l.openPopupCalendar(this);
return false
})
}$(".calendar_close").click(function(){l.closePopupCalendar();
return false
});
if(this.from.year!=null&&this.from.month!=null&&this.from.day!=null){l.syncDates(false,this.from.day,this.from.month,this.from.year,true)
}if(this.till.year!=null&&this.till.month!=null&&this.till.day!=null){l.syncDates(true,this.till.day,this.till.month,this.till.year,true)
}if(window.location.hash=="#auto_open_checkout"){$("#auto_open_checkout a").click()
}},trackDateInteraction:function(m,l){var n=B[sNSExperiments]["bLNQFZDDUZWfAaNCWRe"];
try{n.track.apply(n,arguments);
return true
}catch(o){return false
}},checkFormPost:function(){if(h&&$("."+h+" .submit_on_change").length){if(booking.env.b_action=="hotel"){if(h=="dealCheckinDate"&&$("#hotelpage_availform").attr("action").indexOf("#")>-1){var l=$("#hotelpage_availform").attr("action").split("#")[0];
$("#hotelpage_availform").attr("action",l)
}$("#hotelpage_availform").submit()
}else{$("#frm").submit()
}}},updateLabels:function(){var m=Math.round((this.noHourDate(this.till.date)-this.noHourDate(this.from.date))/this.oneDayInMS);
if(m>0){if(j.night&&j.nights){var l=(m==1)?1+" "+j.night:j.nights.replace("{amount}",m);
if(l.indexOf(m)<0){l=m+" "+l
}if($(".dayamount").length){$(".dayamount").text(l)
}if($(".no_nights_helper").length){$(".no_nights_helper").text("("+l+")")
}}}if($(".calendarFrom").length){$(".calendarFrom .ct_month").text(j.b_short_months[parseInt(this.from.month)-1]);
$(".calendarFrom .ct_day").text(this.from.day);
if($(".calendarTill").length){$(".calendarTill .ct_month").text(j.b_short_months[parseInt(this.till.month)-1]);
$(".calendarTill .ct_day").text(this.till.day)
}}},updatePrevNextLinks:function(l,m){var q=this;
var p=this.dateAfterDays(this.tomorrow,(this.maxDaysInFuture-2));
var o=(this.maxDaysInThePast>1)?this.dateAfterDays(this.tomorrow,~this.maxDaysInThePast):this.tomorrow;
var n=($(m).parents(".calendarTill").length)?this.viewDateTill:this.viewDateFrom;
$(".nextmonth",m.parentNode).each(function(){if(q.dateAfterDays(n,0,1,true)>p){$(this).addClass("disabled")
}else{$(this).removeClass("disabled")
}});
$(".prevmonth",m.parentNode).each(function(){if(q.dateAfterDays(n,0,-1,true)<o){$(this).addClass("disabled")
}else{$(this).removeClass("disabled")
}});
this.selectOption($("select",m.parentNode),n.getFullYear()+"-"+(n.getMonth()+1))
},rebuildCalendarTable:function(n,o,A,C){var l=$(n).parents(".newcalendar");
var y=document.createElement("table");
$(y).html(n.innerHTML);
var z=booking.env.b_site_experiment_av_calendar&&l.hasClass("avCalendar");
if(o&&z&&this.from.date){$(".avCalendar_pick_checkin").hide();
$(".avCalendar.calendarTill").show()
}var D=parseInt(new Date(C+"/"+A+"/1").getDay())-2;
if(j.sunday_first){D+=1
}else{if(D<0){D=7+D
}}var w=y.getElementsByTagName("td");
for(var u=0;
u<42;
u++){var t=u-D;
var m=w[u];
if(t>0&&t<=this.getDaysInMonth(A,C)){var p=new Date(C+"/"+A+"/"+t+" 00:00:00");
if(!this.isValidDate(p,o)){if(p-this.today==0&&!z){m.innerHTML='<span class="today">'+t+"</span>"
}else{m.innerHTML="<span>"+t+"</span>"
}}else{var x="";
if(z){if((p-this.till.date==0&&o)||(p-this.from.date==0&&!o)){x+=" selected"
}if(!o&&booking.avCalendar.isDateInRange({year:C,month:A,day:t})){x+=booking.avCalendar.isCheckInAvailable({year:C,month:A,day:t})?" has_av":" no_av"
}if(o&&this.from.day&&booking.avCalendar.isDateInRange(this.from)){x+=booking.avCalendar.isCheckOutAvailable(this.from,{year:C,month:A,day:t})?" has_av":" no_av"
}}else{if(p-this.today==0){x+=" today"
}if(p-this.till.date==0){x+=o?" selected":" endsel"
}if(p-this.from.date==0){x+=o?" endsel":" selected"
}if(p<this.till.date&&p>this.from.date){x+=" inbetween"
}}if(booking.env.b_fd_hotel_dates){for(var r=0;
r<booking.env.b_fd_hotel_dates.length;
r++){if(booking.env.b_fd_hotel_dates[r]){$.lst=booking.env.b_fd_hotel_dates[r].split("-");
var q=new Date(Number($.lst[0]),Number($.lst[1])-1,Number($.lst[2]));
if(p-q==0){x+=" flashdeals"
}}}}m.innerHTML='<a href="#" class="'+x+'">'+t+"</a>"
}}else{m.innerHTML="&nbsp;"
}}$(n).html(y.innerHTML);
this.updatePrevNextLinks(true,n)
},isValidDate:function(m,l){var n=(this.maxDaysInThePast>1)?this.dateAfterDays(this.today,~this.maxDaysInThePast):this.today;
return !(m<n||(l&&m<this.tomorrow&&this.maxDaysInThePast<2)||m>this.endOfYear1||(!l&&m>this.endOfYear2))
},rebuildDaySelect:function(p,n){var u="&nbsp;";
if(n){var x=this.till.month;
var A=this.till.year;
var r=this.till.day;
var y=this.from.month;
var m=this.from.year;
var l=this.from.day;
if(r==null||booking.env.keep_day_month){if((!((x==booking.env.b_this_month)&&(A>booking.env.b_this_year4)&&(t>(booking.env.b_this_day-1))&&booking.env.b_site_experiment_rolling_calendar_year))&&(!(A==m&&x==y&&l<booking.env.b_this_day&&booking.env.b_site_experiment_clip_checkout_day_dropdown))){u='<option style="text-transform:capitalize;" value="0">'+j.sbox_day+"</option>"
}}}else{var x=this.from.month;
var A=this.from.year;
var r=this.from.day;
if(r==null||booking.env.keep_day_month){if(!((x==booking.env.b_this_month)&&(A>booking.env.b_this_year4)&&(t>(booking.env.b_this_day-5))&&booking.env.b_site_experiment_rolling_calendar_year)){u='<option style="text-transform:capitalize;" value="0">'+j.sbox_day+"</option>"
}}}$(p).html(u);
var C=this.getDaysInMonth(x,A);
function z(F,G,D){var E=new Date(Date.UTC(F,G-1,D));
var D=E.getUTCDay();
D=(D>0)?D-1:6;
return D
}for(var t=1;
t<=C;
t++){var o=new Date(A+"/"+x+"/"+t+" 00:00:00");
var q=z(A,x,t);
var w=j.b_simple_weekdays_for_js[q]+" "+t;
if((j.b_lang=="ja")||(j.b_lang=="zh")||(j.b_lang=="ko")||(j.b_lang=="hu")){w=t+" "+j.b_simple_weekdays_for_js[q]
}if(!((x==booking.env.b_this_month)&&(A>booking.env.b_this_year4)&&(((t>(booking.env.b_this_day-2))&&!n)||((t>(booking.env.b_this_day-1))&&n))&&booking.env.b_site_experiment_rolling_calendar_year)){if(n){if(!((A==m)&&(x==y)&&(t<=l)&&(booking.env.b_site_experiment_clip_checkout_day_dropdown))){$(p).append('<option value="'+t+'"'+((r==t)?' selected="selected"':"")+">"+w+"</option>")
}}else{$(p).append('<option value="'+t+'"'+((r==t)?' selected="selected"':"")+">"+w+"</option>")
}}}},noHourDate:function(m){var l=(typeof m==="undefined"||m===null)?(this.userServDate?new Date(this.syncDate):new Date()):m;
l.setHours(0);
l.setMilliseconds(0);
l.setMinutes(0);
l.setSeconds(0);
return l
},getDaysInMonth:function(n,l){var m=[31,(function(){return((((l%4)===0)&&((l%100)!==0)||((l%400)===0))?29:28)
})(),31,30,31,30,31,31,30,31,30,31];
return m[n-1]
},selectOption:function(p,u,q){var m=$(p).parents(".newcalendar");
var t=booking.env.b_site_experiment_av_calendar&&m.hasClass("avCalendar");
var n=false;
var x=$("option",p);
var o,l,w;
for(var r=0;
r<x.length;
r++){o=x[r];
l=$(o);
w=l.text();
if(u&&u!=""){if(l.val()==u){o.selected=true;
n=true;
if(t){m.find(".avCalendar_month").text(w)
}}else{x[r].selected=false
}}if(q&&q!=""){if(w==u){o.selected=true;
n=true;
if(t){m.find(".avCalendar_month").text(w)
}}else{o.selected=false
}}}return n
},dateAfterDays:function(w,p,r,u){var l=this.oneDayInMS*p;
var q=12;
if(u){w.setDate(1)
}if(r){var m=this.noHourDate(w);
if(r>q||r<-1*q){w.setFullYear(w.getFullYear()+parseInt(r/q));
r=r%q
}if(r!=0){var n=w.getMonth();
if(n+r>q){w.setFullYear(w.getFullYear()+1);
w.setMonth((n+r)-q)
}else{if(n+r<0){w.setFullYear(w.getFullYear()-1);
w.setMonth((n+r)+q)
}else{w.setMonth(n+r)
}}}}var o=new Date((this.noHourDate(w)*1)+l);
if(w.getTimezoneOffset()!=o.getTimezoneOffset()){var t=w.getTimezoneOffset()-o.getTimezoneOffset();
t=((t<0)?~t+1:t)*60*1000;
if(t>0){o=new Date((this.noHourDate(w)*1)+l+t)
}}return o
},setPosition:function(n){var m=$(n).offset(),o=10,l=m.top+o;
leftPos=m.left,$window=$(window),windowHeight=$window.height(),windowWidth=$window.width(),documentScrollTop=$(document).scrollTop();
if(j.rtl){leftPos=leftPos-211
}if(windowWidth<leftPos+230){if(windowWidth-230>0){leftPos=windowWidth-230
}}if(windowHeight+documentScrollTop<l+230){if(l-documentScrollTop-250>0){l=l-250
}else{l=windowHeight+documentScrollTop-250
}}$("#calendar_popup").css({top:l+"px",left:leftPos+"px"})
},scrollHandlers:[],openPopupCalendar:function(o){var m=$("#calendar_popup").get(0),q=$(window),p,l=this;
var n="";
switch(o.nodeName.toLowerCase()){case"a":n=o.href.split("#")[1];
break;
case"input":n=o.name;
break;
case"select":n=o.name;
break;
case"label":n=o.getAttribute("data-title");
break;
default:break
}p=function(){l.setPosition(o)
};
this.scrollHandlers.push(p);
this.setPosition(o);
q.bind("scroll resize",p);
$("#calendar_popup").show();
booking.track.exp("fEJLBWHcZKNFcWRET");
booking.track.exp("fEJLBWHcZKNFcWRBYNIUfUYCeHHQC");
if(this.calendarTypes[n]&&this.calendarTypes[n].isTill){$(m).addClass("calendarTill");
this.rebuildCalendarTable($("table",m).get(0),true,this.viewDateTill.getMonth()+1,this.viewDateTill.getFullYear())
}else{$(m).removeClass("calendarTill");
this.rebuildCalendarTable($("table",m).get(0),false,this.viewDateFrom.getMonth()+1,this.viewDateFrom.getFullYear())
}$("body").bind("close_calendar",this.closeHandler);
booking.eventEmitter.trigger("CALENDAR:datepicker_opened",this)
},closeHandler:function(){g.closePopupCalendar()
},closePopupCalendar:function(){var l,n,m;
$("#calendar_popup").removeClass("calendarTill").hide();
$("body").unbind("close_calendar",this.closeHandler);
for(l=0,n=this.scrollHandlers.length;
l<n;
l+=1){m=this.scrollHandlers[l];
if(typeof m==="function"){$window.unbind("scroll resize",m)
}}this.scrollHandlers=[]
}}
})();
booking[sNSStartupLoad].change_dates={priority:9,init:function(){if(typeof trigger_error_template_event_tracking!="undefined"&&trigger_error_template_event_tracking===true){booking.google.trackEvent(booking.google.pageviewTracker,"Error Template (Aggregate)",b_errors);
if(b_this_referer!=""){booking.google.trackEvent(booking.google.pageviewTracker,"Error Template (Referrer)",b_this_referer+" - "+b_errors)
}booking.google.trackEvent(booking.google.pageviewTracker,"Error Template (RequestURL)",b_this_url+" - "+b_errors)
}if(booking.env.b_page=="send_change_dates"){$("#message_changing-dates").fadeIn();
$("#change_dates").submit(function(){var e=$("input[name=do]");
var c=$("#change_dates input[name=checkin_date]").val();
var d=$("#change_dates input[name=checkout_date]").val();
if(c&&d&&(c.length>0||d.length>0)){cin_yymm=$("#checkin_year_month").val();
cin_dd=$("#checkin_day").val();
cin_yymmdd=cin_yymm+"-"+cin_dd;
cout_yymm=$("#checkout_year_month").val();
cout_dd=$("#checkout_monthday").val();
cout_yymmdd=cout_yymm+"-"+cout_dd;
a=c.replace(/-0/g,"-");
b=d.replace(/-0/g,"-");
if(a!=cin_yymmdd||b!=cout_yymmdd){e.val("dochangedates")
}}})
}if(booking.env.b_action=="mybooking"){$("#message_changing-dates").fadeIn()
}}};
booking[sNSStartup].cookie_warning={priority:10,init:function(){var f=window.jQuery;
if(B.env.cookie_warning&&!f.cookie("cookie_notice_shown")){if(B.track.getVariant("PJCJKEGNOVLdYFMdVBC")&&!B.env.cookie_warning_excluded_country){if(B.env.is_landing){var h=this;
f("#cookie_warning").show();
f("#cookie_warning a").click(function(j){h.set_cookie_warning();
f("#cookie_warning").fadeOut(1000);
if(f(this).hasClass("close_warning")){booking.google.trackEvent(booking.google.clickTracker,"Cookie warning","Close")
}else{booking.google.trackEvent(booking.google.clickTracker,"Cookie warning","Read")
}});
B.track.exp("PJCJKEGNOVLdYFMdVBC")
}else{this.set_cookie_warning()
}}else{if(!B.track.getVariant("PJCJKEGNOVLdYFMdVBC")&&B.env.is_landing&&!B.env.cookie_warning_excluded_country){B.track.exp("PJCJKEGNOVLdYFMdVBC")
}var h=this,e=f("#cookie_warning"),c=function(){if(!B.env.cookie_warning_excluded_country){f(document).unbind("click.cookieMessage")
}f(document).unbind("keydown.cookieMessage");
f(window).unbind("scroll.cookieMessage")
},g=function(j){if(f(j).hasClass("close_warning")){e.fadeOut("1000",function(){f(j).remove();
f(document).unbind("click.cookieMessage")
});
booking.google.trackEvent(booking.google.clickTracker,"Cookie warning","Close");
return false
}else{booking.google.trackEvent(booking.google.clickTracker,"Cookie warning","Read")
}},d=function(){if(!B.env.cookie_warning_excluded_country){h.set_cookie_warning();
e.fadeOut(1000)
}c()
};
f(document).bind({"click.cookieMessage":function(j){var k=j.target?j.target:j.srcElement;
if(f(k).parents("#cookie_warning").length&&k.tagName.toLowerCase()==="a"){g(k);
h.set_cookie_warning();
c()
}else{if(!f(k).parents("#cookie_warning").length&&!B.env.cookie_warning_excluded_country){d()
}else{if(!f(k).parents("#cookie_warning").length&&B.env.cookie_warning_excluded_country){c()
}}}},"keydown.cookieMessage":function(){d()
}});
f(window).bind({"scroll.cookieMessage":function(){if(f(this).scrollTop()){d()
}}});
e.show()
}}},set_cookie_warning:function(){if(typeof(JSON)!="undefined"){$.cookie("cookie_notice_shown",1,{expires:365,path:"/",domain:B.env.b_domain_end})
}}};
booking[sNSExperiments]["HOGeVdCScVUKeYEGecO"]={init:function(){this.$first=$("#wl252-modal-1");
if($.cookie("wl252-gotit")!=="true"){booking[sNSStartup].lightbox.show(this.$first,{customWrapperClassName:"wl252-modal"},this.autoFocus);
booking.eventEmitter.trigger("account-onboarding-modal-show")
}this.setSkip();
this.gotIt();
this.saveNames();
this.saveStars();
this.placeholderShim()
},autoFocus:function(){this.$first=$("#wl252-modal-1");
if(B.env.b_browser!=="msie"){this.$first.find("#wl252-firstname").focus()
}else{if(B.env.b_browser_version>9){this.$first.find("input:first").focus()
}}},placeholderShim:function(){$("#wl252-firstname").add("#wl252-lastname").placeholder()
},gotIt:function(){$(".wl252-gotit").click(function(c){c.preventDefault();
$.cookie("wl252-gotit","true");
booking[sNSStartup].lightbox.hide();
window.location.reload()
})
},saveNames:function(){var d=this,c=$("#wl252-onboard-name");
c.submit(function(){d.nextModal(1)
})
},saveStars:function(){var d=this,c=$("#wl252-onboard-stars");
c.submit(function(){d.nextModal(2)
})
},nextModal:function(d){var e=d+1,c=$("#wl252-modal-"+e);
if(c.length!==0){booking[sNSStartup].lightbox.hide();
booking[sNSStartup].lightbox.show(c,{customWrapperClassName:"wl252-modal"})
}else{booking[sNSStartup].lightbox.hide()
}},setSkip:function(){var c=this;
$(".wl252-modal__skip").click(function(d){d.preventDefault();
c.nextModal(parseInt($(this).data("modal"),10))
})
}};
function switchDateStack(c,e){var d=c;
if($(c).parents("div").length){d=$(c).parents("div").get(0)
}var f=0;
while(d){if(d.nodeName.toLowerCase()=="div"){f++;
if(f==e){d.style.display="block"
}}d=d.nextSibling
}}function switchDateFlashDeal(c,d){$("div#editDates").css("display","block");
$("div#available_rooms_header1").css("display","none")
}booking[sNSStartup].validatedate={priority:9,init:function(){if(B.track.getVariant("POKUSMYEZUBORT")){return
}$("#frm, #hotelpage_availform").submit(function(){var e=booking[sNSStartup].validatedate.validate(this),c=!e?"Form:NotValid":"Form:Valid";
if(!e&&this.id==="hotelpage_availform"){if(!$(this).hasClass("hp_lb_onsr")){fminit("hotelpage_availform")
}}$(window).trigger(c,{form:this});
if(!e){$(this).addClass("has-date-validation-error-exp")
}else{var d=$(this);
d.removeClass("has-date-validation-error-exp");
d.find(".errors_dateerros,.exclamation_daterrrors").hide()
}return e
});
$("#fd_dates, #fd_flashdeals").submit(function(){return booking[sNSStartup].validatedate.validate(this)
});
$("#availcheck").click(function(){var c="";
if($("#availcheck").is(":checked")){c="Check"
}else{c="Uncheck"
}booking.google.trackEvent(booking.google.clickTracker,booking.env.b_action+" | searchbox checkbox",c)
});
if(booking.track.getVariant("VCBdJXIHUJFaNSAJSUC")){$("#frm, #hotelpage_availform").delegate(".confirm_30_days_plus_yes","click",function(){booking.google.trackEvent(booking.google.clickTracker,"confirm_30_days_plus","clicked yes");
B.browserStorageHandler.addSessionValue("confirm_30_days_plus","true");
$(this).closest("form").removeClass("has-date-validation-error-exp").submit();
return false
});
$("#frm, #hotelpage_availform").delegate(".confirm_30_days_plus_no","click",function(){booking.google.trackEvent(booking.google.clickTracker,"confirm_30_days_plus","clicked no");
var c=$(this).closest("form");
c.removeClass("has-date-validation-error-exp");
c.find(".dateerrors").empty().hide();
c.find('a[rel="checkout_year_month"]').trigger("click");
return false
})
}},validate:function(oForm){if($("#availcheck:checked").length){return true
}var sError="",_serverTime=booking.env.b_timestamp*1000,_datesDiffer=Math.abs(+new Date()-new Date(_serverTime))>=24*3600*1000,today=_datesDiffer?new Date(_serverTime):new Date(),sErrorIsNeedDates=false;
var oCheckinD=$("select[name=checkin_monthday]",oForm);
var oCheckinYM=$("select[name=checkin_year_month]",oForm);
var oCheckoutD=$("select[name=checkout_monthday]",oForm);
var oCheckoutYM=$("select[name=checkout_year_month]",oForm);
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);
if(oCheckinD.length&&oCheckinYM.length&&oCheckoutD.length&&oCheckoutYM.length){var checkinYM=oCheckinYM.val();
var checkinD=parseInt(oCheckinD.val(),10);
var checkoutYM=oCheckoutYM.val();
var checkoutD=parseInt(oCheckoutD.val(),10);
if((typeof checkinYM!="undefined")){var checkinSplitYM=checkinYM.split("-");
var checkinY=parseInt(checkinSplitYM[0],10);
var checkinM=parseInt(checkinSplitYM[1],10);
var checkoutSplitYM=checkoutYM.split("-");
var checkoutY=parseInt(checkoutSplitYM[0],10);
var checkoutM=parseInt(checkoutSplitYM[1],10);
var checkin=new Date(Date.UTC(checkinY,checkinM-1,checkinD));
var checkout=new Date(Date.UTC(checkoutY,checkoutM-1,checkoutD));
var numDays=(checkout-checkin)/86400000;
if(checkinYM=="0"||checkinD=="0"){if(checkoutYM=="0"||checkoutD=="0"){sError=booking.env.to_check_availability_please_enter_your_dates_of_stay;
sErrorIsNeedDates=true;
B.eventEmitter.trigger("SEARCH:dates_nodates")
}else{sError=booking.env.please_enter_your_check_in_date
}}else{if(checkoutYM=="0"||checkoutD=="0"){sError=booking.env.please_enter_your_check_out_date
}else{if((checkinY>checkoutY)||((checkinY==checkoutY)&&(eval(checkinYM)<eval(checkoutYM)))||((checkinYM==checkoutYM)&&(checkinD>checkoutD))){sError=booking.env.error.checkout_date_not_after_checkin_date.name
}}}if(sError==""){if(checkin.getTime()<today.getTime()&&!(checkin.getTime()>today.getTime()-86400005)){sError=booking.env.error.checkin_date_in_the_past.name
}else{if(numDays>30){booking.track.exp("VCBdJXIHUJFaNSAJSUC");
if(booking.track.getVariant("VCBdJXIHUJFaNSAJSUC")){if(numDays>45){sError=booking.env.error.checkout_date_more_than_45_days_after_checkin.name
}else{if(B.browserStorageHandler.getSessionValue("confirm_30_days_plus")!=="true"){sError=B.strings.get("stays_over_30_days_error");
sError+='<br/><span class="confirm_30_days_plus_yes">'+B.strings.get("stays_over_30_yes")+"</span> ";
sError+='<span class="confirm_30_days_plus_no">'+B.strings.get("stays_over_30_no")+"</span>"
}}}else{sError=booking.env.error.checkout_date_more_than_30_days_after_checkin.name
}}else{if(checkin>checkout){sError=booking.env.error.checkout_date_not_after_checkin_date.name
}}}}}}if(sError!=""){if($(".dateerrors",oForm).length){var errorField=$(".dateerrors",oForm).get(0),consistentErrorMessageExpHash="bLYTYeYCNOSPcVDZBOGdIO";
booking.track.exp(consistentErrorMessageExpHash);
if(sErrorIsNeedDates&&!booking.track.getVariant(consistentErrorMessageExpHash)){$("#inout select").change(function(){$("#friendly_error_popup").remove()
});
$(".calendar").click(function(){$("#friendly_error_popup").remove()
});
$("#friendly_error_popup span.close_errormsg").live("click",function(){$("#friendly_error_popup").remove()
});
$("#inout .avail, .toggle_overview, .toggle_review").live("click",function(){$("#friendly_error_popup").remove()
});
if($("#friendly_error_popup").length==0){var last_dropdown_searchbox=$("#inout select").eq(3);
if(booking.env.b_action=="hotel"||booking.env.b_action=="searchresults"){last_dropdown_searchbox=$(".leftsmall #inout select").eq(1)
}var last_dropdown_offset=last_dropdown_searchbox.offset();
var last_dropdown_hotelpage=$("#hotelpage_availform select").eq(3);
if(booking.env.nodates_popup_up){last_dropdown_hotelpage=$("#hotelpage_availform select").eq(0)
}var last_dropdown_hotelpage_offset=last_dropdown_hotelpage.offset()||{};
var first_dropdown_searchbox=$("#inout select").eq(0);
var first_dropdown_offset=last_dropdown_searchbox.offset();
var homeinPos=($("#checkin_year_month").position().top-18);
var nodates_popup_upRight=-255;
if($.browser.msie&&$.browser.version==="7.0"){nodates_popup_upRight=-200
}if(booking.env.b_lang=="ar"||booking.env.b_lang=="he"){var errorHTML='<div id="friendly_error_popup" style="direction:ltr;background-position:center right;top:'+homeinPos+"px;left:"+(nodates_popup_upRight+50)+'px"><div class="wrapper"><span class="close_errormsg"></span><p>'+booking.env.view_prices_enter_dates+"</p></div></div>";
$("#inout").css({position:"relative","z-index":"999"}).append(errorHTML)
}else{if(oForm.id=="hotelpage_availform"){if(booking.env.nodates_popup_up){var errorHTML='<div id="friendly_error_popup" class="hotelpage new_change_dates" style="top:'+(last_dropdown_hotelpage_offset.top-90)+"px;left:"+(last_dropdown_hotelpage_offset.left-150)+'px;"><div class="wrapper"><span class="close_errormsg"></span><p>'+booking.env.view_prices_enter_dates+"</p></div></div>"
}else{var errorHTML='<span class="exclamation exclamation_daterrrors">&nbsp;!&nbsp;</span><p class="error errors_dateerros">'+sError+"</p>";
errorField.innerHTML=errorHTML;
errorField.style.display="block"
}}else{if(booking.env.is_user_dashboard){var errorHTML='<div id="friendly_error_popup" style="top:'+homeinPos+'px;left:200px"><div class="wrapper"><span class="close_errormsg"></span><p>'+booking.env.view_prices_enter_dates+"</p></div></div>";
$("#inout").css({position:"relative","z-index":"999"}).append(errorHTML)
}else{var errorHTML='<div id="friendly_error_popup" style="top:'+homeinPos+"px;right:"+nodates_popup_upRight+'px"><div class="wrapper"><span class="close_errormsg"></span><p>'+booking.env.view_prices_enter_dates+"</p></div></div>";
$("#inout").css({position:"relative","z-index":"999"}).append(errorHTML)
}}}}}else{var errorHTML='<span class="exclamation exclamation_daterrrors">&nbsp;!&nbsp;</span><p class="error errors_dateerros">'+sError+"</p>";
errorField.innerHTML=errorHTML;
errorField.style.display="block"
}$("#swd").click(function(){document.getElementById("availcheck").checked="checked";
document.getElementById("frm").submit();
return false
});
return false
}else{return true
}}else{return true
}}};
booking[sNSStartup].default_input_text={priority:9,init:function(){$("input.swap_text, textarea.swap_text").each(function(){if($(this).val()==""){$(this).val($(this).attr("alt"));
$(this).removeClass("swapped")
}else{if($(this).val()==$(this).attr("alt")){$(this).removeClass("swapped")
}else{$(this).addClass("swapped")
}}$(this).focus(function(){if($(this).val()==$(this).attr("alt")){$(this).val("");
$(this).addClass("swapped")
}}).blur(function(){if($(this).val()==""){$(this).val($(this).attr("alt"));
$(this).removeClass("swapped")
}});
$(this).closest("form").submit(function(){$("input.swap_text, textarea.swap_text",this).each(function(){if($(this).val()==$(this).attr("alt")){$(this).val("")
}})
})
})
}};
booking[sNSStartup].destination_suggestion_dropdown={init:function(){var e=$("#frm");
var c=$(".input-wrapper");
var o=$("#destination");
var n=o.outerWidth();
o.focus(g).bind("paste",g).bind("input",g).keyup(g);
var q=c.find(".input-icon-arrow"),u=c.find(".input-pop-dest"),r=c.find(".input-tip");
if(u.length===0){return
}var j={show:function(){if(!u.hasClass("input-dropdown-closed")){booking.google.trackEvent(booking.google.clickTracker,booking.env.b_action,"show_suggestion_dropdown");
if(u.find(".destination-suggestion").hasClass("destination-suggestion-with-history")){booking.track.exp("YdVFPWcPVLIeVfXe")
}if(u.find(".destination-suggestion").hasClass("destination-suggestion-recent-search-history")){booking.track.exp("fEJTGRYbCNJBbLYUELMfFdHVT")
}u.show();
u.css({top:o.outerHeight(),width:n});
try{booking.calendar2.controller.getCalendars()[0].hide();
booking.calendar2.controller.getCalendars()[1].hide()
}catch(w){}q.html("&#9662;")
}},open:function(){u.removeClass("input-dropdown-closed")
},hide:function(){u.hide();
q.html("&#9656;")
},close:function(){u.addClass("input-dropdown-closed")
}};
o.focus(p).bind("paste",p).bind("input",p).keyup(p);
function p(){r.remove();
var w=o.val();
if($.trim(w)===""){j.show()
}else{j.hide()
}}function g(){var w=o.val();
if($.trim(w)===""){}}c.delegate(".input-icon","click",function(){var w=$(this);
if(u.hasClass("input-dropdown-closed")){booking.google.trackEvent(booking.google.clickTracker,booking.env.b_action,"use_icon_to_open_suggestion");
j.open()
}else{if(u.is(":visible")){j.hide();
j.close();
return
}}o.val("");
o.trigger("keydown");
o.focus();
o.select()
});
$("html").click(function(){j.hide()
});
c.click(function(w){w.stopPropagation()
});
c.delegate(".destination-area a","click",function(y){y.preventDefault();
y.stopPropagation();
var x=$(this);
o.val(x.text()).removeClass("blur");
j.hide();
e.find("input[name='dest_type'], input[name='dest_id']").remove();
e.append($("<input>",{type:"hidden",name:"dest_type",value:$(this).data("desttype")||"city"}));
e.append($("<input>",{type:"hidden",name:"dest_id",value:$(this).data("destid")}));
if(x.hasClass("search-history-item")){booking.search.dates("checkin",x.data("checkin"));
booking.search.dates("checkout",x.data("checkout"))
}try{var w=booking.search.dates("checkin"),z=w&&w.type;
if(z==="invalid"){booking.calendar2.controller.getCalendars()[0].show()
}}catch(y){}booking.google.trackEvent(booking.google.clickTracker,booking.env.b_action,"choose_a_destination_in_suggestion_dropdown: "+$(this).data("tracking_type"))
});
if(booking.track.getVariant("fEJTGRYbCNJBbLYUELMfFdHVT")){c.delegate("#destination-suggestion-search-history-list .destination-suggestion-search-history-list-item","click",function(x){var w=$(this).find("a");
if((w.hasClass("search-history-item"))&&((w.data("checkin")).length===0)){$(".b-form-flexible-dates__toggler").find("input").attr("checked","checked")
}if((w.hasClass("search-history-item"))&&((w.data("checkin")).length!==0)){booking.search.dates("checkin",w.data("checkin"));
booking.search.dates("checkout",w.data("checkout"));
$(".b-form-flexible-dates__toggler").find("input").removeAttr("checked")
}w.click()
})
}var t="destination-section",f="tab-nav-item-active",m="tab-content",h="tab-panel",l="tab-panel-active";
var d;
c.delegate(".tab-nav li","click",function(w){w.preventDefault();
clearTimeout(d);
k($(this))
});
c.delegate(".tab-nav li","mouseover",function(){var w=$(this);
d=setTimeout(function(){k(w)
},300)
});
c.delegate(".tab-nav li","mouseout",function(){clearTimeout(d)
});
function k(y){var x=y.closest("."+t),w=x.children("."+m);
y.siblings().removeClass(f);
y.addClass(f);
w.find("."+h).removeClass(l).eq(y.index()).addClass(l);
booking.google.trackEvent(booking.google.clickTracker,booking.env.b_action,"destination_suggestion_dropdown_tab: "+y.data("tracking_type"))
}}};
$(function(){var c=["item_searching","topten","item_volcano_eruption","item_roomtypes","item_pricing","item_creditcards","item_payments","item_reservation_process","item_hotelpolicies","item_confirmation","item_extrafacilities","item_cancellation","item_directions","item_reviews"];
var f=window.location.search.split("faq=");
if(f.length==2&&f[1].length){var e=f[1].split(",");
if(e.length){$(c).each(function(j,k){hideEl(k)
});
$.each(e,function(j,m){var k=$("span#"+m),l=k.prev();
if(k&&l&&m.match(/faqa\d+/)&&!l.parents("span.faqA").size()){l.clone().appendTo("#faq_deeplink");
k.clone().appendTo("#faq_deeplink")
}})
}}$(".staticmenustyle").children("li").children("a").each(function(j,k){$(k).click(function(){$("#faq_deeplink").children().remove()
})
});
if(location&&location.hash){var h=location.hash.slice(1);
if(h!=""){for(var d=0;
d<c.length;
d++){var g=c[d];
if(g=="item_"+h||g==h){showEl(g)
}else{hideEl(g)
}}}}});
booking.ensureNamespaceExists("feature");
booking.feature.transition=(function(){var c=document.body||document.documentElement;
var e=c.style;
var f="transition";
if(typeof e[f]=="string"){return true
}v=["Moz","webkit","Webkit","Khtml","O","ms"],f=f.charAt(0).toUpperCase()+f.substr(1);
for(var d=0;
d<v.length;
d++){if(typeof e[v[d]+f]=="string"){return true
}}return false
})();
booking[sNSStartup].fixMail={priority:9,init:function(){var c=this;
$(".encrypted").each(function(){$(this).html(c.deCode($(this).text()));
$(this).removeClass("encrypted")
})
},deCode:function(c){return c.replace(/[a-zA-Z]/g,function(d){return String.fromCharCode((d<="Z"?90:122)>=(d=d.charCodeAt(0)+13)?d:d-26)
})
}};
function calcage(c,e,d){s=((Math.floor(c/e))%d).toString();
if(LeadingZero&&s.length<2){s="0"+s
}return"<b>"+s+"</b>"
}function CountBack(c){if(c<0){if(document.getElementById("cntdwn")){document.getElementById("cntdwn").innerHTML=FinishMessage;
return
}}else{if(c>86400){DisplayStr_days=DisplayFormat_days.replace(/%%D%%/g,calcage(c,86400,100000));
document.getElementById("flash_days").innerHTML=DisplayStr_days
}else{document.getElementById("flash_days_wrapper").style.display="none"
}}DisplayStr_hours=DisplayFormat_hours.replace(/%%H%%/g,calcage(c,3600,24));
DisplayStr_minutes=DisplayFormat_minutes.replace(/%%M%%/g,calcage(c,60,60));
DisplayStr_seconds=DisplayFormat_seconds.replace(/%%S%%/g,calcage(c,1,60));
document.getElementById("flash_hours").innerHTML=DisplayStr_hours;
document.getElementById("flash_minutes").innerHTML=DisplayStr_minutes;
document.getElementById("flash_seconds").innerHTML=DisplayStr_seconds;
if(CountActive){setTimeout("CountBack("+(c+CountStepper)+")",SetTimeOutPeriod)
}}if(typeof(TargetDate)=="undefined"){TargetDate="12/31/2020 5:00 AM"
}if(typeof(DisplayFormat)=="undefined"){DisplayFormat="%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds."
}if(typeof(CountActive)=="undefined"){CountActive=true
}if(typeof(FinishMessage)=="undefined"){FinishMessage=""
}if(typeof(CountStepper)!="number"){CountStepper=-1
}if(typeof(LeadingZero)=="undefined"){LeadingZero=true
}CountStepper=Math.ceil(CountStepper);
if(CountStepper==0){CountActive=false
}var SetTimeOutPeriod=(Math.abs(CountStepper)-1)*1000+990;
var dthen=new Date(TargetDate);
var dnow=new Date();
if(CountStepper>0){ddiff=new Date(dnow-dthen)
}else{ddiff=new Date(dthen-dnow)
}gsecs=Math.floor(ddiff.valueOf()/1000);
if(document.getElementById("flash_seconds")){CountBack(gsecs)
}booking[sNSStartup].ga_tracking_of_dsf_icon=(function(e){var d=null;
function c(){var f=$(".uc_destfinder","#user_form");
f.mouseenter(function(){d=window.setTimeout(function(){e.google.trackEvent(e.google.hoverTracker,"Hovering over DSF icon in the header")
},190)
});
f.mouseleave(function(){window.clearTimeout(d)
});
f.one("click",function(){e.google.trackEvent(e.google.clickTracker,"Click on DSF icon in the header")
})
}return{init:c}
})(booking);
booking[sNSStartupLoad].google_thumbnail_map={priority:9,init:function(){var e=$("#b_google_map_thumbnail"),d=e.attr("data-map"),c;
if(d&&e.length){if(window.location.protocol.indexOf("s")!=-1){d=d.replace("http","https")
}e.attr("style","background-image: url("+d+");")
}return true
}};
if(!Array.prototype.walk){Array.prototype.walk=function(e){var c=[],d=this.length;
while(d--){c.push(e(this[d]))
}return c.reverse()
}
}if(!Array.prototype.flatten){Array.prototype.flatten=function(){var d=[],e=-1,c=this.length;
while(++e<c){d=d.concat(this[e].constructor==Array?this[e].flatten():this[e])
}return d
}
}if(!Array.indexOf){Array.prototype.indexOf=function(d){for(var c=0;
c<this.length;
c++){if(this[c]==d){return c
}}return -1
}
}booking.ensureNamespaceExists("google");
booking.google.returnAnalyticsTrackingString=function(){var g=booking.env;
var j=[];
j[j.length]=g.b_this_urchin.replace(/&amp;$/,"");
j[j.length]="ur_aid="+g.b_aid;
j[j.length]="ur_plang="+g.b_lang_for_url;
j[j.length]="ur_gstcc="+g.b_guest_country;
if(g.b_search_category!=""){j[j.length]="ur_scat="+g.b_search_category
}if(g.b_experiment_group){j[j.length]="ur_expgr=1"
}if(g.b_action!=="index"){j[j.length]="ur_hocc1="+g.b_countrycode
}if(g.b_action==="hotel"){if(g.b_hotel_blocks===0&&g.b_checkin_date){j[j.length]="ur_honovail=1"
}if(typeof g.b_label!="undefined"&&g.b_label.substr(0,11)=="postbooking"){j[j.length]="ur_postbknglabel="+g.b_label
}j[j.length]="ur_hotel_id="+g.b_hotel_id
}if(+g.b_availability_checked||g.b_checkin_date){j[j.length]="ur_dat=1"
}else{j[j.length]="ur_nodat=1"
}if(g.b_action==="searchresults"){if(g.b_multiple_destinations_found){j[j.length]="ur_srdis=1"
}if(typeof g.b_available_hotels!="undefined"){if(g.b_available_hotels==0){j[j.length]="ur_hc=0"
}else{if(g.b_available_hotels<=20){j[j.length]="ur_hc=1"
}else{j[j.length]="ur_hc=2"
}}}}if(g.b_context_details){j[j.length]=g.b_context_details.walk(function(k){return["rctp="+k.b_type,"ur_srcid="+k.b_code]
})
}if(typeof b_first_seen!="undefined"&&b_first_seen!=""){j[j.length]="first_seen="+b_first_seen
}if(g.b_acc_type_ga){j[j.length]="ur_acctype="+g.b_acc_type_ga
}if(g.b_book_stage){j[j.length]="stage="+g.b_book_stage
}if(g.b_action==="review"){if(g.b_review_submitted){j[j.length]="review_form_submitted=1"
}else{j[j.length]="review_form=1"
}}if(g.b_action==="myreservations"){if(/bn=\d+/.test(window.location.search)&&/pincode=\d+/.test(window.location.search)){j[j.length]="myres_single_booking"
}}if(g.b_action==="myreservations"||g.b_action==="index"||g.b_action==="confirmation"||g.b_action==="general"){if(/pbsource=\w+/.test(window.location.search)){var e={};
var h=window.location.search.substring(1).split(";");
for(var f=0;
f<h.length;
f++){var d=h[f].split("=");
if(!d[0]){continue
}e[d[0]]=d[1]||true
}var c="pbsource="+e.pbsource;
j[j.length]=c
}}return j.flatten().join("&amp;")
};
booking.ensureNamespaceExists("google");
booking.google.trackPageview=function(d,c){if(typeof c!="undefined"){if(typeof _gaq!="undefined"){_gaq.push(["_trackPageview",c])
}if(window.ga){ga("send","pageview",c)
}}};
booking.google.trackEvent=function(e,g,h,d,c){var f=d||1;
if(typeof e!="undefined"){if(typeof _gaq!="undefined"){_gaq.push(["_trackEvent",e,g,h,d,true])
}if(window.ga){ga("send",{hitType:"event",eventCategory:e,eventAction:g,eventLabel:h,eventValue:d,nonInteraction:1})
}}};
booking[sNSStartup].event_tracking={priority:9,init:function(){if(typeof _gaq!="undefined"){booking.google.errorTracker="Error";
booking.google.clickTracker="Click";
booking.google.hoverTracker="Hover";
booking.google.mapTracker="Map";
booking.google.pageviewTracker="Pageview";
booking.google.viewTracker="View";
booking.google.cityTracker="City";
booking.google.groupTracker="Group";
booking.google.cardTracker="Credit Card";
booking.google.comparisonTracker="Hotel Comparison";
booking.google.userProfileTracker="User profile";
booking.google.bookProcessTracker="Book process";
$(window).load(function(){if(booking.env.f_seen_experiments){for(var h in booking.env.f_seen_experiments){booking.google.trackEvent("Experiment",h,booking.env.f_seen_experiments[h])
}}if(booking.env.b_changed_currency){var g=(booking.env.b_selected_currency&&booking.env.b_selected_currency!="")?booking.env.b_selected_currency:"hotel_currency";
booking.google.trackEvent(booking.google.clickTracker,"change_currency",booking.env.b_lang_for_url+"_"+g)
}if(typeof booking.env.b_changed_language!=="undefined"){var k=booking.env.b_lang_for_url,j=booking.env.b_changed_language;
booking.google.trackEvent(booking.google.clickTracker,"Header Menu: Language","change language: "+j+" to "+k)
}});
$("body").delegate("a, .trackit","click",function(){var g="";
$(this).parents(".tracked").each(function(){g=(this.id)?"#"+this.id+" > "+g:(this.className)?"."+this.className+" > "+g:this.tagName+" > "+g
});
if(g!=""){g=(this.id)?g+"#"+this.id:(this.className)?g+"."+this.className:g+"a";
booking.google.trackEvent(booking.google.clickTracker,"Action: "+booking.env.b_action,g)
}});
function e(h,g){if(g){booking.google.trackEvent(booking.google.groupTracker,g.rooms+" rooms | "+g.adults+" adults | "+g.children+" kids"+(g.children?" ("+g.childrenAges.join(" | ")+")":""),booking.env.b_action)
}}booking.eventEmitter.bind(B.Search.Events.GROUP_CHANGED,e);
var f=$(".error, .errorSimpleMsg");
for(var d=0;
d<f.length;
d++){if(!$(this).hasClass("disabled")){var c=f[d].getAttribute("rel");
if(c!=null){booking.google.trackEvent(booking.google.errorTracker,"Display",c)
}}}this.bindCustomTrackClick();
$("#login-form").submit(function(){if(booking.google.userProfileTracker){booking.google.trackEvent(booking.google.userProfileTracker,"Login attempt : Other",booking.env.b_action)
}});
if(typeof trigger_error404_event_tracking!="undefined"&&trigger_error404_event_tracking==true){booking.google.trackEvent(booking.google.pageviewTracker,"404 Error",document.location.pathname+document.location.search+"&from="+document.referrer)
}$(".filterbox a").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Filter",(this.id==="city_centre_filter_opt"?"district-city_centre":this.getAttribute("data-id")))
});
if(booking.env.b_action==="hotel"){$("#hcta").click(function(){var g="Hotel cta";
if(booking.env.track_htca){g+=("v"+booking.env.track_htca)
}booking.google.trackEvent(booking.google.clickTracker,g,this.getAttribute("data-id"))
})
}$("#sort_by a").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Sort",this.href.substr(this.href.indexOf("order=")+6))
});
$("#ccfaq").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Credit Card FAQ Popup","View")
});
$(".track_register").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Login","Register")
});
$(".track_login").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Login","Login")
});
if(booking.env.b_action=="hotelcomparison"){$(".back").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Previous Page","Clicked")
});
$("h1 a, .hotel_comparison_header").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Hotel Header",$(this).parent("td").eq(0).attr("class"))
});
$(".bigbluebutton").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Book Now Button",$(this).parent().attr("class"))
});
$(".bigbluebutton.topbutton").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Top Book Now Button on comparison_colors_buttons",$(this).parent().attr("class"))
});
$(".bigbluebutton.bottombutton2").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Bottom Book Now Button on comparison_colors_buttons",$(this).parent().attr("class"))
});
$(".bigbluebutton.bottombutton").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Bottom Book Now Button on comparison_colors",$(this).parent().attr("class"))
});
$(".remove_hotel").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Remove and Replace",$(this).parent().attr("class"))
})
}$("#bookconditions").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Booking Conditions","Link clicked")
});
$("#localcurr_dis a").mouseenter(function(){booking.google.trackEvent(booking.google.clickTracker,"Action: "+booking.env.b_action,"hover_tooltip_local_currency")
});
if(booking.env.smart_deals_count&&booking.env.smart_deals_count>0){booking.google.trackEvent(booking.google.viewTracker,"Smart deal filter",booking.env.smart_deals_count+" deals displayed")
}$(".hotel_quick_links a").click(function(){var g=this.href;
if(!g){return
}booking.google.trackEvent(booking.google.clickTracker,"Hotel quick links",g.replace(/^.+#/,"#"))
});
$(".footer_acc_type_links a").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Footer acc type links",$(this).data("ga"))
});
$(".adv_search_btn.adv_trk_1").click(function(){booking.google.trackEvent(booking.google.clickTracker,"adv_search_1","Link clicked")
});
$(".adv_search_btn.adv_trk_2").click(function(){booking.google.trackEvent(booking.google.clickTracker,"adv_search_2","Link clicked")
});
$(".adv_search_btn.adv_trk_3").click(function(){booking.google.trackEvent(booking.google.clickTracker,"adv_search_3","Link clicked")
});
$(".adv_search_btn.adv_trk_4").click(function(){booking.google.trackEvent(booking.google.clickTracker,"adv_search_4","Link clicked")
});
$(".adv_search_btn.adv_trk_5").click(function(){booking.google.trackEvent(booking.google.clickTracker,"adv_search_5","Link clicked")
})
}return true
},bindCustomTrackClick:function(c){if(!c||c.length){c=$(".custom_track")
}else{if(!c.hasClass(".custom_track")){c=c.find(".custom_track")
}}c.click(function(){var d=$(this).attr("data-trackname");
if(d&&booking.google.userProfileTracker){booking.google.trackEvent(booking.google.userProfileTracker,booking.env.b_action+" : "+d,booking.env.b_action)
}})
}};
(function(h,k,l,g,j){var d=false,e=false,f=[],c=0;
var m=function(o){if(c){console.log("googleInit")
}var p;
if(!d){d=true;
l.track.exp("NHJbEeNfcHe");
l.track.exp("fdRDFeNZaXWMNNQKe");
p=k.createElement("script");
p.type="text/javascript";
p.src=g.google_map_current_url;
var n=function(){e=true;
var u;
for(var t=0,r=f.length;
t<r;
t++){u=f[t];
if(u.cb){u.cb.apply(u.ctx||null,u.args||[])
}}};
h.rerunCreateMap=n;
$("head").append(p)
}if(!e){f.push(o)
}};
l.google_geo_api={loaded:function(){return e&&h.google&&google.maps
},load:m}
})(window,document,booking,booking.env,sNSStartupLoad);
booking[sNSStartup].google_pageview_tracker={priority:9,init:function(){var d=booking.env,e=d.b_action,c,f=window._gaq;
if(typeof d.google_analytics_tracking_enabled!="undefined"&&d.google_analytics_tracking_enabled){$('div#survey[surveykey="'+d.survey_key+'"] button[value="accept"]').click(function(){booking.google.trackPageview("click",d.surveytracklink)
});
if(e==="general"){$("a#jobsite").click(function(){booking.google.trackPageview("click","/outgoinglink/jobsite")
})
}$(".priceline_ext_link").click(function(){booking.google.trackPageview("click","/outgoinglink/priceline_name_your_price")
});
$("#share_hotel_history_email_v1").click(function(){booking.google.trackPageview("click","/outgoinglink/socnet_share/hotel_history/Email");
f.push(["_trackSocial","Email"," Share My Viewed Hotels V1",""])
});
$("#pb_confirmation_travellist").click(function(){f.push(["_trackSocial","FB TravelList","Booking Confirmation Click"])
});
if(e==="confirmation"){$("#social_share_links a").click(function(){var g="base";
if(this.id=="social_share_conf_facebook"){g+="/facebook";
sn="facebook"
}else{g+="/twitter";
sn="twitter"
}booking.google.trackPageview("click","/outgoinglink/socnet_share/confirmation/"+g);
f.push(["_trackSocial",sn,"Share Confirmation"])
});
$("#external_review_invite_link").click(function(){booking.google.trackPageview("click","/outgoinglink/confirmation/external_review_invite/")
})
}if(/error/.test(e)){c=(d.b_referrer||"").split("?")[0].replace(window.location.origin,"")||"dont-know";
booking.google.trackPageview("click","/error-action/"+e+"/caused-by"+c)
}}}};
booking[sNSStartup].header_cleaned_links={priority:9,init:function(){$(".forgot_link_look, .forgot_pass_trigger").live("click",function(){var c=$(this).attr("data-href")||$(this).attr("href");
window.open(c,"_blank","left=42,top=42,height=502px,width=440px,resizable=false");
return false
});
$("body").delegate(".hide_reminder_iframe","click",function(){$(this).parent(".reminder_iframe_wrapper").remove();
$(".better_login").show();
booking[sNSStartup].new_personal_menu.recheckHeight();
oThat.openSelect("current_account")
});
$("#foldout_loggedin li").live("click",function(){var c=$(this);
if(c.hasClass("seo_link_look")&&c.attr("data-href")){if(!c.hasClass("my_logout")){window.location=c.attr("data-href")
}}})
}};
booking[sNSStartup].hotel_share_center={priority:9,share_center:null,share_center_popup:null,prev_share_center_link:null,init:function(){var c=this;
$(".share_center .share_center_button strong, .general_share_center_button").click(function(){if($("#general_share_center").length){c.share_center=$("#general_share_center").get(0);
$(c.share_center).removeClass("has_short_url");
var e=$(this).attr("data-hotelname");
var d=$(this).attr("data-hotelimage");
var h=$(this).attr("data-sharelinks").split(",");
var f=$(c.share_center).attr("data-checkinvars");
var g=[$(this).offset().left-$("#bodyconstraint-inner").offset().left,$(this).offset().top];
$(".details",c.share_center).html('<img src="'+d+'" width="50" height="50" alt="" /><h3>'+e+"<small>"+h[0]+"</small></h3><hr />");
$("#share_center_url").val(h[0]);
$(".sc_facebook a",c.share_center).attr("href",h[1]+f);
$(".sc_google a",c.share_center).attr("href",h[2]+f);
$(".sc_twitter a",c.share_center).attr("href",h[3]+f);
$(".sc_email a",c.share_center).attr("href",h[4]+f);
$(c.share_center).css({left:g[0]+"px",top:g[1]+"px"})
}else{c.share_center=$(this).closest(".share_center")
}c.share_center_popup=$(".share_center_popup",c.share_center);
if($(c.share_center).hasClass("open")){if(c.prev_share_center_link==null||c.prev_share_center_link==this){c.close()
}else{c.addShortUrl()
}}else{c.prev_share_center_link=this;
c.open()
}return false
});
$(".share_center .close").click(function(){c.close(" - Corner");
return false
});
$(".share_center .out_link a").click(function(){var e=$(this).attr("rel");
var d=$(this).attr("href");
_gaq.push(["_trackSocial","Share Center","Link Share on"+e]);
window.open(d,"sc_share","menubar=0,resizable=1,width=600,height=400");
return false
});
$(".share_center .sc_email a").click(function(){_gaq.push(["_trackSocial","Share Center","Link Share onEmail"])
});
$(".share_center_url").click(function(){this.select();
$(".copy_hint",$(this).closest(".share_center")).fadeIn("fast");
_gaq.push(["_trackSocial","Share Center","Copy URL"])
});
$(".share_center_url").blur(function(){$(".share_center .copy_hint",this).fadeOut("fast")
})
},open:function(){$(this.share_center_popup).fadeIn("fast");
$(this.share_center).addClass("open");
_gaq.push(["_trackSocial","Share Center","Open Share Center"]);
this.addShortUrl()
},addShortUrl:function(){if(!$(this.share_center).hasClass("has_short_url")){var c=$(".share_center_url",this.share_center).val()+"?label=social_sharecenter_copy_url";
if($(this.share_center).data("checkin")&&$(this.share_center).data("checkout")){c=c+"&checkin="+$(this.share_center).data("checkin")+"&checkout="+$(this.share_center).data("checkout")
}$.get("/short_uri?url="+escape(c)+"&aid="+booking.env.aid,function(e){var d="http://booking.com/"+e.short_url;
$("h3 small",this.share_center).text(d);
$(".share_center_url",this.share_center).val(d);
$(this.share_center).addClass("has_short_url")
})
}},close:function(c){this.prev_share_center_link=null;
$(this.share_center_popup).fadeOut("fast");
$(this.share_center).removeClass("open");
_gaq.push(["_trackSocial","Share Center","Close Share Center"+c])
}};
booking[sNSStartup].ie6_content_width={priority:9,init:function(){if($("html.b_msie_6").length){$(window).resize(function(){var c=document.documentElement.clientWidth;
document.getElementById("bodyconstraint-inner").style.width=(c<630)?"630px":((c>1094)?"1094px":(c-20)+"px")
})
}}};
booking[sNSStartup].in_and_around_updates={priority:9,loadpos:0,savecheck:0,init:function(){var c=(booking.env.b_action=="hotel")?1:12;
$(".landing .widesep ul, .hotel .in_and_around ul").each(function(){if((booking.env.b_action=="country")&&($(this).siblings("h4")[0].className=="iaa_city")){return
}var d=$(this).find("li");
if(d.length>c+2&&!(booking.track.getVariant("BUYdXfMOKe"))){d.eq(c).after('<li class="iaa_more iaa_more_blue"><a href="#">'+booking.env.inandaround_more+"</a></li>");
d.filter(":gt("+c+")").hide()
}});
$("li.iaa_more a").click(function(){$(this).hide().parents("ul").find("li").show();
if(booking.env.b_action!="hotel"){$("#in_and_around .masonry").masonry()
}return false
});
if(document.getElementById("in_and_around")&&booking.env.b_action!="hotel"){$(window).resize(function(){var d=$("#in_and_around .masonry");
d.masonry({itemSelector:".in_and_around",isResizable:false,columnWidth:d.width()*0.499})
}).resize()
}}};
if(typeof JSON!=="object"){JSON={}
}(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()
}
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
}}());
if($.cookie("b")){var b_cookie=JSON.parse($.cookie("b"))||{}
}else{var b_cookie={}
}var dont_execute_in_tdot=function(){var c=booking.env,d=booking[sNSStartupLoad].show_language={priority:9,init:function(){var f=function(){b_cookie.langPrompt="dontshow";
if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:c.b_domain_end})
}};
if(typeof(b_cookie)=="undefined"){b_cookie={}
}$("#langselectbutton, #languageselect input").hide();
$("#langselectformlist, #currList").change(function(){$("#languageselect")[0].submit();
f()
});
$(".current_language, .prompt_close").click(function(g){g.preventDefault();
$(".language_prompt").hide();
$.get("/general."+booking.env.b_lang+".html?tmpl=blank")
});
$(".language_flags").click(function(){f()
});
if(c.show_language_suggestion){if(b_cookie.countLang){if(!isNaN(b_cookie.countLang)){var e=parseInt(parseInt(b_cookie.countLang)+1);
if(e<=4){c.language_dialog_count2=e;
b_cookie.countLang=c.language_dialog_count2
}}else{c.language_dialog_count2=1;
b_cookie.countLang=1
}}else{c.language_dialog_count2=1;
b_cookie.countLang=1
}if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:c.b_domain_end})
}if(b_cookie.langPrompt!="dontshow"&&c.language_dialog_count2<4){setTimeout(d.createAlert,2000)
}}},createAlert:function(j){var k=c.show_language_suggestion,n=c.browser_lang,f=c.icons,l,o=false,g="",e="",m="";
if(k){var h=230;
current_currency_width=$("#current_currency").width();
current_language_width=$("#current_language").width();
personal_form_space=Math.round(current_currency_width+(current_language_width/2)-(h/2));
lang_prompt_html="";
if($("#languageselect .language-wrapper").length){l=$("#languageselect .language-wrapper");
g="margin-top:10px;";
e="top: -2px;";
if(c.b_is_ie6||c.b_is_ie7){m="margin-top:25px;left:100px;"
}o=true
}else{l=$("#personal_form");
e="top: -11px;";
m="top:40px;"
}lang_prompt_html+='<div id="lang-prompt" style="display:none;height:1px;position:absolute;z-index:50;width:'+h+"px;left:"+personal_form_space+"px;"+m+'"><div style="position:absolute;zoom:1;'+e+";left:120px;width:17px;height:13px;background:url('//r-ec.bstatic.com/static/img/experiments/top-info-arrrow2/932e26ee2c70a335e5031bf87df7595bf93ca5b9.png');\"></div><div style=\"border:2px solid #a2bbda;padding:10px;background:#e6edf6;width:230px;-moz-box-shadow:0 1px 2px rgba(0,0,0,.7);-webkit-box-shadow:0 1px 2px rgba(0,0,0,.7);"+g+'"><a href="#" class="close" style="float:right;font-weight:normal;font-size:12px;line-height:1.3;opacity:.35;filter:alpha(opacity=35);">'+c.transl_close_x+"</a>";
lang_prompt_html+='<a href="#scs" id="lang_change_link" class="lang_change_link" style="display:block;font-weight:normal;margin-right:50px;padding-left:40px;white-space:normal;background:url(\'//q-ec.bstatic.com/static/img/flags/24/'+c.b_flag_to_suggest+'.png\') no-repeat;" data-lang-code="'+k.suggested_lang_select+'">'+k.transl_change_page_lang_to_x+"</a>";
lang_prompt_html+="</div></div>";
l.append(lang_prompt_html);
$("#lang-prompt").fadeIn("slow");
booking.google.trackEvent(booking.google.clickTracker,"Lang prompt","Show");
$("#lang-prompt .close").click(function(){b_cookie.langPrompt="dontshow";
if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:c.b_domain_end})
}$("#lang-prompt").hide();
booking.google.trackEvent(booking.google.clickTracker,"Lang prompt","Close");
return false
});
$("#lang-prompt .lang_change_link").click(function(){b_cookie.langPrompt="dontshow";
if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:c.b_domain_end})
}var p=$(this).attr("data-lang-code");
if(o){$("#langselectformlist").val(p);
$("#languageselect")[0].submit()
}else{window.location=$(".lang_"+p).attr("data-href")
}})
}}}
};
if(!booking.env.b_is_tablet){dont_execute_in_tdot()
}booking[sNSExperiments].ng_last_viewed={priority:9,resultsPerPage:booking.env.b_is_android_tablet?4:5,totalPages:0,currentPage:0,click:null,googleTracked:false,lastViewedHotels:null,overlay:null,ajaxPath:"/userhistory."+booking.env.b_lang_for_url+".html",ajaxStatus:0,staticPath:[],init:function(){this.staticPath=booking.env.b_static_images_hostnames;
$("body").append('<div id="ng-overlay" hidden></div>');
this.$overlay=$("#ng-overlay");
this.addEvents()
},addEvents:function(){var c=this,d=$("#top_lw_wrapper"),e=$("a#top_last_viewed");
e.bind("click",{exp:c},function(j){var h=$(this),g=$("#history_count").attr("data-count"),f=$("#top_language_prompt");
if(f.length){f.remove()
}if(!c.googleTracked){booking.google.trackEvent(booking.google.clickTracker,"Last Viewed In Header","Opened Last Viewed Hotels from the header button");
c.googleTracked=true
}if(c.isVisibleOverlay()&&(c.click=="lw")){c.distroyOverlay();
d.hide()
}else{c.createOverlay();
$(".milk_menu").hide();
d.show();
c.click="lw"
}if(!c.ajaxStatus&&g&&(g-0)>0){c.getLastViewedHotels()
}if(typeof booking.maps!=="undefined"&&booking.maps.map_opened){booking.maps.close()
}j.preventDefault()
});
$("#ng-overlay, #current_account, #header_currency, #header_language").bind("touchstart",function(h){var g=$(this),f=$(h.target);
if(f.get(0).id=="ng-overlay"){h.preventDefault()
}c.distroyOverlay()
});
$("#lw_next, #lw_prev").bind("touchstart",function(h){var g=$(this),f;
h.preventDefault();
f=setTimeout(function(){c.renderItems(g.data("page"))
},300)
});
$("#sidebar_last_viewed").bind("click",function(f){f.preventDefault();
$(document.body).animate({scrollTop:0},400,function(){e.trigger("click");
booking.google.trackEvent(booking.google.clickTracker,"Last Viewed In Header","Opened Last Viewed Hotels from the sidebar button")
})
})
},handleCookieWarning:function(d){if("nl"!=booking.env.b_guest_country||(typeof booking[sNSExperiments].t_cookie_warning!=="undefined"&&booking[sNSExperiments].t_cookie_warning.getCookie())){return
}var c=$("#cookie_warning");
if(c.length){if("show"==d){c.show()
}else{c.hide()
}}},createOverlay:function(){var c=this;
if(!booking.track.getVariant("PYVcTQQDIBafXARe")){$(document).bind("touchmove",false)
}c.handleCookieWarning();
if(booking.track.getVariant("PYVcTQQDIBafXARe")){$("#ng-overlay").height($("html").outerHeight(true)).show()
}else{$("#ng-overlay").show()
}},distroyOverlay:function(){var c=this;
if(!booking.track.getVariant("PYVcTQQDIBafXARe")){$(document).unbind("touchmove",false)
}$("#ng-overlay").hide();
$("#top_lw_wrapper").hide();
c.handleCookieWarning("show");
if(booking.track.getVariant("PYeUZFNZeFZIWcbIXXcffWe")){$(".milk_menu").hide()
}return false
},isVisibleOverlay:function(){var c=this;
return c.$overlay.is(":visible")
},getLastViewedHotels:function(){var c=this,d=$("#lw_list #spinner");
c.ajaxStatus=1;
if($.ajax){$.ajax({type:"GET",cache:false,url:c.ajaxPath,dataType:"JSON",data:{last_viewed_json:1,tmpl:"profile/json",stid:350339},success:function(e){c.ajaxStatus=2;
if(typeof e!=="object"){e=$.parseJSON(e)
}if(!e||$.isEmptyObject(e)||(e instanceof Array&&!e.length)){return
}c.lastViewedHotels=e;
c.totalPages=Math.ceil(e.length/c.resultsPerPage);
c.renderItems(1);
d.remove()
}})
}return true
},renderItems:function(l){var e=this,c=$("#lw_next"),d=$("#lw_prev"),g=$("#lw_list"),k=e.lastViewedHotels,h=(l-1)*e.resultsPerPage,f=h+e.resultsPerPage;
f=f>k.length?k.length:f;
g.empty();
e.currentPage=l;
for(h;
h<f;
h++){g.append(this.renderItem(k[h]))
}if(e.currentPage<e.totalPages){c.data("page",e.currentPage+1).show()
}else{c.hide()
}if(e.currentPage!=1){d.data("page",e.currentPage-1).show()
}else{d.hide()
}},renderItem:function(f){var d=this,e="";
e+="<li>";
e+='<a class="ui-helper-clearfix" href="';
e+=booking.env.b_nonsecure_hostname_signup+f.url+booking.env.b_query_params_with_lang;
e+=booking.env.b_url_params+booking.env.b_query_params_delimiter;
if(booking.env.b_param_do_availability_check!="undefined"){e+="do_availability_check=on"+booking.env.b_query_params_delimiter;
if(booking.env.b_checkin_date&&booking.env.b_checkout_date){e+="checkin="+booking.env.b_checkin_date;
e+=booking.env.b_query_params_delimiter;
e+="checkout="+booking.env.b_checkout_date
}}e+='">';
if(f.photo_id){var c=Math.round(Math.random());
e+='<img width="60px" height="60px" src="'+d.staticPath[c]+"/images/hotel/square60/"+f.photo_id.substring(0,3)+"/"+f.photo_id+'.jpg " />'
}e+='<span class="lw_hotel_name">'+f.title+"</span>";
if(f.rating){if(f.class_is_estimated&&f.hotel_cc1=="de"&&booking.env.b_site_experiment_t_de_rating_bugfix>0){e+=booking.env.b_site_experiment_t_retina_rating>0?'<span class="retina_estimated_small '+d.loadRetinaRatingClass(f.rating,f.rating_half)+'"></span>':'<span class="circles '+d.loadRatingClass(f.rating,f.rating_half)+'"></span>'
}else{if(f.class_is_estimated&&f.hotel_cc1=="au"&&booking.env.b_site_experiment_t_au_rating_bugfix>0){e+=booking.env.b_site_experiment_t_retina_rating>0?'<span class="retina_estimated_small '+d.loadRetinaRatingClass(f.rating,f.rating_half)+'"></span>':'<span class="circles '+d.loadRatingClass(f.rating,f.rating_half)+'"></span>'
}else{e+=booking.env.b_site_experiment_t_retina_rating>0?'<span class="retina_stars_small '+d.loadRetinaRatingClass(f.rating,f.rating_half)+'"></span>':'<span class="use_sprites stars4 stars4i'+f.rating+'"></span>'
}}if(f.class_is_estimated&&f.hotel_cc1=="au"&&!d.isAUTracked){booking.track.exp(booking.env.js_experiment_tracking.t_au_rating_bugfix);
d.isAUTracked=true
}}if(f.address){e+='<span class="lw_address">'+f.address+"</span>"
}e+="</a>";
e+="</li>";
return e
},loadRatingClass:function(c,d){return(d?"circle"+c+"i4half":"circle"+c+"i4")
},loadRetinaRatingClass:function(c,d){return"retina_stars_small_"+c+(d?"half":"")
}};
booking[sNSExperimentsLoad].lazy_load_print_css={priority:9,init:function(){var c=document.createElement("link");
c.rel="stylesheet";
c.type="text/css";
c.href=booking.env.print_css_href;
c.media="print";
document.getElementsByTagName("head")[0].appendChild(c)
}};
booking.ensureNamespaceExists(sNSStartup);
booking.lightbox=booking[sNSStartup].lightbox=(function(){var l;
var c;
var m;
var f;
var w;
var d;
var k={bAnimation:true,bCloseButton:true,customWrapperClassName:"",customMaskClassName:"",bFullscreen:false,hideCallBack:null,hideBeforeCallBack:null,positionBeforeCallBack:null,positionAfterCallBack:null,cloneElement:false,bCanScroll:false,bOverflowVisible:false,opacity:0.5};
var e={};
var u=(function(){var A=["","moz","webkit"],y=false;
for(var z=0;
z<3;
z++){if(A[z]+(A[z]===""?"b":"B")+"oxSizing" in document.body.style){return true
}}return y
})();
var g=function(){if(!c){return
}if(e.hideBeforeCallBack){e.hideBeforeCallBack()
}if(!e.cloneElement){w.prepend(f);
f.css("display",d)
}l.remove();
c.remove();
$("body").removeClass("modal-visible");
$(window).unbind("resize",n);
$(document).unbind("keyup",q);
$("#calendar_popup").css("display","none");
if(e.hideCallBack){e.hideCallBack()
}};
var x=function(){if(e.positionBeforeCallBack){e.positionBeforeCallBack()
}l.css({width:$(document).width(),height:$(document).height()});
var A=$(window).width(),y=$(window).height();
if(!u){A=A-parseInt(c.css("paddingLeft"))-parseInt(c.css("paddingRight"));
y=y-parseInt(c.css("paddingTop"))-parseInt(c.css("paddingBottom"))
}if(c.outerHeight()>$(window).height()){c.css("height",y)
}else{c.css("height","");
if(c.outerHeight()>=$(window).height()){c.css("height",y)
}}if(c.outerWidth()>$(window).width()){c.css("width",A)
}else{c.css("width","");
if(c.outerWidth()>=$(window).width()){c.css("width",A)
}}var D=0,C=0;
if(!e.bFullscreen){if(window.self!==window.top&&booking.track.getVariant("OLDGGBYT")){if(window.parent&&window.parent.booking[sNSExperiments]&&window.parent.booking[sNSExperiments]["OLDGGBYT"]){var z=window.parent.booking[sNSExperiments]["OLDGGBYT"].getScrollPos();
D=Math.max(0,(z[1]/2-c.outerHeight()/2)+z[0])
}else{D=Math.max(0,$(window).height()/2-c.outerHeight()/2)
}}else{D=Math.max(0,$(window).height()/2-c.outerHeight()/2)
}C=Math.max(0,$(window).width()/2-c.outerWidth()/2)
}else{c.css({width:A,height:y})
}var E="hidden";
if(e.bCanScroll){E="auto"
}else{if(e.bOverflowVisible){E="visible"
}}c.css({top:D,left:C,overflow:E});
if(e.positionAfterCallBack){e.positionAfterCallBack()
}};
var n=function(){if(c&&c.is(":visible")){x()
}};
var q=function(y){if(y.keyCode===27){g()
}};
var h=function(){var y=Math.max(0,$(window).height()/2-c.outerHeight()/2);
y+=$(document).scrollTop();
c.css("top",y)
};
var p=function(){$(".modal-wrapper .modal-mask-closeBtn").one("click",function(){booking.eventEmitter.trigger("modal:close");
g()
});
$(".modal-mask").one("click",function(){booking.eventEmitter.trigger("modal:close");
g()
});
$(document).bind("keyup",q);
$(window).bind("resize",n)
};
var o=function(){$('<div class="modal-mask"/>').appendTo(document.body);
l=$(".modal-mask");
if(e.customMaskClassName.length>0){l.addClass(e.customMaskClassName)
}$('<div class="modal-wrapper"/>').appendTo(document.body);
c=$(".modal-wrapper");
if(e.customWrapperClassName.length>0){c.addClass(e.customWrapperClassName)
}if(e.cloneElement){f.clone().appendTo(c)
}else{c.append(f)
}if(e.bCloseButton){c.append($('<div class="modal-mask-closeBtn" title="'+booking.env.experiment_popups_close+'"/>'))
}if(e.bFullscreen){c.addClass("modal-wrapper--fullscreen")
}$("body").addClass("modal-visible");
f.show();
x();
p()
};
var t=function(A,z,C){if(c&&c.is(":visible")){return
}e={};
$.extend(e,k,z);
if(e.iframe){var y=$('<iframe id="lightbox_iframe" src="'+A+'" width="100%" height="'+e.iframeHeight+'"></iframe> ');
if(typeof e.loadCallBack=="function"){y.load(e.loadCallBack)
}f=y;
w=f.parent();
d=f.css("display");
r()
}else{if(e.ajax){jQuery.ajax({url:A,cache:true,success:function(D){f=$(D);
w=f.parent();
d=f.css("display");
r()
}})
}else{f=$(A);
w=f.parent();
d=f.css("display");
r()
}}if(typeof C!=="undefined"){C()
}};
var r=function(){o();
c.css("visibility","visible");
if(e.bAnimation){l.fadeTo("slow",e.opacity);
c.css("opacity","0").animate({opacity:1},1000,function(){$(this).css("opacity","")
})
}else{l.css("opacity",e.opacity).show()
}};
var j=function(A,z,y,C){booking[sNSStartup].lightbox.show($("#"+C))
};
return{priority:5,init:function(){},show:t,hide:g,rePosition:n,open:j}
}());
if(window.booking&&window.booking.env.b_action=="index"){booking[sNSStartup]["loc_add_choose_date"]=(function(p,q,f,o,m){var n;
var e;
var t=function(x){var w=x?m(x):m("#home_featured_destinations");
w.delegate(".checkAvailabilitySwitch","click",function(y){y.stopPropagation();
if(m(this).hasClass("moreBtnFolded")){if(m(".moreBtnUnfolded")){m(".moreBtnUnfolded").parent().parent().removeClass("currentHotel");
m(".moreBtnUnfolded").removeClass("moreBtnUnfolded").addClass("moreBtnFolded")
}m(this).parent().parent().next().removeClass("moreBoxFolded").addClass("moreBoxUnfolded");
m(this).removeClass("moreBtnFolded").addClass("moreBtnUnfolded");
m(this).parent().parent().next().find("td").append(m("#add_date_box"));
m(this).parent().parent().addClass("currentHotel")
}else{if(m(this).hasClass("moreBtnUnfolded")){m(this).parent().parent().next().removeClass("moreBoxUnfolded moreBtnUnfolded").addClass("moreBoxFolded");
m(this).removeClass("moreBtnUnfolded").addClass("moreBtnFolded");
m("#add_date_box_hidden").append(m("#add_date_box"));
m(this).parent().parent().removeClass("currentHotel")
}}});
d();
l();
w.delegate(".inputWidget","mouseenter",function(y){m(this).find(".calendarIcon").attr("class","calendarIcon_hover")
});
w.delegate(".inputWidget","mouseleave",function(y){m(this).find(".calendarIcon_hover").attr("class","calendarIcon")
});
m("#checkAvailabilityBtn").click(function(){var z=m(this).parent().parent().parent().parent().prev().attr("data-url");
var y=z.search(/checkin/i);
var A=z;
if(y!=-1){A=z.slice(0,y-1)
}var C=f.search.dates("checkin").toString();
var D=f.search.dates("checkout").toString();
if(f.search.dates("checkout").type!="invalid"){m(this).attr("href",A+";checkin="+C+";checkout="+D)
}else{m(this).attr("href",A)
}})
};
function d(){n=m(".checkinWidget");
e=m(".checkoutWidget")
}function c(w,x){if(f.env.b_year_months[w+"-"+(x+1)]){return f.env.b_year_months[w+"-"+(x+1)].name
}}function l(){var C=o.sunday_first,w=o.b_simple_weekdays,y=o.b_short_months;
var F=f.calendar2.controller.getCalendars();
f.eventEmitter.bind("SEARCH:date_changed",function(L,G){var K=f.search.dates("checkin"),J=f.search.dates("checkout"),I=f.search.dates(G.type);
if(K){g("checkin",K.date,K.month+1,K.year)
}if(J){g("checkout",J.date,J.month+1,J.year)
}if(I.type==="month"){A("monthSelected",G.type,I)
}else{if(I.type==="valid"){A("dateSelected",G.type,I)
}}for(var H=0;
H<F.length;
H++){if(K&&J&&K.type==="valid"&&J.type==="valid"){F[H].trigger("rangeSelected",{type:G.type,startValue:K,endValue:J})
}}});
function E(I,G){var J=f.calendar2.controller.getCalendars();
for(var H=0;
H<J.length;
H++){if(G.id!==J[H].id()){J[H].trigger("hide")
}}}function A(I,H,J){for(var G=0;
G<F.length;
G++){if(F[G].type()===H){F[G].trigger(I,{type:H,value:J})
}}}function z(I,H){if(!I){return
}var G=new Date(I.year,I.month,I.date+H);
return{year:G.getFullYear(),month:G.getMonth(),date:G.getDate()}
}var x={type:"checkin",defaultDate:f.search.dates("checkin"),startDate:j(),endDate:h(),dayNames:w,monthNames:y,sundayFirst:C,title:o.transl_checkin_title,monthTitle:c,direction:o.rtl?"rtl":"ltr",onDateSelected:function(J,G){var L={year:G.getYear(),month:G.getMonth(),date:G.getDate()};
var I=f.search.dates("checkin"),H=f.search.dates("checkout");
var K=H;
if(J.options.type=="checkin"){f.search.dates("checkin",L);
I=f.search.dates("checkin");
if(!H||H.type=="invalid"||(I.toString()>=H.toString())){f.search.dates("checkout",z(I,1));
H=f.search.dates("checkout")
}f.calendar2.controller.getCalendars()[1].setOptions({startDate:G});
f.calendar2.controller.getCalendars()[1].refreshDisabledDays()
}else{f.search.dates("checkout",L);
H=f.search.dates("checkout")
}g(J.options.type,G.getDate(),G.getMonth()+1,G.getYear());
if(!I||H.type=="invalid"){L=new Date(G.getYear(),G.getMonth(),G.getDate()-1);
f.search.dates("checkin",L);
I=f.search.dates("checkin")
}if((H&&!I)||((H.type=="valid")&&(I.type=="invalid"))||(I.toString()>=H.toString())){f.search.dates("checkin",z(H,-1));
I=f.search.dates("checkin")
}if(I&&H&&I.type=="valid"&&H.type=="valid"){J.selectRange(f.calendar2.dayId(I.year,I.month,I.date),f.calendar2.dayId(H.year,H.month,H.date))
}if(!K||K.type=="invalid"){g("checkout",H.date,H.month+1,H.year);
k()
}},onShow:function(H,G){if(H.options.type=="checkout"){return
}var I=f.search.dates("checkin");
if(I&&I.type=="valid"){H.selectDay(f.calendar2.dayId())
}}};
f.eventEmitter.bind("CALENDAR:opened",E);
var D=m.extend({},x);
D.type="checkout";
D.title=o.transl_checkout_title;
D.defaultDate=f.search.dates("checkout");
D.startDate=u();
D.endDate=r();
n.calendar2(x);
e.calendar2(D)
}function k(){e.trigger("show")
}function j(){var w=new Date();
return w
}function h(){var w=f.calendar2.today();
w.setFullYear(w.getFullYear()+1);
w.setDate(0);
w.setDate(w.getDate()-1);
return w
}function u(){var w=f.calendar2.today();
w.setDate(w.getDate()+1);
return w
}function r(){var w=f.calendar2.today();
w.setFullYear(w.getFullYear()+1);
w.setDate(0);
return w
}function g(x,w,A,z){var y;
var C;
if(w){C=z+"-"+A+"-"+w;
C=booking.formatter.date(C,"date_with_year")
}if(x=="checkin"){y=n.find("p")
}else{y=e.find("p")
}if(w){y.removeClass("placeholder").text(C)
}else{y.addClass("placeholder").text(y.data("default"))
}return true
}return{init:t,priority:9}
}(window,document,booking,booking.env,$))
}booking[sNSStartup].login_foldout={priority:9,fontchange:false,init:function(){var c=this;
if(location.protocol=="https:"&&booking.env.b_is_app){$(".stay_login, #login-form").each(function(){var d=$(this).attr("action");
if(d.indexOf("protocol=https")==-1){var e=d;
if(d.indexOf("protocol=http")>-1){e=d.replace("protocol=http","protocol=https_www")
}else{e=sCurlink+"&protocol=https_www"
}$(this).attr("action",e)
}})
}$("#login_redesign").click(function(){if(!$(this).hasClass("no_arrow")){if($(this).hasClass("login_opened")){$(this).removeClass("login_opened")
}else{$(this).addClass("login_opened")
}$("#login-form_wrapper fieldset").toggle();
$("#login_open, #login_close, #login_optional").toggle()
}return false
});
$(".login_foldout").each(function(){var d=$("#loginPopup").height();
if(d==0){var d=1000
}$("#loginPopup").css({height:"0px","overflow-y":"hidden",display:"none"});
$("#loginPopup").attr({shown:"false"});
$(this).click(function(){c.toggle(document.getElementById("loginPopup"),d);
return false
});
$("#closeLoginPopup").click(function(){c.toggle(document.getElementById("loginPopup"),d);
return false
})
});
$(".stay_login").submit(function(){if(booking.google.userProfileTracker){booking.google.trackEvent(booking.google.userProfileTracker,"Login attempt : Header",booking.env.b_action)
}$("#foldout_error").hide();
$("#login_loading").show();
var g=document.getElementById("username_input_top").value;
if(g==""){c.hideLoader();
$('label[for="username_input_top"]').css({color:"#B30000","font-weight":"bold"});
$("#username_input_top").focus();
return false
}else{var e=/^[0-9[\.]+$/.exec(g);
if(e){var d=$("#bm_log").val();
d+=(d.indexOf("?">0))?"&":"?";
var f=$("#password_input_top",this).val();
d+="pincode="+f+"&bn="+g;
$("#tar_tmpl").attr("value","");
$(this).attr("action",d);
$(this).attr("target","_top")
}}setTimeout(function(){c.hideLoader()
},10000)
});
$('input[name="username"]').each(function(){if(!isNaN($(this).val())){$(this).val("");
var d=$(this).parents("form").get(0);
$('input[name="password"]',d).val("")
}});
$("#signup_form_regular,#sign_up_form,#confirmation_login_box").submit(function(){if(!c.validateLoginSubmitData({formId:this.id})){return false
}});
$("#user_mybooking_login_form").submit(function(){if(!c.validateLoginSubmitData({formId:this.id,passwordIsNumeric:1,loginIsBookingNr:1})){return false
}});
$(".in-pagelogin-form").submit(function(){if(booking.env.auth_level<1){var d=$(".in-pagelogin-form").height()-11
}else{var d=$(".in-pagelogin-form").height()+19
}$("#page_login_loading").css("height",d+"px").show()
});
$(".user_login_show_signin, .user_login_show_signup").live("click",function(){if($(this).hasClass("user_login_show_signup")){booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(true,this)
}else{booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(false,this)
}$(".user_login_error_msg").hide();
return false
});
$(".error_forgotten_password").live("click",function(){$(".forgot_link_look").click();
return false
})
},validateLoginSubmitData:function(l){var k=$("#"+l.formId),h,d,e,j,f,g,c;
f=k.parents(".user_login_form");
g=$(".user_login_error_msg",f);
if(l.loginIsBookingNr){c=$(".user_bn_login_input",k).val();
c=c.replace(/\./g,"");
$(".user_bn_login_input",k).val(c);
if(!c.length||!/^\d+$/g.test(c)){this.displayLoginErrorMsg({errorTarget:g,errorMsg:(c.length===0?booking.env.b_blank_bkng_nr:booking.env.b_bkng_nr_must_be_numeric)});
return false
}}$passwordInput=$(".password_input",k);
if($passwordInput.length){h=$passwordInput.val()
}else{return 1
}if(l.passwordIsNumeric||(g.length&&f.hasClass("user_login_single_signup"))||($(".userlogin_signup_tab",f).hasClass("active"))){if(h&&h.length){e=h.length
}else{e=0
}if(l.passwordIsNumeric){if(!e||!(/^\d+$/g.test(h))){this.displayLoginErrorMsg({errorTarget:g,errorMsg:(e===0?booking.env.b_blank_numeric_pin:booking.env.b_password_must_be_numeric)});
return false
}}else{if(e<8){this.displayLoginErrorMsg({errorTarget:g,errorMsg:booking.env[!e?"account_error_add_password":"password_needs_8"]});
return false
}else{j=$(".username_input",k);
if(j.length){if(j.val()&&j.val()===h){this.displayLoginErrorMsg({errorTarget:g,errorMsg:booking.env.password_cant_be_username});
return false
}}}}return true
}},displayLoginErrorMsg:function(c){if(!c||!c.errorTarget||!c.errorMsg){return
}c.errorTarget.show().text(c.errorMsg);
booking[sNSStartup].new_personal_menu.recheckHeight();
var d=$("#foldout_error").height()+32;
$("#old_pin_login").css("top",d+"px")
},thirdParty:function(f,c,e,d){if(c&&!d){$("#log_tar").attr("src",e)
}if(d){$("#email_send").show("slow")
}},thirdPartyCancel:function(e,d,c){this.hideLoader();
if(typeof $.noticeAdd!="undefined"){$.noticeAdd({text:"\n \n \n "+d+" \n \n \n ",stay:false,stayTime:3000,type:"users",close:"all",destination:""})
}if(c){$("#email_send").show("slow")
}},signupLight:function(d){this.hideLoader();
if(d.signupstatus=="OK"){$("#foldout_error_signup").hide();
$("#email_place_holder").text($("#username").val());
$("#signup_form_light").hide();
$("#signed_up_message").show()
}else{if(d.error){var c=unescape(d.error)
}else{var c=""
}$("#foldout_error_signup").html(c).show()
}booking[sNSStartup].new_personal_menu.recheckHeight()
},reCall:function(l){var f=this;
if(l.reload){booking.env.b_req_login="1"
}if(l.loginstatus=="OK"){if(l.userlanguage||l.currency){var c=booking.env.b_this_url;
var j=(c.indexOf("?")>0)?"&":"?";
if(l.userlanguage){c+=j+"lang="+l.userlanguage;
j="&"
}if(l.currency){c+=j+"selected_currency="+l.currency
}c.replace("logout=1","");
document.location.href=c
}else{if(booking.env.b_redirect){document.location.href=booking.env.b_redirect
}else{if(booking.env.b_req_login=="1"){var g=booking.env.b_this_url;
g.replace("logout=1","");
document.location.href=g
}else{var k=booking.env.b_this_url;
k.replace("logout=1","");
k=(k.indexOf("?")>0)?k+";logout=1":k+"?logout=1";
sLoginLinks=l.loginlink.replace("sign_out_url",k);
$("#login-form_wrapper fieldset").hide();
$(".welcome_login_link").hide();
$("#login_open, #login_close, #login_optional").hide();
$(".hide_on_login").hide("slow");
$(".show_on_login").show();
$("#current_account_foldout").removeClass("non_logged_in_user").addClass("logged_in_user");
if(booking.env.is_user_wishlists){$("#search_tab_favourite").hide();
$("#search_tab_wishlists").show();
$(".wishlist_trigger_box").show();
if(booking.env.is_user_wishlists_for_all){$("#wishlist_modal_user_access").hide();
$("#wishlist_modal_content").show();
$(".modal-wrapper").removeClass("wishlist_user_access_modal_wrapper");
booking.lightbox.rePosition();
if(booking.env.b_user_has_imported_faves){$("#search_tab_wishlists").find(".user_imported_faves_new").show()
}}long_list=false;
hotel_id=booking.env.b_hotel_id;
$.get("/wishlist/get",{hotel_id:hotel_id},function(x){if(x&&x.success&&x.lists&&x.lists.length){var w=x.lists,t="",u="",r;
for(var q=0,p=x.lists.length;
q<p;
q++){if(x.lists.length>3){long_list=true
}r=x.lists[q];
t+='<li><label><input type="checkbox" id="wl_'+r.id+'" value="wl_'+r.id+'"'+(r.selected==1?'checked="checked"':"")+" />"+r.name+"</label></li>";
u+='<li><a href="'+booking.env.new_wishlist_url+r.id+'"><span>'+r.name+"</span></a></li>"
}$("#wl_list").html(t);
$("#search_tab_wishlists_content .menu_wishlists").html(u);
if(long_list=true){$(".wl_list_box").addClass("scrolling_list")
}}else{}})
}else{$("#search_tab_favourite").show();
$("#search_tab_wishlists").hide();
$(".wishlist_trigger_box").hide();
booking.lightbox.hide()
}if($("#login_redesign").length){var e=$("#login_redesign").get(0);
$(e).addClass("no_arrow");
$(e).mouseover(function(){return false
});
$(e.parentNode).mouseover(function(){return false
})
}$("#current_account_foldout").css("width","auto");
var n=window.setTimeout(function(){$("#loginPopup").css({height:"0px","overflow-y":"hidden",display:"none"});
$("#loginPopup").attr({shown:"false"});
$("#password_input_top").val("");
$("#listnav_user .user_salutation").hide();
$("#listnav_user .user_salutation").attr("id","hidden_login_form");
if(l.historylink){$("#myActivityHeader .my_history_header").text(l.historylink)
}if(l.avatarurl&&l.avatarurl!="0"){if($("#my_image_room").length){$("#my_image_room").attr("src",l.avatarurl);
$("#my_image_room").css({padding:"0",width:"24px",height:"24px"})
}if($(".my_image img").length){$(".my_image img").each(function(){$(this).attr("src",l.avatarurl);
if($(".head_firstname").length){$(this).css({"margin-top":"-5px",width:"26px",height:"26px"})
}})
}else{if($("#b_nav_profile").length){var p=l.avatarurl.replace("square_32","square_128");
$("#b_nav_profile").addClass("has_avatar").css("background-image","url("+p+")")
}}}else{if(l.defaultavatar!=0){if($(".my_image img").length){$(".my_image img").addClass("def_avtr");
$(".my_image img").addClass("t_s_avtr_"+l.defaultavatar);
$(".my_image img").css({"margin-top":"-4px","margin-left":"-1px",width:"24px",height:"24px"})
}}}setTimeout(function(){f.preShowMenu()
},100);
if(!$("#b_header").length){if(typeof $.noticeAdd!="undefined"&&l.growl1&&l.growl2){$.noticeAdd({text:"\n \n \n "+unescape(l.growl1)+"<br>"+unescape(l.growl2)+" \n \n \n ",stay:false,stayTime:3000,type:"users",close:"all",destination:"",addClassName:"notice_login"})
}}},500);
if(l.email!=""){if($("#email_confirm").length&&$("#email_confirm").val()==""){$("#email_confirm").val(l.email);
$("#error_email_confirm").hide();
$("#label_email_confirm").removeClass("val-no").addClass("val-yes")
}if($("#email").length&&$("#email").val()==""){$("#email").val(l.email);
$("#error_email").hide();
$("#label_email").removeClass("val-no").addClass("val-yes")
}}if(l.fdata1){if($("#address1").length&&$("#address1").val()==""){$("#address1").val(l.fdata1)
}}if(l.fdata2){if($("#city").length&&$("#city").val()==""){$("#city").val(l.fdata2)
}}if(l.fdata3){if($("#zip").length&&$("#zip").val()==""){$("#zip").val(l.fdata3)
}}if(l.fdata4){if($("#cc1").length&&$("#cc1").val()==""){$("#cc1").val(l.fdata4)
}}if(l.fdata5){if($("#phone").length&&$("#phone").val()==""){$("#phone").val(l.fdata5)
}}var h=" ";
if(l.fdata6){if($("#lastname").length&&$("#lastname").val()==""){$("#lastname").val(l.fdata6);
$("#error_lastname").hide();
$("#label_lastname").removeClass("val-no").addClass("val-yes")
}$(".head_lastname").text(l.fdata6);
h=l.fdata6
}if(l.fdata7){if($("#firstname").length&&$("#firstname").val()==""){$("#firstname").val(l.fdata7);
$("#error_firstname").hide();
$("#label_firstname").removeClass("val-no").addClass("val-yes")
}$(".head_firstname").text(l.fdata7);
h=l.fdata7+" "+h
}else{if(l.fdata6){$(".head_firstname").text("")
}}if($(".login_for_name").length){if(h!=" "){$(".login_for_name").val(h);
$(".login_for_name").css({color:"#003580"})
}}$("input[name='username']").val(l.email);
if(booking.lightbox&&booking.lightbox.isopen){booking.lightbox.close()
}if($("#update_profile_row").length){$("#update_profile_row").show()
}booking[sNSStartup].new_personal_menu.closeSelect(null,true,l.hasbookings);
if(booking[sNSStartup].hide_email_confirm){booking[sNSStartup].hide_email_confirm.hideConfMailInit()
}if(l.has_stored_cc>0){current_book_url=booking.env.b_this_url;
current_book_url=current_book_url.replace(";logout=1","");
current_book_url=current_book_url+";tmpl=profile/creditcards_ajax;";
$("#bs3_cc_form #book_credit_card").load(current_book_url+" #book_credit_card");
$("#cc_img").remove()
}$(".login_text").hide();
$(".loggedin_text").show();
$("#multiple_login").hide();
if(l.unreadmsg&&l.unreadmsg>0){$("#current_account_foldout .placeholder_hnm").text(l.unreadmsg).addClass("header_new_messages")
}if(l.pendingreviews&&l.pendingreviews>0){$("#current_account_foldout .placeholder_hnb").text(l.pendingreviews).addClass("header_new_bookings")
}f.hideLoader();
if($(".loadedContent").length){$(".loadedContent").removeClass("loadedContent")
}}}}}else{if(l.error){var o=unescape(l.error)
}else{var o=""
}var m=(l.nofoldout)?false:true;
var d=window.setTimeout(function(){if(m){$("#foldout_error").html(o).show();
var p=$("#foldout_error").height()+32;
$("#old_pin_login").css("top",p+"px");
booking[sNSStartup].new_personal_menu.openSelect("current_account");
$(".user_login_show_signup").click(function(){$("#username").val($("#username_input_top").val());
$("#new_user").click();
return false
})
}else{if($("#page_login_error").length){$("#page_login_error").html(o).show()
}if($("#bs2_page_login_error").length){$("#bs2_page_login_error").html(o).show()
}}},500);
f.hideLoader()
}},toggle:function(c,f){var e=c.getAttribute("shown");
if(e=="false"){$("#foldout_error").hide();
$(c).css("display","block");
if(f==1000){var d=$("#loginPopup form").get(0);
f=$(d).height()
}$(c).animate({height:f+"px"},500,function(){document.getElementById("username_input_top").focus()
});
c.setAttribute("shown","true")
}else{$(c).animate({height:"0px"},500,function(){$(this).css("display","none")
});
c.setAttribute("shown","false")
}},hideLoader:function(){$("#login_loading").hide();
$("#signup_loading").hide();
$("#page_login_loading").hide()
},preShowMenu:function(){if((booking.env.b_action!="book")||(booking.env.is_exp_user_center_bar=="1")){booking[sNSStartup].new_personal_menu.openSelect("current_account");
oThat.moused_menu=false;
$("#current_account").mouseenter(function(){oThat.moused_menu=true
});
setTimeout(function(){if(!oThat.moused_menu){booking[sNSStartup].new_personal_menu.closeSelect()
}},4000)
}}};
booking[sNSStartup].new_personal_menu={priority:9,opening_state:0,cur_open:"",max_select_height:240,is_ie:0,openSlow:false,init:function(){var c=this;
if(!booking.env.new_personal_menu_ie_performance){if($.browser.msie){$(".select_foldout ul li a").mouseenter(function(){$(this).addClass("hover_class")
});
$(".select_foldout ul li a").mouseleave(function(){$(this).removeClass("hover_class")
})
}}if($(".b_msie_6").length){this.is_ie=6
}if($(".b_msie_7").length){this.is_ie=7
}$("#signup_form_light").submit(function(){$("#signup_loading").show()
});
if(booking.env.is_user_center_bar=="1"){}else{$(".select_box").mouseenter(function(){$(this).addClass("sel_hover")
});
$(".select_box").mouseleave(function(){$(this).removeClass("sel_hover")
})
}$("body").click(function(f){if(c.opening_state==2){var e=$(f.target);
if($(e).length){if(!$(e).parents("#current_account_foldout").length){c.closeSelect()
}}}if(booking.maps&&booking.maps.map_opened&&!(booking.maps.is_sr&&booking.map.mapHasBeenDragged)){var d=$(f.target);
if((booking.maps.is_hp||booking.maps.is_sr)&&(d.length&&(!d.is("#b_map_container")&&!d.parents("#b_map_container,#rightClickPopup,#sr_map").length&&d.attr("id")!=="close_map"))&&!(/gstatic/.test(d.attr("src")))){if($("#close_map").length>0){$("#close_map").click()
}else{if($("#close_map_lightbox").length>0){$("#close_map_lightbox").click()
}}}}});
$(".select_box").click(function(d){if(c.opening_state==0){c.openSelect($(this).attr("id"))
}else{if(c.cur_open!=$(this).attr("id")){c.closeSelect($(this).attr("id"))
}else{if(!$(d.target).parents("#current_account_foldout").length){c.closeSelect()
}}}});
$("#login_jump").click(function(){c.scrollToLogin();
return false
})
},recheckHeight:function(){var c=$("#current_account_foldout .select_foldout_wrap").height()+15;
$("#current_account_foldout").animate({height:c+"px"},400)
},openSelect:function(j){if(booking.env.is_user_center_bar=="1"){}else{oThat=this;
this.cur_open=j;
var h=$("#"+j+"_foldout"),k,n=$("#foldout_loggedin").css("display")=="block",m="";
$("#"+j).addClass("sel_open");
this.opening_state=1;
h.css({display:"block",opacity:"0",overflow:"hidden",height:"400px",width:"200px"});
k=$($(".select_foldout_wrap",h).get(0));
k.css({"overflow-y":"hidden",height:"auto"});
var c=k.height();
var g=k.width();
var f=this.max_select_height;
if(h.hasClass("flex_foldout")){var l=g+10
}else{if(!$("#"+j).hasClass("sel_done")){var l=g+20;
$("#"+j).addClass("sel_done")
}else{var l=g
}}if(c>=this.max_select_height-10&&h.attr("id")!="current_account_foldout"){if(h.hasClass("flex_foldout")){f=c+10;
if(f<300){f=300
}}else{k.css({"overflow-y":"scroll",height:"230px",width:l+"px"});
if(!this.is_ie==6&&!this.is_ie==7){l+=10
}}}else{f=c+10;
k.css({"overflow-y":"hidden",height:"auto"})
}if(this.is_ie==6||this.is_ie==7&&!n){h.css({opacity:"1",height:"0px",width:"0px"});
h.css({width:"auto"});
if(h.hasClass("smaller_booking_nr_login")){k.css({width:"600px"})
}else{k.css({width:"482px"})
}g=k.width();
l=g+10
}else{h.css({opacity:"1",height:"0px",width:"auto"})
}if(h.hasClass("left_foldout")&&!booking.env.rtl){h.css({width:l+"px","padding-right":"0px"})
}else{h.css({width:l+"px","padding-right":"10px",left:"0"})
}if(this.is_ie==6||(this.is_ie==7&&!n)){var d=h.parents(0).width();
if(h.hasClass("left_foldout")&&!booking.env.rtl){iFixedPointEx=d-h.width()-2;
if(iFixedPointEx<0){d=d-iFixedPointEx
}}if(this.is_ie==6||this.is_ie==7){var e=210;
if($("#multiple_login",h).length){if($(".smaller_booking_nr_login").length&&!n){e=550
}else{if($("#foldout_loggedin").css("display")!="block"){e=482
}else{e=182
}}}if(this.is_ie==7){d+=100
}h.css({width:e+"px","padding-right":"18px"})
}else{h.css({width:l+"px"});
$(".select_foldout_wrap",h).css({"overflow-x":"hidden"})
}}if(this.openSlow){this.openSlow=false;
h.animate({height:f+"px"},800)
}else{h.css({height:f+"px"})
}setTimeout(function(){oThat.opening_state=2
},200);
if(booking.env.b_is_ipad){$("body").bind("touchstart",function(p){if(oThat.opening_state==2){var o=$(event.target);
if($(o).length&&!$(o).is("#current_account")){if(!$(o).parents("#current_account_foldout").length&&!$(o).parents("#login_redesign")){oThat.closeSelect();
$(this).unbind(p)
}}}})
}}},closeSelect:function(e,f,c){var d=this;
if(f){$("#foldout_login").css({display:"none"});
$("#multiple_login").css({display:"none"});
$("#foldout_loggedin").css({display:"block"});
if(c){$("#stats_menu_link").css({display:"block"})
}}if(this.opening_state==2){$(".select_foldout").animate({height:"0px"},200,function(){$(".select_foldout").css({display:"none"});
$(".select_box").removeClass("sel_open");
if(e&&e!=null){d.openSelect(e)
}});
this.opening_state=0
}if($("#user_searches_menu").length){booking[sNSStartup].top_saved_searches.closeTabs()
}},scrollToLogin:function(){if(booking.env.rtl){$("body").scrollTo({top:0,left:0},500)
}else{$("body").scrollTo({top:0,left:1000},500)
}this.openSlow=true;
if(this.opening_state==0){this.openSelect("current_account")
}else{this.closeSelect("current_account")
}},hideLoader:function(){$("#login_loading").hide();
$("#signup_loading").hide();
$("#page_login_loading").hide()
}};
booking[sNSStartup].my_social_networks={priority:9,tp_window:null,tp_cur:"",cur_state:"CLOSED",window_sizes:{yahoo:[510,500],facebook:[500,450],google:[850,510]},init:function(){var c=this;
$(".signup_tp a, #re_log_in a, a.connect_with").click(function(){booking[sNSStartup].new_personal_menu.opening_state=2;
var k=this;
var e=$(k).attr("href");
var g=$(k).attr("id");
var f=e;
$("#login_loading").show();
if(c.cur_state!="OPENING"){if(c.tp_window){if(c.tp_cur!=g.toLowerCase()){window.clearInterval(c.checking_in);
c.tp_window=null;
c.cur_state="CLOSED"
}else{c.tp_window.focus()
}}else{c.cur_state="OPENING";
c.tp_cur=g.toLowerCase();
var j=500;
var h=500;
if(c.window_sizes[c.tp_cur]){var j=c.window_sizes[c.tp_cur][0];
var h=c.window_sizes[c.tp_cur][0]
}var l="width="+j+",height="+h+",toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1";
c.tp_window=window.open(f,"",l);
var d="rem_provider="+c.tp_cur;
if(booking.env.b_this_url.indexOf(d)>-1){booking.env.b_this_url=booking.env.b_this_url.replace(";"+d,"");
booking.env.b_this_url=booking.env.b_this_url.replace(d,"")
}c.checking_in=window.setInterval(function(){if((c.tp_window&&c.tp_window.closed)||!c.tp_window){$("#login_loading").hide();
$("#page_login_loading").hide();
window.clearInterval(c.checking_in);
c.tp_window=null;
c.cur_state="CLOSED"
}},1000);
c.cur_state="OPENED";
if(c.tp_window){c.tp_window.focus()
}}}return false
})
}};
booking[sNSStartup].merge_mybooking_myaccount={priority:9,old_pin_shown:false,init:function(){var c=this;
$("#user_pin_link").click(function(){$("#foldout_error").hide();
$("#old_pin_login").css({display:"block",top:"0px"});
$("#existing_user_login .login_right").hide();
if($(".b_msie_8").length){$("#old_pin_login").css({left:"240px"})
}else{$("#old_pin_login").animate({left:"240px"})
}c.old_pin_show=true;
return false
});
$("#new_user").click(function(){c.newUserOpen(true,this)
});
$("#existing_user").click(function(){c.newUserOpen(false,this)
});
$("#old_pin_login a").click(function(){$("#foldout_error").hide();
$("#old_pin_login").css({top:"0px"});
$("#old_pin_login").animate({left:"500px"},function(){$("#old_pin_login").css("display","none")
});
c.old_pin_show=false;
return false
});
if(booking.env.b_is_on_signup_page){booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(true,document.getElementById("account_new_user"))
}},newUserOpen:function(c,e){var d=$(e).parents(".user_login_form");
if(this.old_pin_show){$("#old_pin_login",d).hide();
$("#existing_user_login .login_right",d).show()
}if(c){$("#existing_user_login, #existing_user_signin",d).hide();
$("#foldout_signup, #new_user_signup",d).show();
$("#existing_user, #account_existing_user",d).removeClass("active");
$("#new_user, #account_new_user",d).addClass("active");
booking[sNSStartup].new_personal_menu.recheckHeight()
}else{$("#existing_user_login, #existing_user_signin",d).show();
$("#foldout_signup, #new_user_signup",d).hide();
$("#existing_user, #account_existing_user",d).addClass("active");
$("#new_user, #account_new_user",d).removeClass("active");
booking[sNSStartup].new_personal_menu.recheckHeight()
}$(".better_error").hide();
$("#old_pin_login").css("top","0px")
}};
booking[sNSStartup].welcome_user={priority:9,old_pin_shown:false,init:function(){$("#welcome_login").click(function(){booking[sNSStartup].new_personal_menu.openSelect("current_account");
booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(false,this.id);
return false
});
$("#welcome_signup").click(function(){booking[sNSStartup].new_personal_menu.openSelect("current_account");
booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(true,this.id);
return false
})
}};
booking[sNSStartup].faq_login_foldout={priority:9,init:function(){if(booking.env.b_action=="general"&&booking.env.auth_level=="0"){$(".open_top_login").click(function(){booking[sNSStartup].new_personal_menu.openSelect("current_account");
booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(false,this.id);
$("body").scrollTo({top:0,left:0},500);
return false
})
}}};
booking[sNSStartupLoad].message_box={priority:9,init:function(){$("#self_change1 .messageBox").click(function(e){var c=$(this).children("a").attr("href");
var d=/(?:\b)tmpl[\=]docs[\\\/]customer_service(?:\b)/i;
if(c&&(c!="#")&&(!d.test(c))){location.href=$(this).children("a").attr("href")
}return false
});
$("#isDifferent").fadeIn()
}};
booking.newsLanding=(function(){var c=function(){$(".location_dropdowns select").live("focus",function(){var d=$(this).find(":selected").text();
$(this).attr("oldValue",d)
});
$(".location_dropdowns select").change(function(){myid=$(this).attr("id");
myvalue=$(this).find(":selected").val();
mytext=$(this).find(":selected").text();
selected=$(this).attr("oldValue");
if(myvalue.length>0){if(myid=="fd_title_countryname"){track_string=booking.env.b_lang+" | Countries | "+mytext
}else{if(myid=="fd_title_regionname"){track_string=booking.env.b_lang+" | Regions | "+mytext
}else{if(myid=="fd_title_cityname"){track_string=booking.env.b_lang+" | Cities | "+mytext
}}}}else{if(myid=="fd_title_countryname"){track_string=booking.env.b_lang+" | Countries Remove | "+selected
}else{if(myid=="fd_title_regionname"){track_string=booking.env.b_lang+" | Regions Remove | "+selected
}else{if(myid=="fd_title_cityname"){track_string=booking.env.b_lang+" | Cities Remove | "+selected
}}}}booking.google.trackEvent(booking.google.clickTracker,"Dealfinder",track_string);
this.form.submit()
});
$("#b_sortbox select").change(function(){booking.google.trackEvent(booking.google.clickTracker,"Dealfinder","df_dropdown_sorting");
this.form.submit()
});
$("#checkin-flexible-form").submit(function(){var d=$("#b_fd_checkin_date").val();
var e=$("#fd_flex").attr("checked");
if(d!="undefined"){if(e){track_string=booking.env.b_lang+" | Date Select | Flexible"
}else{track_string=booking.env.b_lang+" | Date Select"
}}else{track_string=booking.env.b_lang+" | Date Remove | "
}booking.google.trackEvent(booking.google.clickTracker,"Dealfinder",track_string)
})
};
return{init:c}
}());
booking[sNSStartup].newsletterSignup={priority:8,init:function(){$(".subscriptionbox").click(function(){booking[sNSStartup].lightbox.show($("#subsciber_firstname_lightbox"),{customWrapperClassName:"subscribername-lightbox"});
return false
});
if(booking.env.b_show_newsletter_popup){booking[sNSStartup].lightbox.show($("#subsciber_firstname_lightbox"),{customWrapperClassName:"subscribername-lightbox"})
}if(booking.env.b_show_solicitation_popup){if(booking.env.b_show_success_popup_content){booking[sNSStartup].lightbox.show($("#solicitation_feedback_success"),{customWrapperClassName:"solicitation-lightbox"});
return false
}else{if(booking.env.b_show_error_popup_content){booking[sNSStartup].lightbox.show($("#solicitation_feedback_error"),{customWrapperClassName:"solicitation-lightbox"});
return false
}}}}};
booking[sNSStartup].newsletterTutorials={priority:8,init:function(){var e=1;
var f=this;
if(booking.env.tutorialpopup){if(b_cookie&&(b_cookie.showthistutorial!=booking.env.tutorialpopup)){var c=booking.env.tutorialpopup;
var d=$(".tutorialwrapper_"+c).attr("id");
f.loadPopups("#tutorial_dyk_"+c+"_s"+e,c,e)
}}$("#tutorial_dyk_02_s1 a.fd_next").click(function(){$("#show_reviews_tab").click()
});
$("a.fd_close").click(function(){f.closeTutorial(this)
});
$("a.fd_next").click(function(){f.nextPopup(this,d,c)
})
},loadPopups:function(g,j,h){var c=this;
var k=$("#tutorial_dyk_"+j+"_s"+h).attr("rel");
if(k){var f=new c.relativePosition(k,true,false);
var d=$(g).attr("rev");
var e=$(g).width();
var m=new c.getRelInlineCss(g);
if(m.rgValues){$(this).css({top:"",right:"",bottom:"",left:""})
}if(d!="undefined"){if(d=="right"){var l={top:(f.relDivTop+m.rgTop)+"px",left:(f.relDivSide+m.rgLeft)+"px"}
}else{if(d=="left"){var l={top:(f.relDivTop+m.rgTop)+"px",left:(f.relDivSide-e+m.rgLeft)+"px"}
}}}if(f.scrollToDiv&&h==1){$("html, body").delay(500).animate({scrollTop:(f.relDivTop-50)},1000,function(){$(g).css(l).fadeIn(300)
})
}else{$(g).delay(300).css(l).fadeIn(500)
}}else{$(g).delay(300).fadeIn(500)
}},relativePosition:function(c){var d=$("#"+c).offset()||{};
this.relDivTop=d.top;
var f=d.left;
var e=$("#bodyconstraint-inner").offset().left;
this.relDivSide=(f-e);
if(this.relDivTop>200){this.scrollToDiv=true
}else{this.scrollToDiv=false
}},getRelInlineCss:function(c){this.rgTop=parseInt($(c).css("top").replace("px",""))||0;
this.rgLeft=parseInt($(c).css("left").replace("px",""))||0;
if(this.rgLeft==0&&this.rgTop){this.rgValues=false
}else{this.rgValues=true
}},nextPopup:function(c,g,d){var h=$(c).attr("id").split("nextstep_")[1];
var e=(parseInt(h)+1);
var f="#"+g+"_s"+h;
$(f).fadeOut(300);
this.loadPopups("#tutorial_dyk_"+d+"_s"+e,d,e)
},closeTutorial:function(c){$(c).closest(".tutorial_dyk").fadeOut(300);
b_cookie=b_cookie||{};
b_cookie.showthistutorial=booking.env.tutorialpopup;
if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:booking.env.b_domain_end})
}return false
}};
booking[sNSStartup].accounts_for_everybody={priority:9,passwordFields:0,passwordChar:"",maskPass:"",isAdding:false,keyCounter:0,init:function(){var c=this;
$(".passwd_strength").each(function(){var e='<div class="pwd_strength"><div class="strength"></div></div><span class="jq_tooltip strength_text" title="'+booking.env.b_passwd_tooltip+'" rel="300">&nbsp;</span>';
$(this).after(e);
var f=parseInt($(this).css("margin-left").replace("px",""))+1;
$(".pwd_strength",this.parentNode).css("margin-left",f+"px");
var d=this;
$(".pwd_strength",this.parentNode).click(function(){$(d).focus()
});
$(".pwd_strength",this.parentNode).mouseenter(function(){$(d).addClass("hoverText")
});
$(".pwd_strength",this.parentNode).mouseleave(function(){$(d).removeClass("hoverText")
})
});
$(".passwd_strength").focus(function(){var e=parseInt($(this).css("margin-left").replace("px",""));
var d=(booking.env.b_browser=="safari")?2:e+2;
$(".pwd_strength",this.parentNode).css("margin-left",d+"px")
});
$(".passwd_strength").blur(function(){var d=parseInt($(this).css("margin-left").replace("px",""))+1;
$(".pwd_strength",this.parentNode).css("margin-left",d+"px")
});
$(".passwd_strength").keyup(function(){c.keyCounter++;
oThis=this;
var d=c.keyCounter;
setTimeout(function(){c.calculateStrength(oThis,d)
},400)
});
if($("td.pass_fix").length){$("#new_pass").blur(function(){var d=$(this).parents("tr").get(0);
if($(this).val()!=""){$("th span",d).removeClass("val-no");
$("th span",d).addClass("val-yes")
}else{$("th span",d).removeClass("val-yes");
$("th span",d).addClass("val-no")
}});
$("#confirm_new_pass").blur(function(){var d=$("#new_pass").val();
var e=$(this).parents("tr").get(0);
if($(this).val()!=""&&$(this).val()==d){$("th span",e).removeClass("val-no");
$("th span",e).addClass("val-yes")
}else{$("th span",e).removeClass("val-yes");
$("th span",e).addClass("val-no")
}})
}},calculateStrength:function(o,e){if(this.keyCounter==e){var g=$(o).val();
var f=$(".pwd_strength .strength",o.parentNode);
if(f.length){var q=0,n=0,j=0,h=0,c=0,d=g.length,r,m;
if(d>0){q=parseInt(d/2.5);
for(var l=0;
l<d;
l++){var p="!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_±¤";
var k="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(!isNaN(g.charAt(l))){n=n+1
}if(isNaN(g.charAt(l))){j=1
}if(p.indexOf(g.charAt(l))>-1){h=h+2
}if(k.indexOf(g.charAt(l))>-1){c=c+1
}}if(h>4){h=4
}if(n>2){n=2
}if(c>2){c=2
}if(j!=0){q+=n
}q+=h;
q+=c;
if(q>10){q=10
}}r=26;
if($(o).parents("#foldout_signup").length||$(o).parents("#registration_id").length){r=18
}m=r*q;
strengthMsgIndex=parseInt((q/2)+1);
if(d<8){f.addClass("strength_invalid");
if(m===0){m=r
}else{if(m>3){m=3*r
}}strengthMsgIndex=0
}else{f.removeClass("strength_invalid")
}f.animate({width:m+"px"});
if(g!=""){$(".strength_text",o.parentNode).text(booking.env.b_password_strength_msg[strengthMsgIndex])
}else{$(".strength_text",o.parentNode).text("")
}}}},togglePasswd:function(h){var f=$(h).parents("form").get(0);
$(".textual_passwd",f).toggle();
var g=$(".textual_passwd",f).get(0);
var d=$(g).css("display");
var c=$(g).attr("name");
c=c.split("textpwd_")[1];
var e=$("input[name='"+c+"']",f).get(0);
if(d!="none"){this.fixCursorPosition(null,g);
if(!$("td.pass_fix").length){$(e).addClass("focusText")
}}else{$(e).removeClass("focusText");
this.fixCursorPosition(null,e)
}this.syncPassFields($(g).get(0),true)
},fixCursorPosition:function(f,e){if(f!=null){var d=document.getElementById(f)
}else{var d=e
}d.focus();
var g=$(d).val().length;
if(g>0){if("selectionStart" in d){d.selectionStart=g;
d.focus()
}else{var c=document.selection.createRange();
c.moveStart("character",g);
c.moveEnd("character",0);
c.select()
}}},syncPassFieldsMask:function(h){var f=this;
var d="textpwd_"+$(h).attr("name");
var c=$("input."+d,h.parentNode).get(0);
var e=$(h).val();
var j="";
var k="";
f.maskPass="";
for(var g=0;
g<e.length;
g++){var l=e.length-1;
if(g>=e.length-1){j+=e[g];
f.maskPass+=this.passwordChar
}else{j+=this.passwordChar;
f.maskPass+=this.passwordChar
}}$(c).val(j);
setTimeout(function(){f.syncPassFieldsFullMask(c)
},1000)
},syncPassFieldsFullMask:function(c){$(c).val(this.maskPass)
},syncPassFields:function(l,g){var o=false;
var m=null;
var f=this;
if(g){var e=$(l).attr("name");
e=e.split("textpwd_")[1];
var c=$("input[name='"+e+"']",l.parentNode.parentNode).get(0);
var n=$(c).attr("id");
if(n.indexOf("confirm_")>-1){var k="#"+n.replace("confirm_","");
if(!$(k).length){k="#"+n.replace("_confirm","")
}o=true
}else{var k="#confirm_"+n
}if($(k).length){m=$(k).get(0);
$(m).val($(l).val());
var d=$(m).attr("name");
d="textpwd_"+d;
var j=$("input."+d,m.parentNode.parentNode).get(0);
$(j).val($(l).val())
}}else{var e="textpwd_"+$(l).attr("name");
var c=$("input."+e,l.parentNode).get(0)
}$(c).val($(l).val());
if(g){if(o){if($(m).hasClass("passwd_strength")){this.keyCounter++;
var h=this.keyCounter;
setTimeout(function(){f.calculateStrength(m,h)
},400)
}}else{if($(c).hasClass("passwd_strength")){this.keyCounter++;
var h=this.keyCounter;
setTimeout(function(){f.calculateStrength(m,h)
},400)
}}}else{if($(l).hasClass("passwd_strength")){this.keyCounter++;
var h=this.keyCounter;
setTimeout(function(){f.calculateStrength(m,h)
},400)
}}}};
(function(d,c,e){if(!e){return
}var f=function(l){var h,k,g,j=e.browser.msie;
for(h=0,k=l.length;
h<k;
h+=1){if(j){new Image().src=l[h];
continue
}g=c.createElement("object");
g.data=l[h];
if(j){g.width=1;
g.height=1;
g.style.visibility="hidden";
g.type="text/plain"
}else{g.width=0;
g.height=0
}c.body.appendChild(g)
}};
e(d).load(function(){var g=e(c.body),j="mousemove keyup scroll mousedown",n=e("[data-preload-assets]"),l=e.cookie("has_preloaded"),o=0,k=function(){g.unbind(j,h);
clearTimeout(o);
f(n.data("preload-assets"));
e.cookie&&e.cookie("has_preloaded",1,{expires:1,path:"/"})
},m=function(){o=setTimeout(k,10000)
},h=function(){clearTimeout(o);
m()
};
if(l){return
}if(n.length){setTimeout(function(){m();
g.bind(j,h)
},10000)
}})
}(window,window.document,window.jQuery));
booking[sNSStartup].rate_guarantee={priority:9,init:function(){var e=["#rate_guarantee a","#rate_guaranteed","#wrap-hotelpage-top .best_rate_guarantee a","table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a","a.usps_rate_guarantee_link","#rate_guaranteev2 a","#ratelogo a","#terms_rateguarantee","a#guarantee_terms","#rates_feedback_invite a.jq_tooltip",".rate_guarantee_window_opener"].join(",");
var d=["status=1","toolbar=0","menubar=0","width=450","height=550","scrollbars=1"].join(",");
var c=function(){window.open(this.href,"RateGuarantee",d);
return false
};
if($.fn.live!==void 0){$(e).live("click",c)
}else{$(e).on("click",c)
}return true
}};
booking.ensureNamespaceExists(sNSStartup);
booking[sNSStartup].search_engine_partitioned_disambiguation_page={priority:9,init:function(){$(".disambBlockHeader").click(function(){var d=$(this),c=$("#"+d.attr("data-results"));
if(c.hasClass("disambBlockShown")){c.slideUp().removeClass("disambBlockShown")
}else{c.slideDown().addClass("disambBlockShown")
}return false
})
}};
B[sNSStartup]["searchbox_advanced_search_widget"]=(function(f,d){f.Search=f.Search||{};
f.Search.AdvancedSearchWidget=function(g,h){this.initialize.apply(this,[].slice.call(arguments,0));
this.initEvents();
this.onInit()
};
f.Search.AdvancedSearchWidget.prototype=new f.Search.AbstractWidget();
f.Search.AdvancedSearchWidget.prototype.ENABLED_CLASS="b-form-advanced-search_enabled";
f.Search.AdvancedSearchWidget.prototype.DISABLED_CLASS="b-form-advanced-search_disabled";
f.Search.AdvancedSearchWidget.prototype.initialize=function(g,h){this.$element=g;
this.$toggler=this.$element.find(".b_advanced_search_toggler");
this.$togglerIcon=this.$toggler.find("i");
this.$nfltInputs=this.$element.find('input[name!="pr_id"], select');
this.setOptions(h);
if(this.$element.find(":checked").length){this.enable()
}else{this.disable()
}};
f.Search.AdvancedSearchWidget.prototype.initEvents=function(){this.$element.bind("change",d.proxy(this.onChange,this));
this.$toggler.bind("click",d.proxy(this.onTogglerClick,this))
};
f.Search.AdvancedSearchWidget.prototype.enable=function(){if(this.enabled){return
}this.enabled=true;
this.render();
if(typeof this.options.onEnabled==="function"){this.options.onEnabled.call(this)
}};
f.Search.AdvancedSearchWidget.prototype.disable=function(){if(!this.enabled){return
}this.enabled=false;
this.render();
if(typeof this.options.onDisabled==="function"){this.options.onDisabled.call(this)
}};
f.Search.AdvancedSearchWidget.prototype.onChange=function(){if(typeof this.options.onChange==="function"){this.options.onChange.call(this,this.getConfig())
}};
f.Search.AdvancedSearchWidget.prototype.onTogglerClick=function(g){g.preventDefault();
if(this.enabled){this.disable()
}else{this.enable()
}};
f.Search.AdvancedSearchWidget.prototype.getConfig=function(){return d.map(this.$nfltInputs,function(j){var g=d(j),h;
if(g.is(":checked")){h=g.data("param")
}return h
}).join(";")
};
f.Search.AdvancedSearchWidget.prototype.onExternalEventEnabled=function(){this.enable()
};
f.Search.AdvancedSearchWidget.prototype.onExternalEventDisabled=function(){this.disable()
};
f.Search.AdvancedSearchWidget.prototype.trigger=function(g,h){if(g==="advancedSearchEnabled"&&typeof this.onExternalEventEnabled==="function"){this.onExternalEventEnabled.apply(this,[].slice.call(arguments,1))
}if(g==="advancedSearchDisabled"&&typeof this.onExternalEventDisabled==="function"){this.onExternalEventDisabled.apply(this,[].slice.call(arguments,1))
}};
f.Search.AdvancedSearchWidget.prototype.render=function(){if(this.enabled){this.$togglerIcon.addClass("up_dark").removeClass("right_dark");
this.$element.removeClass(this.DISABLED_CLASS).addClass(this.ENABLED_CLASS)
}else{this.$togglerIcon.addClass("right_dark").removeClass("up_dark");
this.$element.addClass(this.DISABLED_CLASS).removeClass(this.ENABLED_CLASS)
}};
function c(h,g){if(d.fn[h]){throw"Jquery plugin "+h+"is already defined"
}d.fn[h]=(function(j,k){var l=[];
return function(p){if(p==="notify"){var m=arguments[1],n=arguments[2];
for(var o=0;
o<l.length;
o++){l[o].trigger(m,n)
}}return this.each(function(){var t=j,r=d(this),u=r.data(),q=u[t];
if(!q){q=new k(r,p);
r.data(t,q);
l.push(q)
}else{q.setOptions(p)
}})
}
}(h,g));
return d.fn[h]
}f.Search.createWidgetPlugin("advancedSearch",f.Search.AdvancedSearchWidget);
function e(){d(".b-form-advanced-search").advancedSearch({onEnabled:function(){f.eventEmitter.trigger(f.Search.Events.ADVANCED_SEARCH_ENABLED);
f.Search.tracker.trackEvent(f.Search.TrackingEvents.ADVANCED_SEARCH_ENABLED)
},onDisabled:function(){f.eventEmitter.trigger(f.Search.Events.ADVANCED_SEARCH_DISABLED);
f.Search.tracker.trackEvent(f.Search.TrackingEvents.ADVANCED_SEARCH_DISABLED)
},onChange:function(g){f.Search.tracker.trackEvent(f.Search.TrackingEvents.ADVANCED_SEARCH_CHANGED);
d("#nflt").val(encodeURIComponent(g))
}});
f.eventEmitter.bind(f.Search.Events.ADVANCED_SEARCH_ENABLED,function(h,g){d.fn.advancedSearch("notify","advancedSearchEnabled",g)
});
f.eventEmitter.bind(f.Search.Events.ADVANCED_SEARCH_DISABLED,function(h,g){d.fn.advancedSearch("notify","advancedSearchDisabled",g)
})
}return{init:e}
}(B,$));
B[sNSStartup]["searchbox_dates_widget"]=(function(d,j){function c(n){var p="b-form__dates_flexible-mode",o=n.find(".b-form-flexible-dates__toggler input");
function q(){var r=o.get(0);
if(r&&r.checked){d.search.dates().setMode("no-dates");
d.Search.tracker.track(d.Search.TrackingEvents.NO_DATES_SELECTED)
}else{d.search.dates().setMode("regular")
}}o.bind("change",q).trigger("change");
d.eventEmitter.bind(d.Search.Events.DATE_MODE_CHANGED,function(t,r){if(r.mode===d.Search.DateModes.REGULAR){n.removeClass(p);
o.removeAttr("checked")
}else{if(r.mode===d.Search.DateModes.NODATES){n.addClass(p);
o.attr("checked","cheked")
}}})
}function f(r){var t=r.find(".b-form-flexible-dates__toggler input"),p=r.find("[name=interval_of_time]"),q=r.find("[name=flex_checkin_year_month]");
function n(w,u){if(u&&u.value){var x="b-form-flexible-dates__controls_duration-selected";
if(u.value!=="any"){r.toggleClass(x,true);
d.search.dates().setMode("flexible");
d.Search.tracker.track(d.Search.TrackingEvents.FLEXIBLE_INTERVAL_SELECTED)
}else{r.toggleClass(x,false);
d.search.flexibleDates().monthYear("any");
d.search.dates().setMode("no-dates")
}p.val(u.value)
}}function o(x,w){if(w&&w.value){var u;
if(w.value.type=="month"){u=w.value.toString()
}else{u="any"
}if(u!=="any"){d.Search.tracker.track(d.Search.TrackingEvents.FLEXIBLE_MONTH_SELECTED)
}q.val(u)
}}d.eventEmitter.bind(d.Search.Events.FLEXIBLE_INTERVAL_CHANGED,n);
p.change(function(){if(t.attr("checked")){d.search.flexibleDates().interval(j(this).val())
}}).trigger("change");
d.eventEmitter.bind(d.Search.Events.FLEXIBLE_MONTHYEAR_CHANGED,o);
q.change(function(){if(t.attr("checked")){d.search.flexibleDates().monthYear(j(this).val())
}}).trigger("change")
}function e(n){d.Search.validators.create({type:"dates",name:"dates_are_not_empty",test:function(){var p=d.search.dates("checkin"),o=d.search.dates("checkout");
if(d.search.dates().mode!=="regular"){return false
}return p.type!=="valid"&&o.type!=="valid"
},fail:function(){return booking.env.to_check_availability_please_enter_your_dates_of_stay
}});
d.Search.validators.create({type:"dates",name:"checkin_date_is_selected",test:function(){if(d.search.dates().mode!=="regular"){return false
}var p=d.search.dates("checkin"),o=d.search.dates("checkout");
if(p.type!=="valid"&&o.type!=="valid"){return false
}return p.type!=="valid"
},fail:function(){return booking.env.please_enter_your_check_in_date
}});
d.Search.validators.create({type:"dates",name:"checkout_date_is_selected",test:function(){if(d.search.dates().mode!=="regular"){return false
}var p=d.search.dates("checkin"),o=d.search.dates("checkout");
if(p.type!=="valid"&&o.type!=="valid"){return false
}return o.type!=="valid"
},fail:function(){return booking.env.please_enter_your_check_out_date
}});
d.Search.validators.create({type:"dates",name:"duration_is_less_than_30_days",test:function(){if(d.search.dates().mode!=="regular"){return false
}var p=d.search.dates("checkin"),o=d.search.dates("checkout");
if(p.type!=="valid"||o.type!=="valid"){return false
}return Math.abs(o-p)>30
},fail:function(){return booking.env.error.checkout_date_more_than_30_days_after_checkin.name
}});
d.Search.validators.create({type:"dates",name:"checkin_is_earlier_than_checkout",test:function(){if(d.search.dates().mode!=="regular"){return false
}var p=d.search.dates("checkin"),o=d.search.dates("checkout");
if(p.type!=="valid"||o.type!=="valid"){return false
}if(booking.track.getVariant("BUVSceTDERXJLeAcFRSHT")){return p>o
}else{return p>=o
}},fail:function(){return booking.env.error.checkout_date_not_after_checkin_date.name
}});
if(d.track.getVariant("bLNeLSfONUPXe")){d.Search.validators.create({type:"dates",name:"duration_month_is_empty",test:function(){if(d.search.dates().mode!=="flexible"){return false
}var o=n.find("[name=flex_checkin_year_month]");
var p=o.val();
if(p==="any"){return true
}return false
},fail:function(){return d.env.sb_flexi_srch_month_validation
}})
}d.eventEmitter.bind(d.Search.Events.DATE_INVALID,function(t,p){var r=n.find(".b-form-group__error-messages"),o=p.validators,q;
if(!o){return
}q=d.tools.object.reduce(o,function(u,w){if(w.status==="fail"&&w.message){u.push(w.message)
}return u
},[]);
if(q.length>0){n.addClass("b-form-group_error");
r.html('<ul class="b-form-group__error-messages_list"><li class="b-form-group__error-messages_list-item">'+q.join('</li><li class="b-form-group__error-messages_list-item">')+"</li></ul>");
d.track.exp("BUYWTJUWEVDLfOFYBLcOHT")
}});
d.eventEmitter.bind(d.Search.Events.DATE_VALID,function(){n.removeClass("b-form-group_error")
});
d.eventEmitter.bind(d.Search.Events.DATE_MODE_CHANGED,function(p,o){d.search.dates().validate("reset");
d.Search.datePickerController.notifyAll(o.mode==="regular"?"enable":"disable");
if(o.mode==d.Search.DateModes.NODATES){d.track.exp("bLNeLSfONUPXe");
n.find("[name=interval_of_time]").trigger("change")
}});
j("#frm").bind("submit",function(p){var q=d.search.dates();
var o=true;
if(q.mode===d.Search.DateModes.FLEXIBLE&&d.track.getVariant("bLNeLSfONUPXe")){o=false
}if(o&&q.mode!==d.Search.DateModes.NODATES&&q.checkin.type!=="valid"&&q.checkout.type!=="valid"){q.setMode(d.Search.DateModes.NODATES)
}return q.validate()
});
j("#hotelpage_availform").bind("submit",function(q){try{var u=d.search.dates().validate();
var t=j(this);
var p="";
var o;
if(!u){if(!t.hasClass("hp_lb_onsr")){fminit("hotelpage_availform")
}t.addClass("has-date-validation-error-exp");
o=d.search.dates().validationResults();
if(o){p=d.tools.object.reduce(o,function(w,x){if(x.status==="fail"&&x.message){w+='<span class="exclamation exclamation_daterrrors">&nbsp;!&nbsp;</span><p class="error errors_dateerros">'+x.message+"</p>"
}return w
},"")
}if(p){t.find(".dateerrors").html(p);
d.track.exp("BUfXSZYNIfNSXKFKe")
}}else{t.removeClass("has-date-validation-error-exp");
t.find(".errors_dateerros,.exclamation_daterrrors").hide()
}}catch(r){window.onerror("dates_validation_in_availability_form",window.location)
}return u
})
}function k(p,o){if(!p){return
}var n=new Date(p.year,p.month,p.date+o);
return{year:n.getFullYear(),month:n.getMonth(),date:n.getDate()}
}function g(n,x){var u=x.type,t=d.Search.datePickerController.all(),q=d.search.dates(x.type),w,o;
if(!(u==="checkin"||u==="checkout")){return
}if(!(q.type==="valid"||q.type==="month")){return
}for(var p=0;
p<t.length;
p++){if(t[p].getOption("type")===u){t[p].trigger("dateSelected",q)
}}w=d.search.dates("checkin");
o=d.search.dates("checkout");
if(u==="checkin"){if(o.type==="invalid"){o=d.search.dates("checkout",k(w,1))
}else{if(w>=o){o=d.search.dates("checkout",k(w,1))
}}}if(u==="checkout"){if(w.type!=="valid"){w=d.search.dates("checkin",k(d.search.dates("checkout"),-1))
}}l();
try{if(u==="checkin"&&w.type==="valid"){d[sNSStartup].calendar.syncDates(false,w.date,w.month+1,w.year,false)
}if(u==="checkout"&&o.type==="valid"){d[sNSStartup].calendar.syncDates(true,o.date,o.month+1,o.year,false)
}}catch(r){window.onerror("old_calendar_api_method_does_not_exist")
}}function l(){var q,p,o,n;
p=d.search.dates(),o=p&&p.checkin,n=p&&p.checkout;
if((n&&o)&&(n.valueOf()>o.valueOf())){q=n.valueOf()-o.valueOf();
j(".b-form-number-of-nights").html(d.jstmpl("searchbox_number_of_nights").render({b_interval:q})).removeClass("b-form-number-of-nights_hidden");
j(".b-form-flexible-dates").addClass("b-form-group_hidden")
}else{j(".b-form-number-of-nights").html("").addClass("b-form-number-of-nights_hidden");
j(".b-form-flexible-dates").removeClass("b-form-group_hidden")
}}function h(n){n.find(".b-date-selector").dateSelector();
d.eventEmitter.bind(d.Search.Events.DATE_CHANGED,g)
}function m(){if(d.env.b_is_villa_site){return
}var n=j(".b-form__dates");
c(n);
f(n);
h(n);
e(n)
}return{init:m}
}(B,$));
B.Search.tracker={track:function(e,d,f){var c=["Searchbox",B.env.b_action,"["+e+"] "+d,f];
if(B.track.getVariant("POKZDDUPDIUHe")){console.log.apply(console,c)
}B.google.trackEvent.apply(B.google,c)
},trackError:function(c){if(B.track.getVariant("POKPcVDaaAPPeae")){return this.track("error",c)
}},trackEvent:function(c){if(B.track.getVariant("POKPXQWbadPPeae")){return this.track("interaction",c)
}}};
B[sNSStartup]["sb_group_widget"]=(function(e,c){e.Search=e.Search||{};
e.Search.SPECIAL_DIGITS={"０":0,"１":1,"２":2,"３":3,"４":4,"５":5,"６":6,"７":7,"８":8,"９":9,"٠":0,"١":1,"٢":2,"٣":3,"٤":4,"٥":5,"٦":6,"٧":7,"٨":8,"٩":9,"۰":0,"۱":1,"۲":2,"۳":3,"۴":4,"۵":5,"۶":6,"۷":7,"۸":8,"۹":9};
e.Search.AbstractGroupConfigurationWidget=function(f,g){};
e.Search.AbstractGroupConfigurationWidget.prototype.initialize=function(f,g){this.$element=f;
this.setOptions(g)
};
e.Search.AbstractGroupConfigurationWidget.prototype.setOptions=function(f){if(!this.options){this.options={}
}this.options=c.extend(this.options,f)
};
e.Search.AbstractGroupConfigurationWidget.prototype.initEvents=function(){throw"Abstract intiEvents method should be implemented in widget instances"
};
e.Search.AbstractGroupConfigurationWidget.prototype.onExternalEventConfigChanged=function(){throw"Abstract onExternalEventConfigChanged method should be implemented in widget instances"
};
e.Search.AbstractGroupConfigurationWidget.prototype.showErrorMessages=function(j){this.$errorContainer=this.$errorContainer||this.$element.find(".b-form-group__error-messages");
var g=c("<ul></ul>",{className:"b-form-group__error-messages_list"});
var f=c("<li></li>",{className:"b-form-group__error-messages_list-item"});
for(var h=0;
h<j.length;
h++){g.append(f.clone().html(j[h]))
}this.$errorContainer.empty().append(g)
};
e.Search.AbstractGroupConfigurationWidget.prototype.hideErrorMessages=function(){this.$errorContainer=this.$errorContainer||this.$element.find(".b-form-group__error-messages");
this.$errorContainer.empty()
};
e.Search.AbstractGroupConfigurationWidget.prototype.getConfig=function(){throw"Abstract getConfig method should be implemented in widget instances";
return{}
};
e.Search.AbstractGroupConfigurationWidget.prototype.trigger=function(f,g){if(f==="groupChanged"&&typeof this.onExternalEventConfigChanged==="function"){this.onExternalEventConfigChanged.apply(this,[].slice.call(arguments,1))
}if(f==="groupModeChanged"&&typeof this.onExternalEventModeChanged==="function"){this.onExternalEventModeChanged.apply(this,[].slice.call(arguments,1))
}if(f==="groupInvalid"&&typeof this.onExternalEventGroupInvalid==="function"){this.onExternalEventGroupInvalid.apply(this,[].slice.call(arguments,1))
}if(f==="groupValid"&&typeof this.onExternalEventGroupValid==="function"){this.onExternalEventGroupValid.apply(this,[].slice.call(arguments,1))
}};
e.Search.AbstractGroupConfigurationWidget.prototype.onInit=function(){var f=this;
if(typeof this.options.onInit==="function"){window.setTimeout(function(){f.options.onInit.call(f,f.getConfig())
},10)
}};
e.Search.AbstractGroupConfigurationWidget.prototype.onChange=function(){if(typeof this.options.onChange==="function"){this.options.onChange.call(this,this.getConfig())
}};
e.Search.AbstractGroupConfigurationWidget.prototype.DISABLED_CLASS="disabled";
e.Search.AbstractGroupConfigurationWidget.prototype.hide=function(){this.$element.toggleClass(this.DISABLED_CLASS,true)
};
e.Search.AbstractGroupConfigurationWidget.prototype.show=function(){this.$element.toggleClass(this.DISABLED_CLASS,false)
};
e.Search.PredefinedGroupSelector=function(f,g){this.initialize.apply(this,[].slice.call(arguments,0));
this.initEvents();
this.onInit()
};
e.Search.PredefinedGroupSelector.prototype=new e.Search.AbstractGroupConfigurationWidget();
e.Search.PredefinedGroupSelector.prototype.initialize=function(g,h){var j={},f,k;
this.$element=g;
this.$selector=g.find("select");
this.setOptions(h);
this.$selector.find("option").each(function(l,m){var o=c(m),n=e.Search.createGroup(o.data());
j[n]=m;
if(n.type==="more_options"){f=m
}if(o.is(":selected")){k=n
}});
this.defaultConfigurationOption=f;
this.groupConfigurationOptions=j;
this.selectedConfiguration=k
};
e.Search.PredefinedGroupSelector.prototype.initEvents=function(){this.$selector.bind("change",c.proxy(this.onChange,this))
};
e.Search.PredefinedGroupSelector.prototype.onChange=function(g){var f=this.getConfig();
if(this.selectedConfiguration.valueOf()!==f.valueOf()){this.selectConfiguration(f);
if(typeof this.options.onChange==="function"){this.options.onChange.call(this,f)
}}};
e.Search.PredefinedGroupSelector.prototype.selectConfiguration=function(f){if(this.groupConfigurationOptions[f]){this.groupConfigurationOptions[f].setAttribute("selected","selected");
this.selectedConfiguration=f
}else{this.selectedConfiguration=false;
this.defaultConfigurationOption.setAttribute("selected","selected")
}};
e.Search.PredefinedGroupSelector.prototype.onExternalEventConfigChanged=function(f){if(this.selectedConfiguration.valueOf()===f.valueOf()){return
}this.selectConfiguration(f)
};
e.Search.PredefinedGroupSelector.prototype.getConfig=function(){var g=this.$selector.get(0),h=c(g.options[g.selectedIndex]),f=this.parseOption(h);
return f
};
e.Search.PredefinedGroupSelector.prototype.parseOption=function(h){var g=h.data(),f=e.Search.createGroup(g);
return f
};
e.Search.CustomGroupSelector=function(f,g){this.$element=f;
this.setOptions(g);
this.$adultsSelector=f.find("select[name=group_adults]");
this.$roomsSelector=f.find("select[name=no_rooms]");
this.$childrenSelector=f.find("select[name=group_children]");
this.$element.delegate("select[name=group_adults],select[name=no_rooms],select[name=group_children]","change",c.proxy(this.onChange,this));
this.onInit()
};
e.Search.CustomGroupSelector.prototype=new e.Search.AbstractGroupConfigurationWidget();
e.Search.CustomGroupSelector.prototype.DISABLED_CLASS="b-form-custom-group_disabled";
e.Search.CustomGroupSelector.prototype.getConfig=function(){var g=this.$adultsSelector.val(),j=this.$roomsSelector.val(),h=this.$childrenSelector.val(),f={};
if(g&&!isNaN(parseInt(g,10))){f.adults=parseInt(g,10)
}if(j&&!isNaN(parseInt(j,10))){f.rooms=parseInt(j,10)
}if(h&&!isNaN(parseInt(h,10))){f.children=parseInt(h,10)
}return f
};
e.Search.CustomGroupSelector.prototype.onChange=function(g){var f=this.getConfig();
if(typeof this.options.onChange==="function"){this.options.onChange.call(this,f)
}};
e.Search.CustomGroupSelector.prototype.onExternalEventModeChanged=function(f){if(f.mode==="basic"){this.hide()
}else{this.show()
}};
e.Search.CustomGroupSelector.prototype.onExternalEventConfigChanged=function(g){var f;
if(g.adults!==f){this.$adultsSelector.val(g.adults)
}if(g.rooms!==f){this.$roomsSelector.val(g.rooms)
}if(g.children!==f){this.$childrenSelector.val(g.children)
}if(g.type==="basic"){this.hide()
}else{this.show()
}};
e.Search.ChildrenAgesSelector=function(f,g){this.initialize.apply(this,[].slice.call(arguments,0));
this.initEvents();
this.onInit()
};
e.Search.ChildrenAgesSelector.prototype=new e.Search.AbstractGroupConfigurationWidget();
e.Search.ChildrenAgesSelector.prototype.show=function(){e.track.exp("bHVLFKWIFdCBMFHUJFIPUMC");
e.Search.AbstractGroupConfigurationWidget.prototype.show.apply(this)
};
e.Search.ChildrenAgesSelector.prototype.initialize=function(f,g){this.$element=f;
this.$inputsContainer=this.$element.find(".b-custom-element__container");
this.ages=this.getAges();
this.setOptions(g)
};
e.Search.ChildrenAgesSelector.prototype.initEvents=function(){this.$element.delegate("select[name=age]","change",c.proxy(this.onChange,this));
this.$inputsContainer.find(".b-custom-element__label").bind("click",c.proxy(this.onLabelClick,this))
};
e.Search.ChildrenAgesSelector.prototype.sanitizeInput=function(){this.getInputs().each(function(f,g){var h=g.value;
h=h.replace(/\D/g,function(j){return e.Search.SPECIAL_DIGITS.hasOwnProperty(j)?e.Search.SPECIAL_DIGITS[j]:j
});
g.value=h
})
};
e.Search.ChildrenAgesSelector.prototype.onChange=function(){this.sanitizeInput();
var f=this.getConfig();
if(typeof this.options.onChange==="function"){this.options.onChange.call(this,f)
}};
e.Search.ChildrenAgesSelector.prototype.onLabelClick=function(h){h.preventDefault();
var f=this.getInputs(),g=f.filter(function(){return this.value==""
}).first();
if(g.length){g.focus()
}else{f.first().focus()
}};
e.Search.ChildrenAgesSelector.prototype.DISABLED_CLASS="b-form-children-ages_disabled";
e.Search.ChildrenAgesSelector.prototype.onExternalEventGroupInvalid=function(f){this.showErrorMessages(f.messages);
this.$element.addClass("b-form-group_error")
};
e.Search.ChildrenAgesSelector.prototype.onExternalEventGroupValid=function(f){this.$element.removeClass("b-form-group_error");
this.hideErrorMessages(f.messages)
};
e.Search.ChildrenAgesSelector.prototype.onExternalEventConfigChanged=function(h){var j=this.getAges(),k=h.childrenAges,g;
for(var f=0;
f<k.length;
f++){if(k[f]===g){k[f]=j[f]||0
}}if(k.length===0){this.hide()
}else{if(k.length!==j.length||k.join(",")!==this.serialize()){this.render(k)
}this.show()
}};
e.Search.ChildrenAgesSelector.prototype.getInputs=function(){return this.$inputsContainer.find(".b-children-ages-configurator__element")
};
e.Search.ChildrenAgesSelector.prototype.getConfig=function(){return{childrenAges:this.getAges()}
};
e.Search.ChildrenAgesSelector.prototype.getAges=function(){var f=this.getInputs(),g=[];
f.each(function(j,h){g.push(h.value)
});
this.ages=g;
return g
};
e.Search.ChildrenAgesSelector.prototype.serialize=function(){return this.ages.join(",")
};
e.Search.ChildrenAgesSelector.prototype.render=function(l){var h,k=l.length,f,j="";
this.$inputsContainer.find(".b-children-ages-configurator__element").remove();
for(var g=0;
g<k;
g++){f=(l[g]>=0)?l[g]:"";
j+=this.renderSelector(f)
}this.$inputsContainer.append(j)
};
e.Search.ChildrenAgesSelector.prototype.renderSelector=function(f){var h='<select name="age" class="b-children-ages-configurator__element b-children-ages-configurator__element_selector">';
var f=parseInt(f,10)||0;
for(var g=0;
g<=17;
g++){h+='<option value="'+g+'" '+(g===f?"selected":"")+">"+(g===0&&e.track.getVariant("bHVLFKWIFdCBMFHUJFIPUMC")?"&lt;1":g)+"</option>"
}h+="</select>";
return h
};
e.Search.createWidgetPlugin("predefinedGroupSelector",e.Search.PredefinedGroupSelector);
e.Search.createWidgetPlugin("customGroupSelector",e.Search.CustomGroupSelector);
e.Search.createWidgetPlugin("childrenAgesSelector",e.Search.ChildrenAgesSelector);
function d(){c(".b-form-predefined-group").predefinedGroupSelector({onChange:function(f){if(f.type==="basic"){e.search.group().mode("basic")
}else{e.search.group().mode("custom")
}if(f.type!=="more_options"){e.search.group(f)
}if(f.type==="more_options"){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_ADVANCED_MODE_SELECTED)
}else{if(f.type==="basic"&&f.adults===2&&f.rooms===1&&f.children===0){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_BASIC_MODE_SELECTED)
}else{if(f.type==="basic"){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_PREDEFINED_OPTION_SELECTED)
}}}},onInit:function(f){if(f.type==="basic"){e.search.group().mode("basic")
}else{e.search.group().mode("custom")
}}});
c(".b-form-custom-group").customGroupSelector({onChange:function(g){var f=e.search.group().value;
if(f.adults!==g.adults){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_ADULTS_NUMBER_CHANGED)
}if(f.rooms!==g.rooms){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_ROOMS_NUMBER_CHANGED)
}if(f.children!==g.children){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_CHILDREN_NUMBER_CHANGED)
}e.search.group(g)
},onInit:function(f){if(e.search.group().mode()!=="basic"){this.show()
}}});
c(".b-form-children-ages").childrenAgesSelector({onChange:function(f){e.search.group("childrenAges",f.childrenAges);
e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_CHILDREN_AGE_CHANGED)
},onInit:function(f){if(f.childrenAges.length>0){this.show()
}else{this.hide()
}}});
e.eventEmitter.bind(e.Search.Events.GROUP_MODE_CHANGED,function(g,f){c.fn.predefinedGroupSelector("notify","groupModeChanged",f);
c.fn.customGroupSelector("notify","groupModeChanged",f);
c.fn.childrenAgesSelector("notify","groupModeChanged",f);
e.search.group().validate("reset")
});
e.eventEmitter.bind(e.Search.Events.GROUP_CHANGED,function(g,f){c.fn.predefinedGroupSelector("notify","groupChanged",f);
c.fn.customGroupSelector("notify","groupChanged",f);
c.fn.childrenAgesSelector("notify","groupChanged",f)
});
e.eventEmitter.bind(e.Search.Events.GROUP_INVALID,function(k,g){var f=g.validators;
var l=[],j=[];
for(var h=0;
h<f.length;
h++){if(f[h].validationParameters.invalidAges){l.push(f[h].validationParameters.invalidAges)
}if(f[h].message){j.push(f[h].message)
}}c.fn.childrenAgesSelector("notify","groupInvalid",{messages:j,agesStatus:l})
});
e.eventEmitter.bind(e.Search.Events.GROUP_VALID,function(g,f){c.fn.childrenAgesSelector("notify","groupValid",{message:"message",agesStatus:[]})
});
c("#frm").bind("submit",function(f){return e.search.group().validate()
})
}return{init:d}
}(B,$));
B[sNSExperiments]["POKZYIPfZBYGacCVNPIITKe"]=(function(m,q,p,y,g){var j="/live_av";
var e;
var d;
function x(){var F=p.promise();
var E=p.search.dates(),A=p.search.destination(),D=p.search.group(),C="";
if(A&&A.dest_type&&A.dest_id){if(A.nr_hotels<=0){F.reject("there are no properties at location, show no message")
}else{if(A.dest_type==="hotel"){F.reject("do not show availability for the single hotel")
}else{if(E.checkin&&E.checkin.type==="valid"&&E.checkout&&E.checkout.type==="valid"){if(A.dest_type==="country"){F.fulfill({b_has_dates:true,b_destination:A.name,b_number_of_properties:A.nr_hotels})
}else{C=[o(l(E)),o(h(A)),o(n(D))].join("&");
if(C.length){if(e){e.abort()
}e=g.ajax({url:j,data:C,success:function(G){if(G.hotel_avail_count&&G.hotel_avail_count>0){F.fulfill({b_has_dates:true,b_destination:A.name,b_number_of_properties:G.hotel_avail_count})
}else{F.reject("live av call returned empty result")
}},error:function(){F.reject("live av call failed")
}})
}else{F.reject("failed to serialize form parameters")
}}}else{F.fulfill({b_has_dates:false,b_destination:A.name,b_number_of_properties:A.nr_hotels})
}}}}else{F.reject("not valid parameters")
}return F
}function r(A){t(A)
}function f(C,A){z()
}function o(D){var C,A=[];
for(C in D){if(D.hasOwnProperty(C)){if(g.isArray(D[C])){A.push(C+"="+D[C].join(C+"="))
}else{A.push(C+"="+D[C])
}}}return A.join("&")
}function h(C){var A={};
if(C&&C.dest_id&&C.dest_type){A={dest_id:C.dest_id,dest_type:C.dest_type}
}else{return false
}return A
}function l(C){var A={};
if(!C){return false
}if(C.checkin&&C.checkin.type==="valid"){A.checkin=C.checkin.toString()
}else{return false
}if(C.checkout&&C.checkout.type==="valid"){A.checkout=C.checkout.toString()
}else{return false
}return A
}function n(C){var A={};
if(C&&!(C instanceof p.Search.InvalidGroup)){if(C.adults){A.group_adults=C.adults
}else{return false
}if(C.rooms){A.no_rooms=C.rooms
}else{return false
}if(C.childrenAges&&C.childrenAges.length){A.age=C.childrenAges;
A.group_children=C.childrenAges.length
}}else{return false
}return A
}function z(){d.removeClass("live-availability-message_loading").addClass("live-availability-message_hidden")
}function t(C){var A=p.jstmpl("searchbox_availability_message").render(C);
if(A){d.find(".live-availability-message__text").html(A);
d.removeClass("live-availability-message_hidden live-availability-message_loading")
}}function k(){if(p.env.b_action==="index"){p.track.exp("POKZYIPfZBYGacCVNPIITKe");
if(p.track.getVariant("POKZYIPfZBYGacCVNPIITKe")){d.addClass("live-availability-message_loading");
x().then(r,f)
}}}function c(){p.eventEmitter.bind(p.Search.Events.DATE_CHANGED,k);
p.eventEmitter.bind(p.Search.Events.GROUP_CHANGED,k);
p.eventEmitter.bind(p.Search.Events.DESTINATION_CHANGED,k)
}function w(){d=g(".js-live-availability-message");
c()
}function u(){c()
}return{init:w,initElse:u}
}(window,document,B,B.env,$));
booking[sNSExperiments]["ZePHJVAfSPNKOOLBZVCBONOWe"]={e_hash:"ZePHJVAfSPNKOOLBZVCBONOWe",is_on:false,auth_low:false,setFocus:function(c){switch(c){case"email":case undefined:$(".user_access_email:visible:first").select();
break;
case"pass":$(".user_access_password:visible:first").select();
break
}},setFocusSignIn:function(){var d=this,c=false;
$(".signin_cta").add(".user_access_section_trigger").click(function(){setTimeout(function(){c=d.checkAuthLow();
if(c){d.setFocus("pass")
}else{d.setFocus()
}},100)
})
},setFocusMyReservations:function(){if(/myreservations\./.test(window.location.pathname)){this.setFocus()
}},setFocusSignUp:function(){var c=this;
$(".user_access_signup_menu_tab").click(function(){setTimeout(function(){c.setFocus()
},50)
})
},setFocusAuthLow:function(){if(this.auth_low){$(".user_access_password").select()
}},checkAuthLow:function(){return $(".user_access_menu_auth_low_not_me:visible").length
},init:function(){this.auth_low=this.checkAuthLow();
this.is_on=!!(booking.track.getVariant(this.e_hash)-0);
booking.track.exp(this.e_hash);
if(this.is_on){this.setFocusMyReservations();
this.setFocusSignIn();
this.setFocusSignUp();
this.setFocusAuthLow()
}},initElse:function(){this.init()
}};
booking.ensureNamespaceExists(sNSStartup);
booking[sNSStartup].short_url={priority:9,loadpos:0,savecheck:0,init:function(){var create_twitter_short_url=function(oTarget){if(typeof oTarget=="object"){myPopup=window.open("","booking_com");
$.get("/short_uri?url="+escape(oTarget.getAttribute("data-shorturl"))+"&aid="+booking.env.aid,function(responseText){var json=eval(responseText);
myPopup.location.href=oTarget.getAttribute("href")+" http://www.booking.com/"+json.short_url
})
}};
$(".review_useful_t").live("click",function(){create_twitter_short_url(this);
return false
});
$(".share_t").click(function(){create_twitter_short_url(this);
return false
})
}};
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSStartup].b_site_experiment_expand_signup={priority:9,init:function(){var d=$("#newsletter_to",".footerForm"),c=d.attr("value");
d.click(function(){var e=$(this);
$("dl #newsletter_to").removeClass("error");
if(e.val()===c){e.val("")
}else{e.select()
}});
d.blur(function(){var e=$(this);
if(e.val()===""){e.val(c)
}});
$("#newsletter_button_footer").click(function(){$(this).parents("form:first").submit()
});
$(".signupForm").submit(function(f){f.preventDefault();
$(".newsletter_ajax_error").hide();
var n=booking.env,k=$(this),q=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,g=$("input[name=url]",k).val(),r=$("input[name=hostname]",k).val(),h=$("input[name=aid]",k).val(),o=$("input[name=companyname]",k).val(),e=$("input[name=subscribe_source]",k).val(),l=$("input[name=subscribe_notification]",k).val(),p=$("input[name=dest_id]",k).val(),j=$("input[name=dest_type]",k).val(),t=$("input[name=to]",k).val(),m;
if(t===""||!(q.test(t))){$(this).find(".nl_inputfield_track").addClass("error");
$(".newsletter_subscribe_error_invalid",k).show();
return false
}m="to="+t+"&url="+g+"&hostname="+r+"&aid="+h+"&companyname="+o+"&subscribe_source="+e;
if(l!==""){m=m+"&subscribe_notification="+l;
booking.track.custom_goal("HOUPESfVZNOSWe",1)
}if(p!=""){m=m+"&dest_id="+p
}if(j!=""){m=m+"&dest_type="+j
}$.ajax({type:"POST",url:"/newslettersubscribe.json",data:m,dataType:"json",success:function(w){if(w.success===0){if(w.error==="denied"){$(this).find(".nl_inputfield_track").addClass("error");
$(".newsletter_subscribe_error_denied",k).show();
$(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success",k).hide();
$(".userdataform").hide()
}else{if(w.error==="bad_params"){$(".nl_inputfield_track").addClass("error");
$(".newsletter_subscribe_error_bad_unknown",k).show();
$(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success",k).hide();
$(".userdataform").hide()
}}return
}else{if(w.success===1){if($("div#flashdealsbg_wrapper").length){window.location.href=n.b_nonsecure_hostname_signup+n.b_fd_searchresults_url_signup
}else{$(".newsletter_sub_success",k).show();
$(".userdataform").show();
$("#add_location_to").val(t);
booking.env.my_city_autocomplete.init();
$(".newsletter_form_fields, .newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid",k).hide();
if(w.has_account){var u=$("#userdataform form").eq(0);
if(u){u.attr("action",u.attr("data-url-login"))
}}}}}}})
});
$(".soldOutHotelSignup").submit(function(f){f.preventDefault();
$(".newsletter_ajax_error").hide();
$("p.feedback_msg").each(function(){$(this).hide()
});
var o=booking.env,j=$(this),q=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,m=$("input[name=firstname]",j).val(),n=$("input[name=lastname]",j).val(),p=$("input[name=email]",j).val(),g=$("input[name=aid]",j).val(),l=$("input[name=subscribe_to_newsletter]",j).val(),r=$("input[name=hotel_id]",j).val(),t=$("input[name=checkin]",j).val(),h=$("input[name=checkout]",j).val(),e=$("input[name=subscribe_source]",j).val(),k;
if(p===""||!(q.test(p))){$(".hotel_availability_error_invalid").show();
return false
}k="firstname="+m+"&lastname="+n+"&email="+p+"&aid="+g+"&subscribe_to_newsletter="+l+"&hotel_id="+r+"&checkin="+t+"&checkout="+h+"&subscribe_source="+e;
$.ajax({type:"POST",url:"http://"+o.b_hostname_signup+"/hotel_availability_newsletter/add",data:k,dataType:"json",success:function(u){if(u.subscribed===1){$(".contenttohide").hide();
$(".hotel_availability_sub_success").show()
}else{$(".hotel_availability_error_bad_unknown").show()
}}})
});
$(".signupWithnameForm").submit(function(e){e.preventDefault();
$(".feedback_msg").each(function(){$(this).hide()
});
var l=booking.env,h=$(this),o=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,m=$("input[name=companyname]",h).val(),g=$("input[name=aid]",h).val(),f=$("input[name=subscribe_source]",h).val(),n=$("input[name=email]",h).val(),k=$("input[name=firstname]",h).val(),j;
if(n===""||!(o.test(n))){$(".newsletter_subscribe_error_invalid",h).show();
return false
}$('<div class="loader_placer"></div>').appendTo("#sfl_stepOne");
j="to="+n+"&email="+n+"&aid="+g+"&companyname="+m+"&subscribe_source="+f;
$.ajax({type:"POST",url:"/newslettersubscribe.json",data:j,dataType:"json",success:function(q){if(q.success==0){$(".loader_placer").hide();
if(q.error=="denied"){$(".newsletter_subscribe_error_denied",h).show();
$(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success",h).hide()
}else{if(q.error=="bad_params"||q.error=="unknown"){$(".newsletter_subscribe_error_bad_unknown",h).show();
$(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success",h).hide()
}}return
}else{if(q.success==1){$(".loader_placer").hide();
$(".uspfield").hide();
$("#sfl_stepOne").hide();
if(k==""||booking.env.b_exclude_lang_firstname){$("#sfl_stepThree").show();
$(".userWithoutFirstname").show()
}else{k=escape(k);
if(q.has_account==1){$(".firstnameplacer").html(k);
$("#sfl_stepThree").show();
$(".userWithAccount").show()
}else{var p=booking.env.b_signup_iframe_url+"&firstname="+k+"&email="+escape(n);
$('<iframe border="0" id="sfl_stepTwo" src="'+p+'" width="656" height="320" frameborder="no" scrolling="no"></iframe>').appendTo(".signupWithnameForm")
}}}}}})
});
$("#subscriber_account_active").submit(function(e){if($('input[name="mypassword"]').val().length<1){$(".newsletter_register_error_nopassword").show();
return false
}else{$('<input type="hidden" name="password" value="'+$('input[name="myssword"]').val()+'" />').appendTo("#subscriber_account_active")
}});
$(".modal-mask-closeBtn").click(function(){return false
});
$(".modal-mask").click(function(){return false
});
if(!$("#newsletter_form_footer_container").length){return false
}else{$(".nl_inputfield_track, .newsletter_button").click(function(){return false
})
}}};
booking.env.my_city_autocomplete={res_location:"/autocomplete?lang=en&aid=100000&sid="+booking.env.b_sid+"&skip_suggestions=&term=",store_locations:{},cur_index:-1,fav_game:false,init:function(){this.res_location="/autocomplete?lang="+booking.env.b_lang+"&sid="+booking.env.b_sid+"&aid="+booking.env.b_aid+"&skip_suggestions=&term=";
var c=this;
$("#city_add, #country_add, #userdataform #city, #fav_city").keypress(function(d){if(d.keyCode==13){d.preventDefault();
return false
}});
$("#city_add, #country_add, #userdataform #city, #fav_city").blur(function(){oWhat=this;
setTimeout(function(){c.cleanList(oWhat)
},500)
});
$("#city_add, #country_add, #userdataform #city, #fav_city").keyup(function(d){if($(this).attr("id")=="fav_city"){c.fav_game=true
}else{c.fav_game=false
}if(d.keyCode&&(d.keyCode==38||d.keyCode==40||d.keyCode==13)){if(d.keyCode==38){d.preventDefault();
c.cur_index--;
if(c.cur_index<0){c.cur_index=$(".add_result li",this.parentNode).length-1
}c.makeSelect(this);
return false
}if(d.keyCode==40){d.preventDefault();
c.cur_index++;
if($(".add_result li",this.parentNode).length<=c.cur_index){c.cur_index=0
}c.makeSelect(this);
return false
}if(d.keyCode==13){d.preventDefault();
c.clickSelect(this);
return false
}}else{c.cur_index=-1;
c.cleanList(this);
var f=$(this).val();
var e=$(this).attr("search");
if(f.length>1){oField=this;
setTimeout(function(){c.loadList(oField,e)
},100)
}}});
$(".favlist .remover").live("click",function(){$(this).removeClass("jq_tooltip");
$("img",this).attr("alt","");
c.removeFavourite(this,$(this).attr("remtype"));
return false
});
$(".add_result li").live("mouseenter",function(){$("li",this.parentNode).removeClass("sel_fav");
$(this).addClass("sel_fav");
c.cur_index=$("li",this.parentNode).index(this);
var d=$("input",this.parentNode.parentNode).get(0);
$(d).focus()
});
$("#pref_city").click(function(){$(this).hide();
$("#pref_city_add").show();
$("#city_add").focus();
return false
});
$("#pref_country").click(function(){$(this).hide();
$("#pref_country_add").show();
$("#country_add").focus();
return false
})
},makeSelect:function(c){$(".add_result li",c.parentNode).removeClass("sel_fav");
if($(".add_result li",c.parentNode).length>this.cur_index){var d=$(".add_result li",c.parentNode).get(this.cur_index);
$(d).addClass("sel_fav")
}},clickSelect:function(c){if($(".add_result li.sel_fav",c.parentNode).length){$(".add_result li.sel_fav a",c.parentNode).click()
}else{if($(".add_result li",c.parentNode).length==1){$(".add_result li a",c.parentNode).click()
}else{}}},loadList:function(f,d){var e=this;
var f=f;
var g=$(f).val();
var c=this.res_location+g;
if(d=="country"){c+="&dest_type=country"
}else{if(d=="city"){c+="&dest_type=city&give_cc1=1"
}}$.ajax({url:c,success:function(l){var h="";
var m=false;
if(!l||typeof l[d]==="undefined"){return
}for(var k=0;
k<l[d].length;
k++){var j=l[d][k].label.replace("'","");
var n="";
if(l[d][k].cc1){var n=l[d][k].cc1[0]
}h+='<li onclick="booking.env.my_city_autocomplete.addLocation('+k+", document.getElementById('city_link_"+k+"'), '"+l[d][k].dest_type+"', '"+j+"', '"+n+'\');return false;"><a id="city_link_'+k+'" href="#" onClick="return false;">'+l[d][k].label+"</a></li>";
m=true
}$(".add_result",f.parentNode).html(h);
if(m){$(".add_result",f.parentNode).css({border:"1px solid #dddddd",background:"#ffffff"})
}else{$(".add_result",f.parentNode).css({border:"0",background:"transparent"})
}e.store_locations=l
}})
},cleanList:function(d){var c=this;
$(".add_result",d.parentNode).html("");
$(".add_result",d.parentNode).css({border:"0",background:"transparent"});
c.store_locations={}
},addLocation:function(o,d,k,c,n){var e=this;
var x=this.store_locations[k][o];
if(k=="city"){var f=booking.env.fav_city_locations;
var q=x.dest_id
}else{var f=booking.env.fav_country_locations;
var q=x.co_code
}var w="favlocation_"+q;
if($(d).parents("#userdataform").length){var g=c.split(",");
var j=g[0];
$("#city").val(j);
$("#city_id").val(q);
if($(d).parents(".save_useufi_light").length){$.ajax({type:"POST",url:"/save_my_ufi",data:{ufi:q,lang:booking.env.b_guest_country},success:function(z){var y=$(".save_useufi_light").get(0);
$(y).addClass("saved_ufi")
}})
}e.cleanList($(d).parents("ul").get(0))
}else{var t=x.label;
var l=t.split(",");
if(e.fav_game){if(booking[sNSExperiments].favourites_game){booking[sNSExperiments].favourites_game.addSearchFav(q,x)
}e.cleanList($(d).parents("ul").get(0))
}else{if($("#"+w).length){e.cleanList($(d).parents("ul").get(0))
}else{f[f.length]=q;
this.saveFavourites(k);
e.cleanList($(d).parents("ul").get(0));
var u=l[0];
var p="";
if(l.length>0){for(var r=1;
r<l.length;
r++){p+=(r>1)?",":"";
p+=l[r]
}}var h='<li class="roundme" id="favwrap_'+w+'">';
h+='<a href="#" id="'+w+'" class="jq_tooltip remover" remtype="'+k+'" title="remove this item"><img src="/static/img/icon_cancel_trans.png" alt="Remove item" /></a>';
h+='<a href="#" onclick="return false;">';
if(k=="city"){h+='<span class="roundme def_city">&nbsp;</span>';
h+='<span class="roundme city_img" style="background:transparent url(\'/static/img/city/'+q+"/32x32.jpg') left top no-repeat;\">&nbsp;</span>"
}else{h+='<img class="roundme" src="/static/img/flags/24/'+q+'.png" alt="" />'
}h+="</a>";
if(k=="city"){h+='<a href="'+booking.env.b_nonsecure_hostname_signup+"/searchresults."+booking.env.b_lang+".html?city="+q+'">'+u+"</a>"
}else{h+='<a href="'+booking.env.b_nonsecure_hostname_signup+"/country/"+q+"."+booking.env.b_lang+'.html">'+u+"</a>"
}h+="<span>"+p+"</span>";
if(k=="city"){$("#addNewCity").before(h);
$("#city_add").val("")
}else{$("#addNewCountry").before(h);
$("#country_add").val("")
}}if(booking.env.profile_map_list){if(k=="city"){var m="/static/img/city/"+q+"/32x32.jpg"
}else{var m="/static/img/flags/24/"+q+".png"
}}this.animateAdding(w)
}}},animateAdding:function(c){var d=$("#"+c).get(0);
var e=0;
var f=window.setInterval(function(){e++;
var g=255-(e*5);
if(e>51){g=(e*5)-255
}if(e>101){$(d.parentNode).css({background:""});
window.clearInterval(f)
}else{$(d.parentNode).css({background:"rgb(255,"+g+","+g+")"})
}},10)
},removeFavourite:function(e,k){var j=$(e).attr("id").split("favlocation_")[1];
var d=(k=="city")?booking.env.fav_city_locations:booking.env.fav_country_locations;
var f=-1;
for(var h=0;
h<d.length;
h++){if(d[h]==j){f=h
}}if(f!=-1){d.splice(f,1);
this.saveFavourites(k)
}var c=$(e).attr("id");
var g="favwrap_"+c;
$("#"+g).animate({opacity:0},600,function(){$(this).html("");
var l=this;
setTimeout(function(){$(l).remove()
})
})
},saveFavourites:function(g){var f=(g=="city")?"cities?ufis":"countries?cc1s";
var c=(g=="city")?booking.env.fav_city_locations:booking.env.fav_country_locations;
var e="/set_favorite_"+f+"=";
for(var d=0;
d<c.length;
d++){if(d>0){e+=","
}e+=c[d]
}$.ajax({url:e,type:"POST",success:function(h){if(h.status&&h.status=="auth_needed"){document.location.reload(true)
}}})
}};
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSExperiments].simple_av_calendar=(function(){var d=$(".simple_av_calendar"),k=false,j=new Date(),e=new Date(),c=false;
e.setMonth(e.getMonth()+9);
var h=function(r){if(!r||!r.length){$(".simple_av_calendar").addClass("no_alt_avail");
return
}var n,l=r.length,o;
var p="";
var q=booking.env.simple_av_calendar_i18n;
var m=booking.env.simple_av_calendar_url+";";
m=m.replace(/;+/g,";");
p+='<h4 class="simple_av_calendar_title">'+(l>1?q.title_many:q.title_one)+"</h4>";
for(n=0;
n<l;
n++){o=r[n];
if(parseInt(o.b_stay_price_numeric,10)>0){p+='<a class="simple_av_calendar_item" href="'+m+o.b_date_params+'">';
p+='<span class="simple_av_calendar_dates" style="border-bottom: 1px solid #e2e8ed;">'+o.b_checkin+" &ndash; "+o.b_checkout+"</span>";
p+='<span class="simple_av_calendar_los">'+o.b_num_nights_text+", "+o.b_checkin_weekday+"&ndash;"+o.b_checkout_weekday+"</span>";
p+='<span class="simple_av_calendar_price">'+o.b_from_price_text+"</span>";
p+="</a> "
}}d.append(p).show()
};
var g=function(H){if(!H||!H.length){if(c){booking.env.simple_av_calendar_data.checkin="";
f()
}return
}var l=function(K){var J=((K.getDate()).toString().length==1)?"0"+(K.getDate()):K.getDate();
var M=((K.getMonth()+1).toString().length==1)?"0"+(K.getMonth()+1):K.getMonth()+1;
var L=K.getFullYear();
var I=L+"-"+M+"-"+J;
return I
};
var o=function(L){var J=L.b_date_params;
var I=J.split("=")[1].split(";")[0];
var M=I.replace(/([0-9]+)-([0-9]+)-([0-9]+)/,"$2/$3/$1");
var K=new Date(M);
return K
};
var n=function(L,I){var K=o(L[0]);
if(I=="next"){K.setMonth(K.getMonth()+1)
}else{K.setMonth(K.getMonth()-1)
}var J=l(K);
if(K<j){booking.env.simple_av_calendar_data.checkin=""
}else{booking.env.simple_av_calendar_data.checkin=J
}};
var w=function(J){var I=o(J[0]);
if(I<j){$("#prev_7_day").hide()
}else{if(I>e){$("#next_7_day").hide()
}else{$("#prev_7_day").show();
$("#next_7_day").show()
}}};
var r=booking.env.simple_av_calendar_url+";";
r=r.replace(/;+/g,";");
var x=booking.env.simple_av_calendar_i18n;
var t=$('<div class="seven_night_av_cal_wrap clearfix"></div>'),z="",y="",G="",A="",p,F,C,D,E,q=[];
var u=function(I){D=I.length;
y+='<table class="seven_night_av_cal'+G+'"><tr><th colspan="3"><h4>'+I[0].b_month_year+"</h4></th></tr>";
for(C=0;
C<D;
C++){F=I[C];
E=false;
A="";
if(F.b_stay_price_numeric==-1){p='<span class="seven_cal_sold_out">'+x.soldout_text+"</span>";
E=true
}else{if(F.b_stay_price_numeric==-2){p='<span class="seven_cal_unavailable"></span>';
A=' class="seven_cal_unavail_tr"';
E=true
}else{p='<a class="price" href="'+r+F.b_date_params+';nhaScrollToRt=1">'+F.b_stay_price+"</a>"
}}if(E){y+="<tr"+A+"><td>"+F.b_checkin+" - "+F.b_checkout+" ("+F.b_checkin_weekday+"-"+F.b_checkout_weekday+')</td><td class="stay_length">'+F.b_num_nights_text+'</td><td class="seven_cal_cell_fill">'+p+"</td></tr>"
}else{y+="<tr"+A+'><td><a class="date_range" href="'+r+F.b_date_params+'">'+F.b_checkin+" - "+F.b_checkout+" ("+F.b_checkin_weekday+"-"+F.b_checkout_weekday+')</a></td><td class="stay_length"><a href="'+r+F.b_date_params+';nhaScrollToRt=1">'+F.b_num_nights_text+'</a></td><td class="seven_cal_cell_fill">'+p+"</td></tr>"
}}y+="</table>";
t.html(y)
};
$(H).each(function(I){if(I!==0&&(z!=H[I].b_month_year.split(" ")[0])){u(q);
q=[];
G=" not_first_av_table"
}q.push(H[I]);
z=H[I].b_month_year.split(" ")[0]||"";
if(I==(H.length-1)){u(q)
}});
var m=$('<a href="#" class="prev" id="prev_7_day">&larr; '+booking.env.simple_av_calendar_i18n.previous_month+'</a><a href="#" class="next" id="next_7_day">'+booking.env.simple_av_calendar_i18n.next_month+" &rarr;</a>");
m.bind("click",function(J){J.preventDefault();
booking.env.simple_av_calendar_data.force_month=1;
t.addClass("calendar_overlay");
var I=$(this).attr("class");
n(H,I);
f()
});
t.append(m);
d.find(".seven_night_av_cal_wrap").remove();
d.append(t).show();
d.find(".hp_av_cal_description").show();
w(H);
c=true
};
var f=function(){k=(B.track.getVariant("BUYTVRaJLBWHcMEfTRe")||B.track.getVariant("BUYTVRaJLBWHcMEfTLZVXASbC")||B.track.getVariant("BUYTVRaJLBWHcMEeLC")||booking.env.b_enable_villa_site_av);
if(k&&booking.env.simple_av_calendar_data){booking.env.simple_av_calendar_data.force_7_nights=1;
d=$("#hp_av_calendar")
}$.ajax({timeout:10000,dataType:"json",data:booking.env.simple_av_calendar_data,url:"/alt_avail",success:function(l){$(".simple_av_calendar_loader").hide();
if(k){g(l)
}else{h(l)
}},error:function(){$(".simple_av_calendar_loader").hide();
if(k){booking.env.simple_av_calendar_data.checkin="";
$(".seven_night_av_cal_wrap").removeClass("calendar_overlay")
}}})
};
return{init:f}
}());
booking[sNSStartup].social_network={priority:9,init:function(){var c=this;
$("#social_network_bookmarks li a").mouseover(function(){$("#share_on").text(this.name)
});
$(".socnet_mailafriend").click(function(){c.showMailAFriend(this.href);
return false
})
},showMailAFriend:function(d){var f,c,j,e,h,g;
if(booking.env.b_is_ie6){h='style="height: 453px;"';
g='style="height: 435px;width: 618px;"'
}else{h="";
g=""
}f="maf_wrapper",c='<div id="maf_wrapper" class="iframe"><div id="maf_shadow" '+h+'></div><div id="maf_iframe_wrapper"><iframe id="maf_iframe" '+g+' src="'+d+'" frameborder="0"></iframe></div></div>';
if($("#"+f).length){$("#"+f).show()
}else{$(document.body).append(c)
}j=$(window)[0];
e=(document.body.scrollTop==0)?(j.pageYOffset)?j.pageYOffset:(document.body.parentElement)?document.body.parentElement.scrollTop:0:document.body.scrollTop;
$("#"+f).css("top",e+($(j).height()/2-$("#"+f).height()/2));
booking.google.trackEvent(booking.google.clickTracker,"Mail A Friend","Popup mail_a_friend_redesign")
}};
booking.social_plugins_footer=(function(){var c=function(){var f=$("#footer_weibo"),e=$("#footer_wechat"),d=$("#footer_naver");
d.hover(function(){d.find(".footer_tooltip").stop(true,true).fadeIn()
},function(){d.find(".footer_tooltip").stop(true,true).fadeOut()
});
f.hover(function(){f.find(".footer_tooltip").stop(true,true).fadeIn()
},function(){f.find(".footer_tooltip").stop(true,true).fadeOut()
});
e.hover(function(){e.find(".footer_tooltip").stop(true,true).fadeIn()
},function(){e.find(".footer_tooltip").stop(true,true).fadeOut()
})
};
return{init:c}
}());
booking[sNSStartup].social_plugins_footer={priority:9,init:function(){if(booking.env.social_plugins_footer){booking.social_plugins_footer.init()
}}};
B.SpriteAnimator=function(f,c,e,d,h,g){this.elem_=f;
this.propToAnimate_=(d||B.SpriteAnimator.Prop.BACKGROUND_POSITION);
this.frameSize_=this.normalizeSize_(c);
this.spriteSize_=this.normalizeSize_(e);
this.pauseFrames_=h||[];
this.animating_=false;
this.framesInterval_=B.SpriteAnimator.DEFAULT_FRAMES_INTERVAL;
this.currentFrame_=B.SpriteAnimator.DEFAULT_START_FRAME;
this.framesCols_=this.calculateFramesCols_();
this.framesRows_=this.calculateFramesRows_();
this.framesCount_=(typeof g==="number"?g:this.framesCols_*this.framesRows_);
this.lastRememberedTime_=0;
this.loopTimeout_=0;
this.eventsDispatcher_=$(this)
};
B.SpriteAnimator.DEFAULT_FRAMES_INTERVAL=33;
B.SpriteAnimator.DEFAULT_START_FRAME=1;
B.SpriteAnimator.EventType={PAUSE:"pause"};
B.SpriteAnimator.Prop={BACKGROUND_POSITION:"background_position",POSITION:"position"};
B.SpriteAnimator.prototype.isAnimating=function(){return this.animating_
};
B.SpriteAnimator.prototype.play=function(){if(this.animating_){return
}this.animating_=true;
this.runLoop_()
};
B.SpriteAnimator.prototype.pause=function(){if(!this.animating_){return
}this.animating_=false;
clearTimeout(this.loopTimeout_);
this.eventsDispatcher_.trigger(B.SpriteAnimator.EventType.PAUSE)
};
B.SpriteAnimator.prototype.rewind=function(){clearTimeout(this.loopTimeout_);
this.currentFrame_=B.SpriteAnimator.DEFAULT_START_FRAME;
this.drawElem_();
if(this.animating_){this.runLoop_()
}};
B.SpriteAnimator.prototype.moveToFrame=function(c){this.throwErrorIfFrameIsInvalid_(c);
this.moveToFrame_(c)
};
B.SpriteAnimator.prototype.getCurrentFrame=function(){return this.currentFrame_
};
B.SpriteAnimator.prototype.getFramesCount=function(){return this.framesCount_
};
B.SpriteAnimator.prototype.getFramesInterval=function(){return this.framesInterval_
};
B.SpriteAnimator.prototype.setFramesInterval=function(c){this.framesInterval_=c
};
B.SpriteAnimator.prototype.getPauseFrames=function(){return this.pauseFrames_
};
B.SpriteAnimator.prototype.setPauseFrames=function(c){this.pauseFrames_=c
};
B.SpriteAnimator.prototype.runLoop_=function(){var d=this;
this.loopTimeout_=setTimeout(function(){d.runLoop_()
},5);
var c=new Date().getTime();
if(this.lastRememberedTime_<=c){this.moveToNextFrame_();
this.lastRememberedTime_=c+Math.abs(this.framesInterval_)
}};
B.SpriteAnimator.prototype.moveToNextFrame_=function(){var c=(this.framesInterval_>0?1:-1);
var d=this.currentFrame_+c;
if(d>this.framesCount_){d=1
}if(d<1){d=this.framesCount_
}this.moveToFrame(d)
};
B.SpriteAnimator.prototype.moveToFrame_=function(c){this.currentFrame_=c;
this.drawElem_();
if($.inArray(this.currentFrame_,this.pauseFrames_)!==-1){this.pause()
}};
B.SpriteAnimator.prototype.drawElem_=function(){var c=this.getFramePosition_(this.currentFrame_);
if(this.propToAnimate_===B.SpriteAnimator.Prop.BACKGROUND_POSITION){this.elem_.css("background-position",(-c.left+"px")+" "+(-c.top+"px"))
}else{if(this.propToAnimate_===B.SpriteAnimator.Prop.POSITION){if(this.framesCols_!==1){this.elem_.css("left",-c.left)
}if(this.framesRows_!==1){this.elem_.css("top",-c.top)
}}}};
B.SpriteAnimator.prototype.getFramePosition_=function(e){this.throwErrorIfFrameIsInvalid_(e);
var d=Math.ceil(e/this.framesCols_);
var c=(e-1)%this.framesCols_+1;
return{left:(c-1)*this.frameSize_.width,top:(d-1)*this.frameSize_.height}
};
B.SpriteAnimator.prototype.calculateFramesCols_=function(){if(this.frameSize_.width!==0&&this.spriteSize_.width!==0){return Math.floor(this.spriteSize_.width/this.frameSize_.width)
}else{return 1
}};
B.SpriteAnimator.prototype.calculateFramesRows_=function(){if(this.frameSize_.height!==0&&this.spriteSize_.height!==0){return Math.floor(this.spriteSize_.height/this.frameSize_.height)
}else{return 1
}};
B.SpriteAnimator.prototype.normalizeSize_=function(c){return{width:(typeof c.width==="number"?c.width:0),height:(typeof c.height==="number"?c.height:0)}
};
B.SpriteAnimator.prototype.throwErrorIfFrameIsInvalid_=function(c){if(c<1||c>this.framesCount_){throw Error("Frame number must be between 1 and "+this.framesCount_+". Found: "+c)
}};
booking[sNSStartup].sr_comp_set_destinations={priority:9,init:function(){var c=this;
if(booking.env.b_sr_compset_url){if(booking.track.getVariant(["OLFUZZOZaRJKe"])){var d=(booking.track.getVariant("XVaNBKBLRe")===1)?4000:2800;
setTimeout(function(){c.loadCompset()
},d)
}else{c.loadCompset()
}}},loadCompset:function(){$.ajax({type:"GET",url:booking.env.b_sr_compset_url,contentType:"text/html; charset=utf-8",success:function(c){if(c.length){$("#x_sr_compset").html(c).show().css("visibility","visible")
}}})
}};
booking[sNSStartup].store_cc_details={priority:9,init:function(){if(B.env.b_action==="book"){return
}$("#saved_credit_cards .cc_save").attr("disabled","disabled");
$("#saved_credit_cards .cc_save").addClass("cc_save_disabled");
$("#saved_credit_cards select").change(function(){var c=$(this).closest("form");
$(this).css({"font-weight":"bold"});
$(".cc_save",c).removeAttr("disabled");
$(".cc_save",c).removeClass("cc_save_disabled")
});
if($("#card_status").length){setTimeout(function(){$("#card_status").hide("slow")
},5000)
}if(B.env.b_action==="login"){$(".cc_delete").mousedown(function(){var e=$(this).closest("tr").get(0);
var c=$(this).val()||$(this).attr("value");
var d="/delete_cc_card?cc_id="+c;
$.ajax({url:d,type:"POST",success:function(f){$(e).hide()
},error:function(f){return false
}});
return false
})
}}};
booking.env.Tabs=function(c){var d={baseEl:"#newsletter_deals_city",menuEl:".deals_menu",contentEl:".deals_wrapper",dealsEl:".deals",navEl:".nav_menu",defaultEl:1};
var c=$.extend(d,c);
$(c.menuEl+" li:nth-child("+c.defaultEl+")").addClass("active").show();
$(c.contentEl+" ul.deals:nth-child("+c.defaultEl+")").show();
$("li",c.menuEl).click(function(){$("li",c.menuEl).removeClass("active");
$(this).addClass("active");
$(c.dealsEl,c.contentEl).hide();
var e=$(this).find("a").attr("href");
$(e).show();
return false
});
$(c.contentEl,c.baseEl).show()
};
booking[sNSExperiments]["PYeUZFNZeFZIWcbIXXcffWe"]={priority:10,lw:null,flags_loaded:false,init:function(){var c=this;
c.lw=booking[sNSExperiments].ng_last_viewed||"";
c.$lang_button=$("#b_nav_language");
c.$curr_button=$("#b_nav_currency");
c.$lang=$("#top_language");
c.$curr=$("#top_currency");
c.addEvents()
},addEvents:function(){var c=this;
c.$lang_button.bind("click",function(){$.proxy(c.toggleMenu("lang"),c)
});
c.$curr_button.bind("click",function(){$.proxy(c.toggleMenu("curr"),c)
});
var d=function(){var e=$(this);
$li=e.parent();
if($li.hasClass("selected")){c.lw.distroyOverlay();
return false
}else{$li.parent().parent().find("li.selected").removeClass("selected");
$(".mm_loading").removeClass("mm_loading");
$li.addClass("mm_loading")
}};
c.$lang.delegate("li a","click",d);
c.$curr.delegate("li a","click",d)
},toggleMenu:function(f){var c=this,d=$("#top_language_prompt");
if(d.length){d.remove()
}if(c.lw.isVisibleOverlay()&&c.lw.click==f){c.lw.distroyOverlay()
}else{var e=c.$lang.data("spinner-loaded");
if(e==false){c.$lang.append('<div class="mm_loading mm_preload"><a href="#"></a></div>');
c.$curr.append('<div class="mm_loading mm_preload"><a href="#"></a></div>');
c.$lang.data("spinner-loaded",true)
}c.lw.createOverlay();
c.lw.click=f;
$(".milk_menu").hide();
$("#top_lw_wrapper").hide();
if(f=="lang"&&!c.flags_loaded){c.flags_loaded=true;
var g=c.$lang.clone();
g.find(".t_flag").each(function(){var j=$(this),k=j.data("img"),h=j.data("size");
img="";
img='<img src="'+k+'" width="'+h+'" height="'+h+'" />';
j.append(img)
});
c.$lang.html(g.html())
}c["$"+f].show()
}}};
booking[sNSStartup].track_fe_lang_change={init:function(){var c=booking.track.getVariant("PYeUZFNZeFZIWcbIXXcffWe");
if(c==false){return
}var d="Changed language or currency";
if(booking.env.b_track_fe_language_change){booking.google.trackEvent(d,"Changed language","Variant "+c)
}if(booking.env.b_track_fe_currency_change){booking.google.trackEvent(d,"Changed currency","Variant "+c)
}}};
booking[sNSExperiments]["PNFVRZaZEXSIO"]={priority:8,cache:function(){var c=this;
c.$prompt=$("#top_language_prompt")
},init:function(){var c=this;
c.cache();
$(window).load(function(){var d=setTimeout($.proxy(c.bindCloseEvt,c),4000)
});
$(".t_prompt_link.first").bind("click",function(){c.distroy();
return false
});
c.$prompt.animate({opacity:1},1000);
booking.google.trackEvent(booking.google.clickTracker,"New Language Prompt","show")
},bindCloseEvt:function(){var c=this;
$(document.body).one("touchstart",function(){c.distroy()
});
c.$prompt.bind("touchstart",function(d){d.stopPropagation()
})
},distroy:function(){var c=this;
c.$prompt.remove()
}};
booking[sNSExperiments]["PYVcTQQDIBafXARe"]=(function(d,f,e){var m="dropdown_wishlist",j=null,g=null,h=null,n=null,k=false;
function p(){j=d[sNSExperiments].ng_last_viewed||null;
g=d[sNSExperiments]["HOGeVRcJDbMXVaKBIecO"]||null;
g&&g.init&&g.init();
h=f("#top_wishlist_wrapper");
n=h.find(".js-uc-wishlists-content");
f("#top_wishlist").bind("click",l);
f("#top_wishlist_wrapper .js-uc-wishlists-form-title").live("blur",c)
}function l(q){q.preventDefault();
if(!j||!j.isVisibleOverlay){return
}if(j.isVisibleOverlay()&&j.click==m){j.distroyOverlay()
}else{j.createOverlay();
j.click=m;
f(".milk_menu, #top_lw_wrapper").hide();
h.show();
o()
}}function o(){if(!g||!g.wList||!g.wList.fetch){return
}if(k){return false
}g.wList.fetch().then(function(q){k=true;
n.html(g.tmpl(q.result));
n.find(".uc-wishlists__wrapper").addClass("lw_list lw_scrollable");
n.find(".uc-wishlists__footer").addClass("lw_footer");
d.env.auth_level==="0"&&f(".js-uc-wishlists-form").hide()
})
}function c(q){f("body").animate({scrollTop:0})
}return{init:p,priority:10}
})(booking,jQuery,jQuery(window));
(function(c){c.fn.bgIframe=c.fn.bgiframe=function(e){if(c("html.b_msie_6").length){e=c.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:true,src:"javascript:false;"},e||{});
var f=function(g){return g&&g.constructor==Number?g+"px":g
},d='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+e.src+'"style="display:block;position:absolute;z-index:-1;'+(e.opacity!==false?"filter:Alpha(Opacity='0');":"")+"top:"+(e.top=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')":f(e.top))+";left:"+(e.left=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')":f(e.left))+";width:"+(e.width=="auto"?"expression(this.parentNode.offsetWidth+'px')":f(e.width))+";height:"+(e.height=="auto"?"expression(this.parentNode.offsetHeight+'px')":f(e.height))+';"/>';
return this.each(function(){if(c("> iframe.bgiframe",this).length==0){this.insertBefore(document.createElement(d),this.firstChild)
}})
}return this
}
})(jQuery);
if(!booking.env.skip_old_tt){(function(f){var c={},q,D,n,j=f.browser.msie&&/MSIE\s(5\.5|6\.)/.test(navigator.userAgent),p=false,o=function(I,J){var N=f(I),F=N.attr("id"),L,M,G=N.get(0).tagName.toLowerCase(),H,K,E;
if(F){K=f("#"+F).index(N);
E='jQuery("#'+F+'").eq('+K+")"
}else{L=N.closest("[id]");
M=L.attr("id");
H=f("#"+M).index(L);
K=L.find(G).index(N);
E='jQuery("#'+M+'").eq('+H+').find("'+G+'").eq('+K+")"
}return"(function(){var ele="+E+"."+J+'(),offset=ele.offset();$("#tooltip").css({top: offset.top + "px",left: (offset.left + 70) + "px"})}())'
},k=function(){booking.env.touch_os=("ontouchstart" in document.documentElement)?true:false;
if(/(chrome)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase())){booking.env.touch_os=false
}return true
};
f.tooltip={blocked:false,defaults:{delay:200,fade:false,showURL:true,extraClass:"",top:15,left:15,id:"tooltip"},block:function(){f.tooltip.blocked=!f.tooltip.blocked
}};
f.fn.extend({tooltip:function(F){F=f.extend({},f.tooltip.defaults,F);
var E=function(){f.data(this,"tooltip",F);
this.tOpacity=c.parent.css("opacity");
if(this.tooltipText&&this.tooltipText!=""){}else{this.tooltipText=this.getAttribute("data-title")||this.title
}this.removeAttribute("title");
this.alt=""
};
r(F);
if(booking.env.touch_os){return this.each(E).click(w).mouseout(l)
}else{if(!f(this).hasClass("remover")){return this.each(E).mouseover(w).mouseout(l)
}else{return this.each(E).mouseover(w).mouseout(l).click(l)
}}},fixPNG:j?function(){return this.each(function(){var E=f(this).css("backgroundImage");
if(E.match(/^url\(["']?(.*\.png)["']?\)$/i)){E=RegExp.$1;
f(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+E+"')"}).each(function(){var F=f(this).css("position");
if(F!="absolute"&&F!="relative"){f(this).css("position","relative")
}})
}})
}:function(){return this
},unfixPNG:j?function(){return this.each(function(){f(this).css({filter:"",backgroundImage:""})
})
}:function(){return this
},hideWhenEmpty:function(){return this.each(function(){f(this)[f(this).html()?"show":"hide"]()
})
},url:function(){return this.attr("href")||this.attr("src")
}});
function r(E){if(c.parent){return
}if(booking.env.tooltip_traversing){c.parent=f('<div id="'+E.id+'"><div class="shadow"><h3></h3></div></div>').appendTo(document.body).hide()
}else{c.parent=f('<div id="'+E.id+'" style="width: '+E.width+'px;"><div class="shadow"><h3></h3></div></div>').appendTo(document.body).hide()
}if(k()){booking.track.exp("PNRNZWcCcdMSbZQTDWe");
if(booking.track.getVariant("PNRNZWcCcdMSbZQTDWe")){c.parent.bind("click",function(){if(f.tooltip.blocked){return
}if(n){clearTimeout(n)
}q=null;
f(this).removeClass(E.extraClass).fadeOut().css("opacity","")
})
}}if(f.fn.bgiframe){c.parent.bgiframe()
}c.title=f("h3",c.parent);
c.body=f("div.body",c.parent);
c.url=f("div.url",c.parent)
}function z(E){return f.data(E,"tooltip")
}function A(E){if(z(this).delay){n=setTimeout(C,z(this).delay)
}else{C()
}p=!!z(this).track;
f(document.body).bind("mousemove.tooltip",h);
h(E)
}var d=false;
var t={};
var x;
var m=false;
var u=false;
function w(){var N=booking.env.b_site_experiment_t_bp_fix_tooltip==1;
if(typeof booking.env.b_site_experiment_t_bp_fix_tooltip!="undefined"&&!u){booking.track.exp("PNRNZWBRUDKe");
u=true
}if(!booking.env.touch_os){if(f.tooltip.blocked||(!N&&this==q)||(N&&this==q&&f(this).css("display")=="block")||(!this.tooltipText&&!z(this).bodyHandler)){return
}}D=this.tooltipText;
q=this;
if(f(this).hasClass("larger_gallery_tooltip_images")){booking.env.trackExperiment("ZQPdeFNJUTWcNKNMJYOHT")
}if(f(this).hasClass("hotel_thumbs_sprite")||f(this).hasClass("hotel_variable_size")||f(this).attr("id")=="photo_wrapper"||(f(this).hasClass("larger_gallery_tooltip_images")&&booking.env.b_site_experiment_nha_larger_roomtable_tooltip_images)){d=true;
var G=f(window);
var L=G.width();
var I=G.height();
var O=200;
var E=0;
var K;
if(booking.env.b_site_experiment_nha_larger_gallery_tooltip_images_even_larger){if(L>1600&&I>900){O=600
}else{if(L>1360&&I>765){O=600
}else{if(L>1120&&I>630){O=500
}else{if(L>880&&I>495){O=500;
E=1
}else{if(L>760&&I>428){O=400;
E=1
}}}}}}else{if(L>1600&&I>900){O=600
}else{if(L>1360&&I>765){O=600
}else{if(L>1120&&I>630){O=500
}else{if(L>880&&I>495){O=300;
E=1
}else{if(L>760&&I>428){O=300;
E=1
}}}}}}if(E){booking.env.trackExperiment("ZQPdeFYeCIObTdcCcdAHTLRGHFbTNFO")
}D=D.replace(/\/max(\d+)\//,"/max"+O+"/");
if(booking.env.b_experiment_hash_hp_map_in_slideshow){K=f(this).attr("data-size-"+O);
if(K){D=K
}}}if(D.indexOf("<img")===0){d=true;
g()
}if(f(this).hasClass("show_map")||f(this).hasClass("mouse_hover_rackrate")||f(this).hasClass("deals_label_content")||f(this).hasClass("icon_minibubble")){d=true
}if(z(this).bodyHandler){c.title.hide();
var M=z(this).bodyHandler.call(this);
if(M.nodeType||M.jquery){c.title.empty().append(M)
}else{c.title.html(M)
}c.title.show()
}else{if(z(this).showBody){var H=D.split(z(this).showBody);
c.title.html(H.shift()).show();
c.body.empty();
for(var J=0,F;
(F=H[J]);
J++){if(J>0){c.body.append("<br/>")
}c.body.append(F)
}c.body.hideWhenEmpty()
}else{c.title.html(D).show();
c.body.hide()
}}if(z(this).showURL&&f(this).url()){c.url.html(f(this).url().replace("http://","")).show()
}else{c.url.hide()
}c.parent.addClass(z(this).extraClass);
if(z(this).fixPNG){c.parent.fixPNG()
}A.apply(this,arguments);
if(booking.env.touch_os){f("#tooltip h3").css("padding-right","22px")
}if(typeof ClickTaleExec==="function"){ClickTaleExec(o(this,"mouseover"))
}}function g(){var F=D.match(/src=['"]([^'"]+)['"]/);
if(!F||t[F[1]]){return
}var E=D;
var G=document.createElement("img");
D='<img src="//q-ec.bstatic.com/static/img/experiments/ajax-loader-black/d19b79c0cb26d8af016a6d84fd4bc38e1f43bb0e.gif" class="tooltip_loader" style="padding: 25px;"/>';
G.onload=function(){t[this.src]=true;
if(this.src!==x){return
}D=E;
c.title.html(D);
c.parent.css("width",this.width+20);
if(c.parent.is(":visible")){h()
}};
x=F[1];
G.src=F[1]
}function C(){var E,H;
n=null;
if(!q||!z(q)){return
}if(booking.env.tooltip_traversing){E=z(q);
H=E.width;
H=(typeof H==="function")?H.apply(q):H;
if(H){c.parent[0].style.width=H+"px"
}else{c.parent[0].style.width="auto"
}}if((!j||!f.fn.bgiframe)&&z(q).fade){if(c.parent.is(":animated")){c.parent.stop().show().fadeTo(z(q).fade,q.tOpacity)
}else{c.parent.is(":visible")?c.parent.fadeTo(z(q).fade,q.tOpacity):c.parent.fadeIn(z(q).fade)
}}else{c.parent.show()
}c.parent.removeClass("niceBlackBorderTooltip blackBorderTooltip");
if(z(q).width){c.parent.css("width",z(q).width+"px");
if(c.parent.find("#map_hover_preview_text").length){c.parent.addClass("blackBorderTooltip")
}if(z(q).black){c.parent.addClass("blackBorderTooltip")
}}else{var F=c.parent.find("img:eq(0)");
var G=F.attr("src");
if(G){c.parent.addClass("blackBorderTooltip")
}if(!booking.track.getVariant("BUNKNMRQFHET")){c.parent.css("width",t[G]?(F.width()+20):"")
}}h();
if(booking.env.b_action=="hotel"){booking.track.exp("BUNKNMRQFHET")
}}function h(I){if(f.tooltip.blocked){return
}if(I&&I.target&&I.target.tagName=="OPTION"){return
}if(!p&&c.parent.is(":visible")){f(document.body).unbind("mousemove.tooltip")
}if(q==null){f(document.body).unbind("mousemove.tooltip");
return
}if(booking.env.bse_tooltip_new_pos||d){if(!z(q)){return
}e(I,z(q).positionLeft);
return
}var K=c.parent[0].offsetLeft;
var J=c.parent[0].offsetTop;
if(I){if(booking.env.touch_os){K=f(q).offset().left;
J=f(q).offset().top
}else{if(!z(q)){f(document.body).unbind("mousemove.tooltip");
if(c&&"parent" in c&&c.parent[0]&&c.parent[0].style.display!=="none"){c.parent[0].style.display="none"
}return false
}if(booking.env.tooltip_traversing){var H=z(q).left;
H=(typeof H==="function")?H.apply(q):H;
K=I.pageX+H
}else{K=I.pageX+z(q).left
}J=I.pageY+z(q).top
}var G=z(q).positionLeft?{left:"auto",right:f(window).width()-K,top:J}:{left:K,top:J};
c.parent.css(G)
}if(booking.env.touch_os){if(K>700){K=K-150
}else{if(K>600){K=K-100
}}c.parent.css({left:K+"px"})
}else{var E=y(),F=c.parent[0];
if(E.x+E.cx<F.offsetLeft+F.offsetWidth){K-=F.offsetWidth+20+z(q).left;
c.parent.css({left:K+"px"}).addClass("viewport-right")
}if(E.y+E.cy<F.offsetTop+F.offsetHeight){J-=F.offsetHeight+20+z(q).top;
c.parent.css({top:J+"px"}).addClass("viewport-bottom")
}if(F.offsetLeft<E.x||z(q).positionLeft){K=10;
c.parent.css({left:K+"px"}).addClass("viewport-left")
}}}function e(H,K){var F=y();
var G=c.parent[0];
var E=(f.browser.msie&&parseInt(f.browser.version,10)>=10);
var J=H?H.pageX+12:G.offsetLeft;
var I=H?(E?(H.clientY+f(window).scrollTop()):H.pageY)+12:G.offsetTop;
if(F.x+F.cx<J+G.offsetWidth){if(booking.env.bse_tooltip_new_pos){J=J-G.childNodes[0].offsetWidth-24
}else{if(!K){J=J-G.offsetWidth-24
}}if(J<F.x+5){J=5
}}if(F.y+F.cy<I+G.offsetHeight+5){I=F.y+F.cy-G.offsetHeight-5
}if(K&&H){J=J-f(G).width()-15
}c.parent.css({left:J,top:I})
}function y(){return{x:f(window).scrollLeft(),y:f(window).scrollTop(),cx:f(window).width(),cy:f(window).height()-11}
}function l(G){if(f.tooltip.blocked){return
}if(n){clearTimeout(n)
}q=null;
var F=z(this);
function E(){c.parent.removeClass(F.extraClass).hide().css("opacity","")
}if((!j||!f.fn.bgiframe)&&F.fade){if(c.parent.is(":animated")){c.parent.stop().fadeTo(F.fade,0,E)
}else{if(booking.env.tooltip_hide_without_fadeout){c.parent.stop().hide();
E()
}else{c.parent.stop().fadeOut(F.fade,E)
}}}else{E()
}if(z(this).fixPNG){c.parent.unfixPNG()
}if(typeof ClickTaleExec==="function"){ClickTaleExec(o(this,"mouseout"))
}}})(jQuery)
}if(!booking.env.skip_old_tt){(function(){var c=booking[sNSStartupLoad].tooltip_3={priority:8,lazy:true,init:function(){this.addTooltip(document);
return true
},setupTooltip:function(e){var f=$(".jq_tooltip",e);
f.each(function(){var g=this,h,j;
h=g.getAttribute("data-width")?g.getAttribute("data-width"):(g.getAttribute("rel")||0),j=(g.getAttribute("data-width")?-g.getAttribute("data-width")/2:-(g.getAttribute("rel")||0))/2;
$(g).tooltip({showURL:false,track:true,opacity:1,fade:250,width:h,left:j,top:18})
})
},setupStaticMap:function(f){var e=$(".map_static_zoom.show_map.jq_tooltip",f).eq(0),g=e.attr("data-width")?e.attr("data-width"):(e.attr("rel")||0);
e.tooltip({bodyHandler:function(){return $(this).find(".map_hp_static_tooltip").html()
},showURL:false,track:true,opacity:1,fade:250,width:g,left:-200,top:18})
},setupPolicy:function(e){if(B.track.getVariant("BUcJHGeFZBHeHQITURDFKTSdZHO")===3){$(".policy_name.jq_tooltip, .policy_name_tt.jq_tooltip, .hp_rt_icv__3_tt_bottom.jq_tooltip",e).tooltip({bodyHandler:function(){var f=$(this).siblings(".differing_policies");
return f.html()
},showURL:false,track:true,opacity:1,fade:250,width:400,left:-200,top:18})
}else{$(".policy_name.jq_tooltip, .policy_name_tt.jq_tooltip",e).tooltip({bodyHandler:function(){var f=$(this).siblings(".differing_policies");
return f.html()
},showURL:false,track:true,opacity:1,fade:250,width:400,left:-200,top:18})
}},setupLandmark:function(e){$(".landmark_highlighted",e).each(function(){var j=$(this),g=524;
var h=j.hasClass("left_tt");
var f=j.attr("data-landmark");
j.tooltip({bodyHandler:function(){return $("#landmark-"+f).html()
},showURL:false,track:true,width:g,left:-(g/2),top:18,extraClass:"opaque",black:true,positionLeft:h})
})
},addTooltip:function(e){this.setupTooltip(e);
this.setupPolicy(e);
this.setupLandmark(e);
if(B.track.getVariant("eGBUedSaTfRe")){this.setupStaticMap(e)
}}};
if("ontouchstart" in document.documentElement){var d=/(chrome)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase());
if(!d){c.setupTooltip=function(e){$(".jq_tooltip",e).each(function(){var g=$(this),h=g.attr("data-width")?g.attr("data-width"):g.attr("rel"),f=(h)?(h.match(/\d+/)||0):0;
if(!g.hasClass("urgency_link")){g.tooltip({showURL:false,track:false,opacity:1,fade:250,width:f,extraClass:"opaque"})
}})
};
c.setupPolicy=function(e){$(".policy_name.jq_tooltip, .policy_name_tt.jq_tooltip",e).tooltip({bodyHandler:function(){return $(this).siblings(".differing_policies").html()
},showURL:false,track:false,opacity:1,fade:250,width:400,extraClass:"opaque"});
if(booking.env.b_site_experiment_t_bp_fix_tooltip==1){$("body, .show_map").bind("touchend",function(g){var f=$(g.target);
if($("#tooltip").css("display")=="block"&&f.attr("id")!=="tooltip"&&!f.hasClass("jq_tooltip")&&!f.parents("#tooltip").length&&!f.parents().hasClass("jq_tooltip")){$("#tooltip").hide();
$.tooltip.block();
setTimeout(function(){$.tooltip.block()
},500)
}})
}else{$("body, .show_map").click(function(){$("#tooltip").hide()
})
}$("sup.jq_tooltip, tr.dotter").removeAttr("onclick")
}
}}})()
}else{(function(){var c=booking[sNSStartupLoad].tooltip_3={addTooltip:function(){}}
})()
}booking[sNSExperiments].rewrite_tt={priority:9,version:"1.2.5",tt:null,ttWinHeight:0,ttWinWidth:0,ttScrollTop:0,ttScrollLeft:0,ttShowLeft:false,ttCounter:0,ttShow:null,ttContent:"",ttCurElem:null,ttCurText:"",ttTimedOut:null,ttTimeout:300,ttClass:"basic_tooltip_class",ttNodes:[".jq_tooltip","*[data-title]",".policy_name_tt"],toolTips:{},preLoadedImages:{},init:function(){var c=this;
if(booking.track.getVariant("NKNMUSUPWAQCXeRe")===1){this.ttNodes.push("*[title]")
}if(booking.env.b_is_ie7){this.ttTimeout=0
}this.tt=document.getElementById("tooltip_wrap")||function(){var d=document.createElement("div");
d.id="tooltip_wrap";
var e='<div class="tt_shadow"><div class="tt_content"></div></div>';
document.body.appendChild(d);
d.innerHTML=e;
return d
}();
window.onresize=function(){c.setWindowSize()
};
window.onscroll=function(){c.setScrollPosition()
};
setTimeout(function(){var d=c.ttNodes.join(", ");
c.ttContent=($(".tt_content",c.tt).length)?$(".tt_content",c.tt).get(0):c.tt;
c.setWindowSize();
c.setScrollPosition();
$("body").delegate(d,"mouseover mouseout mousemove",function(j){var h=j||window.event;
var g=h.pageX||(h.clientX+this.ttScrollLeft);
var f=h.pageY||(h.clientY+this.ttScrollTop);
if(h.type==="mouseout"){c.showHideTooltip(null,g,f)
}else{c.showHideTooltip(this,g,f)
}});
if(booking.env.b_is_ie8){var e=c.ttNodes.join("[title], ");
$(e).each(function(){var f=this.getAttribute("title");
this.setAttribute("data-title",f);
this.removeAttribute("title")
})
}},500)
},showHideTooltip:function(f,e,d){if(this.ttShow!=null||f==null){if(f!=this.ttCurElem&&this.ttCurElem!=null){this.ttShow=null;
this.tt.style.display="none";
this.ttContent.innerHTML="";
this.tt.className="";
this.tt.style.display="none";
this.tt.style.width="auto";
this.ttCurText="";
this.ttCurElem=null;
this.ttShowLeft=false
}else{var c=this.getPosition(e,d,this.tt);
this.tt.style.left=c[0]+"px";
this.tt.style.top=c[1]+"px"
}}else{var j=this.getTTNode(f);
if(j!=null){this.ttShow=f.id;
var h=j;
this.ttCurElem=f;
this.ttCurText=h[0];
var g=(h[1]!="")?h[1]:this.ttClass;
if(h[2]){this.ttShowLeft=true
}if(h[4]){g+=" tt_loading";
this.preloadImg(f.id)
}this.ttContent.innerHTML=this.ttCurText;
this.tt.className=g;
if(h[3]!=null){this.tt.style.width=h[3]+"px"
}if(!h[4]){this.showToolTip(0)
}var c=this.getPosition(e,d,this.tt);
this.tt.style.left=c[0]+"px";
this.tt.style.top=c[1]+"px"
}}},showToolTip:function(e){var d=this;
if(this.ttTimeout!=0){var c=(e<this.ttTimeout)?this.ttTimeout-e:10;
if(d.showingTooltip){clearTimeout(d.showingTooltip)
}d.showingTooltip=setTimeout(function(){if(d.ttCurText!=""){d.tt.style.display="block"
}else{d.showHideTooltip(null,0,0)
}},c)
}else{this.tt.style.display="block"
}},setScrollPosition:function(){if(typeof window.pageYOffset=="number"){this.ttScrollLeft=window.pageXOffset;
this.ttScrollTop=window.pageYOffset
}else{if(document.documentElement&&document.documentElement.scrollTop){this.ttScrollLeft=document.documentElement.scrollLeft;
this.ttScrollTop=document.documentElement.scrollTop
}else{this.ttScrollLeft=document.body.scrollLeft;
this.ttScrollTop=document.body.scrollTop
}}},setWindowSize:function(){if(!window.innerWidth){if(!(document.documentElement.clientWidth==0)){this.ttWinWidth=document.documentElement.clientWidth;
this.ttWinHeight=document.documentElement.clientHeight
}else{this.ttWinWidth=document.body.clientWidth;
this.ttWinHeight=document.body.clientHeight
}}else{this.ttWinWidth=window.innerWidth;
this.ttWinHeight=window.innerHeight
}},getTTNode:function(e){if(e.id){var f=e.id
}else{this.ttCounter++;
var f="b_tt_holder_"+this.ttCounter;
e.id=f
}if(this.toolTips[f]){return this.toolTips[f]
}else{if($(e).hasClass("policy_name_tt")){var k=$(e).siblings(".differing_policies").html()
}else{var k=e.getAttribute("data-title")||e.getAttribute("title")
}var c=e.nodeName.toLowerCase();
if(c=="option"||c=="link"||c=="select"){k=""
}if(k&&k!=""){var h=this.ttClass;
var d=false;
var j=false;
if(e.className.indexOf("hotel_name_link")>-1&&booking.track.getVariant("NKNMUSUPWAQCXeRe")!==1){j=true
}if(!j){var l=null;
var m=e.getAttribute("data-width");
if(m&&!isNaN(m)&&m>150&&m<1001){l=m
}else{var n=e.getAttribute("rel");
if(n&&!isNaN(n)&&n>150&&n<1001){l=n
}}var g=(k.indexOf("<img")>-1&&l==null)?true:false;
this.toolTips[f]=[k,h,d,l,g];
if(e.getAttribute("title")!=null){if(e.getAttribute("data-title")==null){e.setAttribute("data-title",e.title)
}e.title="";
e.removeAttribute("title")
}if(booking.env.b_is_ie){e.removeAttribute("alt")
}return this.toolTips[f]
}else{return null
}}else{return null
}}},getPosition:function(j,g,f){var k=j+15;
var h=g+10;
var c=$(f).width();
var d=$(f).height();
var e=20;
if((j+c+this.ttScrollLeft>this.ttWinWidth-e)||(this.ttShowLeft&&j>c+e)){k=j-c-e
}if(g+d-this.ttScrollTop>this.ttWinHeight-e){h=this.ttWinHeight-d-e+this.ttScrollTop
}return[k,h]
},preloadImg:function(d){var g=this;
var e=new Date();
var c=this.toolTips[d][0].match(/src=['"]([^'"]+)['"]/);
if(!c[1]){this.toolTips[d][4]=false;
return
}if(this.preLoadedImages[c[1]]){return
}this.preLoadedImages[c[1]]={ttid:d,loaded:false};
var f=document.createElement("img");
f.onload=function(){g.preLoadedImages[this.src].loaded=true;
var j=g.preLoadedImages[this.src].ttid;
var l=g.toolTips[j];
var m=this.width+37;
if(m>150){l[3]=m
}l[4]=false;
if(g.ttShow!==j){return
}else{if(l[3]!=null){g.tt.style.width=l[3]+"px"
}var k=new Date();
var h=k.getTime()-e.getTime();
g.showToolTip(h)
}};
f.src=c[1]
}};
booking.ensureNamespaceExists(sNSStartup);
booking[sNSStartup].touch_device_check={priority:5,init:function(){booking.env.touch_os=("ontouchstart" in document.documentElement)?true:false;
if(/(chrome)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase())){booking.env.touch_os=false
}return true
}};
booking[sNSExperiments]["ZeZdTYMIfSMTBSSWe"]={init:function(){var c=this;
booking[sNSExperiments].user_center_bar.positionPopover($("#current_account .popover_trigger"),{popover:".confirmation_email_sent"});
$(".confirmation_email_sent").click(function(){c.remove()
});
$(".profile_menu_trigger").mousedown(function(){c.remove()
})
},remove:function(){$(".confirmation_email_sent").remove()
}};
booking[sNSStartup].ua_header_notifications={init:function(){var d=$(".js-uc-notifications");
var c=d.find(".js-uc-notification").length;
var e=function(){var g=$(this).closest(".js-uc-notification");
var f={type:g.attr("data-type"),fingerprint:g.attr("data-fingerprint")};
$.post("/dismiss_user_notification",f);
$(this).closest(".js-uc-notification").addClass("uc-notification_hidden");
if(!--c){d.removeClass("uc-notifications_new")
}};
d.find(".js-uc-notification-close").bind("click",e)
}};
booking[sNSExperiments]["ZePeYAcAGGVXOILIEVPcZAbTYO"]={trackMe:function(){B.eventEmitter.bind("user_access_menu_register_tab",function(){booking.track.exp("ZePeYAcAGGVXOILIEVPcZAbTYO")
})
},init:function(){var c=false;
this.trackMe();
B.eventEmitter.bind("passStrength",function(){len=$(".user_signup_password").val().length;
if(len&&!c){$(".user_access_password_strength").addClass("subtler-pass--active");
c=true
}else{if(len>7){$(".pass_strength_text").addClass("subtler-valid")
}else{$(".pass_strength_text").removeClass("subtler-valid")
}}})
},initElse:function(){this.trackMe()
}};
booking[sNSStartup].unsubscribe={priority:1,init:function(){var d=this;
var c=5000;
if(booking.env.b_action==="unsubscribe"){$(".preview_weekly_mail").click(function(){booking[sNSStartup].lightbox.show($("#preview_weekly"),{customWrapperClassName:"nl_preview-lightbox"});
return false
});
$(".preview_cityspecial_mail").click(function(){booking[sNSStartup].lightbox.show($("#preview_cityspecial"),{customWrapperClassName:"nl_preview-lightbox"});
return false
});
$(".preview_popular_mail").click(function(){booking[sNSStartup].lightbox.show($("#preview_popular"),{customWrapperClassName:"nl_preview-lightbox"});
return false
});
$(".preview_deals_mail").click(function(){booking[sNSStartup].lightbox.show($("#preview_deals"),{customWrapperClassName:"nl_preview-lightbox"});
return false
});
$(".preview_lazysunday_mail").click(function(){booking[sNSStartup].lightbox.show($("#preview_lazysunday"),{customWrapperClassName:"nl_preview-lightbox"});
return false
});
$(".unsub_data").click(function(){var e=$(this).prev().find("input:checkbox");
if(e.attr("checked")){e.attr("checked",false)
}else{e.attr("checked",true)
}});
$(".unsubSave").click(function(j){j.preventDefault();
$(".unsub_messages p").each(function(){$(this).hide()
});
$(this).next(".loader_placer").addClass("unsub_loader");
var g=$("#unsubscription_management");
var h={};
h.email=($("input[name=b_subscriber_email]",g).val()?$("input[name=b_subscriber_email]",g).val():false);
h.token=($("input[name=token]",g).val()?$("input[name=token]",g).val():false);
if(h.token){dataString="token="+h.token
}else{dataString="email="+h.email
}var f=true;
$(".unsubCampaigns li input:checkbox").each(function(m){if(this.checked){var l=$(this).val();
var k=1;
f=false
}else{var l=$(this).val();
var k=0
}h[l]=k
});
dataString=dataString+"&label="+booking.env.b_label+"&subscribe_weekly="+h.subscribe_weekly+"&subscribe_sunday_newsletter="+h.subscribe_sunday_newsletter+"&subscribe_popular="+h.subscribe_popular+"&subscribe_flash_deals="+h.subscribe_flash_deals+"&subscribe_cityspecial="+h.subscribe_cityspecial;
if(typeof(h.subscribe_villas)!=="undefined"){dataString+="&subscribe_villas="+h.subscribe_villas
}if(typeof(h.subscribe_genius)!=="undefined"){dataString+="&subscribe_genius="+h.subscribe_genius
}$.ajax({type:"POST",url:"/update_newsletter_subscription",data:dataString,dataType:"json",success:function(k){$(".loader_placer").removeClass("unsub_loader");
var e=$(".unsub_messages");
if(k.success=="1"){$(e).find("p.feedback").each(function(){$(this).hide()
});
if(f){$(e).find("p.successall").show()
}else{$(e).find("p.success").show()
}}else{$(e).find("p.feedback").each(function(){$(this).hide()
});
$(e).find("p.error.someerror").show()
}}});
return false
})
}}};
booking[sNSStartup].userAccessFormValidation={init:function(){booking.userAccessFormHandler.init()
}};
booking.userAccessFormHandler=(function(d){var c={$userAccessMenu:{},$parentForm:{},$parentFormWrapper:{},submitHooks:{},globalSubmitHooks:{},_init:function(e){var f=this;
this.$userAccessMenu=$(".user_access_menu");
if(e){this.$userAccessMenu=$(targetForm)
}this.$userAccessMenu.delegate(".user_access_section_trigger","click",function(){var j=$(this),h=j.parents(".user_access_menu"),g=this.getAttribute("data-target");
$(".form-section",h).addClass("form-hidden-section").removeClass("form-shown-section");
f.$parentForm=$("."+g,h);
f.$parentForm.removeClass("form-hidden-section").addClass("form-shown-section");
$(".form-tabs",h).removeClass("user_menu_active_tab");
$("."+g+"_tab",h).addClass("user_menu_active_tab");
if(booking.eventEmitter){if(j.data("target")=="user_access_signup_menu"){booking.eventEmitter.trigger("user_access_menu_register_tab")
}if(j.data("target")=="user_access_signin_menu"){booking.eventEmitter.trigger("user_access_menu_login_tab")
}}return false
});
$(".user_access_menu_auth_low_not_me").click(function(j){var k=$(j.target).attr("href"),h,g;
if(k){h='<form method="POST" action="'+k+'" ><input type="hidden" name="logout" value="1" /></form>';
g=$(h);
j.preventDefault();
$("body").append(g);
g.submit()
}});
$("body").delegate(".user_access_form","submit",function(){f.$parentForm=$(this);
f.$parentFormWrapper=$(this).parents(".form-section");
if(f._validateForm()){$(".form-loading",f.$parentFormWrapper).show();
if(booking.track.getVariant("IZdPZPUTYBTVaDAae")){$(this).trigger("submit_pb_mybooking_cant_find")
}if($(this).hasClass("form-secondary-login")&&$.browser.msie&&parseInt($.browser.version)<9){var j="&"+$(this).serialize(),h=$(this).attr("action"),g=h+j;
location.href=g
}}else{return false
}});
$("#login_redesign").click(function(){$(".bs2_inline_signin_box").toggle();
booking.track.exp("ZeZKPFTaFTafWe");
booking.track.exp("ZeZSAdVRcEXFADXJYGfBbPCFdMLKe")
});
this._initPassStrength();
if(location.protocol=="https:"&&booking.env.b_is_app){$(".user_access_form").each(function(){var h=$(this),g=h.attr("action");
if(g.indexOf("protocol=http")!==-1&&g.indexOf("protocol=https")===-1){g=g.replace("protocol=http","protocol=https_www");
h.attr("action",g)
}else{if(g.indexOf("protocol=https")!==-1){g=g.replace("protocol=https","protocol=https_www");
h.attr("action",g)
}}})
}},_initPassStrength:function(f){var g,e=this;
if(!f){f=".password_strength"
}this.$userAccessMenu.delegate(f,"keyup",function(){var h=$(this),j=h.val();
if(g){clearTimeout(g)
}g=setTimeout(function(){e._calculatePasswordStrength(h,j);
if(booking.eventEmitter){B.eventEmitter.trigger("passStrength")
}},400)
})
},_validateForm:function(){if(!this.$parentForm.length){return 1
}var f=true,e=d.error_sign_up_password_email_combo_01;
$("input",this.$parentForm).each(function(){var k=$(this),j=k.attr("data-validation"),p,m,n=k.val(),g,l;
if(j){j=j.split("|");
for(var h=0,o=j.length;
(h<o)&&f;
h++){p=j[h].split(/\{/);
m=p[0];
if(m==="required"&&!n){f=false
}else{if(m==="numeric_with_dots"||m==="numeric"){if(m==="numeric_with_dots"){n=n.replace(/\./g,"");
k.val(n)
}if(!/^\d+$/g.test(n)){f=false
}}else{if(/min_length\([0-9]+\)/.test(m)){g=(m.split("("))[1];
g=g.slice(0,-1);
if(n.length<g){f=false
}}else{if(/required_match\([a-zA-Z_]+\)/.test(m)){l=(m.split("("))[1];
l=l.slice(0,-1);
if($(this).val()!==$("#"+l).val()){f=false
}}}}}if(p[1]){e=(p[1]).slice(0,-1)
}}if(!f){return false
}}});
if(!f){$(".alert-error",this.$parentFormWrapper).html(e).show();
booking.eventEmitter.trigger("form-error",this.$parentFormWrapper);
return false
}else{return true
}},_calculatePasswordStrength:function(j,q){if(typeof(q)==="undefined"||typeof(q.length)==="undefined"){return
}var e=q.length,r=parseInt(e/2.5),f="!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_",w="ABCDEFGHIJKLMNOPQRSTUVWXYZ",l=0,o=false,n=0,m=0,t=j.parents(".user_access_form"),h=$(".password_strength_wrapper",t).find(".pass_strength_step").width(),g,p,u=$(".password_strength_wrapper",t).find(".pass_strength_progress");
for(var k=0;
k<e;
k++){if(!isNaN(q.charAt(k))){l+=1
}else{o=true
}if(f.indexOf(q.charAt(k))>-1){n+=2
}if(w.indexOf(q.charAt(k))>-1){m+=1
}}if(n>4){n=4
}if(l>2){l=2
}if(m>2){m=2
}if(o){r+=l
}r+=n;
r+=m;
if(r>10){r=10
}else{if(r===0){r=1
}}if(e<8){u.addClass("pass_strength_invalid");
if(r>3){r=3
}p=0
}else{u.removeClass("pass_strength_invalid");
p=parseInt(r/2)+1
}g=h*r;
u.animate({width:g+"px"});
$(".pass_strength_text",t).text(d.b_password_strength_msg[p])
},_displayErrorMsg:function(e){if(!e||!e.msg){return
}var f,g;
if(e.parent){g=$(e.parent)
}if(e.target){f=$(e.target,g)
}else{f=$(".alert-error",g)
}f.html(e.msg).addClass("alert-displayed");
$(".form-loading, #page_login_loading").hide();
if(booking.env.is_genius_onboarding&&!B.track.getVariant("cQYIMdUVUKeYEGeZBcfEUbQWe")){slidesHeight=$("#slide1").height();
$("#slides").animate({height:slidesHeight})
}},_addSubmitHook:function(f,g,h){var e=(h?this.globalSubmitHooks:this.submitHooks);
if(!g||!f){return
}e[f]=g
},_removeSubmitHook:function(f,g){var e=(g?this.globalSubmitHooks:this.submitHooks);
if(!c){return
}delete e[f]
}};
return{init:function(){c._init()
},initPassStrength:function(e){c._initPassStrength(e)
},displayErrorMsg:c._displayErrorMsg}
})(booking.env);
booking[sNSStartup].user_menu_dropdowns=(function(){var k=false;
var h=false;
var g=function(){var n=$("#current_language_foldout");
f(n);
$(".uc_currency a.popover_trigger").click(function(){d()
});
if(booking.track.getVariant("IZVFUZZOZbEfKFWC")===1){$(".uc_language a.popover_trigger").click(function(){e();
booking.track.custom_goal("IZVFUZZOZbEfKFWC","1")
})
}$(".uc_currency a.popover_trigger").hover(m);
$(".uc_language a.popover_trigger").hover(m);
function m(){booking.track.exp("YdAFAEaXCfAOIOFQKecbLOLHT")
}var l=function(){booking.track.exp("ZNIPPQFFbeCeSGXFC")
};
$(".user_center_option a.popover_trigger").click(l)
};
var d=function(){if(!k){var l=document.location.href;
$.get(booking.env.b_currency_url,function(m){$("#current_currency").html(m);
f($("#current_currency_foldout"));
j($("#current_currency a"));
k=true
})
}};
var e=function(){if(!h){var l=document.location.href;
$.get(booking.env.b_languages_url,function(m){$("#current_language").html(m);
f($("#current_language_foldout"));
c($("#current_language li"));
h=true
})
}};
var c=function(l){$(l).each(function(){var q=booking.env.b_this_url_without_lang;
var o=$(this).attr("data-lang");
var m;
if(booking.env.b_action=="genius"){var p=$(this).find("a").attr("href");
m=q+"&lang="+o
}else{var t=q.indexOf(".html");
if(t<0){return
}m=[q.slice(0,t),"."+o,q.slice(t)].join("")
}var n=$(this).find("a").attr("href");
var r=n.match(/cdl=([\w|\-]{0,5})$/);
if(r!==null){if(m.indexOf("?")>-1){m+=";"
}else{m+="?"
}m+="cdl="+r[1]
}$(this).find("a").attr("href",m)
})
};
var j=function(l){$(l).each(function(){var m=booking.env.b_this_url;
if(booking.env.b_action=="genius"||booking.env.b_action=="guest"){m=booking.env.b_this_url_without_lang
}var o=$(this).attr("data-currency");
var n=(m.indexOf("?")>-1)?";":"?";
o+=";changed_currency=1";
$(this).attr("href",m+n+"selected_currency="+o)
})
};
var f=function(m){var l="loading_option";
m.delegate("a","click",function(o){var n=$(this).parent();
if(n.hasClass("selected_language")||n.hasClass("selected_currency")){o.preventDefault();
return
}if(n.hasClass(l)){o.preventDefault()
}else{m.find("."+l).removeClass(l)
}n.addClass(l)
})
};
return{init:g}
}());
booking[sNSStartupLoad].user_wishlists={priority:9,storedOwnerLink:null,stateMachineForHotelPageModalWindow:null,init:function(){this.initializeWishlist()
},getParentWrapper:function(c){return $(c).parents(".wishlist_widget")
},addToSide:function(d){var j=booking.user.wishlists.lists[d],f=$(".user_wishlists").find(".open_menu").not(".wl-update"),c="",h,g,e='<li> <a id="wl_menu_item_{{idx}}" href="/?;wl_id={{idx}}" data-trackname="Default" data-lid="{{idx}}"> <div class="wrapper"> <span class="wl_name">{{name}}</span> <span class="wl_count"> <span class="wl_item_float_right alert-badge alert-badge-count wl-badge-fixed-size">{{count}}</span> <span class="wl-lock {{lock_hide}}"></span> <span class="wl_small_group_icon {{group_icon}}">&nbsp;</span> </span> </div> </a> </li>';
h=(j.isCollaborated)?"":"wl-hide";
group_icon=($("#inside-variant-1").length)?"wl-newgroup":"";
g=(j.privacy!=0)?"wl-hide":"";
c=e;
c=c.replace(/{{idx}}/g,d).replace("{{group_hide}}",h).replace("{{group_icon}}",group_icon).replace("{{lock_hide}}",g).replace("{{name}}",j.name).replace("{{count}}",j.numPlaces);
f.prepend(c)
},initializeWishlist:function(){var c=this;
if(booking.browserStorageHandler.getSessionValue("wish_modal",true)){if($("#wishlist_modal").length){this.triggerWishlistModal()
}booking.browserStorageHandler.deleteSessionValue("wish_modal",true)
}if(booking.env.b_action=="searchresults"){$("#right").delegate(".wishlist_trigger","click",function(f){c.triggerWishlistModal(this);
return false
})
}else{if(booking.env.b_action=="destinationfinder"){$("#dsf_citylist").delegate(".wishlist_trigger","click",function(f){c.triggerWishlistModal(this);
return false
})
}else{$(".wishlist_trigger").click(function(){c.triggerWishlistModal(this);
return false
})
}}$("#wl_settings_modal").delegate("#wl-edit-privacy","change",function(){var h=$(this).data("wlId"),g=$(this).val(),f=$(this).data("wlName");
$.ajax({url:"/wishlist/update",type:"GET",dataType:"json",data:{list_id:h,privacy:g,name:f},success:function(j){if(j.success){if(g==1){$(".wl-lock-bigicon").addClass("wl-hid");
$(".cur_menu").find(".wl-lock").addClass("wl-hid");
$(".wishlist-list-update").find(':contains("'+f+'")').parents("a:first").find(".wl-lock").removeClass("wl-show")
}else{if($(".wl-lock-bigicon").length){$(".wl-lock-bigicon").removeClass("wl-hid");
$(".cur_menu").find(".wl-lock").removeClass("wl-hid");
$(".wishlist-list-update").find(':contains("'+f+'")').parents("a:first").find(".wl-lock").addClass("wl-show")
}else{$(".wishlist-main-title").parent().append('<i title="" class="wl-lock-bigicon">&nbsp;</i>');
$(".cur_menu").find(".wl-newgroup").before('<span class="wl-lock"></span>');
$(".wishlist-list-update").find(':contains("'+f+'")').parents("a:first").find(".wl-lock-if").addClass("wl-show")
}}}}})
});
$(".add_wl").click(function(){var f=c.getParentWrapper(this);
f.find(".wishlist-actions-block .inputText").attr("value","");
f.find(".wishlist-actions-block").toggle();
f.find(".modal-wrapper #wl_name_input").focus()
});
$("#wl_list").delegate("li","click",function(g){var f,h=$(this);
if(g.target.nodeName!=="INPUT"){g.preventDefault();
f=($("input:checked",this).length?"":"checked");
$("input",h).attr("checked",f)
}h.toggleClass("changed");
if($("#wl_list li.changed").length){$(".save_wl").removeClass("disabled")
}else{$(".save_wl").addClass("disabled")
}});
$(".wl_create_form").submit(function(f){var r=$(this),o,n=false,g=true,q=0;
if($(this).attr("id")=="wl_create_from_sidebar"){var p=1
}else{if($(this).attr("id")=="wl_create_from_user_center_bar"){var k=1
}else{if($(this).attr("id")=="wl_create_from_hotel_page"){var j=1
}}}if($(".inputText",r).length){var m=$(".inputText",r).val()
}else{var m=$(".input-text",r).val();
var l=1
}q=$(".wl-privacy").val();
if(booking.track.getVariant("beKMDNdEPORACMSCMSGEHT")){o=[];
r.find(".wishlist-collaborator-email-input").each(function(){var t=$(this),u=t.val();
if($.trim(u)!=""){n=true
}if(!u||(u&&!c.email_check(u))){t.addClass("wishlist-collaborator-email-input-invalid");
g=false
}else{o.push(u)
}})
}if(!m==""&&!(n&&!g)){$.get(r.attr("action"),{name:m,privacy:parseInt(q,10)},function(w){if(w.success&&w.success=="1"){var u,t=$("#wishlist_modal");
$(".empty_name_error").hide();
r.find(".wl_nameList_input, #wl_name_input").val("");
r.find(".wl-privacy").val("1");
r.find(".wl-dropdown-menu").hide();
r.find(".wl-dropdown-toggle").removeClass("collapsed");
$("#wl_list").prepend('<li><label><input type="checkbox" id="wl_'+w.id+'" value="wl_'+w.id+'" data-titlewl="'+m+'" /> '+m+"</label></li>");
$("#wl_list li:first").click();
t.find(".wl_create_form").hide();
t.find("#wl_actions_default").show();
t.find(".create_wl").show();
u='<li><a href="'+booking.env.new_wishlist_url+""+w.id+'"><span>'+m+"</span></a></li>";
$(u).insertBefore("#profileMenu li.add_wl_trigger");
if(p){booking[sNSStartup].lightbox.hide($("#add_wishlist_modal"))
}u='<li><a href="'+booking.env.new_wishlist_url+""+w.id+'"><span>'+m+"</span></a></li>";
$("#search_tab_wishlists_content .menu_wishlists").append(u);
booking.user.wishlists.lists[w.id.toString()]={numPlaces:0,name:m,url:booking.env.new_wishlist_url+w.id,index:booking.user.wishlists.listCount,isNewList:1,privacy:q,isCollaborated:n};
c.updateWishlistsStatus();
c.addToSide(w.id.toString());
$(".scrolling_list").scrollTop(0);
if(booking.user.wishlists.listCount>3){$(".wl_list_box").addClass("scrolling_list");
$(".wishlists_listing").addClass("scrolling_list");
$(".wishlist-actions-block").addClass("wishlist-actions-block-s-scrolling-list");
if(booking.user.wishlists.listCount==30){$(".exceed_wl_limit").show()
}}$("#wl_list_number").text(booking.user.wishlists.listCount);
if(n){e({listIds:w.id,operation:"add",emailAddresses:o})
}}else{$(".exceed_wl_limit").show()
}})
}else{if(!m){var h=c.getParentWrapper(this);
h.find(".empty_name_error").show()
}else{if(n&&!g){}}}$(".wl_create_form").submit(function(){return false
});
f.preventDefault();
return false
});
$(".save_wl").click(function(){if($(this).hasClass("disabled")){return false
}else{var k="";
var f="";
var q=true;
var t=$(".wishlist-social-count-number");
var p=0;
var r;
var n;
var m=[];
$("#wl_list li.changed").each(function(){var y=(k=="")?"":",",x=$("input",this).attr("id").replace("wl_","")||"",w=booking.user.wishlists.lists[x.toString()];
if(!w){return
}k+=y+x;
if($("input:checked",this).length){new_state="1";
p++;
w.numPlaces++;
w.currentHotelIsAdded=1;
m.push(x)
}else{new_state="0";
p--;
w.currentHotelIsAdded=0;
if(w.numPlaces>0){w.numPlaces--
}}f+=y+new_state
});
if($("#wl_list input:checked").length){var q=false
}if(booking.track.getVariant("beKMDNdEPORACMSCMSGEHT")){if($("#shareCheck:checked").length){var o=$("#wl_create_new_and_share_list").find(".no_email_error");
var j=$("#wl_create_new_and_share_list").find(".wishlist-collaborator-email-input");
o.hide();
var g=[];
var l=false;
j.each(function(){$.each($(this).val().split(/[\s,;]+/),function(w,x){if(x){if(c.email_check(x)){g.push(x)
}else{l=true
}}})
});
if(l){booking.google.trackEvent(booking.google.clickTracker,"invate_invalid_address",j.val())
}if(g.length==0){o.show();
return false
}j.val("");
var h={};
h.listIds=m;
h.operation="add";
h.emailAddresses=g;
e(h)
}}if(t.length){socialCountNr=parseInt($(t.get(0)).text());
t.html(socialCountNr+p)
}else{$(".wishlist-social-count").hide();
$(".wishlist-social-count-overview").hide()
}var u=$("#wl_update_form").attr("class").replace("wl_update_form_","");
if(f===""){c.showSuccessMsg(q)
}else{r={lists:k,new_state:f,hotel_id:u};
n=$(".add_hotel_note_input");
if(n.length&&n.val()&&(n.val()!==n.attr("title"))){r.note=n.val()
}if(booking.track.getVariant("beKMDNdEPPPKfTdC")){$(".wishlist_lightbox").fadeOut(500,function(){booking[sNSStartup].lightbox.hide($("#wishlist_modal"));
$(".wishlist_trigger_box").addClass("feedback-fade")
})
}$.get($("#wl_update_form").attr("action"),r,function(x){if(x.success&&x.success=="1"){var w=c.storedOwnerLink;
c.showSuccessMsg(q);
c.stateMachineForHotelPageModalWindow=null;
if(booking.env.b_action=="destinationfinder"){w=$(w);
if(q){w.removeClass("saved_in_wl");
w.find("span").html(booking.env.not_added_to_list_cta)
}else{w.addClass("saved_in_wl");
w.find("span").html(booking.env.added_to_list_cta)
}}else{c.toggleStateIndication(!q)
}}})
}c.updateWishlistsStatus();
$("#wl_update_form").submit(function(){return false
});
return false
}});
$(".wl_remove_hotel").click(function(){if($("#wl_title").length){var g=$("#wl_title").attr("class").replace("wl_title_","")
}else{var g=$("#wl_title_shared_list").data("wl-id")
}hotel_box=$(this).parents(".wl_hotel_item");
var f=$(this).parents(".wl_hotel_item").attr("id").replace("hotel_","");
$.get("/wishlist/save_hotel",{lists:g,new_state:"0",hotel_id:f},function(k){if(k.success&&k.success=="1"){$(hotel_box).fadeOut().slideUp();
setTimeout(function(){$(hotel_box).remove();
if(!$(".wl_hotels_list .wl_hotel_item").length){$(".wishlist_no_content").show()
}},1000);
var j=$("#wl_dates_modal input[name=ss]");
j.val(j.val().replace(f,""));
var h=$("#wl_menu_item_"+g).find(".alert-badge-count");
var l=parseInt(h.text())-1;
h.text(l)
}else{}});
c.resizeFormwrap()
});
$(".wl_add_new_trigger").click(function(){booking[sNSStartup].lightbox.show($("#wl_create_modal"),{customWrapperClassName:"wl_create_modal_wrapper",hideCallBack:function(){$("#wl_create_modal #wl_name_input").val("")
}});
if($("li.user_wishlists ul li").length=="11"){$("#wl_create_modal .modal_title").hide();
$("#wl_create_modal .instructions").hide();
$("#wl_create_modal .wl_create_form").hide();
$("#wl_create_modal .exceed_wl_limit").css("margin","0").show()
}else{$("#wl_create_modal #wl_name_input").focus()
}});
$(".add_hotel_note_input").focus(function(){if($(this).val()==$(this).attr("title")){$(this).val("")
}$(this).css("border","2px solid #0896ff")
});
$(".add_hotel_note_input").blur(function(){var f=$(this).parents(".wl_hotel_item");
if($(this).val()==""){$(this).val($(this).attr("title"))
}$(this).css("border","1px solid #ccc")
});
$(".wl_add_note").click(function(){var k=$(this);
var g=k.parents(".wl_hotel_item");
var m=$(".add_hotel_note_input",g);
if($("#wl_title").length){var l=$("#wl_title").attr("class").replace("wl_title_","")
}else{var l=$("#wl_title_shared_list").attr("class").replace("wl_title_","")
}var h=$(g).attr("id").replace("hotel_","");
var f=$(m).val();
var j=$(".note_placeholder",g);
if($(".add_hotel_note_input:visible",g).length){$.get("/wishlist/add_note",{list_id:l,hotel_id:h,note:f},function(n){if(n.success&&n.success=="1"){if(f==$(m).attr("title")){$(".wl_add_note",g).html('<i class="btn_icon icon-pencil"></i> '+booking.env.save_note_to_hotel)
}else{j.html(f);
m.toggle();
j.toggle();
$(".wl_add_note",g).html('<i class="btn_icon icon-pencil"></i> '+booking.env.edit_note_to_hotel)
}}else{}})
}else{m.toggle();
m.focus();
j.toggle();
$(this).html('<i class="btn_icon icon-pencil"></i> '+booking.env.save_note_to_hotel)
}});
$(".wl_dates_trigger").click(function(){booking[sNSStartup].lightbox.show($("#wl_dates_modal"),{customWrapperClassName:"wl_dates_modal_wrapper",bOverflowVisible:true,hideCallBack:function(){$(".alert-error").hide()
}})
});
$(".wl_share_trigger").click(function(){var h=$(this),f,g;
booking[sNSStartup].lightbox.show($("#wl_share_modal"),{customWrapperClassName:"wl_share_modal_wrapper",hideCallBack:function(){$(".alert-error").hide()
}});
if(h.hasClass("wl_share_social")&&!h.hasClass("has_short_url")){f=h.data("share-url");
$.get("/short_uri?url="+f+"&aid="+booking.env.aid,function(l){var m=booking.env.user_wishlist_share_urls,j="http://booking.com/"+l.short_url;
$("#link_placeholder").html(j);
h.addClass("has_short_url");
if(m){for(var k in m){$("."+k).attr("href",(m[k]).replace("share_url_placeholder",j))
}}})
}});
$(".wl_email_send_link").click(function(l){l.preventDefault();
var f=false;
var g=$(this).closest("form");
var j=$(this).closest(".wl_create_modal_wrapper");
var k=g.find("#to");
var h=k.val();
$(".mail_send_success").hide();
j.find(".alert-error").hide();
if(!h){j.find(".alert-error").hide();
j.find(".no_email_error").show();
validInput=false
}else{if(!c.email_check(h)){j.find(".alert-error").hide();
j.find(".wrong_email_error").show();
validInput=false
}else{j.find(".alert-error").hide();
f=true;
validInput=true
}}if(f){$.ajax({url:"/mailafriend.html",type:"POST",data:g.serialize(),success:function(m){k.val("");
g.find("#maf_message").val("");
g.find(".wl_add_message_input_field").val("");
g.find(".mail_send_success strong").html(h);
g.find(".mail_send_success").show()
},error:function(){g.find(".mail_send_error").show()
}})
}});
$("#link_placeholder").click(function(){c.selectText("link_placeholder")
});
$(".wl_settings_trigger").click(function(){booking[sNSStartup].lightbox.show($("#wl_settings_modal"),{customWrapperClassName:"wl_settings_modal_wrapper",hideCallBack:function(){$(".alert-error").hide()
}})
});
$(".rename_wl").click(function(){var k=$(this),g=k.parents(".wishlist-edit-wrapper"),l=k.data("wl-id");
var h=g.find(".wishlist-edit-name-input").val(),j=true;
var f=g.find(".wishlist-edit-name-input").data("name");
h=$.trim(h);
if(h==""){g.find(".no_name_error").show();
var j=false
}else{$.get("/wishlist/update",{list_id:l,name:h,privacy:$("#wl-edit-privacy").val()},function(m){if(m.success&&m.success=="1"){$(".wishlist-main-title").text(h);
$("#profileMenu a.cur_menu span.wl_name").text(h);
booking[sNSStartup].lightbox.hide($("#wl_share_modal"));
if(f!=h){g.find(".wishlist-edit-name-input").data("name",h);
$(".wl_rename_confirm").show();
setTimeout(function(){$(".wl_rename_confirm").slideUp()
},3000)
}}else{}})
}$("#wl_settings_form").submit(function(){return false
});
return false
});
$(".delete_wishlist").click(function(){$("#wl_settings_modal .controls-row").hide();
$("#wl_settings_modal .confirm_delete_step").show();
$("#wl_settings_modal .rename_wl").hide()
});
$(".do_delete").click(function(){var h=$(this).data("wl-id");
if(booking.track.getVariant("ZeZKCBPXMPPKVGXRRT")){$.each(booking.user.wishlists.lists,function(l,k){if(l!==h){f=k.url;
return false
}})
}else{var j=$("li.user_wishlists li:first a").attr("id").replace("wl_menu_item_","");
var g=$("li.user_wishlists li:nth-child(2) a").attr("id").replace("wl_menu_item_","");
if(h!=j){var f=$("li.user_wishlists li:first a").attr("href")
}else{var f=$("li.user_wishlists li:nth-child(2) a").attr("href")
}}$.get("/wishlist/delete",{list_id:h},function(k){if(k.success&&k.success=="1"){window.location.href=f
}else{}})
});
$(".dont_delete").click(function(){$("#wl_settings_modal .controls-row").show();
$("#wl_settings_modal .confirm_delete_step").hide();
$("#wl_settings_modal .rename_wl").show()
});
$(".clear_wishlist").click(function(){var f=$(this).attr("data-wl-id");
$.get("/wishlist/remove_hotel",{list_id:f},function(g){if(g.success&&g.success=="1"){$(".wl_hotel_item").remove();
booking[sNSStartup].lightbox.hide($("#wl_settings_modal"));
$(".clear_all_form").hide();
$(".wl_actions").hide();
$("p.wishlist_no_content").show();
$(".wl_clear_confirm").show();
$("#wl_menu_item_"+f).find(".alert-badge-count").text("0");
delete booking.user.wishlists.lists[f.toString()];
c.updateWishlistsStatus();
setTimeout(function(){$(".wl_clear_confirm").slideUp()
},3000)
}else{}})
});
$("#wishlists_availform").submit(function(){var f=$(this);
formParams=f.serialize();
if(formParams.indexOf("checkin_monthday=0")!==-1||formParams.indexOf("checkin_year_month=0")!==-1||formParams.indexOf("checkout_monthday=0")!==-1||formParams.indexOf("checkout_year_month=0")!==-1){$("#wl_no_dates_error").show()
}else{$("#wl_no_dates_error").hide();
window.location=f.attr("action")+"?"+formParams
}return false
});
if(booking.track.getVariant("beKMDNdEPORACMSCMSGEcYJNKe")){$(".wl_collaborator_remove_links_inside").delegate(".wl_remove_user_btn","click",function(l){l.preventDefault();
var k=$(this),h=k.data("user-email"),j=k.data("wl-id"),g=k.data("operation"),f;
var m=false;
if(k.data("myself")){m=function(){document.location.reload(true)
}
}if(h&&g&&j){f=k.parents(".wl_edit_content_row");
e({listIds:j,operation:g,emailAddresses:h,callback:m,hideItem:f.length?f:this})
}});
$(".wishlist-add-collaborators-form").submit(function(h){h.preventDefault();
var o=$(this),f=true,l=o.data("wl-id"),m=o.find(".wishlist-collaborator-email-input").removeClass("wishlist-collaborator-email-input-invalid"),k=[],n,j,g=o.find(".mail_send_success");
g.hide();
o.find(".alert-error").hide();
m.each(function(){var p=$(this),q=p.val();
if(!q||(q&&!c.email_check(q))){p.addClass("wishlist-collaborator-email-input-invalid");
f=false
}else{k.push(q)
}});
n=o.find(".wl_add_message_input_field");
if(n.length&&n.val()){j=n.val()
}if(!f){o.find(".wrong_email_error").show()
}else{e({listIds:l,operation:"add",emailAddresses:k,message:j});
m.val("");
o.find(".wl_field_wrapper").each(function(p){if(p>0){$(this).remove()
}});
g.find("strong").html(k.join(", "));
o.find(".wl_add_message_input_field").val("");
g.show();
booking.eventEmitter.trigger("wishlist_shared");
$("#wl_menu_item_"+l).find(".wl_small_group_icon").fadeIn()
}});
var e=function(g){var f;
if(g&&g.emailAddresses&&($.isArray(g.emailAddresses)||typeof(g.emailAddresses)==="string")&&g.operation&&g.listIds){f={collaborators_emails:($.isArray(g.emailAddresses)?g.emailAddresses.join(","):g.emailAddresses),list_ids:($.isArray(g.listIds)?g.listIds.join(","):g.listIds),is_removed:(g.operation==="remove"?1:0),lang:booking.env.b_lang};
if(g.message){f.message=g.message
}$.ajax({url:"/wishlist/add_collaborators",type:"GET",data:f,success:function(h){if(g.hideItem&&h.success){$(g.hideItem).hide()
}if(g.callback&&h.success){g.callback.call()
}},error:function(){}})
}}
}var d=$("#wl-list-select");
$(".wishlist-trigger-btn").click(function(f){$("#wl-list-select").show();
return false
});
$(".wishlist-done").click(function(){c.promoteWishlistSharing();
c.updateWishlistDropdown()
});
$("#wishlist_modal").click(function(f){$parents=$(f.target).parents("#wl-list-select");
if(!$parents.length){c.promoteWishlistSharing();
c.updateWishlistDropdown();
$("#wl-list-select").hide()
}});
$(".wishlist-cancel-create").click(function(){d.find("#wl_actions_default").show();
d.find("#wl_create_from_hotel_page").hide()
})
},toggleStateIndication:function(c){if(c){$(".wishlist_trigger_button").addClass("saved_in_wl");
$(".wishlist_trigger_rounded_larger_button").addClass("saved_in_wl");
$(".wishlist_trigger_rounded_smaller_button").addClass("saved_in_wl");
$(".wishlist_trigger_button_smaller").addClass("saved_in_wl");
$(".wishlist_trigger_larger_button").addClass("saved_in_wl");
$(".js-wl-handle-text").html(booking.env.added_to_list_cta)
}else{$(".wishlist_trigger_button").removeClass("saved_in_wl");
$(".wishlist_trigger_rounded_larger_button").removeClass("saved_in_wl");
$(".wishlist_trigger_larger_button").removeClass("saved_in_wl");
$(".wishlist_trigger_rounded_smaller_button").removeClass("saved_in_wl");
$(".wishlist_trigger_button_smaller").removeClass("saved_in_wl");
$(".js-wl-handle-text").html(booking.env.not_added_to_list_cta)
}},updateWishlistDropdown:function(){var d;
$("#wl-list-select").hide();
var c=$(".wl_list_box").find("input:checked");
if(c.length===0){d=booking.env.wishlistChooseAList
}else{if(c.length===1){d=c.attr("data-titlewl")
}else{d=booking.env.savedToXWishlists.replace("wishlist_num_lists",(c.length.toString()))
}}$(".dropdown-toggle").html(d+'<span class="caret"></span>')
},initStateOfTheModal:function(c){if(this.stateMachineForHotelPageModalWindow){return
}var e={};
e.hotelWasAlreadyInWishlist=0;
e.hotelHasBeenAddedToTheWishlist=0;
e.hotelHasBeenRemovedFromTheWishlist=0;
e.originWishlistsId=[];
var d=c.find("input:checked");
if(d.length){e.hotelWasAlreadyInWishlist=1
}e.originWishlistsId=B.tools.object.map(d,function(f){return $(f).data("wl-id")
});
this.stateMachineForHotelPageModalWindow=e;
$("#wishlist_modal_content .collaborative_promo").hide()
},promoteWishlistSharing:function(){this.updateStateOfTheModal();
this.showProperSharingCTA()
},updateStateOfTheModal:function(){var d=$("#wl_list");
var c=B.tools.object.map(d.find("input:checked"),function(j){var h=$(j);
return h.data("wl-is-sharable")?h.data("wl-id"):""
});
c=B.tools.object.filter(c,function(h){return h!=""
});
var f=this.stateMachineForHotelPageModalWindow;
var e=0;
$.each(c,function(h,j){if($.inArray(j,f.originWishlistsId)==-1){e++
}});
var g=(f.originWishlistsId.length+e-c.length);
f.hotelHasBeenAddedToTheWishlist=e;
f.hotelHasBeenRemovedFromTheWishlist=g
},showProperSharingCTA:function(){var e=this.stateMachineForHotelPageModalWindow;
$("#wishlist_modal_content .collaborative_promo").hide();
var c=false;
if(!e.hotelWasAlreadyInWishlist&&e.hotelHasBeenAddedToTheWishlist){$("#wl_create_new_and_share_list").show();
c=true
}if(e.hotelWasAlreadyInWishlist&&e.hotelHasBeenAddedToTheWishlist){if(e.hotelHasBeenRemovedFromTheWishlist==e.originWishlistsId.length){$("#wl_create_new_and_share_list").show();
c=true
}else{}}if(c){$("#wl_create_new_and_share_list .wl_share_list_option_text").hide();
var d="wl_list_singular";
if(e.hotelHasBeenAddedToTheWishlist>1){d="wl_list_plural"
}$("#wl_create_new_and_share_list ."+d).show()
}},triggerWishlistModal:function(k){var d=this;
this.storedOwnerLink=k;
if(k&&$(k).attr("data-wlname")){$("#wl_hotel_name").text($(k).attr("data-wlname"));
$("#wl_hotel_city").text($(k).attr("data-wlcity"));
$("#wl_hotel_country").text($(k).attr("data-wlcountry"));
$("#wl_hotel_image").attr("src",$(k).attr("data-wlimage"));
$("#wl_hotel_count").text($(k).attr("data-wlcount"));
$("#wl_update_form").attr("class","wl_update_form_"+$(k).attr("data-wlhotelid"));
var j="";
if($(k).attr("data-wlnote")){var j=$(k).attr("data-wlnote")
}if(j!=""){$("textarea.add_hotel_note_input").val(j)
}else{$("textarea.add_hotel_note_input").val($("textarea.add_hotel_note_input").attr("title"))
}var c=[];
if($(k).attr("data-wlid")){c=$(k).attr("data-wlid").split(",")
}$('#wl_list input[type="checkbox"]').each(function(){if(c.length){var l=$(this).attr("id").replace("wl_","");
if($.inArray(l,c)>-1){$(this).attr("checked",true)
}else{$(this).attr("checked",false)
}}else{$(this).attr("checked",false)
}d.updateWishlistDropdown()
})
}booking.track.exp("beKMDNdEPPPKfTdC,fQUaSHbZFIBHAUNSTAHLRDfUFFdZUO");
var f=$("#wishlist_modal");
f.find(".wl_modal_title").hide();
var h=$("#wl_list");
this.initStateOfTheModal(h);
var e=true,g;
if(h.find("input:checked").length){var e=false
}if(e){f.find(".modal_title_unsaved").show()
}else{f.find(".modal_title_saved").show()
}if(booking.env.b_user_auth_level_is_none){g="wishlist_widget wishlist_lightbox wishlist_user_access_modal_wrapper"
}else{g="wishlist_widget wishlist_lightbox narrow_wishlist_modal_wrapper"
}booking[sNSStartup].lightbox.show(f,{customWrapperClassName:g,hideCallBack:function(){h.find("li").removeClass("changed");
f.css("background","#fff");
f.addClass("add-wishlist-alternative");
f.find(".wl_success_confirmation").hide();
f.find(".wl_modal_title").hide();
f.find(".save_to_wl").show()
}});
if(booking.track.getVariant("beKMDNdEPPPKfTdC")){$(".wishlist_trigger_box").removeClass("feedback-fade")
}},showSuccessMsg:function(d){var c=$("#wishlist_modal");
if(!booking.track.getVariant("beKMDNdEPPPKfTdC")){c.css("background","#e6e7a9").removeClass("add-wishlist-alternative");
if(d){c.find(".wl_confirm_removed").show();
if(this.storedOwnerLink!=null){if(booking.env.b_action=="searchresults"||booking.env.b_action=="destinationfinder"){$(this.storedOwnerLink).removeClass("saved_in_wl")
}else{$(this.storedOwnerLink).removeClass("added_to_fav_lists")
}this.storedOwnerLink=null
}}else{c.find(".wl_confirm_added").show();
if(this.storedOwnerLink!=null){if(booking.env.b_action=="searchresults"||booking.env.b_action=="destinationfinder"){$(this.storedOwnerLink).addClass("saved_in_wl");
var e="";
$('#wl_list input[type="checkbox"]:checked').each(function(){if(e!=""){e+=","
}e+=$(this).attr("id").replace("wl_","")
});
$(this.storedOwnerLink).attr("data-wlid",e);
if($("textarea.add_hotel_note_input").val()!=$("textarea.add_hotel_note_input").attr("title")){$(this.storedOwnerLink).attr("data-wlnote",$("textarea.add_hotel_note_input").val())
}}else{$(this.storedOwnerLink).addClass("added_to_fav_lists")
}this.storedOwnerLink=null
}}c.find(".wl_modal_title").hide();
c.find(".save_to_wl").hide();
setTimeout(function(){$(".wishlist_lightbox").fadeOut(1000,function(){booking[sNSStartup].lightbox.hide($("#wishlist_modal"))
})
},1500)
}c.find("#wl_list li").removeClass("changed")
},updateReaminingListsCount:function(c){var d=$("#wl_list_number"),e=parseInt(d.text(),10);
if(!isNaN(e)){if(c==="substract"){e--
}else{e++
}d.text(e)
}},email_check:function(c){var d=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
return d.test(c)
},resizeFormwrap:function(){current_formwrap_height=$("#formwrap").css("height");
new_formwrap_height=$(".sidebar_menu_placeholder").css("height");
if(current_formwrap_height<new_formwrap_height){$("#formwrap").css("min-height",new_formwrap_height)
}},selectText:function(d){var f=document,g=f.getElementById(d),c,e;
if(f.body.createTextRange){c=document.body.createTextRange();
c.moveToElementText(g);
c.select()
}else{if(window.getSelection){e=window.getSelection();
c=document.createRange();
c.selectNodeContents(g);
e.removeAllRanges();
e.addRange(c)
}}},animateHighlight:function(g,e){var f=g||"#FFFF9C";
var c=e||1500;
var d=this.css("backgroundColor");
this.stop().css("background-color",f).animate({backgroundColor:d},c)
},updateWishlistsStatus:function(k){var j="",r,q=k||booking.user.wishlists.lists,m=booking.user.wishlists.propertyCountMsg,f=booking.user.wishlists.propertyCountMsg1Item,o,d,h,l=false,c=$(".js-wishlist-added-to-name"),e=0,n=[],p=booking.user.wishlists.headerMenuTemplate;
booking.user.wishlists.listCount=0;
for(var t in q){o=q[t];
n[o.index]=t
}for(var g=(n.length-1);
g>=0;
g--){o=q[n[g]];
h=(o.numPlaces===1?f:m.replace("wishlist_count_placeholder",o.numPlaces));
d=(p.replace("wishlist_list_item_template_name",o.name).replace("wishlist_list_item_template_nr_items_msg",h).replace("wishlist_list_item_template_nr_items",o.numPlaces).replace("wishlist_list_item_template_url",o.url));
if(!o.isCollaborated){d=d.replace("wl_popover_group_icon","no_wl_popover_group_icon");
currentItemHtmlSide=d.replace("wl-newgroup","no_wl_popover_group_icon")
}if(o.isNewList){d=d.replace("wishlist-list-item","wishlist-list-item-s-new")
}if(o.privacy==0){d=d.replace("wl-lock-if","wl-lock-if wl-show")
}j+=d;
e++;
if(!l&&o.currentHotelIsAdded){l={name:o.name,url:o.url,id:n[g]}
}}booking.user.wishlists.listCount=e;
if(l){$(".wishlist-added-to-name-link").attr("href",l.url).html(l.name);
$(".js-wishlist-added-to-name").attr("data-wl-id",l.id);
c.show()
}else{c.hide()
}$(".wishlists_listing").html(j)
}};
B.VerticalFixer=function(c,g,f,e,d){this.root_=c;
this.topLimiter_=g;
this.bottomLimiter_=f;
this.widthLikeThat_=e||null;
this.topMargin_=(d===undefined?B.VerticalFixer.DEFAULT_TOP_MARGIN:d);
this.window_=$(window);
this.enabled_=true;
this.currentStatus_;
this.refresh();
this.attachEvents_()
};
B.VerticalFixer.DEFAULT_TOP_MARGIN=15;
B.VerticalFixer.STOPPED_CLASS="stopped";
B.VerticalFixer.Position={};
B.VerticalFixer.PositionStatus={NOT_STOPPED:0,STOPPED_ON_TOP:1,STOPPED_ON_BOTTOM:2};
B.VerticalFixer.prototype.refresh=function(){this.refreshLeft_();
this.refreshWidth_();
this.refreshPosition_(true)
};
B.VerticalFixer.prototype.enable=function(){this.enabled_=true;
this.refresh()
};
B.VerticalFixer.prototype.disable=function(){this.enabled_=false;
this.root_.css({left:"",top:"",width:""}).removeClass(B.VerticalFixer.STOPPED_CLASS)
};
B.VerticalFixer.prototype.getCurrentStatus=function(){return this.currentStatus_
};
B.VerticalFixer.prototype.attachEvents_=function(){var c=this;
this.window_.resize(function(){if(c.enabled_){c.refresh()
}}).scroll(function(){if(c.enabled_){c.refreshPosition_()
}})
};
B.VerticalFixer.prototype.refreshPosition_=function(d){var c=this.getPosition_();
if(c.status!==this.currentStatus_||d){this.currentStatus_=c.status;
var e=(c.status!==B.VerticalFixer.PositionStatus.NOT_STOPPED);
this.refreshLeft_();
this.root_.toggleClass(B.VerticalFixer.STOPPED_CLASS,e);
this.root_.css("top",e?c.top-this.topLimiter_.offset().top:this.topMargin_)
}this.refreshLeft_()
};
B.VerticalFixer.prototype.refreshLeft_=function(){if(this.currentStatus_===B.VerticalFixer.PositionStatus.NOT_STOPPED){var c=this.topLimiter_.offset().left-this.window_.scrollLeft();
this.root_.css("left",c)
}else{this.root_.css("left","")
}};
B.VerticalFixer.prototype.refreshWidth_=function(){if(this.widthLikeThat_){this.root_.width(B.tools.dom.getBlockWidth(this.widthLikeThat_))
}};
B.VerticalFixer.prototype.getPosition_=function(){var e=this.getBounds_();
var f=B.tools.dom.getWindowScrollTop()+this.topMargin_;
var c=this.root_.innerHeight();
var d=e.bottom-e.top;
if(f<e.top||c>d){return{status:B.VerticalFixer.PositionStatus.STOPPED_ON_TOP,top:e.top}
}else{if(f+c>e.bottom){return{status:B.VerticalFixer.PositionStatus.STOPPED_ON_BOTTOM,top:e.bottom-c}
}else{return{status:B.VerticalFixer.PositionStatus.NOT_STOPPED,top:0}
}}};
B.VerticalFixer.prototype.getBounds_=function(){return{top:this.topLimiter_.offset().top,bottom:this.bottomLimiter_.offset().top+this.bottomLimiter_.innerHeight()}
};
B.VerticalScroller_=function(){this.window_=$(window);
this.animator_=jQuery({progress:0})
};
B.VerticalScroller_.TOP_MARGIN=10;
B.VerticalScroller_.DEFAULT_SCROLL_DURATION=700;
B.VerticalScroller_.MIN_SCROLLING_DISTANCE=5;
B.VerticalScroller_.prototype.scrollToBlock=function(h,g,f,e){var c;
if(f){c=this.getBlockBounds_(h).top-B.VerticalScroller_.TOP_MARGIN
}else{var d=this.getScrollTopToMoveTo_(h);
if(d===null){d=B.tools.dom.getWindowScrollTop()
}c=d
}this.scrollToOffset(c,g,e)
};
B.VerticalScroller_.prototype.scrollToOffset=function(g,f,e){this.animator_.stop(true);
var d=B.tools.dom.getWindowScrollTop();
var c=g;
if(Math.abs(d-c)<B.VerticalScroller_.MIN_SCROLLING_DISTANCE){if(e){e()
}}else{this.animateScroll_(d,c,f,e)
}};
B.VerticalScroller_.prototype.animateScroll_=function(g,f,e,d){var c=this;
this.animator_[0]["progress"]=0;
this.animator_.animate({progress:1},{step:function(h){c.window_.scrollTop(g+h*(f-g))
},duration:(e||B.VerticalScroller_.DEFAULT_SCROLL_DURATION),easing:(typeof jQuery.easing["easeInOutExpo"]==="function"?"easeInOutExpo":"swing"),complete:d})
};
B.VerticalScroller_.prototype.getScrollTopToMoveTo_=function(f){if(f.height()===0){return null
}var c=this.getBlockBounds_(f);
var e=this.getViewportBounds_();
var h=(c.top<e.top);
var d=(c.bottom>e.bottom);
var g=((f.outerHeight()+B.VerticalScroller_.TOP_MARGIN)>this.getViewportHeight_());
if(h||d){if(g||h){return c.top-B.VerticalScroller_.TOP_MARGIN
}else{return(c.bottom+B.VerticalScroller_.TOP_MARGIN-this.getViewportHeight_())
}}else{return null
}};
B.VerticalScroller_.prototype.getBlockBounds_=function(d){var c=d.offset().top;
return{top:c,bottom:c+d.outerHeight()}
};
B.VerticalScroller_.prototype.getViewportBounds_=function(){var c=B.tools.dom.getWindowScrollTop();
return{top:c,bottom:c+this.getViewportHeight_()}
};
B.VerticalScroller_.prototype.getViewportHeight_=function(){return(window.innerHeight||document.documentElement.clientHeight)
};
B.WindowScroller=new B.VerticalScroller_();
booking[sNSStartup].viewed_hotels={priority:9,fullListShowed:false,minListSize:5,lastviewTimer:null,loadStart:null,init:function(){this.loadStart=new Date();
var f=this,d="",c=false;
if(document.getElementById("LastViewedHotels")){try{this.minListSize=parseInt($("#LastViewedHotels").attr("min"))
}catch(g){}$("a.remove_hotel").click(function(){var e=$(this).attr("href").substring(1);
$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:e}});
booking[sNSStartup].viewed_hotels.cleanupHistoryList(this);
this.blur();
c=true;
return false
});
if($("#showAllHistory").length){$("#showAllHistory").click(function(e){booking[sNSStartup].viewed_hotels.showAll(e.target);
this.blur();
return false
})
}if($("#removeAllHistory").length){$("#removeAllHistory").click(function(){booking[sNSStartup].viewed_hotels.removeAll(true);
this.blur();
return false
})
}}if($(".lastVisitdate").length){$(".lastVisitdate").parents("li").mouseenter(function(){var e=$(".lastVisitdate",this);
$(e).slideDown("fast");
$(this).addClass("selectedVisit");
f.updateTime(e);
f.lastviewTimer=window.setInterval(function(){f.updateTime(e)
},1000)
});
$(".lastVisitdate").parents("li").mouseleave(function(){window.clearInterval(f.lastviewTimer);
$(".lastVisitdate",this).slideUp("fast");
$(this).removeClass("selectedVisit")
})
}return true
},updateTime:function(p){var q=this.loadStart;
var o=new Date();
if($(p).attr("sh")==undefined){$(p).attr("sd",$(".viewed_d",p).text());
$(p).attr("sh",$(".viewed_h",p).text());
$(p).attr("sm",$(".viewed_m",p).text());
$(p).attr("ss",$(".viewed_s",p).text());
if($(p).attr("sd")==""){$(p).attr("sd","0")
}if($(p).attr("sh")==""){$(p).attr("sh","0")
}if($(p).attr("sm")==""){$(p).attr("sm","0")
}if($(p).attr("ss")==""){$(p).attr("ss","0")
}}var c=0;
var g=0;
var l=0;
var n=0;
var t=o.getSeconds()-q.getSeconds();
if(t<0){t=60-q.getSeconds()+o.getSeconds();
c=1
}var f=o.getMinutes()-q.getMinutes()-c;
if(f<0){f=60-q.getMinutes()+o.getMinutes()-c;
g=1
}var k=o.getHours()-q.getHours()-g;
if(k<0){k=24-q.getHours()+o.getHours()-g;
l=1
}if(k>24){k=k-24;
n=1-l
}var j=parseInt($(p).attr("sh"))+k;
var e=parseInt($(p).attr("sm"))+f;
var r=parseInt($(p).attr("ss"))+t;
if(r>59){r=r-60;
e=e+1
}if(e>59){e=e-60;
j=j+1
}if(j>23){j=j-24;
n=n+1
}if(r==0){$(".viewed_s",p).text("");
$(".viewed_seconds",p).removeClass("show");
$(".viewed_second",p).removeClass("show")
}else{$(".viewed_s",p).text(r);
if(r==1){$(".viewed_seconds",p).removeClass("show");
$(".viewed_second",p).addClass("show")
}else{$(".viewed_seconds",p).addClass("show");
$(".viewed_second",p).removeClass("show")
}}if(e==0){$(".viewed_m",p).text("");
$(".viewed_minutes",p).removeClass("show");
$(".viewed_minute",p).removeClass("show")
}else{$(".viewed_m",p).text(e);
if(e==1){$(".viewed_minutes",p).removeClass("show");
$(".viewed_minute",p).addClass("show")
}else{$(".viewed_minutes",p).addClass("show");
$(".viewed_minute",p).removeClass("show")
}}if(j==0){$(".viewed_h",p).text("");
$(".viewed_hours",p).removeClass("show");
$(".viewed_hour",p).removeClass("show")
}else{$(".viewed_h",p).text(j);
if(j==1){$(".viewed_hours",p).removeClass("show");
$(".viewed_hour",p).addClass("show")
}else{$(".viewed_hours",p).addClass("show");
$(".viewed_hour",p).removeClass("show")
}}if(n==0){$(".viewed_d",p).text("");
$(".viewed_days",p).removeClass("show");
$(".viewed_day",p).removeClass("show")
}else{$(".viewed_d",p).text(n);
if(n==1){$(".viewed_days",p).removeClass("show");
$(".viewed_day",p).addClass("show")
}else{$(".viewed_days",p).addClass("show");
$(".viewed_day",p).removeClass("show")
}}},cleanupHistoryList:function(d){var c=this.minListSize;
$(d).parent().fadeOut(500,function(){$(d).parents("li").remove();
var f=$("#LastViewedHotels"),g=f.find("ul.lastViewedList li"),h=f.find("#viewed_hotels_header");
if(!g.length){booking[sNSStartup].viewed_hotels.removeAll(false)
}if(g.length<2){$(".hotel_comparison_link").hide();
$("#share_hotel_history").css("borderTop","none")
}if(g.length>=c){var e=g.get(c-1);
$(e).fadeIn(1000)
}if(document.getElementById("showAllHistory")){if(g.length<=c){$("#moreHistoryLinkWrapper").hide()
}}if(f.hasClass("viewed_hotels_copy")){if(g.length<5){f.removeClass("viewed_hotels_copy");
h.find(".base_header").show();
h.find(".variant_header").remove()
}else{if(g.length==5){h.find(".base_header").hide();
h.find(".variant_header").show()
}}}booking.eventEmitter.trigger("viewed_hotels:update",{items:g})
})
},showAll:function(f){var d=$("#LastViewedHotels ul.lastViewedList li"),c=this.minListSize,e=$("#viewed_hotels_header");
if(!booking[sNSStartup].viewed_hotels.fullListShowed){for(i=c-1;
i<d.length;
i++){$(d[i]).fadeIn(500)
}booking[sNSStartup].viewed_hotels.fullListShowed=true;
if(f.className.indexOf("viewed_hotels_copy")>-1){e.find(".base_header").show();
e.find(".variant_header").hide()
}}else{for(i=c;
i<d.length;
i++){$(d[i]).fadeOut(500)
}booking[sNSStartup].viewed_hotels.fullListShowed=false;
if(f.className.indexOf("viewed_hotels_copy")>-1){e.find(".base_header").hide();
e.find(".variant_header").show()
}}booking[sNSStartup].viewed_hotels.switchCaption()
},removeAll:function(c){if(c){$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:-1}})
}$("#LastViewedHotels").fadeOut(500,function(){$(this).remove()
})
},switchCaption:function(){if(booking[sNSStartup].viewed_hotels.fullListShowed){$("#showAllHistory .showLink").hide();
$("#showAllHistory .hideLink").show()
}else{$("#showAllHistory .showLink").show();
$("#showAllHistory .hideLink").hide()
}}};
booking[sNSStartup].vp_destination_topic_menu={priority:8,init:function(){var e=this,d,k,n,f=false,p=false,h,j=window.jQuery,c=booking.env.b_is_destination_finder_supported;
j("#subhead_navbar .snTopLevelItem").live("click",function(){e.resetSNPopovers();
var r=j(this).parent();
e.positionSNPopover(j(".subnav_popover",r));
j("#subhead_navbar .snTopLevelItem").removeClass("active_option");
j(this).addClass("active_option");
q(r);
if(!f){j(".subnav_popover .ajax_loading").show()
}});
var o=false;
var l=function(u){var z=j(u),A=j(".snTopLevelItem.active_option").parent().attr("data-sntoplevelref"),r=j(".snTopLevelItem.active_option").parent(),t=j(".subnav_popover",r),y=z.attr("data-snitemref"),x=j('ul.sn_third_level[data-snitemref="'+y+'"]',r),w=true;
if(c&&y=="none"){w=false
}if(j(".sn_second_level li.selected",r).length){j(".sn_second_level li.selected",r).removeClass("selected");
z.addClass("selected");
j("ul.sn_third_level",r).hide();
if(!w){t.css("width","265px")
}else{t.css("width","540px")
}x.show()
}else{z.addClass("selected");
if(w){t.css("width","540px");
if(j("body.lang_is_rtl").length){j(".subnav_popover .sn_top_arrow",r).css("right","-400px")
}}x.show()
}};
j("#subhead_navbar .sn_second_level li").live("hover",function(r){if(!booking.track.getVariant("TAeAecDKALcGKAXAWIHYWe")){l(this)
}});
booking.eventEmitter.bind("THEME_SUBMENU:activate_item",function(t,r){if(r&&r.row){l(r.row)
}});
var m=false;
if(c){if(!(b_cookie&&b_cookie.show_nav0_notification)){if(j("#nav0_notification").length>0){setTimeout(function(){j("#nav0_notification").show(300,"swing")
},3000)
}}j("#subhead_navbar .snClose").live("click",function(){e.resetSNPopovers();
j("#nav0_new").hide(300,"swing");
b_cookie=b_cookie||{};
b_cookie.show_nav0_notification="1";
if(typeof(JSON)!="undefined"){j.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:booking.env.b_domain_end})
}})
}j(document).ready(function(){var r=j("#subhead_navbar li.snTopLevel");
r.mouseenter(function(){m=true
});
r.mouseleave(function(){m=false
});
j("body").mousedown(function(){if(!m){e.resetSNPopovers()
}});
if(B.track.getVariant("TAeVRJdAdLOZKe")==1){q()
}});
function g(r){var u=r.data("sntoplevelref");
if(u){var t="/destination_theme_interaction?";
t+="aid="+B.env.b_aid;
t+=B.env.b_query_params_delimiter+"sid="+B.env.b_sid;
t+=B.env.b_query_params_delimiter+"theme="+u;
j.get(t)
}}function q(t){if(f||p){g(t);
return
}p=true;
var r=j("#subhead_navbar").attr("data-ajax");
j.ajax({url:r,type:"GET",success:function(A){for(var G in A){if(G=="dsf_additional_info"){continue
}snTopLevelThemeItem=j("#subhead_navbar li.snTopLevel[data-sntoplevelref="+G+"]");
j(".popover_content",snTopLevelThemeItem).append('<ul class="sn_second_level" data-snTheme="'+G+'" data-snLevel="snSecondLevel"></ul>');
var E=A[G];
for(var C in E){var z="";
for(var H in E[C]){if(H=="bind"){break
}j(".popover_content ul.sn_second_level",snTopLevelThemeItem).append('<li class="" data-snItemRef="'+H+'">'+H+"</li>");
j(".popover_content",snTopLevelThemeItem).append('<ul class="sn_third_level" data-sntheme="'+G+'" data-snItemRef="'+H+'" style="display: none"></ul>');
var D=E[C][H];
for(var y in D){var I=D[y].name||D[y].label;
var w=D[y].url;
var x=D[y].properties||D[y].extras;
x=x||"";
if(!I||!w){continue
}z+='<li><a href="'+w+'"><span class="sn_city_name">'+I+'</span> <span class="sn_city_details">'+x+"</span></a></li>"
}if(c&&A.dsf_additional_info){var K=A.dsf_additional_info["cc_"+D[0].cc1+"_"+G];
if(K){z+='<li class="sn_city_link"><a href="'+K.dsf_url+'">'+K.translation+"</a></li>"
}}}j('.popover_content ul.sn_third_level[data-sntheme="'+G+'"][data-snItemRef="'+H+'"]',snTopLevelThemeItem).append(z)
}if(c){var F=j(".popover_content ul.sn_second_level",snTopLevelThemeItem);
var u=F.parent().data("bottom-copy");
if(A&&A.dsf_additional_info){var J=A.dsf_additional_info[G];
if(J){F.append('<li class="sn_country_link" data-snItemRef="none"><a href="'+J.dsf_url+'">'+u+"</a></li>")
}}}}f=true;
if(t){g(t)
}},complete:function(){j(".ajax_loading").hide();
j(".popover_header").show();
booking.eventEmitter.trigger("THEME_SUBMENU:Loaded");
p=false
}})
}},resetSNPopovers:function(){$("#subhead_navbar .subnav_popover").hide();
$("#subhead_navbar .snTopLevelItem").removeClass("active_option");
$("#subhead_navbar li.selected").removeClass("selected");
$("#subhead_navbar .sn_third_level").hide();
$("#subhead_navbar .subnav_popover").each(function(){if($(this).data("powidth")){$(this).css("width",$(this).data("powidth"));
if($(this).data("poleft")){$(this).css("left","265px")
}}else{$(this).css("width","265px")
}})
},positionSNPopover:function(o,d){var m=$(o).parent();
var l=m.width()/2;
var k;
k=$(".subnav_popover",m);
var h=k.width()/2;
var j=h-l;
var p=h-8;
var n=m.offset().left-$("#bodyconstraint").offset().left,g=$("#bodyconstraint").width(),f=g-(h+l+n),c=n+l-h;
if(f<0&&c>0){j-=f;
p-=f
}else{if(f>0&&c<0){j+=c;
p+=c
}else{if(f<0&&c<0){}}}var e=d&&d.offset;
if(e){j+=e;
p+=e
}if($("body.lang_is_rtl").length){k.css("right",-Math.round(j));
$(".subnav_popover .sn_top_arrow",m).css("right",-Math.round(p))
}else{k.css("left",-Math.round(j));
$(".subnav_popover .sn_top_arrow",m).css("left",Math.round(p))
}if($(".subnav_popover:visible",m).length){k.hide()
}else{k.show()
}}};
booking[sNSStartup].vp_destination_topic_menu_responsivity=(function(){var f=function(){c()
};
function e(g){this.$element=$(g);
this.priority_=this.$element.data("priority")||5
}e.prototype.width=function(){if(!this.width_){this.width_=this.$element.outerWidth()
}return this.width_
};
e.prototype.priority=function(){return this.priority_
};
e.prototype.hide=function(){this.$element.hide();
return this
};
e.prototype.show=function(){this.$element.show();
return this
};
function d(g){this.$element=$(g);
this.items=$.map(this.$element.find(" > li"),function(h){return new e(h)
});
this.sortedItems=this.items.sort(function(j,h){return j.priority()-h.priority()
})
}d.prototype.fitWidth=function(g){$.each(this.sortedItems,function(h,j){if(g-j.width()>0){g-=j.width();
j.show()
}else{j.hide()
}});
return this
};
function c(){var g=$("#subhead_navbar"),h=new d(g.find(".sn_top_level"));
function j(){h.fitWidth(g.width()-50)
}$(window).bind("resize",B.tools.functions.throttle(j,300));
j()
}return{init:f,priority:9}
})();
booking[sNSStartup].wlData=(function(j){var h={};
var c={EDIT:"wl:edit",FETCH:"wl:fetch",CREATE:"wl:create",REMOVE:"wl:remove",EDITHOTEL:"wl:edithotel",EDITHOTELS:"wl:edithotels",LOADINGSTART:"wl:loadingstart",LOADINGEND:"wl:loadingend"};
var g={RECENTLY_VIEWED:3};
return{init:function(){if(+booking.env.auth_level){this.fetch()
}},EVENTS:c,TYPE:g,edit:function(){},fetch:function(k){k=k||{};
k.aid=booking.env.b_aid;
k.lang=booking.env.b_lang_for_url;
return f("/wishlist/get",k).then(function(l){e(l.result.lists);
return d(c.FETCH,l)
})
},create:function(k){this.clearCache();
return f("/wishlist/create",k).then(function(m){e([m.result]);
if(typeof k.hotel_ids==="string"){var l=k.hotel_ids.split(",");
$.each(l,function(n,o){d(c.EDITHOTEL,{params:$.extend({hotel_id:o,lists:m.result.id},m.params),result:m.result})
})
}return d(c.CREATE,m)
})
},remove:function(){},editHotels:function(m){this.clearCache();
var l=m.hotel_ids;
var k=(new Array(l.length+1)).join("1").split("");
if($.isArray(l)){m.hotel_ids=l.join(",")
}return f("/wishlist/save_hotels",$.extend({new_states:k.join(",")},m)).then(function(n){$.each(l,function(o,p){d(c.EDITHOTELS,{params:$.extend({hotel_id:p},n.params),result:n.result})
});
return n
})
},editHotel:function(k){this.clearCache();
return f("/wishlist/save_hotel",k).then(function(l){return d(c.EDITHOTEL,l)
})
},clearCache:function(){h={}
},bind:function(l,m,k){j.eventEmitter.bind(l,function(){m.apply(k,arguments)
})
}};
function f(k,n){var l=k+$.param(n);
if(l in h){return h[l]
}var m=booking.promise();
d(c.LOADINGSTART,{params:n});
$.ajax({url:k,data:n,success:function(o){m.fulfill({params:n,result:o})
},error:function(o){m.reject(o)
},complete:function(){d(c.LOADINGEND,{params:n})
}});
h[l]=m;
return m
}function d(k,l){j.eventEmitter.trigger(k,l);
return l
}function e(m){var l="is_new";
var k="creation_timestamp";
var n=["is_collaborated","privacy","selected"];
$.each(m,function(o,p){$.each(n,function(q,r){if(r in p){p[r]=!!+p[r]
}});
if(k in p){p[l]=p[k]*1000>new Date()-24*60*60*1000
}})
}})(booking);
booking[sNSStartupLoad].wlDropdown=(function(){var c;
var e=$.fly.dropdown;
var d=e.extend({defaults:{gaAction:"Wishlist",extraClass:"wl-dropdown",content:function(f){var g={action:"read",params:{hotel_id:this.hotelid,lang:booking.env.b_lang_for_url,aid:booking.env.b_aid}};
this.sync(g,function(l){var k=this;
var j="";
var h=l.lists;
j='<div class="wl-dropdown-header">'+k.$handle.attr("data-text-header")+"</div>";
if(+booking.env.auth_level){h=h.concat(null)
}j+=$.map(h,function(m){return k.template(m)
}).join("");
f(j)
})
}},timeout:null,init:function(){var f=this;
c=booking[sNSStartupLoad].user_wishlists;
this.hotelid=this.$handle.attr("data-hotel-id");
this.bind(this.EVENTS.ROOTREADY,function(){$.extend(f.options,{position:f.$handle.attr("data-position"),gaLabel:f.$handle.attr("data-ga-label"),textCreate:f.$handle.attr("data-text-create")});
f.root().delegate(".js-dropdown-item-text","focus",function(){clearTimeout(f.timeout)
}).delegate(".js-dropdown-item-text","keyup",$.proxy(f.ontext,f)).delegate(".js-dropdown-item-checkbox","click",$.proxy(f.oncheckbox,f))
});
this.bind(this.EVENTS.SHOW,function(){f.trackEvent("Open dropdown")
})
},ontext:function(f){var h=$(f.currentTarget);
var g=h.parent();
g.find(".js-dropdown-item-checkbox").attr("disabled",!h.val());
if(f.which===13){f.preventDefault();
this.createList(g)
}},oncheckbox:function(f){f.preventDefault();
var g=$(f.currentTarget).parent();
var h=g.find(".js-dropdown-item-text");
this[h[0]?"createList":"toggleList"](g)
},createList:function(g){var j=g.find(".js-dropdown-item-text");
var f=g.find(".js-dropdown-item-checkbox");
var h={action:"create",params:{name:j.val(),hotel_id:this.hotelid},$item:g};
this.sync(h,function(k){f.attr("cheched",true);
this.updateState(true);
k.selected=1;
g.before(this.template(k));
g.replaceWith(this.template());
this.trackEvent("Create");
this.hideAfterDelay()
})
},toggleList:function(g){var f=g.find(".js-dropdown-item-checkbox");
var h={action:"update",params:{lists:f.attr("data-list-id"),hotel_id:this.hotelid,new_state:+f.attr("checked")},$item:g};
this.sync(h,function(){f.attr("checked",!f.attr("checked"));
this.trackEvent(f.attr("checked")?"Add hotel":"Remove hotel");
this.updateState(!!this.root().find(".js-dropdown-item-checkbox:checked")[0]);
this.hideAfterDelay()
})
},updateState:function(g){var f={action:"read",params:{hotel_id:this.hotelid,lang:booking.env.b_lang_for_url,aid:booking.env.b_aid}};
this.sync(f,function(j){var k={};
var h=false;
$.each(j.lists,function(l,m){var o={};
try{o=booking.user.wishlists.lists[m.id]||{}
}catch(n){}k[m.id]={url:o.url||m.url||"#",name:m.name,index:l,numPlaces:m.hotels_count||o.numPlaces||0,isNewList:m.is_new,isCollaborated:m.is_collaborated,currentHotelIsAdded:m.selected};
h=h||!!m.selected
});
booking.eventEmitter.trigger("wishlists_updated",k);
c.updateWishlistsStatus(k);
this.$handle.toggleClass("saved_in_wl",h)
});
c.toggleStateIndication(g)
},hideAfterDelay:function(f){f=f||2000;
this.timeout=setTimeout($.proxy(this.hide,this),f)
},loading:function(j,f){var k=this.$handle;
var g="wl-dropdown-item_loading";
var h="wl-dropdown-handle_loading";
if(j===true){f.addClass(g);
k.addClass(h)
}else{if(j===false){f.removeClass(g);
k.removeClass(h)
}else{return k.hasClass(h)
}}},sync:function(h,k){var g,j=this;
var f=h.$item||$();
clearTimeout(this.timeout);
switch(h.action){case"read":g="/wishlist/get";
break;
case"update":g="/wishlist/save_hotel";
break;
case"create":g="/wishlist/create";
break
}this.loading(true,f);
$.ajax({url:g,data:h.params,success:function(){j.loading(false,f);
k.apply(j,arguments)
}})
},template:function(f){return f?'<label class="wl-dropdown-item'+(f.is_collaborated?" wl-dropdown-item_shared":"")+'"><input type="checkbox" class="js-dropdown-item-checkbox wl-dropdown-item__checkbox" data-list-id="'+f.id+'" '+(f.selected?'checked="checked"':"")+"/> "+f.name+"</label>":'<label class="wl-dropdown-item wl-dropdown-item_new"> <input type="checkbox" disabled="disabled" class="js-dropdown-item-checkbox wl-dropdown-item__checkbox"/> <input type="text" placeholder="'+this.options.textCreate+'" class="js-dropdown-item-text wl-dropdown-item__text" /> </label>'
},trackEvent:function(f){booking.google.trackEvent(booking.google.clickTracker,this.options.gaAction+": "+f,this.options.gaLabel)
}});
return{init:function(){var g="IEWBbUEfcWfPESHbfNLT";
if(booking.track.getVariant(g)){return
}$(".js-wl-dropdown-handle").each(function f(){d.create(this)
})
}}
})();
booking[sNSExperiments]["HOGeVRcJWJSJPaXfOLBZdRIYae"]={init:function(){var h=this;
var c=$("#current_account .popover_trigger");
var f=$(".js-uc-notification-footer-signup");
var e=$(".js-uc-notification-link");
var g=booking.track.getVariant("ZePNCFZNUdfYMO");
(function(){var j="HOGeVRcJWJSJPaXfOLBZEQSVWe";
if(booking.track.getVariant(j)){f=$(".js-uc-notification-link, .js-uc-notification-signup");
e=$(".js-uc-notification-header-signin")
}booking.eventEmitter.bind("uc_popover_showed",function(k,l){if(l&&l.id==="notifications"){booking.track.exp(j)
}})
})();
function d(){var j=c.attr("data-show");
c.attr("data-show","login").trigger("click").attr("data-show",j)
}e.click(function(j){j.preventDefault();
h.remove();
if(g){booking.action("show-signin-dialog")()
}else{d()
}});
f.click(function(j){j.preventDefault();
h.remove();
d();
c.parent().find("[data-target=user_access_signup_menu]").trigger("click")
})
},remove:function(){$(".js-uc-notification-close").trigger("click")
}};
B[sNSExperimentsLoad]["fQUaSHbZFTbDUQWUXTRXe"]={checkAndTrack:function(){if($(window).width()<950){B.track.exp("fQUaSHbZFTbDUQWUXTRXe")
}},setupResizeTracking:function(){$(window).bind("resize",B.tools.functions.throttle($.proxy(this.checkAndTrack,this),500))
},init:function(){this.checkAndTrack();
this.setupResizeTracking()
},initElse:function(){this.checkAndTrack();
this.setupResizeTracking()
}};
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSExperiments]["fESffFDDBEHAMZJRdcC"]={priority:9,init:function(){var c=$("#iphone_landing_form_footer"),f=$("#main_cta_lk",c),d=$("#tb_email",c);
f.removeAttr("disabled");
d.removeAttr("disabled");
c.bind("submit",function(k){k.preventDefault();
var n=$("#tb_email",c).attr("value");
var m=$(".b_app_signup_message_container",c);
var l=f.data("lang");
var j=f.data("source");
var h=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var g=h.test(n);
if(!g){e(m);
return
}$.post("/send_app_email",{email:n,language:l,source:j},function(o){m.show();
if(o.isOk=="true"){m.show();
$("#confirmation_email_span",m).fadeIn(function(){d.attr("disabled",true).val("");
f.attr("disabled",true)
}).css("display","table-cell")
}else{e(m)
}})
});
function e(h){var g=$("#confirmation_email_error",h);
h.show();
g.fadeIn().css("display","table-cell");
d.val("");
g.click(function(){g.fadeOut(function(){h.hide()
}).unbind("click")
})
}}};
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSExperiments]["fEJNNFQHWMYZWHccHe"]=(function(){var d;
var h=function(){d=$("#iphone_promotion");
f();
d.click(function(k){var j=$(this).next(".iphone_banner_content").clone();
k.preventDefault();
$("#tb_email, #main_cta_lk",j).removeAttr("disabled");
j.find("form").bind("submit",e);
booking.lightbox.show(j,{bAnimation:true});
B.browserStorageHandler.addPermanentValue("lp_iphone_email_field",true);
booking.track.exp("fEJNNFQHWMYZWHccHe")
})
};
var c=function(){$("#iphone_promotion").click(function(){booking.track.exp("fEJNNFQHWMYZWHccHe")
})
};
var f=function(){if(!B.browserStorageHandler.getPermanentValue("lp_iphone_email_field")){d.removeClass("check_if_user_clicked_before")
}};
var e=function(q){q.preventDefault();
var t=$(this);
var l=$("#tb_email",t).attr("value");
var p=$(".b_app_signup_message_container",t);
var k=$("#main_cta_lk",t);
var n=$("#tb_email",t);
var m=k.data("lang");
var j=k.data("source");
var r=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var o=r.test(l);
if(!o){g(p);
return
}$.post("/send_app_email",{email:l,language:m,source:j},function(u){p.show();
if(u.isOk=="true"){p.show();
$("#confirmation_email_span",p).fadeIn(function(){n.attr("disabled",true).val("");
k.attr("disabled",true);
setTimeout(function(){$(".modal-wrapper, .modal-mask").fadeOut(function(){booking.lightbox.hide()
});
d.fadeOut(function(){d.remove()
})
},2000)
}).css("display","table-cell")
}else{g(p)
}})
};
var g=function(k){var j=$("#confirmation_email_error",k);
k.show();
j.fadeIn().css("display","table-cell");
k.siblings("input").val("");
j.one("click",function(){j.fadeOut(function(){k.hide()
})
})
};
return{init:h,initElse:c}
}());
booking[sNSExperiments]["fEJXdDXFWXdBGPYSbC"]=(function(){var p={};
var z=function(){var H=$(".lp_sidebar_panel");
$.extend(p,{elem:H,formelem:H.find("#sidebar_availform"),hiddenValueIds:[],hiddenFieldelem:H.find("#sidebar_availform input[name=ss]"),lpsbtrigger:H.siblings(".sidebar_panel_trigger"),minWinWidth:1570,storageKey:"lpsidebarpanel",custom_goal_number:"1"});
if(C()){g();
w();
booking.track.custom_goal("fEJXdDXFWXdBGPYSbC",p.custom_goal_number)
}j();
n();
o();
F();
x()
};
var C=function(){var H=A();
if(k()&&H){D();
return true
}if(!H){q()
}return false
};
var u=function(){var K=35,L=84;
var I=$(window).height()-L-K;
var J=p.elem.find(".lp_sidebar_panel_list");
var H=J.height();
while(H>I){J.find("li:last").remove();
H=J.height()
}};
var l=function(H){p.elem.addClass("off").removeClass("on");
p.lpsbtrigger.addClass("off").removeClass("on");
$(".lp_back_to_top.big_arrow").removeClass("with_sidebar");
if(H){G(false)
}};
var g=function(){if(!p.elem.hasClass("on")){p.elem.addClass("on").removeClass("off");
p.lpsbtrigger.addClass("on").removeClass("off");
$(".lp_back_to_top.big_arrow").addClass("with_sidebar");
G(true)
}};
var D=function(){p.lpsbtrigger.removeClass("hidden")
};
var q=function(){p.lpsbtrigger.addClass("hidden")
};
var G=function(H){H?B.browserStorageHandler.addPermanentValue(p.storageKey,"true"):B.browserStorageHandler.addPermanentValue(p.storageKey,"false")
};
var k=function(){var H=B.browserStorageHandler.getPermanentValue(p.storageKey);
if(H==null){return true
}return(H==="true")
};
var A=function(H){if(H==undefined){H=$(window).width()
}if(H>p.minWinWidth){D();
return true
}q();
return false
};
var n=function(){p.lpsbtrigger.click(function(){if(p.elem.hasClass("on")){l(true)
}else{g(true)
}})
};
var j=function(){p.elem.delegate("#select_all_check","click",function(){var H=$(this);
var I=!(H.hasClass("all_selected"));
p.elem.find(".validation-error-nothing-selected").removeClass("on");
p.lpsbtrigger.removeClass("w-error");
I?H.addClass("all_selected"):H.removeClass("all_selected");
$.each(H.closest(".lp_sidebar_panel").find(".hotel_check"),function(K,J){var L=$(J);
var M=L.closest("li");
if(I&&!M.hasClass("selected_item")){M.click()
}else{if(!I&&M.hasClass("selected_item")){M.click()
}}})
});
p.elem.find(".lp_sidebar_panel_list").delegate("li","click",function(J){p.elem.find(".validation-error-nothing-selected").removeClass("on");
p.lpsbtrigger.removeClass("w-error");
if(J.target.nodeName!=="A"&&!$(J.target).hasClass("remove_item")){p.hiddenFieldelem=p.elem.find("#sidebar_availform input[name=ss]");
var H=$(this);
var I=$(this).find(".hotel_check");
if(H.hasClass("selected_item")){H.removeClass("selected_item");
c(I.val());
I.attr("checked","")
}else{H.addClass("selected_item");
d(I.val());
I.attr("checked","checked")
}}});
p.elem.find(".validation-error-nothing-selected").click(function(){p.elem.find(".validation-error-nothing-selected").removeClass("on");
p.lpsbtrigger.removeClass("w-error")
})
};
var m=function(){return p.hiddenFieldelem.length
};
var c=function(H){if(p.hiddenValueIds.length==1){if(p.hiddenValueIds[0]==H){p.hiddenValueIds=[];
p.hiddenFieldelem.val("")
}}else{if($.inArray(H,p.hiddenValueIds)!=-1){p.hiddenValueIds.splice($.inArray(H,p.hiddenValueIds),1);
p.hiddenFieldelem.val(t())
}}};
var h=function(){var H=$(window).width();
if(A(H)&&k()){g()
}else{l()
}};
var F=function(){var J=500,L,I=+new Date(),H,K;
$(window).resize(function(){window.clearTimeout(L);
H=+new Date();
K=H-I;
if(K>=J){I=H;
h()
}else{L=window.setTimeout(h,J)
}})
};
var x=function(){p.formelem.submit(function(H){if(!r()){H.preventDefault();
p.elem.find(".validation-error-nothing-selected").addClass("on");
p.lpsbtrigger.addClass("w-error")
}return true
})
};
var r=function(){return(p.hiddenValueIds.length>1)
};
var d=function(H){if(p.hiddenValueIds.length==0){p.hiddenValueIds=[H]
}else{p.hiddenValueIds.push(H)
}var I=t();
if(m()){p.hiddenFieldelem.val(I)
}else{p.formelem.append($('<input type="hidden" name="ss" id="ss" value="'+I+'">'));
p.hiddenFieldelem=$(".lp_sidebar_panel #sidebar_availform input[name=ss]")
}};
var t=function(){var H="";
if(p.hiddenValueIds.length>0){E();
$.each(p.hiddenValueIds,function(J,I){if(J===0){H+="id:"+I
}else{H+=","+I
}})
}return H
};
var E=function(){var H=[];
$.each(p.hiddenValueIds,function(I,J){if(J!=undefined){H.push(J)
}});
p.hiddenValueIds=H
};
var o=function(){p.elem.delegate(".remove_item","click",function(I){var H=$(this).siblings(".hotel_check").val();
var J=$(this).closest("li");
c(H);
f(J,H);
return false
});
p.elem.find(".trash_all").click(function(){e();
return false
})
};
var f=function(I,H){I.remove();
$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:H}})
};
var e=function(){l(true);
p.elem.find(".lp_sidebar_panel_list li").remove();
q();
$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:-1}})
};
var w=function(){p.elem.find("#select_all_check").attr("checked","");
p.elem.find("li:not(.selected_item) .hotel_check").attr("checked","");
$.each(p.elem.find("li.selected_item .hotel_check"),function(H,I){d($(I).val())
})
};
var y=function(){if(B.track.getVariant("fEJXdDXFWXdBGPYSbC")!==false){if($(window).width()>1570){B.track.custom_goal("fEJXdDXFWXdBGPYSbC",1)
}}};
return{init:z,initElse:y}
}());
booking[sNSExperimentsLoad]["YNJPbHRTcZMO"]={track:function(){booking.track.onView(".viewed_hotels_copy_track").exp("YNJPbHRTcZMO")
},init:function(){this.track()
},initElse:function(){this.track()
}};
booking[sNSExperimentsLoad]["bLYNIfLVIBfaXGWe"]={setUpEventhandlers:function(){B.eventEmitter.bind(B.Search.Events.DATE_INVALID,this.fireTracking);
B.eventEmitter.bind(B.Search.Events.GROUP_INVALID,this.fireTracking);
B.eventEmitter.bind(B.Search.Events.DESTINATION_INVALID,this.fireTracking)
},fireTracking:function(){B.track.exp("bLYNIfLVIBfaXGWe")
},init:function(){this.setUpEventhandlers()
},initElse:function(){this.setUpEventhandlers()
}};
B.run("EKAcBbHAZKYFLKbEJdNLae").onReady(function(){B.track.onClick(".b_advanced_search .b_advanced_search_toggler").exp("EKAcBbHAZKYFLKbEJdNLae")
});
(function(){if(!(window.accounting&&booking.env.accounting_config)){return
}var d=window.accounting,e=booking.env.accounting_config;
var c={init:function(g){this._current=g
},formatMoney:function(j,g,h){if(typeof g!=="undefined"){if(typeof g==="object"){h=g;
g=this._current
}}else{g=this._current
}if(typeof g==="undefined"){throw"The module hasn't been initiated, so you have to provide currencyCode"
}if(j%1===0){h=h||{};
h.precision=typeof h.precision!=="undefined"?h.precision:"integer"
}var k=f(g,h);
return d.formatMoney(j,k)
},getOptions:function(){return f(this._current)
}};
c.init(booking.env.b_selected_currency||booking.env.b_hotel_currencycode);
booking.utils=booking.utils||{};
booking.utils.accounting=c;
function f(g,h){h=B.tools.object.defaults(h,{symbolFormat:"%s",valueFormat:"%s"});
h.valueFormat=h.valueFormat.replace("%s","%v");
var o=h.symbolFormat,m=h.valueFormat;
var j=typeof e.html_symbol[g]!=="undefined"?e.html_symbol[g]:g,k=typeof e.decimal_separator[g]!=="undefined"?e.decimal_separator[g]:(typeof e.decimal_separator["default"]!=="undefined"?e.decimal_separator["default"]:"."),p=typeof e.group_separator[g]!=="undefined"?e.group_separator[g]:(typeof e.group_separator["default"]!=="undefined"?e.group_separator["default"]:","),n=(function(r,q){return q==="before"?o+r+m:m+r+o
})(typeof e.currency_separator[g]!=="undefined"?e.currency_separator[g]:(typeof e.currency_separator["default"]!=="undefined"?e.currency_separator["default"]:" "),typeof e.symbol_position[g]!=="undefined"?e.symbol_position[g]:(typeof e.symbol_position["default"]!=="undefined"?e.symbol_position["default"]:"before")),l;
if(typeof e.num_decimals!=="undefined"){l=e.num_decimals["default"]
}if(h.precision==="integer"){l=0
}if(typeof e.num_decimals!=="undefined"){l=typeof e.num_decimals[g]!=="undefined"?e.num_decimals[g]:l
}if(!isNaN(parseInt(h.precision,10))){l=h.precision
}return{symbol:j,decimal:k,thousand:p,format:n,precision:l}
}}());
B[sNSExperiments]["GWcOCBFO"]=(function(l,t,q,D,j){function p(){if(!q.search.dates("checkin")){j("#homein").find(".calendarLink").trigger("show")
}}function g(H,I){if(H&&I){q.search.dates(I,{year:H.year,month:H.month-1,date:H.day})
}}function u(J,H){var I;
if(!H){return
}I=H.oldApi;
if(!I){return
}if(H.type==="checkin"){g(I.from,"checkin");
if(H.otherChanged){g(I.till,"checkout")
}}else{if(H.type==="checkout"){g(I.till,"checkout");
if(H.otherChanged){g(I.from,"checkin")
}}}}function w(M,I){var H=q.search.dates("checkin"),L=q.search.dates("checkout"),J=q.search.dates(I.type),K=H&&L&&H.type==="valid"&&L.type==="valid";
j.fn.calendar2("each",function(N){if(N.type()===I.type){if(J.type==="month"){N.trigger("monthSelected",{type:I.type,value:J})
}else{if(J.type==="valid"){N.trigger("dateSelected",{type:I.type,value:J})
}}}if(K){N.trigger("rangeSelected",{type:I.type,startValue:H,endValue:L});
if(q.track.getVariant("bLYPQBOWXTYAWUYGfFCC")){h(N,H,L,L.valueOf()-H.valueOf())
}}})
}function y(I,H){j.fn.calendar2("each",function(J){if(H.id!==J.id()){J.trigger("hide")
}})
}function F(){j.fn.calendar2("hide")
}function c(){var H=new Date();
return H
}function k(){var H=q.calendar2.today();
H.setFullYear(H.getFullYear()+1);
H.setDate(0);
H.setDate(H.getDate()-1);
return H
}function r(){var H=q.calendar2.today();
H.setDate(H.getDate()+1);
return H
}function E(){var H=q.calendar2.today();
H.setFullYear(H.getFullYear()+1);
H.setDate(0);
return H
}function x(M,H,I){if(!(M||H)){return
}var L=M.type(),K,J;
q.search.dates(L,{year:H.getYear(),month:H.getMonth(),date:H.getDate()});
K=q.search.dates("checkin");
J=q.search.dates("checkout");
if(K.type==="valid"){q[sNSStartup].calendar.syncDates(false,K.date,K.month+1,K.year,false)
}if(J.type==="valid"){q[sNSStartup].calendar.syncDates(true,J.date,J.month+1,J.year,false)
}if(M&&M.$element&&(M.$element.parents(".b-searchbox").length>0)){if(L==="checkin"){q.Search.tracker.trackEvent(q.Search.TrackingEvents.CHECKIN_DATEPICKER)
}else{if(L==="checkout"){q.Search.tracker.trackEvent(q.Search.TrackingEvents.CHECKOUT_DATEPICKER)
}}}M.$input.focus()
}function z(H,I){if(I.which===13&&!H.shown()){j("#frm").submit();
I.preventDefault()
}}function m(L){var K=q.search.dates("checkout"),J=q.search.dates("checkin"),M=J&&K&&J.type==="valid"&&K.type==="valid";
var I,H=L.type(),N;
if(H==="checkin"){if(J.type==="valid"){I="dateSelected";
N=J
}else{if(J.type==="month"){I="monthSelected";
N=J
}}}else{if(H==="checkout"){if(K.type==="valid"){I="dateSelected";
N=K
}else{if(K.type==="month"){I="monthSelected";
N=K
}}}}if(I&&N){L.trigger(I,{type:H,value:N})
}if(M){L.trigger("rangeSelected",{startValue:J,endValue:K});
if(q.track.getVariant("bLYPQBOWXTYAWUYGfFCC")){h(L,J,K,K.valueOf()-J.valueOf())
}}}function f(H,I){if(q.env.b_year_months[H+"-"+(I+1)]){return q.env.b_year_months[H+"-"+(I+1)].name
}}var e="hover";
function G(N,O){var P,L,H,M,J;
if(O&&O.hasState("disabled")){return
}l.clearTimeout(N.rangeHighlightTimeout);
if(N.type()==="checkin"){P=O.id();
H=q.Search.createDate({year:O.year_,month:O.month_,date:O.date_});
M=q.search.dates("checkout");
L=q.calendar2.dayId(M.year,M.month,M.date)
}else{if(N.type()==="checkout"){H=q.search.dates("checkin");
P=q.calendar2.dayId(H.year,H.month,H.date);
M=q.Search.createDate({year:O.year_,month:O.month_,date:O.date_});
L=O.id()
}}if(H&&H.type==="valid"){if(M&&M.type==="valid"){J=M.valueOf()-H.valueOf();
if(J>0){q.track.exp("bLYPQBOWXTYAWUYGfFCC");
if(q.track.getVariant("bLYPQBOWXTYAWUYGfFCC")){N.unHighlightRange(e);
if(N.selectedRange_){for(var K=0,I=N.selectedRange_.length;
K<I;
K++){N.days[N.selectedRange_[K]].removeState("first-in-range").removeState("in-range").removeState("last-in-range")
}}N.highlightRange(P,L,{name:e});
h(N,H,M,J)
}}}}}function h(I,H,K,J){I.$element.find(".c2-calendar-footer").html(o(H,K,J))
}function o(H,J,I){if(I>0&&H&&H.type==="valid"&&J&&J.type==="valid"){return q.jstmpl("length_of_stay_detailed").render({b_interval:I,b_checkin_date_formatted:q.formatter.date(H.toString(),"short_date_with_weekday_without_year"),b_checkout_date_formatted:q.formatter.date(J.toString(),"short_date_with_weekday")})
}return""
}function d(I,H){if(q.track.getVariant("bLYPQBOWXTYAWUYGfFCC")){var J;
if(H===e){J=I.getSelectedDay();
if(J){J.removeState("selected")
}}}}function n(I,H){if(q.track.getVariant("bLYPQBOWXTYAWUYGfFCC")){I.rangeHighlightTimeout=l.setTimeout(function(){if(I.rangeHighlightTimeout){I.unHighlightRange(e);
if(I.selectedRange_&&I.selectedRange_.length){I.createRange_(I.selectedRange_,"selected")
}h(I,q.search.dates("checkin"),q.search.dates("checkout"),q.search.dates("checkout").valueOf()-q.search.dates("checkin").valueOf())
}},100)
}}function C(){if(!q.calendar2){return
}if(q.env.b_is_villa_site){return
}var N=j(".calendarLink, .b-datepicker");
if(!q.track.getVariant("bLNJSJNWWUAPTPWOGANMfefVZHC")&&N.length===0){return
}var J=D.sunday_first,M=D.b_simple_weekdays,H=D.b_short_months;
if(J){M.unshift(M.pop())
}var K={dayNames:M,sundayFirst:J,monthNames:H,direction:D.rtl?"rtl":"ltr",lazy:true,closeButton:true,onDateSelected:x,onLazyInitiated:m,monthTitle:f,onKeyDown:z,onRangeHighlighted:d,onDayMouseEnter:G,onDayMouseLeave:n};
var L=q.calendar2.checkinOptions=j.extend({},K,{type:"checkin",defaultDate:q.search.dates("checkin"),startDate:c(),endDate:k(),title:D.transl_checkin_title});
var I=q.calendar2.checkoutOptions=j.extend({},K,{type:"checkout",defaultDate:q.search.dates("checkout"),startDate:r(),endDate:E(),title:D.transl_checkout_title});
N.each(function(P,Q){var O=j(Q),R=O.attr("rel")||O.data("type")||O.data("calendar2-type");
O.unbind("click.calendar");
O.unbind("click.calendar2");
if(R==="checkin_year_month"||R==="checkin"){O.calendar2(L)
}else{if(R==="checkout_year_month"||R==="checkout"){O.calendar2(I)
}}});
q.eventEmitter.bind("CALENDAR:dates_changed",u);
q.eventEmitter.bind("SEARCH:destination_selected",p);
q.eventEmitter.bind("SEARCH:date_changed",w);
q.eventEmitter.bind("SEARCH:month_changed",w);
q.eventEmitter.bind("CALENDAR:opened",y);
q.eventEmitter.bind("AUTOCOMPLETE:opened",F);
if(q.maps&&typeof q.maps.on==="function"){q.maps.on("click-open",F)
}}function A(){}return{init:C,initElse:A,priority:8}
}(window,document,booking,booking.env,$));
function popup_cancel_big_index(c){window.open(c,"","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=950,height=500,left=200,top=200");
return false
}(function(d){if(d.getElementById("reactive_text_items")){var c=function(){var f=$("#reactive_text_items span").map(function(){return"("+decodeURIComponent($(this).text())+")"
}).get();
return new RegExp(f.join("|"),"i")
};
var e=function(){return $("#reactive_text_items").children().length>0
};
$(function(){var g,h;
var f=c();
h=function(){var j=$(this).val();
if(f.test(j)){}else{if($("#reactive_text_box").is(":visible")){$("#reactive_text_box").fadeOut()
}}};
$("#reactive_text_box").hide();
if(e()){$("#messagebox").keyup(h)
}})
}}(document));
(function(){var c="HOGeVdCScESFbLRFQNRSITXeUMATNC";
booking[sNSExperiments][c]={init:d,initElse:d};
function d(){booking.eventEmitter.bind("account-onboarding-modal-show",function(){booking.track.exp(c);
if(booking.track.getVariant(c)){$.cookie("wl252-gotit","true",{expires:365,path:"/",domain:booking.env.b_domain_end})
}})
}})();
booking[sNSExperiments]["HOGeVRcJDbMXVaKBIecO"]=(function(){var c=null;
return{init:function(){this.wList=booking[sNSStartup].wlData;
this.ucBar=booking[sNSExperiments].user_center_bar;
this.$trigger=$(".js-uc-wishlists-trigger");
this.$popover=$(".js-uc-wishlists-popover");
this.$content=$(".js-uc-wishlists-content");
this.bind()
},initElse:function(){booking.eventEmitter.bind("uc_popover_showed",function(d,e){if(e.id==="wishlists"){booking.track.exp("HOGeVRcJDbMXVaKBIecO")
}})
},bind:function(){var e=this;
var d=$.proxy(this.create,this);
this.$content.delegate(".js-wl-create-button-toggle","click",function(){$(".js-wl-create-button-dropdown",e.$content).toggleClass("g-hidden")
}).delegate(".js-uc-wishlists-form","submit",d).delegate(".js-wl-create-button-action","click",d).delegate(".js-wl-create-button-dropdown-link-public","click",d).delegate(".js-wl-create-button-dropdown-link-private","click",d);
this.$trigger.click(function(){if(e.$popover.is(":visible")){e.$popover.hide()
}else{e.wList.fetch().then($.proxy(e.show,e))
}});
this.wList.bind(this.wList.EVENTS.CREATE,this.oncreate,this)
},show:function(d){this.$content.html(this.tmpl(d.result));
this.ucBar.positionPopover(this.$trigger,{popover:".js-uc-wishlists-popover"});
booking.track.exp("HOGeVRcJDbMXVaKBIecO")
},create:function(d){d.preventDefault();
var e=$(".js-uc-wishlists-form-title",this.$content);
var f={name:e.val(),privacy:$(d.target).attr("data-wl-privacy")||"1"};
$(".js-wl-create-button-dropdown",this.$content).addClass("g-hidden");
$(".js-uc-wishlists-error-title",this.$content).addClass("g-hidden");
$(".js-uc-wishlists-error-limit",this.$content).addClass("g-hidden");
if($(".js-uc-wishlists-list",this.$content).length>=30){return $(".js-uc-wishlists-error-limit",this.$content).removeClass("g-hidden")
}if(!f.name){return $(".js-uc-wishlists-error-title",this.$content).removeClass("g-hidden")
}this.wList.create(f).then(function(){e.val("")
})
},oncreate:function(d,f){var e=$(this.tmpl({lists:[f.result]})).find(".js-uc-wishlists-list:eq(0)").addClass("uc-wishlists__list_collapsed").prependTo($(".js-uc-wishlists",this.$content));
setTimeout(function(){e.removeClass("uc-wishlists__list_collapsed")
},16);
this.wList.fetch()
},tmpl:function(d){if(!c){if(booking.track.getVariant("IEWKFHSOJXdDRSeBHT")){c=function(e){e.wlUrlStart=booking.env.domain_for_book+"/mywishlist"+booking.env.b_query_params_with_lang+booking.env.b_query_params_delimiter+"wl_id=";
return booking.jstmpl("cug_uc_list_refactoring").render(e)
}
}else{c=booking.Template.compile($("#cug_uc_list_refactoring").html())
}}return c(d)
}}
})();
booking[sNSExperiments]["HOGeVRcJWJSJPaXfNBeKe"]={init:function(){var c=$(".js-uc-notifications-bell-count");
var d=function(){var e=c.text()-0;
if(e>1){c.text(e-1)
}else{c.remove()
}};
$(".js-uc-notification-close").click(d)
}};
booking[sNSStartup].tourism_videos={init:function(){var e=$(".t-video");
var c=$("#dsf_citycontainer");
var d=$("#tourism_video_container");
var f=function(j){j.preventDefault();
var h=$(this).data("x");
if(h){B.track.custom_goal(h,1)
}var g=$(this).data("video");
booking[sNSStartup].lightbox.show(d,{customWrapperClassName:"tourism-videos-modal",customMaskClassName:"tourism-videos-modal-sub",bAnimation:false,hideCallBack:function(){d.html("")
}});
d.html('<iframe frameborder="0" src="'+g+'"></iframe>');
return false
};
if(c.length){if(!d.length){d=$("<div id='tourism_video_container' class='tourism_video_container style='display:none;'></div>");
$("body").append(d)
}c.on("click",".t-video",f)
}else{e.click(f)
}}};
$(function(){$.extend($.expr[":"],{containsi:function(f,d,c){return(f.textContent||f.innerText||"").toLowerCase().indexOf((c[3]||"").toLowerCase())>=0
}});
$("#search_form").submit(function(){var d=$("#keyword").val();
if(!d.length){return false
}var c=["item_searching","topten","item_volcano_eruption","item_roomtypes","item_pricing","item_creditcards","item_payments","item_reservation_process","item_hotelpolicies","item_confirmation","item_extrafacilities","item_cancellation","item_directions","item_reviews"];
$(c).each(function(f,g){hideEl(g)
});
$("#search_results").children().remove();
$.getJSON("/faq_search",{lang:B.env.b_lang_for_url,query:d},function(e){results=e.results;
if(!results||!results.length){$("#search_results").append("<p>Nothing found</p>")
}else{$.each(results,function(f,j){var g=$("span#"+j),h=g.prev();
if(g&&h&&j.match(/faqa\d+/)&&!h.parents("span.faqA").size()){h.clone().appendTo("#search_results");
g.clone().appendTo("#search_results")
}})
}});
return false
});
$(".staticmenustyle").children("li").children("a").each(function(c,d){$(d).click(function(){$("#search_results").children().remove()
})
})
});
booking[sNSStartupLoad].flash_deals_for_city={priority:9,init:function(){$("#flash_deal_city_sr #city_deal").change(function(){$("#flash_deal_city_sr")[0].submit()
})
}};
booking[sNSExperiments]["PcVBccZdPPeae"]={trackGA:function(c,f){var o=" : ",g=$("#ga_list_header").data("list-logged"),h="pb: "+$("#ga_list_header").data("list-prev_b"),e="ref: "+$("#ga_list_header").data("list-ref"),d="ac: "+$("#ga_list_header").data("list-action"),n=$("#ga_list_listmap").data("list-count"),j=$("#ga_list_listmap").data("list-props"),k="pr: "+$("#ga_list_listmap").data("list-priv"),m=c.type.toString(),l="";
m=(m.indexOf("wl:")<0)?"wl:"+m:m;
l=g+o+h+o+e+o+d;
if(j){l+=o+"L="+n+o+"H="+j+o+k
}B.google.trackEvent("Listmap",m,l)
},gaSubscribers:function(){var d=this,e=["wl:create","wl:edithotel","wl:edithotels","add_email","add_email_enter","added_tag","change_name","change_privacy","check_availability","check_availability_open","create_list","del_list","del_tag","delete_email","delete_hotel","edit_cancel","edit_list","email_list","focus_hotel","go_to_list","hcard_book_now","hcard_expand","hcard_remove","hCardScrollDown","hCardScrollUp","hide_all_lists","hide_cards",'hover_card"',"image_clicked","iw_close","iw_image_clicked","iw_link_clicked","landing_from_invitation","link_clicked","marker_clicked","more_shadow","new_list","new_list_cancel","open_recent","resize_containers","resize_scroller","review_link_clicked","save_note","save_note_enter","send_link","send_link_enter","shared_with","show_all_lists","show_cards","show_cards","world_view","see_more","invite_friends","calendar_clicked","dates_changed","pb_conf_other_properties_opened"],c=["marker_mouseout","marker_mouseover"],f=false;
B.eventEmitter.bind(e.join(" "),function(g,h){d.trackGA(g,h)
});
B.eventEmitter.bind(c.join(" "),function(g,h){if(!f){d.trackGA(g,h);
f=true;
setTimeout(function(){f=false
},500)
}})
},init:function(){this.gaSubscribers()
}};
(function(g,e){var d="cQZeCJdQbHVEZYZET";
var c="user_access_menu_open";
function f(){if(g.env.b_is_loggedin_genius_user===1){g.eventEmitter.one(c,function(){g.track.exp(d)
})
}return true
}if(d){g.ensureNamespaceExists(sNSExperiments);
g[sNSExperiments][d]={priority:9,init:f,initElse:f}
}}(window.booking,window.jQuery));
(function(g,l){var d="cQZFMQKSYUYVVPNTDAeWDHeUddRUZYO";
var e;
var f;
var k;
var j;
var o;
var c=0;
function h(){var p=g(document).scrollTop();
var q=l.tools.dom.getBounds(k);
q.top=j+p;
q.bottom=j+q.height+p;
return q
}function n(r){if(!k){k=g(".notice-wrap")
}if(!k.length){return
}if(!j){j=parseInt(k.css("top"),10)
}if(e>0){k.css({transition:"0.3s top","-webkit-transition":"0.3s top"})
}var q=+(new Date())+r.stayTime;
if(q>c){c=q
}var p=j;
(function t(w){var u=g(".displace_growl:visible");
var x=h();
p=j;
u.each(function(){var A=l.tools.dom.getBounds(this);
var z=A.bottom;
if(l.tools.dom.boundsOverlap(A,x)&&z>=p){p=j+Math.max(0,z)
}});
if(!f&&p!=j){B.track.exp(d);
f=true;
if(e<1){return
}}var y=Math.max(j,p-g(document).scrollTop());
if(w!=y){k.css({top:y+"px"})
}if(new Date()<c){clearTimeout(o);
o=setTimeout(t,500,y)
}}).call()
}function m(){e=B.track.getVariant(d);
if(!window.navigator||!navigator.platform||navigator.platform.indexOf("Mac")==-1){return
}g(".uc_genius_tooltip").addClass("displace_growl");
l.eventEmitter.bind("growl:show",function(q,p){n(p)
})
}l.ensureNamespaceExists(sNSExperiments);
B[sNSExperiments][d]={priority:9,init:m,initElse:m}
})(window.jQuery,window.booking);
B[sNSExperiments]["cQZXNbYFHKBMdfYOCReEO"]=(function(){var c=function(){var d=$(".user-access-menu-lightbox-deals-wrapper"),e=B.browserStorageHandler.getSessionValue("deal_signup");
if(!e){B.browserStorageHandler.addSessionValue("deal_signup",1);
e=1;
d.removeClass("g-hidden");
booking[sNSStartup].lightbox.show(d,{customWrapperClassName:"user-access-menu-lightbox user-access-menu-lightbox-deals",hideCallBack:function(){d.addClass("g-hidden")
}})
}};
return{init:c}
})();
booking[sNSExperiments]["cQPHBAEWPAfJPESaO"]={init:function(){var f=this,e=booking.track.getVariant("cQPHBAEWPAfJPESaO"),c,d;
if(e===2||e===3){$('li.uc-notification[data-type="extension_announce"] a').click(function(g){g.preventDefault();
c=$("#promo-chrome-ext-container");
d=$("#promo-chrome-ext");
$(".user_center_popover").hide();
f.initLightbox(c,d);
booking[sNSStartup].lightbox.show($("#promo-chrome-ext-container"),{customWrapperClassName:"chrome-ext-container",bAnimation:true,bCloseButton:true,hideCallBack:function(){if(e===2&&booking.env.b_lang==="en"){f.stopAnimation(d);
f.resetAnimation(d)
}},positionAfterCallBack:function(){if(e===2&&booking.env.b_lang==="en"){f.resetAnimation(d);
f.startAnimation(d)
}}});
d.find(".cta-install-now a").click(function(){g.preventDefault();
chrome.webstore.install(booking.env.b_chrome_extension_install_url,function(){booking[sNSStartup].lightbox.hide()
})
});
d.find(".cta-play-again a").click(function(){g.preventDefault();
f.resetAnimation(d);
f.startAnimation(d)
})
})
}},initElse:function(){},initLightbox:function(c,d){d.hide().removeClass("hidden").show()
},resetAnimation:function(c){c.find(".cel-header").hide().css({width:"362px",height:"72px",left:"189px",top:"242px"});
c.find(".cel-badge").hide();
c.find(".step-info").hide();
c.find(".popup").hide();
c.find(".cel-input").hide();
c.find(".extension-usps li").hide();
c.find(".cta-install-now,.cta-play-again").hide()
},startAnimation:function(c){c.queue("promoAnim",function(){$(this).find(".cel-header").delay(100).fadeIn(1000).delay(1000).fadeOut(1000);
$(this).dequeue("promoAnim")
}).delay(4500,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".step-1").fadeIn(500).delay(2000).fadeOut(500);
$(this).dequeue("promoAnim")
}).delay(3500,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".popup-step-1").css("opacity",0).css("top",55).slideDown(250).animate({opacity:1,top:"+=11"},{queue:false,duration:250}).delay(2000).queue(function(){$(this).removeClass("part-1").addClass("part-2").delay(500).find(".cel-input__username").css({width:0,display:"block"}).animate({width:260},1500);
$(this).dequeue()
}).delay(2000).queue(function(){$(this).removeClass("part-2").addClass("part-3").delay(500).find(".cel-input__password").css({width:0,display:"block"}).animate({width:260},1500);
$(this).dequeue()
}).delay(2000).queue(function(){$(this).fadeOut(500).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(7000,"promoAnim");
c.queue("promoAnim",function(){c.find(".cel-badge").fadeIn(250);
c.find(".popup-step-2").css("opacity",0).css("top",55).slideDown(250).animate({opacity:1,top:"+=11"},{queue:false,duration:250}).delay(2000).queue(function(){c.find(".cel-badge").fadeOut(250);
$(this).fadeOut(500).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(2500,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".step-2").fadeIn(500).delay(2000).fadeOut(500);
$(this).dequeue("promoAnim")
}).delay(3500,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".popup-step-3").css("opacity",0).css("top",55).slideDown(250).animate({opacity:1,top:"+=11"},{queue:false,duration:250}).delay(2000).queue(function(){$(this).removeClass("part-1").addClass("part-2").dequeue()
}).delay(2000).queue(function(){$(this).removeClass("part-2").addClass("part-3").dequeue()
}).delay(2000).queue(function(){$(this).fadeOut(500).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(7000,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".popup-step-4").css("opacity",0).css("top",55).slideDown(250).animate({opacity:1,top:"+=11"},{queue:false,duration:250}).delay(2000).queue(function(){$(this).removeClass("part-1").addClass("part-2").dequeue()
}).delay(2000).queue(function(){$(this).removeClass("part-2").addClass("part-3").dequeue()
}).delay(2000).queue(function(){$(this).fadeOut(500).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(7000,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".step-3").fadeIn(500).delay(2000).fadeOut(500);
$(this).dequeue("promoAnim")
}).delay(3500,"promoAnim");
c.queue("promoAnim",function(){c.find(".cel-badge").fadeIn(250);
c.find(".popup-step-5").css("opacity",0).css("top",55).slideDown(250).animate({opacity:1,top:"+=11"},{queue:false,duration:250}).delay(3000).queue(function(){c.find(".cel-badge").fadeOut(250);
$(this).fadeOut(500).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(4000,"promoAnim");
c.queue("promoAnim",function(){c.find(".cel-header").delay(1000).css({opacity:1}).fadeIn(1000).delay(1000).animate({width:181,height:36,top:130},750);
$(this).dequeue("promoAnim")
}).delay(4000,"promoAnim");
c.queue("promoAnim",function(){c.queue(function(){(function d(){c.find("li:hidden:first").delay(1000).fadeIn(500,d)
})();
$(this).dequeue()
}).delay(7000).queue(function(){c.find(".cta-install-now,.cta-play-again").fadeIn();
$(this).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(3500,"promoAnim");
c.dequeue("promoAnim")
},stopAnimation:function(c){c.clearQueue("promoAnim");
c.stop("promoAnim",true,true)
}};
(function(){var c="cQHfGBeMTBYcaIXMTBEUC";
B[sNSExperiments][c]={priority:9,init:function(){$(".login-to-see-secret-deals").bind("click",function(){$(".user_center_nav .profile_menu_trigger").triggerHandler("click")
})
}}
})();
(function(h,c){var f="cQPbYEQYFGXIKe";
var e=false;
function j(){if(e){return
}c.track.exp(f);
e=true
}function g(){}function d(){var k=c.track.getVariant(f);
var n=h("#user_form").find(".js-uc-notifications");
var l=n.find(".js-uc-notification-link-close");
var m=n.find(".js-uc-notification").length;
var o=n.find(".js-uc-notifications-bell-count");
l.bind("click",function(){var q=h(this).closest(".js-uc-notification");
var p={type:q.attr("data-type"),fingerprint:q.attr("data-fingerprint")};
h.post("/dismiss_user_notification",p);
q.addClass("uc-notification_hidden");
if(!--m){n.removeClass("uc-notifications_new")
}else{o.text(m)
}})
}c.ensureNamespaceExists(sNSExperiments);
B[sNSExperiments][f]={priority:9,init:d,initElse:g}
})(window.jQuery,window.booking);
booking[sNSExperiments]["EEDdOAXZLO"]={init:function(){var c="#footer_mobile_sms_form",d="#footer_mobile_email_form";
if(!$(c).length||!$(d).length){return
}new B.appDownloadWidget({formSelector:c,type:"sms"});
new B.appDownloadWidget({formSelector:d,type:"email"})
}};
booking[sNSExperimentsLoad].google_plus_one_button={priority:9,init:function(){if(!($.browser.msie&&parseInt($.browser.version,10)>=9)){var c=document.createElement("script");
c.type="text/javascript";
c.async=true;
c.src="//apis.google.com/js/plusone.js";
var d=document.getElementsByTagName("script")[0];
d.parentNode.insertBefore(c,d)
}}};
booking[sNSExperiments]["fdDVfdBTafPQSNRbNZBUKe"]={init:function(){var d=this;
var c=+booking.env.auth_level;
if(booking.env.b_action==="index"){this.trackState("index-"+!!c)
}if(booking.env.b_book_stage){this.trackState("bs"+booking.env.b_book_stage+"-"+!!c)
}booking.eventEmitter.bind("user_access_menu_open",function(){d.trackState("signin-menu")
});
booking.eventEmitter.bind("user_access_menu_register_tab",function(){d.trackState("signup-menu")
})
},getState:function(){if(!this.state){var f=this.state=booking.promise();
var e="fdDVfdBTafPQSNRbNZBUKe_onload";
var g={client_id:"10544319075154950489.apps.googleusercontent.com",session_state:null};
window[e]=function(){window.gapi.auth.checkSessionState(g,function(h){f.fulfill(!h)
})
};
var c=document.createElement("script");
c.type="text/javascript";
c.async=true;
c.src="//apis.google.com/js/client:plusone.js?onload="+e;
var d=document.getElementsByTagName("script")[0];
d.parentNode.insertBefore(c,d)
}return this.state
},trackState:function(c){this.getState().then(function(d){booking.google.trackEvent(booking.google.clickTracker,"Google Auth:"+d,c)
})
}};
(function(){booking.eventEmitter.bind("BLOCKDISPLAY4.OPEN",function(){booking.track.exp("bHVAZKadNFWUSVKZfC")
})
})();
booking[sNSExperiments].header_2012=(function(){var c=function(){$("#b_nav_profile").bind("click",function(){$(this).toggleClass("selected");
if($("#b_header").hasClass("profile_slide_down")){$("#b_header").removeClass("profile_slide_down").addClass("profile_slide_up")
}else{$("#b_header").removeClass("profile_slide_up").addClass("profile_slide_down")
}});
$(".profile_login_switcher").bind("click",function(){$("#profile_forms").toggleClass("profile_sign-in").toggleClass("profile_sign-up")
});
$("select","#header_currency").bind("change",function(){$(this).parent("form").submit()
});
$("select","#header_language").bind("change",function(){$(this).parent("form").submit()
})
};
var d=function(){c()
};
return{init:d}
}());
booking[sNSExperiments]["BUVSceTDERXJLeAcFRSHT"]={track:function(){booking.eventEmitter.bind(B.Search.Events.DATE_CHANGED,function(){booking.track.exp("BUVSceTDERXJLeAcFRSHT")
})
},init:function(){var d="BUVSceTDERXJLeAcFRSHT",c=+B.track.getVariant(d);
if(B.Search.validators){B.Search.validators.create({type:"dates",name:"dates_are_not_in_past",test:function(){if(B.search.dates().mode!=="regular"){return false
}var f=B.search.dates("checkin"),e=B.search.dates("checkout");
if(f.type!=="valid"||e.type!=="valid"){return false
}if(c==0){return false
}else{return(B.calendar2.today()>f.dateObject_&&B.calendar2.today()>e.dateObject_)
}},fail:function(){return booking.env.error.hp_dates_in_the_past.name
}});
B.Search.validators.create({type:"dates",name:"checkin_checkout_not_on_same_day",test:function(){if(B.search.dates().mode!=="regular"){return false
}var f=B.search.dates("checkin"),e=B.search.dates("checkout");
if(f.type!=="valid"||e.type!=="valid"){return false
}if(c==0){return false
}else{return f.valueOf()==e.valueOf()
}},fail:function(){return booking.env.error.hp_same_day_checkin_checkout.name
}});
this.track()
}},initElse:function(){this.track()
}};
booking[sNSExperiments]["BUIdOccPWUFOWe"]=function(){var d=booking[sNSStartup].wlData;
function c(){booking.track.exp("BUIdOccPWUFOWe")
}function e(){var j=$(".js-wishlist-added-share-new");
var f=$(".js-wishlist-added-to-name");
var h=$(".wishlist-add-collaborators-form");
var g=!j.is(":visible");
j.delegate("a","click",function(k){h.attr("data-wl-id",f.attr("data-wl-id"));
k.preventDefault();
booking.startup.lightbox.show($("#wl_invite_modal"),{customWrapperClassName:"wl_create_modal_wrapper"})
});
booking.eventEmitter.bind("wishlists_updated",function(m,l){var k=booking.tools.object.reduce(l,function(n,o){return n||!!(o.currentHotelIsAdded&&o.isCollaborated||o.selected&&o.is_collaborated)
},false);
if(!k&&g){g=false;
c()
}j.toggle(!k)
});
booking.eventEmitter.bind("wishlist_shared",function(){j.hide()
})
}return{priority:9,init:e,initElse:e}
}();
booking[sNSStartup].improve_calendar_closing={priority:9,init:function(){$(document.body).click(function(e){var d=$(e.target).parents("#calendar_popup").length;
var c=$(e.target).parents(".calendarLink").length;
if(!d&&!c){$(this).trigger("close_calendar",e.target)
}});
return true
}};
booking[sNSExperimentsLoad]["YdVZfPecdSTYWDWOVZMYIO"]=(function(){var c=$(".b_app_banners.b_not_in_footer");
var f=c.find(".b_download_c");
var d=c.find(".store_icons");
var g=$(".app-qr-popover");
function e(){f.hover(h);
d.hover(h);
function h(){booking.track.exp("YdVZfPecdSTYWDWOVZMYIO")
}}return{init:function(){var k;
f.mouseenter(h).mouseleave(j);
d.mouseenter(h).mouseleave(j);
g.mouseover(function(){clearTimeout(k)
}).mouseleave(function(){j()
});
e();
function h(){clearTimeout(k);
var l=c.offset();
l.top+=c.outerHeight();
g.css({top:l.top,right:0}).show()
}function j(){clearTimeout(k);
k=setTimeout(function(){g.hide()
},500)
}},initElse:function(){e()
}}
})();
B[sNSExperiments]["YdVFPWcPVWDfWFPDYGWe"]={init:function(){var k=$("#searchbox_suggestion_on_right");
var g="destination-section",f="tab-nav-item-active",d="tab-content",c="tab-panel",e="tab-panel-active";
var j;
k.delegate(".tab-nav li","click",function(l){l.preventDefault();
clearTimeout(j);
h($(this))
});
k.delegate(".tab-nav li","mouseover",function(){var l=$(this);
j=setTimeout(function(){h(l)
},300)
});
k.delegate(".tab-nav li","mouseout",function(){clearTimeout(j)
});
function h(n){var m=n.closest("."+g),l=m.children("."+d);
n.siblings().removeClass(f);
n.addClass(f);
l.find("."+c).removeClass(e).eq(n.index()).addClass(e);
booking.google.trackEvent(booking.google.clickTracker,booking.env.b_action,"destination_suggestion_on_right_tab: "+n.data("tracking_type"))
}}};
booking[sNSExperiments]["YdVLCBQScADDbddZUO"]=(function(e,c){function d(){c("#footertopnav .add-property").one("mouseenter",function(){e.track.custom_goal("YdVLCBQScADDbddZUO",1)
})
}return{init:d,initElse:d}
})(booking,jQuery);
booking[sNSExperiments]["YdAPIFdTQAUGO"]={init:function(){if(booking.env.ip_country==="cn"&&booking.track.getVariant("eGOPBJIPEKeRVMdOJaMSdDWe")!==1){var g=[$("#b_map_container"),$(".b_map_explore_title_lp"),$(".b_map_explore_cta_lp")];
var h=[$(".show_map")];
var e=g.length;
var c=h.length;
var f,d;
for(f=0;
f<e;
f++){if(g[f].length>0){g[f].hide()
}}for(d=0;
d<c;
d++){if(h[d].length>0){h[d].css({color:"#003580","text-decoration":"none",cursor:"text"});
h[d].removeClass("show_map")
}}if($(".hotel-address-text-wrap").length>0){$(".hotel-address-text-wrap").css("border-bottom","none")
}if($(".hotel-address-text").length>0){$(".hotel-address-text").css("padding-left","0")
}}}};
booking[sNSExperiments]["YdVDEZREZMVQGSMScC"]={init:function(){$(".map_links").hover(function(){var f=this.id;
$("#"+f+"_in").show()
},function(){var f=this.id;
$("#"+f+"_in").hide()
});
$(".tab01").click(function(){$(".map_overseas").hide();
$(".map_ja").show();
$(".tab02").removeClass("active");
$(".tab01").addClass("active")
});
$(".tab02, #ja11").click(function(){$(".map_ja").hide();
$(".map_overseas").show();
$(".tab01").removeClass("active");
$(".tab02").addClass("active")
});
var d=$(".map_overseas");
var e=$(".overseas_cities");
d.delegate(".country_list","click",function(h){h.preventDefault();
var j=$(this);
var f=j.data("id");
var g=e.find(".country_"+f).clone();
c.open({title:j.clone(),content:g})
});
var c=(function(){var g=$(".map_box_overlay");
var h=g.find(".map_box_overlay_header_title");
var j=g.find(".map_box_overlay_content");
var f;
g.delegate(".map_box_overlay_mask","click",function(k){f.close()
}).delegate(".map_box_overlay_close_button","click",function(k){f.close()
});
f={open:function(k){var l=k.content||"";
var m=k.title||"";
h.empty().append(m);
j.empty().append(l);
g.show()
},close:function(){g.hide()
}};
return f
})()
},initElse:function(){}};
booking[sNSExperiments]["YdVDEZREYfIbTNWDIGO"]={init:function(){var e=B.calendar2.today();
if(booking.track.getVariant("YdVDEZREYfIbTNWDIGO")==1){var d=new Date(e.getTime()+3600*24*1000)
}else{if(booking.track.getVariant("YdVDEZREYfIbTNWDIGO")==2){var d=new Date(e.getTime()+3600*24*1000*2)
}}var f=new Date(d.getTime()+3600*24*1000);
var c=B.Search.createDate({year:d.getFullYear(),month:d.getMonth(),date:d.getDate()}).toString();
var g=B.Search.createDate({year:f.getFullYear(),month:f.getMonth(),date:f.getDate()}).toString();
B.search.dates("checkin",c);
B.search.dates("checkout",g)
}};
if(B.env.b_lang_for_url=="zh-cn"&&B.env.b_action.match(/index|searchresults|hotel|destinationfinder|city|region|country/g)){booking[sNSExperiments]["YdAZAXDTYDdYAfPeXTOIAeYMKAcbYLT"]={init:function(){if(B.env.b_action.match(/index|destinationfinder|city|region|country/g)){var c=$("#searchboxInc");
var g=c.height()+c.offset().top;
var e=$("div.rtcorner_btn");
$(window).scroll(function(){if($(window).scrollTop()>g){e.addClass("rtcorner_btn_overlay")
}else{e.removeClass("rtcorner_btn_overlay")
}})
}$("#rtcorner_wechat").click(function(h){$(".wechat_qrcode_block").toggle();
if($(".newsletter_block").is(":visible")){$(".newsletter_block").hide()
}booking.track.custom_goal("YdAZAXDTYDdYAfPeXTOIAeYMKAcbYLT",2);
h.stopPropagation()
});
$("#rtcorner_newsletter").click(function(h){$(".newsletter_block").toggle();
if($(".wechat_qrcode_block").is(":visible")){$(".wechat_qrcode_block").hide()
}booking.track.custom_goal("YdAZAXDTYDdYAfPeXTOIAeYMKAcbYLT",1);
h.stopPropagation()
});
$("body").click(function(){$(".newsletter_block, .wechat_qrcode_block").hide()
});
$(".newsletter_block, .wechat_qrcode_block").click(function(h){h.stopPropagation()
});
var f=$("#newsletter_to_rtcorner"),d=f.attr("value");
f.click(function(){var h=$(this);
if(h.val()===d){h.val("")
}else{h.select()
}});
f.blur(function(){var h=$(this);
if(h.val()===""){h.val(d)
}});
$("#newsletter_button_rtcorner").click(function(){$(this).parents("form:first").submit()
})
}}
}booking[sNSExperiments]["fEDRMYBXRXZXe"]=(function(){var c=function(){if($("#error404page").length){booking.track.exp("fEDRMYBXRXZXe")
}$("#errorReport").click(function(f){f.preventDefault();
var d=$(this).data("lightboxurl");
booking[sNSStartup].lightbox.show(d,{iframe:true,iframeWidth:450,iframeHeight:550})
})
};
return{init:c,initElse:c}
}());
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSExperiments]["fESfIKZZSMZC"]={priority:9,init:function(){var f=["filterelement","populardest","no_target_blank"],c=true,d,e;
$("a").each(function(){var j=$(this),g=j.attr("href");
c=true;
e=(g&&(g.indexOf("javascript:")==-1)&&g[0]!=="#")?true:false;
d=j.attr("class");
for(var h=0;
h<=f.length;
h++){if(d.indexOf(f[h])>=0){c=false
}}if(c&&e){j.attr("target","_blank")
}})
},initElse:function(){}};
booking[sNSExperimentsLoad]["fEDYBZESfBKCWdLOZOGfFdHMOfEIJC"]=(function(){var c=function(){$(".hasJS #global-status").fadeOut();
$(".hasJS #global-preloader").delay(500).fadeOut(function(){$(".hasJS #global-preloader").remove();
$(".hasJS body").delay(350).css({overflow:"visible"})
})
};
return{init:c}
}());
booking[sNSExperimentsLoad]["fEDYBZESfBKCWdLOZOGORe"]=(function(){var c=function(){$(".hasJS #global-status").fadeOut();
$(".hasJS #global-preloader").delay(500).fadeOut(function(){$(".hasJS #global-preloader").remove();
$(".hasJS body").delay(350).css({overflow:"visible"})
})
};
return{init:c}
}());
booking[sNSExperimentsLoad]["fEDYBZESfBKCWdLOZOGBYT"]=(function(){var c=function(){$(".hasJS #global-status").fadeOut();
$(".hasJS #global-preloader").delay(500).fadeOut(function(){$(".hasJS #global-preloader").remove();
$(".hasJS body").delay(350).css({overflow:"visible"})
})
};
return{init:c}
}());
booking[sNSExperiments]["fEJdDBKFFZBBacMSeKe"]=(function(d,f){var e=function(){c();
if(booking.env.b_action!="index"||!d("#left").length){return
}d(".lp-index-promo-slider").find(".lp-index-promo-slider-indicators").bindGAtrackOnClick(false,"lp_clicks","villas_slider","other_slide_button").end().find(".btn").bindGAtrackOnClick(true,"lp_clicks","villas_slider","slider_primary_action");
d(".with_rec_tooltip").find("tr.dotter").bindGAtrackOnClick(true,"lp_clicks","recommended_ufi","open_hotel",{exclude:function(g){return(g&&g.target&&d(g.target).closest(".checkAvailabilitySwitch").length)
}}).end().find(".checkAvailabilitySwitch").bindGAtrackOnClick(false,"lp_clicks","recommended_ufi","check_availability").end().find(".postcard").bindGAtrackOnClick(true,"lp_clicks","recommended_ufi","postcard_to_results").end().find(".destmore a").bindGAtrackOnClick(true,"lp_clicks","recommended_ufi","more_properties_to_results");
d("#checkAvailabilityBtn").bindGAtrackOnClick(true,"lp_clicks","recommended_ufi","check_availability_to_results");
d("#uspsbox").find("a").filter("[target='_blank']").each(function(){d(this).bindGAtrackOnClick(false,"lp_clicks","usp_click",d(this).closest(".oneusp").attr("id"))
}).end().filter("[target!='_blank']").each(function(){d(this).bindGAtrackOnClick(true,"lp_clicks","usp_click",d(this).closest(".oneusp").attr("id"))
});
d("#popularDestinations").find(".b-app_dots").bindGAtrackOnClick(true,"lp_clicks","popular_destinations","arrow_to_city").end().find(".b-popular_country").bindGAtrackOnClick(true,"lp_clicks","popular_destinations","country_link").end().find(".b-popular_title a").bindGAtrackOnClick(true,"lp_clicks","popular_destinations","city_link").end().find(".b-popular_thumb_holder").bindGAtrackOnClick(true,"lp_clicks","popular_destinations","foto_city_link").end().find(".b_popular_acc_types a").bindGAtrackOnClick(true,"lp_clicks","popular_destinations","property_type");
d("#searchboxInc").find(".b-searchbox-button").bindGAtrackOnClick(true,"lp_clicks","searchbox","search_button");
d("#LastViewedHotels").find("a.thumbLink, a.hotel_history_lnk").bindGAtrackOnClick(true,"lp_clicks","last_viewed_hotels","hotel_link").end().find(".remove_hotel").bindGAtrackOnClick(true,"lp_clicks","last_viewed_hotels","remove_hotel").end().find(".mailafriend_popup").bindGAtrackOnClick(true,"lp_clicks","last_viewed_hotels","mailafriend_popup").end().find(".remover").bindGAtrackOnClick(true,"lp_clicks","last_viewed_hotels","remove_all_hotels");
d("#search_history_items_list").find(".b-popular_item").bindGAtrackOnClick(true,"lp_clicks","search_history","resume_search");
d("#back_to_top").bindGAtrackOnClick(false,"lp_clicks","back_to_top","index_back_to_top")
};
function c(){var m=f.browserStorageHandler,l,g,h,j;
try{l=JSON.parse(m.getPermanentValue("trackLaterEvents"))||null
}catch(k){}m.deletePermanentValue("trackLaterEvents");
if(l){g=l.length;
for(j=0;
j<g;
j++){h=l[j];
f.google.trackEvent(h[0],(h[1]||""),(h[2]||""),(h[3]||null))
}}}d.fn.bindFirst=function(){var h=Array.prototype.slice.call(arguments);
if(h.length>1){d.fn.bind.apply(this,arguments);
g.call(this,h[0]);
return this
}function g(j){var m=j.split(".")[0],l=d(this).data("events"),k;
if(l){k=l[m];
k&&k.length>1&&k.unshift(k.pop())
}}};
d.fn.bindGAtrackOnClick=function(){if(typeof JSON==="undefined"){return this
}var j=Array.prototype.slice.call(arguments),g=j.length,l=!!j[0],h={},k,m,n=f.browserStorageHandler;
if(g<2){return this
}for(k=j.length-1;
k>=0;
k--){if(typeof j[k]=="object"){h=j[k];
j[k]=""
}}d(this).each(function(){var o=d(this);
o.bindFirst("click.ga",function(p){if(!h.exclude||(typeof h.exclude==="function"&&!h.exclude.call(this,p))){if(l){try{m=JSON.parse(n.getPermanentValue("trackLaterEvents"))||[]
}catch(p){m=[]
}m.push(j.slice(1));
n.addPermanentValue("trackLaterEvents",JSON.stringify(m))
}else{f.google.trackEvent(j[1],j[2],(j[3]||""),(j[4]||null))
}}})
});
return this
};
return{init:e}
}(jQuery,booking));
(function(c){c.extend({noticeAddNewDesign:function(e){var h={inEffect:{opacity:"100"},inEffectDuration:600,stayTime:5000,text:"",stay:false,type:"notice",destination:"",thisNo:0};
var e,j,g,f,d;
e=c.extend({},h,e);
j=c("#new_growl_design");
g=c(".bottom_growl_message");
d=(e.destination=="")?'<span class="'+e.type+' notice-message"><span class="text_fix">'+e.text+"</span></span>":'<span class="'+e.type+' notice-message"><a href="'+e.destination+'">'+e.text+"</a></span>";
if(e.thisNo==0){j.slideDown();
g.append(d).show()
}else{g.find(".notice-message").slideUp(function(){$(this).remove();
g.append(d,function(){$(this).slideDown()
})
})
}j.find(".close_growl").live("click",function(k){c.noticeRemoveNewGrowl(j);
return false
});
if(noNotices==e.thisNo){setTimeout(function(){c.noticeRemoveNewGrowl(j)
},e.stayTime)
}},noticeRemoveNewGrowl:function(d){d.slideUp()
}})
})(jQuery);
B[sNSExperiments]["YRJNfLKELCBRe"]={checkAndTrack:function(){if((!(booking.env.b_aid==="339530")||!(booking.env.b_aid==="306623")||!(booking.env.b_aid==="317836"))&&(typeof booking.env.b_user_auth_level_is_none!="undefined"&&booking.env.b_user_auth_level_is_none==1)){B.track.onView("#footer_menu_track").exp("YRJNfLKELCBRe")
}},setupGoals:function(){$(".signupForm").submit(function(){var c=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,d=$(".signupForm input[name=to]").val();
if(d===""||!(c.test(d))){B.track.custom_goal("YRJNfLKELCBRe",1)
}})
},init:function(){this.checkAndTrack();
this.setupGoals()
},initElse:function(){this.checkAndTrack();
this.setupGoals()
}};
booking[sNSExperiments]["IZEJWcSdEDeZBTUC"]=(function(j,d){var l=j(".uc-upcoming-bookings"),h="IZEJWcSdEDeZBTUC",c=d.eventEmitter;
function n(){g();
c.trigger("uc:upcoming-bookings:load",{lang:d.env.b_lang_for_url,sid:d.env.b_sid});
f();
k()
}function g(){c.bind("uc:upcoming-bookings:load",m);
c.bind("uc:upcoming-bookings:load:end",o)
}function m(p,q){if(!q){return
}c.trigger("uc:upcoming-bookings:load:start");
j.ajax({url:"/user_reservations",type:"get",dataType:"json",data:q,cache:true,success:function(r){c.trigger("uc:upcoming-bookings:load:end",{bookings:r})
}})
}function o(q,u){var t=booking.jstmpl("uc_upcoming_bookings"),p=u.bookings.length,r=";from=uc_upcoming_bookings";
if(p<2){l.remove()
}else{l.parents(".menu__bookings").addClass("menu__bookings--has-upcoming-bookings");
while(p--){if(!u.bookings[p].show_all){u.bookings[p]["reservation_link"]=d.env.pb_myreservations_url+"bn="+u.bookings[p].hotelreservation_id+r
}else{u.bookings[p]["see_all_link"]=d.env.pb_myreservations_url+r
}}t=t.render(u);
l.html(t)
}}function f(){c.bind("uc_popover_showed",function(p,q){if(q.id==="current_account"){d.track.exp(h)
}})
}function k(){var p=d.env.b_action&&d.env.b_action==="myreservations",r=location.href,q=r.indexOf(";from=uc_upcoming_bookings")>-1,t=r.indexOf(";bn=")>-1;
if(p&&q){e(t?1:2)
}}function e(p){d.track.custom_goal(h,p)
}return{priority:9,init:n,initElse:f}
})(jQuery,booking);
booking[sNSStartup]["IZdPZPUNVcEaIDfRJLYDJRdcC"]=(function(c){var e="IZdPZPUNVcEaIDfRJLYDJRdcC",j=null,d=null,h=20;
function l(){j=$("#b_"+e);
d=$(window);
d.bind("scroll",g);
$(".mybooking-bn-pin-login--footer input").bind("keydown click",f)
}var k=null;
function g(m){clearTimeout(k);
k=setTimeout(function(){if(j&&j.length){var n=j.offset();
if(n&&n.top&&d.scrollTop()+d.height()>=n.top+h){c.track.custom_goal(e,1);
d.unbind("scroll",g)
}}},100)
}function f(m){if(m.which==13||($(this).attr("type")=="submit"&&m.type=="click")){c.track.custom_goal(e,2);
$(".mybooking-bn-pin-login--footer input").unbind("keydown click",f)
}}return{init:l}
})(booking);
booking[sNSExperiments]["IZdPZPUNVcEaIDfRJLNSTLdFFO"]=(function(q,e,p){var j=false,m=0,h=0,f=28,l=false;
function u(){n();
r()
}function w(){r()
}function n(){e(".js-btn--invite-to-resend, .js-btn--repeat").bind("click",o);
e(".js-btn--close").bind("click",y);
e(".resend-conf-form").bind("submit",k);
e(".resend-conf-form__send").bind("click",k)
}function r(){e(".uc-mybooking .popover_trigger").bind("click",t)
}function x(z){if(!j){j=true;
m=e(".popover_content--has-footer").outerHeight();
h=e(".resend-conf__step--invite").outerHeight();
e(".popover_content--has-footer").css("min-height",m);
e(".resend-conf").addClass("resend-conf--absolute")
}}function o(z){x();
e(".resend-conf").addClass("resend-conf--active");
e(".resend-conf").animate({height:m-f},250);
e(".resend-conf__step").addClass("is-hidden");
e(".resend-conf__step--form").removeClass("is-hidden");
return false
}function y(z){e(".resend-conf").removeClass("resend-conf--active");
e(".resend-conf__step").addClass("is-hidden");
e(".resend-conf__step--invite").removeClass("is-hidden");
e(".resend-conf").animate({height:h},250);
return false
}function k(C){var z=e(".resend-conf-form"),A=e(".resend-conf-form__send");
C.preventDefault();
if(A.is(".disabled")){return false
}if(z.find("input[name=email]").val()==""||!z.find("input[name=email]").val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){z.find("input[name=email]").addClass("invalid-input");
z.find(".resend-conf-form__error").removeClass("is-hidden");
return false
}z.find("input[name=email]").removeClass("invalid-input");
z.find(".resend-conf-form__error").addClass("is-hidden");
A.addClass("disabled");
e.ajax({url:z.attr("action")+"?"+z.serialize(),dataType:"jsonp",success:function(D){g();
c()
},error:function(){d()
}})
}function c(){e(".resend-conf-form").length&&e(".resend-conf-form")[0].reset();
e(".resend-conf-form input[name=email]").removeClass("invalid-input");
e(".resend-conf-form .resend-conf-form__error").addClass("is-hidden");
e(".resend-conf-form__send").removeClass("disabled")
}function g(){e(".resend-conf__step").addClass("is-hidden");
e(".resend-conf__step--success").removeClass("is-hidden");
e(".resend-conf__success__email").text(e(".resend-conf-form input[name=email]").val())
}function d(){e(".resend-conf__step").addClass("is-hidden");
e(".resend-conf__step--error").removeClass("is-hidden");
e(".resend-conf-form__send").removeClass("disabled")
}function t(z){if(!l){l=true;
q.track.exp("IZdPZPUNVcEaIDfRJLNSTLdFFO")
}}return{init:u,initElse:w,priority:9}
})(booking,jQuery,jQuery(window));
$(".usabilla_pre_lightbox").click(function(){booking[sNSStartup].lightbox.show($("#usabilla_lightbox"),{customWrapperClassName:"usabilla_lightbox",bCloseButton:true});
return false
});
booking[sNSExperiments]["ZSUNCTYAbEOFefYSbC"]=(function(){var c=function(){if(screen.width>$(window).width()&&window.opener!==null){var d=$("body");
d.click(function(f){window.resizeTo(screen.width,screen.height);
window.moveTo(0,0);
var e=$(".sticky_hotel");
if(e.length){e.width(e.closest(".hotellist_wrap").width())
}return true
})
}};
return{init:c}
}());
B[sNSExperiments]["ZFeNBKKYAPACLO"]=(function(g,k){var f=150+7+10;
function e(l){this.$element=g(l);
this.priority_=this.$element.data("priority")||5
}e.prototype.width=function(){if(!this.width_){this.width_=this.$element.outerWidth()
}return this.width_
};
e.prototype.priority=function(){return this.priority_
};
e.prototype.hide=function(){this.$element.hide();
return this
};
e.prototype.show=function(){this.$element.show();
return this
};
function d(l){this.$element=g(l);
this.items=g.map(this.$element.find(".user_center_option"),function(m){return new e(m)
});
this.sortedItems=this.items.sort(function(n,m){return n.priority()-m.priority()
})
}d.prototype.fitWidth=function(l){g.each(this.sortedItems,function(m,n){if(l-n.width()>0){l-=n.width();
n.show()
}else{n.hide()
}});
return this
};
function j(){var l=g("#top .user_center_nav .user_center_option");
g(window).bind("resize",k.tools.functions.throttle(function(){var m=k.tools.object.reduce(l,function(o,p){return o+g(p).width()
},0),n=g("#top").width()-f;
if(m>n){k.track.exp("ZFeNBKKYAPACLO")
}},1000))
}function h(){j();
var l=g("#top"),m=new d(l.find(".user_center_nav"));
function n(){m.fitWidth(l.width()-f)
}g(window).bind("resize",k.tools.functions.throttle(n,300));
n()
}function c(){j()
}return{init:h,initElse:c,priority:9}
}($,booking));
$(function(){$("a.room_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date").hide()
});
$(".confirm_change_date").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date").length>0){$("body").click(function(){$(".confirm_change_date").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
$(function(){$("a.hotel_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date_hotel").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date_hotel a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date_hotel").hide()
});
$(".confirm_change_date_hotel").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date_hotel").length>0){$("body").click(function(){$(".confirm_change_date_hotel").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
$(function(){$("a.photo_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date_photo").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date_photo a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date_photo").hide()
});
$(".confirm_change_date_photo").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date_photo").length>0){$("body").click(function(){$(".confirm_change_date_photo").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
$(function(){$("a.review_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date_review").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date_review a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date_review").hide()
});
$(".confirm_change_date_review").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date_review").length>0){$("body").click(function(){$(".confirm_change_date_review").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
$(function(){$("a.more_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date_more").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date_more a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date_more").hide()
});
$(".confirm_change_date_more").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date_more").length>0){$("body").click(function(){$(".confirm_change_date_more").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
$(function(){$("a.scarcity_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date_scarcity").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date_scarcity a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date_scarcity").hide()
});
$(".confirm_change_date_scarcity").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date_scarcity").length>0){$("body").click(function(){$(".confirm_change_date_scarcity").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
booking[sNSExperiments].notifications={priority:9,init:function(){this.initializeNotifications()
},initElse:function(){this.initializeNotifications()
},initializeNotifications:function(){var f=$("#notificationMenu .alert");
f.css({display:"block",visibility:"hidden"});
var c=$("#formwrap");
var e=c.height();
var d=$(".sidebar_menu_placeholder").height();
if(e<d){c.animate({"min-height":d},{duration:400})
}f.css({display:"none",visibility:"visible"}).css("opacity",0).slideDown(500).animate({opacity:1},{queue:false,duration:750})
}};
booking.run("VXSUaSFSbVKGPNCFWe").onReady(function(){booking.eventEmitter.bind("user_access_menu_register_tab",function(){booking.track.exp("VXSUaSFSbVKGPNCFWe")
})
});
(function(){$(".header-user-menu-link-s-logged-in").click(function(){booking.track.exp("VXSUbXXRfZaebQAVYdCScETOET");
return false
})
}());
(function(){$(".header-user-menu-link-s-logged-in").click(function(){booking.track.exp("VXSUfKVWBbUEfcWfHHT");
return false
})
}());
(function(){$(".header-user-menu-link-s-logged-in").click(function(){booking.track.exp("VXSUfKVGXRJYPNMZC");
return false
})
}());
(function(){$(".header-user-menu-link-s-logged-in").click(function(){booking.track.exp("VXSUbaPAYbaO");
return false
})
}());
(function(){$(".header-user-menu-link-s-logged-in").click(function(){booking.track.exp("VXSUaXHBIUfUYCeHHQC");
return false
})
}());
(function(){$(".header-user-menu-link-s-logged-in").click(function(){booking.track.exp("VXSUfCfebBGeQVVJdFO");
return false
})
}());
(function(){$(".header-user-menu-link-s-logged-in").click(function(){booking.track.exp("VXSUfXYZEFMMWe");
return false
})
}());
B[sNSExperiments]["bLYQCLBMDGDGdUBGYT"]=(function(){function c(){B.eventEmitter.bind("CALENDAR:opened",function(){B.track.exp("bLYQCLBMDGDGdUBGYT")
})
}return{init:c,initElse:c}
})();
booking[sNSExperiments]["bLNJSJNWWUAPTPWOGANMfefVZHC"]=(function(e,c){e.Search.CombinedDatepicker=function(f,g){this.initialize.apply(this,[].slice.call(arguments,0));
this.$checkinWidget=this.$element.find(".b-combined-date-selector_checkin");
this.$checkoutWidget=this.$element.find(".b-combined-date-selector_checkout");
this.$checkinTextField=this.$checkinWidget.find(".b-combined-date-selector__text");
this.$checkoutTextField=this.$checkoutWidget.find(".b-combined-date-selector__text");
this.$checkinInputField=this.$checkinWidget.find(".b-combined-date-selector__input");
this.$checkoutInputField=this.$checkoutWidget.find(".b-combined-date-selector__input");
this.checkinValue_=e.Search.createDate(this.$checkinInputField.val());
this.checkoutValue_=e.Search.createDate(this.$checkoutInputField.val());
this.initCalendarPlugin("checkin");
this.initCalendarPlugin("checkout");
this.$checkinWidget.removeAttr("onclick").removeClass("b-combined-date-selector_loading");
this.$checkoutWidget.removeAttr("onclick").removeClass("b-combined-date-selector_loading");
this.tryShowingCalendarIfUserRequestedIt();
this.onInit()
};
e.Search.CombinedDatepicker.prototype=new e.Search.AbstractWidget;
e.Search.CombinedDatepicker.prototype.setConfig=function(f){if(f.checkin){this.setCheckinValue(f.checkin)
}if(f.checkout){this.setCheckoutValue(f.checkout)
}};
e.Search.CombinedDatepicker.prototype.setCheckinValue=function(f){if(f&&this.checkinValue_.valueOf()!==f.valueOf()){this.checkinValue_=f;
this.$checkinInputField.val(f.toString());
this.$checkinTextField.html(this.getTextValueFromDate(f));
this.tryCallback("onCheckinChange",[f],function(){e.search.dates("checkin",f)
})
}};
e.Search.CombinedDatepicker.prototype.setCheckoutValue=function(f){if(f&&this.checkoutValue_.valueOf()!==f.valueOf()){this.checkoutValue_=f;
this.$checkoutInputField.val(f.toString());
this.$checkoutTextField.html(this.getTextValueFromDate(f));
this.tryCallback("onCheckoutChange",[f],function(){e.search.dates("checkout",f)
})
}};
e.Search.CombinedDatepicker.prototype.getTextValueFromDate=function(f){return e.formatter.date(f.toString(),"date_with_year")
};
e.Search.CombinedDatepicker.prototype.getConfig=function(){return{checkin:this.checkinValue_,checkout:this.checkoutValue_}
};
e.Search.CombinedDatepicker.prototype.setConfig=function(f){if(f&&f.type&&f.value){if(f.type==="checkin"){this.setCheckinValue(f.value)
}else{if(f.type==="checkout"){this.setCheckoutValue(f.value)
}}}};
e.Search.CombinedDatepicker.prototype.initCalendarPlugin=function(h){var j=this;
var g,f;
if(e.calendar2){if(h==="checkin"){g=e.calendar2.checkinOptions;
f=this.$checkinWidget
}else{if(h==="checkout"){g=e.calendar2.checkoutOptions;
f=this.$checkoutWidget
}}}if(g){f.calendar2(c.extend(g,{positioning:"inside",lazy:true,onDateSelected:function(n,k,m){if(!(n||k)){return
}var l=e.Search.createDate({year:k.getYear(),month:k.getMonth(),date:k.getDate()});
j.setConfig({type:h,value:l})
}}))
}};
e.Search.CombinedDatepicker.prototype.onExternalEventConfigChanged=function(f){if(f&&f.value){if(f.type==="checkin"){this.setCheckinValue(f.value)
}else{if(f.type==="checkout"){this.setCheckoutValue(f.value)
}}}};
e.Search.CombinedDatepicker.prototype.trigger=function(f,g){if(f==="dateChanged"&&typeof this.onExternalEventConfigChanged==="function"){this.onExternalEventConfigChanged.apply(this,[].slice.call(arguments,1))
}else{if(f==="modeChanged"&&typeof this.onExternalEventModeChanged==="function"){this.onExternalEventModeChanged.apply(this,[].slice.call(arguments,1))
}}};
e.Search.CombinedDatepicker.prototype.onExternalEventConfigChanged=function(f){if(f){this.setConfig(f)
}};
e.Search.CombinedDatepicker.prototype.HIDDEN_STATE_CLASS="b-form-combined-date-selectors_hidden";
e.Search.CombinedDatepicker.prototype.onExternalEventModeChanged=function(f){if(f&&f.mode){this.tryCallback("onModeChange",[f],function(){this.$element.toggleClass(this.HIDDEN_STATE_CLASS,f.mode===e.Search.DateModes.NODATES||f.mode===e.Search.DateModes.FLEXIBLE)
})
}};
e.Search.CombinedDatepicker.prototype.tryShowingCalendarIfUserRequestedIt=function(f){if(window.lastClickedCalendarElement){try{var g=c(window.lastClickedCalendarElement);
if(g.is(":visible")&&g.data("calendar2")){g.data("calendar2").show()
}delete window.lastClickedCalendarElement
}catch(h){}}};
function d(){c.fn.combinedDatepicker=e.Search.createWidgetPlugin("combinedDatepicker",e.Search.CombinedDatepicker);
c(".js-combined-date-selectors").combinedDatepicker();
function f(j,h){c.fn.combinedDatepicker("notify","dateChanged",h)
}function g(j,h){c.fn.combinedDatepicker("notify","modeChanged",h)
}e.eventEmitter.bind(e.Search.Events.DATE_CHANGED,f);
e.eventEmitter.bind(e.Search.Events.DATE_MODE_CHANGED,g)
}return{init:d}
}(B,$));
B[sNSExperiments]["bLNQFZDDUZWfAaNCWRe"]={track:function(f,c){var g=B.env.b_action||"undefined",d={checkIn:"Check-In",checkOut:"Check-Out"},j={monthSelect:"Month Select",daySelect:"Day Select",icon:"Icon"};
B.track.exp("bLNQFZDDUZWfAaNCWRe");
if(!B.track.getVariant("bLNQFZDDUZWfAaNCWRe")){return
}try{B.google.trackEvent("Click",["Calendar",d[f],j[c]].join(":"),g)
}catch(h){}},init:function(){}};
B[sNSExperiments]["bLYSRbQfDbAeaLSGDTDCYSELIae"]={setupTracking:function(){B.eventEmitter.bind(B.Search.Events.GROUP_MODE_CHANGED,function(c,d){if(d&&d.mode==="custom"){booking.track.exp("bLYSRbQfDbAeaLSGDTDCYSELIae")
}})
},init:function(){$(".b-form-custom-group .b-rooms-selectbox .show_room_selector").click(function(){$(".b-rooms-selectbox .b-selectbox__container").show();
$(".b-form-custom-group .b-rooms-selectbox .show_room_selector").hide()
});
this.setupTracking()
},initElse:function(){this.setupTracking()
}};
B.run("bLYSRbAebYBYIZMO").onReady(function(){B.track.onClick(".b-predefined-group-selector .b-selectbox__element").exp("bLYSRbAebYBYIZMO")
});
(function(c){function d(){B.eventEmitter.bind("AUTOCOMPLETE:opened",function(){var g=$("#destination").data("autocomplete");
var h,f,e;
if(g&&(e=g.term.length)>0){for(f=0;
f<e;
f++){h=g.term.charCodeAt(f);
if(44032<=h&&h<=55215){B.track.exp(c);
break
}}}})
}B[sNSExperiments][c]={init:d,initElse:d}
})("PAWfKaIZQQdOBZGfGccBcYfC");
(function(c){function d(){B.eventEmitter.bind("AUTOCOMPLETE:opened",function(){var e=$("#destination").data("autocomplete");
if(e&&e.term.match(/台|臺/)){B.track.exp(c)
}})
}B[sNSExperiments][c]={init:d,initElse:d}
}("PAWfKaIZQQdOBHIZPEEMMDPEdHZYYT"));
booking[sNSStartup].search_history={priority:9,fullListShowed:false,minListSize:5,lastviewTimer:null,loadStart:null,init:function(){this.loadStart=new Date();
var c=this;
if(document.getElementById("SearchHistory")){try{this.minListSize=parseInt($("#SearchHistory").attr("min"))
}catch(d){}$("a.remove_search").click(function(){var f=$(this).attr("href").substring(1).split(";");
var g=f[0];
var e=f[1];
var h=f[2];
$.ajax({url:"/search_history",type:"DELETE",data:{type:g,value:e,epoch:h}});
booking[sNSStartup].search_history.cleanupHistoryList(this);
this.blur();
return false
});
if($("#showAllSearches").length){$("#showAllSearches").click(function(){booking[sNSStartup].search_history.showAll();
this.blur();
return false
})
}if($("#removeAllSearches").length){$("#removeAllSearches").click(function(){booking[sNSStartup].search_history.removeAll(true);
this.blur();
return false
})
}}return true
},cleanupHistoryList:function(d){var c=this.minListSize;
$(d).parent().fadeOut(500,function(){$(d).parents("li").remove();
if($("#SearchHistory li").length>c-1){var e=$("#SearchHistory li").get(c-1);
$(e).fadeIn(1000)
}});
if($("#SearchHistory li").length<2){booking[sNSStartup].search_history.removeAll(false)
}if(document.getElementById("showAllSearches")){if($("#SearchHistory li").length<c+2){$("#moreSearchesLinkWrapper").hide()
}}},showAll:function(){var c=$("#SearchHistory li");
var d=this.minListSize;
if(!booking[sNSStartup].search_history.fullListShowed){for(i=d-1;
i<c.length;
i++){$(c[i]).fadeIn(500)
}booking[sNSStartup].search_history.fullListShowed=true
}else{for(i=d;
i<c.length;
i++){$(c[i]).fadeOut(500)
}booking[sNSStartup].search_history.fullListShowed=false
}booking[sNSStartup].search_history.switchCaption()
},removeAll:function(c){if(c){$.ajax({url:"/search_history",type:"DELETE",data:{type:-1,value:null,epoch:null}})
}$("#SearchHistory").fadeOut(500,function(){$(this).remove()
})
},switchCaption:function(){if(booking[sNSStartup].search_history.fullListShowed){$("#showAllSearches .showLink").hide();
$("#showAllSearches .hideLink").show()
}else{$("#showAllSearches .showLink").show();
$("#showAllSearches .hideLink").hide()
}}};
$("a#search_summary_toggle_button").click(function(){var c=$("#searchboxInc");
c.find(".search_summary_block").hide();
c.find(".original_search_form").removeClass("original_search_form_hidden");
if(booking.env.b_action=="searchresults"&&booking.env.b_has_filters&&booking.env.b_has_filters==1){B.track.exp("OQZFKbeVdaWNERT")
}if(B.track.getVariant("bLNJbSUYJRCENHET")){c.removeClass("search-box-collapsed");
c.find("#frm").removeClass("search-box-collapsed");
B.track.exp("bLNJbSUYJRCENHET")
}return false
});
B[sNSExperiments]["POKPcVDaaAPPeae"]=(function(f,d){function c(g,h){if(typeof h==="string"){f.Search.tracker.trackError(h)
}else{if(h&&h.validators){f.tools.object.each(h.validators,function(j){if(j&&j.status==="fail"&&j.name){f.Search.tracker.trackError(j.name)
}})
}}}function e(){f.eventEmitter.bind(f.Search.Events.DESTINATION_INVALID,c);
f.eventEmitter.bind(f.Search.Events.DATE_INVALID,c);
f.eventEmitter.bind(f.Search.Events.GROUP_INVALID,c)
}return{init:e}
}(booking,$));
booking[sNSExperimentsLoad]["POKPIOdFaJKbIbVZEdNEQSVWe"]={setupTracking:function(){booking.track.onView(".b-form__dates").exp("POKPIOdFaJKbIbVZEdNEQSVWe")
},init:function(){this.setupTracking()
},initElse:function(){this.setupTracking()
}};
booking[sNSStartup].SecretDeals={priority:8,init:function(){if(!booking.env.b_is_ie6){var d=this;
if(!$("#secretdeals-bg1").length){return false
}$(window).bind("scroll",function(f){d.parallaxScroll()
});
$("a.section1").click(function(){$("html, body").animate({scrollTop:0},1000,function(){d.parallaxScroll()
});
return false
});
$("a.section2").click(function(){$("html, body").animate({scrollTop:$("#section2").offset().top},1000,function(){d.parallaxScroll()
});
return false
});
$("a.section3").click(function(){$("html, body").animate({scrollTop:$("#section3").offset().top},1000,function(){d.parallaxScroll()
});
return false
});
$("a.section4").click(function(){$("html, body").animate({scrollTop:$("#section4").offset().top},1000,function(){d.parallaxScroll()
});
return false
});
$("nav#primary a").hover(function(){$(this).prev("h1").show()
},function(){$(this).prev("h1").hide()
});
var c=$(".sc_navigator");
$(window).scroll(function(){var e=$(window).scrollTop();
if(e<=900){d.removeActiveClass();
$("a#sd_nr1").addClass("active")
}else{if(e>900&&e<1750){d.removeActiveClass();
$("a#sd_nr2").addClass("active")
}else{if(e>1751&&e<2500){d.removeActiveClass();
$("a#sd_nr3").addClass("active")
}else{d.removeActiveClass();
$("a#sd_nr4").addClass("active")
}}}})
}},removeActiveClass:function(){$(".sc_navigator a").each(function(){$(this).removeClass("active")
})
},parallaxScroll:function(){var c=$(window).scrollTop();
$("#secretdeals-bg1").css("top",(0-(c*0.25))+"px");
$("#secretdeals-bg2").css("top",(0-(c*0.5))+"px");
$("#secretdeals-bg3").css("top",(0-(c*0.75))+"px");
$("#secretdeals-bg4").css("top",(0-(c*0.3))+"px")
}};
function trackPriceHovers(){var g;
$("#search_results_table, #available_rooms").mouseover(function(h){if(h.target.className.indexOf("toggle_price_per_night_or_stay")>=0){g=h.target;
c()
}});
$("#search_results_table, #available_rooms").mouseout(function(h){if(h.target.className.indexOf("toggle_price_per_night_or_stay")>=0){g=null;
f()
}});
var e;
function d(){e=null;
if(g==null){return
}booking.track.exp("OLNNUGIRKPbbDERaRbMHET")
}function f(){if(e==null){return
}window.clearTimeout(e);
e=null
}function c(){f();
e=window.setTimeout(d,500)
}}if(typeof b_survey_url!="undefined"&&b_survey_url){booking[sNSStartup].survey={priority:9,init:function(){$("#survey").fadeIn("normal");
var c="/survey?";
$("#survey button").click(function(f){var g=$(this).val();
if(g){if(booking[sNSStartup].fix_move_book_header_and_button){booking[sNSStartup].fix_move_book_header_and_button.surveyFixed=false
}if(g=="accept"||g=="Yes"||g=="yes"||g=="Ja, ik doe mee"||g=="Okay"){var d=window.open(b_survey_url,"booking_survey_window")
}else{$("#survey").hide("normal")
}$.get(c+"decision="+g+"&survey_key="+booking.env.survey_key,{},function(e){$("#survey").hide("normal")
})
}return false
})
}}
}(function(c){c[sNSExperiments]["PcVBcAPTPWOGAMZUC"]={init:function(){this.dropdownLinks();
this.gaTracking()
},initElse:function(){this.dropdownLinks()
},dropdownLinks:function(){var f="PcVBcAPTPWOGAMZUC";
var d=c.track.getVariant(f);
var e=this;
if(d===false){return
}c.eventEmitter.bind("wl-dropdown-toggle",function(g,h){if(h.state===false){return
}if(!e.expTracked&&h.node.find("input:checked").length){c.track.exp(f);
e.expTracked=true
}});
c.eventEmitter.bind("wl-dropdown-toggle-list",function(g,h){if(!e.expTracked&&h.state){c.track.exp(f);
e.expTracked=true
}if(d){h.$link.toggleClass("g-hidden",!h.state);
h.dropdown.root().css(h.dropdown._position())
}});
if(d){$(document.body).delegate(".wl-dropdown-link","click",function(g){g.preventDefault();
$.cookie("tfl_dropdown_links_click","1",{domain:"booking.com",path:"/"});
window.location=$(this).attr("href")
})
}},expTracked:false,gaTracking:function(){if(booking.env.b_action==="mywishlist"&&$.cookie("tfl_dropdown_links_click")==="1"){var g=$("#ga_list_header"),h=" : ",j=g.data("list-logged"),f="pb: "+g.data("list-prev_b"),e="ref: "+g.data("list-ref"),k="ac: "+g.data("list-action"),d=j+h+f+h+e+h+k;
$.cookie("tfl_dropdown_links_click",null,{domain:"booking.com",path:"/"});
c.google.trackEvent("Listmap","wl:dropdown_link_to_list",d)
}}}
})(booking);
booking[sNSExperiments]["ZePFTaFTafWe"]=(function(){return{init:d,initElse:d};
function d(){booking.eventEmitter.bind("uc_popover_showed",function(e,f){if(f.id=="current_account"&&!booking.env.b_user_auth_level_is_low_or_high){c()
}});
booking.eventEmitter.bind("ACTION:show-signin-dialog",c);
booking.eventEmitter.bind("ACTION:show-signup-dialog",c)
}function c(){booking.track.exp("ZePFTaFTafWe")
}})();
booking[sNSStartup].uaFbDialogues={STATE:{FACEBOOK_ACCOUNT_MUST_BE_MERGED:"merge",FACEBOOK_REGISTRATION_DISABLED:"disabled"},DIALOG:{merge:1,"import":1,disabled:1},init:function(){if(!booking.env.fb){return
}var d=this;
var e=this.STATE[booking.env.fb.state];
var c=document.location.search.slice(1);
if(!e&&document.location.href.indexOf("fb_import_message")>-1){e="import"
}this.$button=$(".js-ua-form-facebook-button");
this.lightbox=booking[sNSStartup].lightbox;
this.$button.bind("click",function(f){f.preventDefault();
$(this).addClass("ua-form-facebook-button_loading");
d.redirect()
});
if(e in this.DIALOG){this.dialog(e)
}$(".js-ua-form-facebook-dialog-button-disconnect").bind("click",function(f){d.dialog("disconnect")
})
},redirect:function(){var g=this;
var c="fblogin";
var d=420;
var l=630;
var f=booking.env.fb.redirect;
var m="width="+d+",height="+l+",resizable=yes,scrollbars=yes,status=yes";
if(B.env.is_touch){window.location.href=f
}else{var k=window.open(f,c,m)
}booking.track.exp("ZeZNWSVGPQcaRBUNZEOFWe");
if(k&&booking.track.getVariant("ZeZNWSVGPQcaRBUNZEOFWe")){try{k.resizeBy(-d,-l)
}catch(h){}j();
function j(){setTimeout(function(){if(k.closed){g.$button.removeClass("ua-form-facebook-button_loading")
}else{j()
}},1000)
}}},dialog:function(d){var e=this.lightbox;
var c=$(".js-ua-form-facebook-dialog-"+d).removeClass("g-hidden");
e.show(c,{hideCallBack:function(){if(d==="merge"){$.ajax({url:"/update_facebook_connect_state",data:{action:"cancel_merge"}})
}c.addClass("g-hidden")
},customWrapperClassName:"ua-form-facebook-dialog ua-form-facebook-dialog_"+d});
c.find(".js-ua-form-facebook-dialog-merge-cancel").bind("click",function(){e.hide()
});
if(d==="disabled"){$.get("/update_facebook_connect_state",{action:"cancel_merge"})
}}};
booking[sNSExperiments]["ZeZNUdDcASTHe"]={init:function(){$(".js-ua-form-facebook-button-button").bind("click",$.proxy(this.signin,this));
booking.eventEmitter.bind("user_access_menu_register_tab",function(){booking.google.trackEvent(booking.google.clickTracker,"User Access Menu: Sign Up Tab")
})
},signin:function(c){c.stopPropagation();
var d=booking.track.getVariant("ZeZNUdDcASTHe");
var e=$(c.currentTarget).closest(".js-ua-form-facebook-button");
if(e.hasClass("ua-form-facebook-button_disabled")){return
}e.addClass("ua-form-facebook-button_disabled");
e.addClass("ua-form-facebook-button_loading");
booking.google.trackEvent(booking.google.clickTracker,"User Access Menu: Facebook "+d,e.attr("data-type"));
setTimeout(function(){e.addClass("ua-form-facebook-button_error");
e.removeClass("ua-form-facebook-button_loading")
},2000)
}};
booking[sNSExperiments]["ZeZDbeRbLMTCaNUJeVPRfdRIYae"]={isCookieWarning:function(){return booking.env.cookie_warning&&!$.cookie("cookie_notice_shown")
},init:function(){var d=$(".js-ua-persistant-account-creation-prompt");
var c="ua-persistant-account-creation-prompt_collapsed";
if(this.isCookieWarning()){d.remove();
return
}d.click(function(f){var e=$(f.target);
if(d.hasClass(c)||e.hasClass("js-ua-persistant-account-creation-prompt-arrow")){d.toggleClass(c)
}})
}};
booking[sNSExperiments]["ZeZbObSAeOESJVWKMKe"]={init:function(){$(".wl_create_form").delegate(".wl-dropdown-toggle","click",function(){$(this).toggleClass("collapsed");
$(this).parents(".wl-btn-group-wrap").next(".wl-dropdown-menu").slideToggle("fast")
});
$(".wl_create_form").delegate(".wl-dropdown-menu-a","click",function(c){c.preventDefault();
var d=$(this);
$(".wl-privacy").val(this.rel);
d.parents("form:first").submit();
if($(".wl_nameList_input").val()!=""){$("#wl_create_shared_or_personal_list_modal").parent().css("opacity",0.5)
}})
},initElse:function(){}};
booking[sNSExperiments]["ZeHXYRDZOKHWNZUO"]={init:function(){$(function(){$("#wl-share-checkButton").click(function(){$(".wl_share_list_with_others").slideToggle();
$(".maf_input:first").focus();
$(this).find("i:last").toggleClass("icon-arrowdown icon-arrowup").end().blur()
});
$("#add_email_field").click(function(){setTimeout(function(){$(".maf_input:last").focus()
},100)
})
})
},initElse:function(){}};
booking[sNSExperiments]["ZePNCFZNUdfYMO"]={init:function(){var c=this;
this.$form=$(".js-user-access-menu-lightbox");
booking.eventEmitter.bind("user_access_menu_login_tab user_access_menu_register_tab",function(d){var e=d.type==="user_access_menu_login_tab";
c.$form.toggleClass("user-access-menu-lightbox_signin",e).toggleClass("user-access-menu-lightbox_signup",!e)
});
booking.action("show-signin-dialog",function(){c.show();
c.$form.find("[data-target=user_access_signin_menu]").click()
});
booking.action("show-signup-dialog",function(){c.show();
c.$form.find("[data-target=user_access_signup_menu]").click()
})
},show:function(){var c=this.$form;
$(".user_center_popover").hide();
c.removeClass("g-hidden");
booking[sNSStartup].lightbox.show(c,{customWrapperClassName:"user-access-menu-lightbox",hideCallBack:function(){c.addClass("g-hidden")
}})
}};
booking[sNSExperiments]["ZePAYbaO"]={params:function(d){var c={};
$.each(d.split(";"),function(e,f){f=f.split("=");
c[f.shift()]=f.join("=")
});
return c
},pointer:function(){var c=this.$(".js-ua-timeline-pointer");
c.removeClass("g-hidden").css({left:this.$trigger.outerWidth()/2+this.$trigger.offset().left-c.width()/2})
},autoshow:function(){if(B.env.b_action==="index"&&($("#destination").val()||$("#frm").find("*:focus").length)){return
}this.toggle(false);
this.onshow()
},toggle:function(c){this.$timeline.toggleClass("ua-timeline_hidden",c);
this.$expander.toggleClass("ua-timeline-expander_hidden",c);
this.onshow()
},bind:function(){var c=this;
var d=0;
this.$(".js-ua-timeline-arrow-left").bind("click",function(){c.slide(-1)
});
this.$(".js-ua-timeline-arrow-right").bind("click",function(){c.slide(1)
});
this.$trigger.bind("click",function(){c.toggle()
});
this.$(".js-ua-timeline-welcome-button").bind("click",function(){c.$timeline.removeClass("ua-timeline_welcome")
});
this.$(".js-ua-timeline-item-close").bind("click",function(e){e.preventDefault();
c.dissmis($(this).closest(".ua-timeline-item"))
});
this.$(".js-ua-timeline-close").bind("click",function(){c.toggle()
});
$(window).bind("resize",function(){if(d){clearTimeout(d);
d=null
}setTimeout(function(){c.pointer()
},100)
})
},slide:function(c){this.$ribbon.stop(true,true).animate({scrollLeft:this.$ribbon.scrollLeft()+245*c})
},dissmis:function(c){var d={hotel:"/hotel_history",search:"/search_history"}[c.attr("data-type")];
c.addClass("ua-timeline-item_hidden");
$.ajax({url:d,type:"DELETE",data:this.params(c.attr("data-params"))});
setTimeout(function(){c.remove()
},500)
},onshow:function(){this.pointer();
$(".user_center_popover").hide();
$.cookie("ua-timeline-welcome",1,{expires:999,path:"/"});
booking.track.exp("ZePAYbaO")
},$:function(c){return this.$timeline.find(c)
},init:function(){var c=this;
this.variant=booking.track.getVariant("ZePAYbaO");
this.$timeline=$(".js-ua-timeline");
this.$expander=$(".js-ua-timeline-expander");
this.$trigger=$(".js-uc-viewed-hotels-trigger");
this.$ribbon=this.$(".js-ua-timeline-items");
this.pointer();
setTimeout(function(){c.pointer()
},1000);
this.bind();
if(!$.cookie("ua-timeline-welcome")){this.$timeline.addClass("ua-timeline_welcome")
}if(this.$timeline.attr("data-should-show")){if(this.variant>1){this.autoshow()
}}},initElse:function(){booking.eventEmitter.bind("uc_recently_viewed_loaded",function(){booking.track.exp("ZePAYbaO")
})
}};
booking[sNSExperiments]["adfbXNbYDcCHSVHFMMWe"]={init:function(){var h=this;
var d=$("#current_account .popover_trigger");
var j=$(".js-uc-cug-signup-menu-prompt-button");
var g=$(".js-uc-cug-signup-menu-prompt__close");
var f=$(".js-uc-cug-signup-menu-prompt-link");
var c=booking[sNSExperiments].user_center_bar;
var k=$(".user_access_form_js input[name=target_url]").val();
var e=$(".js-uc-cug-signup-menu-prompt__footer");
d.attr("data-show","profile");
d.one("mousedown",function(){h.hide();
e.show()
});
j.click(function(){$(".user_access_form_js input[name=target_url]").val(k);
d.parent().find("[data-target=user_access_signin_menu]").trigger("click");
h.showLogin(d)
});
f.click(function(l){l.preventDefault();
h.showLogin(d);
d.parent().find("[data-target=user_access_signup_menu]").trigger("click")
});
g.click(function(){h.hide()
});
$(".js-uc-cug-signup-menu-prompt .up_menu_row a").click(function(m){var l=$(m.currentTarget).attr("href");
d.parent().find("[data-target=user_access_signin_menu]").trigger("click");
$(".user_access_form_js input[name=target_url]").val(l);
m.preventDefault();
d.trigger("click").attr("data-show","login").trigger("click").attr("data-show","profile")
});
if(!booking.env.b_action.match(/index|country|city|airport|region|district/)||$.cookie("uc_cug_signup_menu_prompt")){return this.hide()
}$.cookie("uc_cug_signup_menu_prompt",1);
setTimeout(function(){e.hide();
c.positionPopover(d,{popover:".js-uc-cug-signup-menu-prompt"});
$(".js-uc-cug-signup-menu-prompt").css({opacity:0}).animate({opacity:1},1000)
},2000)
},showLogin:function(d){var c=d.attr("data-show");
this.hide();
d.attr("data-show","login");
d.trigger("click");
if(c){d.attr("data-show",c)
}},hide:function(){$(".js-uc-cug-signup-menu-prompt").hide()
}};
booking[sNSExperiments]["adfbXNbYDcOdJRIZXAHWe"]={init:function(){var h=this;
var g=booking.track.getVariant("ZePNCFZNUdfYMO");
var d=g?$(".js-uc-option_signin .popover_trigger"):$("#current_account .popover_trigger");
var j=$(".js-uc-cug-signup-menu-prompt-button");
var f=$(".js-uc-cug-signup-menu-prompt__close");
var e=$(".js-uc-cug-signup-menu-prompt-link");
var c=booking[sNSExperiments].user_center_bar;
var k=$(".user_access_form_js input[name=target_url]").val();
d.one("mousedown",function(){h.hide()
});
j.click(function(){if(g){booking.action("show-signin-dialog")();
return
}$(".user_access_form_js input[name=target_url]").val(k);
d.parent().find("[data-target=user_access_signin_menu]").trigger("click");
h.showLogin(d)
});
e.click(function(l){l.preventDefault();
if(g){setTimeout(function(){booking.action("show-signup-dialog")()
},10);
return
}h.showLogin(d);
d.parent().find("[data-target=user_access_signup_menu]").trigger("click")
});
f.click(function(){h.hide()
});
if($.cookie("uc_cug_signup_menu_prompt")){return this.hide()
}$.cookie("uc_cug_signup_menu_prompt",1);
setTimeout(function(){c.positionPopover(d,{popover:".js-uc-cug-signup-menu-prompt"});
$(".js-uc-cug-signup-menu-prompt").css({opacity:0}).animate({opacity:1},1000)
},2000)
},showLogin:function(d){var c=d.attr("data-show");
this.hide();
d.attr("data-show","login");
d.trigger("click");
if(c){d.attr("data-show",c)
}},hide:function(){$(".js-uc-cug-signup-menu-prompt").hide()
}};
(function(){var d="adfaPbPELXVFfIbYO";
function c(){booking.eventEmitter.bind("uc_popover_showed",function(){booking.track.exp(d)
})
}booking[sNSExperiments][d]={init:c,initElse:c}
})();
booking[sNSExperiments]["beODVAfSPSMTafUcO"]={e_hash:"beODVAfSPSMTafUcO",$ul:false,setFocusAndOrTrack:function(){var c=this;
booking.track.exp(this.e_hash);
if(booking.track.getVariant(c.e_hash)){setTimeout(function(){c.$ul.find(".user_access_email:visible:first").select()
},50)
}},setFocusSignIn:function(){var c=this;
c.$ul.find(".signin_cta").add(".user_access_section_trigger").click(function(){c.setFocusAndOrTrack()
})
},setFocusSignUp:function(){var c=this;
c.$ul.find(".user_center_nav").find(".user_access_signup_menu_tab").click(function(){c.setFocusAndOrTrack()
})
},init:function(){this.$ul=$(".user_center_nav");
this.setFocusSignIn();
this.setFocusSignUp()
},initElse:function(){this.init()
}};
booking[sNSExperiments].user_center_bar={priority:9,stopShowingAccountConfirmation:true,showCollectNameDialog:false,init:function(){this.initializeUserCenterBar()
},initializeUserCenterBar:function(){var f=this,c,l,p,g;
var n=[{className:"uc_language",offset:50}];
booking.browserStorageHandler.deletePermanentValue("wl_fv",true);
if(booking.env.showFavesToWishlistNotice&&!booking.browserStorageHandler.getPermanentValue("wl_fv2",true)){var q=$("#top .uc_wishlists");
var o=q.width()/2;
var r=$("#faves_to_wishlist_notice");
var j=r.width()/2;
var k=j-o;
var t=j-8;
k=-Math.round(k)+"px";
t=t+"px";
if(booking.env.rtl&&booking.track.getVariant("bcIHKTdZXHbFC")){r.css("right",k);
$("#faves_to_wishlist_notice .uc_top_arrow",q).css("right",t)
}else{r.css("left",k);
$("#faves_to_wishlist_notice .uc_top_arrow",q).css("left",t)
}r.show();
$(".close_popover").live("click",function(){$(".popover_notice").remove()
});
$("#faves_to_wishlist_notice_link").live("click",function(){$(".popover_notice").remove();
$("#uc_wishlists_trigger").click()
});
booking.browserStorageHandler.addPermanentValue("wl_fv2",1,true)
}else{$(".user_imported_faves_new_badge").hide()
}if(booking.env.show_header_account_confirmation){f.stopShowingAccountConfirmation=false;
f.positionPopover($(".account_creation_confirmation"))
}if(booking.env.show_collect_name){$(".account_creation_confirmation").remove();
f.stopShowingAccountConfirmation=true;
f.showCollectNameDialog=true;
f.positionPopover($(".account_collect_name"));
$(".collect_name input").keyup(function(){if(($(".collect_name #firstname").val()!=="")||($(".collect_name #lastname").val()!=="")){$(".collect_name_signup .btn-primary").removeClass("btn-disabled").removeAttr("disabled")
}else{$(".collect_name_signup .btn-primary").addClass("btn-disabled").attr("disabled","disabled")
}});
$(".collect_name").find("#firstname").focus()
}$(".cancel_collection").click(function(u){$(".account_collect_name").remove();
f.showCollectNameDialog=false
});
var m=false;
$(".popover_trigger").click(function(A){if(booking.track.getVariant("ZePKQAdRSQfJeTbWbHDbQNcO")){if($(A.target).closest(".user_center_option").length){m=true
}}booking.track.exp("ZePKQAdRSQfJeTbWbHDbQNcO");
if(A&&A.currentTarget&&$(A.currentTarget).hasClass("profile_menu_trigger")){booking.track.exp("ZeZSAdVRcEXFADXJYGfBbPCFdMLKe");
if(booking.eventEmitter){booking.eventEmitter.trigger("user_access_menu_open")
}}var z=$(this),w=z.parent(),u=(z.parent().hasClass("logged_in_user"));
if(u){booking.track.exp("BBbeIHHZAXXe")
}A.preventDefault();
$(".js-icon-recent-icon").removeClass("icon_active");
$(".js-icon-list-icon").removeClass("icon_active");
$(".js-icon-notification-icon").removeClass("icon_active");
$(A.currentTarget).addClass("icon_active");
$(".account_creation_confirmation").remove();
$(".account_collect_name").remove();
f.stopShowingAccountConfirmation=true;
f.showCollectNameDialog=false;
if(w.hasClass("combo")){booking.track.exp("HRXMJGBZIDVeLJdYaSAeMVNaRe")
}if(w.hasClass("uc_language")&&w.find(".top_menu_items .selected_country").length){booking.track.exp("YdARWSEGLMSQfBSMFHJCdCTWHT")
}var y={};
for(var x=n.length-1;
x>=0;
x--){var C=z.parent().hasClass(n[x].className);
if(C){y.offset=n[x].offset;
break
}}f.positionPopover(z,y)
});
$(document).ready(function(){var u=$(".user_center_option");
u.mouseenter(function(){m=true
});
u.mouseleave(function(){m=false
});
$("body").mousedown(function(){if(!m){$(".user_center_popover").hide();
if(booking.env.showFavesToWishlistNotice){$(".popover_notice").remove()
}$("li.user_center_option").removeClass("active_option");
$(".js-icon-recent-icon").removeClass("icon_active");
$(".js-icon-list-icon").removeClass("icon_active");
$(".js-icon-notification-icon").removeClass("icon_active")
}});
if(booking.user.showUserLoginOnLoad){$(".signin_cta").click()
}});
var h=false,e=false;
function d(){if(h||e){return
}e=true;
var u=$(this).attr("data-href");
var w=$(".uc_viewedhotels .hotels_container");
$.ajax({url:u,type:"GET",success:function(x){w.html(x);
h=true;
booking.eventEmitter.trigger("uc_recently_viewed_loaded")
},complete:function(){$(".uc_viewedhotels .ajax_loading").hide();
$(".user_search_header").hide();
if($(".no_listing:visible").length){$(".uc_viewed_hotels .popover_content").addClass("empty_list")
}else{$(".user_search_header").appendTo(".uc_viewedhotels .popover_footer");
$(".user_search_header").show()
}setTimeout(function(){if(!booking.env.b_site_experiment_rewrite_tt){booking[sNSStartupLoad].tooltip_3.addTooltip(w)
}},200);
e=false
}})
}$(".uc_viewed_hotels .popover_trigger").click(d);
$(".socnet_mailafriend").live("click",function(){setTimeout(function(){$(".user_center_popover").hide();
if(booking.env.showFavesToWishlistNotice){$(".popover_notice").remove()
}$("li .popover_trigger").removeClass("active_option")
},200)
});
$("#user_form a.remove_hotel").live("click",function(){var w=$(this).attr("href").split("#")[1];
$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:w}});
this.blur();
var u=$(this).parents(".user_search_item").get(0);
var x=u.parentNode;
$(u).hide("slow",function(){if($(".hidden_item",x).length){var y=$(".hidden_item",x).get(0);
$(y).removeClass("hidden_item")
}});
f.removeOneHome(w);
if($("#user_form .user_search_item:visible").length){}else{$(".uc_viewedhotels .popover_footer").hide();
$(".uc_viewed_hotels .popover_content").addClass("empty_list");
$(".user_center_popover .no_listing").show()
}return false
});
$("#user_form a#removeAllHistoryHotel").live("click",function(){f.removeAll($(this).attr("id"));
$(".user_center_popover").hide();
$(".uc_viewed_hotels .popover_content").addClass("empty_list");
$(".user_searches_content").show();
$(".user_searches_content .user_search_item").hide();
$(".user_search_footer").hide();
$("#user_form .uc_viewed_hotels .popover_footer").remove();
$(".uc_viewed_hotels .no_listing").show();
return false
})
},removeAll:function(d){var e=this;
var c=$("#"+d).parents(".user_searches_content");
if(d=="removeAllHistoryHotel"){$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:-1}});
e.removeAllHome()
}else{booking[sNSStartup].search_history.removeAll(true)
}$("#"+d).blur();
$(".user_search_item",c).each(function(){if($(this).hasClass("no_listing")){$(this).show("slow")
}else{$(this).hide("slow",function(){$(this).remove()
})
}});
$(".user_search_header",c).hide();
$(".user_search_footer",c).hide()
},removeAllHome:function(){$(".user_searches_content").hide()
},removeOneHome:function(c){$(".user_searches_content .remove_hotel").each(function(){var d;
if($(this).attr("href")=="#"+c){d=$(this).parents(".user_search_item");
d.remove()
}})
},positionPopover:function(o,d){$("#faves_to_wishlist_notice").remove();
var m=$(o).parent();
var l=m.width()/2;
var k;
if(!this.stopShowingAccountConfirmation){k=$(".account_creation_confirmation",m)
}else{if(this.showCollectNameDialog){k=$(".account_collect_name",m);
this.showCollectNameDialog=false
}else{if(typeof d.popover==="string"){k=$(d.popover,m)
}else{if(o.attr("data-show")==="profile"){k=$(".js-uc-cug-signup-menu-prompt",m)
}else{k=$(".user_center_popover:not(.js-uc-cug-signup-menu-prompt)",m)
}}}}if(m.attr("id")=="current_account"){if(k.length>1||!k.hasClass("uc_genius_tooltip")){k=k.filter(":not(.uc_genius_tooltip)");
$(".uc_genius_tooltip").remove()
}if($(".account_creation_confirmation:visible").length){$(".account_creation_confirmation").remove()
}}var h=k.width()/2;
var j=h-l;
if(booking.track.getVariant("YdVJWcFHQWXXdVLYNSCUC")==2){var p=h-3
}else{var p=h-8
}var n=m.offset().left-$("#bodyconstraint").offset().left,g=$("#bodyconstraint").width(),f=g-(h+l+n),c=n+l-h;
if(f<0&&c>0){j-=f;
p-=f
}else{if(f>0&&c<0){j+=c;
p+=c
}else{if(f<0&&c<0){}}}var e=d&&d.offset;
if(e){j+=e;
p+=e
}k.css("left",-Math.round(j));
if(booking.env.rtl&&booking.track.getVariant("bcIHKTdZXHbFC")){$(".user_center_popover .uc_top_arrow",m).css("right",p)
}else{$(".user_center_popover .uc_top_arrow",m).css("left",p)
}if($(".user_center_popover:visible",m).length){$(".user_center_popover").hide()
}else{$(".user_center_popover").hide();
k.show();
booking.eventEmitter.trigger("uc_popover_showed",{id:m.attr("data-id")||m.attr("id")})
}if($("body.user_center #formwrap #signup_password:visible").length){$("#formwrap #signup_password").css("z-index","99");
$("#formwrap .pwd_strength").css("z-index","99")
}$("#dashboard_search #inout").css("z-index","99")
}};
booking[sNSStartup].top_saved_searches={priority:9,opening_state:0,init:function(){var c=this;
$(".search_tab").click(function(){c.opening_state=1;
c.closeTabs(this);
if(!$(this).hasClass("loadedContent")){c.loadContent($(this))
}return false
})
},showAllNone:function(c){var d=$(".user_search_item",c.parentNode.parentNode);
var e=0;
if($(".hidden_item",c.parentNode.parentNode).length){$(".showLink",c.parentNode.parentNode).hide();
$(".hideLink",c.parentNode.parentNode).show()
}else{$(".showLink",c.parentNode.parentNode).show();
$(".hideLink",c.parentNode.parentNode).hide()
}$(d).each(function(){e++;
if(e>6){if($(this).hasClass("hidden_item")){$(this).removeClass("hidden_item")
}else{$(this).addClass("hidden_item")
}}})
},closeTabs:function(d){var e=this;
var c=d?$(d).attr("id"):"";
c=c.replace("tab","foldout");
$(".search_foldout").each(function(){if($(this).hasClass("closed_content")){if($(this).attr("id")==c){$(this).removeClass("closed_content")
}}else{$(this).addClass("closed_content")
}});
if(c===""){this.opening_state=0
}else{setTimeout(function(){e.opening_state=2
},100)
}},loadContent:function(h){var g=this;
var c=$(h).attr("data-href");
if(c.indexOf("http://booking.com")!=-1){c=c.replace("http://booking.com","http://www.booking.com")
}if($("#current_account").width()>$(h).width()){var f=$("#current_account").width()+458+15
}else{var f=$(h).width()+458+15
}if(booking.env.b_is_ie7){f=f+102
}if(booking.env.b_is_ie6){f=f+20
}var e=$("#current_account_foldout").offset().top;
var j=$(h).attr("id");
var d="#"+j+"_content";
$(h).addClass("loadedContent");
if(j=="search_tab_wishlists"){}else{$.ajax({url:c,type:"GET",success:function(k){$(d).html(k);
$(d).css({left:"-"+f+"px",top:e+"px"});
setTimeout(function(){g.addRemoveClicks(j);
if(!booking.env.b_site_experiment_rewrite_tt){booking[sNSStartupLoad].tooltip_3.addTooltip($(d))
}},200)
}})
}},addRemoveClicks:function(d){var c=this;
$("#removeAllHistoryHotel, #removeAllHistorySearch").click(function(){c.removeAll($(this).attr("id"));
return false
});
if(d=="search_tab_viewed"){$("#search_tab_viewed_content a.remove_hotel").click(function(){var f=$(this).attr("href").split("#")[1];
$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:f}});
booking[sNSStartup].viewed_hotels.cleanupHistoryList(this);
this.blur();
var e=$(this).parents(".user_search_item").get(0);
var g=e.parentNode;
$(e).hide("slow",function(){$(this).remove();
if($(".hidden_item",g).length){var h=$(".hidden_item",g).get(0);
$(h).removeClass("hidden_item")
}c.reOddEven(g)
});
c.removeOneHome(f);
if($(".user_search_item",g).length==1){$(".user_search_item",g).show()
}return false
});
$("#search_tab_viewed_content .user_search_show").click(function(e){c.showAllNone(this);
return false
})
}if(d=="search_tab_searched"){$("#search_tab_searched_content a.remove_search").click(function(){var l=$(this).attr("href").split("#")[1];
var h=l.split(";");
var j=h[0];
var f=h[1];
var k=h[2];
$.ajax({url:"/search_history",type:"DELETE",data:{type:j,value:f,epoch:k}});
booking[sNSStartup].search_history.cleanupHistoryList(this);
this.blur();
var e=$(this).parents(".user_search_item").get(0);
var g=e.parentNode;
$(e).hide("slow",function(){$(this).remove();
if($(".hidden_item",g).length){var m=$(".hidden_item",g).get(0);
$(m).removeClass("hidden_item")
}c.reOddEven(g)
});
return false
});
$("#search_tab_searched_content .user_search_show").click(function(e){c.showAllNone(this);
return false
})
}if(d=="search_tab_booked"){}if(d=="search_tab_favourite"){$("#search_tab_favourite_content").find(".user_search_show").remove();
$("#search_tab_favourite_content a.remove_hotel").click(function(){var l=$(this).attr("href").split("#")[1];
var h=l.split(";");
var j=h[0];
var f=h[1];
var k=h[2];
$.ajax({url:"/favorites/delete",type:"DELETE",data:{hotel_id:j}});
this.blur();
var e=$(this).parents(".user_search_item").get(0);
var g=e.parentNode;
$(e).hide("slow",function(){$(this).remove();
if($(".hidden_item",g).length){var m=$(".hidden_item",g).get(0);
$(m).removeClass("hidden_item")
}c.reOddEven(g)
});
return false
});
$("#search_tab_searched_content .user_search_show").click(function(e){c.showAllNone(this);
return false
})
}},removeAll:function(d){var e=this;
var c=$("#"+d).parents(".user_searches_content");
if(d=="removeAllHistoryHotel"){$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:-1}});
e.removeAllHome();
booking[sNSStartup].viewed_hotels.cleanupHistoryList($("#"+d))
}else{booking[sNSStartup].search_history.removeAll(true)
}$("#"+d).blur();
$(".user_search_item",c).each(function(){if($(this).hasClass("no_listing")){$(this).show("slow")
}else{$(this).hide("slow",function(){$(this).remove()
})
}});
$(".user_search_header",c).hide();
$(".user_search_footer",c).hide()
},removeAllHome:function(){$("#LastViewedHotels").hide()
},removeOneHome:function(c){$("#LastViewedHotels .remove_hotel").each(function(){if($(this).attr("href")=="#"+c){$(this.parentNode).hide()
}})
},reOddEven:function(e){var d=0;
if($(".user_search_item",e).length>1){$(".user_search_item",e).each(function(){if(!$(this).hasClass("no_listing")){if(d==0){if($(this).hasClass("even")){$(this).removeClass("even")
}d=1
}else{if(!$(this).hasClass("even")){$(this).addClass("even")
}d=0
}}})
}else{if($(".no_listing",e).length){var c=$(".no_listing",e).get(0);
$(c).show();
$(".user_search_header",e).hide();
$(".user_search_footer",e).hide()
}}}};
booking[sNSExperiments]["TAeAecDKALcGKAXAWIHYWe"]=(function(){var c=function(){booking.track.exp("TAeAecDKALcGKAXAWIHYWe")
};
var e=function(){c();
$(".sn_second_level").menuAim({activate:function(g){booking.eventEmitter.trigger("THEME_SUBMENU:activate_item",{row:g})
}})
};
var f=function(){booking.eventEmitter.bind("THEME_SUBMENU:Loaded",e)
};
var d=function(){booking.eventEmitter.bind("THEME_SUBMENU:Loaded",c)
};
return{init:f,initElse:d}
})();
(function(c){c.fn.menuAim=function(e){this.each(function(){d.call(this,e)
});
return this
};
function d(e){var f=c(this),u=null,j=[],w=null,t=null,x=c.extend({rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:c.noop,exit:c.noop,activate:c.noop,deactivate:c.noop,exitMenu:c.noop},e);
var m=3,h=300;
var g=function(y){j.push({x:y.pageX,y:y.pageY});
if(j.length>m){j.shift()
}};
var r=function(){if(t){clearTimeout(t)
}if(x.exitMenu(this)){if(u){x.deactivate(u)
}u=null
}};
var o=function(){if(t){clearTimeout(t)
}x.enter(this);
k(this)
},n=function(){x.exit(this)
};
var p=function(){l(this)
};
var l=function(y){if(y==u){return
}if(u){x.deactivate(u)
}x.activate(y);
u=y
};
var k=function(z){var y=q();
if(y){t=setTimeout(function(){k(z)
},y)
}else{l(z)
}};
var q=function(){if(!u||!c(u).is(x.submenuSelector)){return 0
}var D=f.offset(),y={x:D.left,y:D.top-x.tolerance},K={x:D.left+f.outerWidth(),y:y.y},M={x:D.left,y:D.top+f.outerHeight()+x.tolerance},E={x:D.left+f.outerWidth(),y:M.y},F=j[j.length-1],J=j[0];
if(!F){return 0
}if(!J){J=F
}if(J.x<D.left||J.x>E.x||J.y<D.top||J.y>E.y){return 0
}if(w&&F.x==w.x&&F.y==w.y){return 0
}function G(O,N){return(N.y-O.y)/(N.x-O.x)
}var I=K,z=E;
if(x.submenuDirection=="left"){I=M;
z=y
}else{if(x.submenuDirection=="below"){I=E;
z=M
}else{if(x.submenuDirection=="above"){I=y;
z=K
}}}var A=G(F,I),H=G(F,z),L=G(J,I),C=G(J,z);
if(A<L&&H>C){w=F;
return h
}w=null;
return 0
};
f.mouseleave(r).find(x.rowSelector).mouseenter(o).mouseleave(n).click(p);
c(document).mousemove(g)
}})(jQuery);
booking[sNSExperiments]["beKMDNdEPORACMSCMSGEcYJNKe"]={priority:9,init:function(){var d=$(".mail_friend_box");
var c=$(".wl_field_wrapper:first",d);
var g=$("#wishlist_modal");
var e=$(".wl_field_and_remove_wrapper:first").clone();
var h=function(){return e.clone()
};
var f=$(".wl_share_list_toggle");
$(d).delegate(".wl_extra_email_field","click",function(){if($(".wl_field_wrapper",d).length==8){$(".wl_extra_email_field").addClass("disabled")
}else{var j=$(".wl_field_wrapper",d).length+1;
c.clone().insertAfter($(".wl_field_wrapper:last",d));
$(".wl_field_wrapper:last .maf_input",d).addClass("input-wlRemoveBtnSpace").attr("value","").attr("name","to"+j).attr("id","to"+j);
$(".wl_field_wrapper:last .wl_btn_remove_email_field",d).show()
}});
$(d).delegate(".wl_btn_remove_email_field","click",function(){$(this).parent().remove();
if($(".wl_field_wrapper",d).length<4){$(".wl_extra_email_field").removeClass("disabled")
}});
$(d).delegate(".wl_add_message_field","click",function(){$(".wl_add_message_input_field").toggle()
});
$(".wl_email_share_trigger").click(function(){booking[sNSStartup].lightbox.show($("#wl_email_invite_modal"),{customWrapperClassName:"wl_create_modal_wrapper"})
});
$(".wl_invite_share_trigger").click(function(){booking[sNSStartup].lightbox.show($("#wl_invite_modal"),{customWrapperClassName:"wl_create_modal_wrapper"})
});
if(booking.track.getVariant("beKMDNdEPORACMSCMSGEHT")){$(".wl_add_new_trigger").click(function(){booking[sNSStartup].lightbox.show($("#wl_create_shared_or_personal_list_modal"),{customWrapperClassName:"wl_create_modal_wrapper"})
})
}g.find(".toggler").click(function(){$(this).closest("div").find(".toggable").slideDown();
$(this).remove();
return false
});
$("#shareCheck").click(function(){if($(this).is(":checked")){$(".wl_share_list_with_others").show()
}else{$(".wl_share_list_with_others").hide()
}});
$(f).delegate(".wl_create_extra_email_field","click",function(){if($(".wl_field_and_remove_wrapper",f).length==4){$(".wl_create_extra_email_field").addClass("disabled")
}else{var j=$(".wl_field_and_remove_wrapper",f).length+1;
h().appendTo($(".js-wl-emails-wrapper",f));
$(".wl_field_and_remove_wrapper:last .maf_input",f).addClass("input-wlRemoveBtnSpace").attr("value","").attr("name","to"+j).attr("id","to"+j);
$(".wl_field_and_remove_wrapper:last .wl_btn_remove_email_field",f).show()
}});
$(f).delegate(".wl_btn_remove_email_field","click",function(){$(this).parent().remove();
if($(".wl_field_and_remove_wrapper",f).length<4){$(".wl_create_extra_email_field").removeClass("disabled")
}})
}};
(function(k){var h=k[sNSStartup].wlData;
var j="IEJeVHOADfQJO";
var c=null;
function e(l){if(!$.isArray(l)||l.length===0){throw new Error("Bad ids")
}var m=$(".wl-add-all"),n=m.find(".wl-add-all__header");
c=l;
n.text(k.jstmpl("wl_add_all_header_tmpl").render({count:l.length}));
k.lightbox.show(m,{customWrapperClassName:"wl-add-all-modal"});
k.eventEmitter.trigger("list_modal:show",m)
}function g(m){var n=$(".wl-add-all"),l=n.find(".wl-add-all__name");
if(typeof m==="undefined"){return l.val()
}else{l.val(m)
}}function d(l){return $(l).map(function(n,o){var m=$(o).attr("href");
return Number(m.split("#")[1])
}).toArray()
}function f(){k.eventEmitter.bind("uc_recently_viewed_loaded",function(){k.track.exp(j)
})
}k[sNSExperiments][j]={init:function(){var n=g();
function m(){return k.env.b_reg_user_recently_viewed_wlid!=="0"&&(n===g())
}function l(){$(".wl-add-all-modal").toggleClass("wl-add-all-modal_update",m())
}$(document.body).delegate(".wl-add-all__button","click",function(p){p.preventDefault();
function o(q){if(!q||!q.success){if(q.message){alert(q.message)
}return console.error(q)
}if(q.id){k.env.b_reg_user_recently_viewed_wlid=q.id
}g(n);
k.lightbox.hide();
k.eventEmitter.trigger("list_modal:done",q)
}if(m()){h.editHotels({list:k.env.b_reg_user_recently_viewed_wlid,hotel_ids:c}).then(function(q){o(q.result)
})
}else{h.create({name:g(),hotel_ids:c.join(","),default_list:h.TYPE.RECENTLY_VIEWED}).then(function(q){o(q.result)
})
}}).delegate(".wl-create-wishlist","click",function(p){var o=$.trim($(this).data("ids"));
if(o){o=o.split(",");
e(o)
}}).delegate(".wl-create-wishlist_sidebar","click",function(o){e(d(".lastViewedList .remove_hotel"))
}).delegate(".wl-create-wishlist_popup","click",function(p){var o=$(".user_center_popover");
e(d(".user_searches_content .remove_hotel:visible"));
if(o.is(":visible")){o.hide()
}}).delegate(".wl-add-all__name","keyup",l);
k.eventEmitter.bind("list_modal:show",l);
k.eventEmitter.bind("viewed_hotels:update",function(o,p){$(".wl-create-wishlist__count").text(p.items.length)
});
k.eventEmitter.bind("list_modal:done",function(){if(k.env.b_action==="hotel"){$("html, body").animate({scrollTop:0})
}});
f()
},initElse:function(){f()
}}
})(booking);
booking[sNSExperiments]["IESUPWXe"]={init:function(){var d=this;
var c=$("#current_account .popover_trigger");
$(".js-hp-sidebar-wl-trigger-promo-signin").click(function(e){e.preventDefault();
c.parent().find("[data-target=user_access_signin_menu]").trigger("click");
d.showLogin(c)
});
$(".js-hp-sidebar-wl-trigger-promo-signup").click(function(e){e.preventDefault();
c.parent().find("[data-target=user_access_signup_menu]").trigger("click");
d.showLogin(c)
})
},showLogin:function(d){var c=d.attr("data-show");
this.hide();
d.attr("data-show","login");
d.trigger("click");
if(c){d.attr("data-show",c)
}},hide:function(){$(".js-uc-cug-signup-menu-prompt").hide()
}};
(function(e){var d="IEWEEdFHTdDdWe";
function c(){if(Number(e.env.auth_level)===0){return
}e.eventEmitter.bind("uc_popover_showed",function(g,f){if(f&&f.id==="current_account"){e.track.exp(d)
}})
}e[sNSExperiments][d]={init:c,initElse:c}
})(booking);
$(function(){booking.track.onClick("#inout .calendar.calendarLink").exp("GWOLNGeLaUHPTaeKe")
});
$(function(){booking.track.onClick(".b_advanced_search").exp("bLNZKYLQQZCGRYbRSYO")
});
$(function(){booking.track.onClick(".b_advanced_search").exp("bLNZKYQJbXVdJDcAeFHKCELSTTKe")
});
B[sNSExperiments]["bLNcbJVEIMIPLPLaDGBHfECYaKSeDVGNKe"]={init:function(){B.track.onClick(".business_bookers_collection .b-booker-type.sb_business_booker").exp("bLNcbJVEIMIPLPLaDGBHfECYaKSeDVGNKe")
}};
$(function(){booking.track.onClick("li.menu_feedback").exp("deeXGKeeZedWCHQFQXMYCdWKe")
});
booking[sNSStartup]["IEWBbUEfcWfPESHbfNLT"]=(function(){var d=booking[sNSStartup].wlData;
var c=$.fly.dropdown.extend({defaults:{gaAction:"Wishlist",extraClass:"wl-dropdown",content:function(e){var f=this;
d.fetch(this.params).then(function(g){e(f.tmpl(g.result))
})
}},timeout:null,init:function(){var f=this;
this.params={hotel_id:this.$handle.attr("data-hotel-id")};
var e=+this.$handle.attr("data-arrow-size");
if(e){this.options.arrowSize=e
}this.bindRoot();
this.bindData();
f.$handle.bind("mouseenter",function(){d.fetch(f.params)
});
f.bind("show hide",function(g){setTimeout(function(){booking.eventEmitter.trigger("wl-dropdown-toggle",{node:f.root(),state:g.type==="show"})
},0)
})
},bindRoot:function(){var e=this;
this.bind(this.EVENTS.ROOTREADY,function(){$.extend(e.options,{gaLabel:e.$handle.attr("data-ga-label"),position:e.$handle.attr("data-position")});
e.root().delegate(".js-wl-dropdown-item-text","keyup",$.proxy(e.ontext,e)).delegate(".js-wl-dropdown-item-checkbox","click",$.proxy(e.oncheckbox,e)).bind("mouseenter",function(){clearTimeout(e.timeout)
}).bind("mouseleave",function(){e.timeout=setTimeout($.proxy(e.hide,e),2000)
});
e.bind(e.EVENTS.SHOW,function(){clearTimeout(e.timeout)
})
})
},bindData:function(){var f=d.EVENTS;
var e=this;
d.bind([f.LOADINGSTART,f.LOADINGEND].join(" "),function(g,j){var k=j.params;
if(k.hotel_id!=e.params.hotel_id||!k.lists&&!k.name){return
}var h=e.root().find("[data-list-id="+(k.lists||"")+"]").parent();
e.loading(g.type===f.LOADINGSTART,h)
});
d.bind([f.CREATE,f.EDITHOTEL].join(" "),function(g,h){if(h.params.hotel_id!=e.params.hotel_id){return
}d.fetch(e.params).then(function(k){var j=!!$.grep(k.result.lists,function(l){return l.selected
}).length;
e.$handle.toggleClass("saved_in_wl",j);
e.updateSprite(j);
booking.eventEmitter.trigger("wishlists_updated",[k.result.lists])
})
})
},updateSprite:function(e){if(this.$handle.hasClass("added_to_fav_lists")){this.$handle.find(".b-sprite").toggleClass("icon_list_favorites_selected",e).toggleClass("icon_list_favorites",!e)
}if(this.$handle.hasClass("wishlist_trigger_rounded_smaller_button")){this.$handle.find(".b-sprite").toggleClass("icon_list_in_circles_selected",e).toggleClass("icon_list_in_circles",!e)
}},ontext:function(e){var g=$(e.currentTarget);
var f=g.parent();
f.find(".js-wl-dropdown-item-checkbox").attr("disabled",!g.val());
if(e.which===13){e.preventDefault();
this.createList(f)
}},oncheckbox:function(e){e.preventDefault();
var f=$(e.currentTarget).parent();
var g=f.find(".js-wl-dropdown-item-text");
this[g[0]?"createList":"toggleList"](f)
},createList:function(e){var g=this;
var f=e.find(".js-wl-dropdown-item-text");
d.create({name:f.val(),hotel_id:this.params.hotel_id}).then(function(k){var j,h;
j=k.result;
j.selected=true;
h=$("<div/>").html(g.tmpl({lists:[j]}));
e.before(h.find(".js-wl-dropdown-item"));
e.replaceWith(h.find(".js-wl-dropdown-item-new"))
})
},checked:function(e,f){if(typeof f!=="undefined"){e.get(0).checked=f
}return e.get(0).checked
},toggleList:function(f){var g=this;
var e=f.find(".js-wl-dropdown-item-checkbox");
d.editHotel({lists:e.attr("data-list-id"),hotel_id:g.params.hotel_id,new_state:Number(g.checked(e))}).then(function(){g.checked(e,!g.checked(e));
booking.eventEmitter.trigger("wl-dropdown-toggle-list",{dropdown:g,state:g.checked(e),$link:f.find("span")})
})
},loading:function(f,e){e.toggleClass("wl-dropdown-item_loading",f);
this.$handle.toggleClass("wl-dropdown-handle_loading",f)
},tmpl:function(e){if(!this._tmpl){this._tmpl=booking.Template.compile($("#template_wl_dropdown_cleanup").html())
}return this._tmpl($.extend(e,{logged_in:Number(booking.env.auth_level)>0}))
}});
return{wlDropdown:c,create:function(){$(".js-wl-dropdown-handle").each(function e(){c.create(this)
})
},init:function(){this.create()
}}
})();
if(booking.env.enable_scripts_tracking){booking.env.scripts_tracking.main.run=true
};