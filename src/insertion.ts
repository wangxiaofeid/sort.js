/* 插入排序 */
import { compare } from './tools';

export default function insertion(arr: Array<any>, key?: string) {
  const compareFun = compare(key);

  for (let i = 1; i < arr.length; i++) {
    let item = arr[i];
    let j = i - 1;
    while (arr[j] !== undefined && compareFun(arr[j], item)) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = item;
  }
  return arr;
}