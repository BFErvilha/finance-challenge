<template>
  <span>
    <b-container class="footer-bg" fluid>
      <b-row style="width: 100%;">
        <b-col class="siteMap" md="4" xs="12">
          <h2>Mapa do Site</h2>
          <ul>
            <li>
              <router-link to="/"> Serviços </router-link>
            </li>
            <li>
              <router-link to="/"> Contato </router-link>
            </li>
            <li>
              <router-link to="/register">Cadastre-se </router-link>
            </li>
            <li>
              <router-link to="/Login">Login </router-link>
            </li>
          </ul>
        </b-col>
        <b-col class="social-media" md="4" xs="12">
          <h2>Redes sociais</h2>
          <ul>
            <li><i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-linkedin-in"></i></li>
            <li><i class="fab fa-instagram"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-youtube"></i></li>
          </ul>
        </b-col>
        <b-col class="about" md="4" xs="12">
          <h2>Sobre</h2>
          <p>A BusiFin é uma startup de crédito para empresas criada para facilitar a vida dos pequenos empresários. Com ela você liberação mais rapidamente o seu crédito.</p>
        </b-col>
      </b-row>
    </b-container>
    <UnderFooter />
  </span>
</template>

<script>
import UnderFooter from './UnderFooter'
export default {
  name: 'Footer',
  components: { UnderFooter }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.footer-bg{
  background-color: $primary-color;
  min-height: 300px;

  .siteMap{
    width: 450px;
    margin: 60px auto 50px;

    @media (max-width: 600px) {
    margin: 30px auto 25px;
    }

    h2{
      color: white;
      font-family: $font-ibm;
      text-transform: uppercase;
    }

    ul{
      list-style: none;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-left: 10px;

      li{
        margin: 10px auto;
        width: 180px;

        a{
          text-decoration: none!important;
          color:white!important;
          font-family: $font-ibm;

          &:hover{
            color: $secondary-color!important;
          }
        }
      }
    }
  }

  .social-media{
    width: 450px;
    margin: 60px auto 50px;

    @media (max-width: 600px) {
      margin: 30px auto 25px;
    }

    h2{
      color: white;
      font-family: $font-ibm;
      text-transform: uppercase;
      }

    ul{
      list-style: none;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-left: 10px;

      li{
        font-size: 30px;
        background-color: $secondary-color;
        padding: 7px 10px;
        width: 60px;
        height: 60px;
        color: $primary-color;
        border-radius: .375rem;
        border: 2px solid transparent;
        cursor: pointer;
        &:hover{
          background-color: $primary-color;
          color: $secondary-color;
          border-color: $secondary-color;
        }
      }
    }
  }

  .about{
    width: 450px;
    margin: 60px auto 50px;

    @media (max-width: 600px) {
      margin: 30px auto 25px;
    }

    h2{
      color: white;
      font-family: $font-ibm;
      text-transform: uppercase;
    }

    p{
      color: white;
      font-family: $font-ibm;
    }
  }
}

</style>
