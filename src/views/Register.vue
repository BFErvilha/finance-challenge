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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Register',
  components: { EndForm, CompanyInfo, UserInfo },
  computed: {
    ...mapState({
      company: state => state.company
    })
  },
  methods: {
    ...mapActions(['register']),

    onComplete: function () {
      this.register(this.company)
      this.$vs.loading({
        color: '#873deb',
        type: 'radius',
        background: 'rgba(2,2,2,0.53)'
      })
      setTimeout(() => {
        this.$vs.loading.close()
        this.$router.push('login')
      }, 3000)
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
