<template>
  <b-container class="register-container">
    <b-row>
      <b-col sm="12" md="6">
        <b-row>
          <b-col class="mt-2" sm="12" md="12">
            <vs-input color="#873deb"  type="text" label-placeholder="Nome Completo" v-model="company.name"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="text" label-placeholder="Telefone" v-model="company.phone"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="email" label-placeholder="E-mail" v-model="company.email"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="text" label-placeholder="CPF" v-model="company.cnpj"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="text" label-placeholder="Responsável" v-model="company.userResponsible"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="text" label-placeholder="Receita do ultimo mês" v-model="company.lastMonth"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="text" label-placeholder="Website" v-model="company.website"/>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="12" md="6">
        <b-row>
          <b-col class="mt-2" sm="12" md="9">
            <vs-input color="#873deb" type="text" label-placeholder="Logradouro" v-model="company.street"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="3">
            <vs-input color="#873deb" type="text" label-placeholder="Numero" v-model="company.number"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="3">
            <vs-input color="#873deb" type="text" label-placeholder="Complemento" v-model="company.complement"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="6">
            <vs-input color="#873deb" type="text" label-placeholder="Bairro" v-model="company.district"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="3">
            <vs-input color="#873deb" type="text" label-placeholder="CEP" v-model="company.zipcode"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="5">
            <vs-input color="#873deb" type="text" label-placeholder="Cidade" v-model="company.city"/>
          </b-col>
          <b-col class="mt-2" sm="12" md="3">
            <vs-input color="#873deb" type="text" label-placeholder="UF" v-model="company.state"/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'CompanyInfo',
  data () {
    return {
      company: {
        name: '',
        userResponsible: '',
        email: '',
        phone: '',
        cnpj: '',
        lastMonth: '',
        website: '',
        zipcode: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.vs-con-input-label{
  width: 100%;
  padding: 0 5px;
}
</style>
