const _ = require('lodash');
const sort = require('../lib').default;

const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

console.log(sort.bubble(_.cloneDeep(arr)));
console.log(sort.bucket(_.cloneDeep(arr), 2));
console.log(sort.counting(_.cloneDeep(arr)));
console.log(sort.heap(_.cloneDeep(arr)));
console.log(sort.insertion(_.cloneDeep(arr)));
console.log(sort.merge(_.cloneDeep(arr)));
console.log(sort.quick(_.cloneDeep(arr)));
console.log(sort.radix(_.cloneDeep(arr), 2));
console.log(sort.selection(_.cloneDeep(arr)));
console.log(sort.shell(_.cloneDeep(arr)));