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
                    <button class="btn btn-primary">预览</button>
                </div>
            </div>
            <div id="publish">
                <froala :tag="'textarea'" :config="config" v-model="contentModal"></froala>
            </div>
        </div>
    </BEMainLayout>
</template>
<script>
import VueFroala from 'vue-froala-wysiwyg';
import BEMainLayout from "../main-layout/BEMainLayout.vue";
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
</style>

