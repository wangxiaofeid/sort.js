/* 快速排序 */
import { compare } from './tools';

export default function quick(arr: Array<any>, key?: string) {
  if (arr.length <= 1) { 
    return arr; 
  }
  const compareFun = compare(key);
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (compareFun(pivot, arr[i])) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  let back: Array<any> = quick(left, key).concat([pivot], quick(right, key));
  return back;
}