<template>
  <b-container class="register-container">
    <b-row>
      <b-col class="endText-title" cols="12">
        <h2>Obrigado por se cadastrar</h2>
      </b-col>
      <b-col cols="12" style="text-align: center;">
        <img :src="img">
      </b-col>
      <b-col class="endText-title-2" cols="12">
        <h4>Após finalizar o cadastro você poderá efetuar a simulação</h4>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'EndForm',
  data () {
    return {
      img: '../assets/img/svg/withdrawal.png'
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.endText-title {
    h2 {
      margin: 15px auto;
      text-align: center;
    }
}

img{
  @media (max-width: 600px) {
    margin: 80px auto;
  }
}

.endText-title-2{
  h4{
    margin: 10px auto;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 20px!important;
    }
  }
}
</style>
