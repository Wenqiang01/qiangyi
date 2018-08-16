<template>
    <mainLayout>
        <div class="row-container container">
            <div class="category-normal-wrapper row">
                <div class="title-block">
                    <span>产品展示</span>
                </div>
                <div class="col-3 listBlock">
                    <img src="../../assets/images/images/12.jpg" alt="" class="">
                    <p>
                        <a href="">卧房家具</a>
                    </p>
                </div>
                <div class="col-3 listBlock">
                    <img src="../../assets/images/images/12.jpg" alt="" class="">
                    <p>
                        <a href="">卧房家具</a>
                    </p>
                </div>
                <div class="col-3 listBlock">
                    <img src="../../assets/images/images/12.jpg" alt="" class="">
                    <p>
                        <a href="">卧房家具</a>
                    </p>
                </div>
                <div class="col-3 listBlock right-border">
                    <img src="../../assets/images/images/12.jpg" alt="" class="">
                    <p>
                        <a href="">卧房家具</a>
                    </p>
                </div>
                <div class="col-3 listBlock float-right flex-left">
                    <img src="../../assets/images/images/12.jpg" alt="" class="">
                    <p>
                        <a href="">卧房家具</a>
                    </p>
                </div>
                <div class="col-3 listBlock right-border flex-left">
                    <img src="../../assets/images/images/12.jpg" alt="" class="">
                    <p>
                        <a href="">卧房家具</a>
                    </p>
                </div>
            </div>
        </div>
    </mainLayout>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import mainLayout from '../main-layout/MainLayout.vue';
export default {
    name: 'Pictures',
    components: {
        mainLayout
    },
    data() {
        return {
            popUpMessage: ''
        }
    },
    computed: {
        ...mapState(['errorPop']),
        checkPopModelStatus() {
            this.popUpMessage = this.errorPop ? this.errorPop.errorMsg : '';
            return this.errorPop ? this.errorPop.isPopUp : false;
        }
    },
    mounted() {
    },
    methods: {
        ...mapMutations(['ERROR_POPUP']),
        closeModel() {
            this.ERROR_POPUP({
                message: '',
                isPopUp: false
            });
        }
    }
}
</script>
<style lang="sass" scoped>
@import "./../../scss/qy/common.scss";
</style>
