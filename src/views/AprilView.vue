<template>
    <div class="wrap">
      <header>
        <div class="chat1">
          <div class="box1"></div>
          <h2><router-link to="/">&lt;</router-link></h2>
          <h1><router-link to="/">≡</router-link></h1>
          <hr />
          <div class="profile">
            <img src="../assets/image/profile.jpg" alt="Profile Image" />
          </div>
        </div>
      </header>
      <article>
        <div class="chat2">
          <div class="box8">이재현</div>
          <div class="date1">
            <router-link to="/AprilView11">
              <img src="../assets/image/9월/22-09-01.jpg" alt="Image 22-09-11" />
              <p>09-11</p>
            </router-link>
          </div>
          <div class="date2">
            <RouterLink to="/AprilView24">
              <img src="../assets/image/9월/22-09-02.jpg" alt="Image 22-09-24" />
              <p>09-24</p>
            </RouterLink>
          </div>
        </div>
      </article>
    </div>
  </template>

<style scoped>
@import url('@/assets/css/22-09.css');
  </style>