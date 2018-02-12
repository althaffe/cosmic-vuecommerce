<template>
  <div>
    <nav class="navbar is-white has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item is-size-3 logo has-text-dark">
            The<b>Case</b> Company
          </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <nuxt-link :to="{name: 'cart'}"> Cart (0)</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt/>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          Proudly Powered By <a href="https://cosmicjs.com" class="has-text-dark"><strong>Cosmic JS</strong></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  background: #DAE2DB;
}
</style>
