// ***string
const firstName = 'Sara';

// ***number(js de diger diller gibi int float double gibi seyler yok hepsi number olarak gecıyor)
const age = 30; // burada typeof yaparsam number olarak degıskenın verı turunu ogrenebılırım
const temp = 98.9; // burada float olmasına ragmen typeof yaptıgımda yıne number veri tipi alırım

// ***Boolean
const hasKids = true; // typeof yaptıgımızda veri turu boolean olarak karsimiza gelir

// *** NULL ;
const aptNumber = null; // buna typeof yaptıgımızda ıse object veri tipi bize verir cunku null bir nesne degildir , bir referans turu degıldır

// *** Undefined; // yazılmıs ama karsısına deger atanamamıs durumlara verılen ısımdır
//let score; // typeof yaptıgımda veri turu undefined olarak bize doner.
// const ıle kullanmak ıstersek eger sunu yapabilirz
const score = undefined;
// const ile yaptıgımızda direkt undefined olarak karsısına atamak zorundayız !

// *** Symbol
const id = Symbol('id');
// *** BigInt
// bu verı turu cok buyuk sayılarda kullanılır !
const output = id;
// veri turunu almak ıcın typeof metotunu kullanıyorum
console.log(output, typeof output);
