/**
 * Lớp ký tự "[]" khớp với bất kỳ ký tự nào nằm giữa dấu ngoặc vuông, thứ tự trong dấu ngoặc vuông không quan trọng
 * ex: [12]Kun - Khớp với bất kỳ ký tự nào có "1" hoặc "2" và theo sau bởi "Kun"
 * Các phần trong [] luôn được coi là ex: [.], trong regex thì "." đại diện cho tất cả các ký tự nhưng khi nó được đặt trong [] nó chỉ được coi là dấu chấm "."
 */

const characterSet = /[12]Kun/g;
const str1 =
  "Xin chào bạn Kun, số báo danh của bạn là 1Kun, 2Kun hay là 321Kun";
const str2 = "Xin chào Kun";
const test1 = characterSet.test(str1); //true
const test2 = characterSet.test(str2); //false
console.log({ test1, test2 });

const matches = str1.match(characterSet);
console.log({ matches });
