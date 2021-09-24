<template>
  <div>
    <Banner/>
    <QualityBenefits />
  </div>
</template>

<script>
import Banner from '../components/home/Banner'
import QualityBenefits from '../components/home/QualityBenefits'
export default {
  name: 'Home',
  components: {
    QualityBenefits,
    Banner
  }
}
</script>

<style scoped>

</style>
