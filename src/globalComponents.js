import Vue from 'vue'

import refs from './components/base_components/refs.vue'
import subComponent from './components/base_components/subComponent.vue'
import customButton from './components/base_components/customButton.vue'


Vue.component('refs', refs)
Vue.component('subComponent', subComponent)
Vue.component('custom-button', customButton)