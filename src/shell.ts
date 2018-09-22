/* 希尔排序 */
import { compare } from './tools';

export default function shell(arr: Array<any>, key?: string) {
  let len = arr.length,
      temp,
      gap = 1;
  const compareFun = compare(key); 
  while (gap < len / 5) {
    gap = gap * 5 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i];
      let j = i - gap;
      for (; j >= 0 && compareFun(arr[j], temp); j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}