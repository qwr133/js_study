
for(var i=1; i<=10; i++){
    if(i%2 ===0) continue; //이번회차에 코드를 반복
    console.log(i);
}

console.log('반복문 종료!');


while(true){

    var n= +prompt('숫자를 입력');
    
    if(n===1) break;
    else if(n===2)continue;
    alert('메롱메롱')
}
alert('진짜 끝')