

var n1 = '10';
var n2 = '20';
console.log(n1+n2);

// 숫자를 문자로 암묵적으로 형변환을 시킴
var n11 = 10;
var n22 = '20';


var n3= n11+'';
console.log(typeof n3); //문자로 변환됨

var n4 = '100' - 55; //55도 문자로 바꿔도 계산식이 됨
console.log(n4);

console.log('---------------------------------------------------------');

//js에서는 0, '', null, undefined, Nan은 거짓으로 판단한다

// Falsy -- 출력되지 않음
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ("") console.log('ok4');
if (NaN) console.log('ok5');

// Truthy
if (1) console.log('ok6'); //숫자는 0빼고 다 true (음수, 소수 포함)
if (-100.55) console.log('ok7'); 
if ('   ') console.log('ok8'); //스페이스도 byte(data)를 차지하기 때문에 true// space없으면 false
if ('hello!!!!') console.log('ok9');
if ([]) console.log('ok10'); //(비어있는) 배열, 함수 true


for(var n =1; n<=10; n++){
    if(n%2===0){
        console.log(n+ '짝수입니다');
    }else{
        console.log( n+ '홀수입니다');
    }
}



while(999){
    //( ) true 라고 입력하지 않아도 숫자, '메롱' 등을 해도 값이 true 임 
}