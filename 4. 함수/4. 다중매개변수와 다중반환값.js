
//multi parameter: 매개변수가 n개인 경우

//집합 자료구조를 매개변수로 사용
//[배열, 객체]

//n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

//스프레드 (ES6)
function addAll(...numbers){
    var total =0;

    for(var n of numbers){
        total +=n;
    }
    return total;
}

var arr = [1,3,5,7,9]
var r1 = addAll(arr)

// var r1= addAll([1,3,5]); /// box 배열 하나가 numbers에 대입이 됨 
                            //numbers(10line) 앞에 ... 입력하고 배열  [ ] 삭제하면 알아서 깔끔하게 정리해줌 (ES6 문법)
console.log(`r1: ${r1}`);

//...는 여러개 배열쓸때는 불가능함
function foo(arr1, arr2){

}
foo([10,20], [500,1000,1500]);

console.log('=================================');

//함수의 리턴값 언제나 한개
//두개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴받고싶어 => 집합자료에 담아서 입력하면됨

function operateAll(n1, n2){

    var addResult= n1+n2;
    var subResult= n1-n2;
    var multiResult= n1*n2;
    var divideResult= n1/n2;

    var resultSet=[addResult, subResult, multiResult, divideResult];
    return resultSet; //위의 내용이 다 생략되어 return값만 입력할 수 있음
}
console.log('=================================');

function operateAll(n1, n2) {

    return {
        plus: addAll(n1, n2), 
        multiply: n1 * n2, 
        divide: n1 / n2,
        minus: n1 - n2, 
    };
}

var result = operateAll(10, 5);
console.log(`덧셈결과: ${result.plus}`);
console.log(`뺄셈결과: ${result.minus}`);
console.log(`곱셈결과: ${result.multiply}`);
console.log(`나눗셈결과: ${result.divide}`);


// var r2 = operateAll(100, 4)[1];
// console.log(`r2: ${r2}`);

// for (var n of operateAll(100, 4)) {

// }