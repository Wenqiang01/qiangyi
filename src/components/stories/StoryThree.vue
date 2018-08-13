<template>
    <mainLayout>
        <button  class="btn btn-primary btn-lg" @click="navBack()">Dashboard</button>
    </mainLayout>
</template>
<script>
import mainLayout from '../main-layout/MainLayout.vue';
export default {
    name: 'StoryThree',
    components: {
        mainLayout
    },
    methods: {
        navBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style>
</style>
