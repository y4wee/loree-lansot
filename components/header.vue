<template>
  <div class="header">
    <Logo 
    class="headerLogo"
    :animation = logoAnimation
    :className = logoClass
    :logoFill = logoFill
    :logoStroke = logoStroke
    />
    <ButtonNav />
  </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            logoAnimation: false,
            logoClass: "logoHeader",
            logoFill: "#f7f6f8",
            logoStroke: "#f7f6f8",
        };
    },
}
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 8vh;
    background: rgba(41, 19, 21, 1);
    transform: translateY(-110%);
  }
  .headerLogo {
    margin-left: 2%;
    height: 90%;
  }
</style>