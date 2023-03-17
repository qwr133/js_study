//************상수값은 대문자로 */

//사용자는 게임 시작전에 낭이도를 설정 가능
// 난이도는 상중 하 중에 난이도가 존재하며
// 난이도 별 입력 횟수 제한이 다르다




var flag = confirm('게임을 다시 하시겠습니까?'); //취소 눌렀을 시 whie (true 값이 나타남)
console.log(flag);


while(true){
var HIGH =1, MIDDLE = 2, LOW=3;

//사용자 초기 입력 기회
var INIT_COUNT = 5;

while(true){
var level = +prompt(`난이도를 선택하세요 \n# [1. 상(3번의 기회)...]`)
if(level===high){
    INIT_COUNT =3;
}else if (level===MIDDLE){
    INIT_COUNT=5;
}else if (level===LOW){
    INIT_COUNT=10;
}else {
    alert('난이도를 숫자로 다시 입력하세요')
    continue;
}
    break;
}

//사용자 남은 입력 기회
var cnt=INIT_COUNT


// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다. --바뀌지 않음
var secret = Math.floor(Math.random()*100)+1;
// console.log(secret);

//입력최소값 최대값+++++++++++++++++++++++++++++++++++++++++++++++
var minValue=1, MaxValue=100;

//게임 종료 플래그
var gameEndFlag = false;

while(true){
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
var answer = +prompt(`${minValue}~${MaxValue}사이의 숫자를 입력하세요`);


//입력이 범위 안의 값인가?++++++++++++++++++++++++++++++++
if(answer < minValue || answer >MaxValue) {  //값을 잘못 입력한 경우를 조건식에 작성!!!!!!!!
    alert(`범위 안의 값을 입력하세요`);
    continue;
}
cnt--;
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
if(secret === answer){
    alert(`정답입니다 ${INIT_COUNT}-${cnt}번의 기회가 남았습니다`); break; //초기카운트 수 - 남은 카운트 수
}else if(secret>answer){
    alert(`up!!`);
    minValue =answer+1;
}else{
    alert(`down!!`)
    MaxValue=answer-1;
}

//추가 게임 종료 조건
if(cnt <0 ){
    alert(`실패, 정답은 ${answer}`);
    gameEndFlag= true;
    break;
}else{
    alert(`${cnt}번의 기회가 남았습니다`)




// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
} //end each game loop

if(gameEndFlag===true){
    var exitFlag = confirm('한판 더?');
    if(!exitFlag===flase){
        alert('수고하셨습니다'); break;
    }
}


// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.
} //end all game loop

// 사용자들은 입력 기회가 5번으로 제한된다. 2,13line

// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.
}



// 강의내용 3/16 2시 수업