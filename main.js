var cookies = 0;
var cursors = 0:

function cookieClick(1){
  cookies = cookies + 1;
  document.getElementById("cookies").innerHTML = cookies;
}

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
