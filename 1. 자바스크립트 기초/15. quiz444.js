// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다. 2,13line
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.



var number = Math.floor(Math.random()*100)+1;
// console.log(number);


while(true){
    var user = +prompt(`값을 입력하시오`);

    if(number>user){
        console.log('down');
    }else if (number < user){
        console.log('up');
    }else (user ===number){
        console.log('정답'); break;
    }
}