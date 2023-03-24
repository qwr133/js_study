import gameData from "./gameData.js";
import { caseUp, caseDown, correctAnswer } from "./checkAnswer.js";


// 정의부
export default function gameStart(iconCount) {

    const $numbers = document.getElementById('numbers');
    
    // 구슬을 iconCount개 만들어야 함.
    const makeIcon = () => {

        for (let n = 1; n <= iconCount; n++) {
            // <div class='icon'>1</div> 100까지 해야하니까 
            const $icon = document.createElement('div');
            $icon.classList.add('icon');
            $icon.textContent = n; //숫자넣기
            $icon.dataset.iconNumber = n; //구슬이 숫자가 아닌 한글,한자일 경우 아라비아숫자로 편하게 불러올 수  있는 방법

            $numbers.appendChild($icon); //게임 실행되고 함수 호출하면 구슬 1개가 만들어짐
        }
        }
    

    makeIcon();

    // 아이콘에 클릭 이벤트 부여하기
    $numbers.onclick = e => {

        if (!e.target.matches('#numbers .icon')) return;

        // console.log(`${e.target.dataset.iconNumber}번구슬 클릭함!`);

        // 사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameData.answer = +e.target.dataset.iconNumber;
        console.log(gameData.secret);

        // 정답 검증 함수
        checkNumber(e.target);

    };

};

// 정답을 검증하는 함수
function checkNumber($target) {

    const {secret, answer} = gameData;

    // 실제정답이랑 선택값을 비교
    if (secret === answer) { // 정답인 경우
 // console.log('정답');
        correctAnswer($target);
    } else if (secret > answer) { // up인 경우
// console.log('up');
        caseUp($target);    
    } else {    // down인 경우
// console.log('down');
        caseDown($target);
    }
}