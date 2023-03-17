// 1. 첫번재 숫자를 입력!
// 4입력
// 두번째 숫자를 입력!
// 7입력

// 결과는 4~7까지의 누적합 22


var x = +prompt('첫번째 숫자를 입력!') //+입력 꼭하기
var y = +prompt('두번쨰 숫자를 입력!')

if(x>y){
    //swap 공식

    var t;
    t = x;
    x=y;
    x=t;
}
var total=0;
var n=x;

while(n<=y){ 
    total += n;

    n++; 

}

alert(`결과는 ${x}~${y}까지의 누적합: ${total}` )

// / x ~ y까지의 누적합
var x = +prompt('첫번째 숫자를 입력!')
var y = +prompt('두번째 숫자를 입력!')

var total = 0;
var n = x;

while (n <= y) {
    // 반복 코드
    total += n;

    n++;
}
console.log(`${x} ~ ${y}까지의 누적합: ${total}`);