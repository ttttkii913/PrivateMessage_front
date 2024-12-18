<template>
    <div class="wrap">
      <header>
        <div class="chat1">
          <div class="box1"></div>
          <h2><router-link to="/AprilView">&lt;</router-link></h2>
          <h4>09-11</h4>
          <h1><router-link to="/nickname">≡</router-link></h1>
          <hr />
          <div class="profile">
            <img src="@/assets/image/profile.jpg" alt="profile" />
          </div>
          <div class="box8">이재현</div>
        </div>
      </header>
  
      <article>
        <div class="chat2">
          <p>안녕</p>
          <p>안녕</p>
          <p>밥 많이먹었지 ㅋㅋ</p>
          <p>더비 추석 잘 보냈나??</p>
          <p>먹고눕고 먹고눕고 ㅋㅋ</p>
          <p>아니 내가 그랬다고 ㅋㅋ</p>
          <p>찔리는사람들 ㅋㅋㅋ 몬데</p>
          <p>나는 내가 그런걸 얘기한건데</p>
          <p>뜨끔했나봐ㅋㅋㅋㅋ</p>
          <p>
            <img
              src="@/assets/image/9월/09-11-01.JPG"
              alt="image1"
              @click="openImage($event)"
            />
          </p>
          <p>나 이거봤다</p>
          <p>엄마 아빠랑 트리플?</p>
          <p>가는도중에 봤어 ㅋㅋ</p>
          <p>트리플이 동네에있는 장소</p>
          <p>송현아 맞아</p>
          <p>송도현대아울렛</p>
          <p>줄여서 송현아</p>
          <p>아니 나도 더비가 알려준건데</p>
          <p>ㅋㅋㅋㅋㅋㅋ</p>
          <p>영훈이도 만났지</p>
          <p>다롱이 보리?</p>
          <p>만났을까 안만났을까</p>
          <p>다롱이가 체념한 사진 보여줄게</p>
          <p>
            <img
              src="@/assets/image/9월/09-11-02.JPG"
              alt="image2"
              @click="openImage($event)"
            />
          </p>
          <p>
            <img
              src="@/assets/image/9월/09-11-03.JPG"
              alt="image3"
              @click="openImage($event)"
            />
          </p>
          <p>
            <img
              src="@/assets/image/9월/09-11-04.JPG"
              alt="image4"
              @click="openImage($event)"
            />
          </p>
          <p>선물줬으니 나는 간다 ㅎㅎ</p>
          <p>하트해</p>
        </div>
      </article>
    </div>
  </template>
  
  <script setup>
  const openImage = (event) => {
    window.open(event.target.src);
  };
  </script>
  
  <style scoped>
  @import url('@/assets/css/22-09-11.css');
  </style>
  