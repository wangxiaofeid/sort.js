// 通用工具
export function compare(key?: string) {
  if (key) {
    return (item1: any, item2: any) => {
      return item1[key] > item2[key];
    };
  } else {
    return (item1: any, item2: any) => {
      return item1 > item2;
    };
  }
}

export function getValue(key?: string) {
  if (key) {
    return (item: any) => {
      return item[key];
    };
  } else {
    return (item: any) => {
      return item;
    };
  }
}