var a=+prompt("enter random numbers ")
document.write( "NUmbers:" + a+ "<br>")
document.write("Floor value:"+ Math.floor(a) + "<br>")
document.write("round off value:" + Math.round(a) +"<br>")
document.write("Ceil value:"+ Math.ceil(a) )

var b=+prompt("enter numbers between 1-10 ")

if( b>5){
    alert("Congratulation! you win")

}else{
    alert("Try Again! ")
}
var a=+prompt("Enter Negative Integer")
document.write("Number:"+ a+"<br>")
document.write("Floor Value:"+Math.floor(a) +"<br>")
document.write("Round Off Value:"+Math.round(a) +"<br>")
document.write("Ceil value:"+ Math.ceil(a)+"<br>")

var ab= +prompt("Enter any integers")
document.write("Absolute value :"+Math.abs(ab) +"<br>")
var d1=Math.random()*2
var d2=Math.random()*7
document.write("Random Dice value:"+ Math.floor(d1)+"<br>")
document.write("Random Dice value:"+Math.floor(d2)+"<br>")
var h=Math.random()*3
document.write( Math.floor(h) +"<br>" )
document.write("Random Coin value: Heads"+ "<br>")
var t=Math.random()*2
document.write(+ Math.floor(t) +"<br>")
document.write("Random Coin value:Tails" + "<br>")
var r=Math.random()*100
document.write("random number between 1 and 100:" + Math.floor(r) + "<br>")
var wt=+prompt("write your weight in kgs")
document.write("The weight of the user is:"+wt+"kgs" +"<br>  ")