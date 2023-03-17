
var a=10;
var b=a;

a= 15;
console.log(b);


//배열은 주소값이 들어가있기 때문에 각 배열에 값이 바로바로 변경됨
var arr1 =[1,2,3,4];
var arr2 = arr1;

arr1[1]= 999;

arr2[0] = 7;


console.log('arr1 : ', arr1);
console.log('arr2 : '. arr2);


//배열 생성
//배열 변수 이름 관례 : 복수형, list 어미
var fruits =['오렌지', 
             '라임',
             '레몬']; //배열 리터럴 (대괄호)
console.log(fruits);
console.log(typeof fruits);


var arrrayLink = {

0: '자몽',

1: '포도',

2: '한라봉',

length :3

};


console.log(`배열의 데이터 수 : ${fruits.length}`); //3으로 출력됨

//배열 데이터 참조(reference)
console.log(`첫번재 데이터 : ${fruits[0]}`);
console.log(`마지막 데이터 : ${fruits[fruits.length-1]}`);

//배열 요소 수정
fruits[1] = '파인애플';
console.log(fruits);

//수정시 주의사항 -- 인덱스에 값이 존재하는지 체크하고 확인 후 수정해야함 // console에는 empty로 나오는데, 브라우저 F12에는 값이 메겨짐
// fruits[4] = '초콜릿';
// console.log(fruits);

//배열 내부데이터 전체 참조(순회 : travis)
//선형탐색: 순차적으로 확인해보면서 찾기 -- else로 하면안됨
var target = '바나나';
//찾았는지에 대한 여부 --false값으로 설정해두고 만약 과일이 잇으면 if문 돌기
var fineFlag = false;
for ( var i=0; i<fruits.length; i++){
    // console.log(fruits[i]);

    if(fruits[i]===target){

        console.log(`${target}과일은 존재함!`);
        fineFlag=true;
        break;
    } 

    }
    if(!fineFlag)
    console.log(`${target}과일은 존재하지 않음!`)

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);


//for ~ of 반복문 (배열전용 반복문 ======= (향상된 for문)
var weekDays = ['월', '화', '수', '목', '금', '토', '일'];

console.log('-------------------------');
// 특정 index 순회할 때
// for(var i=0; i<weekDays.length; i++){
//     console.log(`${weekDays[i]}요일`);
// }


//전체index 순회할 때
for(var day of weekDays){ 
    console.log(`${day}요일`); //data가 없으면 자동으로 break;가 됨
}

