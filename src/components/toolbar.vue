
<style lang="less" rel="stylesheet/less">
  .ve-toolbar {
    border: 1px solid #ddd;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    &:after {
      clear: both;
      content: "";
      display: block;
      width: 0;
      height: 0;
      visibility: hidden;
    }
  }
  .ve-toolbar > a {
    display: inline-block;
    padding: 10px 12px;
    color: rgba(0, 0, 0, 0.5);
    &.ve-divider {
        width: 0;
        height: 26px;
        margin: 5px;
        padding: 0;
        vertical-align: top;
        border-right: 1px solid #ddd;
    }
    &.ve-active, &:not(.ve-disabled):hover {
      background: #eee;
      color: #000;
    }
  }
</style>

<template>
  <div class="ve-toolbar">
    <template v-for="item in config">
      <a v-if="item == 'divider' || item == '|'" href="javascript:;" class="ve-divider">
      </a>
      <a v-if="toolbarBtns[item] && !toolbarBtns[item].type" href="javascript:;" :title="toolbarBtns[item].title"
        :class="{'ve-active': false, 've-disabled': false}" @click="clickHandler(item, null)"  unselectable="on">
        <i :class="['fa', toolbarBtns[item].class]"></i>
      </a>
      <a v-if="toolbarBtns[item] && toolbarBtns[item].type == 'select'" href="javascript:;" :class="['ve-select', toolbarBtns[item].class]">
        <span>1123<i :class="{'triangle-down': true, 'triangle-up': false}"></i></span>  
      </a>
    </template>
  </div>
</template>

<script>

  // import color from './color.vue';
  // import fontName from './fontname.vue';
  // import fontSize from './fontsize.vue';
  // import switch from './switch.vue';
  // import elements from './elements.vue';
  // import tables from './table.vue';
  // import undo from './undo.vue';
  // import links from './link.vue';
  // import emoji from './emoji.vue';
  // import picture from './picture.vue';

  // import {mapActions} from 'vuex';
  // import {toolbarConfig} from '../js/config';
  import toolbarConfig from 'toolbarConfig';

  let toolbarBtns = {

    // native 
    removeFormat: {title: '清除选中区域格式', class: 'fa-eraser'},

    bold: {title: '加粗', class: 'fa-bold'},
    italic: {title: '斜体', class: 'fa-italic'},
    underline: {title: '下划线', class: 'fa-underline'},
    strikeThrough: {title: '中划线', class: 'fa-strikethrough'},

    superscript: {title: '上标文字', class: 'fa-superscript'},
    subscript: {title: '下标文字', class: 'fa-subscript'},
    indent: {title: '增加缩进', class: 'fa-indent'},
    outdent: {title: '减少缩进', class: 'fa-outdent'},

    justifyLeft: {title: '左对齐', class: 'fa-align-left'},
    justifyCenter: {title: '中间对齐', class: 'fa-align-center'},
    justifyRight: {title: '右对齐', class: 'fa-align-right'},
    justifyFull: {title: '两端对齐', class: 'fa-align-justify'},

    insertOrderedList: {title: '设置有序列表', class: 'fa-list-ol'},
    insertUnorderedList: {title: '设置无序列表', class: 'fa-list-ul'},

    // custom
    foreColor: {title: '文字颜色', class: 'fa-file-text-o'},
    backColor: {title: '背景颜色', class: 'fa-file-text'},
    elements: {title: '元素', class: '', type: 'select'},
    emoji: {title: '插入表情', class: 'fa-smile-o'},
    fontName: {title: '字体', class: 'font-select', type: 'select'},
    fontSize: {title: '字号', class: '', type: 'select'},
    links: {title: '添加超链接', class: 'fa-link'},
    unlinks: {title: '取消超链接', class: 'fa-unlink'},
    picture: {title: '插入图片', class: 'fa-file-image-o'},
    switch: {title: '源码', class: 'fa-code'},
    tables: {title: '表格', class: 'fa-table'},
    undo: {title: '撤销', class: 'fa-undo'},
    repeat: {title: '恢复', class: 'fa-repeat'},
  };

  export default {
    data () {
      return {
        toolbarBtns,
        defaultConfig: [
          'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider', 'bold', 'italic', 'underline', 'strikeThrough',
          'links', 'divider', 'subscript', 'superscript', 'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
          '|', 'indent', 'outdent', 'insertOrderedList', 'insertUnorderedList', '|', 'emoji', 'picture', 'tables', '|', 'switch'
        ]
      }
    },
    computed: {
      // toolbarStates () {
      //   return this.$store.state.toolbarStates;
      // }
      config () {
        console.log(toolbarConfig);
        return toolbarConfig || this.defaultConfig;
      }
    },
    methods: {
      clickHandler(name, value){
        //this.$root.$refs.design.exec(name, value);
      }
    },
    components: {
      // 'foreColor': color,
      // 'backColor': color,
      // fontName,
      // fontSize,
      // switch,
      // elements,
      // tables,
      // undo,
      // links,
      // emoji,
      // picture
    }
  }
</script>