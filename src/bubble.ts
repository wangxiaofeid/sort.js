/* 冒泡排序 */
export default function bubble(arr: Array<any>) {
  let low = 0;
  let high = arr.length - 1;
  let tmp, j;
  while (low < high) {
    for (j = low; j < high; ++j) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]; arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
　　--high;
　　for (j = high; j > low; --j) {
  　　　if (arr[j] < arr[j - 1]) {
    　　tmp = arr[j]; arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
  　　}
　　}
　　++low;
　}
　return arr;
}