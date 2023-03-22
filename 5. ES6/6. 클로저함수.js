

//자바스크립트의 함수는 함수를 리턴할 수 있음
/*
function calculator(n1, n2){

    function add(){
        return n1 + n2;
    }
        return add;
}
*/    //위 코드와 동일 : const calculator = (n1, n2) => () => n1+n2;

/*
function calculator(n1, n2){

    const add = function add(){  
        return n1 + n2           
    }; //함수표현식에는 ; 붙여야함
        return add;
}
  

const zzz = calculator(10,20);
console.log(typeof zzz);

const n= zzz();
console.log(`n: ${n}`); 
*/


let count =0 ; //카운팅변수 (전역변수) => 중간에 변수를 선언하게되면 출력값이 변경되기 때문에 좋은방법은 아님

//카운트 올리는 함수
const increase = () => ++count;

console.log(increase());
console.log(increase());

count =999;

console.log(increase());

console.log('====================================================');

const increase1 = () => {
  let count =0; //지역변수
  return ++count;
};

console.log(increase1()); //1찍히고 메모리가 죽어버려서 계속 1로 출력됨 => 카운트의 상태를 유지할 수 없다
console.log(increase1());
console.log(increase1());
console.log('====================================================');
                                                          //아래 공부하고 이후에 다시 작성해보기
const increase4 =(function()  { //function 생략가능
  let count1 =0;
  return() => ++count1;
})();
console.log('====================================================');
// 전역변수와 지역변수를 단점을 줄이기 위해 클로저 함수가 나옴!

const increaseClosure = () => { //ex 리모콘 틀 (회로가 변경되지 않게 )
  let count =0; //지역변수
  return () => ++count; //생략부분 3/22 1교시(9:30)

};

const increase3 = increaseClosure();// 카운트 도구를 받는 것


console.log(increase3()); //리모콘의 버튼 하나씩이라고 생각하면 됨
console.log(increase3());

count=999; //전역변수처럼 반영되지 않음
console.log(increase3());


console.log('====================================================');

//즉시실행함수 => 만들자마자 정의와 동시에 호출 => 이름이 없음(재활용X)
const result = (function(n1, n2) {
    return n1+n2;
})(5,8);

console.log(result);



