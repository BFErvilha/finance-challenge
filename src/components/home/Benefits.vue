<template>
  <b-container class="fadeinEffect">
    <b-row>
      <b-col class="section-title" cols="12">
        <h2> Mais ágil que um banco convencional </h2>
      </b-col>
      <b-col sm="12" md="4" v-for="(bn , index) in benefits" :key="index">
        <b-card
            :title="bn.title"
            :img-src="bn.img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 gradient-box fadeinEffect"
        >
          <b-card-text>
            {{ bn.description }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col class="btn-simulation" cols="12">
        <vs-button color="#2728DD" class="simulation" type="filled" to="/simulation">
          <i class="fas fa-user-tie" style="margin-right: 10px"></i> Fazer simulação
        </vs-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Benefits',
  data () {
    return {
      benefits: [
        {
          title: 'Simulação',
          description: 'Simulação 100% online sem necessidades de ir até um banco',
          img: '../assets/img/svg/access.png'
        },
        {
          title: 'Registro ágil',
          description: 'Registro aprovado e verificado em menos de 4 horas',
          img: '../assets/img/svg/register.png'
        },
        {
          title: 'Confiabilidade',
          description: 'Confiança onde nenhum banco possui',
          img: '../assets/img/svg/withdrawal.png'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.section-title{
  margin-bottom: 1rem;
  h2{
    text-transform: uppercase;
    font-family: $font-ibm;
    color: $secondary-color;
  }
}

.card{
  border: none;
  background: #000;
  border-radius: .375rem;
  box-shadow: 0px 5px 6px rgba(87, 87, 87, 0.8);
}

.gradient-box {
  display: flex;
  align-items: center;
  width: 90%;
  height: 400px;
  margin: 15px auto;
  max-width: 22em;

  position: relative;
  padding: 15% 2em;
  box-sizing: border-box;

  $border: 5px;
  color: #FFF;
  background: #000;
  background-clip: padding-box;
  border: solid $border transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -$border;
    border-radius: inherit;
    background: linear-gradient(to right, $primary-color, $secondary-color);
  }
}

.btn-simulation {
  margin: 60px auto;

  button{
    width: 300px;
  }
}
</style>
