console.log("==========TASK R==========");
/*
Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.
*/

function calculate(str: string): number {
  const numbers = str.split(" + ");
  const sum = numbers.reduce((sum, num) => sum + Number(num), 0);
  return sum;
}
console.log(calculate("1 + 3"));
console.log(calculate("7 + 3"));

console.log("==========TASK Q==========");
/*
Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos
kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi
uchun 'true' natijani qaytarmoqda


*/
function hasProperty(obj: object, str: string): boolean {
  for (let key in obj) {
    if (key === str) {
      return true;
    }
  }
  return false;
}
console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
console.log(hasProperty({ name: "BMW", model: "M3" }, "age"));
console.log(hasProperty({ name: "BMW", model: "M3" }, "name"));

console.log("==========TASK P==========");

/*

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

*/

function objectToArray(obj: object): [string, any][] {
  const array: [string, any][] = [];
  for (let [key, value] of Object.entries(obj)) {
    array.push([key, value]);
  }
  return array;
}
console.log(objectToArray({ a: 10, b: 20 }));

console.log("==========TASK O==========");

/*

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.

*/

function calculateSumOfNumbers(arr: any[]) {
  let sum = 0;
  for (let value of arr) {
    if (typeof value === "number") {
      sum += value;
    }
  }
  return sum;
}
console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

console.log("==========TASK N==========");

/*

Shunday function yozing, u string qabul qilsin va
string palindrom yani togri oqilganda ham, orqasidan
oqilganda ham bir hil oqiladigan soz ekanligini aniqlab
boolean qiymat qaytarsin.

MASALAN: palindromCheck("dad") return true;
palindromCheck("son") return false;

*/

function palindromCheck(str: string) {
  const reverse = str.split("").reverse().join("");
  return str === reverse;
}

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false
console.log(palindromCheck("mom")); // true

console.log("==========TASK M==========");

/*

Shunday function yozing, u raqamlardan tashkil topgan
array qabul qilsin va array ichidagi har bir raqam uchun
raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan
object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3])
return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

*/

function getSquareNumbers(arr: number[]) {
  return arr.map((ele: number) => ({
    number: ele,
    square: ele * ele,
  }));
}
console.log(getSquareNumbers([1, 2, 3, 4]));

/*
console.log("==========TASK L==========");



Shunday function yozing, u string qabul qilsin

va string ichidagi hamma sozlarni chappasiga yozib

va sozlar ketma-ketligini buzmasdan stringni qaytarsin.

MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc!";

*/

/*
function reverseSentence(str: string): string {
  let words: string[] = str.split(" ");

  let result: string[] = words.map((ele: string): string => {
    return ele.split("").reverse().join("");
  });

  return result.join(" ");
}

console.log(reverseSentence("we like coding!"));

*/
