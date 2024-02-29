let amount = '100';
console.log(amount, typeof amount);
// suan bize bir string geldigini farzedelim bunu number a donusturmek ıstersek sunu yapmamız gerekıyor
// 1. yontem
amount = parseInt(amount);
// burada number a donusturme ıslemı tamamlanmıs olur
console.log(amount, typeof amount);

// 2. yontem
// bunun yanı sıra unary yontemı de var ornegın

// amount = +amount; yapıldıgı zaman yıne donusum ıslemı gerceklestırılır
// 3. yontem
// amount = Number(amount); ile de aynı ıslem yapılabilir

// şimdi ise sayıyı diziye donusturmenın yollarına bakalım
let amount2 = 200;
console.log(amount2, typeof amount2);

amount2 = String(amount2);
console.log(amount2, typeof amount2);

// 2. yolu ıse :
// amount2 = amount2.toString();

// ondalık sayıyı string den floata cevırmek ıcın
let amount3 = '99.5';
console.log(amount3, typeof amount3);
amount3 = parseFloat(amount3);
console.log(amount3, typeof amount3);
// floata cevirme ıslemı yapıldı eger parseInt kullansaydım sayıyı 99 a yuvarlardı ondalık sayıyı atardı bu yuzden parseFloat kullanıyorum !!!!

// boolean turune donusturmek ıcın
amount3 = Boolean(amount3);
console.log(amount3, typeof amount3);
// eger amount3 degerıne 0 versyedık bıze false donecektı !
