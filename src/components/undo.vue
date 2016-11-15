
<template>
    <a href="javascript:;" title="撤销" :class="{'ve-disabled': undoState}" @click="undo">
        <i class="fa fa-undo"></i>
    </a>
    <a href="javascript:;" title="恢复" :class="{'ve-disabled': redoState}" @click="redo">
        <i class="fa fa-repeat"></i>
    </a>
</template>

<script>

    import {mapStates} from 'vuex';

    export default {
        data () {
            return {
                stack: [],
                index: -1
            };
        },
        computed: Object.assign({}, mapStates({
            undoState () {
                return this.$store.state.toolBtns.undo.disabled;
            },
            redoState () {
                return this.$store.state.toolBtns.redo.disabled;
            },
            currentView () {
                return this.$store.state.currentView;
            },
            content () {
                return this.$store.state.content;
            }
        }),{
            canUndo () {
                return this.index > 0;
            },
            canRedo () {
                return this.index < this.stack.length - 1;
            }
        },
        watch: {
            'content': function (content) {
                this.push(content);
            },
            'currentView': function (val) {
                if(val == 'design'){
                    this.stack = [];
                    this.index = -1;
                    this.push(this.content, true);
                }
            }
        },
        methods: {
            updateContent (content) {
                this.$store.dispatch('updateContent', content);
            }
            updateTBDisabled (current) {
                this.$store.dispatch('updateTBDisabled', current);
            }
            undo () {
                if (!this.canUndo)return;
                this.index--;
                let content = this.stack[this.index];
                this.updateContent(content);
            },
            redo () {
                if (!this.canRedo)return;
                this.index++;
                let content = this.stack[this.index];
                this.updateContent(content);
            },
            push (content, isInit) {
                if (content != this.stack[this.index]) {
                    this.stack = this.stack.slice(0, this.index + 1);
                    this.stack.push(content);
                    this.index++;
                }
                let json = {undo: !this.canUndo, redo: !this.canRedo};
                if(isInit || this.currentView == 'sourceCode'){
                    json = {undo: true, redo: true};
                }
                this.updateTBDisabled(json);
            }
        },
        ready () {
            this.push(this.content, true);
        }
    }
</script>