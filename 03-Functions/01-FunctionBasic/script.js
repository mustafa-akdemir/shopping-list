function sayHello() {
  console.log('sayHello fonksıyonu calıstırıldı');
}

sayHello(); //olusturdugumuz fonksyion calıstırıldı

function add(num1, num2) {
  console.log(num1 + num2);
}

add(12, 20);

// arrow function yazımı ;

const ekle = (a, b) => {
  return a + b;
};

console.log(ekle(1, 2));
// bu arrow func ise bir fonksiyon türüdür

// su yolla da daha da kısa yazılabılır
const substract = (a, b) => a - b;
console.log(substract(4, 2));

function getCelcius(f) {
  const celcius = ((f - 32) * 5) / 9;
  return celcius;
}
console.log(getCelcius(40));

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return `Min = ${min}  ,  max = ${max}`;
}

console.log(minMax([1, 2, 3, 4, 5, 6]));

((length, width) => {
  const area = length * width;
  const output = `The are : ${area}`;
  console.log(output);
})(5, 10);

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid Operator';
  }
  console.log(result);
  return result;
}

calculator(12, 10, '/');
