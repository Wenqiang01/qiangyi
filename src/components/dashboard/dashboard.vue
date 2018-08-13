<template>
    <mainLayout>
        <div class="container">
            <div id="carouselExampleControls" class="carousel slide borderRadius" data-ride="carousel">
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
            <div class="category-normal-wrapper">
                <ul>
                    <li>
                        <div>
                            <img src="../../assets/images/images/12.jpg" alt="" class="">
                            <p>
                                <a href="">卧房家具</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../../assets/images/images/12.jpg" alt="" class="">
                            <p>
                                <a href="">卧房家具</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../../assets/images/images/12.jpg" alt="" class="">
                            <p>
                                <a href="">卧房家具</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../../assets/images/images/12.jpg" alt="" class="">
                            <p>
                                <a href="">卧房家具</a>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
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

.borderRadius {
  border-radius: 8px;
}

.category-normal-wrapper {
  margin: 20px auto;
  ul {
    li {
      margin: 10px;
      float: left;
      padding: 30px;
      border: 1px solid #efefef;
    }
  }
  p {
    text-align: center;
    a {
      font-size: 10px;
    }
  }
}
</style>

