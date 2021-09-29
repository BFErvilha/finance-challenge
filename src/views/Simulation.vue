<template>
  <b-container class="p-5 mt-5 fadeinEffect">
      <b-row>
        <b-col class="simulation-title" cols="12">
          <h2>Faça aqui a sua simulação</h2>
        </b-col>
        <b-col class="pt-5" cols="12">
          <SimulationCalc />
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
import SimulationCalc from '../components/simulation/SimulationCalc'
export default {
  name: 'Simulation',
  components: { SimulationCalc }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style";

.simulation-title{
  h2{
    font-family: $font-ibm!important;
    font-weight: 800!important;
    color: $primary-color;
    font-size: 35px;
  }
}
</style>
