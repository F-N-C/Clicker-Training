var cookies = 1;

function cookieClick(number){
  cookies = cookies + number;
  document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 11;

function buyCursor(){
  var cursorCost = Math.floor(10*Math.pow(1.1,cursors));
  if (cookies >= cursorCost){
    cursors = cursors + 1;
    cookies = cookies - cursorCost:
    document.getElementById("cookies").innerHTML = cookies;
    document.getElementById("cursors").innerHTML = cursors;
  };
  var nextCost = Math.floor(10*Math.pow(1.1,cursors));
  document.getElementById("cursorCost").innerHTML = nextCost;
};

window.setInterval(function(){
  cookieClick (cursors);
}, 1000);
