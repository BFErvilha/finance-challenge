<template>
  <div id="app">
    <VueGithubCorners :repoUrl="repoUrl" :catColor="catColor" :bgColor="bgColor" style="z-index: 1"></VueGithubCorners>
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'

export default {
  name: 'App',
  components: { Footer, Header },
  data () {
    return {
      repoUrl: 'https://github.com/BFErvilha/finance-challenge',
      catColor: '#020202',
      bgColor: '#873deb'
    }
  }
}
</script>
<style lang="scss">
.github-corners-svg{
  z-index: 1;
}
</style>
