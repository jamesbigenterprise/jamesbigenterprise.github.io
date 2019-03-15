/*************************************************
* Mortgage Calculatot
* Thiago alves
* Comments: I had the logig ready for the whole 
* program but I was not able to express it in 
* JavasCript on the due time
* My bigges problem were the functions that were 
* supposed to return a simple number like 0 or -1
* but I was receiveing undefined or Nan 
* Parsing to int didn't work along with a dozen 
* other failed attempts
**************************************************/
console.log("starting");
function handleForm()
{
	document.getElementById("apr").onblur = function ()
	{validate(document.getElementById("apr"));}
	document.getElementById("term").onblur = function ()
	{validate(document.getElementById("term"));}
	document.getElementById("amount").onblur = function ()
	{validate(document.getElementById("amount"));}
	//document.getElementById("aprTool").onfocus = function ()
	//{toolTip(document.getElementById("aprTool"));} 
	//document.getElementById("calculate").onclick = 	
}
function submitIt()
	{
	   return calc();
	}
function displayError(data, format)
{
   var display = document.getElementById("errorD");
   display.style.display = "block";
   display.innerHTML = format;
   data.focus();
}
function eraseError()
{
   var display = document.getElementById("errorD");
   display.style.display = "none";
}

/***************************************************
* Calc
* This function should validate the input and 
* calculate the payment
* It was not finished because it is not receiving
* the correct values crom the "validate()" function
******************************************************/
function calc()
{
   if(validate(document.getElementById("apr")) &&
	   validate(document.getElementById("term")) &&
	   validate(document.getElementById("amount")))
   {
	   alert("its valid miseravi");
      //var payment = (amount.value *(apr.value/12))/ (1-Math.pow(1+apr.value/12, term.value * 12));
	  //document.getElementById("payment").value = payment;
	  return true;
	}
	else
	{
	   alert("not valid sir");
	   return false;
	}
        	
}	
	
/***************************************************
* toolTip
* This function changes the class of the toolTip
* to unhide the instructions for each field
******************************************************/	
function toolTip(obj)
{
   document.getElementById("aprTool").className = "clickinput";
}

//Check if the number is in the range
function validNumber (exp, obj)
{
  if (obj.value <= exp)
    return 0;
  else
    return -1;
}

//Check if th number is in the correct format 00.00
//And if it is in the specified range
function formatRange (number,exp, obj)
{
  if (number == 0)
    return validNumber(exp, obj);
  else
    return -1;
}

//Validate the data
function validate(data)
{ 
  switch(data.id)
  {
	  case "apr":
	    var result = data.value.search(/[0-2]*[0-9]*\.[0-9][0-9]$/);
		var valid = formatRange(result,25.00,data);
		if(valid == 0)
		{
			eraseError();
			return true;	
		}
		else
			displayError(data, "* Insert a floating number in the format 0.00 from 00.00 to 25.00");
			return false;
		    
	  break;
	  case "term":
	    var result = data.value.search(/[0-4]*[0-9]$/);
        var valid = formatRange(result,40,data);
		if(valid == 0)
		{
			eraseError();
			return true;	
		}
		else
			displayError(data, "*Insert a number from 0 to 40");
			return false;
	  break;
	  case "amount":
	    var valid = data.value.search(/[0-9]+\.\d\d$/);
		if(valid == 0)
		{
			eraseError();
			return true;	
		}
		else
			displayError(data, "* Insert a amount in the format 234567.90");
			return false;
	  break;
  }
}