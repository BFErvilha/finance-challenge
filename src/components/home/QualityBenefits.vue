<template>
  <b-container>
    <b-row>
      <b-col class="quality-benefits" cols="12">
        <b-row>
          <b-col v-for="(qb, index) in qualityBenefits" :key="index"  cols="3">
            <vs-card>
              <div slot="header">
                <h3>
                  {{ qb.title }}
                </h3>
              </div>
              <div class="row">
                <b-col cols="8">
                  {{ qb.description}}
                </b-col>
                <b-col cols="4">
                  <i :class="qb.icon"></i>
                </b-col>
              </div>
              <div slot="footer">
              </div>
            </vs-card>
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
      qualityBenefits: [
        { title: 'Agilidade', description: 'texto 1', icon: 'fas fa-rocket' },
        { title: 'Segurança', description: 'texto 2', icon: 'fas fa-shield-alt' },
        { title: 'Acessibilidade', description: 'texto 3', icon: 'fas fa-thumbs-up' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.quality-benefits{
  background: $primary-color;
  margin-top: -5.5rem;
  padding: 25px 15px 10px;
}

</style>
