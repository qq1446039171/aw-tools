import Wow from './src/index.vue'

Wow.install = (Vue ) => {
Vue.component(Wow.name, Wow)
}

export default Wow
