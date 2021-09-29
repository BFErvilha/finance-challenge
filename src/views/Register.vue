<template>
  <b-container class="pt-5 fadeinEffect">
    <form-wizard @on-complete="onComplete"
                 color="#873deb"
                 title="Realizando seu cadastro"
                 subtitle="Vamos realizar o passo a passo!"
                 next-button-text="Próximo"
                 back-button-text="Voltar"
                 finish-button-text="Finalizar"
                 class="ajust-container"
    >
      <tab-content title="Dados Pesoais"
                   icon="fas fa-user-tie">
        <UserInfo />
      </tab-content>
      <tab-content title="Dados da Empresa"
                   icon="fas fa-building">
        <CompanyInfo />
      </tab-content>
      <tab-content title="Finalizado"
                   icon="fas fa-check">
        <EndForm />
      </tab-content>
    </form-wizard>
  </b-container>
</template>

<script>
import UserInfo from '../components/register/UserInfo'
import CompanyInfo from '../components/register/CompanyInfo'
import EndForm from '../components/register/EndForm'
import { mapState } from 'vuex'

export default {
  name: 'Register',
  components: { EndForm, CompanyInfo, UserInfo },
  computed: {
    ...mapState({
      company: state => state.company
    })
  },
  methods: {
    onComplete: function () {
      // this.$router.push('simulation')
      console.log(this.company)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style";

.ajust-container{
  margin-bottom: 130px;

  @media(max-width: 600px){
    margin-bottom: 500px
  }
}

</style>
