/* 选择排序 */
import { compare } from './tools';

export default function selection(arr: Array<any>, key?: string) {
  let len = arr.length,
      minIndex, 
      temp;
  const compareFun = compare(key);
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (compareFun(arr[minIndex], arr[j])) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}