//SOAL NOMOR 1
for(var rows1=1; rows1<=5; rows1++){
    console.log('*');    
}
console.log('');

//SOAL NOMOR 2
var rows2 = 5;

for (var i=1; i<= rows2; i++){ 
    var asterisks="";
    for (var j=1; j<=rows2; j++){
    asterisks+='*';     
    }
    console.log(asterisks);    
}
console.log('');

//SOAL NOMOR 3
var rows3 = 5;
var asterisks3='';
for (var i = 1; i <= rows3; i++) {
    asterisks3 = asterisks3+ '*';
    console.log(asterisks3);
}

console.log('');
//SOAL NOMOR 3 MENGGUNAKAN NESTED LOOP
for (var i=1; i<=5; i++){
    var asterisks4='';
    for (var j=1; j<=i; j++){
    asterisks4=asterisks4+'*';
    }
    console.log(asterisks4);
}
console.log('');

//SEGITIGA SIKU2 TERBALIK
var col = 5;
for(var i=1; i<=col; i++){
    var asterisks5='';
    for(var j=col; j>=i; j--){
        asterisks5+='*';
    }
    console.log(asterisks5);
}