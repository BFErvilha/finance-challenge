<template>
  <b-container class="register-container">
    <b-row>
      <b-col sm="12" md="6">
        <b-row>
          <b-col class="mt-2" sm="12" md="12">
            <vs-input color="#873deb" type="text" label-placeholder="Nome Completo" v-model="user.name"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
          <vs-input color="#873deb"  type="text" label-placeholder="Telefone" v-model="user.phone"/>
        </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="email" label-placeholder="E-mail" v-model="user.email"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="text" label-placeholder="CPF" v-model="user.cpf"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="text" label-placeholder="RG" v-model="user.rg"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="password" label-placeholder="Senha" v-model="user.password"/>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="12" md="6">
        <b-row>
          <b-col class="mt-2" sm="12" md="9">
            <vs-input color="#873deb" type="text" label-placeholder="Logradouro" v-model="user.street"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="3">
            <vs-input color="#873deb" type="text" label-placeholder="Numero" v-model="user.number"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="3">
            <vs-input color="#873deb" type="text" label-placeholder="Complemento" v-model="user.complement"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="text" label-placeholder="Bairro" v-model="user.district"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="3">
            <vs-input color="#873deb" type="text" label-placeholder="CEP" v-model="user.zipcode"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="5">
            <vs-input color="#873deb" type="text" label-placeholder="Cidade" v-model="user.city"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="3">
            <vs-input color="#873deb" type="text" label-placeholder="UF" v-model="user.state"/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'userInfo',
  computed: {
    ...mapState({
      user: state => state.company.user
    })
  }
}
</script>

<style scoped lang="scss">
  .vs-con-input-label{
    width: 100%;
    padding: 0 5px;
  }
</style>
