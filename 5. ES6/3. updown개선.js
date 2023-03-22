


//2. 난이도를 선택하는 기능
function selectGameLevel() {

  //3. const, let 끌어오기
  const HIGH =1, 
        MIDDLE = 2, 
        LOW=3;

//사용자 초기 입력 기회
let INIT_COUNT


  while(true){
    const level = +prompt(`난이도를 선택하세요 \n# [1. 상(3번의 기회)...]`)

    if(level===HIGH){
        INIT_COUNT =3;
    }else if (level===MIDDLE){
        INIT_COUNT=5;
    }else if (level===LOW){
        INIT_COUNT=10;
    }else {
        alert('난이도를 숫자로 다시 입력하세요')
        continue;
    }
        return INIT_COUNT;
    }
}





// 게임 데이터 생성하는 함수
function makeGameData() {

    const initCount = selectGameLevel();

  return{
    secret : Math.floor(Math.random()*100)+1;
    min: 1,
    max: 100,
    //난이도를 선택하는 함수 호출
    //사용자 남은 입력 기회
    countDown : initCount,
    //사용자 초기 입력 기회
    initCount : initCount,
    //사용자입력값
    answer: null,
  };
}


//사용자가 답을 입력하고 검증하는 함수
function inputAnswerAndValidate(gameData){
  while(true){
    // 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
    const answer = +prompt(`${gameData.minValue}~${gameData.MaxValue}사이의 숫자를 입력하세요`);
    
    
    //입력이 범위 안의 값인가?++++++++++++++++++++++++++++++++
    if(answer < gameData.minValue || answer >gameData.MaxValue) {  //값을 잘못 입력한 경우를 조건식에 작성!!!!!!!!
        alert(`범위 안의 값을 입력하세요`);
        return false; //논리값으로 return 하기
    }
      gameData.answer =answer;
      return true;
}


//한 게임이 진행되는 함수 
function runUpDownGame(gameData){
  while(true) {

    // const inputResultFlag 
    // = inputAnswerAndValidate(gameData);

    if (inputResultFlag ===false) continue; //false면 while문으로 다시 돌아가서 계속 반복함
    //if(!inputResultFlag) continue; 같은 뜻


    gameData.countDown--;


    // 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
    if(gameData.secret === gameData.answer){
        alert(`정답입니다 ${INIT_COUNT}-${gameData.countDown}번의 기회가 남았습니다`);
        gameEndFlag= true;
        break; //초기카운트 수 - 남은 카운트 수
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
}

  }




// 1.게임 시작 함수 (그녕 함수 만들어서 묶기)
function startGame() {

while(true){
//4.난이도를 선택하는 함수 호출
  var countDown = selectGameLevel();




//게임데이터 생성
const gameData = makeGameData();


//게임 종료 플래그
var gameEndFlag = false;


//하나의 게임 실행
runUpDownGame();







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
}