

//함수 정의 - 만든다 => z코드의 재사용성하기 위해, 코드의 모듈화(조각조각분리함)

function happyGreeeting(yourName) { 
    console.log(`${yourName}님 안녕하세요 방가방가`);
    console.log('즐거운 하루 되세요');
}

// function happyGreeeting(yourName) { //여러개 입력시 이게 가능한지,
//     console.log(`${yourName}님 안녕하세요 방가방가`);
//     console.log(`${day} 하루 되세요`);
// }


//함수 호출 - 사용한다

happyGreeeting('뽀로로');

function makeline(){
    console.log('===========================================')
};


makeline();

for(var i=0; i<5; i++){
    makeline();
}

//원의 넓이르 자주구한다 {원주율 * 반지름 ^ 2}
function calcAreaCircle(r) {
    var PI = 3.14159265;
    var area = PI*r**2;
    return area;
}

var r= calcAreaCircle(5);
console.log(r);