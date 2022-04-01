<template>
  <div class="header">
    <!-- <Logo 
    class="headerLogo"
    :animation = logoAnimation
    :className = logoClass
    :logoFill = logoFill
    :logoStroke = logoStroke
    /> -->
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
$colorGreen: #8FBF21; //good
$colorWhite: #f7f6f8; //good
$colorBlue: #0d1317;
$colorBlueLight: #131b1e;
$colorGray: #d1cfcf;
$colorBeige: #c0b193;
$colorOrange: #e25827;
$colorYellow: #c9853c;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    position: fixed;
    z-index: 20;
    width: 100vw;
    height: 8vh;
    // background: rgba(41, 19, 21, 1);
    // transform: translateY(-110%);
    &Button {
      z-index: 25;
    }
  }
  .headerLogo {
    margin-left: 2%;
    height: 90%;
  }
</style>