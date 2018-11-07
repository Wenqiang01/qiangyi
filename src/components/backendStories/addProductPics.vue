<template>
    <BEMainLayout>
        <div class="container center publish-container">
            <div class="row">
                <div class="col-12">
                    <span class="label">
                        标题:
                    </span>
                    <input type="text" style="min-width:200px" v-model="title" placeholder="请在这里输入标题">
                </div>
                <div class="col-12">
                    <span class="label">
                        选择图片类型:
                    </span>
                    <select name="cars" v-model="fileType" style="min-width:200px">
                        <option value="卧房家具">卧房家具</option>
                        <option value="卧房家具">书房家具</option>
                        <option value="客厅家具">客厅家具</option>
                        <option value="餐厅家具">餐厅家具</option>
                        <option value="其他家具">其他家具</option>
                    </select>
                </div>
            </div>
            <div id="publish">
                <div class="row">
                    <label for="uploadFile" class="btn btn-primary label">选择上传文件
                        <input id="uploadFile" style="display: none" accept="image/*" name="uploadFile" ref="uploadFile" type="file" @change="handleFileUpload()"></label>
                    <label v-if="hasFile">{{uploadedFileName}}</label>
                </div>
                <div class="row" v-if="hasFile">
                    <img :src="imgDataUrl" style="height: 300px" alt="">
                </div>
            </div>
            <div>
                <div class="row">
                    <button @click="submitFile()" class="btn btn-primary label">保存添加</button>
                </div>
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
                    </div>
                </div>
            </div>
        </div>
    </BEMainLayout>
</template>
<script>
import VueFroala from 'vue-froala-wysiwyg';
import BEMainLayout from "../main-layout/BEMainLayout.vue";
import { postFileData } from "../../service/httpService.js";
import {
    addProducts
} from "../../service/httpService";

export default {
    name: 'AddPictures',
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
            fileType: '',
            hasFile: false,
            uploadedFileName: '',
            contentModal: 'Edit Your Content Here!',
            file: null,
            imgDataUrl: ''
        }
    },
    methods: {
        handleFileUpload() {
            console.log(this.$refs.uploadFile.files[0]);
            if (!this.$refs.uploadFile.files[0]) { this.file === null; return }
            this.uploadedFileName = this.$refs.uploadFile.files[0].name;
            this.hasFile = false;
            this.file = this.$refs.uploadFile.files[0];
            const fileReader = new FileReader();
            fileReader.addEventListener('load', () => {
                this.hasFile = true;
                this.imgDataUrl = fileReader.result;
            })
            fileReader.readAsDataURL(this.file);

            console.log('fileType', this.fileType);
        },
        submitFile() {
            if (!this.hasFile) {
                return;
            }
            let formData = new FormData();
            formData.append("file", this.file);
            formData.append("fileType", this.fileType);
            formData.append("title", this.title)
            const promise = postFileData(formData);
            promise.then(data => {
                console.log(data);
                if (data.data.status === 'SUCCESS') {
                    this.$store.dispatch('ERROR_POPUP', {
                        message: data.data.message,
                        type: 'SUCCESS',
                        isPopUp: true
                    });
                    this.title = '';
                    this.fileType = '';
                    this.hasFile = false
                    this.uploadedFileName = '';
                    this.file = null,
                        this.imgDataUrl = '';
                }
            });
        },
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

.label {
  width: 120px;
  display: inline-block;
  text-align: left;
  margin-bottom: 20px;
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

