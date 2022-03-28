<template>
  <div class="presentation">
    <div class="presentationSkew"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "SectionPresentation",
    mounted() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".presentationSkew", {
        skewY: -10,
        ease: "none",
        scrollTrigger: {
          // scroller: ".main",
          trigger: ".accueil",
          markers: true,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

    },
    methods: {
    },
}

</script>

<style scoped lang="scss">

.presentation {
  position: relative;
  height: 100vh;
  // width: 100vw;
  // background: rgba(41, 19, 21, 1);

  &Skew {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    width: 100%;
    transform-origin: top left;
    background: white;
    z-index: 1;
  }
}

</style>