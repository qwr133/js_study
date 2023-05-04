

// function add (n1, n2){
//     var result = n1+n2;
//     return result; //탈출문 break문이 내제되어있어서 아래 코드는 실행이 안됨
//     console.log(`메롱`); //ruturn문이여서 코드실행이안됨
// }

function add(n1, n2) {
    
    return n1 + n2; // 탈출문

    console.log('메롱');
}

//반환값: 함수호출 이후에 함수밖으로 전달되는 값
var r1 = add(5,7);

add(r1, r1*2); // add(12,24)

//안쪽으로 쭉가서 실행, 같은 레벨끼리는 왼쪽부터 실행
var r2 = add(add(2, 3), add(add(3,4), add(6,2)));
console.log(`r2: ${r2}`);


//리턴이 없는 함수 (void함수) == 자바스킙트

function multi(n1, n2) {
    var result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}
//리턴없는 함수는 변수에 담아두지 말고, 다른함수에 인수로 전달x 
 multi(10,3);
// add(r3, 10); //--이거 안됨
multi(add(4,3), add(5,5));

var r4 = add(multi(3,2), 40);
console.log(`r4: ${r4}`);


//return 탈출문
function callName(nickname){

    var prohibits = ['멍청이', '병신', 'ㅅㅂ'];

    if(prohibits.includes(nickname)){
        console.log(`잘못된 닉네임은 사용할 수 없습니다`);
        return; //함수가 강제 종료됨
    }

    console.log(`${nickname}님 안녕하세요`);
}
function stopLoop() {

    while (true) {
        var flag = prompt('명령어를 입력하세요!');
        if (flag === '멈춰') {
            return; //return도 가능함 , 함수안에서 break보다 더 강력함 return 입력시 반복문포함 함수가 종료된다
                    //break는 수고용까지 돌고 종료됨
        }
        alert(flag);
    }

    alert('수고용~');
}

stopLoop();