<template>
    <mainLayout>
        <div class="container">
            <div id="carouselExampleControls" class="carousel slide borderRadius" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="../../assets/images/images/1.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../../assets/images/images/2.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../../assets/images/images/3.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="row-container">
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
                </div>
            </div>
            <div class="row-container">
                <div class="category-normal-wrapper row">
                    <div class="title-block">
                        <span>三维实景 / 360° PERSPECTIVE</span>
                    </div>
                    <div class="col-12 rowBlock">
                        <img src="../../assets/images/images/360_index.jpg" alt="" class="">
                    </div>
                </div>
            </div>
        </div>
    </mainLayout>
</template>
<script>
import { mapMutations } from "vuex";
import mainLayout from "../main-layout/MainLayout.vue";
import { clearToken } from "../../service/tokenService";
import { isAuthtoProcess } from "../../service/authService";
export default {
    name: "Dashboard",
    components: {
        mainLayout
    },
    props: [],
    mounted() { },
    data() {
        return {
            username: ""
        };
    },
    methods: {
        ...mapMutations(["ERROR_POPUP"]),
        clickProcess(action) {
            if (isAuthtoProcess(action)) {
            }
        },
        callProtectedApi() { },
        clearToken() {
            clearToken();
        }
    }
};
</script>
<style lang="scss">
@import "./../../APP.scss";
@import "./../../scss/qy/common.scss";
</style>

