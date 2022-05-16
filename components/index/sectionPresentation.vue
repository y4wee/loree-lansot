<template>
  <div class="presentation">
    <section class="presentationSelf">
      <div class="presentationSelfOverlay"></div>
      <h1>Qui sommes nous</h1>
      <div class="presentationSelfPhoto">
        <img src="~/assets/profile.png" alt="photo hôtes jambert">

      </div>
      <CarteText 
      class="presentationSelfText"
      :carte="carte"
      />
    </section>

    <PresentationHouse />

  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PresentationHouse from './presentationHouse.vue';
import CarteText from '../carteText.vue';

export default {
    name: "SectionPresentation",
    data() {
        return {
            pinOn: false,
            carte: {
              text: ` Voila une vingtaine d'années que nous sommes tombés amoureux de cette longère,
                      que nous rénovons dans un style alliant modernité & ancient.

                      Notre attrait dans l'utilisation de materiaux récupérés & d'objets, chinés,
                      dont nous détournons l'utilisation afin de leur offrir une seconde vie, offre à
                      cet endroit ce cadre si particulier !`,
            }
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
    components: { PresentationHouse, CarteText },
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
  border-top: solid 10px $colorWhite;
// section presentation
  &Self {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-height: 100vh;
    overflow-x: hidden;
    &Overlay {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 50%;
      background: $colorBlue;
    }
    & h1 {
      z-index: 2;
      margin: 0 15px;
      font-family: "Ballet Harmony", sans-serif;
      font-size: 5rem;
      color: $colorYellow;
      text-align: center;
    }
    // partie photo mask svg presentation
    &Photo {
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30vh;
      width: calc(100% - 20px);
      max-width: 500px;
      // box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.7);
      overflow: hidden;
      border: solid 5px $colorBlue;
      & img {
        min-height: 100%;
      }
    }
// partie text presentation
    &Text {
      z-index: 2;
    }
  }
}
@media all and (min-width: 1025px) {
  .presentation {
    flex-direction: row;
  // section presentation
    &Self {
      width: 60%;
      align-items: center;
      // partie text presentation
      &Photo {
        align-self: flex-end;
        margin: 0 10%;
      }
    }
  }
}

</style>