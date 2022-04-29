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
            
        };
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.animationScroll();
        // this.headTranslate();
    },
    methods: {
        animationScroll: function () {
            //animation titre h1
            gsap.fromTo(".presentationSelf h1", {
                xPercent: 10,
                opacity: 0
            }, {
                xPercent: 0,
                opacity: 1,
                ease: "power1.out",
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".presentationSelf h1",
                    // markers: true,
                    start: "top 70%",
                    end: "bottom 70%",
                },
            });
            // animation text
            gsap.fromTo(".presentationSelfText", {
                xPercent: 10,
                opacity: 0
            }, {
                xPercent: 0,
                opacity: 1,
                ease: "power1.out",
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".presentationSelfText",
                    // markers: true,
                    start: "top 70%",
                    end: "bottom 70%",
                },
            });
            // animation photo
            document.querySelectorAll(".presentationHouseContainerImage").forEach((image) => {
                gsap.fromTo(image, {
                    transform: image.dataset.translate,
                    opacity: 0
                }, {
                    transform: "translate(0, 0)",
                    opacity: 1,
                    ease: "power1.out",
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: image,
                        // markers: true,
                        start: "top 70%",
                        end: "bottom 70%",
                    },
                });
            });
        },
    },
    components: { PresentationHouse }
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
$colorYellow: #c9853c;
.presentation {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: $colorMain;
  border-top: solid 10px $colorWhite;
  border-bottom: solid 10px $colorWhite;
// section presentation
  &Self {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    & h1 {
      margin: 40px 15px;
      // font-family: 'Paytone One', sans-serif;
      // font-size: 3.5rem;
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
      max-width: 700px;
      margin: 10px;
      padding-left: 10px;
      border-left: solid 2px $colorYellow;
      font-size: 1.4rem;
      color: $colorTwo;
    }
  }
}

</style>