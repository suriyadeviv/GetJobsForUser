<template>
  <div id="app">
    <v-app>
  <main>
    <router-view/>
  </main>
</v-app>
</div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
@media only screen and (min-width: 768px){
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5786b5;
  margin: 40px;
  width: max-content;
}
}

@media only screen and (min-width: 320px) and (max-width: 768px) {
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5786b5;
  margin: 16px;
  }
}
</style>
