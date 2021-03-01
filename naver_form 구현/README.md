### HTML 마크업 설계

1. 전체 화면을 감싸는 div.container   
2. header와 main 두가지로 나누었다.
```html
<div class="container">
    <header class="header"></header>
    <main class="main"><main>
</div>
```
3. header에는 naver logo를 h1 태그를 사용하여 넣었다. 네이버에 관련된 화면이라는 것을 알 수 있다.    
```html
<header class="header">
    <h1 class="logo"><a href="#"><img src="image/logo.svg" alt="네이버"></a></h1>
</header>
```
4. main에는 화면에서 메인 콘텐츠가 된다고 생각하여 main 태그로 감쌌으며 해당 내용은 로그인창에 관련된 내용이므로 h2를 사용하여 로그인 창이라는 것을 명시해주었다. 이때 h2는 웹접근성을 위한 제목이므로 시각적으로는 보이지 않게하기 위해 a11y-hidden를 클래스로 주었다   
```html
<main class="main">
        <h2 class="a11y-hidden">로그인 창</h2>
</main>
```
5. main 안에 로그인 form을 만들었다. 이때 fieldset을 사용하여 ```<form>``` 요소에서 연관된 요소들을 하나의 그룹으로 묶기 위해 사용하였다.fieldset안에는 아이디 input,비밀번호 input,로그인 button, 로그인 상태유지 체크박스, ip보안 체크박스가 존재한다.
```html
<form action="./" method="POST" class="input">
    <fieldset>
        <legend>로그인폼</legend>
        <label for="id" class="label id-label">아이디</label>
        <input type="text" class="login" id="id" placeholder="아이디">
        <p class="error error-id"aria-hidden="true">아이디를 입력해주세요.</p>
        <label for="pwd" class="label pwd-label">비밀번호</label>
        <input type="password" class="pwd" id="pwd" placeholder="비밀번호">
        <p class="error error-pwd">비밀번호를 입력해주세요.</p>
        <button class="login-btn"><span>로그인</span></button>
        <div class="infor">
            <input type="checkbox" id="loginStatus" class="login-status">
            <label for="loginStatus" class="status-label"><span class="click-logo"></span><p class="click-infor">로그인 상태 유지</p></label>
            <input type="checkbox" id= "security" class="security" >
            <label for="security" class="security-label"><span>IP 보안</span><label>
        </div>
    </fieldset>
</form>
```
6. 아이디와 비밀번호의 label은 날려주었다. input이 빈칸일 경우 error 메세지를 보여주는 required를 이용할 방법을 생각했으나 방법이 떠오르지 않아 error 문장은 p태그에 작성하였다. 일단 화면에 보이게 스타일링 하였다.
```html
<label for="id" class="label id-label">아이디</label>
        <input type="text" class="login" id="id" placeholder="아이디">
        <p class="error error-id"aria-hidden="true">아이디를 입력해주세요.</p>
        <label for="pwd" class="label pwd-label">비밀번호</label>
        <input type="password" class="pwd" id="pwd" placeholder="비밀번호">
        <p class="error error-pwd">비밀번호를 입력해주세요.</p>
```
7. 로그인 버튼은 바로 아래에 마크업 하였다. 웹접근성을 고려해서 가장 아래에 배치한 뒤 position등을 이용해 배치를 위쪽으로 할려고 했으나 잘되지 않아 보이는 순서대로 마크업을 하였다. 이때 span으로 로그인을 감싼 이유는 스타일링 할때 위치를 좀 더 쉽게 배치할 수 있었기 때문에 사용하였다.
```html
<button class="login-btn"><span>로그인</span></button>
```
8. 나머지 화면에 보이는 체크박스의 역할을 하는 두가지를 input으로 type을 체크박스로 지정하여 배치하였다. 이때 둘의 위치를 양쪽에 두어야 했는데 둘을 감싸는 태그를 만들어 flex로 배치하였다. 둘다 체크의 역할을 한다고 생각하여 체크박스를 이용하였고 둘의 정보도 같이 보내져야 된다고 생각하여 form 안에 작성하였다. span을 이용하여 필요한 이미지를 넣었다. 
```html
<div class="infor">
    <input type="checkbox" id="loginStatus" class="login-status">
    <label for="loginStatus" class="status-label"><span class="click-logo"></span><span class="click-infor">로그인 상태 유지</span></label>
    <input type="checkbox" id= "security" class="security" >
    <label for="security" class="security-label"><span>IP 보안</span><label>
</div>
```
<br>

### CSS 설계 

1. 완성된 화면을 보면서 margin과 padding, 각 태그들의 weight와 height를 알아놓은 뒤 어느 부분에 여백을 주어야 할지를 결정해주었다.    

2. a11y-hidden을 작성하여 html에서 시각적으로 필요없는 요소들을 날려주었다
```css
/* 숨김 콘텐츠 */
.a11y-hidden, 
legend,
.label,
.login-status,
.security{
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: polygon(0 0, 0 0, 0 0);
}
```

3. header에 logo를 구현했다. header에 text-align: center로 정중앙에 로고가 올 수 있게 하였으며 기본값들을 0으로 지정해주었다. 이미지는 svg로 가져와 크기를 똑같이 지정해주었다.
```css
/* 헤더 로고 */
.header{
    text-align: center;
    margin: 0;
    padding: 0;
}
.logo{
    padding: 0;
    margin-top: 106px; 
}
.logo > a img{
    width: 230px;
    height: 44px;
}
```
4. span에 bg로 체크 이미지를(svg) 넣어주었으며 inline-block으로 지정해 width값과 height값을 주었다. 
```css
.click-logo{
    display: inline-block;
    padding: 0;
    background: url(images/no-click.svg) no-repeat;
    width: 24px;
    height: 24px;
}
```
5. 속성 [type="checkbox"]:checked를 이용해 체크를 눌렀으면 status-label에 있는 첫번째 span에 click 이미지를 넣어주었다. ON -> OFF도 비슷하게 구현해주었다. 이때 가상요소 선택자를 이용해 ON과 OFF를 넣어주었다.
```css
}
.login-status[type="checkbox"]:checked + .status-label span:first-child{
    background: url(images/click.svg) no-repeat;
}
.security-label > span::after{
    content: ' OFF';
    color:#999;
}
.security[type="checkbox"]:checked + .security-label span::after{
    content: ' ON';
    color: rgba(3, 199, 90, 1);
}
```