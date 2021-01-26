import Vue from './vue/init/Vue'
import App from './vue/component/App'
import './scss/main.scss'

const app = new Vue(App)
app.$mount('vue')
