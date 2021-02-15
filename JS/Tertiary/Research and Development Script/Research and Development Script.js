function AddRow() {
   // Get ID for table from HTML file
   var table = document.getElementById("table");
   // Count number of columns in table
   var columnNumber = document.getElementById("table").rows[0].cells.length;
   // Add row to last row in table
   var row = document.getElementById("table").insertRow(-1);
   // Add columns to new row matching header
   for (i = 1; i <= columnNumber; i++) {
    // Create Input field in table
    var newInput = document.createElement("INPUT");
    newInput.classList.add("TableInput");
    row.insertCell(0).appendChild(newInput);
  }
 }
 function DeleteRow() {
    // Get ID for table from HTML file
    var table = document.getElementById("table");
    // Count number of rows in table
    var rowCount = table.rows.length;
    // Prohibit header from being deleted
    if (table.rows.length > 1) {
    table.deleteRow(rowCount - 1);
    }
 }
/* Add different types of input field to every column
const tb = document.getElementById("tb");
const columnNumber = document.querySelectorAll("#table thead tr th").length - 2;
const inp = '<td><input type="number" placeholder="Raw Good Number" class="TableInput"/></td>';
let cnt = 1;
document.getElementById("add").addEventListener("click",() => {
  tb.innerHTML += `<tr>
    <td><input type="text" value="${cnt++}" /></td>
    ${[...Array(columnNumber).keys()].map(i => inp).join("")}
  </tr>`
})
*/

/* Add input field to every column
   for (i = 1; i <= columnNumber; i++) {
     // Create Input field in table
     var newInput = document.createElement("INPUT");
     newInput.placeholder = "Enter Text Here";
     newInput.classList.add("TableInput");
     row.insertCell(0).appendChild(newInput);
   }
*/
