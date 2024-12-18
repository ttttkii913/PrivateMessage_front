<template>
    <div class="wrap">
      <header>
        <div class="chat1">
          <div class="box1"></div>
          <h2><router-link to="/OctView"> &lt; </router-link></h2>
          <h4>10-02</h4>
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
          <p>하이</p>
          <p>하이</p>
          <p>오늘 우리 바쁘지</p>
          <p>밥 먹었오 ㅎㅎ</p>
          <p>도시락?</p>
          <p>맞아 오늘 엠씨도해 ㅎ</p>
          <p>근데 오늘 비와?</p>
          <p>비맞지마..</p>
          <p>
            <img
              src="@/assets/image/10월/10-02-01.JPEG"
              alt="10-02-01"
              @click="openImage($event)"
            />
          </p>
          <p>
            <img
              src="@/assets/image/10월/10-02-02.JPEG"
              alt="10-02-02"
              @click="openImage($event)"
            />
          </p>
          <p>뒤에 케빈ㅋㅋㅋ</p>
          <p>실시간이야ㅋㅋ</p>
          <p>오늘 응원봉색 빨간색 가자</p>
          <p>오는 더비는 조심히 오고 좀따 보자 ㅎㄹ</p>
          <p>밥먹구와~</p>
          <p>하트해 ㅎ</p>
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
  @import url('@/assets/css/22-10-02.css');
  
  /* 여기에 추가 스타일이 있으면 작성 */
  </style>
  