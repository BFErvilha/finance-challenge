<template>
    <b-container fluid class="header-container">
      <b-row class="justify-content-md-center">
        <b-col cols="8">
          <nav-bar />
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'Header',
  components: { NavBar }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.header-container{
  position: absolute;
  background: $primary-color;

  header{
    height: 65px;
  }
}

.vs-navbar {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
