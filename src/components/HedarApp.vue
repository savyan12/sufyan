<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand p-2 c" href="/">Sufyan</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto pl-25 x">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects" replace
              >Projects</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header-app",
};
</script>
<style scoped>
.c {
  color: #ffffff;
}
nav {
  border-bottom: solid 2px;
  position: sticky;
  top: 0;
}
</style>
