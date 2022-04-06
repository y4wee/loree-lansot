<template>
  <div class="presentation">
    <section class="presentationSelf">
      <!-- <div class="presentationSelfHead">
        <div class="presentationSelfHeadContainer">
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
          <div class="presentationSelfHeadText">Qui sommes nous !?&nbsp;</div>
        </div>
      </div> -->
      <h1>Qui sommes nous ?</h1>
      <div class="presentationSelfPhoto">
        <img src="~/assets/profile.png" alt="photo hôtes jambert">
        <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <mask id="maskCircle">
            <rect x="0" y="0" width="600" height="600" fill="white" />
            <circle cx="200" cy="200" r="200" fill="black"/>
          </mask>
          <g>
            <g>
              <path mask="url(#maskCircle)" class="presentationSelfPhotoLeaf" d="M367.972 336.151C404.126 346.223 424.045 355.15 421.654 359.767C420.75 361.705 415.533 361.076 410.262 358.253C397.002 351.751 332.457 332.789 329.12 334.716C327.754 335.504 331.533 344.851 337.663 355.47C348.961 375.038 355.58 397.712 350.083 397.65C348.432 397.592 344.228 390.311 341.039 381.635C325.825 341.27 315.902 332.841 309.501 354.335C300.443 383.836 308.683 404.765 338.796 429.246C363.959 449.709 362.57 450.106 368.933 420.139L373.996 395.979L384.88 400.819C397.703 406.563 410.715 406.331 443.514 399.732C456.777 397.131 470.67 394.571 474.341 394.272C490.475 392.441 441.029 329.568 414.865 318.583C398.518 311.638 375.037 312.655 353.326 320.943L336.756 327.274L367.972 336.151Z" fill="#8FBF21"/>
            </g>
            <path class="presentationSelfPhotoCircle" d="M400 200C400 310.457 310.457 400 200 400C89.5431 400 0 310.457 0 200C0 89.5431 89.5431 0 200 0C310.457 0 400 89.5431 400 200Z"/>
          </g>
          <defs>
            <filter id="filter0_i_47_6" x="306.022" y="313.981" width="171.486" height="133.765" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_47_6"/>
            </filter>
            <clipPath id="clip0_47_6">
              <rect width="400" height="400" fill="white"/>
            </clipPath>
          </defs>
        </svg>

      </div>
      <div class="presentationSelfText">
        <div class="presentationSelfTextBorder"></div>
        Voila une vingtaine d'années que nous sommes tombés amoureux de cette longère,
        que nous rénovons dans un style alliant modernité & ancient.<br/><br/>

        Notre attrait dans l'utilisation de materiaux récupérés & d'objets, chinés,
        dont nous détournons l'utilisation afin de leur offrir une seconde vie, offre à
        cet endroit ce cadre si particulier !<br/><br/>
      </div>
    </section>

    <section class="presentationHouse">
      <div class="presentationHouseContainer" 
        v-for="(image, index) in images" 
        :key="index"
        >
            <img :src="image.url" alt="photo maison l'orée de lansot" :class="'presentationHouseContainerImage ' + 'image' + index">
        </div>
    </section>

  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "SectionPresentation",
    data() {
        return {
            images: [
                { url: require("~/assets/house1.png") },
                { url: require("~/assets/house2.png") },
                { url: require("~/assets/house3.png") },
                { url: require("~/assets/house4.png") },
            ],
        };
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        // this.headTranslate();
    },
    methods: {
        headTranslate: function () {
            gsap.to(".presentationSelfHeadContainer", {
                xPercent: -25,
                ease: "none",
                scrollTrigger: {
                    trigger: ".accueil",
                    // markers: true,
                    start: "top top",
                    end: "120% top",
                    scrub: 0.5
                },
            });
        }
    },
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
      margin: 40px 10px;
      font-family: 'Paytone One', sans-serif;
      font-size: 3.5rem;
      color: $colorWhite;
    }
    // headline en translate
    // &Head {
    //   display: flex;
    //   width: 100%;
    //   border-top: solid 8px $colorTwo;
    //   border-bottom: solid 8px $colorTwo;
    //   &Container {
    //     display: flex;
    //     flex-wrap: nowrap;
    //     white-space: nowrap;
    //     will-change: transform;
    //   }
    //   &Text {
    //     width: 100%;
    //     text-align: center;
    //     font-size: 4.5vh;
    //     color: $colorTwo;
    //     user-select: none;
    //     font-family: 'Paytone One', sans-serif;
    //   }
    // }
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
      font-size: 1.4rem;
      color: $colorTwo;
      //border pour aniamtion scroll possible
      &Border {
        width: 100%;
        border-top: solid 8px $colorTwo;
        margin-bottom: 25px;
        transform: scaleX(0);
      }
    }
  }
  &House {
    margin: 50px 0;
    width: 100%;
    &Container {
      z-index: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
      // test animation translate 5 5 and shadow ease
      &Image {
        object-position: center;
        object-fit: cover;
        height: 40vh;
        width: 70%;
        border: solid 5px $colorWhite;
        margin: 10px;
        &.image0 {
          align-self: start;
          box-shadow: 5px 5px 10px 0;
        }
        &.image1 {
          align-self: end;
          box-shadow: -5px 5px 10px 0;
        }
        &.image2 {
          align-self: start;
          box-shadow: 5px 5px 10px 0;
        }
        &.image3 {
          align-self: end;
          box-shadow: -5px 5px 10px 0;
        }
      }
    }
  }
}

</style>