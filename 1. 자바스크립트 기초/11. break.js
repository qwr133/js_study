
// 50,000번의 루프 중 1~100사이의 랜덤숫자중 30이 나오면 반복을 중간에 멈추고 싶다


for (var i=0; i<50000; i++){
    var rn = Math.floor(Math.random()*10)+1 //공식외우기
     console.log(rn);
    if(rn ===3){
        console.log(`반복문 종료 : ${i}`);
        break;
    }
   
}


//중첩 반복문
for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){
        if(i===j){
            break; //내부만 중단시킴
        }
        console.log(`[${i}, ${j} ]`);
        
        }
    }

//if문 내부만 중단시키니까, 첫번쨰 for문 1,0 2,0 3,0 만 나옴
console.log('=================================');


// 횟수가 지정되면 for문, 지정되지 않은 문은 while
// for문은 범위가 한눈에 보임 