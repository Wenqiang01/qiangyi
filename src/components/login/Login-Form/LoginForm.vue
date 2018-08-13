<template>
    <div class="form-control no-border loginStyle">

        <div class="title item">
            Member Login
        </div>

        <input class="input-center item" placeholder="Username" v-model="userForm.username" />
        <div class="error" v-if="userForm.username === '' && formValidate.userNameDirty">
            Please enter the username
        </div>

        <input class="input-center item" type="password" placeholder="Password" v-model="userForm.password" />
        <div class="error" v-if="userForm.password === '' && formValidate.passWordDirty">
            Please enter the password
        </div>
        <button class="big-button item" v-bind:disabled="userForm.password === '' && userForm.userName === ''" @click="submit()">
            Submit
        </button>
    </div>
</template>
<script>
import { UserLoginFunction } from '../../../service/httpService.js';
import { setToken } from '../../../service/tokenService.js'
// import { preparePermissions } from '../../auth/auth.js'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    name: 'LoginForm',
    props: [],
    mounted() {

    },
    data() {
        return {
            title: 'Login works',
            userForm: {
                username: '',
                password: ''
            },
            formValidate: {
                userNameDirty: false,
                passWordDirty: false
            }
        }
    },
    methods: {
        ...mapActions([
            'loadPermissions'
        ]),
        ...mapMutations(['ERROR_POPUP']),
        submit() {
            const promise = UserLoginFunction(this.userForm)
            const self = this;
            promise.then((response) => {
                if (response.data && response.data.code === 1) {
                    this.ERROR_POPUP({
                        message: 'UserName or Password is incorrect, please try it again',
                        isPopUp: true
                    })
                } else {
                    if (response.data && response.data.token) {
                        setToken(response.data.token);
                        // preparePermissions().then(data => {
                        //     if (data) {
                        //         this.$router.push({ path: '/dashboard' });
                        //     }
                        // });
                        self.loadPermissions().then((res) => {
                            if (res.status && res.status === 'SUCCESS') {
                                self.$router.push({ path: '/dashboard' });
                            }
                        });

                    } else {
                        this.ERROR_POPUP({
                        message: 'UserName or Password is incorrect, please try it again',
                        isPopUp: true
                    })
                    }
                }
            })

        }
    },
    computed: {

    }
}
</script>
<style lang='scss'>
// @import "./../../../scss/pwc_variables";
@import "./../../../APP.scss";
.loginStyle {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
}

.no-border {
  border: 0 !important;
}
.item {
  margin: 1rem 0;
}

.title {
  text-align: center;
  color: $pwc_orange_2;
}

.error {
  color: brown;
}
</style>
