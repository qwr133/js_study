/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

function calcNumbersTotalAndAverage(begin, end) {
    var total=0;
    var avg=0;

    for(var i=begin; i<=end; i++){
        total+=1;
    } avg합 구해서

    for(var i=begin; i<=end; i++){
        avg+=
리턴값 1개로 출력
    
}


var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);




function calcNumbersTotalAndAverage(...numbers){
    var total=0;
    for(var n of numbers){
        total+=n;

    }
    var avg = total/numbers.length;
    return{ //ES6 문법 total : total // 변수와 프로퍼티 key값이 같을 경우만 해당
        total,
        avg
    }
}
