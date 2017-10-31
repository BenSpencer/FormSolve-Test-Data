function checkinValidation(){
	if(document.checkinForm.depcity.value == "XXX"){
		alert("please select a departure city");
		document.checkinForm.depcity.focus();
		return false;
	}else if(document.checkinForm.confirmcode.value == "" && document.checkinForm.milesnum.value == ""){
		alert("please enter either a confirmation code or your A+ Rewards number");
		document.checkinForm.confirmcode.focus();
		return false;
	}
	
	document.checkinForm.submit();
}
