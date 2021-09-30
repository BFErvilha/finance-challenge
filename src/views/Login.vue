<template>
  <b-container class="login-container fadeinEffect">
    <b-row>
      <b-col sm="12" md="12" class="formSection p-5">
        <h2>Login</h2>
        <b-form class="mt-3" v-if="show">
          <b-form-group>
            <b-row>
              <b-col cols="12">
                <vs-input
                    label-placeholder="E-mail"
                    v-model="form.email" required
                    type="email"
                    placeholder="E-mail"
                    color="#873deb"
                />
              </b-col>
              <b-col cols="12">
                <vs-input
                    v-model="form.password" required
                    type="password"
                    placeholder="Senha"
                    color="#873deb"
                    label-placeholder="Nome Completo"
                />
              </b-col>
            </b-row>
          </b-form-group>

          <vs-button color="#2728DD" class="btn-form mt-3" type="filled" @click="verifyLogin">Entrar</vs-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    verifyLogin () {
      if (this.form.email !== '' && this.form.email === this.user.email) {
        if (this.form.password !== '' && this.form.password === this.user.password) {
          this.$vs.loading({
            color: '#873deb',
            type: 'radius',
            background: 'rgba(2,2,2,0.53)'
          })
          setTimeout(() => {
            this.$vs.loading.close()
            this.$router.push('simulation')
          }, 3000)
        } else {
          this.$vs.notify({
            text: 'Senha incorreta',
            color: 'danger',
            position: 'bottom-center',
            icon: 'error',
            time: 4000
          })
        }
      } else {
        this.$vs.notify({
          text: 'E-mail não encontrado',
          color: 'danger',
          position: 'bottom-center',
          icon: 'error',
          time: 4000
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style";

.formSection{
  min-height: 600px;
  margin: 10px auto -20px;
  padding-top: 13%!important;
  text-align: center;

  @media (max-width: 600px) {
    margin: 35px auto -30px;
    padding-top: 25%!important;
  }

  h2{
    text-transform: uppercase;
    font-family: $font-ibm;
    color: $secondary-color;
    font-weight: bolder;
  }
}

.vs-con-input-label {
  width: 400px;
  margin: 15px auto;

  @media (max-width: 600px) {
    width: 250px;
  }
}

.vs-input--placeholder{
  color: $secondary-color!important;
}

.btn-form{
  width: 200px;
}

</style>
