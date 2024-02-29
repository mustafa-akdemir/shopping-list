// DEGISKEN ATAMALARI
// uc tane atama yontemı vardır = var , const , let
// var genel olarak eskiden kullanılırdı , let ise blok ıcınde tanımlanan degerler ıcın gecerlı olur, const ile degıskeni tekrar atama yapamayacagımız sadece metotlarla veya farklı yollarla degıskenı degıstırebıldıgımız values tarzıdır.
let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);
// let ile yukarıda age yı yanına yazamıyorum nedenı ıse
// parantez ıcınde sadece bır degısken turunu kabul edıyor
// -----
var age = 30;
console.log(age);

// --------------Declare multiple values at once(birden fazla deger atama)

let a, b, c;
// atama yapmadan let ile bunu yapabilirim

const d = 10,
  e = 20,
  f = 30;
// const ile de birden fazla atamam yapabilirim fakat bu degerlerı anında atamam gerekir bu const un ozellıgıdır !
console.log(d);
a = 15;
console.log(a); // let i sonradan bu sekılde de atayabilrz
