var currentDaySelect = null;
var currentMonthSelect = null;

var monthsToShow = 9;

var calToday = new Date();
calToday.setHours(0);
calToday.setMinutes(0);
calToday.setSeconds(0);
var calLastDay = new Date(calToday);
calLastDay.setMonth(calToday.getMonth() + monthsToShow);
if (calLastDay.getMonth() < calToday.getMonth()) {
	calLastDay.setFullYear(calToday.getFullYear() + 1);
}

var calCompare = calToday.getTime();
var calLastCompare = calLastDay.getTime();

function setByValue(aSelect,aValue) {
	for (var i = 0; i < aSelect.options.length; i++) {
		if (aSelect.options[i].value == aValue) {
			aSelect.selectedIndex = i;
			return;
		}
	}
}

function isDisabled(date) {
	var dt = date.getTime();
	return (calCompare > dt) ? true : (calLastCompare < dt);
}

function selected(cal, date) {
	if (cal.dateClicked) {
		var datePieces = date.split(',');
		if (currentDaySelect) {
			setByValue(currentMonthSelect,datePieces[1]);
			updateDates(currentMonthSelect.name);
			setByValue(currentDaySelect,datePieces[0]);
			updateDates(currentDaySelect.name);
		}
		cal.callCloseHandler();
	}
}

function closeHandler(cal) {
	cal.hide();
	_dynarch_popupCalendar = null;
}

function buildCalendar() {
	if (_dynarch_popupCalendar != null) {
		_dynarch_popupCalendar.hide();
	} else {
		// create the calendar
		var cal = new Calendar(0, null, selected, closeHandler);
		
		cal.weekNumbers = false;
		cal.minMonth = calToday.getMonth();
		cal.maxMonth = (calToday.getMonth() + monthsToShow) % 12;
		
		if (cal.maxMonth > cal.minMonth) {
			// same year
			cal.setRange(calToday.getFullYear(), calToday.getFullYear());
		} else {
			cal.setRange(calToday.getFullYear(), calToday.getFullYear() + 1);    
		}
		cal.setDateStatusHandler(isDisabled);
		cal.setDateFormat('%d,%Y-%m,%H:%M');
		
		_dynarch_popupCalendar = cal;
		cal.create();
	}
}

function showCalendar(obj, daySelect, monthSelect, placement) {
	if (!placement) placement = 'Br';

	var dayValue = daySelect.options[daySelect.selectedIndex].value;
	var monthValue = monthSelect.options[monthSelect.selectedIndex].value;

	currentDaySelect = daySelect;
	currentMonthSelect = monthSelect;
	
	buildCalendar();
	
	while (obj.nextSibling) {
		obj = obj.nextSibling;
		if (obj.tagName == 'A')
			break;
	}
	
	_dynarch_popupCalendar.parseDate(dayValue + ',' + monthValue + ',09:00');	
	_dynarch_popupCalendar.showAtElement(obj, placement);
}






// day names
Calendar._DN = new Array
("Sunday",
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday",
 "Sunday");
Calendar._SDN_len = 1; // short day name length

// first day of the week
Calendar._FD = 1;

// month names
Calendar._MN = new Array
("January",
 "February",
 "March",
 "April",
 "May",
 "June",
 "July",
 "August",
 "September",
 "October",
 "November",
 "December");
Calendar._SMN_len = 3; // short month name length

// tooltips
Calendar._TT = {};
Calendar._TT["PREV_MONTH"] = "Previous month";
Calendar._TT["NEXT_MONTH"] = "Next month";
Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
Calendar._TT["TT_DATE_FORMAT"] = "%a, %b %e";
Calendar._TT["SEL_DATE"] = "";
Calendar._TT["DAY_FIRST"] = "";
Calendar._TT["WEEKEND"] = "";
Calendar._TT["CLOSE"] = "";
Calendar._TT["TODAY"] = "";
Calendar._TT["TIME_PART"] = "";
Calendar._TT["WK"] = "";
Calendar._TT["TIME"] = "";


