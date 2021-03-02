
### 👉 구현 할 콘텐츠
<img src = "https://user-images.githubusercontent.com/64240637/109673550-7bbbbf00-7bb9-11eb-99a9-3dacad2a2aaf.PNG" width="300px" > 
<br>


### 👉 1. HTML 마크업    
<br>

<img src = "https://user-images.githubusercontent.com/64240637/109680043-76fa0980-7bbf-11eb-94d8-a319afb77ea0.PNG"
width="400px" > 
<br>

#### 논리적인 마크업 순서
1. ```div```로 전체 컨텐츠를 묶어준다    

2. ```section```으로 서로 관계 있는 문서를  묶어준다   

3. section의 제목을 나타내는 ```h2```를 배치시킨다. h2안에 다른 색을 주기 위해서 span으로 묶어준다.   

4. section안에 ```div```로 신규이벤트 컨텐츠를 묶어준다.    

5. div안에 img를 span으로 묶어준다.__(❓div안에 span안에 img를 구현하는 이유는 무엇인가)__ 세부 내용은 p태그에서 작성한다.   

6. div 안에 button으로 < ,> 을 구현한다. (뒤쪽에 나온이유는 무엇에 대한 버튼인지 내용을 먼저 아는 것이 웹접근성을 따졌을때 바람직하므로 컨텐츠 내용이 나온 후 마크업하였다)     

7. div 안에 세부내용을 p태그로 감쌌다.   

8. ```section```으로 서로 관계있는 문서를 묶어준다   

9. section의 제목을 나타내는 ```h2```를 배치시킨다. h2안에 다른 색을 주기 위해서 span으로 묶어준다. 

10. ```ul```태그 안에 사이트들을 ```li```로 나열시킨다. 이때 각 문장들을 링크가 걸려있기 때문에 a로 한번더 묶어준다    

<br>

```html
 <div class="gradient-box">
          <section class="event">
            <h2 class="event-heading">
              신규
              <span class="point-color">이벤트</span>
            </h2>
            <div id="eventDetail">
              <span class="drop-shadow">
                <img src="./images/free_gift.gif" alt="이벤트 경품: 웹표준 핵심 가이드북 2 도서">
              </span>
              <p class="event-brief">
                <em>웹 표준 핵심 가이드북 2 출시!</em> 선착순 500명 한정으로 증정.
              </p>
              
            </div>
            <div class="btn-event">
              <!-- 두개의 태그 차이점 알아보기 2번째 방식 권장 , 하지만 1번으로 마크업함 -->
              <button type="button" class="btn-event-prev">이전 이벤트 보기</button>
              <button type="button" class="btn-event-next">다음 이벤트 보기</button>
              <!-- <button type="button" class="btn-event-prev" aria-label="이전 이벤트 보기"></button>
              <button type="button" class="btn-event-next" aria-label="다음 이벤트 보기"></button> -->
            </div>
          </section>
          <section class="related">
            <h2 class="related-heading">
              관련
            <span class="point-color">사이트</span>
            </h2>
            <ul class="related-list">
              <li><a href="#">패스트 캠퍼스</a></li>
              <li><a href="#">W3C</a></li>
              <li><a href="#">웹접근성 연구소</a></li>
              <li><a href="#">Web Standards</a></li>
              <li><a href="#">정보화 진흥원</a></li>
            </ul>
          </section>
  </div>
```
<br>

### 👉css 설계    
__css로 스타일을 입히기 전 화면이다.__ button은 padding 트릭과 이미지 스프라이트를 이용해서 구현해준다   

<img src = "https://user-images.githubusercontent.com/64240637/109673557-7d858280-7bb9-11eb-8a03-a9c6de926bfa.PNG" width="400px" > 
<br>


__1. div.gradient-box__      
전체 컨텐츠를 감싸고 있는 박스의 ```bg, border, b-r, p```를 스타일링 해준다     

__2. section.event__    
section을 기준으로 위치를 배치하는 btn-event div가 있기때문에 ```position:relative```를 준다. 밑에 실선을 표시하기 이해 ```border-bottom```을 작성한다.   

__3. span.point-color__       
span을 이용해서 특정 문장의 색을 바꾸어준다    

__2. div#eventDetail__    
(❓ div에 id값을 부여한 이유는 무엇인가)   
```css
.gradient-box{
border: 1px solid #aaa;
border-radius: 5px;
background:#ccc linear-gradient(180deg,#ccc,#eee);
padding: 10px;
}
.event{
  position: relative;
  border-bottom: 1px solid #aaa;
}
.point-color{
  color: var(--primary-color);
}
```
