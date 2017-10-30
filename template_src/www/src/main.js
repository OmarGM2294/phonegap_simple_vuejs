import Vue from'vue'
import App from './App.vue'
import i18n from './vue/i18n/index'
import router from './vue/router/index'
import store from './vue/store/index'
import './vue/resource/index'
import './vue/components'
import './vue/filters'
import './vue/mixins'

new Vue({
    el: "#app",
    router: router,
    render: h => h(App),
    i18n: i18n,
    store: store
});
