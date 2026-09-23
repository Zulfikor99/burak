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
