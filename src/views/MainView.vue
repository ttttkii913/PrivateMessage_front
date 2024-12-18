<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
    <div class="wrap">
      <header>
        <div class="chat1">
          <div class="box1"></div>
          <h2>&lt;</h2>
          <h1><router-link to="nickname">&#x2261;</router-link></h1>
          <hr />
          <div class="profile">
            <img src="@/assets/image/profile.jpg" alt="profile" />
          </div>
        </div>
      </header>

      <main>
        <article>
          <div class="chat2">
            <div class="box8">이재현</div>
            <div class="box2">Private</div>
            <div class="box3">Message</div>
            <div class="box4">Backup</div>
          </div>

          <div class="chat3">
            <div class="box5"><router-link to="/AprilView">22-09</router-link></div>
            <div class="box6"><router-link to="/OctView">22-10</router-link></div>
            <div class="box7"><router-link to="/ImageGallery">Gallery</router-link></div>
          </div>
        </article>
      </main>

      <footer>
        <p>2022-11-27 yhy</p>
      </footer>
    </div>
</template>