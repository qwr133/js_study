
const userList= [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobby: ['수영', '축구', '테니스']
    },
    {
        account: 'banana',
        userName: '바나나',
        job: '과일',
        address: '하오이',
        hobby: ['헬스', '족구']
    }, 
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발레파킹',
        address: '서울',
        hobby: ['넷플릭스', '낮잠자기', '노래부르기', '게임']
    }, 
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '아이돌',
        address: '경기도',
        hobby: ['농구', '스쿼시']
    },
];

//회원목록에서 회원정보를 출력하는 함수

function userinfo(){
    for(const user of userList){
        console.log(user.userName);
    }
}
userinfo();


//message만 parameter하면 안됨 - user은 내가 줄테니까 원하는 코드를 통채로 넣어봐

function alertUserInfo(wannaSay) {

    for(const user of userList){
        wannaSay(user)
}
}
alertUserInfo(u =>  console.log(`나는 ${u.userName}님이시다 하하하`));

console.log('------------------------------------------------');
// 배열 고차함수
//forEach() 배열의 요소를 반복하면서 하나씩 꺼내줌 -> 후속처리는 내가 콜백으로 씀
//for of문 대신 이거 쓰면됨 
userList.forEach((user) => {
    console.log(user.address);
});

const numbers = [10, 20, 30, 40];

// let total = 0;
// for(let n of numbers){
//     total += n;
// }
// console.log(` 총합 : ${total}`);
let total =0;
numbers.forEach( (n)=>    total += n);
console.log(` 총합 : ${total}`);

console.log('--------------------------------------------1111----');

// 취미가 딱 2개인 회원들만 
// 필터링해서 새로운 배열에 담아줘
function filter2Hobby() {

    // 새로운 배열 생성
    const filteredArray = [];
  
    for (const user of userList) {
      if (user.hobbys.length === 2) {
        filteredArray.push(user);
      }
    }
  
    return filteredArray;
  }
  
  // 경기 사는 회원들만 
  // 필터링해서 새로운 배열에 담아줘
  function filterUserLivedInSeoul() {
  
    // 새로운 배열 생성
    const filteredArray = [];
  
    for (const user of userList) {
      if (user.address === '경기') {
        filteredArray.push(user);
      }
    }
  
    return filteredArray;
  }
  
  
  // 특정 필터조건에 의해 필터링하는 함수
  function filter(condition) {
  
    // 새로운 배열 생성
    const filteredArray = [];
  
    for (const user of userList) {
      if (condition(user)) {
        filteredArray.push(user);
      }
    }
  
    return filteredArray;
  }
  
  


const newArray = filter(u => u.address === '서울' && u.hobby.length>=3);
console.log(newArray);



//배열고차함수 filter()
//특정 조건에 의해 필터링 된 배열을 반환
console.log('==========================================');

const numberArray = [1,2,3,4,5,6,7,8,9,10];

const newArr =numberArray.filter(n => n%3===0 );
console.log(newArr);

const user1 = userList.filter(user => user.account === 'abc1234');
console.log(user1);

console.log('===========================');

//배열고차함수 map
//특정배열에서 특정 조건에 맞는 값들만 따로 모아서 맵핑한 배열을 반환

const doubles =numbers.map(n=> n**2);
console.log(doubles);

const plusTwo = numberArray.map(n=> n+2);
console.log(plusTwo);

const userNames = userList.map(user => user.userName);
console.log(userNames);

// map은 조건에 맞게 내용물을 바꿔주는것
// 필터는 조건에 맞게 필터링해주는 것

//userList에서 원하는 프로퍼티 값을 매핑하는 함수 정의
// function MyMap(callback){
    //이름만 담은 배열 
//     const mappedArray =[];

//     for(const user of userList){
//         mappedArray.push(callback(user))
//     }
//     return mappedArray;
// }
// const userName2 = MyMap(user=>({
//     userName: user.userName,
//     address: user.address,
// }))console.log(userName2);
   

console.log('======================================');

const appleBasket = [
    {
    color: 'green',
    sweet: 14,
},
{
    color: 'red',
    sweet: 6,
},
{
    color: 'green',
    sweet: 11,
},
{
    color: 'red',
    sweet: 9,
},
{
    color: 'red',
    sweet: 8,
},
{
    color: 'red',
    sweet: 10,
},
]
console.log('-----------------------------------------------------------------');
//사과 중 녹색이면서 당도가 9이상인 사과만 선별하여 이 사과는 ~~색이며 당도가 ~입니다
//라는 문자열이 모여있는 배열을 리턴하세요(필터 이용)

const filteredApples = 
    appleBasket
        .filter(apple => apple.color === 'green' && apple.sweet >= 9);

const mappedApples = 
    filteredApples
        .map(apple => `이 사과는 ${apple.color}색이면서 당도는 ${apple.sweet}입니다.`);

console.log(mappedApples);


// userList에서 서울 사는 user들의 첫번째 취미만 배열에 모아서 리턴
// const userHobby = [];

// const filteredHobby = userHobby.filter(userList => userList.address === '서울');

// const mappedHobby = filteredHobby.map(user => `제 이름은 ${user.userName}이고 제 취미는 ${user.userHobby}`);