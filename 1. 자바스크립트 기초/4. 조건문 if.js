
//1 ~100의 난수
/* 
    Math.random()   - 0.0 <= ~ 1.0
    Math.random() * 100     - 0.0 <= 
    Math.floor(Math.random()*100) - 0< = ~100

    Math.floor(Math.random()*100)+1     -1 <= ~ <101    

    공식 : x 이상 y이하의 정수 난수
    Math.floor(Math.random() * )(y-x+1))x;
    */
var age =  Math.floor(Math.random()*100);

[1,2,3].map();

alert(`age: ${age}살`);


var age = +prompt('당신의 나이는?');
        //age가 기본적으로 string 으로 취급함 +추가하면 number로 취급함
// alert(`내 나이 : ${age}살`);

// if(age > 19) {
//     alert('성인입니다.')
//     alert('주류를 구매할 수 있습니다')
// }else{
//     alert('미성년자입니다.')
// }