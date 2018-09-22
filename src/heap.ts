/* 堆排序 */
import { compare } from './tools';

export default function heap(arr: Array<any>, key?: string) {
  let heapSize = arr.length, temp;
  const compareFun = compare(key);
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    heapify(arr, i, heapSize, compareFun);
  }
  for (let j = heapSize - 1; j >= 1; j--) {
    temp = arr[0];
    arr[0] = arr[j];
    arr[j] = temp;
    heapify(arr, 0, --heapSize, compareFun);
  }
  return arr;
}
function heapify(arr: Array<any>, x: number, len: number, fun: Function) {
  let l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
  if (l < len && fun(arr[l], arr[largest])) {
    largest = l;
  }
  if (r < len && fun(arr[r], arr[largest])) {
    largest = r;
  }
  if (largest !== x) {
    temp = arr[x];
    arr[x] = arr[largest];
    arr[largest] = temp;
    heapify(arr, largest, len, fun);
  }
}