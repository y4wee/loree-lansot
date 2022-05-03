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
import PresentationHouse from './presentationHouse.vue';

export default {
    name: "SectionPresentation",
    data() {
        return {
            
        };
    },
    mounted() {
        this.animationTitle();
        this.animationText();
    },
    methods: {
      animationTitle: function() {
            let element = document.querySelector(".presentationSelf h1");
            let callback = (entries) => {
                if(entries[0].isIntersecting) {
                    gsap.to(element, {
                        transform: "translateX(0)",
                        opacity: 1,
                        ease: "power1.out",
                        duration: 0.8,
                        onComplete: observer.disconnect(),
                    });
                }
            }
            const observer = new IntersectionObserver(callback, {
                threshold: 0.8,
            });
            observer.observe(element);
        },
        animationText: function() {
            let element = document.querySelector(".presentationSelfText");
            let callback = (entries) => {
                if(entries[0].isIntersecting) {
                    gsap.to(element, {
                        transform: "translateX(0)",
                        opacity: 1,
                        ease: "power1.out",
                        duration: 0.8,
                        onComplete: observer.disconnect(),
                    });
                }
            }
            const observer = new IntersectionObserver(callback, {
                threshold: 0.5,
            });
            observer.observe(element);
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
      opacity: 0;
      transform: translateX(10%);
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
      opacity: 0;
      transform: translateX(10%);
    }
  }
}

</style>