const age = prompt("How old are you?"); 
// stopping js prompt() 옛날 기능으로 스타일 수정도안되고 
// 구닥다리임 팝업으로 차단 되기도 해서 '사용 안함'
console.log(typeof age); //prompt()를 통해 받은 age의 값은 String임

parseInt(); // type convert Int 타입으로 바꿈
console.log(age, parseInt(age));

// String은 숫자 비교를 할 수 없기 때문에 int로 변환 해주어야 한다.
// parseInt();에 숫자가 아닌 값을 넣게 되면 NaN으로 반환한다.

const ageInt = parseInt(prompt("How old are you?")); 
console.log(ageInt);
// function안에 function을 넣을 수 있는데 가장 안쪽부터 실행한다.

// 무언가가 NaN인지 아닌지 확인하는 방법 => isNaN(); : boolean
// age is number => false , age is not number => true
console.log(isNaN(ageInt));

// conditional(조건 if)
// if(condition){
//     // condition == true 
// } else {
//     // condition == false
// }

if(isNaN(ageInt)){
    console.log("please write a number");
} else {
    console.log("Thank you for writing your age.");
}
