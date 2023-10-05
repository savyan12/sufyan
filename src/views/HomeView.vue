<template>
  <div class="home">
    <div class="row boxc">
      <div class="col-lg-6 col-sm-12">
        <p class="text1">
          <span class="d-block span">Hello</span
          ><span class="d-block span">I am Sufyan.</span
          ><span class="d-block span">I am a front-end Developer</span>
          <span class="d-block span">and I love the web field</span>
          <span class="d-block span"> Welcome to my website</span>
        </p>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="photo">
          <img
            src="../../imgs/sr2f5d41187e5aws3-651ea32ce78e9.webp"
            alt="pixel art"
          />
        </div>
      </div>
      <p></p>
    </div>
    <div class="c"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-md-12">
          <div class="mb-4 p-4 rounded-3">
            <div class="container section">
              <h1 class="display-5 fw-bold p-3">Who is sufyan ?</h1>
              <div>
                <p class="text">
                  Hello I am Sufyan from Libya. I am 18 years old.
                </p>
                <p class="text">
                  I am a student at the College of Electronic Technology Tripoli
                </p>
                <p class="text">I love designing and programming websites.</p>
                <p class="text">
                  I use the <span class="frameworkVue">Vuejs</span> framework
                  and <span class="frameworkBootstrap">Bootstrap</span>.
                </p>
                <p class="text">
                  I am seeking to develop myself and become one of the best.
                </p>
                <p class="text">Welcome to my personal website.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c"></div>
    <FollowMe></FollowMe>
  </div>
</template>

<script>
// @ is an alias to /src
import FollowMe from "../components/FollowMe.vue";
export default {
  name: "HomeView",
  components: {
    FollowMe,
  },
};
</script>
<style scoped>
.home {
  overflow: hidden;
}
.c {
  width: 100%;
  padding: 2px;
  border-bottom: solid white 2px;
}
.boxc {
  margin-top: 8rem;
}
.photo {
  width: 100%;
  height: 100%;
}
img {
  width: 80%;
  border-radius: 20px;
  object-fit: cover;
}
.text1 {
  font-size: 40px;
}
.span {
  margin-left: 3.8rem;
  text-align: start;
}
.text {
  text-align: center;
  font-size: 35px;
}
.section {
  border-radius: 30px;
  z-index: -1;
  backdrop-filter: blur(100px) saturate(180%);
}
.frameworkVue {
  color: lightgreen;
  cursor: help;
}
.frameworkBootstrap {
  color: rgb(54, 22, 173);
  cursor: help;
}
@media (max-width: 710px) {
  .text1 {
    font-size: 32px;
  }
  .span {
    margin-left: 1rem;
    text-align: center;
  }
  .text {
    text-align: center;
    font-size: 32px;
  }
}
</style>
