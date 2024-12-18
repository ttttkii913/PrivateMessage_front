<template>
    <div class="wrap">
      <header>
        <div class="chat1">
          <div class="box1"></div>
          <h2><router-link to="/OctView"> &lt; </router-link></h2>
          <h4>10-12</h4>
          <h1><router-link to="/nickname">≡</router-link></h1>
          <hr />
          <div class="profile">
            <img src="@/assets/image/profile.jpg" alt="Profile" />
          </div>
          <div class="box8">이재현</div>
        </div>
      </header>
      <article>
        <div class="chat2">
          <p>안냥</p>
          <p>안냥</p>
          <p>밥 먹었지 ㅎ</p>
          <p>쟁반짜장과 탕수육</p>
          <p>혼자..</p>
          <p>같이먹어줄래?</p>
          <p>와이파이로</p>
          <p>ㅋㅋㅋㅋㅋ</p>
          <p>한까줍쇼처럼 더비한테가면 메뉴 뭐야</p>
          <p>닭가슴살 뭐야</p>
          <p>단백질챙겨주네</p>
          <p>식단이야?,</p>
          <p>알겠어 뭐든 고마워 ㅋㅋ</p>
          <p>
            <img
              src="@/assets/image/10월/10-12-01.JPG"
              alt="10-12-01"
              @click="openImage($event)"
            />
          </p>
          <p>
            <img
              src="@/assets/image/10월/10-12-02.JPG"
              alt="10-12-02"
              @click="openImage($event)"
            />
          </p>
          <p>
            <audio src="../src/assets/image/present.mp3" controls></audio>
          </p>  
            <p>선물</p>
          <p>수학 34점받았어?!</p>
          <p>다음시험때는 43점받도록해</p>
          <p>십점씩올리자</p>
          <p>
            한편으로는 올릴수있는점수가<br />많아서 좋은거야
          </p>
          <p>공부가 인생의 전부가아니야</p>
          <p>
            물론 잘하면 너무 좋겠지만
          </p>
          <p>
            엄~청 열심히해도 아닌것같으면<br />얼른 다른걸 찾아야지
          </p>
          <p>왜냐면 나도 공부에 붙잡혀서<br />살았을때가 있었거든</p>
          <p>
            근데 지금 생각해보면 그때부터<br />다른걸 했다면
          </p>
          <p>더 좋았겠다라는 생각을해ㅋㅋ</p>
          <p>오노추하고 갈게</p>
          <p>데이식스 놓아놓아놓아</p>
          <p>안녕</p>
          <p>하트해</p>
        </div>
      </article>
    </div>
  </template>
  
  <script setup>
  function openImage(event) {
    window.open(event.target.src);
  }
  
  </script>
  
  <style scoped>
  @import url('@/assets/css/22-10-12.css');
  
  /* 여기에 추가 스타일이 있으면 작성 */
  </style>
  