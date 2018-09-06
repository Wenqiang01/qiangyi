<template>
    <div id="publish">
        <froala :tag="'textarea'" :config="config" v-model="model"></froala>
    </div>
</template>
<script>
import VueFroala from 'vue-froala-wysiwyg';
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
            model: 'Edit Your Content Here!'
        }
    }
}
</script>
<style lang="scss">
</style>

