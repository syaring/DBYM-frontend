## Introduction

DBYM은 'Distance Between You and Me'의 약자로, 서로 다른 지역에 살고있는 친구들 사이에 가장 가까운 핫플레이스를 찾아주는 웹사이트 입니다.



## Requirements

- Facebook Login API를 사용했습니다.
- 사용자가 Facebook에 가입하고, 친구들이 DBYM을 사용하고 있어야 합니다.
- 현재 테스트앱으로 실제 회원은 사용이 제한되어있습니다.



## Development Environment

- Client : React.js, netlify로 배포
- Server : Node.js (express), AWS 로 서버 배포 상태
- Database :  MongoDB (mlab),



## Installation

**Client**

```
git clone client https://github.com/syaring/DBYM-frontend
npm install
npm start
```

**Server**

- AWS 배포 상태로 별도의 설치 없이 사용할 수 있습니다
- 로컬에서 서버를 구동할 경우

```
git clone https://github.com/syaring/DBYM-backend
npm install
npm start
```

- 설치 후 App.js의 line 40 주석, 41 주석 해제  
  	FBLogin.js의 line 10 주석, 11 주석 해제  
  	MeetUpForm.js의 line 35 주석, 36 주석 해제, line 60 주석, 61 주석 해제  
  	MeetUp.js의 line 27 주석, 28 주석 해제  
  	UserMeetup.js의 line 25 주석, 26 주석 해제

## Features

- Facebook을 이용한 로그인 구현
- Facebook 친구 리스트 연동
- 사용자의 위치 인식
- 모임 생성
- 초대받은 친구들에게 모임 정보 전송
- 친구들의 위치를 기반으로 핫플레이스 제공



## Things to do

- 사용자 로그인시 개인정보 (선호 지역 설정 등) 설정 기능
- Facebook 실제 배포
- 중간지점 및 핫플레이스 계산 로직 개선
- 핫플레이스 위치 주변의 맛집, 사용자 현재 위치에서 이동경로 제공
- Mobile 화면 제공
- Test 진행
- 사용자 UI 개선
- 실시간 정보 업데이트 (방 생성시)
- 방 생성시 상대방에게 push 알림 제공