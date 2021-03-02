
#### 구현 할 콘텐츠
<img src = "https://user-images.githubusercontent.com/64240637/109642082-e1964f80-7b95-11eb-9064-9b01c7290712.png" width="500px" > 
<br>


#### 1. HTML 마크업    
<br>

<img src = "https://user-images.githubusercontent.com/64240637/109645613-6f743980-7b9a-11eb-801b-317b1ac3d7c5.PNG" width="700px" > 
<br>

#### 논리적인 마크업 순서
1. ```section```으로 서로 관계 있는 문서를 분리하여 묶어준다   
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
          <a href="#" class="news-more icon-plus" aria-labelledby="newsTitle">더보기</a>
        </section>
```


#### css 설계    
