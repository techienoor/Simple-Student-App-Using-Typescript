;
var stData;
stData = []; // Initialise to an empty array
var position = -1;
// Add Function
function doAdd() {
    document.getElementById("message").innerHTML = "";
    var idString;
    idString = document.getElementById("studentId").value;
    var id = parseInt(idString); //convert idString to number
    if (isNaN(id)) {
        document.getElementById("message").innerHTML = "ID must be a number";
        return;
    }
    var name = document.getElementById("studentName").value;
    if (name == "") {
        document.getElementById("message").innerHTML = "Student name must be entered.";
        return;
    }
    //add id and name to stData
    stData[stData.length] = { stID: id, stName: name };
    position++; // for doPrev and doNext functions
    console.log(stData);
}
// doPrev function
function doPrev() {
    document.getElementById("message").innerHTML = "";
    if (position <= 0) { //check if we are at the beginning of the array
        document.getElementById("message").innerHTML = "There is no previous student";
        return;
    }
    position--;
    document.getElementById("studentId").value = "" + stData[position].stID;
    document.getElementById("studentName").value = stData[position].stName;
}
// doNext function
function doNext() {
    document.getElementById("message").innerHTML = "";
    if (position == stData.length - 1) { //check if we are at the end of the array
        document.getElementById("message").innerHTML = "There is no next student";
        return;
    }
    position++;
    document.getElementById("studentId").value = "" + stData[position].stID;
    document.getElementById("studentName").value = stData[position].stName;
}
// doDelete function
function doDelete() {
    document.getElementById("message").innerHTML = "";
    if (position < 0) { //check if the array is empty  if (stData.length==0)
        document.getElementById("message").innerHTML = "The list is empty";
        return;
    }
    // delete the array element at the current position
    stData.splice(position, 1);
    if (stData.length == position)
        position--;
    document.getElementById("studentId").value = "" + stData[position].stID;
    document.getElementById("studentName").value = stData[position].stName;
}
