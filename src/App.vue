<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand v-market-logo"><img alt="Visual Market logo" height="40" src="../src/assets/img/logo-land.png"></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a href="#marketValues" class="nav-link">Market Values</a>
          </li>
          <li class="nav-item active">
            <a href="#topMarketValues" class="nav-link">Top Values</a>
          </li>
          <!-- <li class="nav-item active d-flex align-items-center">
            <router-link to="/about" class="nav-link p-0"><i class="material-icons pt-1">bookmark</i></router-link>
          </li> -->
        </ul>
      </div>
    </nav>
    <router-view/>
    <footer class="d-flex justify-content-center mb-5">
      <img alt="Visual Market logo" height="100" src="../src/assets/img/logo-port.png">
    </footer>
  </div>
</template>


<style>
  @import'~bootstrap/dist/css/bootstrap.css';
</style>


<script>
  export default {
    name: 'App'
  }
</script>
