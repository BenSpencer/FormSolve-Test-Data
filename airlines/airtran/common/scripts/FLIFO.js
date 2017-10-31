function submit_FL_Form()
{
	gForm = document.FLform;

	var result = false;
	var origCity = gForm.orig.options[gForm.orig.selectedIndex].value;
	var destCity = gForm.dest.options[gForm.dest.selectedIndex].value;

	if (gForm.txtFlight.value != '')
	{
		result = true;
	}

	if ( (origCity != 'XXX') && (destCity != 'XXX') )
 	{
		result = true;
	}

	if (result == false)
	{
		alert("\nPlease select cities of origin and destination\nor enter a flight number.\n");
	}
	else
	{
		gForm.submit();
	}
		
}