<template>
    <BEMainLayout>
        <div class="row-container container">
            <div class="category-normal-wrapper row">
                <div class="title-block">
                    <span class="text-warm badge-title">全部</span>
                    <span class="text-warm badge-title" v-for="type of imgTypeList" :key="type">{{type}}</span>
                </div>
            </div>
        </div>
        <div class="row-container container">
            <div class="category-normal-wrapper row" v-for="type of imgTypeList" :key="type">
                <div class="title-block">
                    <span>{{type}}</span>
                </div>
                <div v-for="img of getImgListByType(type)" :key="img.id" class="col-3 listBlock" data-toggle="modal" @click="onImgToggle(img)" data-target="#exampleModalCenter">
                    <img :src="img.path" alt="" class="" style="width: 200px">
                    <p>
                        <a href="">{{img.title}}</a>
                    </p>
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
                        <img class="img-fluid" :src="imagePreviewPath" alt="">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteImg(imagePreviewId)">删 除</button>
                        <button type="button" class="btn btn-worm" data-dismiss="modal">取 消</button>
                        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">关  闭</button> -->
                    </div>
                </div>
            </div>
        </div>
    </BEMainLayout>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import BEMainLayout from "../main-layout/BEMainLayout.vue";
import { getImgAllList, getImgById, deleteImgById } from "../../service/httpService.js";
export default {
    components: {
        BEMainLayout
    },
    data() {
        return {
            popUpMessage: "",
            imagePreviewPath: "",
            imagePreviewId: "",
            imgList: [],
            imgTypeList: []
        };
    },
    created() {
        this.initData();
    },
    computed: {
        ...mapState(["errorPop"]),
        checkPopModelStatus() {
            this.popUpMessage = this.errorPop ? this.errorPop.errorMsg : "";
            return this.errorPop ? this.errorPop.isPopUp : false;
        },
        dataUrl() {
            if (this.imageData && this.imageData.data) {
                return "";
            } else {
                return "";
            }
        }
    },
    mounted() { },
    methods: {
        ...mapMutations(["ERROR_POPUP"]),
        initData() {
            getImgAllList().then(data => {
                console.log("imgList", data);
                this.imgList = data.data.data.imgList;
                if (this.imgList) {
                    this.imgList.map(item => {
                        if (this.imgTypeList.indexOf(item.type) < 0) {
                            this.imgTypeList.push(item.type);
                        }
                    });
                    console.log("imgTypeList", this.imgTypeList);
                }
                // this.imageData = imgList[0];
            });
        },
        getImgListByType(type) {
            const list = [];
            this.imgList.map(item => {
                if (item.type === type) {
                    list.push(item);
                }
            });
            return list || [];
        },
        onImgToggle(img) {
            this.imagePreviewPath = img.path;
            this.imagePreviewId = img.id;
        },
        deleteImg(imgId) {
            deleteImgById(imgId).then((data) => {
                console.log('img data', data);
                this.$store.dispatch('ERROR_POPUP', {
                    message: data.data.message,
                    type: 'SUCCESS',
                    isPopUp: true
                })
                this.initData();
            }).catch((err) => {
                console.log(err);
                this.initData();
            })
        },
        async DownloadData() {
            let imgList = null;
            await getImgAllList().then(data => {
                console.log("imgList", data);
                this.imgList = data.data.data.imgList;
                console.log("imgList", this.imgList);
            });
            if (imgList.imgList && imgList.imgList.length > 0) {
                await getImgById(imgList.imgList[0].id).then(file => {
                    console.log(file);
                    this.imageData = file;
                    var blob = new Blob([file], { type: "application/pdf" });
                    var link = document.createElement("a");
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "pic";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            }
        },
        closeModel() {
            this.ERROR_POPUP({
                message: "",
                type: '',
                isPopUp: false
            });
        }
    }
};
</script>
<style lang="scss">
@import "./../../scss/qy/common.scss";

.picture-Width {
  max-width: 800px;
}

.badge-title {
  cursor: pointer;
  margin-right: 20px;
  padding: 5px;
  &:hover {
    background: #bbb;
  }
}

.img-preview {
  margin: 0 auto;
  text-align: center;
  img {
    width: 100%;
  }
}
</style>
