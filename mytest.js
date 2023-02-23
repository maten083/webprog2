console.log("something write in js");
console.log("whatever");
console.log("whatever");
var x = "something in x";
var y = "something in y";
var z = "something in z";
var zs = "something in zs";
var dzs = "dzs is a letter";
console.log(x +', '+ y + ", " + z + "," + zs);
console.log("new branch statement");

var button = document.querySelector("button");
//console.log(button);
let born = document.getElementById("born").value;

button.onclick = function (e){
    e.preventDefault();
    if(born.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)){
        //To be continue...
    }

}