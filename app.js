function rez() {
var num1 = parseInt(document.getElementById('n1').value);
var num2 = parseInt(document.getElementById('n2').value);
var result = num2 / num1;

document.getElementById('out').innerHTML = result.toFixed(7);

}