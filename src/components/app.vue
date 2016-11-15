<template>
    <div class="vueditor">
        <toolbar></toolbar>
        <design></design>
        <sourceCode></sourceCode>
    </div>
</template>

<script>

    import toolbar from './toolbar.vue';
    import design from './design.vue';
    import sourceCode from './sourcecode.vue';

    console.log(toolbar);

    import store from '../vuex/store';

    export default {
        el: '',
        store,
        computed: {
            content () {
                return this.$store.state.content;
            }
        },
        components: {
            toolbar,
            design,
            sourceCode
        },
        methods: {
            getContent () {
                return this.content;
            },
            setContent (content) {
                this.$store.dispatch('updateContent', content);
            }
        }
    }
</script>