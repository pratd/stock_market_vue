<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand v-market-logo"><img alt="Visual Market logo" height="40" src="../src/assets/img/logo-land.png"></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/about" class="nav-link">Market Values</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/about" class="nav-link">Top Values</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/about" class="nav-link p-0"><i class="material-icons">bookmark</i></router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap");
  @import'~bootstrap/dist/css/bootstrap.css'
</style>