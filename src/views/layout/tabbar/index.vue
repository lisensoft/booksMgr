<template>
  <tabbar>
    <tabbar-item>
      <i class="iconfont icon-form" style="font-size:20px"></i>
      <span slot="label">开单</span>
    </tabbar-item>
    <tabbar-item show-dot>
      <i class="iconfont icon-jifen" style="font-size:20px"></i>
      <span slot="label">对帐</span>
    </tabbar-item>
    <tabbar-item selected link="/component/demo">
      <i class="iconfont icon-viewlist" style="font-size:20px"></i>
      <span slot="label">历史</span>
    </tabbar-item>
    <tabbar-item badge="2">
      <i class="iconfont icon-account" style="font-size:20px"></i>
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
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
