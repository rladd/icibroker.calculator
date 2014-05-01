function doCalc(event) {

	// Obtain the form objects
	var objInput	= document.getElementById('price');
	var objPLT	= document.getElementById('pltt');
	var objTLT	= document.getElementById('tltt');
	var objTotal	= document.getElementById('totalTax');
	var objMessage	= document.getElementById('message');

	// Track the event which triggered this function
	var e = event;
        var key = e.which || e.keyCode;

	// If this is the DEL key and the field is empty, we need to clear the totals
        if ((key == 8) && (objInput.value == '')) {
		clearField(objPLT);
		clearField(objTLT);
		clearField(objTotal);
        }

	// Verify form input
	if (parseFloat(objInput.value)) {

		// Perform Caclulations
		if (objInput.value <= 55000) { 
			objPLT.value = objInput.value * 0.005; 
			objTLT.value = objInput.value * 0.005;
		} 
		else if (objInput.value > 55000) { 
 
			if (objInput.value < 250000.01) {
				objPLT.value = (55000 * .005) + ((objInput.value - 55000) * 0.01);
				objTLT.value = (55000 * .005) + ((objInput.value - 55000) * 0.01);
			} else if (objInput.value > 40000000.01){
				objPLT.value=(55000 * .005)+((250000 - 55000) * 0.01) + ((objInput.value - 250000)*.015);
				objTLT.value = (55000 * 0.005) + ((400000 - 55000) * 0.01) + ((40000000-400000) * 0.015)+ ((objInput.value - 40000000) * 0.01);
			} else if (objInput.value < 400000.01) {
				objPLT.value = (55000 * .005) + ((250000 - 55000) * 0.01) + ((objInput.value - 250000) * 0.015);
				objTLT.value = (55000 * .005) + ((objInput - 55000) * 0.01);
			} else {
				objPLT.value = (55000 * .005) + ((250000 - 55000) * 0.01) + ((objInput.value - 250000) * 0.015);
				objTLT.value = (55000 * .005) + ((400000 - 55000) * 0.01) + ((objInput.value - 400000) * 0.015);
			}

		}

		// Check for invalid numbers (NaN)
		if ((objPLT.value == 'NaN') || (objInput.value == '')) { objPLT.value = '0.00'; }
		if ((objTLT.value == 'NaN') || (objInput.value == '')) { objTLT.value = '0.00'; }

		// Calculate the total
		objTotal.value = '$' + numberWithCommas( Number(parseFloat(objPLT.value).toFixed(2)) + Number(parseFloat(objTLT.value).toFixed(2)) );
                objPLT.value = '$' + numberWithCommas(parseFloat(objPLT.value).toFixed(2));
                objTLT.value = '$' + numberWithCommas(parseFloat(objTLT.value).toFixed(2));

                // Clear the message
                objMessage.value = '';

	} else if (objInput.value == '') {
		objMessage.value = '';
		objPLT.value = ''; 
                objTLT.value = ''; 
		objTotal.value = '';
	} else {
		objMessage.value = 'Invalid price';
	}
} 

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function selectField(objField) {
	if (objField.value == 'Enter Value') {
		objField.select();
	}
}
function clearField(objField) {
	//objField.value = '0.00';
}
