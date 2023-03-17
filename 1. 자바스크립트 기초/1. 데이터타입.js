
//자바 스크립트는 백틱으로 사용!!!!!!!!!!! 
// `    `

// var sentence = '<ul>/n/t<li>/n/t/t<a>ddd</a>';

var sentence = `
        <ul>
            <li>
                <a>hahaha</a>
            </li>
        </ul>`;

        console.log(sentence);


        var month=4;
        var day=5;
        var anniversity ='식목일';

        // var message = month + '월' + day + '일은' + anniversity + '입니다.';

        var message = `${month}월 ${day}일은 ${anniversity}입니다`;

        console.log(message);


        //논리
        var flag = false;  //대문자 작성 시 변수로 확인하여 변수값을 찾을 수 없다고 나옴 // phython 경우 False로 명시함
        console.log(typeof flag);