<template>
    <div class="dashContainer">
        <div class="side">
            <div>Side Area</div>
        </div>
        <div class="main">
            <div class="top">
                <div>Hello:
                    <b>{{username}}</b>
                </div>
                <button pButton @click="logout()">Logout</button>
            </div>
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
import { clearToken } from '../../service/tokenService'
export default {
    name: 'MainLayout',
    components: {
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
        logout() {
            clearToken();
            this.$router.push('/');
        }
    }
}
</script>
<style lang='scss'>
.dashContainer {
  display: flex;
  height: 100vh;
}

.side {
  width: 25%;
  background: antiquewhite;
  padding: 1rem;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    justify-content: space-between;
    background: lightblue;
    padding: 1rem;
  }
  .content {
    padding: 1rem;
    flex: 1;
    background: whitesmoke;
  }
}
</style>
