<template>
  <b-container>
    <b-row class="qb-row">
      <b-col class="quality fadeinEffect" cols="12">
        <b-row>
          <b-col v-for="(qb, index) in quality" :key="index" sm="12" md="3">
            <vs-card class="quality-cards fadeinEffect">
              <div slot="header">
                <h3>
                  {{ qb.title }}
                </h3>
              </div>
              <div class="row">
                <b-col cols="8">
                  {{ qb.description}}
                </b-col>
                <b-col class="card-icon" cols="4">
                  <i :class="qb.icon"></i>
                </b-col>
              </div>
              <div slot="footer">
              </div>
            </vs-card>
          </b-col>
          <b-col class="btn-simulation" sm="12" md="3">
            <vs-button color="#2728DD" class="simulation" type="filled">Fazer simulação</vs-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'QualityBenefits',
  data () {
    return {
      quality: [
        { title: 'Agilidade', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim eros. Mauris sed sollicitudin tellus.', icon: 'fas fa-rocket' },
        { title: 'Segurança', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim eros. Mauris sed sollicitudin tellus.', icon: 'fas fa-shield-alt' },
        { title: 'Acessibilidade', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim eros. Mauris sed sollicitudin tellus.', icon: 'fas fa-thumbs-up' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.qb-row{
  width: calc(100% - 80px);
  margin: 0 auto;
}

.quality{
  background: $primary-color;
  margin-top: -5.5rem;
  padding: 25px 20px 10px;
  border-radius: .375rem;
  box-shadow: 0px 5px 10px rgba(87, 87, 87, 0.8);
  margin-bottom: 3.0rem;

  .quality-cards{
    .card-icon{
      font-size: 40px;
      margin-top: 5%;
      color: $secondary-color
    }
  }

  .btn-simulation{
    padding-top: 60px;

    @media (max-width: 600px) {
      padding: 30px 0;
    }
    .simulation{
      width: 200px;
      margin: 0 auto;
    }
  }
}

</style>
