
var x= 30, y=40;

var z = ''+ x +y;
console.log(z);

//error 가 나지 않고 NaN으로 나옴 -- error가 나야하는상황인데 엄격하게 파싱 함수를 해야 에러가 발생됨 
//투머치로 관대함

// var num = +'hello'
var num = parseInt('hello')
console.log(num);

//-------------------------------------------------------
//키 몸무게 = string으로 들어오는데 알아서 계산해서 값을 줌 
// 자바스크립트는 동적타이핑 - 코딩은 쉬운데 성능에서 손해를 봄 =  > 내가 원하는 값으로 나오지 않을 경우가 있음 (아래처럼 암묵적으로 형변환이 일어남)

// var cm = prompt('키를 입력(cm)');
// var kg = prompt('몸무게를 입력(kg)');

// var m = cm /100;


// var bmi = kg /(m*m);
// alert(`당신은 bmi가 ${bmi}입니다`);



//회원 로그인여부 확인 -- !가 어떻게 쓰이는지 확인
//브라우저 로컬 스토리지에 토큰이 존재하면 로그인한 것임
function isLogin() {
    //ACCESS_TOKEN : 3324skfjlkgjwejglwekg  (로그인한 경우)
    //ACCESS_TOKEN : null                   (로그인안한 경우)
    //getItem은 해당 값이 있으면 값을 가져오고 없으면 null
    return localStorage.getItem('ACCESS_TOKEN');
}