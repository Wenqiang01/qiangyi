<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark header-nav navbar-fixed-top ">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto width-80percent display-center">
                    <li class="nav-item width-25percent display-center">
                        <a class="nav-link" href="#" @click="redircectTo('')">公司首页</a>
                    </li>
                    <li class="nav-item dropdown width-25percent display-center">
                        <!-- <a class="nav-link" href="#">强艺风采</a> -->
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">强艺风采</a>
                        <div class="dropdown-menu drop-menu-adjust bg-dark">
                            <a class="dropdown-item" @click="redircectTo('Company')" href="#">公司简介</a>
                            <a class="dropdown-item" @click="redircectTo('rewards')" href="#">荣誉资质</a>
                            <a class="dropdown-item" @click="redircectTo('news')" href="#">企业新闻</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown width-25percent display-center">
                        <!-- <a class="nav-link" href="#">产品展示</a> -->
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">产品展示</a>
                        <div class="dropdown-menu drop-menu-adjust bg-dark">
                            <a class="dropdown-item" href="#" @click="redircectTo('Pictures')">卧房家具</a>
                            <a class="dropdown-item" href="#">书房家具</a>
                            <a class="dropdown-item" href="#">客厅家具</a>
                            <a class="dropdown-item" href="#">餐厅家具</a>
                            <a class="dropdown-item" href="#">其他家具</a>
                        </div>
                    </li>
                    <li class="nav-item width-25percent display-center">
                        <a class="nav-link" href="#">红木知识</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="main">
            <div class="content">
                <slot></slot>
            </div>
        </div>
        <div class="container footer">
            <div class="row">
                <div class="col-sm-3">
                    <span class="title">公司信息</span>
                    <ul>
                        <li>
                            名称：上海强艺家具有限公司
                        </li>
                        <li>
                            地址：奉贤区金汇镇大叶公路7479号（近新奉公路口）
                        </li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <span class="title">专卖店</span>
                    <ul>
                        <li>
                            地址：张杨路1518号　　电话：021-50152006
                        </li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <span class="title">展示厅</span>
                    <ul>
                        <li>
                            真北路1108号红星美凯龙1号店六楼 H8058
                        </li>
                        <li>
                            电话：021-3251063
                        </li>
                        <li>
                            曲阳路800号 吉盛伟邦六楼 627
                        </li>
                        <li>
                            电话：021-55216505
                        </li>
                        <li>
                            浦东沪南公路临御路518号 红星美凯龙 B一楼J8055
                        </li>
                        <li>
                            电话：021-20257325
                        </li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <span class="title">专车接送</span>
                    <ul>
                        <li>
                            预约电话：021-58575880
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { clearToken } from "../../service/tokenService";
export default {
    name: "MainLayout",
    components: {},
    props: [],
    mounted() { },
    data() {
        return {
            username: ""
        };
    },
    methods: {
        logout() {
            clearToken();
            this.$router.push("/");
        },
        redircectTo(path) {
            this.$router.push("/" + path);
        }
    }
};
</script>
<style lang='scss'>
// @import "./../../APP.scss";
.dashContainer {
  display: flex;
  height: 100vh;
}

.navbar {
  padding: 3rem 1rem;
  a {
    font-size: 18px;
  }
}

.width-100percent {
  width: 100%;
}
.width-80percent {
  width: 80%;
}
.width-25percent {
  width: 25%;
}

.display-center {
  margin: 0 auto;
  text-align: center;
}

.drop-menu-adjust {
  width: 100%;
  text-align: center;
  a {
    color: rgba(255, 255, 255, 0.5);
  }
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

.footer {
  span {
    font-size: 9px;
    opacity: 0.8;
  }
  li {
    font-size: 9px;
    opacity: 0.8;
  }
  .title {
    font-weight: bold;
    margin-left: -10px;
  }
}
</style>
