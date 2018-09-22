/* 冒泡排序 */
import { compare } from './tools';

export default function bubble(arr: Array<any>, key?: string) {
  let low = 0;
  let high = arr.length - 1;
  let tmp, j;
  const compareFun = compare(key);
  while (low < high) {
    for (j = low; j < high; ++j) {
      if (compareFun(arr[j], arr[j + 1])) {
        tmp = arr[j]; 
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
　　--high;
　　for (j = high; j > low; --j) {
  　　　if (compareFun(arr[j - 1], arr[j])) {
    　　tmp = arr[j]; arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
  　　}
　　}
　　++low;
　}
　return arr;
}