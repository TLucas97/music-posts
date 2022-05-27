<template>
  <div class="home">
    <div class="music-banner"></div>
    <div class="banner">
      <h6>Compartilhe o seu talento</h6>
      <div class="d-flex justify-content-evenly button-wrapper mt-3">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <b-button class="teal-button">
              <b-icon icon="plus-lg"></b-icon>
            </b-button>
          </div>
          <small class="mt-1">Adicionar post</small>
        </div>
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <b-button class="teal-button">
              <b-icon icon="music-note-list"></b-icon>
            </b-button>
          </div>
          <small class="mt-1">Acessar posts</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home{
  width: 100%;
}

.music-banner {
  background: url("https://www.hooksounds.com/assets/seo/illustration.svg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 300px;
}

.button-wrapper {
  width: 100%;
}

.teal-button {
  background: teal;
  color: white;
  border: none;
}

small {
  font-size: 0.7em;
  color: rgba(128, 128, 128, 0.829);
}

.banner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
