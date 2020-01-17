function ping(host, port, pong) {

  var started = new Date().getTime();

  var http = new XMLHttpRequest();

  http.open("GET", "http://" + host + ":" + port, /*async*/true);
  http.onreadystatechange = function() {
    if (http.readyState == 4) {
      var ended = new Date().getTime();

      var milliseconds = ended - started;

      if (pong != null) {
        pong(milliseconds);
      }
    }
  };
  try {
    http.send(null);
  } catch(exception) {
    // this is expected
  }

}
function flicker(isTrue){
  if (isTrue == true){
    document.getElementById("flicker").innerHTML = ">_|";
    isTrue=!isTrue
  }
  else if (isTrue==false){
    document.getElementById("flicker").innerHTML = ">_";
    isTrue=!isTrue
  }
}
function time(){
 var today = new Date();
  var hourNow = today.getHours();
  var minuteNow = today.getMinutes();
  var secondNow = today.getSeconds();
  var milNow = today.getMilliseconds();
  
  document.getElementById("time").innerHTML = "Last login at: " + hourNow + ':' + minuteNow + ':' + secondNow;
}
time()
ping("localhost", "3000", function(m){ document.getElementById("3000").innerHTML = "~guest$ Localhost:3000: "+m+" miliseconds"}) 
ping("localhost", "9292", function(m){ document.getElementById("9292").innerHTML = "~guest$ Localhost:9292: "+m+" miliseconds"}) 
ping("localhost", "", function(m){ document.getElementById("localhost").innerHTML = "~guest$ Localhost: "+m+" miliseconds"}) 

//var isTrue=true
//var intervalID = window.setInterval(flicker(isTrue), 1000);
var text = [">_ |",">_ s",">_ su",">_ sud",">_ sudo",">_ sudo ",">_ sudo k",">_ sudo ki",">_ sudo kil",">_ sudo kill",">_ sudo kill ",">_ sudo kill ",">_ sudo kill a",">_ sudo kill al",">_ sudo kill all","","~guest$ sudo kill all"];
var counter = 0;
var elem = document.getElementById("flicker");
var inst = setInterval(change, 150);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    clearInterval(inst); 
    document.getElementById("abort").innerHTML="Successfully killed "+getRandomInt(5, 230)+" tasks"
    var text1 = [">_",">_ |"];
  var counter1 = 0;
  var elem1 = document.getElementById("flicker2");
  var inst1 = setInterval(change1, 500);

  function change1() {
    elem1.innerHTML = text1[counter1];
    counter1++;
    if (counter1 >= text1.length) {
      counter1 = 0;
    
    // uncomment this if you want to stop refreshing after one cycle
    }
  }

    // uncomment this if you want to stop refreshing after one cycle
  }
}
