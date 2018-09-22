const _ = require('lodash');
const sort = require('../lib').default;

const arr = [{
  id: 6,
  name: '6-0'
}, {
  id: 3,
  name: '3-1'
}, {
  id: 8,
  name: '8-2'
}, {
  id: 4,
  name: '4-3'
}, {
  id: 3,
  name: '3-4'
}, {
  id: 6,
  name: '6-5'
}, {
  id: 4,
  name: '4-6'
}, {
  id: 3,
  name: '3-7'
}, {
  id: 2,
  name: '2-8'
}]

function toString(arr) {
  return arr.map(i => i.name).join(',')
}

console.log(toString(sort.bubble(_.cloneDeep(arr), 'id')));

console.log(toString(sort.bucket(_.cloneDeep(arr), 2, 'id')));

// 不稳定
console.log(toString(sort.heap(_.cloneDeep(arr), 'id')));

console.log(toString(sort.insertion(_.cloneDeep(arr), 'id')));

console.log(toString(sort.merge(_.cloneDeep(arr), 'id')));

// 不稳定
console.log(toString(sort.quick(_.cloneDeep(arr), 'id')));

// 不稳定
console.log(toString(sort.selection(_.cloneDeep(arr), 'id')));

// 不稳定
console.log(toString(sort.shell(_.cloneDeep(arr), 'id')));