<template>
  <b-container class="underFooter" fluid>
    <h3> BusiFin - 2021 - Todos os direitos reservados</h3>
  </b-container>
</template>

<script>
export default {
  name: 'UnderFooter'
}
</script>

<style scoped lang="scss">
@import "../../../assets/scss/style";

.underFooter{
  background-color: $secondary-color;
  height: 80px;

  h3{
    color: white;
    padding-top: 26px;
    font-size: 20px;
  }
  @media (max-width: 600px){
    h3{
      color: white;
      padding-top: 26px;
      font-size: 16px;
    }
  }
}
</style>
