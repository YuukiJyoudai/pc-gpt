<template>
    <div @click='toFather'>Son</div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
    emits: {
        handleSonClick(payload) {}
    },
    methods: {
        toFather() {
            this.$emit('handleSonClick', {
                num: 1213,
                str: 'god'
            })
        }
    }
})
</script>