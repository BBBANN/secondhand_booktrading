import Vuex from 'vuex';
import Vue from 'vue';
import tab from './tab';
import book from './book';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tab,
        book
    }
})