<template>
  <div>
    <tabbar >
      <tabbar-item selected :link="{path: '/'}">
        <i slot="icon" class="iconfont icon-form" ></i>
        <span slot="label" style="margin:0">开单</span>
      </tabbar-item>
      <tabbar-item :link="{ path: '/reconcile', replace: true }">
        <i slot="icon" class="iconfont icon-jifen" ></i>
        <span slot="label" style="margin:0">对帐</span>
      </tabbar-item>
      <tabbar-item :link="{ path: '/history', replace: true }">
        <i slot="icon" class="iconfont icon-viewlist" ></i>
        <span slot="label" style="margin:0">历史</span>
      </tabbar-item>
      <tabbar-item :link="{ path: '/user', replace: true }">
        <i slot="icon" class="iconfont icon-account" ></i>
        <span slot="label" style="margin:0">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style scoped>

</style>

