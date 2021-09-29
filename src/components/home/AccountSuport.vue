<template>
  <b-container class="as-container" fluid>
    <b-row>
      <b-col sm="12" md="6" class="formSection p-5">
        <h2>Crie sua conta</h2>
        <b-form @submit="onSubmit" class="mt-3" v-if="show">
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
                  v-model="form.name" required
                  type="text"
                  placeholder="Nome Completo"
                  color="#873deb"
                  label-placeholder="Nome Completo"
                />
              </b-col>
            </b-row>
          </b-form-group>

          <vs-button color="#2728DD" class="btn-form mt-3" type="filled" to="/register">Cadastro</vs-button>
        </b-form>
      </b-col>
      <b-col class="img-suport" sm="12" md="6">
          <img :src="img">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AccountSuport',
  data () {
    return {
      img: '../assets/img/svg/suport.png',
      form: {
        email: '',
        name: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

  .formSection{
    background-color: #F2F2F2;
    height: 400px;

    h2{
      text-transform: uppercase;
      font-family: $font-ibm;
      color: $secondary-color;
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

  .img-suport{
    margin-top: 1rem;
    padding: 3rem;
    @media (max-width: 600px) {
      width: 250px;
      padding: 3rem 0;
    }
  }
</style>
