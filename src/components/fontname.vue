
<style lang="less" rel="stylesheet/less">
  .font-select {
    width: 100px;
    font-size: 14px;
    vertical-align: bottom;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .font-name {
    li {
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
  <div class="ve-toolbar-dropdown ve-select-dropdown font-name" v-show="display" :style="{left: left + 'px', top: top + 'px'}">
    <ul>
      <li v-for="font in fonts" @click="clickHandler(font)">
        <a href="javascript:;" :style="{fontFamily: font.name + ', sans-serif'}">{{font.abbr || font.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>

  let fonts = [
    {name: "宋体, SimSun", abbr: "宋体"}, {name: "黑体, SimHei", abbr: "黑体"}, {name: "楷体, SimKai", abbr: "楷体"},
    {name: "微软雅黑, 'Microsoft YaHei'", abbr: "微软雅黑"}, {name: "arial black"}, {name: "times new roman"},
    {name: "Courier New"}
  ];

  export default {
    data(){
      return {
        fonts: fonts,
        val: '',
        left: 0,
        top: 0
      }
    },
    computed: {
      disabled () {
        return this.$store.state.toolBtns.fontName.disabled;
      },
      display () {
        return this.$store.state.toolBtns.fontName.showmenu;
      }
    },
    methods: {
      updateTBDropdownDisplay (current) {
        this.$store.dispatch('updateTBDropdownDisplay', current);
      }
      toggle () {
        if(!this.disabled){
          let obj = this.$el.nextElementSibling || this.$el.nextSibling;
          this.left = obj.offsetLeft;
          this.top = obj.offsetTop + (obj.offsetHeight + parseInt(getComputedStyle(obj).marginBottom));
          this.updateTBDropdownDisplay('fontName');
        }
      },
      clickHandler (font) {
        this.val = font.abbr || font.name;
        this.$root.$refs.design.exec('fontName', font.name + ', sans-serif');
        this.updateTBDropdownDisplay();
      }
    }
  }
</script>