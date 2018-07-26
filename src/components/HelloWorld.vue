<template>
  <div class="hello">
    <x-header class="vuxHander" title="哈喽"  ></x-header>
    <box gap="50px 10px 60px 10px">
      <group >
        <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell> <cell is-link title="Simsssple" ></cell>
        <cell is-link title="Switch icons" ></cell>
        <cell-box >
           <rater v-model="datas"></rater>
        </cell-box>
      </group>
      <x-button @click.native="submit()"   type="warn" show-loading mini >submit</x-button>
    </box>
  </div>
</template>
<script>
import { XButton, Group, Cell, Box, CellBox, Rater, XHeader } from 'vux'
export default {
  name: 'HelloWorld',
  components: {
    XButton,
    Group,
    Cell,
    Box,
    CellBox,
    Rater,
    XHeader
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      datas: 6
    }
  },
  methods: {
    submit() {
      var GameScore = Bmob.Object.extend('userData')
      var gameScore = new GameScore()
      gameScore.set('name', '1234')
      gameScore.save(null, {
        success: function(object) {
          alert('create object success, object id:' + object.id)
        },
        error: function(model, error) {
          alert('create object fail')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
