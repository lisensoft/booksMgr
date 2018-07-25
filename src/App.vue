<template>
  <div id="app">
    <keep-alive>
      <router-view class="view-router"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.view-router {
 position: absolute;
 width:100%;
 height: 100%;
 line-height:25px;
 overflow-x: hidden;
 overflow-y: scroll;
 /* background-color: $bg-color; */
 box-sizing: border-box;
 transition: all .8s cubic-bezier(.55,0,.1,1);
}
</style>
