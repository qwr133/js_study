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



// userList에서 서울 사는 user들의 첫번째 취미만 배열에 모아서 리턴
// const userHobby = [];

// const filteredHobby = userHobby.filter(userList => userList.address === '서울');

// const mappedHobby = filteredHobby.map(user => `제 이름은 ${user.userName}이고 제 취미는 ${user.userHobby}`);

// console.log(mappedHobby);



// userList에서 서울사는 user들의 
// 첫번째 취미만 배열에 모아서 리턴
// ['수영', '푸드파이팅', '독서']
// 회원의 첫번째 취미는  xxx입니다.

// userList // [{5}, {5}, {5}, {5}]
//   .filter(user => user.address === '서울') // [{5}, {5}, {5}]
//   .map(user => ({
//     firstHobby: user.hobbys[0],
//     name: user.userName
//   })) // [{2}, {2}, {2}]
//   .forEach(info => {
//     console.log(`${info.name}회원의 첫번째 취미는 ${info.firstHobby}입니다.`);
//   });

  // foreach안에 info 안에 2개의 객체가 들어가있음


// 취미가 딱 2개인 회원들만 
// 필터링해서 새로운 배열에 담아줘
// function filter2Hobby() {

//   // 새로운 배열 생성
//   const filteredArray = [];

//   for (const user of userList) {
//     if (user.hobbys.length === 2) {
//       filteredArray.push(user);
//     }
//   }

//   return filteredArray;
// }

// // 경기 사는 회원들만 
// // 필터링해서 새로운 배열에 담아줘
// function filterUserLivedInSeoul() {

//   // 새로운 배열 생성
//   const filteredArray = [];

//   for (const user of userList) {
//     if (user.address === '경기') {
//       filteredArray.push(user);
//     }
//   }

//   return filteredArray;
// }


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

