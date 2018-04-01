/* phonejs.js*/

var pb = new Array();

function removeRow(r){ 
    var i=r.parentNode.parentNode.rowIndex;
    document.getElementById('insertTable').deleteRow(i);
    pb.splice(i-1,1);
}

function updateTable(p){
    mytable = document.getElementById('insertTable');
    row = mytable.insertRow(mytable.rows.length);

    cell1 =row.insertCell(0);
    cell2 =row.insertCell(1);
    cell3 =row.insertCell(2);
    cell4 =row.insertCell(3);

    cell1.innerHTML = '<td>'+p.lastName+'</td>';
    cell2.innerHTML = '<td>'+p.firstName+'</td>';
    cell3.innerHTML = '<td>'+p.phoneNumber+'</td>';
    cell4.innerHTML = '<td>'+'<button id="btnDel" onclick="removeRow(this);">Del</button>'+'</td>';
}

function lnSort(){
    mytable = document.getElementById('insertTable');
    row = mytable.insertRow(mytable.rows.length);

    pb.sort(function(a, b) { // 오름차순
        return a.lastName < b.lastName ? -1 : a.lastName > b.lastName ? 1 : 0;
    });
    
    for(var i =1; i<=pb.length; i++){
        var x = mytable.rows[i].cells;
        x[0].innerHTML=pb[i-1].lastName;
        x[1].innerHTML=pb[i-1].firstName;
        x[2].innerHTML=pb[i-1].phoneNumber;
        x[3].innerHTML='<td>'+'<button id="btnDel" onclick="removeRow(this);">Del</button>'+'</td>';
    }
}

function fnSort(){
    mytable = document.getElementById('insertTable');
    row = mytable.insertRow(mytable.rows.length);

    pb.sort(function(a, b) { // 오름차순
        return a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0;
    });
    
    for(var i =1; i<=pb.length; i++){
        var x = mytable.rows[i].cells;
        x[0].innerHTML=pb[i-1].lastName;
        x[1].innerHTML=pb[i-1].firstName;
        x[2].innerHTML=pb[i-1].phoneNumber;
        x[3].innerHTML='<td>'+'<button id="btnDel" onclick="removeRow(this);">Del</button>'+'</td>';
    }
}

function phoneSort(){
    mytable = document.getElementById('insertTable');
    row = mytable.insertRow(mytable.rows.length);

    pb.sort(function(a, b) { // 오름차순
        return a.phoneNumber < b.phoneNumber ? -1 : a.phoneNumber > b.phoneNumber ? 1 : 0;
    });
    
    for(var i =1; i<=pb.length; i++){
        var x = mytable.rows[i].cells;
        x[0].innerHTML=pb[i-1].lastName;
        x[1].innerHTML=pb[i-1].firstName;
        x[2].innerHTML=pb[i-1].phoneNumber;
        x[3].innerHTML='<td>'+'<button id="btnDel" onclick="removeRow(this);">Del</button>'+'</td>';
    }
}

document.getElementById("btnSave").onclick=function(){
    // table 삭제 후 배열 입력으로 대체
    var p = new Object();   // DataBase 사전 준비
    p.lastName = document.getElementById("ln").value;
    p.firstName = document.getElementById("fn").value;
    p.phoneNumber = document.getElementById("phone").value;

    pb.push(p);

    updateTable(p);
}

function Check(){
    mytable = document.getElementById('insertTable');
    var val = document.getElementById('cb1').value;
    var input;
    for(var i=1;i<=pb.length;i++){
        input = mytable.rows[i].cells[0].innerHTML;
        if(input == val){
            mytable.rows[i].cells[0].innerHTML="<td><mark>"+val+"</mark></td>";
        }
    }
}