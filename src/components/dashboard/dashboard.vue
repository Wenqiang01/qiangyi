<template>
    <mainLayout>
        <div class="title">Demonstrate component permission</div>
        <!-- <button  routerLink="/one">Go to Story One</button> -->
        <router-link class="btn btn-lg btn-primary text-center" to="/one">Go to Story One</router-link>
        <router-link class="btn btn-lg btn-primary text-center" to="/two">Go to Story Two</router-link>
        <router-link class="btn btn-lg btn-primary text-center" to="/three">Go to Story Three</router-link>

        <div class="title">Demonstrate element permission</div>
        <button class="btn btn-lg btn-primary text-center" @click="clickProcess('review')" >review action</button>
        <button class="btn btn-lg btn-primary text-center" @click="clickProcess('delete')" >delete action</button>
        <button class="btn btn-lg btn-primary text-center" @click="clickProcess('edit')" >edit action</button>
        <button class="btn btn-lg btn-primary text-center" @click="clickProcess('audit')" >audit action</button>

        <div class="title">Demonstrate invalid token call</div>
        <button class="btn btn-lg btn-primary text-center"  @click="callProtectedApi()">call an protected api</button>
        <button class="btn btn-lg btn-primary text-center"  @click="clearToken()">clear token</button>
    </mainLayout>
</template>
<script>
import { mapMutations } from 'vuex';
import mainLayout from '../main-layout/MainLayout.vue';
import { clearToken } from '../../service/tokenService'
import { isAuthtoProcess } from '../../service/authService';
export default {
    name: 'Dashboard',
    components: {
        mainLayout
    },
    props: [],
    mounted() {

    },
    data() {
        return {
            username: ''
        }
    },
    methods: {
        ...mapMutations(['ERROR_POPUP']),
        clickProcess(action) {
            if (isAuthtoProcess(action)) {
            }
        },
        callProtectedApi() {

        },
        clearToken() {
            clearToken();
        }
    }

}
</script>
<style lang="scss">
@import "./../../APP.scss";
.title {
  padding: 3rem 1rem 1rem;
}
</style>

