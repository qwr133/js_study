

var pets = ['멍멍이', '야옹이', '쩝쩝이'];

console.log(pets);

pets[3] = '징징이';
console.log(pets);

//가능하나 좋은방법은 아님 -> 배열이여서 데이터가 추가시 연결이 되는게 아니라 4개의 데이터를 가질 수 있는 곳을 이사를 해야함 => 데이터의 무리가 갈 수 있음
// pets[pets.length] = '스폰지밥'; 

pets.push('스폰지밥'); //연결리스트방식, 성능적측면에서 무리가 없는 코드 (이렇게 사용 권장)
pets.push('뚱이');
pets.push('집게사장', '다람쥐');
console.log(pets);


//맨 끝 데이터 삭제 
pets.pop();

console.log(pets);

//성능상 문제가 생길 수 있음(shift(), unshift())
//shift() : 배열의 맨 첫번째 요소 제거
pets.shift();

console.log(pets);

//unshift(...items) : 배열에 첫번째 데이터 추가
pets.unshift('짝짝이');
console.log(pets);