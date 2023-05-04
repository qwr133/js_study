// const increase = () => {
//     let num = 0; // 상태변수를 지역변수 처리
//     return ++num;
// };

// console.log(increase());
// console.log(increase());
// console.log(increase()); // 3?


// const increaseClosure = () => {

//     let num = 0; // 상태변수 (지역변수)

//     function increase() {
//         return ++num;
//     }
//     return increase;
// };


// const increase = increaseClosure();

// console.log(increase());
// console.log(increase());
// console.log(increase()); // 3? OK!!

const increase = (() => {
    let num = 0;
    return () => ++num;
})();

console.log(increase());
console.log(increase());
console.log(increase());

nfn, fof