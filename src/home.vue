<template>
    <div class="home">
        home <h1 class="title">{{title}}</h1>
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
<style lang="sass" scoped src="./index.sass">

</style>
