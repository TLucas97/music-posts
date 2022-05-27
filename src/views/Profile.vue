<template>
  <div class="profile">
    <div class="profile-content">
      <div>
        <img src="../assets/john.png" width="145" />
      </div>
      <h5>John Krasinsky</h5>
      <div class="mt-3" style="width: 100%">
        <b-row>
          <b-col class="adjust">
            <small><span>Apelido</span>: Richard</small>
          </b-col>
          <b-col class="adjust">
            <small><span>Idade</span>: 25</small>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="adjust">
            <small><span>Hobbies</span>: Fantastic4</small>
          </b-col>
          <b-col class="adjust">
            <small><span>Posts</span>: 78</small>
          </b-col>
        </b-row>
      </div>
      <div class="d-flex justify-content-evenly button-wrapper mt-5">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <b-button class="teal-button">
              <b-icon icon="pencil-square"></b-icon>
            </b-button>
          </div>
          <small class="mt-1">Editar perfil</small>
        </div>
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <b-button class="teal-button">
              <b-icon icon="door-closed-fill"></b-icon>
            </b-button>
          </div>
          <small class="mt-1">Sair da conta</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  width: 100%;
}

.profile-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1em;
}

small {
  font-size: 0.7rem;
}

.button-wrapper {
  width: 100%;
}

.teal-button {
  background: teal;
  color: white;
  border: none;
}

span {
  font-weight: bold;
}

h5 {
  font-weight: bold;
}

.adjust {
  border: 1px solid teal;
  margin: 0.1em;
  border-radius: 5px;
}
</style>
