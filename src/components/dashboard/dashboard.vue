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
            <div class="category-normal-wrapper row">
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
            <div class="row-container">
            <div class="category-normal-wrapper row">
                <div class="title">
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
  mounted() {},
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
    callProtectedApi() {},
    clearToken() {
      clearToken();
    }
  }
};
</script>
<style lang="scss">
@import "./../../APP.scss";
.title {
  padding: 3rem 1rem 1rem;
}

.borderRadius {
  border-radius: 8px;
}

.row-container {
  border-radius: 8px;
  border: 1px solid #efefef;
  background: #fafafa;
}

.category-normal-wrapper {
  margin: 20px auto;
  p {
    text-align: center;
    a {
      font-size: 10px;
    }
  }
  .listBlock {
    text-align: center;
    margin: 10px auto;
    padding: 17px 0 0 0;
    background: #fff;
    border: 1px solid #efefef;
    border-right: none;
  }

  .right-border {
    border: 1px solid #efefef;
  }

  .title {
    font-size: 100%;
    font-weight: 400;
    width: 100%;
    color: #666;
    font-family: Helvetica Neue, PingFang SC, Helvetica, Arial, Hiragino Sans GB,
      Microsoft Yahei, \\5fae\8f6f\96c5\9ed1, STHeiti, \\534e\6587\7ec6\9ed1,
      sans-serif;
    font-size: 18px;
    color: #666;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .rowBlock {
    text-align: center;
    padding: 17px;
    background: #fff;
    border: 1px solid #efefef;
    img {
      width: 100%;
    }
  }
  //   .border {
  //       border: 1px solid #111;
  //       border-right: none;
  //   }
  .listBlock:hover {
    box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
    transition: all 0.15s ease;
  }
}
</style>

