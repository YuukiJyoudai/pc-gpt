<template>
    <div>Father</div>
    <son-com @handleSonClick='handleSonClick'></son-com>
</template>

<script lang='ts'>
import SonCom from './SonCom.vue'
export default {
    components: {
        SonCom
    },
    methods: {
        handleSonClick(payload: any) {
            const num: number = 123
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(num)
                    resolve(true)
                    console.log('payload', payload)
                    console.log('两秒之后打印')
                }, 2000)
            })
        }
    }
}
</script>