/**
 * Full stop "." khớp với bất kỳ ký tự nào ngoại trừ ký tự trả về và xuống dòng(newline)
 * Nếu muốn tìm dấu "." trong chuỗi ta sử dụng "\." ex /a\.b/
 */

const fullStop = /.ar/;
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
console.log(matches.input);
// [
//     'car',
//     index: 4,
//     input: 'The car parked in the garage.',
//     groups: undefined
// ]
// matches[0] = 'car',
// matches.index = 4,
// matches.input = 'The car parked in the garage',
// matches.group = undefined
//

//match all
const fullStopGlobal = /.ar/g;
const matchesGroup = str.match(fullStopGlobal);
console.log(matchesGroup); // ['car','par','gar']
