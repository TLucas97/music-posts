<template>
  <div class="header">
    <h2>MusicPosts ♪</h2>
    <div>
      <img
        v-b-toggle.sidebar-no-header
        src="https://cdn-icons-png.flaticon.com/512/56/56763.png"
        width="25"
      />
    </div>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
      right
      backdrop="true"
      width="160px"
    >
      <template>
        <div>
          <div class="header p-2">
            <h4 id="sidebar-no-header-title">Menu</h4>
          </div>
          <div
            class="d-flex justify-content-center align-items-center flex-column mt-2"
          >
            <div>
              <img src="../assets/john.png" width="80" />
            </div>
            <small>John Krasinsky</small>
            <div class="mt-3 text-center">
              <router-link to="/">
                <p>Home</p>
              </router-link>
              <router-link to="/posts">
                <p>Posts</p>
              </router-link>
              <router-link to="/profile">
                <p>Perfil</p>
              </router-link>
              <p>Sair</p>
            </div>
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  background: teal;
  padding: 0.4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}

p {
  margin-bottom: 0.5em !important;
  font-weight: bold;
}
</style>
