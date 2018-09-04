<template>
    <mainLayout>
        <div class="company-container">
            <h1 class="center h1-size">
                企业荣誉
            </h1>
            <img src="../../assets/images/images/rewards/01.jpg" alt="" class='img-fluid rounded mx-auto d-block'>
        </div>
    </mainLayout>
</template>
<script>
import mainLayout from "../main-layout/MainLayout.vue";
export default {
  name: "CompanyRewards",
  components: {
    mainLayout
  }
};
</script>
<style lang="scss" scoped>
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
}
</style>



