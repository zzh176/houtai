<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  width: 100%;
  height: 100%;
}
html,body {
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>
