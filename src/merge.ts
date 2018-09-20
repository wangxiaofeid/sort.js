
/* 归并排序 */
function mergeSort(left: Array<any>, right: Array<any>) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

export default function merge(arr: Array<any>) {
  let len = arr.length;
  　　if (len < 2) {
    　　　　return arr;
  　　}
  let middle = Math.floor(len / 2),
    　　left = arr.slice(0, middle),
    　　right = arr.slice(middle);
  let back = mergeSort(merge(left), merge(right));
  return back;
}