<template>
  <div class="presentation">
    <section class="presentationSelf">
      <h1>Qui sommes nous</h1>
      <div class="presentationSelfPhoto">
        <img src="~/assets/profile.png" alt="photo hôtes jambert">

      </div>
      <div class="presentationSelfText">
        Voila une vingtaine d'années que nous sommes tombés amoureux de cette longère,
        que nous rénovons dans un style alliant modernité & ancient.<br/><br/>

        Notre attrait dans l'utilisation de materiaux récupérés & d'objets, chinés,
        dont nous détournons l'utilisation afin de leur offrir une seconde vie, offre à
        cet endroit ce cadre si particulier !
      </div>
    </section>

    <PresentationHouse />

  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PresentationHouse from './presentationHouse.vue';

export default {
    name: "SectionPresentation",
    data() {
        return {
            pinOn: false,
        };
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        // responsive du js 
        window.addEventListener('resize', () => {
          console.log()
          this.reloadSize();
        });
        if(innerWidth > 1024) {
          this.pinScrolling();
          this.pinOn = true;
        }
    },
    methods: {
      reloadSize: function() {
        let width = document.querySelector("body").offsetWidth;
        if(width > 1024 && this.pinOn === false) {
          this.pinScrolling();
          this.pinOn = true;
        }
        else if(width < 1024 && this.pinOn === true) {
          this.pinOn = false;
          location.reload();
        } else {
          return;
        }
      },
      pinScrolling: function() {
        ScrollTrigger.create({
          // markers: true,
          trigger: ".presentation",
          pin: ".presentationSelf",
          start: "10px top",
          end: "bottom bottom",
        });
      },
    },
    components: { PresentationHouse },
}

</script>

<style scoped lang="scss">
$colorMain: #131b1e;
$colorTwo: #f7f6f8;
$colorThree: #8FBF21;

$colorBrown: #291315;
$colorGreen: #8FBF21; //good
$colorWhite: #f7f6f8; //good
$colorBlue: #131b1e;
$colorGray: #d1cfcf;
$colorBeige: #c0b193;
$colorOrange: #e25827;
$colorYellow: #c4721c;

.presentation {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: $colorWhite;
  border-top: solid 10px $colorBlue;
  border-bottom: solid 10px $colorBlue;
// section presentation
  &Self {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    & h1 {
      margin: 40px 15px;
      font-family: "Ballet Harmony", sans-serif;
      font-size: 5rem;
      color: $colorYellow;
      text-align: center;
    }
    // partie photo mask svg presentation
    &Photo {
      height: 350px;
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
        overflow: visible;
      }
      &Circle {
        stroke: $colorTwo;
        stroke-width: 5px;
        fill: none;
      }
    }
// partie text presentation
    &Text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 40px 10px;
      padding: 0 10px;
      border-left: solid 2px $colorYellow;
      font-size: 1.4rem;
      color: $colorBlue;
    }
  }
}
@media all and (min-width: 1025px) {
  .presentation {
    flex-direction: row;
    border-bottom: none;
  // section presentation
    &Self {
      width: 60%;
      max-height: 100vh;
      align-items: center;
      & h1 {
        margin: 40px 15px;
        font-family: "Ballet Harmony", sans-serif;
        font-size: 5rem;
        color: $colorYellow;
        text-align: center;
      }
      // partie photo mask svg presentation
      &Photo {
        height: 200px;
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
          overflow: visible;
        }
        &Circle {
          stroke: $colorTwo;
          stroke-width: 5px;
          fill: none;
        }
      }
  // partie text presentation
      &Text {
        text-align: center;
        max-width: 700px;
        margin: 40px 10px;
        padding-left: 10px;
        border-left: solid 2px $colorYellow;
        font-size: 1.4rem;
      }
    }
  }
}

</style>