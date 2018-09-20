/* 快速排序 */
export default function quick(arr: Array<any>) {
  if (arr.length <= 1) { return arr; }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  let back: Array<any> = quick(left).concat([pivot], quick(right));
  return back;
}