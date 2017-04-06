
document.write("-------------------------Shape One ------------------------------------"+"<br>");
document.write("-----------------------------------------------------------------------"+"<br>");
for(var k=0 ;k<=5 ; k++){
for(var j=5 ;j>k ; j-- ){
document.write("- ");
}

for(var j=0 ;j<=k ; j++ ){
document.write("*");
}
for(var j=1 ;j<=k ; j++ ){
document.write("*");
}
document.write("<br> ");

}
for(var j=1 ;j<=5 ; j++ ){

for(var m=1 ;m<=j ; m++ ){
document.write("- ");
}
for(var x=j ;x<=4 ; x++ ){
document.write("*");
}
for(var x=j ;x<=5 ; x++ ){
document.write("*");
}
document.write("<br>");

}
document.write("-------------------------Shape two ------------------------------------"+"<br>");
document.write("-----------------------------------------------------------------------"+"<br>");
for(var n=1 ;n<=5 ; n++ ){

for(var m=1 ;m<=n ; m++ ){
document.write("*");
}
document.write("<br>");

}
document.write("-------------------------Shape three ------------------------------------"+"<br>");
document.write("-----------------------------------------------------------------------"+"<br>");
for(var q=5 ;q>=1 ; q-- ){

for(var s=1 ;s<=q ; s++ ){
document.write("*");
}
document.write("<br>");

}