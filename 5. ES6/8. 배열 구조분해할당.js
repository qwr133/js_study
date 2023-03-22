

const userNames= ['김철수', '강감찬', '박영희'];
const [kim, kang, park] = userNames;
console.log(kim);
console.log(kang);
console.log(park);

const [firstObj] = [{id :1}, {id: 2},{id: 3}]
                    .filter(obj=>obj.id>=2);

console.log(firstObj);

//변수교환하기
let first = 10, second =20;
           //<---------------
[second, first] = [first, second];
//  <-----------------
console.log(first);
console.log(second);

//앞에 2개 변수에 각각 넣고 나머지는 다시 배열로 묶고싶다
const numbers = [1,3,5,7,9,11];

const[one, three, ...others] = numbers; 
//원본은 변하지 않는 상태에서 하단의 코드가 하나로 정리됨

console.log('--------------------------------');

// const copyNumbers = number.slice(); //카피본 생성

// const one = copyNumbers.shift();
// const three = copyNumbers.shift();
// const others= copyNumbers;

// console.log('===============');
// console.log(one);
// console.log(three);
// console.log(others);
// console.log(numbers);

//스프레드로 배열 간편복사 (slice() 랑 같음) --ES6에서 자주사용하는 문법
console.log('====================================');

const foods = ['감튀', 'DQPC', '징거버거'];
// const copyFoods = foods // 주소복사

const copyFoods = [...foods]; //실제 데이터 복사 //배열을 유사배열로 만들때도 이렇게 사용함

console.log(copyFoods);