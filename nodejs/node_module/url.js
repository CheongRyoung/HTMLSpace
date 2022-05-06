// 인터넷 주소를 쉽게 조작
// 쿼리스트링 도메인 ? 뒤에 붙어있는 키와 값의 집합체

const url = require('url');

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));

const querystring = require('querystring');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
const query = querystring.parse(parsedUrl.query)

console.log('querystring.parse():', query);  // 키 값으로 객체 리턴
console.log('querystring.stringfy():', querystring.stringify(query));  //문자열로 리턴