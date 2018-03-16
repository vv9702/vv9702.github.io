document.getElementById("btnSave").onclick =function(){
    //alert("ok");
    lastName =document.getElementById("ln").value;
    firstName =document.getElementById("fn").value;
    phoneNumber =document.getElementById("phone").value;
}

table = document.getElementById("mytable");
tr = document.getElementById("tr");
td1 = document.getElementById("td");
td2 = document.getElementById("td");
td3 = document.getElementById("td");

td1.innerText =lastName;
td1.innerText =firstName;
td1.innerText =phoneNumber;

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

/*tr.innerHTML = "<td>" + lastName + "</td>";
tr.innerHTML = "<td>" + firstName + "</td>";
tr.innerHTML = "<td>" + phoneNumber + "</td>";*/
table.appendChild(tr)