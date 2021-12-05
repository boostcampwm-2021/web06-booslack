# 🖥 booslack

> 🔗 배포 링크 : http://118.67.142.116:3001/login 

booslack은 팀원들과 원활한 소통을 할 수 있게 채팅 및 화상회의를 지원해주는 협업 도구입니다.

<p align="center">
 <img src="https://user-images.githubusercontent.com/55660267/144753329-dd0c5525-36c8-4384-9ac0-106feed26a89.png" />
</p>

# 👨‍👧‍👦 Member



| <img width="150" alt="스크린샷_2021-11-29_오후_9 36 46" src="https://avatars.githubusercontent.com/u/42922298?v=4"> | <img width="150" alt="스크린샷_2021-11-29_오후_9 36 46" src="https://avatars.githubusercontent.com/u/40421183?v=4"> | <img width="150" alt="스크린샷_2021-11-29_오후_9 36 46" src="https://avatars.githubusercontent.com/u/75822859?v=4"> | <img width="150" alt="스크린샷_2021-11-29_오후_9 36 46" src="https://avatars.githubusercontent.com/u/55660267?v=4"> |
|------|------|------|------|
| 🥐 설민욱 | 🍛이충헌 | 🍣박주원 | 🍜조진성 |
| [@blogSoul](https://github.com/blogSoul) 백엔드 및 문서 작성 담당 | [@lodado](https://github.com/lodado) 프론트엔드 담당 | [@laz](https://github.com/laz) 프론트엔드 담당 | [@loin3](https://github.com/loin3) 백엔드 담당 |

## ⚙ 기술 스택

<img width="920" alt="스크린샷 2021-11-29 오후 9 36 46 (1)" src="https://user-images.githubusercontent.com/42922298/144754081-385f5d4e-e5b1-4cec-8ed4-087fe98bb9c5.png">

<details>
<summary>기술 스택 선정이유</summary>

## 📃 Frontend

### Recoil

- 압도적으로 편리한 client state 관리
- 완만한 러닝커브와 최소한의 boilerplate
- 실제 변화가 필요한 컴포넌트만 리렌더링 (<> Context API)

### React-query

- 선언적으로 사용하는 동기화된 server state 관리
- 편리하고 수정 가능한 캐싱으로 불필요한 요청 감수
- 다양한 refetch 트리거
- 데이터 상태에 따른 분기 처리, pagination, infinite scroll, dependent query 등등...

### Webpack

- 작동 원리를 잘 알기 위해서 CRA 대신  webpack을 직접 build해서 사용
- 파일 단위 자바 스크립트 모듈 관리의 편리성
- 브라우저간 호환성을 위해서 트랜스파일러(babel-loader with TypeScript) 사용

---

## 📃 Backend

### Express

- 자유도가 높아 파일 구조 짜기 쉽고 원하는 아키텍쳐대로 설정할 수 있음
- 많은 자료와 다양한 코드가 존재해 다양한 오류를 빠르게 수정할 수 있음
- 입문하기 쉬워서 바로 기술 적용이 가능할 것으로 예상함.

### Typeorm

- 문법이 JPA와 유사하기 때문에 배우는데 바로 기술 적용이 가능할 것으로 예상함.
- 직접 DB를 설정하지 않고 Object로 구현할 수 있어서 개발에 용이함.

### Mysql

- CRUD 기능 모두 준수한 성능을 가지고 있음
- JOIN으로 다양한 조건의 데이터를 선택할 수 있음
- 많은 자료와 문서가 많아 다양한 기능을 빠르게 구현할 수 있음

---

## 📃 Common

### TypeScript

- 자바스크립트의 상위집합으로 자바스크립트의 부족한 기능(인터페이스와 타입체킹) 제공
- 큰 단위의 프로젝트에서 정적 타입 체킹으로 컴파일 단계에서 오류를 잡아내고 협업 생산성과 유지보수성 향상

### socket.io

- 실시간 양방향 통신
- Dynamic namespace를 이용한 워크스페이스 단위의 이벤트 전달

---

## 📃 Devops

### Github Actions

- Github 자체에서 지원해주는 강력하고 간편한  CI/CD 툴
- branch 단위로 실행할 수 있는 이벤트
</details>

# 📕 Detail

### `booslack` 프로젝트를 더 보고 싶다면 [아래 링크](https://github.com/boostcampwm-2021/web06-booslack/wiki)를 클릭해주세요!
