
/* description: x~y까지 총합을 구하는 함수
    parameter:
        -begin: 누적총합의 시작값
        -end : 누적총합의 끝값
    return: 계산된 총합 
    
    parameter은 여러개, return 값은 한개만!

    */


//매개변수(parameter): 함수를 정의할 때 외부에서 받아오는 값을 저장할 변수(begin, end etc)
function calcRangeTotal(begin ,end) {

    console.log(`x: ${begin}, y: ${end}`);


    var total =0; //총합을 저장할 변수
    for(var i=begin; i<=end; i++){
        total += i;
    }
    return total;
}

//인수(argument) : 함수를 호출할 때 함수에게 전달하는 값이나 표현식
var result=calcRangeTotal(1, 10);
console.log(`result: ${result}`);
console.log(`result: ${calcRangeTotal(1, result -5)}`); // result -5 = 50으로 나타남

//매개변수의 기본값
function sayHello(language='한국어'){

    
    if(language=== '한국어'){
        console.log('안녕하세요');
    }else if(language === '영어'){
        console.log('hello');
    }else if(language === '중국어'){
        console.log('니하오');
    }else{
        console.log('크크루삥뽕~');
    }
}

sayHello(); //따로 언어 명시 하지 않아도 한국어가 기본 defalut 값으로 변경(line29)

function myslice(arr, start, end){
    //사본배열 생성
    var copyArr=[];

    for(var i=start; i<end; i++){
        copyArr.push(arr[i[]])
    }
    return copyArr
}

newARR_myslice([10,20,30,40,50], 1,3);
console.log(newArr);

//매개변수가 없는 함수 ex, makeline
function selectRandomPet(){
    var pets=['멍멍이', '짹잭이', '꽥꽥이', '어흥이']

    return pets[Math.floor(Math.random()*pets.length)]
}

var randomPet = selectRandomPet();
console.log(`랜덤동물 : ${randomPet}`);

