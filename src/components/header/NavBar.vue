<template>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title class="logo-site">
          <i class="fa fa-building"></i> BusiFin
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <router-link to="/"> Serviços </router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/"> Contato </router-link>
      </vs-navbar-item>
      <vs-navbar-item class="register" index="2">
        <router-link to="/register">Cadastre-se </router-link>
      </vs-navbar-item>
      <vs-navbar-item class="login" index="4">
        <router-link to="/Login">Login </router-link>
      </vs-navbar-item>
    </vs-navbar>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style lang="scss">
@import "../../assets/scss/style";

.logo-site{
  font-family: $font-ibm;
  color: white!important;
  font-size: 30px!important;
  font-weight: 900;
  padding-top: 10px!important;
}

.vs-navbar--btn-responsive{
  span{
    background: #fff!important;
  }
}
.vs-con-items {
  &.activeMenuResponsive{
    background: $primary-color;
    padding: 10px;

    li{
      margin-top: 5px;
    }
  }
}
.vs-con-items{
  li{
    color: #fff!important;
    font-family: $font-ibm;
    margin-left: 5px;

    &.register {
      background-color: $secondary-color!important;
      border-radius: .375rem;
    }

    &.login {
      background-color: $third-color;
      border-radius: .375rem;
    }

    a{
      &:hover{
        color: #c3c3c3;
      }
    }
  }
}

</style>
