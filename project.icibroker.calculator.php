<html lang="en">
<head>
<!-- // ICIBroker - Land Tax Calcuator 
Ver:		0.1a (Initial Prototype)
Author: 	Ross Ladd [ross@myrealdesign.com]
Date:		April 28th, 2014
Copyright:	© 2014 MyRealDesign.com
-->
<meta charset="UTF-8">
<title>ICIBrokers.com - Land Tax Calculator</title>
<link rel="stylesheet" href="css/site.css">
<link rel="stylesheet" href="css/style.css">
<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,900,300' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="js/project.icibroker.calculator.js"></script>
<head>
</head>
<body>

<div id="calcWrapper">
	<form name="landTax" id="landTax">
	<div class="calcRow">
		<div class="calcColumn">
			<img src="images/ICI-Logo_Web.jpg" />
		</div>
	</div>

	<div class="calcTitle outer-mrp-container1">
	<h3>Toronto Real Estate Board</h3>
	<h4>Commercial Land Transfer Tax Calculator</h4>
	</div>

	<div class="calcRow">
		<div class="calcColumn">
			<div class="calcPrice"><input id="price" type="text" maxlength="12" autofocus value="Enter Value" onkeyup="doCalc(event);" /><input type="button" value="Go!" onclick="doCalc();" /></div>
			<div class="calcMessage"><input id="message" class="message" type="text" value="" readonly /></div>
		</div>
	</div>

	<div class="calcRow">
		<div class="calcColumn">
                	<h4>Provincial Land Transfer Tax</h4>
                	<div class="calcInput"><input class="label" id="pltt" type="text" readonly /></div>
			<div class="calcSub">PLTT Amount</div>
        	</div>

		<div class="calcColumn">
                	<h4>Toronto Land Transfer Tax</h4>
                	<div class="calcInput"><input class="label" id="tltt" type="text" readonly /></div>
			<div class="calcSub">TLTT Amount</div>
        	</div>

		<div class="calcColumn">
                	<h4>Total Land Transfer Tax</h4>
                	<div class="calcInput"><input class="label" id="totalTax" type="text" readonly /></div>
			<div class="calcSub">PLTT + TLTT Amount</div>	
        	</div>
	</div>
	</form>
</div>

<div class="calcDisclaimer">Note to users: While TREB endeavours to ensure the accuracy of the calculations, it is not guaranteed.</div>

</body>
</html>
