<template>
  <b-container class="p-0" fluid>
    <b-jumbotron class="banner">
      <template #header>BusiFin</template>

      <template #lead>
        O Financiamento coorporativo que a sua empresa necessita
      </template>

      <hr class="my-4">

      <p>
        Cadastre-se e venha fazer uma simulação gratuíta com a gente
      </p>

      <b-button class="btn-register" variant="success" href="#">Cadastrar</b-button>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {
  name: 'Banner.vue'
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.banner{
  width: 100%;
  height: 690px;
  background-image: url('../../assets/img/banner-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 25vh;

  .btn-register{
    background-color: $secondary-color;
    border-color: $secondary-color;
  }

  @media (max-width: 900px){
    padding-right: 10px;
    padding-left: 10px;
    background-position-x: center;

    .display-3{
      color: $primary-color;
    }
    p{
      color: $secondary-color;
    }
  }
}
</style>
