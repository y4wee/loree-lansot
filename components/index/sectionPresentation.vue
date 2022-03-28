<template>
  <div class="presentation">
    <div class="presentationSkew"></div>
    <div class="presentationMain">
      <h1>Qui Sommes nous...</h1>
      <div class="presentationMainPhoto"></div>
      <div class="presentationMainText"></div>
    </div>
    <!-- <div class="presentationSkew"></div> -->
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "SectionPresentation",
    mounted() {
      gsap.registerPlugin(ScrollTrigger);
      this.skewScrolling();
    },
    methods: {
      skewScrolling: function() {
        gsap.to(".presentationSkew", {
          skewY: -10,
          ease: "none",
          scrollTrigger: {
            trigger: ".accueil",
            markers: true,
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        })
      }
    },
}

</script>

<style scoped lang="scss">
$colorBrown: #291315;
$colorGreen: #8FBF21; //good
$colorWhite: #f7f6f8; //good
$colorBlue: #0d1317;
$colorGray: #d1cfcf;
$colorBeige: #c0b193;
$colorOrange: #e25827;
$colorYellow: #c9853c;
.presentation {
  z-index: 1;
  position: relative;
  display: flex;
  height: 100vh;
  // background: #f7f6f8;

  &Skew {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    width: 100%;
    transform-origin: top left;
    background: #0d1317;
    border-top: solid 10px #f7f6f8;

  }

  &Main {
    margin-top: 10px;
    z-index: 5;
    height: 100%;
    width: 100%;
    background: #0d1317;
  }
}

</style>