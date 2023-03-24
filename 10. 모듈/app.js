

//외부 js 불러오기
import {add} from './foo.js';
import {x} from './bar.js';

import * as foo from './foo.js'; //모든파일 가져오기


//메인실행 파일 app.js
//실행 코드만 입력: 함수 호출
// 함수정의, 클래스 정의, 변수정의 xxx



// ===========================================
// foo랑 bar 통합하는 




console.log(add(10,20));

console.log(`x: ${x}`);
console.log(`x: ${bar.x}`);
