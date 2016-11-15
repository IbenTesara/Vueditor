<style lang="less" rel="stylesheet/less">
  .format-block {
    a {
      display: block;
      padding: 6px;
      border-bottom: 1px solid #ddd;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background: #d5e1f2;
        border-color: #a3bde3;
      }
    }
  }
</style>

<template>
  <div class="ve-toolbar-dropdown ve-select-dropdown format-block" @click="selectItem" v-show="display" :style="{left: left + 'px', top: top + 'px'}">
    <a href="javascript:;" v-for="item in arr">{{item}}</a>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        arr: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        val: '',
        left: 0,
        top: 0
      }
    },
    computed: {
      disabled () {
        return this.$store.state.toolBtns.elements.disabled;
      },
      display () {
        return this.$store.state.toolBtns.elements.showmenu;
      }
    },
    methods: {
      updateTBDropdownDisplay (current) {
        this.$store.dispatch('updateTBDropdownDisplay', current);
      }
      toggle () {
        if(!this.disabled){
          // https://vuejs.org.cn/api/#vm-el
          // https://vuejs.org.cn/guide/components.html#片断实例
          let obj = this.$el.nextElementSibling || this.$el.nextSibling;
          this.left = obj.offsetLeft;
          this.top = obj.offsetTop + (obj.offsetHeight + parseInt(getComputedStyle(obj).marginBottom));
          this.updateTBDropdownDisplay('elements');
        }
      },
      selectItem (event) {
        let tagName = event.target.innerHTML.trim();
        this.val = tagName;
        this.$root.$refs.design.exec('formatBlock', tagName);
        this.updateTBDropdownDisplay();
      }
    }
  }

</script>