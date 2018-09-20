/* 堆排序 */
export default function heap(arr: Array<any>) {
  let heapSize = arr.length, temp;
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    heapify(arr, i, heapSize);
  }
  for (let j = heapSize - 1; j >= 1; j--) {
    temp = arr[0];
    arr[0] = arr[j];
    arr[j] = temp;
    heapify(arr, 0, --heapSize);
  }
  return arr;
}
function heapify(arr: Array<any>, x: number, len: number) {
  let l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
  if (l < len && arr[l] > arr[largest]) {
    largest = l;
  }
  if (r < len && arr[r] > arr[largest]) {
    largest = r;
  }
  if (largest !== x) {
    temp = arr[x];
    arr[x] = arr[largest];
    arr[largest] = temp;
    heapify(arr, largest, len);
  }
}