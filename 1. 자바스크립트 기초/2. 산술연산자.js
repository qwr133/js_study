

// 나머지연산
console.log(27%5);


// 뒤에 숫자가 더 크면 앞에 숫자가 나머지
console.log(4%10);


console.log(77%0);
//Nan 연산이 안됨 - 0으로 나눌 수가 없음

console.log(0%77);

//거듭제곱 연산
var num =2;
console.log(num ** 3);

//증감연산자
var x= 3;
x++;
++x;
x--;
--x;

//전위 연산, 후위연산
var n1= 10;
var n2 = n1++;

console.log(`n1: ${n1}, n2: ${n2}`);

var n3= 10;
var n4 = ++n3;

console.log(`n1: ${n3}, n2: ${n4}`);

var x =10;
console.log(x+=2);
console.log(x);

var x =10;
console.log(x+2);
console.log(x);