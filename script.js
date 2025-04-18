//2.feladat
var selectedIndex=null;
var array=new Array();
function onFormSubmit() {
	if(validate()) {
		var formData=readFormData();
		if(selectedIndex==null)
			insertNewRecord(formData);
		else
			updateRecord(formData);
		resetForm();
	}
}
function readFormData() {
	var formData={};
	formData["fullName"]=document.getElementById("fullName").value;
	formData["email"]=document.getElementById("email").value;
	formData["salary"]=document.getElementById("salary").value;
	formData["city"]=document.getElementById("city").value;
	return formData;
}function insertNewRecord(data) {
	array[array.length]={"fullName":data.fullName,"email":data.email,"salary":data.salary,"city":data.city};
	printArray();
}
function printArray() {
	var table=document.getElementById("employeeList").getElementsByTagName('tbody')[0];
	table.innerHTML=" ";
	var newRow;
	for(i=0;i<array.length;i++) {
		newRow=table.insertRow(table.length);
		cell1=newRow.insertCell(0);
		cell1.innerHTML=array[i].fullName;
		cell2=newRow.insertCell(1);
		cell2.innerHTML=array[i].email;
		cell3=newRow.insertCell(2)
		cell3.innerHTML=array[i].salary;
		cell4=newRow.insertCell(3);
		cell4.innerHTML=array[i].city;
		cell4=newRow.insertCell(4);
		cell4.innerHTML='<a class="btned" onClick="onEdit('+i+')">Edit</a>'+'<a class="btndel" onClick="onDelete('+i+')">Delete</a>';
		
	}
}
function resetForm() { 
    document.getElementById("fullName").value = ""; 
    document.getElementById("email").value = ""; 
    document.getElementById("salary").value = ""; 
    document.getElementById("city").value = ""; 
    selectedIndex=null; 
}
function onEdit(index) { 
    document.getElementById("fullName").value = array[index].fullName; 
    document.getElementById("email").value = array[index].email; 
    document.getElementById("salary").value = array[index].salary; 
    document.getElementById("city").value = array[index].city; 
    selectedIndex=index; 
} 
function updateRecord(formData) { 
    array[selectedIndex].fullName=formData.fullName; 
    array[selectedIndex].email=formData.email; 
    array[selectedIndex].salary=formData.salary; 
    array[selectedIndex].city=formData.city; 
    printArray(); 
} 

function onDelete(index) { 
    if (confirm('Are you sure to delete this record ?')) { 
        array.splice(index, 1); 
        resetForm(); 
        printArray(); 
    } 
} 
 
function validate() { 
    isValid = true; 
	if (document.getElementById("fullName").value == "") { 
        isValid = false; 
		document.getElementById("fullNameValidationError").classList.remove("hide"); 
    } else { 
	isValid = true; 
	   if (!document.getElementById("fullNameValidationError").classList.contains("hide")) 
            document.getElementById("fullNameValidationError").classList.add("hide"); 
    } 
		if (document.getElementById("email").value == "") { 
        isValid = false; 
		document.getElementById("fullNameValidationError").classList.remove("hide"); 
    } else { 
	isValid = true; 
	   if (!document.getElementById("fullNameValidationError").classList.contains("hide")) 
            document.getElementById("fullNameValidationError").classList.add("hide"); 
    }
		if (document.getElementById("salary").value == "") { 
        isValid = false; 
		document.getElementById("fullNameValidationError").classList.remove("hide"); 
    } else { 
	isValid = true; 
	   if (!document.getElementById("fullNameValidationError").classList.contains("hide")) 
            document.getElementById("fullNameValidationError").classList.add("hide"); 
    }
		if (document.getElementById("city").value == "") { 
        isValid = false; 
		document.getElementById("fullNameValidationError").classList.remove("hide"); 
    } else { 
	isValid = true; 
	   if (!document.getElementById("fullNameValidationError").classList.contains("hide")) 
            document.getElementById("fullNameValidationError").classList.add("hide"); 
    }
    return isValid; 
}
//2.feladat
function sortTable(column) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var rows = Array.from(table.rows);
    
    var isNumeric = column === "salary";
    
    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[column].innerText.toLowerCase();
        let cellB = rowB.cells[column].innerText.toLowerCase();
        
        if (isNumeric) {
            return parseFloat(cellA) - parseFloat(cellB);
        }
        return cellA.localeCompare(cellB);
    });

    table.innerHTML = "";
    rows.forEach(row => table.appendChild(row));
}

function sortName() {
    sortTable(0);
}

function sortEmail() {
    sortTable(1);
}

function sortSalary() {
    sortTable(2);
}

function sortCity() {
    sortTable(3);
}

function filterTable() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toLowerCase();
    table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        let rowVisible = false;
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toLowerCase().includes(filter)) {
                    rowVisible = true;
                    break;
                }
            }
        }
        tr[i].style.display = rowVisible ? "" : "none";
    }
}
//3.feladat		
function bigLoop(){ 
    for (var i = 0; i <= 1000000; i += 1)   
		var j = i; 
		alert("A hosszúciklus " + j + " ismétlése lefutott" ); 
} 
function sayHello(){ 
alert("Szia Uram" ); 
   }
   
//Drag and drop api
function allowDrop(event) { 
	event.preventDefault(); 
} 
function drag(event) { 
	event.dataTransfer.setData("text", event.target.id); 
} 
function drop(event) { 
	event.preventDefault();
	var data = event.dataTransfer.getData("text");
	var draggedElement = document.getElementById(data);
	if (event.target.id === "div1" || event.target.closest("#div1")) {
        event.target.appendChild(draggedElement);
    } 
} 
//canvas
function drawShape(){ 
	var canvas = document.getElementById('mycanvas'); 
	if (canvas.getContext){ 
		var ctx = canvas.getContext('2d'); 	 
		ctx.fillRect(25,25,100,100);
		ctx.clearRect(45,45,60,60); 
		ctx.strokeRect(50,50,50,50); 
	} 
	else  
	alert('Your browser doesnt support Canvas.'); 
	
} 

//4.feladat
window.addEventListener("load", function () {
    const table = document.getElementById("numberTable");
    const ctx = document.getElementById("lineChart").getContext("2d");
    let chart = null;

    Array.from(table.querySelectorAll("tr")).forEach((row, rowIndex) => {
        row.addEventListener("click", () => {
            const values = Array.from(row.querySelectorAll("td")).map(td => Number(td.innerText));
            const labels = values.map((_, i) => `Oszlop ${i + 1}`);

            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: `Sor ${rowIndex + 1} adatai`,
                        data: values,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: true },
                        title: { display: true, text: 'Vonaldiagram - Táblázat sorai alapján' }
                    }
                }
            });
        });
    });
});	