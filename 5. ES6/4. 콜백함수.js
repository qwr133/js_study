

//정수 n을 전달하면 1부터 n까지 모든짝수를 출력하는 함수

//  function showEvenNumber(n){
//     for(let i=1; i<n; i++)
//     if(i%2===0) console.log(i);
//  }
//  showEvenNumber(15);


//  function showOddNumber(n){
//     for(let i=1; i<n; i++)
//     if(i%2===1) console.log(i);
//  }
// //  showEvenNumber(15);

//  function showEvenorOddNumber(n, delim){
//     for(let i=1; i<n; i++)
//     if(i%2===delim) console.log(i);
//  }
// showEvenorOddNumber(10,1)



//배수출력
// function showMultiNumber(n, multiNumber){
//     for(let i=1; i<n; i++)
//     if(i%multiNumber===0) console.log(i);
//  }
// showEvenorOddNumber(10,1)


// const code = function(n){
//     return n%3===0;
// };

// code(n);


//배수 이중값 출력
function showNumber(n, code){ //n은 지역변수
    for(let i=1; i<n; i++) //공통적인 특징 for 문
    if(code(i)) console.log(i); //조건적 특징은 여러매 
 }


function test(n){
    return n%3 ===0;
}
showNumber(30, test)
showNumber(20, (n) => n % 3===0); // (n) 내가 원하는 조건문 작성

// showNumber(20, function(n) {return n%3===-0 && n%6===0}) //n을 깂을 사용할 수 있음


function showMessage(message, howTo){
    //공통기능 -- 컬러 같은거 맞춰주기
    document.body.style.background = 'gray';
    //개별기능
    howTo(message);

    //공통기능
    alert('하하호호')
}
showMessage('메롱메롱', function(m){
    alert(m);
});