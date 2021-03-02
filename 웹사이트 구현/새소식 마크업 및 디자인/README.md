
### 👉 구현 할 콘텐츠
<img src = "https://user-images.githubusercontent.com/64240637/109642082-e1964f80-7b95-11eb-9064-9b01c7290712.png" width="500px" > 
<br>


### 👉 1. HTML 마크업    
<br>

<img src = "https://user-images.githubusercontent.com/64240637/109645613-6f743980-7b9a-11eb-801b-317b1ac3d7c5.PNG" width="700px" > 
<br>

#### 논리적인 마크업 순서
1. ```section```으로 서로 관계 있는 문서를  묶어준다   

2. section의 제목을 나타내는 ```h2```를 배치시킨다. (h2를 쓰는 이유는 해당 사이트에서 대제목을 나타내는 h1을 썼기 때문에 h2로 작성해준다)    

3. article요소는 내용이 각기 독립적이고 홀로 설 수 있는 내용을 담아주는데 주로 블로그 글, 포럼 글, 뉴스 기사등을 묶어준다. 해당 내용은 뉴스의 내용으로 독립적이므로 ```artice```로 묶어준다.    

4. w3c사이트가 리뉴얼 되었습니다. 의 문장은 artice 안의 세부적인 제목이 될 수 있으므로 ```h3```을 사용해 제목으로 작성해준다.```웹접근성으로 따졌을때 뉴스의 새소식인 w3c 사이트 리뉴얼 된 내용이라고 보다 알아보기 쉽게 접근이 가능해진다```    

5. ```time```태그를 사용하여 날짜를 작성해준다   

6. p태그를 사용하여 세부 내용을 작성한다   

7. image와 image 제목은 ```figure```태그를 이용하여 묶어준다     

8. figure 안에 ```image```와 ```figcaption```으로 이미지와 이미지 제목을 각각 묶어준다    

9. 더보기 링크를 article 다음에 a태그로 묶어준다(__가장 마지막에 작성한 이유는 어떤 내용을 더보기 할건지 내용이 나온 다음에 더보기 링크가 나오는게 논리적으로 더 알맞기 때문이다__)
<br>

```html
<section class="news">
          <h2 class="news-heading" id="newsTitle">새소식</h2>
          <article class="news-item">
            <h3 class="news-item-heading">W3C 사이트가 리뉴얼 되었습니다.</h3>
            <time class="news-item-date" datetime="2021-03-02T13:57:28">2021.03.02</time>
            <p class="news-item-brief">
              디자인 및 다양한 view 환경을 고려하여 구성되어 있으며, 기존보다 최신 정보 및 개발자를 위한 기술 가이드도 찾기 쉽도록 구성되어 있습니다.  
            </p>
            <figure class="news-item-thumbnail">
              <img src="./images/news.gif" alt="">
              <figcaption>W3C 리뉴얼</figcaption>
            </figure>
          </article>
          <a href="#" class="more-link icon-plus" aria-labelledby="newsTitle">더보기</a>
        </section>
```
<br>

### 👉css 설계    
__css로 스타일을 입히기 전 화면이다. position으로 컨텐츠를 배치할 수 있다.이때 position:absolute는 크기가 바뀌지 않을 컨텐츠에 주는 것이 합리적이다.__    

<img src = "https://user-images.githubusercontent.com/64240637/109666411-80c94000-7bb2-11eb-9142-46604b779609.PNG" width="600px" > 
<br>


__1. section.news__      
위의 내용과 거리를 떨어뜨리기 위해 여백을 준다.더보기 a태그는 section을 기준으로 위치를 배치하기 때문에 부모태그인 section에 ```position:relative```를 준다    
__2. section.news::before__   
부모요소를 기준으로 가상요소 선택자를 이용해서 구분선을 만들어준다. top으로 위치를 조절해주고 width값 100%으로 길이를 상자안에 꽉차게 지정해주고 height:1을 주어 border:1px과 같은 선을 만들어준다. linear-gradient를 사용하여 점점 희미해지는 선을 구현할 수 있다.top과 left를 사용하기 위해 position을 준다. 
```css
.news{
  margin-top: 20px;
  position: relative;
}
.news::before{
  content: "";
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #aaa linear-gradient(90deg, #aaa 0%, #ccc 50%, #fff 70%, #fff 100%);
}
```
__3. h2.news-heading__    
h2가 가지고 있는 기본값 margin을 없애주고 색깔은 전역으로 지정해준 색을 var()을 이용하여 지정해주었다. font-size는 ```1.5rem```으로 지정해주었다 __Q.(왜 1.5rem일까❓)__    

__4. article.news-item__     
더보기 ```position:relative```를 준다. article안에 들어가 있는 내용의 배치를 위해서 ```padding-left:145px```를 주었다. 위의 여백을 주기위해 ```margin-top```을 이용하였다 
아래의 내용을 보면 이미지와 이미지 제목은 크기가 계속 일정할 것이므로 figure에 position을 주어 위치를 왼쪽으로 이동시켜준다. 나머지 h3,time,p는 padding-left로 위치를 잡아준다.     

__5. h3.news-item-heading__    
article안의 제목인 h3의 여백을 주기 위해서 margin을 이용한다   
```css
.news-heading{
  margin: 0;
  font-size: 1.5rem;
  color: var(--primary-color);
}
.news-item{
  position: relative;
  padding-left: 145px;
  margin-top: 35px;
}
.news-item-heading{
  margin: 0 0 5px 0; 
}
```
__6. p.news-item-brief__   
세부내용에 여백을 주기위해서 ```margin```을 이용했으며 라인 간격을 띄우기 위해 ```line-height:1.5```를 이용하였다   

__7. figure.news-item-thumbnail__  
이미지와 이미지제목을 담고 있는 figure의 배치를 위해서 ```position```을 이용해 top과 left를 지정해 주었다. 이때 두개 요소의 위치는 중간에 와야하기 때문에 ```text-align: center```를 주었다   

__8. figure.news-item-thumbnail img__    
이미지에는 그림자 효과가 있으므로 ```box-shadow```를 이용한다. 이미지와 이미지 제목 사이에 여백이 있기 때문에 ```margin-bottom```를 주었다. __(❓이미지 제목이 box-shadow로 생기는 그림자 뒤로부터 배치되게 하기 위해 ```display:block```을 준다)__
```css
.news-item-brief{
  margin: 10px 0 0 0;
  line-height: 1.5; /* 글자크기의 절반만큼 갭이생긴다 */
}
.news-item-thumbnail{
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
}
.news-item-thumbnail img{
  display: block;
border: 1px solid red;
  box-shadow: 0 15px 15px 1px var(--silver);
  background-color: black;
  margin-bottom: 15px;
}
```
9. 마지막 남은 a링크 즉 더보기 요소는 position을 이용해 h2 옆에 위치 시킨다. top과 right , padding등으로 위치를 조절한다 
```css
.more-link{
  position: absolute;
  top: 5px;
  right: 0;
}
```
10. a링크에 있는 아이콘의 색만 초록색으로 바꾸기 위해서 가상요소 선택자 before를 이용해서 hsla 속성으로 색을 바꾸어주었다
```css
.more-link::before{
  color: hsla(110, 30%, 30%, 1);
}
```
* * *

### ✔ 새롭게 안 내용들 
1. figure-figcaption   
2. color: hsla    
3. position:absolute는 크기가 변하지 않는 요소에 준다
