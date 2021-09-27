<template>
<b-container class="mt-5 bgImg fadeinEffect" fluid>
</b-container>
</template>

<script>
export default {
  name: 'bgImgSection'
}
</script>

<style scoped lang="scss">

.bgImg{
  background: url('../../assets/img/smiling-2.jpg');
  width: 100%;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

    &::before{
      background-color: #873DEB69;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      width: 100%;
      left: 0;
    }
}
</style>
