


var x =10; //전역변수 : 프로그램의 전체영역에서 사용 가능

//매개변수도 지역스코프를 가짐(z)
function foo() {
    console.log(`지역변수 x 선언전 : ${x}`);
    console.log(x);
    var y=20+x; //지역변수(함수 안에서 만든 변수) : 해당 함수 안에서만 사용 가능 = 수명이 매우 짧음
    console.log(y);

    var x= '홍길동';  //(var x; x='홍길동 이렇게 자동으로 바꿈(JS경우) 그러고 8번라인쪽에 var x;로 선언이 됨 그래서 선언전이 undefined가 나옴)
                    //내가 생각한 대로 선언전 x=10, 선언 후 홍길동을 원한다면 홍길동 앞에 변수타입 var를 삭제해야함 (호이스팅문제)
    console.log(`지역변수 x 선언후 : ${x}`); //x값을 찾을때 지역범위안에서(1순위) 찾음 -> 지역에 없으면 전역에서 찾음

    return y; //상황에 봐서 return 작성 (언제?)
}

// console.log(y);
foo(); //출력 후 지역변수 안에서 코드들은 다 죽음(수명)

console.log(`함수 호출 후 x의 값 : ${x}`); //그래서 지역변수 안에 내용이 없으니 전역변수의 값을 불러옴

console.log('-----------------------------------------------');

function outer(m) {
    var n = 'outer local n';
    var v = 'outer local v';

    console.log(m); //m이 지역스코프라 param이 우선순위가 더 높음
    console.log(n);
    console.log(v);

    //헬퍼함수 : 호출이 함수 내부로 제한됨 -> 지역안에서만 확인 가능하고 바깥쪽에선 확인이 불가능함(내부로 숨겨서 개발자 의도대로 쓸 수 있는 함수)
    function inner(){//outer 내부에 있기떄문에 사용 가능
        console.log(n);
        var m = 'inner local m'
        var n = 'inner local v'
        console.log(m); //가까운게 먼저임으로 둘다 inner local m,v로 나옴

        console.log(v);
    }
    inner();
}

var m = 'global m';

outer('outer pram m');