<template>
  <div class="hello">
    <x-button @click.native="submit()" >submit</x-button>
  </div>
</template>
<script>
import { XButton } from 'vux'
export default {
  name: 'HelloWorld',
  components: {
    XButton
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    submit() {
      Bmob.initialize('15586428ac51fb6e41c481ee13251fc3', '69e68188c08bbf7de27877b85efcce7e')
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
