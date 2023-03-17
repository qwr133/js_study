
var money=3000;

// var food = money >=2000 ? '라면' : '삼각김밥';

// var food = money >=5000 ? '볶음밥' : (money>=3000 ? '라면' : '굶음'); 
// 가독성이 낮음, 결과는 같으나 코드의 가시성 측면에서는 if else로 사용하는게 나음

var food;

if(money >= 5000){
    food ='볶음밥';

}else if(money >=3000) {
    food= '라면'
}else {
    foor = '굵음'
}

console.log(`선택한 음식 : ${food}`);