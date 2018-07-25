<template>
  <div>
    <keep-alive>
      <router-view class="child-view"></router-view>
    </keep-alive>
  <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './tabbar'
export default {
  name: 'app',
  components: {
    tabbar
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.child-view{
   margin-bottom: 50px;
}
</style>
