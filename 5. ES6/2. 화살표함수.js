
//함수선언문 방식
function multi(n1, n2){
    return n1*n2;
}

//함수 표현식
const multi = function(n1, n2) { //값임으로 끝에 세미콜론 필수
    return n1*n2;
};

//화살표함수 
const multi = (n1, n2) => n1* n2;

const r1 = multi(10,3);
console.log(`r1 : ${r1}`);


// function sayHello(){
//     console.log('안녕하세요');
// }

const sayHello1 = function() {
    console.log('안녕하세요');
}

const sayHello= ()=>  console.log('안녕하세요'); //이렇게 사용가능

const kim = {
    name: 김철수,
    age : 33,
    // greeting:sayHello
    greeting: multi,
    dance : () =>     console.log('춤을 신나게 춥니다'),
    
}

kim.dance();
// console.log(kim.greeting(5,3));


// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는 화살표함수 pow를 작성해보기

const pow = (n) =>  n**2 ;
console.log(pow(4));

//함수선언문과 함수표현식(화살표함수)의 차이
console.log('=====================================');

function sub(n1, n2){
  return n1-n2;
}
sub(20, 10) //선언문 아래 위치에서 호출이 됨(호이스팅 문제도 알아서 해결 가능)
console.log(`r2 : ${r2}`);


//함수표현식은 (이름없는 함수 포함) 호이스팅 문제가 안되고, 순차적으로 일처리가 해야 가능함
//59번 라인 주석해제하고 코드 돌리면 오류발생(주석해제했을 때 동일코드는 주석시켜야함)
// const r3 = divide(30, 6);
const divide = (n1, n2)=> n1/n2;
const r3 = divide(30, 6);

console.log(`r3: ${r3}`);