
// 순서가 중요하니까 배열을 사용
// 순서보다 데이터의 명시적 이름이 필요할때 객체를 사용 - 프로퍼티가 똑같아도, 달라도 괜찮음

var a = 50;

//객체 리터럴 (값)

var dog ={
    //프로퍼티 작성
    name : '뽀삐',
    kind :'진도개',
    age : 3,
    // 'for waiting': 11 //띄어쓰기 하면 문자열로 처리 가능
    injection: true,
    favorite: ['산책', '간식'],
    hate :null,
    
    // PlayWithChild : function ( ) 함수값도 사용 가능
};


var cat ={ //각각을 프로퍼티로 부름
    //프로퍼티 작성
    name : '콩순이',
    kind :'블랙러시안',
    age : 2,
    injection: true,
    favorite: ['낮잠자기', '츄르먹기' ]
};

console.log(typeof dog);

//객체에 저장된 데이터 참조
console.log(dog.name);
console.log(cat.age);

console.log(dog.favorite[0]) //favorite이 배열임으로 배열로 접근해야함

dog.favorite.push('꼬리흔들기') //배열추가 가능

// cat.kind.splice(1,1); 불가능
// dog.favorite.slice(1).splice(1,1); 되는 코드
// 사람 대화하기().설등하기().세뇌하기()


// 프로퍼티 참조2 => 결과 동일하다 
console.log(dog.injection);
// 배열로만 작성해서 출력이 필요할 때가 있음 - > key를 value에 저장해서 사용될 시 
// [ ] 칸 안에 무조건 문자열로 작성 ' ' 
console.log(dog.['injection']); 

var fv ='favorite';
console.log(cat.fv); //undefined라고 나옴
// console.log(cat[fv]); => 변수를 참조하는거니까 따옴표 작성안됨

// 프로퍼티 값 수정
dog.age =4; //3이었는데 4로 수정
cat.favorite[1] = '실뭉치'; 

dog['injection'] = false; //백신안맞은걸로 수정
console.log(dog);

//프로퍼티 동적 추가
cat.owner = '김철수'; //owner 가 있었으면 수정이 되는것
console.log(cat);

//프로퍼티 삭제
delete cat.owner;
console.log(cat);

console.log('-------------------------------');

//프로퍼티 존재 유무 확인
// 주의사항: key를 반드시 문자열로 표기해야함!!!!!!!!!!!!!!!!!!!!
var ageFlag = 'age' in cat;
// age가 있으면 true, 없으면 false값으로 나옴

// master라는 프로퍼티가 없으면 추가해라
var m = 'master'
if(!('master' in cat)){
    cat['master'] ='김또또';  // cat[m] ='김또또';
}


console.log('==========================');

//객체 순회하는 반복문
// for( of [배열] )  for(in { 객체})
//key를 반복해서 추출해줌
for(var k in dog){
    // console.log(k);
    // dog[k]는 key를 참조함 // value가 다 나옴
    console.log(dog[k]);

    
}

console.log('=========================================================');
var articles = {
    totalCount: 25578,  //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, 
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        }, 
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        }
    ]
};

console.log('========================');
console.log(articles.totalCount);
console.log(articles.articleList[1].writer);
console.log(articles.articleList[2].regDate);

var bbs = articles.articleList;

bbs[0].writer;

var cnt = 0;

for (var x in articles) {
    console.log(`${++cnt}!!`);
}
for (var y of bbs) {

}





