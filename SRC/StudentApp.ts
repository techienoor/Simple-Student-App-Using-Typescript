// Student App - A Simple TypeScript App
interface Student {stID : number , stName : string};

let stData : Student [];
stData = <[]>[]; // Initialise to an empty array

let position : number = -1;
// Add Function
function doAdd(): void {
	document.getElementById("message").innerHTML = "";
	
	let idString : string;
	idString = (<HTMLInputElement> document.getElementById("studentId")).value;
	
	let id : number =  parseInt(idString); //convert idString to number
	if (isNaN(id)){
		document.getElementById("message").innerHTML = "ID must be a number";
	return;
	}
	
	let name : string = (<HTMLInputElement> document.getElementById("studentName")).value;
	if (name == ""){
		document.getElementById("message").innerHTML = "Student name must be entered.";
		return;
	}
	//add id and name to stData
	stData[stData.length] = {stID : id , stName : name};
	position++; // for doPrev and doNext functions
	console.log(stData);
}
// doPrev function
function doPrev () : void {
	document.getElementById("message").innerHTML = "";
	if (position <= 0) {//check if we are at the beginning of the array
		document.getElementById("message").innerHTML = "There is no previous student";
		return;
	}
	position--;
	(<HTMLInputElement> document.getElementById("studentId")).value = "" + stData[position].stID;
	(<HTMLInputElement> document.getElementById("studentName")).value = stData[position].stName;
}

// doNext function
function doNext () : void {
	document.getElementById("message").innerHTML = "";
	if (position == stData.length-1) {//check if we are at the end of the array
		document.getElementById("message").innerHTML = "There is no next student";
		return;
	}
	position++;
	(<HTMLInputElement> document.getElementById("studentId")).value = "" + stData[position].stID;
	(<HTMLInputElement> document.getElementById("studentName")).value = stData[position].stName;
}

// doDelete function

function doDelete () : void {
	document.getElementById("message").innerHTML = "";
	if (position < 0) {//check if the array is empty  if (stData.length==0)
		document.getElementById("message").innerHTML = "The list is empty";
		return;
	}
	// delete the array element at the current position
	stData.splice(position,1);
	if (stData.length == position) position--;
	(<HTMLInputElement> document.getElementById("studentId")).value = "" + stData[position].stID;
	(<HTMLInputElement> document.getElementById("studentName")).value = stData[position].stName;
}