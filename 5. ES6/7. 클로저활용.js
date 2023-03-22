
// 즉시실행함수      (정의)(호출)
// const increase = (function(a) {})()

// const increase = (() => {
//     let count=0;
//     return() => ++count;
// })();

// const decrease = (() => {
//     let count=0;
//     return() => --count;
// })();

// console.log(increase);
// console.log(increase);
// console.log(decrease);
console.log('=========================================================');
function counterClosure() { //increse, decrease 값을 둘다 입력해야함

    let count =0;

    function increase() {
        return ++count;
    }
    function decrease(){
        return --count;
    }

    return {                    //return값이 1여야되는데 2개이니까 { }해서 작성, key, value값이 같으니가 하나만 작성해도됨
        increase: increase,
        decrease: decrease
    };
}
    //객체(return값들)
const counter = counterClosure();

const increase = counter.increase;
const decrease = counter.decrease;

console.log(increase);
console.log(increase);
console.log(decrease);


    //즉시실행
const counter = (() => { //화살표함수로 바꾸기

    let count =0;

    const increase=() => ++count;
    
    const decrease=()=>--count;

    return {                    
        increase: increase,
        decrease: decrease
    };
})();

const {increase, decrease }= counter;

console.log(increase()); // 1
console.log(increase()); // 2
console.log(decrease()); // 1

function counterWithCbClosure(){
    let count =0;

    function process(callback) {
        return count =callback(count); //내가 count는 줄테니 너가 알아서 값을 입려갷바
    }
    return process; 
}
const counter_ =counterWithCbClosure();
                    //function은 callback 강의 3/22 10:30
console.log(counter_(function(c){ return ++count;  })); //1개 증가하는 count
console.log(counter_(function(c){ return count +=3;  }));

//화살표함수로 표현해보기
console.log(counter_((c) => ++c )); 
console.log(counter_((c) => c +=3 ));
console.log(counter_((c) => c **=2 ));


//화살표함수로 바꿔보기
const counter2_ = (() => {    
    let count = 0;
    return callback => count = callback(count);
})();

console.log(counter2_(c => ++c));    // 1
console.log(counter2_(c => c += 3)); // 4
console.log(counter2_(c => c **= 2));// 16