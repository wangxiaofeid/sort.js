/* 桶排序 */
import { compare, getValue } from './tools';

export default function bucket(arr: Array<any>, num: number = 2, key?: string) {
  if (arr.length <= 1) {
    return arr;
  }
  let len = arr.length, 
      buckets: Array<any> = [], 
      result: Array<any> = [], 
      min = arr[0], 
      max = arr[0], 
      space, 
      n = 0;
  const compareFun = compare(key);
  const getValueFun = getValue(key);
  let index = Math.floor(len / num);
  while (index < 2) {
    num--;
    index = Math.floor(len / num);
  }

  for (let i = 1; i < len; i++) {
    min = compareFun(min, arr[i]) ? arr[i] : min;
    max = compareFun(arr[i], max) ? arr[i] : max;
  }
  space = (getValueFun(max) - getValueFun(min) + 1) / num;
  for (let j = 0; j < len; j++) {
    let index = Math.floor((getValueFun(arr[j]) - getValueFun(min)) / space);
    if (buckets[index]) {
      let k = buckets[index].length - 1;
      while (k >= 0 && compareFun(buckets[index][k], arr[j])) {
        buckets[index][k + 1] = buckets[index][k];
        k--;
      }
      buckets[index][k + 1] = arr[j];
    } else {
      buckets[index] = [];
      buckets[index].push(arr[j]);
    }
  }
  while (n < num) {
    result = result.concat(buckets[n]);
    n++;
  }
  return result;
}