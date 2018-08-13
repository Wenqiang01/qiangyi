<template>
    <mainLayout>
        <button class="btn btn-primary btn-lg" @click="navBack()">Dashboard</button>
    </mainLayout>
</template>
<script>
import mainLayout from '../main-layout/MainLayout.vue';
export default {
    name: 'StoryOne',
    components: {
        mainLayout
    },
    methods: {
        navBack() {
            window.history.length > 0 ?
            this.$router.go(-1) : this.$router.push('/');
        }
    }
}
</script>

<style>
</style>
