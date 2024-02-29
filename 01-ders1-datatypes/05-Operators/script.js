// 1. arıthmetıc  opeartors
let x;

x = 5 + 5;
// 5-5 , 5*5, 5/5
// mod almak ıcın ıse 5 % 5 ( mod islemlerinde % kullanlr)

x = 7 % 5; // 7 nın 5 e bolumunden kalan 2 dir

// *** CONCATENATİON işlemi (birleştirme islemi)

x = 'Hello' + ' Mustafa'; // ıkı strıngı yan yana koyar
// **** ÜS ALMA İŞLEMİ
x = 2 ** 3; // 2 uzerı 3 ıslemı yapar yanı sonuc 8 dir
// *** Increment (arttırma ıslemı)
x++; // kullanarak sayıyı 1  arttırabılırız -- koyarsak ta azaltabiliriz

// degerlendırme operatorlerı
x = 2 == 2; // x esittir 2 ye ise true doner ama burada
x = 2 == '2'; // bu sonuca yıne true verır cunku "==" operatoru degısken turune bakmaz ancak üc tane === operatoru hem degerı degerlendırır hem de veri türünü degerlendırır
x = 2 === 2; // burada true doner ancak string yaptıgımızda
x = 2 === '2'; // burada false degerını alırız !!!
// hata cıkmasın dıye genellıkle === kullanmak daha faydalıdır

//****************TYPE COERCİON */
let y;
y = 5 + '5'; // verı donusumu yapmadan dırekt toplarsak 55 yazar ve verı turu string olarak gecer
y = 5 + Number('5'); // burada ise 10 yazar ve veri turu de Number olarak gecer.

y = 5 * '5'; // fakat carpma ıslemını bu sekılde kullanırsak number veri turunu alırız sonucta 25 olur nedenı ise string turunun * ile bir ozellıgı olmamasıdır.

console.log(y, typeof y);
