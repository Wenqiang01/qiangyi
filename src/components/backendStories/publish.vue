<template>
    <BEMainLayout>
        <div class="container center publish-container">
            <div class="row">
                <div class="col-10">
                    <span>
                        标题:
                    </span>
                    <input type="text" v-model="title" placeholder="请在这里输入标题">
                </div>
                <div class="col-2">
                    <button class="btn btn-primary"  data-toggle="modal" data-target="#exampleModalCenter" @click="preview()">预览</button>
                </div>
            </div>
            <div id="publish">
                <froala :tag="'textarea'" :config="config" v-model="contentModal"></froala>
            </div>
            <div>
                <button @click="addProdTest()">add products</button>
            </div>
        </div>
        <!-- preview -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog picture-Width content-preview" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">展示</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body content-preview-adjust">
                        <div v-html="contentModal">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary">上一张</button>
                        <button type="button" class="btn btn-secondary">下一张</button>
                        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">关  闭</button> -->
                    </div>
                </div>
            </div>
        </div>
    </BEMainLayout>
</template>
<script>
import VueFroala from 'vue-froala-wysiwyg';
import BEMainLayout from "../main-layout/BEMainLayout.vue";
import { addProducts } from "../../service/httpService";
export default {
    name: 'publish',
    data() {
        return {
            config: {
                events: {
                    'froalaEditor.initialized': function () {
                        console.log('initialized')
                    }
                }
            },
            title: '',
            contentModal: 'Edit Your Content Here!',
        }
    },
    methods: {
        addProdTest() {
            addProducts({
                "name": "111",
                "createDate": "111",
                "path": "111",
                "thumbnailPath": "111",
                "createdBy": "11"
            })
        },
        preview() {
            console.log('test', this.contentModal);
        }
    },
    components: {
        BEMainLayout
    }
}
</script>
<style lang="scss">
.publish-container {
  padding: 20px;
}
.center {
  margin: 0 auto;
}
.content-preview {
    max-width: 800px !important;
    .content-preview-adjust {
        overflow-wrap: break-word;
    }
}
</style>

