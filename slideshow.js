

function getJSON(url) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, false);
    httpRequest.send(null);
    return httpRequest.responseText;
}

function getInfo() {
    console.log(JSON.parse(getJSON("https://vjp2018-e7f58.firebaseio.com/.json")));
    return JSON.parse(getJSON("https://vjp2018-e7f58.firebaseio.com/.json"));
}


var purjo = getInfo();
var slideshow = document.getElementById("uutiset");
slideshow.innerHTML = purjo.news[0].content;
//document.getElementById("slideshow").innerHTML=getInfo[0].content;