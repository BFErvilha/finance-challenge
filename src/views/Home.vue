<template>
  <div>
    <Banner/>
    <Quality />
    <Benefits />
    <BgImgSection />
    <AccountSuport />
  </div>
</template>

<script>
import Banner from '../components/home/Banner'
import Quality from '../components/home/Quality'
import Benefits from '../components/home/Benefits'
import BgImgSection from '../components/home/BgImgSection'
import AccountSuport from '../components/home/AccountSuport'
export default {
  name: 'Home',
  components: {
    AccountSuport,
    BgImgSection,
    Benefits,
    Quality,
    Banner
  }
}
</script>

<style scoped>

</style>
