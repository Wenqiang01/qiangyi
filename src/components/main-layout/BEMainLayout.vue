<template>
  <div class="container row ">
    <div class="col-3 side-bar">
      <div class="row">
        <router-link to="/">Go home page</router-link>
      </div>
      <div class="row">
        <router-link to="/addPics">Go to Add Product pictures</router-link>
      </div>
      <div class="row">
        <router-link to="/managePics">Go to Picture Management</router-link>
      </div>
    </div>
    <div class="col-9 main">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { clearToken } from "../../service/tokenService";
export default {
  name: "BEMainLayout",
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
@import "./../../APP.scss";
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

.side-bar {
  background: lightskyblue;
  height: 100vh;
}

.main {
  padding-left: 20px;
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
