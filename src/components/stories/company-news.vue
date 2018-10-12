<template>
  <mainLayout>
    <div class="company-container container">
      <div class="category-normal-wrapper">
        <div class="title-block">
          <span>Company News</span>
        </div>
        <div data-toggle="modal" data-target="#exampleModalCenter">
          <div v-for="(news, index) in newList">
            <div class="row new-list-adjust">
              <div class="col-9">
                <span>{{index}}</span>
                <a class="list-item" href="#">{{news.title}}</a>
              </div>
              <div class="col-2">{{news.date}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog picture-Width" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">图片展示</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body img-preview">
            <img class="img-fluid" src="../../assets/images/images/12 (1).jpg" alt="">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary">上一张</button>
            <button type="button" class="btn btn-secondary">下一张</button>
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">关  闭</button> -->
          </div>
        </div>
      </div>
    </div>
  </mainLayout>
</template>
<script>
import mainLayout from "../main-layout/MainLayout.vue";
export default {
  name: "CompanyNews",
  components: {
    mainLayout
  },
  data() {
    return {
      newList: [
        {
          id: 1,
          title: "型材艺韵美大展话三国",
          date: "2015年5月29日"
        },
        {
          id: 2,
          title: "强艺红木 材真工善好口碑 亲民发展树楷模",
          date: "2015年4月24日"
        },
        {
          id: 3,
          title: "强艺红木 大师襟怀，亲民三策开新局",
          date: "2015年3月27日"
        },
        {
          id: 4,
          title: "强艺红木 新年开门红 品牌获殊荣",
          date: "2015年2月6日"
        },
        {
          id: 5,
          title: "强艺红木 “实力派”演绎大师本色",
          date: "2015年1月23日"
        },
        {
          id: 6,
          title: "强艺红木：专注艺术创新 追求品质卓越",
          date: "2014年12月26日"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.company-container {
  margin: 0 auto;
  max-width: 800px;
  h6 {
    padding: 10px;
    line-height: 50px;
  }
  img {
    margin: 0 auto;
    width: 80%;
  }
  .center {
    text-align: center;
    margin: 0 auto;
  }
  .h1-size {
    font-size: 2.6rem;
  }
  .list-item {
    color: darkgray;
  }
}
</style>



