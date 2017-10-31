booking.ensureNamespaceExists("calendar2");
(function(f,a,e,d,b){e.ONE_DAY=1000*60*60*24;
e.SUNDAY_FIRST=true;
e.DAYS_IN_MONTH=[31,28,31,30,31,30,31,31,30,31,30,31];
e.DAY_STATES={disabled:true,weekend:true,selected:true,hilighted:true,"in-range":true,"first-in-range":true,"last-in-range":true,"today-bg":true,"today-fg":true,today:true};
var c=1;
e.uid=function(){c++;
return"calendar_"+c
};
e.today=function(){var i=new Date(f.env.b_timestamp*1000),g=new Date(),h=(Math.abs(i-g)>e.ONE_DAY);
return(h)?new Date(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),0,0,0,0):new Date(g.getFullYear(),g.getMonth(),g.getDate(),0,0,0,0)
};
e.dayId=function(h,i,g){return Date.UTC(h,i,g,0,0,0,0)
};
e.monthId=function(g,h){return"M"+Date.UTC(g,h,1,0,0,0,0)
};
e.nextMonthId=function(k){if(typeof k!=="string"){return false
}var g=k.split("-"),j=a.parseInt(g[0]),i=a.parseInt(g[1]),h=new Date(i,j+1,1);
return e.monthId(h)
};
e.previousMonthId=function(k){var g=k.split("-"),j=a.parseInt(g[0]),i=a.parseInt(g[1]),h=new Date(i,j-1,1);
return e.monthId(h)
};
e.dayFactory=function(h,g){var g=g||{};
g.isWeekend=(h.getDay()===0||h.getDay()===6);
g.isDisabled=(g.startDate&&h<g.startDate)||(g.endDate&&h>g.endDate)||(g.type&&g.type==="checkin"&&(Math.abs(h-g.endDate)<=e.ONE_DAY));
return new e.Day(h,g)
};
e.weekFactory=function(g,h){return new e.Week(h)
};
e.monthFactory=function(i,h,g){return new e.Month(i,h,g)
};
e.yearFactory=function(h,g){return new e.Year(h,g)
};
e.getNumberOfDaysInMonth=function(i,g){var h=e.DAYS_IN_MONTH[i];
if(i===1&&((g%4==0&&g%100!=0)||g%400==0)){h=29
}return h
};
f.calendar2.WRAPPER_CLASS="c2-wrapper";
f.calendar2.STATES={HIDDEN:"hidden",RANGE_SELECTED:"range-highlighted"}
}(booking,booking.tools,booking.calendar2,$));
(function(f,b,e,d,c){var a=10;
e.Calendar=function(g,h){this.id_=e.uid();
this.lazyEvents={};
this.days={};
this.daysIndex=[];
this.months={};
this.monthsIndex=[];
this.selectedDays_=[];
this.states_={};
this.highlightedRanges_={};
this.initBaseMarkup(g,h.positioning);
this.addState(f.calendar2.STATES.HIDDEN);
this.$input.data("calendar2",this);
this.setOptions(h);
if(h.type){this.$element.addClass(this.getStateClassName_(h.type))
}if(h.lazy){this.bindLazyLoadingEvents()
}else{this.initLazyMethods()
}this.onReady()
};
e.Calendar.prototype={constructor:e.Calendar,id:function(){return this.id_
},type:function(){return this.options&&this.options.type||"unknown"
},initBaseMarkup:function(g,i){this.$input=g;
var h=d('<div class="'+f.calendar2.WRAPPER_CLASS+" "+this.getStateClassName_("hidden")+'"></div>');
if(i==="inside"){this.$element=h;
this.$input.append(this.$element)
}else{this.$element=this.$input.wrap(h).parent()
}this.$element.addClass(this.getStateClassName_("position-"+i))
},setOptions:function(g){g=d.extend(this.options||{},g);
g.startDate=new Date(g.startDate);
g.endDate=new Date(g.endDate);
g.startDateId=e.dayId(g.startDate.getFullYear(),g.startDate.getMonth(),g.startDate.getDate());
g.endDateId=e.dayId(g.endDate.getFullYear(),g.endDate.getMonth(),g.endDate.getDate());
g.calendarWidth=g.monthWidth*g.monthsVisible+(g.borderWidth*(g.monthsVisible-1));
this.options=g
},setDefaultDates:function(){var h=this.options,g=h.defaultDate||null;
if(g&&g.year&&g.month>=0&&g.date>=0){this.selectDay(e.dayId(g));
this.selectMonth(e.monthId(g.year,g.month))
}else{this.selectMonth(this.monthsIndex[0],{force:true})
}},getCalendarClassname:function(){var g="c2-calendar";
if(this.options.direction==="rtl"){g+=" c2-calendar-rtl"
}if(this.options.extraClasses){g+=" "+this.options.extraClasses
}return g
},initLazyMethods:function(){this.unbindLazyLoadingEvents();
this.initMarkup();
this.bindElementsToModels();
this.setupOffsetsAndViewport_();
this.fitHorizontalPosition();
this.bindEvents();
this.setDefaultDates();
this.onLazyInitiated()
},refreshDisabledDays:function(){var g=this;
d.each(this.days,function(j,h){if(h.id()<=g.options.startDateId||h.id()>g.options.endDateId){h.addState("disabled")
}else{h.removeState("disabled")
}})
},initMarkup:function(){var j=this.options.title||"",h=(this.options.closeButton)?'<div class="c2-calendar-close-button"><i class="c2-calendar-close-button-icon">×</i></div>':"";
var i=this.options.calendarWidth+"px";
var g='<div style="width:'+i+';" class="'+this.getCalendarClassname()+'"><div class="c2-calendar-header">'+j+h+'</div><div class="c2-calendar-body"><div class="c2-button c2-button-earlier"><span class="c2-button-inner">&larr;</span></div><div class="c2-button c2-button-further"><span class="c2-button-inner">&rarr;</span></div><div class="c2-calendar-viewport"><div class="c2-calendar-inner">'+this.createMonths()+'</div></div><div class="c2-calendar-footer"></div></div></div>';
this.$calendarElement=d(g);
this.$viewport=this.$calendarElement.find(".c2-calendar-viewport");
this.$screen=this.$viewport.find(".c2-calendar-inner");
this.$element.append(this.$calendarElement)
},createMonths:function(){var j="",i=this.options,h=i.startDate.getFullYear(),l=i.endDate.getFullYear(),k=i.startDate.getMonth(),g=i.endDate.getMonth();
j+='<div class="c2-months-table">';
while(h<l||(h===l&&k<=g)){j+=this.createMonth(h,k).getHTML();
if((k+1)%12===0){h++
}k=(k+1)%12
}j+="</div>";
return j
},createMonth:function(i,j,h){var g=new e.Month(i,j,this),k=g.id();
this.months[k]=g;
this.monthsIndex.push(k);
return g
},createDay:function(i,j,h){var g=new e.Day(i,j,h),k=g.id();
if(k<this.options.startDateId||k>this.options.endDateId){g.addState("disabled")
}this.days[k]=g;
this.daysIndex.push(k);
return g
},getDay:function(g){return this.days[g]
},bindElementsToModels:function(){var g=this.$calendarElement.find(".c2-month"),j=this.$calendarElement.find(".c2-day");
for(var k=0,h=g.length;
k<h;
k++){this.months[g[k].getAttribute("data-id")].setElement(g[k])
}for(var k=0,h=j.length;
k<h;
k++){this.days[j[k].getAttribute("data-id")].setElement(j[k])
}},setupOffsetsAndViewport_:function(){var j=this.options.borderWidth,g=this.options.monthWidth,m;
for(var k=0,h=this.monthsIndex.length;
k<h;
k++){if(this.options.direction==="rtl"){position=(h-(k+1))*(g+j);
m=(h-(k+this.options.monthsVisible))*(g+j)
}else{m=k*(g+j);
position=m
}this.months[this.monthsIndex[k]].setOffset(m);
this.months[this.monthsIndex[k]].setPosition(position)
}},setCurrentMonth:function(g){if(!g){g=this.monthsIndex[0]
}else{if(this.monthsIndex.indexOf(g)===-1){g=this.monthsIndex[0]
}}this.currentMonth_=g;
return this.currentMonth_
},getCurrentMonth:function(){return this.currentMonth_||this.setCurrentMonth()
},getCurrentDay:function(){return this.selectedDays()[0]
},getSelectedDay:function(){var g=this.getCurrentDay();
if(g&&this.days[g]){return this.days[g]
}else{return null
}},selectMonth:function(k,g){var g=g||{},j,i=this.getTargetMonth(k),h={type:"any"};
if(this.getCurrentMonth()===i&&!g.force){return
}j=this.months[i];
if(j){this.setOffset_(j.getOffset());
this.setCurrentMonth(k)
}if(this.monthsIndex[0]===this.getCurrentMonth()){h.type="first"
}else{if((this.monthsIndex[this.monthsIndex.length-this.options.monthsVisible])===i){h.type="last"
}}this.onMonthShown(null,h)
},getNextMonth:function(){var h=this.monthsIndex.indexOf(this.getCurrentMonth()),g=h+1;
return this.monthsIndex[g]
},getPreviousMonth:function(){var h=this.monthsIndex.indexOf(this.getCurrentMonth()),g=h-1;
return this.monthsIndex[g]
},getTargetMonth:function(i){var g=this.monthsIndex.indexOf(i),h=g+this.options.monthsVisible-1,j;
if(h>=this.monthsIndex.length){j=h-(this.monthsIndex.length-1);
h=h-j;
g=g-j
}return this.monthsIndex[g]
},getVisibleMonths:function(){var g=this.monthsIndex.slice(0),h=this.monthsIndex.indexOf(this.getCurrentMonth());
g=g.slice(h,h+this.options.monthsVisible);
return g
},setOffset_:function(i){var g="margin-left",h={};
h[g]=-i;
this.$screen.stop(true,true).animate(h,300,"easeOutQuad")
},selectedDays:function(){return this.selectedDays_
},selectDay:function(h,i){if(!h){return false
}var j=this.days[h],g;
if(!j||j.hasState("disabled")){return
}for(g in this.days){if(this.days.hasOwnProperty(g)&&this.days[g].hasState("selected")){this.days[g].removeState("selected")
}}j.addState("selected");
this.selectedDays_=[j.id()];
this.onDateSelected(null,j.id(),i)
},selectRange:function(l,n){var o=this.daysIndex.indexOf(l),m=this.daysIndex.indexOf(n)+1,h=this.daysIndex.slice(o,m);
if(this.selectedRange_){for(var j=0,g=this.selectedRange_.length;
j<g;
j++){this.days[this.selectedRange_[j]].removeState("first-in-range").removeState("in-range").removeState("last-in-range")
}}for(var j=0,g=h.length;
j<g;
j++){this.days[h[j]].addState("in-range");
if(j===0){this.days[h[j]].addState("first-in-range")
}else{if(j===g-1){this.days[h[j]].addState("last-in-range")
}}}if(h.length){this.addState(f.calendar2.STATES.RANGE_SELECTED)
}else{this.removeState(f.calendar2.STATES.RANGE_SELECTED)
}this.selectedRange_=h
},highlightRange:function(j,l,i){if(!this.highlightedRanges_){this.highlightedRanges_={}
}var m=this.daysIndex.indexOf(j),k=this.daysIndex.indexOf(l)+1,g=this.daysIndex.slice(m,k);
var h;
if(i&&i.name){h=i.name
}else{h=e.uid()
}this.deleteRange_(h);
if(g.length){this.createRange_(g,h);
this.addState(f.calendar2.STATES.RANGE_SELECTED);
this.fireCallback("onRangeHighlighted",h)
}else{this.removeState(f.calendar2.STATES.RANGE_SELECTED);
this.fireCallback("onRangeUnHighlighted",h)
}return h
},unHighlightRange:function(g){if(this.highlightedRanges_[g]){this.deleteRange_(g);
this.removeState(f.calendar2.STATES.RANGE_SELECTED);
this.fireCallback("onRangeUnHighlighted",g)
}},createRange_:function(h,j){for(var l=0,g=h.length;
l<g;
l++){this.days[h[l]].addState("in-range");
if(l===0){this.days[h[l]].addState("first-in-range")
}else{if(l===g-1){this.days[h[l]].addState("last-in-range")
}}}this.highlightedRanges_[j]=h
},deleteRange_:function(j){var h=this.highlightedRanges_[j];
if(h){for(var l=0,g=h.length;
l<g;
l++){this.days[h[l]].removeState("first-in-range").removeState("in-range").removeState("last-in-range")
}this.highlightedRanges_[j]=null
}},shown:function(){return !this.hasState(f.calendar2.STATES.HIDDEN)
},show:function(){if(!this.lazyInitiated){this.initLazyMethods()
}f.eventEmitter.trigger("CALENDAR:opened",{id:this.id(),instance:this});
this.removeState(f.calendar2.STATES.HIDDEN);
this.fireCallback("onShow");
this.fitVerticalPosition();
this.adjustHeight();
f.eventEmitter.trigger("CALENDAR:showed",{id:this.id(),instance:this})
},hide:function(){f.eventEmitter.trigger("CALENDAR:closed",{id:this.id(),instance:this});
this.addState(f.calendar2.STATES.HIDDEN);
this.fireCallback("onHide")
},toggle:function(){if(this.shown()){this.hide()
}else{this.show()
}},fitHorizontalPosition:function(){var k=window,g=this.$element,i=this.$calendarElement,j=this.options.direction==="rtl",h=j?"right":"left";
if(g.length===0||i.length===0){return
}this.fitHorizontalPosition=(function(){var o=100,q,n=+new Date()-o-1,l,p,m=function(){var r=0;
if(j){r=(g.width()+g.offset().left)-(i.outerWidth()+a)
}else{r=d(k).width()-(g.offset().left+i.outerWidth()+a)
}if(r<0){i.css(h,r)
}else{i.css(h,0)
}};
return function(){k.clearTimeout(q);
l=+new Date();
p=l-n;
if(p>=o){n=l;
m()
}else{q=k.setTimeout(m,o)
}}
}());
this.fitHorizontalPosition();
d(window).resize()
},fitVerticalPosition:function(){var i=d(window),h=i.scrollTop(),g=this.$calendarElement,j=a+g.offset().top+g.height()-i.height();
if(j>h){f.WindowScroller.scrollToOffset(j)
}},resetModes:function(){this.selectRange()
},adjustHeight:function(){var h=this.getVisibleMonths(),g=0,k=0;
for(var j=0;
j<h.length;
j++){g=this.months[h[j]].getHeight();
k=(g>k)?g:k
}if(k>0){this.$viewport.height(k)
}},trigger:function(){this.$element.trigger.apply(this.$element,arguments)
},fireCallback:function(h){var g=[].slice.call(arguments,1);
g.unshift(this);
if(this.options[h]&&typeof this.options[h]==="function"){this.options[h].apply(this,g)
}},bindEvents:function(){var g=this;
this.$input.bind("keydown",function(h){g.onKeyDown(h)
});
this.$input.bind("click",function(h){g.toggle();
return false
});
this.$element.bind("toggleCalendar",function(){g.toggle()
});
this.$element.bind("showCalendar",function(){g.show()
});
this.$element.bind("hideCalendar",function(){g.hide()
});
this.$element.click(function(h){h.preventDefault();
h.stopPropagation()
});
d(window).click(function(){if(g.shown()){g.hide()
}});
d(window).resize(function(){g.fitHorizontalPosition()
});
this.$calendarElement.delegate(".c2-day","mouseenter",d.proxy(this.onDayMouseEnter,this));
this.$calendarElement.delegate(".c2-day","mouseleave",d.proxy(this.onDayMouseLeave,this));
this.$calendarElement.delegate(".c2-day","click",d.proxy(this.onDayClick,this));
this.$calendarElement.delegate(".c2-button-earlier","click touchstart",d.proxy(this.onEarlierButtonClick,this));
this.$calendarElement.delegate(".c2-button-further","click touchstart",d.proxy(this.onFurtherButtonClick,this));
this.$calendarElement.delegate(".c2-calendar-close-button","click touchstart",d.proxy(this.onCloseButtonClick,this));
this.$element.bind("dateSelected",d.proxy(this.onExternalDateSelected,this));
this.$element.bind("rangeSelected",d.proxy(this.onExternalRangeSelected,this));
this.$element.bind("monthSelected",d.proxy(this.onExternalMonthSelected,this));
this.$element.bind("show",d.proxy(this.show,this));
this.$element.bind("hide",d.proxy(this.hide,this));
this.$element.bind("toggle",d.proxy(this.toggle,this))
},bindLazyLoadingEvents:function(){this.$element.bind("mouseenter.calendar2",d.proxy(this.onElementMouseEnter,this));
this.$element.bind("touchstart.calendar2",d.proxy(this.onElementTouchStart,this));
this.$input.bind("mouseenter.calendar2",d.proxy(this.onElementMouseEnter,this));
this.$input.bind("touchstart.calendar2",d.proxy(this.onElementTouchStart,this))
},unbindLazyLoadingEvents:function(){this.$element.unbind("mouseenter.calendar2 touchstart.calendar2");
this.$input.unbind("mouseenter.calendar2 touchstart.calendar2")
},addState:function(g){if(!this.states_[g]){this.states_[g]=true;
this.$element.addClass(this.getStateClassName_(g))
}},removeState:function(g){if(this.states_[g]){this.states_[g]=false;
this.$element.removeClass(this.getStateClassName_(g))
}},hasState:function(g){return !!this.states_[g]
},getStateClassName_:function(g){return g?"c2-wrapper-s-"+g:""
},onElementMouseEnter:function(){this.unbindLazyLoadingEvents();
this.initLazyMethods()
},onElementTouchStart:function(g){g.preventDefault();
this.unbindLazyLoadingEvents();
this.$element.bind("lazyInitiated",d.proxy(function(){this.show();
this.$element.unbind("lazyInitiated")
},this));
this.initLazyMethods()
},onDayClick:function(h){h.preventDefault();
h.stopPropagation();
var g=h.currentTarget.getAttribute("data-id");
this.fireCallback("onDayClick",g);
this.selectDay(g,{type:"user"})
},onCloseButtonClick:function(g){g.preventDefault();
g.stopPropagation();
this.hide()
},onFurtherButtonClick:function(g){g.preventDefault();
g.stopPropagation();
this.selectMonth(this.getNextMonth())
},onEarlierButtonClick:function(g){g.preventDefault();
g.stopPropagation();
this.selectMonth(this.getPreviousMonth())
},onMonthShown:function(h,g){if(g){if(g.type==="first"){this.$calendarElement.find(".c2-button-earlier").addClass("c2-button-s-disabled")
}else{if(g.type==="last"){this.$calendarElement.find(".c2-button-further").addClass("c2-button-s-disabled")
}else{this.$calendarElement.find(".c2-button-s-disabled").removeClass("c2-button-s-disabled")
}}}this.adjustHeight()
},onDateSelected:function(l,i,k){var h=this.getDay(i),m=e.monthId(h.getYear(),h.getMonth()),g=this.getVisibleMonths(),j=k||{};
if(g.indexOf(m)===-1){this.selectMonth(m)
}if(j.type!=="api"){this.hide()
}if(j.type==="user"){this.fireCallback("onDateSelected",h,j)
}},onDayMouseEnter:function(h){h.preventDefault();
var g=this.getDay(h.currentTarget.getAttribute("data-id"));
g.addState("hilighted");
this.fireCallback("onDayMouseEnter",g)
},onDayMouseLeave:function(h){h.preventDefault();
var g=this.getDay(h.currentTarget.getAttribute("data-id"));
g.removeState("hilighted");
this.fireCallback("onDayMouseLeave",g)
},onExternalMonthSelected:function(i,h){var j=h.value,g=e.monthId(j.year,j.month);
this.selectMonth(g)
},onExternalDateSelected:function(j,i){var g=i.value,h;
if(!g){return
}h=e.dayId(g.year,g.month,g.date);
if(!h){return
}if(this.getCurrentDay()===h){return
}this.selectDay(h)
},onExternalRangeSelected:function(j,i){var g,l,k,h;
if(!i){return
}g=i.startValue;
l=i.endValue;
if(!(g&&l)){return
}k=e.dayId(g.year,g.month,g.date);
h=e.dayId(l.year,l.month,l.date);
this.selectRange(k,h)
},hilightToday:function(){var i=e.today(),h=this.getDay(e.dayId(i.getFullYear(),i.getMonth(),i.getDate()));
if(h){var g=f.track.getVariant("bLYQCLBMDGDGdUBGYT");
if(g==1){h.addState("today-bg")
}else{if(g==2){h.addState("today-fg")
}else{h.addState("today")
}}}},toggleNextPreviousControls:function(){if(this.monthsIndex.indexOf(this.getCurrentMonth())===0){this.$calendarElement.find(".c2-button-earlier").addClass("c2-button-s-disabled")
}},onReady:function(){this.fireCallback("onReady")
},onLazyInitiated:function(){this.hilightToday();
this.toggleNextPreviousControls();
this.lazyInitiated=true;
this.fireCallback("onLazyInitiated");
this.trigger("lazyInitiated")
},onKeyDown:function(g){this.fireCallback("onKeyDown",g)
}}
}(booking,booking.tools,booking.calendar2,$));
(function(e,a,d,c,b){d.Day=function(g,i,f,h){this.calendar_=h;
this.date_=f;
this.month_=i;
this.year_=g;
this.utcts_=Date.UTC(g,i,f,0,0,0,0);
this.id_=this.utcts_;
this.dateObject_=new Date(this.utcts_);
this.states_={};
this.stateClasses_=""
};
c.extend(d.Day.prototype,{id:function(){return this.id_
},valueOf:function(){return this.utcts_
},toString:function(){return[this.getDate(),this.getMonth()+1,this.getYear()].join(".")
},setElement:function(f){this.element_=f;
return this
},getElement:function(){return this.element_
},getStateClasses_:function(){var f,g=[];
for(f in this.states_){if(this.states_.hasOwnProperty(f)&&this.states_[f]){g.push("c2-day-s-"+f)
}}return g
},getStateClassNames_:function(){return this.getStateClasses_().join(" ")
},applyStates_:function(){if(!this.element_){return
}var h=this.element_.className;
var f=this.stateClasses_||"";
var g=this.getStateClasses_();
if(g!==f){f=f.split(" ");
if(f.length>0){h=h.replace(new RegExp(f.join("|"),"g"),"")
}if(g.length>0){h=h.replace(new RegExp(g.join("|"),"g"),"")
}h=c.trim(h)+" "+g.join(" ");
this.stateClasses_=g.join(" ");
this.element_.className=h
}return this
},addState:function(f){if(d.DAY_STATES[f]&&!this.states_[f]){this.states_[f]=true;
this.applyStates_()
}return this
},removeState:function(f){if(d.DAY_STATES[f]&&this.states_[f]){this.states_[f]=false;
this.applyStates_()
}return this
},hasState:function(f){return this.states_[f]
},getDate:function(){return this.date_
},getMonth:function(){return this.month_
},getYear:function(){return this.year_
},getFormattedDate:function(){var f=this.getDate();
if(f<10){return"&nbsp;"+f
}else{return""+f
}},isWeekend:function(f){if(f){if(this.dateObject_.getUTCDay()===6){return" c2-day-s-saturday"
}else{if(this.dateObject_.getUTCDay()===0){return" c2-day-s-sunday"
}else{return""
}}}else{return this.dateObject_.getUTCDay()===0||this.dateObject_.getUTCDay()===6
}},getHTML:function(){var g="",f=[""];
if(this.isWeekend(false)){this.addState("weekend")
}g+='<td class="c2-day ';
g+=this.getStateClassNames_();
if(booking.track.getVariant("YdVQCLBMRSYNCKfXFGbGWZFO")){g+=this.isWeekend(true)
}g+='" data-id="'+this.id()+'">';
g+='<span class="c2-day-inner">';
g+=this.getFormattedDate();
g+="</span>";
g+="</td>";
return g
}})
}(booking,booking.tools,booking.calendar2,$));
(function(g,a,f,c,b){function d(){var h=f.today();
return h
}function e(){var h=f.today();
h.setFullYear(h.getFullYear()+1);
h.setDate(0);
return h
}f.defaults={startDate:d(),endDate:e(),defaultDate:null,sundayFirst:false,direction:"ltr",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],dayNames:["Mo","Tu","We","Th","Fr","Sa","Su"],monthsVisible:2,monthWidth:261,monthHeight:210,borderWidth:1,extraClasses:"",title:"",mode:"single_date",lazy:false,closeButton:false,onDayClick:function(j,h,i){},onDaySelected:function(j,h,i){},onRangeSelected:function(i,k,j,h){},onLazyInitiated:function(h){}}
}(booking,booking.tools,booking.calendar2,$));
(function(e,a,d,c,b){d.Month=function(f,h,g){this.calendar_=g;
this.month_=h;
this.year_=f;
this.utcts_=Date.UTC(f,h,1,0,0,0,0);
this.id_="M"+this.utcts_
};
c.extend(d.Month.prototype,{id:function(){return this.id_
},valueOf:function(){return this.utcts_
},setElement:function(f){this.element_=f
},getElement:function(){return this.element_
},setOffset:function(f){if(this.element_){this.element_.setAttribute("data-offset",f)
}this.offset_=f
},setPosition:function(f){if(this.element_){this.element_.style.left=f+"px"
}},getOffset:function(){return this.offset_
},getHeight:function(){if(!this.height_){this.height_=c(this.getElement()).find(".c2-month-table").height()
}return this.height_
},getMonth:function(){return this.month_
},getYear:function(){return this.year_
},getTitle:function(){var h="",f=this.getYear(),g=this.getMonth();
if(typeof this.calendar_.options.monthTitle==="function"){h=this.calendar_.options.monthTitle(f,g)
}if(!h){h=this.calendar_.options.monthNames[g]+" "+f
}return h
},getHTML:function(){var o=this.getMonth(),n=this.getYear(),g=d.getNumberOfDaysInMonth(o,n),f=1,m=new Date(n,o,1).getDay(),l="";
if(!this.calendar_.options.sundayFirst){m=(m+6)%7
}l+='<div class="c2-month" style="width:'+this.calendar_.options.monthWidth+'px;" data-id="'+this.id()+'">';
l+='<table class="c2-month-table">';
l+="<thead>";
l+='<tr class="c2-month-header"><th colspan="7" class="c2-month-header-monthname">'+this.getTitle()+"</th></tr>";
l+="<tr>";
for(var k=0;
k<=6;
k++){l+='<td class="c2-month-header-dayname">';
l+=this.calendar_.options.dayNames[k];
l+="</td>"
}l+="</tr>";
l+="</thead>";
l+="<tbody>";
l+="<tr>";
for(var k=0;
k<9;
k++){for(var h=0;
h<=6;
h++){if(f<=g&&(k>0||h>=m)){l+=this.calendar_.createDay(n,o,f,this.calendar_).getHTML();
f++
}else{l+="<td></td>"
}}if(f>g){break
}else{l+="</tr><tr>"
}}l+="</tr>";
l+="</tbody>";
l+="</table>";
l+='<div class="c2-month__separator"></div>';
l+="</div>";
return l
}})
}(booking,booking.tools,booking.calendar2,$));
(function(e,a,d,c,b){c.fn.calendar2=(function(){d.Controller_=function(){this.instances_=[]
};
d.Controller_.prototype.createCalendar=function(k,l){var j=new d.Calendar(k,l);
this.addCalendar(j);
return j
};
d.Controller_.prototype.addCalendar=function(j){this.instances_.push(j);
return j
};
d.Controller_.prototype.getCalendars=function(){return this.instances_
};
d.Controller_.prototype.each=function(k){if(typeof k==="function"){for(var j=0;
j<this.instances_.length;
j++){if(k.call(this.instances_[j],this.instances_[j])===false){break
}}}return this.instances_
};
function i(k){var j="";
if(k==="calendar2"){j=""
}else{if(k.indexOf("calendar2-")>=0){j=k.replace("calendar2-","");
j=g(j)
}}return j
}function g(j){return j.toLowerCase().replace(/-(.)/g,function(l,k){return k&&k.toUpperCase()||l
})
}function h(m){var l={};
var k;
for(var j in m){if(m.hasOwnProperty(j)){k=i(j);
if(k){l[k]=m[j];
k=""
}}}return l
}var f=d.controller=new d.Controller_();
return function(l,k){if(l==="all"){return f.getCalendars()
}else{if(l==="each"){return f.each(k)
}else{if(l==="show"){return f.each(function(){this.show()
})
}else{if(l==="hide"){return f.each(function(){this.hide()
})
}else{var j=l;
return this.each(function(){var n=c(this),m=n.data(),o=m.calendar2;
if(!o){f.createCalendar(n,c.extend({},d.defaults,j,m))
}else{o.setOptions(j)
}})
}}}}}
}());
c(function(){c(".calendar2").calendar2()
})
}(booking,booking.tools,booking.calendar2,$));