<template>
    <div class="wrap">
      <header>
        <div class="chat1">
          <div class="box1"></div>
          <h2><router-link to="/AprilView">&lt;</router-link></h2>
          <h4>09-24</h4>
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
          <p>손가락 더보이즈컨텐츠</p>
          <p>촬영하다가 까졌어 ㅋㅋ</p>
          <p>걱정마러</p>
          <p>내 페라리기스났어라는<br />더비ㅋㅋㅋㅋㅋㅋ</p>
          <p>웃겼다^^</p>
          <p>9월의 센스왕 당첨이여</p>
          <p>오늘 공연했는데</p>
          <p>체력이 안좋아졌나봐</p>
          <p>너무 힘들었어 ㅋㅋㅋ</p>
          <p>숨이차 ㅋㅋㅋ</p>
          <p>날씨가 갑자기 쌀쌀해져서 그런가</p>
          <p>나이들어서?ㅋㅋㅋㅋㅋㅋ</p>
          <p>맞지..ㅋㅋㅋ</p>
          <p>그래도 마음은 체력왕이라고!</p>
  
          <p>
            <img
              src="@/assets/image/9월/09-24-01.JPG"
              alt="image1"
              @click="openImage($event)"
            />
          </p>
          <p>
            <img
              src="@/assets/image/9월/09-24-02.JPG"
              alt="image2"
              @click="openImage($event)"
            />
          </p>
  
          <p>사진보여달라할줄알고<br />미리 보냄</p>
          <p>나는 가을이 젤좋아</p>
          <p>
            가을이라는 이름을 가진<br />더비가 있다면 좋겠네~
          </p>
          <p>개명하지마</p>
          <p>다 좋아하니까..ㅠㅠ</p>
          <p>
            나 영양제 잘챙겨먹으니까<br />걱정말고ㅎㅎ
          </p>
          <p>따뜻하게 입어야함!</p>
          <p>오늘 추천곡</p>
          <p>아이유 자장가</p>
          <p>콘서트갔지</p>
          <p>좋았지 ㅋㅋ</p>
          <p>질투하지마</p>
          <p> {{ nickname }}</p>
          <p>가 더좋아~</p>
          <p>그럼 오노추 잘듣고 잘자</p>
          <p>하트해</p>
        </div>
      </article>
    </div>
  </template>
  
  <script setup>
  const openImage = (event) => {
    window.open(event.target.src);
  };
  
  import { ref, onMounted } from 'vue';
  const API_URL = import.meta.env.VITE_API_URL;

const nickname = ref('');  

// 백엔드에서 nickname을 받아오는 함수
const fetchNickname = async (id) => {
  try {
    const response = await fetch(`${API_URL}/user/nickname/${id}`); 
    const data = await response.json();
    nickname.value = data.nickname; 
  } catch (error) {
    console.error('Nickname을 가져오는 데 실패했습니다:', error);
  }
};

onMounted(() => {
  const id = 1;
  fetchNickname(id);
});

  </script>
  
  <style scoped>
  @import url('@/assets/css/22-09-24.css');
  </style>
  