//SOAL NOMOR 1
console.log('LOOPING PERTAMA');
var nomerMaju=2;
while(nomerMaju<=20){
    console.log(nomerMaju+' - I Love Coding!');
    nomerMaju+=2;
}
console.log('');

console.log('LOOPING KEDUA');
var nomerMundur=20;
while(nomerMundur>=0){
    console.log(nomerMundur+' - I will become fullstack developer!');
    nomerMundur-=2;
}
console.log('');


//SOAL NOMOR 2
console.log('LOOPING PERTAMA');
for(angkaMaju = 1; angkaMaju <= 20; angkaMaju++){
    console.log(angkaMaju+' - I love coding!');
}
console.log('');
console.log('LOOPING KEDUA');
for(angkaMundur = 20; angkaMundur >= 0; angkaMundur--){
    console.log(angkaMundur+' - I will become fullstack developer');
}

console.log(' ');

//SOAL NOMOR 3
//GANJIL GENAP
console.log('LOOP GANJIL GENAP');
for (var i=1; i<=100; i++){
    if (i%2 == 0){
        console.log(i+' adalah angka GENAP')
    } else {
        console.log(i+' adalah angka GANJIL');
    }
}
console.log('');

//Counter 2
console.log('LOOP KELIPATAN 3 DENGAN COUNTER 2');
for(var j=1; j<=100; j+=2){
    if(j%3 == 0){
        console.log(j+' KELIPATAN 3');   
    } else {
        console.log('');  
    }
}
console.log('');

//Counter 5
console.log('LOOP KELIPATAN 6 DENGAN COUNTER 5');
for(var k=1; k<=100; k+=5){
    if(k%6 == 0){
        console.log(k+' KELIPATAN 6');   
    } else {
        console.log('');  
    }
}
console.log('');

//Counter 9
console.log('LOOP KELIPATAN 10 DENGAN COUNTER 9');
for(var l=1; l<=100; l+=9){
    if(l%10 == 0){
        console.log(l+' KELIPATAN 10');   
    } else {
        console.log('');  
    }
}