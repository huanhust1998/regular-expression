/**
 * Negated character set [^ ] phủ định bộ ký tự
 * Bình thường ^ sẽ là bắt đầu của 1 chuỗi, nhưng sau khi nó đứng sau ngoặc vuông mở [^] nó sẽ phủ định
 * Ex: [^ c]ar: các biểu thức không chưa "c" và có "ar"
 * 
 */

const fullStop = /[^c]ar/g;
const str = "The car parked in the garage.";

//test
const test = fullStop.test(str);
if (test) {
  console.log("Chuỗi khớp với biểu thức chính quy");
} else {
  console.log("Chuỗi không khớp");
}

//match
const matches = str.match(fullStop);
console.log(matches); // ['par', 'gar']

