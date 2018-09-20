const sort = require('../lib').default;

console.log(sort.bubble([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
console.log(sort.bucket([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
console.log(sort.counting([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
console.log(sort.heap([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
console.log(sort.insertion([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
console.log(sort.merge([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
console.log(sort.quick([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
console.log(sort.radix([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48], 2));
console.log(sort.selection([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
console.log(sort.shell([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));