<template>
  <nav id="nav" class="navbar navbar-dark navbar-expand-lg bg-backround shadow-lg p-3 mb-5">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand fw-bold" href="./index.html">CapeCoast <span id="brand-text">Customs</span></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll p-3 mb-5 rounded me-5 ms-5" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Showroom" class="nav-link">Showroom</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link to="" class="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admin Options</router-link>
              <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><router-link to="/Admin" class="dropdown-item">Admin Page</router-link></li>
                <li><router-link to="/" class="dropdown-item">Something</router-link></li>
                <li><hr class="dropdown-divider"></li>
                <li><router-link to="/" class="dropdown-item">Something else here</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://muda-autohaus.netlify.app/">Our Other Branch</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-danger" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .navbar{
    position: fixed;
    width: 100%;
    z-index: 1000;
}
.navbar-brand {
    font-family: curly;
    text-decoration: underline red;
}
#brand-text {
    font-family: dead;
    text-decoration: underline red;
}
.nav-link:hover {
    text-decoration: underline red 3px;
}
</style>