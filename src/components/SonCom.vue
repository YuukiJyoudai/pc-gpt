<template>
    <div @click='toFather'>Son</div>
    <ul @click='updateList($event)'>
        <li v-for='(item,index) in list' :data-name='item.name'>
            {{ item.name }}
        </li>
    </ul>
    <div>{{ a }}</div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
    data() {
        return {
            a: 1,
            b: 2,
            list: [
                {
                    key: 1,
                    name: 'ff'
                }, {
                    key: 2,
                    name: '影魔'
                }
            ]
        }
    },
    updated() {
        console.log('值更新了' + Math.random())
        this.a = Math.random()
    },
    emits: {
        handleSonClick(payload) {}
    },
    watch: {
        list(val) {
            console.log('数组被改变了', val)
        }
    },
    methods: {
        updateList($event: any) {
            const target = $event.target || {}
            const {dataset} = target
            const curName = dataset.name
            this.list[1].name = curName + 1
        },
        toFather() {
            this.$emit('handleSonClick', {
                num: 1213,
                str: 'god'
            })
        }
    }
})
</script>