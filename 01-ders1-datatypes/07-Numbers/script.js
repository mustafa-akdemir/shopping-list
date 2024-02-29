// math objects
let x;
let y;
x = Math.sqrt(9); // 9 un karekokunu alır sonuc 3 tur
x = Math.abs(-5); // mutlak deger alır
x = Math.round(4.2); // yuvarlama ıslemını yapar 4 e yuvarlr
// yuvarlamak ıcın dıger metotlar :
// ceil : yukarı yuvarlar or : 4.2 => 5
// floor : asagı yuvarlar or : 4.7 => 4
x = Math.pow(2, 3); // üs alma işlemini yapar
x = Math.random(); // random bır sayı uretir

// 1 ile 100 arasında random sayı belırlemek ıcın
x = Math.floor(Math.random() * 100 + 1);
// 1 ile 50 arasında random sayı olusturmak ıstersek eger:
y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
const sumOutPut = `${x} + ${y} = ${sum}`;
console.log(sumOutPut);
