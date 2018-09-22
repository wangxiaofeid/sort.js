/* 归并排序 */
import { compare } from './tools';

function mergeSort(left: Array<any>, right: Array<any>, fun: Function) {
  let result = [];
  while (left.length && right.length) {
    if (fun(left[0], right[0])) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

export default function merge(arr: Array<any>, key?: string) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  const compareFun = compare(key);
  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  let back = mergeSort(merge(left, key), merge(right, key), compareFun);
  return back;
}