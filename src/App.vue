<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/"><img alt="Visual Market logo" height="40" src="../src/assets/img/logo-land.png"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/about">Market Values</b-nav-item>
          <b-nav-item href="/about">Top Values</b-nav-item>
          <b-nav-item href="/about"><i class="material-icons pt-1">bookmark</i></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
    <footer class="d-flex justify-content-center">
      <img alt="Visual Market logo" height="100" src="../src/assets/img/logo-port.png">
    </footer>
  </div>
</template>


<script>
  export default {
    name: 'App'
  }
</script>
