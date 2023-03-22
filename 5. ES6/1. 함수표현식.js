
/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.

    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 일급 객체라 할 수 있다.
 */


//함수 선언문
function add(n1, n2){
    return n1+n2;
}


const plus = add; //add라는 함수를 plus에 넣어버리기 (호출하는 것이 아님) => function: add로 출력됨
// 위 add; 코드랑 add(5,6)-> plus가 14로 출력됨 완전다른코드

const r1 = plus(10,20);
console.log(`r1 : ${r1}`);

//무명함수 생성 : 함수 리터럴(값)= 이름없이 함수 만들어도됨
    //함수를 변수에 넣어도 가능함, 호출시 sub로 호출하면 됨
const sub = function (n1, n2){
    return n1-n2;
}; //리터럴(값)임으로 뒤에 세미콜론이 붙음

sub(10,20);



const Arr= [10, 'hello', true, {}, [], add, function() { //{}객체, [] 배열 => 함수도 가능!!(변수나 자료구조에 저장가능)
 
    console.log('메롱'); }
];
Arr[6]();


const dog = {
    name : '초코',
    kind : '푸들',
    
    //메서드 - 객체 안에 포함된 함수 => 단독호출X
    bark : function() {
        console.log('왈왈!')
    } 
}

// bark(); //단독호출이되지 않음
dog.bark(); // . 붙으면 메서드, 안붙으면 함수


const cat = {
    name : '야옹이',
    kind : '블랙러시안',
    sleep: function() {
        console.log('쿨쿨 zzz');
    }
}

// cat.bark(); //에러경고
cat.sleep(); 