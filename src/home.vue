<template>
    <div >
        home <h1>{{title}}</h1>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Home',
    setup() {
        const title = ref('title-home')

        return {
            title
        }
    },
})
</script>
