console.log("==========TASK T==========");

/*
Shunday function tuzing, u sonlardan tashkil topgan
2'ta array qabul qilsin.Va ikkala arraydagi sonlarni
tartiblab bir arrayda qaytarsin.
MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib,
tartib raqam bo'yicha tartiblab qaytarmoqda.
*/

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2).sort((a, b) => a - b);
}
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

console.log("==========TASK S==========");

/*
Shunday function yozing, u numberlardan tashkil topgan
array qabul qilsin va osha numberlar orasidagi tushib qolgan
sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2
*/

function missingNumber(arr: number[]): number {
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] + 1 !== sortedArr[i + 1]) {
      return sortedArr[i] + 1;
    }
  }
  return -1;
}
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 3, 5, 2, 7, 8, 1]));

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
