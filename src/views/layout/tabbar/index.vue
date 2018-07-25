<template>
  <div>
    <tabbar style="position:fixed">
    <tabbar-item selected>
      <i slot="icon" class="iconfont icon-form" ></i>
      <span slot="label" style="margin:0">开单</span>
    </tabbar-item>
    <tabbar-item>
      <i slot="icon" class="iconfont icon-jifen" ></i>
      <span slot="label" style="margin:0">对帐</span>
    </tabbar-item>
    <tabbar-item>
      <i slot="icon" class="iconfont icon-viewlist" ></i>
      <span slot="label" style="margin:0">历史</span>
    </tabbar-item>
    <tabbar-item>
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
