# **오류 및 에러 해결**

## **라우터 관련**

- 버튼 클릭 시 라우터 이동을 원했다. </br>
  버튼을 Link 태그로 감싸주어 페이지 이동을 할 수 있지만 Api에서 성공적으로 응답을 받았을 때만 보내고싶었다.
  그래서 react-router-dom 안에 있는 useNavigate를 이용하여 구현했다.
  </br>
- **토큰 유무에 따른 접근 제한** </br>
  App.js에서 로컬스토리지의 토큰을 체크하여 라우터를 이동시키는 방법을 구현했다. 하지만 로그인을 시도하고 나서는 체크를 하지 않는 것이다. </br>왜냐면 내가 아래와 같이 구현한 코드는 딱 한번만 실행되기 때문에...
  <img src="https://user-images.githubusercontent.com/116490063/218929741-f6358f07-4244-4678-89b0-b5daaf82c03b.png">
  </br>
  일단 로그인 완료가 되면 /todo로 이동하기 때문에 pathname은 /todo가 되지만 page는 그대로였다.
  이 버그를 해결하기 위해서 pathname이 바뀔때마다 토큰체크를 하는 방법으로 다시 구현했다.</br></br>
  <img src="https://user-images.githubusercontent.com/116490063/218930273-194bc5d5-f43a-4bba-8a88-99e8e4ae7792.png"></br>

## **axios**

Api 연동 시 응답 결과에 따라(성공/실패) 구현이 달라지는 경우가 있는데 if/else문을 활용하는 것 보단 try, catch문을 활용해서 간단하게 핸들링 할 수 있었다.
</br>

## **dot env**

API주소를 숨기기 위해 환경변수를 활용했다. </br>
사용할 파일에서 'process.env.변수명'으로 불러왔지만 계속 undefined가 나왔다. </br>
Next.js에서는 바로 변수명을 선언해도 되지만 React에서는 변수명 앞에 REACT*APP을 추가해야 한다. </br>
파일에서 사용할 때는 'process.env.REACT_APP*변수명'으로 불러와서 제대로 값을 가져오는 것을 확인할 수 있다.
</br>
