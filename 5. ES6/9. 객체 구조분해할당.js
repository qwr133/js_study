

// const emp = {
//     empName: '빡빡이',
//     age : 29,
//     hireDate: '2014-01-01',
//     birthDay: '1995-12-31'
// };
//값만 복사

// const {empName, birthDay, age} = emp;

// const{empName: en, birthDay: bd, age: a}= emp;
// console.log(`${en}님의 나이는 ${bd}살이고 생일은 ${a}입니다`);

console.log('------------------------------------------');
//birthday, age만 필요하고 나머지는 객체에 알아서~~해주세요
const {birthDay, age, ...  rest} = emp;
console.log(birthday);
console.log(age);
console.log(rest);

//객체 안전 복사 : 스프레드
const copyEmp= {
    ...emp,
    address:'서울시',
    hobbies: ['놀고먹기','낮잠'],
    
};
console.log(copyEmp);