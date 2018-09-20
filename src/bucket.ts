/* 桶排序 */
export default function bucket(arr: Array<any>, num: number = 2) {
  if (arr.length <= 1) {
    return arr;
  }
  let len = arr.length, buckets: Array<any> = [], result: Array<any> = [], min = arr[0], max = arr[0], space, n = 0;

  let index = Math.floor(len / num);
  while (index < 2) {

    num--;
    index = Math.floor(len / num);
  }

  for (let i = 1; i < len; i++) {
    min = min <= arr[i] ? min : arr[i];
    max = max >= arr[i] ? max : arr[i];
  }
  space = (max - min + 1) / num;
  for (let j = 0; j < len; j++) {
    let index = Math.floor((arr[j] - min) / space);
    if (buckets[index]) {
      let k = buckets[index].length - 1;
      while (k >= 0 && buckets[index][k] > arr[j]) {
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