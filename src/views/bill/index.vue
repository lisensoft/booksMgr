<template>
  <div>
    <popup-header left-text="取消" right-text="保存" title="新建单据" style="background-color: #fff" :show-bottom-border="false"></popup-header>
    <group style="background-color: #fff">
      <selector placeholder="请选择客户姓名" v-model="demo01" title="姓名" :options="list" @on-change="onChange"></selector>
      <selector placeholder="请选择单据类型" v-model="demo01" title="类型" :options="list" @on-change="onChange"></selector>
    </group>
    <x-table :cell-bordered="true" :content-bordered="true" style="background-color:#fff;margin-top:10px" >
      <thead>
        <tr style="background-color: #F7F7F7">
          <th>类型</th>
          <th>毛重</th>
          <th>净重</th>
          <th>单价</th>
          <th>总价</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Apple</td>
          <td>$1.25</td>
          <td> x 1</td>
          <td> x 1</td>
          <td> x 1</td>
        </tr>
        <tr>
          <td>Banana</td>
          <td>$1.20</td>
          <td> x 2</td>
          <td> x 1</td>
          <td> x 1</td>
        </tr>
      </tbody>
    </x-table>
    </div>
</template>

<script>
import { XTable, PopupHeader, Selector } from 'vux'

export default {
  components: {
    XTable,
    PopupHeader,
    Selector
  },
  data() {
    return {
      demo01: null,
      list: [{ key: 'gd', value: '广东' }, { key: 'gx', value: '广西' }]
    }
  },
  methods: {
    onChange() {
      console.log(123)
    }
  }
}
</script>
