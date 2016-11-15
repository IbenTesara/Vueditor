
import mutations from './mutations';
import * as actions from './actions';
import Vue from 'vue';
import Vuex from 'vuex';
import toolbarConfig from 'toolbarConfig';

let toolbarStates = {};
toolbarConfig.forEach(function (name) {
    !toolbarStates[name] && (toolbarStates[name] = {});
    toolbarStates[name].active = false;
    toolbarStates[name].disabled = false;
    toolbarStates[name].showmenu = false;
});

const state = {

    // toolbar disabled state & active state
    toolbarStates: toolbarStates,
    
    // editor content
    content: '',

    // current display block: design or sourceCode
    currentView: 'design'
    
};

// Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions
});