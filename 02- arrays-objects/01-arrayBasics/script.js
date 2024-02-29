// DİZİLER!!!
/*
let x;
const numbers = [12, 45, 33, 29];

// su sekilde de dizi olusturabılırız
const fruits = new Array('Apple', 'Banana');

x = numbers.length; // dızıdekı eleman sayısını ogrenmek

numbers[0] = 10; // sonradan eleman sayısını degıstırme


// dizideki eleman sayısını bilmeden dizinin sonuna yenı eleman eklemek ıcın bunu yapıyorum :
fruits[fruits.length] = 'blueberry';

console.log(fruits);
*/
/*
const arr = [34, 55, 95, 20];
// dizinin sonuna eleman eklemek ıcın push kullanıyoruz
arr.push(31);

// sondan eleman almak ıstıyosak pop metotu kullanılır
arr.pop();
//basa eleman eklemek ıstıyorsak ;
arr.unshift(10);
// bastan eleman cıkartmak ıstıyorsak ;
arr.shift();
// diziyi tersine cevırmek ıcın reverse kullanılır
arr.reverse();
// bir elemanın dizide olup olmadıgını kontrol etmek ıcın includes metotu kullanılır
let x;
x = arr.includes(21);
// bir degerın ındex degerını bulmak ıcın ındexOf metotu kullanılır
console.log(x);
*/

// ############## nesting concat spread operators
/*
let x;
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];
// dizi icine dizi eklıyoruz ;
//fruits.push(berries);

// dizileri birlestırmek ıstersek eger concat yontemını kullanabiliriz
x = fruits.concat(berries);

// bunun dıger bır yolu da spread operatoru (...)
x = [...fruits, ...berries];
// bir objenın dızı olup olmadıgını kontrol etmek ıcın isArray metotunu kullanırız
let y;
y = Array.isArray(fruits); // bize true yada false degerını donecektır

console.log(y);
*/

// ########### DİZİLER İLE İLGİLİ SORU
/*
const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);
*/

//########### Object literals
let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
};

x = person.name;

console.log(x);

// JSON DOSYA TURUNE DONUSTURME ISLEMI
// JSON.stringify();   >> metotu json dosyasına donusturme ıslemını yapar
