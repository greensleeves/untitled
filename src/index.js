import Vue from 'vue'
import MyComponent from './components/MyComponent.vue'

const app = new Vue({
  components: {
    MyComponent
  }
})

app.$mount('#root')
