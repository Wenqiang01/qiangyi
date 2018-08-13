<template>
  <div>
    <h1>1. Node Js</h1>
    <div class="notice">Please keep .env out of git repository, which should be set on server only</div>
    <h1>2. Styles</h1>
    <h2>Main Color</h2>
    <p>
      <b>/src/app/scss/_pwc_variables</b>
      <br /> there is
      <br />
      <img width="200" src="./../assets/images/docs/colors_variables.png" />
      <br /> which means below:
      <br />
      <img width="200" src="./../assets/images/docs/colors.png" />
    </p>
    <h2>scss files</h2>
    <p>There are some subfolders under
      <b>/src/app/scss folder</b>
    </p>
    <p>
      <b>bs</b>
      As for bootstrap, only adopt the grid system and the gutter has been set to 0.
    </p>
    <p>
      <b>ngprime</b>
      As for ngprime, some customized style has been done here.
    </p>
    <p>
      <b>pwc</b>
      The styles for this project.
    </p>
    <p>All of above is imported in app.component.scss as below</p>
    <img width="400" src="./../assets/images/docs/imports.png" />

    <p>There are 4 place to put scss</p>
    <b>1</b><br />
    <img width="400" src="./../assets/images/docs/scss-global.png" />
    <p>Please put 3rd party's style here</p>
    <div class="notice">Please make sure the 3rd party do not have styles in native html element</div>
    <b>2</b><br />
    <b>/src/styles.scss</b>
    <p>For global style</p>
    <b>3</b><br />
    <b>/src/app/app.component.scss</b><br />
    <p>For global style</p>
    <div class="notice">This component has been set encapsulation as ViewEncapsulation.None, please do not put component specific styles here</div>
    <b>4</b><br />
    <p>Component styles</p>
    <p>For component specific styles</p>
    <div class="notice">Please use default encapsulation, which is encapsulation: ViewEncapsulation.Emulated, or just not set it</div>
    <h1>3. Access Control</h1>
    <p>There is three level's access control</p>
    <p>component level based on router</p>
    <p>element level realized by canRender directive in auth moduel</p>
    <p>nodejs endpoint realized by JWT</p>
  </div>
</template>

<script>
export default {
  name: 'DevDocs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    color: darkblue;
    font-size: 26px;
    line-height: 30px;
    border-bottom: solid 1px darkblue;
}

h2{
    color: coral;
    font-size: 22px;
    line-height: 26px;
    border-bottom: solid 1px coral;

}
p{
    margin: 24px
}
.notice{
    color: brown;
}
</style>
