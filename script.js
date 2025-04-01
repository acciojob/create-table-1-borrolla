function insert_Row() {
    //Write your code here
  var table = document.getElementById("sampleTable");

	//create a new row element
	var newRow = table.insertRow(0);  // Insert at the top (index 0)

	// Create the left cell with the value 'New Cell1'
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = "New Cell1";

    // Create the right cell with the value 'New Cell2'
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = "New Cell2";
	
  
}
