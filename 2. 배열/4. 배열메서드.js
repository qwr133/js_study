

var foodList = ['닭꼬치', '볶음밥', '막창', '마라탕'];

var count = 0;

var target = '막창'

// indexOf : 배열의 특정 데이터가 몇번 인덱스에 있는지 탐색

var index = foodList.indexOf(target);

console.log(`찾은 인덱스 : ${index}`);

// for(var food of foodList) {
//     if(food===target){
//     break;
// }
//     count++;
// }


//slice(): 배열을 일정부분 잘라냄. 사본배열을 반환
foodList.push('순대국밥', '삼겹살');

console.log(foodList);

var slicedFoods =foodList.slice(1,4); //1이상 4미만 => 1,2,3 배열값만 나타남
console.log(slicedFoods); //slice경우 copy본이기 때문에 원본에 반영이 안됨
console.log(foodList); //원본은 그대로 콘솔에 나타남 

//2번부터 끝까지 추출
var slicedFoods2 = foodList.slice(2); 
console.log(slicedFoods2);

//원본배열을 그대로 복사
var slicedFoods3 = foodList.slice(); 
console.log(slicedFoods3);

//reverse() : 배열 역순으로 배치, 원본이 변함
console.log('------------------------------------');

var copyNums = [10, 20, 30, 40, 50];

//reverse 는 좋은 방법이 아니니 copy본을 떠서 만들기
var copyNums = copyNums.slice(); 

copyNums.reverse();
console.log(copyNums);

//concat(): 배열 2개를 연결
console.log('------------------------------------');

var arr1= [10,20,30];
var arr2 = [100,900, 700, 1000];

var concatedArr =arr1.concat(arr2); //사본에  = arr1, arr2 각자 출력 시 원본대로 출력됨

//includes() : 배열의 특정 데이터가 존재하는지 확인
console.log('----------------------------------------------');
var resultFlag = foodList.includes('닭꼬차');
console.log(resultFlag);


//splice(): 배열의 특정요소 제거, 삽입
console.log('----------------------------------------------');
console.log(foodList);
foodList.splice(1,2); //(원본반영)1번인덱스로부터 2개 지워주세요

foodList.splice(0,1, '보쌈'); //0번 인덱스부터 1번 지우고 보쌈을 넣어라

foodList.splice(1,0, '마라샹궈'); //1번에 마라상궈 중간삽입
console.log(foodList);

foodList.splice(2,0, '아이스크림', '떡볶이');
console.log(foodList); //값이 추가되고 그 위치에 있는 값은 뒤로 밀려남

// 2번부터 끝까지 다 삭제함
foodList.splice(2);
console.log(foodList);
