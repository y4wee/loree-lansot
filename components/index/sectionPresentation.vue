<template>
  <div class="presentation">
    <section class="presentationSelf">
      <div class="presentationSelfHead">
        <div class="presentationSelfHeadContainer">
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
        </div>
      </div>
      <div class="presentationSelfPhoto">
        <img src="~/assets/profile.png" alt="photo hôtes jambert">
        <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200"/>
        </svg>
      </div>
      <div class="presentationSelfText">
        Voila une vingtaine d'années que nous sommes tombés amoureux de cette longère, <br/>
        que nous rénovons dans un style alliant modernité & ancient.<br/><br/>

        Notre attrait dans l'utilisation de materiaux récupérés & d'objets, chinés, <br/>
        dont nous détournons l'utilisation afin de leur offrir une seconde vie, offre à <br/>
        cet endroit ce cadre si particulier !<br/><br/>

        Venez vous ressourceer tout au long de l'année, dans notre ancienne ferme<br/>
        du XVII° siècle.<br/>
        Dans ce lieu agréablement calme de Gironde, nous vous accueillons & mettons<br/>
        à votre disposition trois chambres d'hôtes spacieuses.
      </div>
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
      this.headTranslate();
    },
    methods: {
      headTranslate: function() {
        let length = document.querySelector(".presentationSelfHeadText").offsetWidth
        console.log(innerWidth)
        gsap.to(".presentationSelfHeadContainer", {
          translateX: `-${length * 2}px`,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".accueil",
            markers: true,
            start: "top top",
            end: "120% top",
            scrub: 1
          },
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
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: #0d1317;

  &Self {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-x: hidden;
    &Head {
      display: flex;
      width: 100%;
      border-top: solid 10px $colorWhite;
      border-bottom: solid 10px $colorWhite;
      &Container {
        display: flex;
        flex-wrap: nowrap;
        white-space: nowrap;
      }
      &Text {
        width: 100%;
        text-align: center;
        font-size: 7vh;
        color: $colorWhite;
        user-select: none;
      }
    }
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
        fill: none;
        stroke: $colorWhite;
        stroke-width: 3px;
        overflow: visible;
      }
    }

    &Text {
      background: $colorWhite;
      max-width: 100%;
    }
  }

  &House {
    width: 100%;
  }
}

</style>