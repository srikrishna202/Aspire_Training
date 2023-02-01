console.log("haii first js code")
var a,b,c;
a=2;
b=4
console.log(c=a/b);
function add() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;

    var sum = parseInt(a) + parseInt(b);
    alert(sum);
  }

  function greetMe(){
    var a=document.getElementById('fname').value;
    alert("hello "+ a);
}
function getMonthName() {
    var mo=document.getElementById('month_no').value;
    mo--;
    const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
  if (months[mo]) {
    alert(months[mo]);
  } else {
    alert("invalid number")
  }
}
