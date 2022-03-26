<template>
  <div class="header">
    <Logo 
    class="headerLogo"
    :animation = logoAnimation
    :className = logoClass
    :logoFill = logoFill
    :logoStroke = logoStroke
    />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      logoAnimation: false,
      logoClass: "logoHeader",
      logoFill: "black",
      logoStroke: "black",
    }
  },
}
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
  }
  .headerLogo {
    height: 30vh;
  }
</style>