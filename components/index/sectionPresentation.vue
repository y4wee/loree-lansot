<template>
  <div class="presentation">
    <section class="presentationSelf">
      <h1>Qui Sommes nous...</h1>
      <div class="presentationSelfPhoto">
        <img src="~/assets/profile.png" alt="photo hôtes jambert">
        <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200"/>
        </svg>

      </div>
      <div class="presentationSelfText"></div>
    </section>
    <section class="presentationHouse">
      <div class="presentationHousePhoto"></div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "SectionPresentation",
    mounted() {
      gsap.registerPlugin(ScrollTrigger);
    },
    methods: {
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
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: #0d1317;
  border-top: solid 10px $colorWhite;

  &Self {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & h1 {
      font-size: 5vh;
      text-align: center;
      color: $colorWhite;
    }
    &Photo {
      height: 250px;
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      & img {
        position: absolute;
        width: 100%;
        max-width: 400px;
        mask-image: url("~/assets/maskimage.svg");
        mask-size: 200px;
        mask-repeat: no-repeat;
        mask-position: center;
      }
      & svg {
        position: absolute;
        width: 200px;
        fill: none;
        stroke: $colorWhite;
        stroke-width: 3px;
        overflow: visible;
      }
    }
  }

  &House {
    width: 100%;
  }
}

</style>