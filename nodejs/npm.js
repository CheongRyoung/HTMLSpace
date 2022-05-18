/*
npm이란
Node Package Manager
노드의 패키지 매니저
다른 사람들이 만든 소스 코드들을 모아둔 저장소
남의 코드를 사용하여 프로그래밍 가능
이미 있는 기능을 다시 구현할 필요가 없어 효율적
오픈 소스 생태계를 구성중
패키지: npm에 업로드된 노드 모듈
모듈이 다른 모듈을 사용할 수 있든 패키지도 다른 패키지를 사용할 수 있음(의존관계)

package.json 현재 프로젝트에 대한 정보와 사용중인 패키지에 대한 정보를 담은 파일
같은 패키지라도 버전별로 기능이 다를 수 있으므로 버전을 기록해두어야함
동일한 버전을 설치하지 않으면 문제가 생길 수 있음
노드 프로젝트 시작 전 package.json부터 만들고 시작(npm init)

npm init - npm 초기 셋
npm i ~~ - ~~모듈 설치
npm i -D ~~ - 개발시 필요한 모듈 설치

보통 배포할 때는 모듈을 지우고 배포
npm i - package.json에 있는 디펜던시 설치(서버 내에서 설치)
단, 서버가 폐쇄망은 직접 옮겨야댐

npm i -g rimraf - 글로벌 설치(디펜던시에 기록이 안되고 콘솔에 명령어로 사용가능), rimraf는 무언가 지우는 모듈
디펜던시에 등록되지 않아 다른 개발자가 프로젝트에 사용되는지 확인이 불가
차선책으로 npm i rimraf -D 를 통해 개발자디펜던시에 설치 후 사용할 때는 콘솔에 npx rimraf ~~ 로 사용
*/

