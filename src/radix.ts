/* 基数排序 */
export default function radix(arr: Array<any>, maxDigit: number) {
  let mod = 10,
      dev = 1,
      counter: Array<any> = [];
  for (let i = 0; i < maxDigit; i++ , dev *= 10, mod *= 10) {
    for (let j = 0; j < arr.length; j++) {
      let bucket = parseInt(((arr[j] % mod) / dev).toString());
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      let value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}