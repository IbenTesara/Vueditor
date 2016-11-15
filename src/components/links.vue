<style lang="less" rel="stylesheet/less">
    .link-popover {
        width: 240px;
        height: 90px;
    }
</style>

<template>
    <a href="javascript:;" title="添加超链接" :class="{'ve-disabled': linkState, 've-active': display}" @click="toggle">
        <i class="fa fa-link"></i>
    </a>
    <a href="javascript:;" title="取消超链接" :class="{'ve-disabled': unLinkState}" @click="unLinkHandler">
        <i class="fa fa-unlink"></i>
    </a>
    <div class="ve-popover link-popover" v-show="display" :style="{left: left + 'px', top: top + 'px'}">
        <div class="pop-arrow"></div>
        <div class="pop-header">添加超链接</div>
        <div class="pop-body">
            <div class="ve-input-box">
                <input type="text" class="ve-input" v-model="linkVal"><button class="ve-btn" @click="linkHandler">确定</button>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapStates} from 'vuex';

    export default {
        data () {
            return {
                width: 240,
                height: 90,
                left: 0,
                top: 0,
                linkVal: ''
            }
        },
        computed: mapStates({
            linkState () {
                return this.$store.state.toolBtns.link.disabled;
            },
            unLinkState () {
                return this.$store.state.toolBtns.unlink.disabled;
            },
            display () {
                return this.$store.state.toolBtns.link.showmenu;
            }
        }),
        methods: {
            updateTBDropdownDisplay (current) {
                this.$store.dispatch('updateTBDropdownDisplay', current);
            },
            toggle () {
                var valid = this.$root.$refs.design.rangeValid();
                if (!valid) {
                    alert('请选择一段文本！');
                    return;
                }
                if(!this.disabled){
                    let obj = this.$el.nextElementSibling || this.$el.nextSibling;
                    this.left = obj.offsetLeft - this.width/2 + obj.offsetWidth/2;
                    this.top = obj.offsetTop + (obj.offsetHeight + parseInt(getComputedStyle(obj).marginBottom));
                    this.updateTBDropdownDisplay('link');
                }
            },
            checkValid () {
                let link = this.linkVal;
                link.indexOf('http://') == -1 && (link = 'http://' + link);
                return link;
            },
            linkHandler () {
                let link = this.checkValid();
                this.$root.$refs.design.exec('CreateLink', link);
                this.updateTBDropdownDisplay();
            },
            unLinkHandler () {
                let comp = this.$root.$refs.design;
                let range = comp.getRange();
                let container = range.commonAncestorContainer;
                if(container.nodeType == 3){
                    container = container.parentNode;
                }
                if(container.tagName == 'A'){
                    let newRange = document.createRange();
                    newRange.selectNode(container);
                    comp.setRange(newRange);
                    comp.exec('Unlink', null);
                    comp.removeRange(newRange);
                }else{
                    comp.exec('Unlink', null);
                }
            }
        }
    }
</script>