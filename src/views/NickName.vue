<template>
    <div class="wrap">
      <header>
        <div class="chat1">
          <div class="box1"></div>
          <h2><router-link to="/">&lt;</router-link></h2>
          <h4>닉네임</h4>
          <h1><router-link to="/nickname">≡</router-link></h1>
          <hr />
        </div>
      </header>
  
      <section>
        <div class="chat2">
          
          <br />
          <input
            type="text"
            class="nickname"
            placeholder="닉네임 입력"
            v-model="nickname"
          /><br /><br />
          <button
            type="button"
            @mouseover="handleMouseOver"
            @mouseout="handleMouseOut"
            @click="saveNickname"
          >
            저장
          </button>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const nickname = ref(''); // 상태 변수
  const API_URL = import.meta.env.VITE_API_URL;

  // 마우스 아웃 이벤트 처리
  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = ''; // 원래 상태로 복구
  };
  
  const saveNickname = async () => {
  if (!nickname.value) {
    alert('닉네임을 입력해주세요');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/user/nickname`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname: nickname.value }),
    });

    if (response.ok) {
      const data = await response.json();
      
      alert(`저장된 닉네임: ${data.nickname}`);
    } else {
      alert('닉네임 저장 실패');
    }
  } catch (error) {
    console.error('API 호출 오류:', error);
  }
};
  </script>
  
  <style scoped>
  @import url('@/assets/css/nickname.css');
  </style>
  