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
<style lang="scss" src="./assets/css/global.scss" />
