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
