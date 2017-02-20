//inspired by http://stackoverflow.com/questions/247483/http-get-request-in-javascript
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "http://houndstooth.cs.northwestern.edu:49494", false);
xmlHttp.send(null);
user_data = eval(xmlHttp.responseText);
table = document.getElementById("result_table")
for (var i=0; i<user_data.length; i++) {
    /*console.log(table.innerHTML)
    table.innerHTML = table.innerHTML+'<TR>';
    table.innerHTML = table.innerHTML+'<TD class="TD-left">'+user_data[i]['date']+'</TD>';
    table.innerHTML = table.innerHTML+'<TD class="TD-center">'+user_data[i]['time']+'</TD>';
    table.innerHTML = table.innerHTML+'<TD class="TD-center">'+user_data[i]['mood']+'</TD>';
        put cause here
    table.innerHTML = table.innerHTML+'<TD class="TD-center">'+user_data[i]['sleep']+'</TD>';
    table.innerHTML = table.innerHTML+'<TD class="TD-right">'+user_data[i]['drinks']+'</TD>';
    table.innerHTML = table.innerHTML+'</TR>';*/
    new_row = table.insertRow(i+2)
    new_data = [user_data[i]['date'], user_data[i]['time'], user_data[i]['mood'], user_data[i]['cause'],
                user_data[i]['sleep'], user_data[i]['drinks']]
    for (var j=0; j<6; j++) {
        new_cell = new_row.insertCell(j)
        new_cell.innerHTML = new_data[j]
    }
}
