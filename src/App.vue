<template>
  <div>
    <div id="app">
      <router-view />
    </div>
    <!-- <div class="modal modal-open" v-if="checkPopModelStatus" id="myModal" ref="myModal" style="display: block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header _modelHeader">
            <div class="popup-title">
              <span>WORMING</span>
            </div>
            <i class="close _close" @click="closeModel()">X</i>
          </div>
          <div class="modal-body _modelBody">
            {{popUpMessage}}
          </div>
        </div>
      </div>
    </div> -->
    <div class="modal fade" :class="{ show: checkPopModelStatus }" v-if="checkPopModelStatus" id="exampleModal" tabindex="-1" style="display: block; padding-right: 17px;" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header" :class="[popUpType]">
            <h4 class="modal-title row text-center"  id="exampleModalLabel" style="color: #fff">提示信息</h4>
            <button type="button" class="close" @click="closeModel()" aria-label="Close">
              <span aria-hidden="false" style="color: #fff">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="min-height: 100px">
            <h3>{{popUpMessage}}</h3>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModel()">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      popUpMessage: ''
    }
  },
  computed: {
    ...mapState(['errorPop']),
    checkPopModelStatus() {
      this.popUpMessage = this.errorPop ? this.errorPop.errorMsg : '';
      // test only 
      this.popUpMessage = "dddd"
      this.popUpType = 'bg-info';
      switch (this.errorPop ? this.errorPop.errorMsg : '') {
        case 'SUCCESS':
          this.popUpType = 'bg-success';
          break;
        case 'ERROR':
          this.popUpType = 'bg-danger';
          break;
        case 'WORM':
          this.popUpType = 'bg-warning';
          break;
        default:
          this.popUpType = 'bg-info';
          break;
      }
      return this.errorPop ? this.errorPop.isPopUp : false;
    }
  },
  mounted() {
    // this.$refs.myModal.style.display = this.errorPop.isPopUp ? 'block' : 'none'
    // checkPopModelStatus = this.errorPop.isPopUp;
  },
  methods: {
    ...mapMutations(['ERROR_POPUP']),
    closeModel() {
      this.ERROR_POPUP({
        message: '',
        type: '',
        isPopUp: false
      });
    }
  }
}
</script>

<style lang='scss'>
@import "./APP.scss";
// @import "./scss/fonts/scss/fontawesome.scss";
// @import "./scss/fonts/scss/brands.scss";
// @import "./scss/fonts/scss/regular.scss";
// @import "./scss/fonts/scss/solid.scss";

.main_contentbox {
  background: linear-gradient(to top right, $pwc_orange_2, $pwc_orange_10);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.center {
  margin: 0 auto;
}

.popup-title {
  text-align: center;
  margin: 0 auto;
}

.popup-title > span {
  font-size: 50px;
  font-weight: bold;
  color: white;
  opacity: 0.8;
  margin: 40px 0 0 47px;
  display: block;
}

._close {
  color: #fff;
  font-weight: bold;
  font-style: normal;
}

._modelHeader {
  background: linear-gradient(to top right, $pwc_orange_5, $pwc_orange_10);
  height: 130px;
}

._modelBody {
  height: 200px;
  text-align: center;
  line-height: 200px;
  color: $pwc_orange_5;
}
.width30Prencet {
  width: 30%;
}

.bgColor {
  background-color: $pwc_orange_11;
  height: 100%;
}

.main_contentbox:after {
  content: "Foo";
  visibility: hidden;
  display: block;
  height: 0px;
  clear: both;
}

.message {
  display: none;
  &.show {
    display: block;
    height: 50vh;
    width: 50vw;
    position: fixed;
    top: 25vh;
    left: 25vw;
    background: white;
    text-align: center;
    padding: 3rem 5rem;
    border: solid 1px silver;
    box-shadow: 0 0 1px 2px silver;
    border-radius: 0.5rem;
  }
}
</style>
