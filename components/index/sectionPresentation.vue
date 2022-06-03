<template>
  <div class="presentation">
    <section class="presentationSelf">

      <HalfTitle 
      :text="'Qui sommes nous'"
      />

      <CarteText 
      class="presentationSelfCarte"
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
import HalfTitle from '../halfTitle.vue';

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
              lottie: "https://assets1.lottiefiles.com/packages/lf20_8fcmdyvo.json"
            }
        };
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        // responsive du js 
        window.addEventListener('resize', () => {
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
          trigger: ".presentation",
          pin: ".presentationSelf",
          start: "10px top",
          end: "bottom bottom",
        });
      },
    },
    components: { PresentationHouse, CarteText, HalfTitle },
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
    width: 100%;
    overflow-x: hidden;
    &::before {
      content: "";
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
// partie text presentation
    &Carte {
      z-index: 2;
      margin: 0 0 50px;
    }
  }
}
@media all and (min-width: 1025px) {
  .presentation {
    flex-direction: row;
  // section presentation
    &Self {
      max-height: 100vh;
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