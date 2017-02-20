var submit_b = document.getElementById("submit");
var mood_s = document.getElementById("the_slider");
var sleep = document.getElementById("sleep");
var checkbox = document.getElementById("switch");
var drink = document.getElementById("drink")

//Post code inspired by http://stackoverflow.com/questions/24468459/sending-a-json-to-server-and-retrieving-a-json-in-return-without-jquery
submit_b.onclick = function(e) {
    var obj = {mood: mood_s.value, sleep: sleep.value, cause: checkbox.value, drinks: drink.value};
    xhr = new XMLHttpRequest();
    var url = "http://houndstooth.cs.northwestern.edu:49494";
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(obj))
};
