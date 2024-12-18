<template>
    <div class="wrap">
      <header>
        <div class="chat1">
          <div class="box1"></div>
          <h2><router-link to="/">&lt;</router-link></h2>
          <h1><router-link to="/nickname">≡</router-link></h1>
          <hr />
          <div class="profile">
            <img src="@/assets/image/profile.jpg" alt="Profile" />
          </div>
        </div>
      </header>
  
      <article>
        <div class="chat2">
          <div class="box8">이재현</div>
          <div class="date1">
            <router-link to="/OctView2">
              <img src="@/assets/image/10월/22-10-01.JPG" alt="10-02" />
              <p>10-02</p>
            </router-link>
          </div>
          <div class="date2">
            <router-link to="/OctView12">
              <img src="@/assets/image/10월/22-10-02.JPG" alt="10-12" />
              <p>10-12</p>
            </router-link>
          </div>
        </div>
      </article>
    </div>
  </template>

  <style scoped>
  @import url('@/assets/css/22-10.css');
    </style>
  