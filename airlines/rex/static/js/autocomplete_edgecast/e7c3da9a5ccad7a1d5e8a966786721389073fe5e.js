(function(a,c){a.ui=a.ui||{};
if(a.ui.version){return
}a.extend(a.ui,{version:"1.8.6",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});
a.fn.extend({_focus:a.fn.focus,focus:function(d,e){return typeof d==="number"?this.each(function(){var f=this;
setTimeout(function(){a(f).focus();
if(e){e.call(f)
}},d)
}):this._focus.apply(this,arguments)
},scrollParent:function(){var d;
if((a.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){d=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(a.curCSS(this,"position",1))&&(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))
}).eq(0)
}else{d=this.parents().filter(function(){return(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!d.length?a(document):d
},zIndex:function(g){if(g!==c){return this.css("zIndex",g)
}if(this.length){var e=a(this[0]),d,f;
while(e.length&&e[0]!==document){d=e.css("position");
if(d==="absolute"||d==="relative"||d==="fixed"){f=parseInt(e.css("zIndex"),10);
if(!isNaN(f)&&f!==0){return f
}}e=e.parent()
}}return 0
},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(d){d.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
a.each(["Width","Height"],function(f,d){var e=d==="Width"?["Left","Right"]:["Top","Bottom"],g=d.toLowerCase(),j={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};
function h(m,l,k,n){a.each(e,function(){l-=parseFloat(a.curCSS(m,"padding"+this,true))||0;
if(k){l-=parseFloat(a.curCSS(m,"border"+this+"Width",true))||0
}if(n){l-=parseFloat(a.curCSS(m,"margin"+this,true))||0
}});
return l
}if(a().jquery.replace(/\./g,"")>170){return
}a.fn["inner"+d]=function(k){if(k===c){return j["inner"+d].call(this)
}return this.each(function(){a(this).css(g,h(this,k)+"px")
})
};
a.fn["outer"+d]=function(k,l){if(typeof k!=="number"){return j["outer"+d].call(this,k)
}return this.each(function(){a(this).css(g,h(this,k,true,l)+"px")
})
}
});
function b(d){return !a(d).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)
}).length
}a.extend(a.expr[":"],{data:function(f,e,d){return !!a.data(f,d[3])
},focusable:function(f){var j=f.nodeName.toLowerCase(),d=a.attr(f,"tabindex");
if("area"===j){var h=f.parentNode,g=h.name,e;
if(!f.href||!g||h.nodeName.toLowerCase()!=="map"){return false
}e=a("img[usemap=#"+g+"]")[0];
return !!e&&b(e)
}return(/input|select|textarea|button|object/.test(j)?!f.disabled:"a"==j?f.href||!isNaN(d):!isNaN(d))&&b(f)
},tabbable:function(e){var d=a.attr(e,"tabindex");
return(isNaN(d)||d>=0)&&a(e).is(":focusable")
}});
a(function(){var d=document.body,e=d.appendChild(e=document.createElement("div"));
a.extend(e.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});
a.support.minHeight=e.offsetHeight===100;
a.support.selectstart="onselectstart" in e;
d.removeChild(e).style.display="none"
});
if(!a.curCSS){a.curCSS=a.css
}a.extend(a.ui,{plugin:{add:function(e,f,h){var g=a.ui[e].prototype;
for(var d in h){g.plugins[d]=g.plugins[d]||[];
g.plugins[d].push([f,h[d]])
}},call:function(d,f,e){var h=d.plugins[f];
if(!h||!d.element[0].parentNode){return
}for(var g=0;
g<h.length;
g++){if(d.options[h[g][0]]){h[g][1].apply(d.element,e)
}}}},contains:function(e,d){return document.compareDocumentPosition?e.compareDocumentPosition(d)&16:e!==d&&e.contains(d)
},hasScroll:function(g,e){if(a(g).css("overflow")==="hidden"){return false
}var d=(e&&e==="left")?"scrollLeft":"scrollTop",f=false;
if(g[d]>0){return true
}g[d]=1;
f=(g[d]>0);
g[d]=0;
return f
},isOverAxis:function(e,d,f){return(e>d)&&(e<(d+f))
},isOver:function(j,e,h,g,d,f){return a.ui.isOverAxis(j,h,d)&&a.ui.isOverAxis(e,g,f)
}})
})(jQuery);
(function(b,d){if(b.cleanData){var c=b.cleanData;
b.cleanData=function(e){for(var f=0,g;
(g=e[f])!=null;
f++){b(g).triggerHandler("remove")
}c(e)
}
}else{var a=b.fn.remove;
b.fn.remove=function(e,f){return this.each(function(){if(!f){if(!e||b.filter(e,[this]).length){b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")
})
}}return a.call(b(this),e,f)
})
}
}b.widget=function(f,h,e){var g=f.split(".")[0],k;
f=f.split(".")[1];
k=g+"-"+f;
if(!e){e=h;
h=b.Widget
}b.expr[":"][k]=function(l){return !!b.data(l,f)
};
b[g]=b[g]||{};
b[g][f]=function(l,m){if(arguments.length){this._createWidget(l,m)
}};
var j=new h();
j.options=b.extend(true,{},j.options);
b[g][f].prototype=b.extend(true,j,{namespace:g,widgetName:f,widgetEventPrefix:b[g][f].prototype.widgetEventPrefix||f,widgetBaseClass:k},e);
b.widget.bridge(f,b[g][f])
};
b.widget.bridge=function(f,e){b.fn[f]=function(j){var g=typeof j==="string",h=Array.prototype.slice.call(arguments,1),k=this;
j=!g&&h.length?b.extend.apply(null,[true,j].concat(h)):j;
if(g&&j.charAt(0)==="_"){return k
}if(g){this.each(function(){var l=b.data(this,f),m=l&&b.isFunction(l[j])?l[j].apply(l,h):l;
if(m!==l&&m!==d){k=m;
return false
}})
}else{this.each(function(){var l=b.data(this,f);
if(l){l.option(j||{})._init()
}else{b.data(this,f,new e(j,this))
}})
}return k
}
};
b.Widget=function(e,f){if(arguments.length){this._createWidget(e,f)
}};
b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(f,g){b.data(g,this.widgetName,this);
this.element=b(g);
this.options=b.extend(true,{},this.options,this._getCreateOptions(),f);
var e=this;
this.element.bind("remove."+this.widgetName,function(){e.destroy()
});
this._create();
this._trigger("create");
this._init()
},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]
},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);
this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")
},widget:function(){return this.element
},option:function(f,g){var e=f;
if(arguments.length===0){return b.extend({},this.options)
}if(typeof f==="string"){if(g===d){return this.options[f]
}e={};
e[f]=g
}this._setOptions(e);
return this
},_setOptions:function(f){var e=this;
b.each(f,function(g,h){e._setOption(g,h)
});
return this
},_setOption:function(e,f){this.options[e]=f;
if(e==="disabled"){this.widget()[f?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",f)
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_trigger:function(f,g,h){var k=this.options[f];
g=b.Event(g);
g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();
h=h||{};
if(g.originalEvent){for(var e=b.event.props.length,j;
e;
){j=b.event.props[--e];
g[j]=g.originalEvent[j]
}}this.element.trigger(g,h);
return !(b.isFunction(k)&&k.call(this.element[0],g,h)===false||g.isDefaultPrevented())
}}
})(jQuery);
(function(f,g){f.ui=f.ui||{};
var d=/left|center|right/,e=/top|center|bottom/,a="center",b=f.fn.position,c=f.fn.offset;
f.fn.position=function(j){if(!j||!j.of){return b.apply(this,arguments)
}j=f.extend({},j);
var n=f(j.of),m=n[0],p=(j.collision||"flip").split(" "),o=j.offset?j.offset.split(" "):[0,0],l,h,k;
if(m.nodeType===9){l=n.width();
h=n.height();
k={top:0,left:0}
}else{if(m.setTimeout){l=n.width();
h=n.height();
k={top:n.scrollTop(),left:n.scrollLeft()}
}else{if(m.preventDefault){j.at="left top";
l=h=0;
k={top:j.of.pageY,left:j.of.pageX}
}else{l=n.outerWidth();
h=n.outerHeight();
k=n.offset()
}}}f.each(["my","at"],function(){var q=(j[this]||"").split(" ");
if(q.length===1){q=d.test(q[0])?q.concat([a]):e.test(q[0])?[a].concat(q):[a,a]
}q[0]=d.test(q[0])?q[0]:a;
q[1]=e.test(q[1])?q[1]:a;
j[this]=q
});
if(p.length===1){p[1]=p[0]
}o[0]=parseInt(o[0],10)||0;
if(o.length===1){o[1]=o[0]
}o[1]=parseInt(o[1],10)||0;
if(j.at[0]==="right"){k.left+=l
}else{if(j.at[0]===a){k.left+=l/2
}}if(j.at[1]==="bottom"){k.top+=h
}else{if(j.at[1]===a){k.top+=h/2
}}k.left+=o[0];
k.top+=o[1];
return this.each(function(){var t=f(this),v=t.outerWidth(),s=t.outerHeight(),u=parseInt(f.curCSS(this,"marginLeft",true))||0,r=parseInt(f.curCSS(this,"marginTop",true))||0,x=v+u+parseInt(f.curCSS(this,"marginRight",true))||0,y=s+r+parseInt(f.curCSS(this,"marginBottom",true))||0,w=f.extend({},k),q;
if(j.my[0]==="right"){w.left-=v
}else{if(j.my[0]===a){w.left-=v/2
}}if(j.my[1]==="bottom"){w.top-=s
}else{if(j.my[1]===a){w.top-=s/2
}}w.left=parseInt(w.left);
w.top=parseInt(w.top);
q={left:w.left-u,top:w.top-r};
if(booking.env.rtl){w.left=w.left-v+l
}f.each(["left","top"],function(A,z){if(f.ui.position[p[A]]){f.ui.position[p[A]][z](w,{targetWidth:l,targetHeight:h,elemWidth:v,elemHeight:s,collisionPosition:q,collisionWidth:x,collisionHeight:y,offset:o,my:j.my,at:j.at})
}});
t.offset(f.extend(w,{using:j.using}))
})
};
f.ui.position={fit:{left:function(h,j){var l=f(window),k=j.collisionPosition.left+j.collisionWidth-l.width()-l.scrollLeft();
h.left=k>0?h.left-k:Math.max(h.left-j.collisionPosition.left,h.left)
},top:function(h,j){var l=f(window),k=j.collisionPosition.top+j.collisionHeight-l.height()-l.scrollTop();
h.top=k>0?h.top-k:Math.max(h.top-j.collisionPosition.top,h.top)
}},flip:{left:function(j,l){if(l.at[0]===a){return
}var n=f(window),m=l.collisionPosition.left+l.collisionWidth-n.width()-n.scrollLeft(),h=l.my[0]==="left"?-l.elemWidth:l.my[0]==="right"?l.elemWidth:0,k=l.at[0]==="left"?l.targetWidth:-l.targetWidth,o=-2*l.offset[0];
j.left+=l.collisionPosition.left<0?h+k+o:m>0?h+k+o:0
},top:function(j,l){if(l.at[1]===a){return
}var n=f(window),m=l.collisionPosition.top+l.collisionHeight-n.height()-n.scrollTop(),h=l.my[1]==="top"?-l.elemHeight:l.my[1]==="bottom"?l.elemHeight:0,k=l.at[1]==="top"?l.targetHeight:-l.targetHeight,o=-2*l.offset[1];
j.top+=l.collisionPosition.top<0?h+k+o:m>0?h+k+o:0
}}};
if(!f.offset.setOffset){f.offset.setOffset=function(m,j){if(/static/.test(f.curCSS(m,"position"))){m.style.position="relative"
}var l=f(m),o=l.offset(),h=parseInt(f.curCSS(m,"top",true),10)||0,n=parseInt(f.curCSS(m,"left",true),10)||0,k={top:(j.top-o.top)+h,left:(j.left-o.left)+n};
if("using" in j){j.using.call(m,k)
}else{l.css(k)
}};
f.fn.offset=function(h){var j=this[0];
if(!j||!j.ownerDocument){return null
}if(h){return this.each(function(){f.offset.setOffset(this,h)
})
}return c.call(this)
}
}}(jQuery));
(function(b,c){var a={appendTo:("body"),delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null};
b.widget("ui.autocomplete",{options:a,_create:function(){var m=this,l=this.element[0].ownerDocument,d,e,h,k=this.element[0].nodeName.toLowerCase(),g=k==="textarea",j=k==="input";
this.isMultiLine=g?true:j?false:(this.element.prop&&this.element.prop("isContentEditable"));
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(o){if(m.options.disabled||m.element.attr("readonly")){d=true;
h=true;
supressKeyPressRepeat=true;
return
}d=false;
suppressKeyInput=false;
e=false;
var p=b.ui.keyCode;
switch(o.keyCode){case p.PAGE_UP:d=true;
m._move("previousPage",o);
break;
case p.PAGE_DOWN:d=true;
m._move("nextPage",o);
break;
case p.UP:d=true;
m._keyEvent("previous",o);
o.preventDefault();
break;
case p.DOWN:d=true;
m._keyEvent("next",o);
o.preventDefault();
break;
case p.ENTER:case p.NUMPAD_ENTER:if(b("#ac-suggestion a.ui-state-hover").length){booking.track.exp("bLYUELMdJUKeYEGPKVSBXe");
if(booking.track.getVariant("bLYUELMdJUKeYEGPKVSBXe")){var n=b("#ac-suggestion").data("suggestion");
b("#destination").val(n)
}b("#destination").trigger("keydown.autocomplete");
return false
}if(b("#autocomplete_skip .autocomplete_skip_a.ui-state-hover").length){if(booking.track.getVariant("bLYUELMAAJYET")){b("#destination").data("autocomplete").close();
b("#destination").closest("form").submit();
return false
}}if(m.menu.active){d=true;
o.preventDefault()
}else{m.close(o);
if(m.xhr){m.xhr.abort()
}break
}case p.TAB:if(!m.menu.active){return
}else{if(m.menu.active.get(0).id==="autocomplete_skip"){m.close(o);
return
}}m.menu.select(o);
break;
case p.ESCAPE:m.element.val(m.term);
booking.env.autocompleteESC=true;
m.close(o);
break;
default:if(o.keyCode==p.BACKSPACE&&m.element.val().length<=m.options.minLength){if(m.xhr){m.xhr.abort()
}}e=true;
m._searchTimeout(o);
break
}}).bind("keypress.autocomplete",function(n){if(d){d=false;
if(!m.isMultiLine||m.menu.element.is(":visible")){n.preventDefault()
}return
}if(e){return
}var o=b.ui.keyCode;
switch(n.keyCode){case o.PAGE_UP:m._move("previousPage",n);
break;
case o.PAGE_DOWN:m._move("nextPage",n);
case o.UP:m._keyEvent("previous",n);
case o.DOWN:m._keyEvent("next",n)
}}).bind("input.autocomplete",function(n){if(h){h=false;
n.preventDefault();
return
}m._searchTimeout(n)
}).bind("focus.autocomplete",function(){if(m.options.disabled){return
}m.selectedItem=null;
m.previous=m.element.val()
}).bind("blur.autocomplete",function(n){if(m.options.disabled){return
}clearTimeout(m.searching);
m.closing=setTimeout(function(){m.close(n);
m._change(n)
},150)
});
this._initSource();
if(this.options&&this.options.delay){this.options.orig_delay=this.options.delay
}this.response=function(){return m._response.apply(m,arguments)
};
var f="ui-autocomplete ui-autocomplete-icons";
if(booking.track.getVariant("bLYUELMXCEC")){f+=" highlight_first_item"
}this.menu=b("<ul></ul>").addClass(f).appendTo(b(this.options.appendTo||"body",l)[0]).mousedown(function(n){var o=m.menu.element[0];
if(!b(n.target).closest(".ui-menu-item").length){setTimeout(function(){b(document).one("mousedown",function(p){if(p.target!==m.element[0]&&p.target!==o&&!b.ui.contains(o,p.target)){m.close()
}})
},1)
}setTimeout(function(){clearTimeout(m.closing)
},13)
}).menu({focus:function(o,p){var n=p.item.data("item.autocomplete")
},selected:function(p,q){if(typeof(q.item)!=="undefined"&&q.item!==null){var o=q.item.data("item.autocomplete");
var n=m.previous;
if(m.element[0]!==l.activeElement){m.element.focus();
m.previous=n;
setTimeout(function(){m.previous=n
},1)
}if(false!==m._trigger("select",p,{item:o})){if(typeof(o)!=="undefined"){m.element.val(o.value)
}}m.term=m.element.val();
m.close(p);
m.selectedItem=o
}},blur:function(p,o){if(booking.track.getVariant("bLYUELMAAJYET")){return false
}var n=o.noClean||false;
if(m.menu.element.is(":visible")&&(m.element.val()!==m.term)&&!(b("#ac-suggestion").length)&&!n){m.element.val(m.term)
}}}).zIndex(this.element.zIndex()+2000).css({top:0,left:0}).hide().data("menu");
if(booking.track.getVariant("bLYUELMAAJYET")){this.menu.element.bind("mouseleave",function(){setTimeout(function(){var n=b("#destination").data("autocomplete").menu;
n.activate(b.Event({type:"mouseenter"}),n.element.children().not("#ac-suggestion").first())
},1)
})
}b(window).bind("resize",function(){try{if(m.menu.element.is(":visible")){m.element.autocomplete("search")
}}catch(n){}})
},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
this.menu.element.remove();
b.Widget.prototype.destroy.call(this)
},_setOption:function(d,e){b.Widget.prototype._setOption.apply(this,arguments);
if(d==="source"){this._initSource()
}if(d==="appendTo"){this.menu.element.appendTo(b(e||"body",this.element[0].ownerDocument)[0])
}},_initSource:function(){var e=this,h,f,d,g=true;
if(b.isArray(this.options.source)){h=this.options.source;
this.source=function(k,j){j(b.ui.autocomplete.filter(h,k.term))
}
}else{if(typeof this.options.source==="string"){f=this.options.source;
this.source=function(k,j){var l=function(m){j(m)
};
if(e.xhr){e.xhr.abort()
}if(e.options.disable){return
}e.xhr=b.getJSON(f,k,function(n,m,o){if(typeof n!=="undefined"&&n!==null&&n.shut_up){e.options.disable=true
}e.options.delay=e.options.orig_delay;
if(o===e.xhr){l(n)
}e.xhr=null
});
if(booking.env.search_autocomplete_delay_on_failure){e.element.ajaxError(function(){e.options.delay=Math.floor(e.options.delay*=1.5)
})
}}
}else{this.source=this.options.source
}}},_searchTimeout:function(e){var d=this;
clearTimeout(d.searching);
d.searching=setTimeout(function(){if(d.term!=d.element.val()){d.selectedItem=null;
d.search(null,e)
}},d.options.delay)
},search:function(e,d){e=e!=null?e:this.element.val();
this.term=this.element.val();
if(e.length<this.options.minLength){return this.close(d)
}clearTimeout(this.closing);
if(this._trigger("search",d)===false){return
}return this._search(e)
},_search:function(e){this.element.addClass("ui-autocomplete-loading");
var d=this.options.extraParams||{};
d.dest_type=booking.env.search_autocomplete_params.dest_type;
d.term=e;
booking.track.exp("bLYUELMEKXMDDBXe");
if(booking.env.sgzip||document.cookie.match(/gzt=1/)){booking.track.exp("MWdedZUDGfLdTC");
if(booking.track.getVariant("MWdedZUDGfLdTC")){d.compress=1
}}this.source(d,this.response)
},_response:function(d){if(d&&d.length){d=this._normalize(d);
this._suggest(d);
this._trigger("open")
}else{if(!b.isEmptyObject(d)){this._suggest(d);
this._trigger("open")
}else{this.close()
}}this.element.removeClass("ui-autocomplete-loading");
booking.env.trackExperiment("bLYUELMMWcbfKe");
booking.env.trackExperiment("bLYUELMbBNLWe");
booking.env.trackExperiment("bLYUELMERPTKC");
booking.env.trackExperiment("bLYUELMERZLFZC");
booking.track.exp("bLYUELMEXO")
},close:function(d){var e=d&&d.relatedTarget&&(d.relatedTarget.id==="searchbox_btn");
e=e||(d&&d.toElement&&d.toElement.id==="searchbox_btn");
clearTimeout(this.closing);
if(this.menu.element.is(":visible")){this._trigger("close",d);
this.menu.element.hide();
this.menu.deactivate();
if(typeof(d)!=="undefined"&&booking.env.autocompleteESC){d.preventDefault();
booking.env.autocompleteESC=false
}return true
}else{return false
}},_change:function(d){if(this.previous!==this.element.val()){this._trigger("change",d,{item:this.selectedItem})
}},_normalize:function(d){if(d&&d.length&&d[0].label&&d[0].value){return d
}return b.map(d,function(e){if(typeof e==="string"){return{label:e,value:e}
}if(typeof e.popular!=="undefined"){var f=[];
b.map(e.popular,function(g){f.push(b.extend({label:g.label||g.value,value:g.value||g.label},g))
});
e.popular=f
}return b.extend({label:e.label||e.value,value:e.value||e.label},e)
})
},_suggest:function(f){var h=this.menu.element.empty().zIndex(this.element.zIndex()+2000),g=b(h),j=booking.env.autocomplete_skip_suggestions,e="";
this._renderMenu(h,f);
if(booking.track.getVariant("bLYUELMcJTPBeZEHe")!=3){if(booking.track.getVariant("bLYUELMcJTPBeZEHe")==1){j=booking.env.autocomplete_skip_suggestions_new_v1
}else{if(booking.track.getVariant("bLYUELMcJTPBeZEHe")==2){j=booking.env.autocomplete_skip_suggestions_new_v2
}}if(!(booking.env.b_site_experiment_autocomplete_remove_partitions)){var d=b('<li id="autocomplete_skip" class="ui-menu-item" role="menuitem" '+e+'><a class="ui-corner-all autocomplete_skip_a" tabindex="-1">'+j+"</a></li>");
g.append(d)
}if(booking.track.getVariant("bLYUELMcJTPBeZEHe")==2){var k=b("#destination").val();
if(k){b("#ac_other_options_button").text(k)
}}}this.menu.deactivate();
this.menu.refresh();
this.menu.element.show().position(b.extend({of:this.element},this.options.position));
this._resizeMenu()
},_resizeMenu:function(){var d=this.menu.element;
var e=0;
if(!booking.env.rtl||booking.env.b_action==="index"){e=this.element.outerWidth();
d.outerWidth(e)
}},_renderMenu:function(p,s){var r=this,d=false;
var D,z,x,f,h,g=0,A=["city","airport","district","region","country","hotel","landmark","searchHistory"],v=A.length;
if(!s.city||!s.city.length){p.addClass("ui-ac-empty")
}else{p.removeClass("ui-ac-empty")
}if(s.__did_you_mean__){var q=s.__did_you_mean__,k=q.label,y=q.suggestion,n={value:y,label:y};
b('<li id="ac-suggestion" class="ui-menu-item" role="menuitem" data-suggestion="'+y+'"><a class="partition_item ui-corner-all did-you-mean-item">'+k+"</a></li>").data("item.autocomplete",n).appendTo("ul.ui-autocomplete");
if(booking.track.getVariant("bLYUELMAAJYET")){b("#ac-suggestion a").live("mouseover",function(){b("#destination").data("autocomplete").menu.deactivate()
});
b("#ac-suggestion a").live("click",function(){b("#destination").val(y);
b("#destination").trigger("keydown.autocomplete")
})
}else{b("#ac-suggestion").live("click",function(){b("#destination").val(y);
b("#destination").trigger("keydown.autocomplete")
})
}}var w=s.theme;
if(w&&w.length){var m=[];
var u=w.length;
for(var o=0;
o<u;
o++){if(w[o]["match_start"]){m.push(w[o])
}}if(u!=m.length){s.theme=m
}if(B.env.b_action=="index"){var e=A.shift();
A.unshift("theme");
A.unshift(e);
v=A.length
}else{delete s.theme
}}var C=false;
for(D=0;
D<v;
D++){h=A[D];
if(s[h]){g++;
f=r._normalize(s[h]);
if(!C){C=f
}x=f.length;
for(z=0;
z<x;
z++){if(z===0){f[0].header=h;
if(g===1){f[0].first=1
}}r._renderItem(p,f[z],z,f.length)
}}}},_renderItem:function(q,D,F,z){var s=this;
D.position=F;
D.array_length=z;
var t=D.label;
if(booking.track.getVariant("bLYUELMMWcbfKe")){t=D.label_highlighted||D.label
}var j=booking.track.getVariant("PVUELMYTZWMVXOUeKe");
if(j){t=D.label;
if(D.labels){var w=[],A="",e="",v="";
for(var u=0;
u<D.labels.length;
u++){if(D.labels[u].hl){w.push("<strong>"+D.labels[u].text+"</strong>")
}else{w.push(D.labels[u].text)
}}A=w[0];
if(w[1]){e=", "+w[1]
}if(w.length>1){v=", "+w[w.length-1]
}switch(j){case 1:t=A+v;
break;
case 2:t=A+e;
break;
case 3:t=A;
break
}}}var l=t,x="",d="",y="",C="",f="",g=D.photo||"";
if(D.header){x='<span class="autocomplete_header autocomplete_h_'+D.dest_type+'" >'+booking.env.autocomplete_categories[D.header]+"</span>";
d=(D.first)?"":' style="border-top: 1px solid #CCC;"';
y+=(D.first)?"":"first-in-group"
}if(booking.track.getVariant("PVUELMbcDAaNLeeZAAZbSXT")){if(D.nr_hotels_label&&D.nr_hotels_label.length){var E="text-align: left; display: inline;";
if(booking.env.rtl==1){E+=" direction: rtl; unicode-bidi: embed;"
}f='<span class="label" style="position: static;color:#888;">&nbsp;<span class="property-counter" style="'+E+'">('+D.nr_hotels_label+")</span></span>"
}}else{if(D.hotels===0){if(booking.env.rtl==1){if(D.nr_hotels_25>0){f='<span class="label" style="position: static;color:#888;">&nbsp;<span class="property-counter" style="direction: rtl; text-align: left; display: inline; unicode-bidi: embed;">('+(D.nr_hotels_25==1?booking.env.autocomplete.property_nearby:D.nr_hotels_25+" "+booking.env.autocomplete.properties_nearby)+")</span></span>"
}}else{if(D.nr_hotels_25>0){f='<span class="label" style="position: static;color:#888;">&nbsp;<span class="property-counter" style="text-align: left; display: inline;">('+(D.nr_hotels_25==1?booking.env.autocomplete.property_nearby:D.nr_hotels_25+" "+booking.env.autocomplete.properties_nearby)+")</span></span>"
}}}else{if(D.hotels){f='<span class="label" style="position: static;color:#888;">&nbsp;<span class="property-counter" style="text-align: left; display: inline; unicode-bidi: embed;">('+D.hotels+" "+(D.hotels==1?booking.env.autocomplete.hotel:booking.env.autocomplete.hotels)+")</span></span>"
}}}var r="";
if(D.dest_type=="theme"&&D.additional_label){r='<span class="label" style="position: static;color:#888;">&nbsp;<span style="direction: rtl; text-align: left; display: inline;">'+D.additional_label+"</span></span>"
}icon='<i class="autocomplete_icons autocomplete_'+D.dest_type+'"></i>';
l=icon+"<span>"+l+f+r+"</span>";
C='class="partition_item"';
if(D.popular!=c&&D.popular.length>0&&F===0){for(i=0;
i<D.popular.length;
i++){if(i==0){result=b('<li class="'+y+'"'+d+"></li>").data("item.autocomplete",D).append(b("<a "+C+">"+l+"</a>")).appendTo(q)
}var k=D.popular[i],h=k.dest_type,p=k.name[h],o='<i class="autocomplete_icons autocomplete_'+h+'"></i>',n='<span class="autocomplete-number-of-properties">&nbsp;('+k.nr_hotels+" "+(k.nr_hotels==1?booking.env.autocomplete.hotel:booking.env.autocomplete.hotels)+") </span>";
if(h!=c){result+=b('<li class="autocomplete-sub-item '+y+'"></li>').append(b("<a "+C+">"+o+p+n+"</a>")).data("item.autocomplete",k).appendTo(q)
}}}else{result=b('<li class="'+y+'"'+d+"></li>").data("item.autocomplete",D).append(b("<a "+C+">"+l+"</a>")).appendTo(q)
}return result
},_move:function(e,d){if(!this.menu.element.is(":visible")){this.search(null,d);
return
}if(!booking.track.getVariant("bLYUELMAAJYET")){if(this.menu.first()&&/^previous/.test(e)||this.menu.last()&&/^next/.test(e)){this.element.val(this.term);
this.menu.deactivate();
return
}}this.menu[e](d)
},_keyEvent:function(e,d){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,d);
d.preventDefault()
}},widget:function(){return this.menu.element
}});
b.extend(b.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")
},filter:function(f,d){var e=new RegExp(b.ui.autocomplete.escapeRegex(d),"i");
return b.grep(f,function(g){return e.test(g.label||g.value||g)
})
}})
}(jQuery));
(function(a){a.widget("ui.menu",{_create:function(){var b=this;
this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length){return
}c.preventDefault();
b.select(c)
});
this.refresh()
},refresh:function(){var c=this;
var b=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");
b.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(d){c.activate(d,a(this).parent())
}).mouseleave(function(){c.deactivate()
})
},activate:function(e,d){this.deactivate();
if(this.hasScroll()){var f=d.offset().top-this.element.offset().top,b=this.element.attr("scrollTop"),c=this.element.height();
if(f<0){this.element.attr("scrollTop",b+f)
}else{if(f>=c){this.element.attr("scrollTop",b+f-c+d.height())
}}}this.active=d.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();
this._trigger("focus",e,{item:d})
},deactivate:function(){if(!this.active){return
}this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
var b={};
this._trigger("blur",{},b);
this.active=null
},next:function(b){this.move("next",".ui-menu-item:first",b)
},previous:function(b){this.move("prev",".ui-menu-item:last",b)
},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},move:function(e,d,c){if(!this.active){this.element.width(this.element.width()+"px");
this.activate(c,this.element.children(d));
return
}var b=this.active[e+"All"](".ui-menu-item").eq(0);
if(b.length){this.activate(c,b)
}else{this.activate(c,this.element.children(d))
}},nextPage:function(d){if(this.hasScroll()){if(!this.active||this.last()){this.activate(d,this.element.children(".ui-menu-item:first"));
return
}var e=this.active.offset().top,c=this.element.height(),b=this.element.children(".ui-menu-item").filter(function(){var f=a(this).offset().top-e-c+a(this).height();
return f<10&&f>-10
});
if(!b.length){b=this.element.children(".ui-menu-item:last")
}this.activate(d,b)
}else{this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))
}},previousPage:function(c){if(this.hasScroll()){if(!this.active||this.first()){this.activate(c,this.element.children(".ui-menu-item:last"));
return
}var d=this.active.offset().top,b=this.element.height();
result=this.element.children(".ui-menu-item").filter(function(){var e=a(this).offset().top-d+b-a(this).height();
return e<10&&e>-10
});
if(!result.length){result=this.element.children(".ui-menu-item:first")
}this.activate(c,result)
}else{this.activate(c,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))
}},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")
},select:function(c){var e=a("#frm"),b=e.find('input[name="ss"]'),d=e.find('input[name="ss_raw"]');
if(b.length>0){if(d.length>0){d.val(b.val())
}else{e.append(a("<input>",{name:"ss_raw",type:"hidden",value:b.val()}))
}}this._trigger("selected",c,{item:this.active})
}})
}(jQuery));
booking[sNSExperiments].search_autocomplete={priority:9,cur_ui_item:{},init:function(){if(booking.track.getVariant("PVUELMBET")==1){return
}var c=this,g=$("#destination"),f=g.closest("form"),h=false,j=function(){try{if(B.track.getVariant("GWcOCBFO")===0&&B.track.getVariant("GWcOCBSXHe")===0){booking[sNSStartup].calendar.openPopupCalendar($("#homein .calendarLink").get(0))
}}catch(o){}},k=function(){if(booking.env.autocomplete_more_params){booking.env.trackExperiment(booking.env.autocomplete_more_params)
}};
var m="bLNHefKbAXSVKZfC",a=+booking.track.getVariant(m),e="PVbUOaDSGEbTC",l=+booking.track.getVariant(e),d=f.find("#searchbox_btn, .b-searchbox-button");
if((a===0)&&l){var b=[B.Search.Events.DATE_INVALID,B.Search.Events.DESTINATION_INVALID,B.Search.Events.GROUP_INVALID];
B.eventEmitter.bind(b.join(" "),function(){var o=setTimeout(function(){if(l===1){d.removeClass("visible_on_submit")
}else{if(l===2){d.removeClass("disable_on_submit")
}}},50)
})
}$("#destination").keydown(function(o){if(o.keyCode!=13){c.cur_ui_item={}
}});
if(B.track.getVariant("POKZYIPfZBYGacCVNPIITKe")){if(!booking.env.search_autocomplete_params){booking.env.search_autocomplete_params={}
}booking.env.search_autocomplete_params.name_breakdown=1
}g.autocomplete({source:"/autocomplete",extraParams:booking.env.search_autocomplete_params,minLength:2,delay:booking.env.search_autocomplete_delay||200,max:10}).bind("autocompleteselect",function(o,p){if(p.item){h=true;
c.cur_ui_item=p.item;
$("#destination").trigger("auto_completed");
booking.search.destination({term:p.item.value,data:p.item})
}}).bind("autocompleteopen",function(p,q){if($("#calendar_popup").length&&booking[sNSStartup].calendar&&typeof booking[sNSStartup].calendar.closePopupCalendar==="function"){booking[sNSStartup].calendar.closePopupCalendar()
}booking.eventEmitter.trigger("AUTOCOMPLETE:opened");
booking.track.exp("PVUELMBET");
booking.track.exp("bLNZJScEVDPJRWe");
booking.track.exp("bLYUELMAAJYET");
booking.track.exp("bLYUELMXCEC");
booking.track.exp("bLYUELMcJTPBeZEHe");
booking.track.exp("PVUELMbcDAaNLeeZAAZbSXT");
booking.track.exp("PVUELMYTZWMVXOUeKe");
if(booking.track.getVariant("bLYUELMAAJYET")){var o=g.data("autocomplete");
if(o){var r=o.menu;
if(r&&r.activate&&r.element&&r.element.children&&r.element.children().not("#ac-suggestion").length){r.activate($.Event({type:"mouseenter"}),r.element.children().not("#ac-suggestion").first())
}}}}).bind("autocompletesearch",function(o,p){if(B.env.b_action=="country"&&booking.track.getVariant("bLYUELMbBNLZVDCPZDKae")){var q=g.data("autocomplete").options.extraParams;
if($("#limit-search-area").is(":checked")){q.e_acf_i=B.env.b_country_id;
q.e_acf_t="country"
}else{q.e_acf_i="";
q.e_acf_t=""
}}if(B.env.b_action=="region"&&booking.track.getVariant("bLYUELMbBNLZVDCPZJfHe")){var q=g.data("autocomplete").options.extraParams;
if($("#limit-search-area").is(":checked")){q.e_acf_i=B.env.b_region_id;
q.e_acf_t="region"
}else{q.e_acf_i="";
q.e_acf_t=""
}}});
if(B.env.b_action=="country"&&booking.track.getVariant("bLYUELMbBNLZVDCPZDKae")){$("#limit-search-area").change(function(){g.autocomplete("search",$("#destination").val());
$("#destination").focus()
})
}if(B.env.b_action=="region"&&booking.track.getVariant("bLYUELMbBNLZVDCPZJfHe")){$("#limit-search-area").change(function(){g.autocomplete("search",$("#destination").val());
$("#destination").focus()
})
}$(document).ajaxSend(function(r,t,q){if(q.url.substr(0,13)==="/autocomplete"){var s=[],p,o;
for(p in booking.env.amTracking){if(p.substr(0,1)==="e"&&booking.env.amTracking[p]===1){o=p.substr(1);
s.push(o,booking.track.getVariant(o))
}}t.setRequestHeader("X-Booking-Exp",s.join(","))
}});
g.bind("focus",function(o,p){if(B.env.b_action=="country"&&booking.track.getVariant("bLYUELMbBNLZVDCPZDKae")){}else{if(B.env.b_action=="region"&&booking.track.getVariant("bLYUELMbBNLZVDCPZJfHe")){}else{return false
}}});
if(booking.track.getVariant("bLYUELMAAJYET")){var n=$("#destination");
g.bind("autocompleteclose",function(p,q){if($.isEmptyObject(c.cur_ui_item)&&n.val().length>1){var o=g.data("autocomplete").menu.active;
if(o&&o.length&&o.data("item.autocomplete")){c.cur_ui_item=o.data("item.autocomplete");
g.val(c.cur_ui_item.label)
}}})
}if(booking.track.getVariant("bLYUELMAAJYET")){$("#autocomplete_skip a").live("click",function(){g.autocomplete("close");
c.cur_ui_item={};
f.submit()
});
$("#autocomplete_skip").live("hover",function(){$("#destination").data("autocomplete").menu.deactivate()
})
}else{$("#autocomplete_skip").live("click",function(){g.autocomplete("close");
c.cur_ui_item={}
})
}f.bind("submit",function(p,q){var o=$("#destination");
if(d.hasClass("visible_on_submit")||d.hasClass("disable_on_submit")){return false
}if((a===0)&&l){if(l===1){d.addClass("visible_on_submit")
}else{if(l===2){d.addClass("disable_on_submit")
}}}if(o.val()===o.attr("data-wishlist")){o.val(o.attr("data-hotels"));
f.append($("<input>",{type:"hidden",name:"si",value:"ho"}));
f.append($("<input>",{type:"hidden",name:"wl_name",value:o.attr("data-wishlist")}))
}if(booking.track.getVariant("XCePEQYfEbVFRTKe")&&o.attr("data-recent-title")===o.val()){f.append($("<input>",{type:"hidden",name:"si",value:"ho"}));
f.append($("<input>",{type:"hidden",name:"recent_viewed_title",value:o.attr("data-recent-title")}))
}if(c.cur_ui_item.dest_type){f.find("input[name='dest_type'], input[name='dest_id'], input[name='ac_pageview_id'], input[name='ac_position'], input[name='ac_langcode'], input[name='ac_suggestion_list_length']").remove();
f.append($("<input>",{type:"hidden",name:"dest_type",value:c.cur_ui_item.dest_type}));
f.append($("<input>",{type:"hidden",name:"dest_id",value:c.cur_ui_item.dest_id}));
f.append($("<input>",{type:"hidden",name:"ac_pageview_id",value:booking.env.pageview_id}));
f.append($("<input>",{type:"hidden",name:"ac_position",value:c.cur_ui_item.position}));
f.append($("<input>",{type:"hidden",name:"ac_langcode",value:c.cur_ui_item.lc}));
f.append($("<input>",{type:"hidden",name:"ac_suggestion_list_length",value:c.cur_ui_item.array_length}))
}else{if((o.val()==booking.env.sess_dest_fullname)&&booking.env.sess_dest_id&&booking.env.sess_dest_type&&booking.env.normalize_sbox_value){f.find("input[name='dest_type'], input[name='dest_id'], input[name='ac_pageview_id'], input[name='ac_position'], input[name='ac_langcode'], input[name='ac_suggestion_list_length']").remove();
f.append($("<input>",{type:"hidden",name:"dest_type",value:booking.env.sess_dest_type}));
f.append($("<input>",{type:"hidden",name:"dest_id",value:booking.env.sess_dest_id}))
}else{if(f.find("#b_searchbox_errors [rel='searchstring_not_found']").length&&booking.track.getVariant("bLNZFKbeVEYUaDEDAJFbLEDJNMO")&&booking.env.b_not_found_searchstring){f.find("input[name='ssne'], input[name='ssne_untouched']").remove()
}}}if(booking.env.sboxDestinationFilter&&booking.google.clickTracker){booking.google.trackEvent(booking.google.clickTracker,"Destination filter",booking.env.sboxDestinationFilter)
}});
return true
}};