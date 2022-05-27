<template>
  <div class="home">
    <div v-for="(post, index) in postBody" :key="index" class="card mb-3">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h5>{{ post.title }}</h5>
          </div>
          <div>
            <small>by: {{ post.author }}</small>
          </div>
        </div>
      </div>
      <div class="card-body"></div>
      <div class="card-footer">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <b-icon
              class="arrow-hover"
              color="teal"
              icon="arrow-up-circle-fill"
              @click="upVote(post)"
            ></b-icon>
            <span
              class="m-forced"
              :class="post.votes > 0 ? 'text-success' : 'text-danger'"
              >{{ post.votes }}</span
            >
            <b-icon
              class="arrow-hover"
              color="teal"
              icon="arrow-down-circle-fill"
              @click="downVote(post)"
            ></b-icon>
          </div>
          <a href="#" class="btn teal text-white">Abrir post</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postBody: [
        {
          title: "Gwayzan",
          author: "Lucas almeida",
          votes: 0,
        },
        {
          title: "Aniverseiro",
          author: "Rei do kuduairo",
          votes: 0,
        },
      ],
      voteView: false,
      voteColor: "",
    };
  },
  methods: {
    upVote(post) {
      post.votes++;
    },
    downVote(post) {
      post.votes--;
    },
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
  width: 100%;
}

.teal {
  background: teal;
}

span {
  font-weight: bold;
}

small {
  margin-top: 1em !important;
  font-size: 0.47rem;
  border-bottom: 1px solid #ffffff49;
}

.card {
  border: 1px solid #00000052;
}

a {
  font-size: 0.89rem;
}

.card-body {
  width: 100%;
  height: 125px;
  background: url("https://www.seekpng.com/png/detail/115-1154466_singer-clipart-karaoke-machine-live-singer-clip-art.png");
  background-size: cover;
  background-position: center;
  border: 1px solid #00000052;
}

.card-header {
  background: teal;
  color: white;
}

.m-forced {
  margin-right: 0.3em !important;
  margin-left: 0.3em !important;
}

.arrow-hover:focus {
  color: teal;
}
</style>
