<template>
    <mainLayout>
        <div class="row-container container">
            <div class="row">
                <div class="col-6">
                    <div class="category-normal-wrapper row">
                        <div class="title-block">
                            <span>产品展示</span>
                        </div>
                        <div class="listBlock" data-toggle="modal" data-target="#exampleModalCenter">
                            <img src="../../assets/images/images/12.jpg" alt="" class="">
                            <p>
                                <a href="">卧房家具</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="category-normal-wrapper row">
                        <div class="title-block">
                            <span>产品展示</span>
                        </div>
                        <div class="listBlock" data-toggle="modal" data-target="#exampleModalCenter">
                            <img src="../../assets/images/images/12.jpg" alt="" class="">
                            <p>
                                <a href="">卧房家具</a>
                            </p>
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

    name: "Contents",

    components: {
        mainLayout

    }

};
</script>
<style lang="scss">
@import "./../../scss/qy/common.scss";
</style>

