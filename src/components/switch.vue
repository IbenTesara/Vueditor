
<template>
  <a href="javascript:;" title="源码" @click="clickHandler">
    <i class="fa fa-code"></i>
  </a>
</template>

<script>

  import {mapActions} from 'vuex';

  export default {
    data(){
      return {
        editor: null
      }
    },
    
    methods: Object.assign({}, mapActions({
      'switchView',
      'updateTBDisabled',
      'updateTBDropdownDisplay'
    }),{
      clickHandler () {
        this.switchView();
        this.updateTBDisabled();
        this.updateTBDropdownDisplay();
      }
    }
  }
</script>