

// 정사각형을 그립니다 
// 높이는 얼마입니까

// 3 엔터 하면
// ***
// ***
// ***
// 5x5 
// *****

// var ask=prompt('정사각형을 그립니다 높이는 얼마입니까?')
// var s='*';

// for(var i=0; i<=ask; i++){
//     for(var j=0; j<=ask; j++){
//         s += '*'
//     }
    
// }
// alert(ask);


// 한 변의 길이를 입력받는다  
var length =+prompt('정사각형을 그립니다 높이는 얼마입니까?');
var star = ``;

for (var i ; i<=length; i++){
    for(var j=0; j<=length; j++){
        star += `* `;
    
}
    star += '\n';
}
console.log(star);


