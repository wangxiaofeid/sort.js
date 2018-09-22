/* 计数排序 */
export default function counting(arr: Array<any>) {
  let len = arr.length,
    B = [],
    C: Array<any> = [],
    min = arr[0],
    max = arr[0];

  for (let i = 0; i < len; i++) {
    min = min > arr[i] ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
    C[arr[i]] = C[arr[i]] ? C[arr[i]] + 1 : 1;
  }

  for (let j = min; max > j; j++) {
    C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
  }
  for (let k = len - 1; k >= 0; k--) {
    B[C[arr[k]] - 1] = arr[k];
    C[arr[k]]--;
  }
  return B;
}