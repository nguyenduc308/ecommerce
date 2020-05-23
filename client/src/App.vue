<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  component: {
    
  }
}
</script>

<style>
#app{
  overflow: hidden;
}
body{
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
  box-sizing: border-box;
  font-family: 'Poppins' , sans-serif;
}
p,ul,li,h1,h1,h3,h4{
  margin: 0;
  padding: 0;
}
</style>
