

// or 연산 : 첫번쨰 truthy를 반환
console.log('hello' || 'world');
console.log(0 || '안녕');


// AND 연산 : 첫번째 falsy를 반환
console.log('-----------------------------');

console.log('HELLO' && 'WORLD'); //둘다 문자열이라 true 아닌가?
console.log(null && '메롱');


/* 
    <h1>안녕하세요 우리 홈페이지에 오신걸 환영합니다</h1>
         isLogin() && <h2> xx님 안녕하세요</h2>  =>&& 연산자여서 첫번쨰 true 값이 나와야 h2 부분이 나옴!!!! 
                                                    오른쪽이 false면 왼쪽 보고, 오른쪽 true면 왼쪽 안봄
                                                로그인을 해야~ 안녕하세요가 나옴


    ex, 쿠폰당첨플래그 && sendCoupon() => 쿠폰당첨되면 쿠폰 보내기~

    isMineArticle() && <button> 수정 </button> ==> 내가 작성한 글이 맞으면 수정버튼을, 내가 쓴 글이 아니면 수정 버튼이 없음
    

*/
       
