<template>
  <div class="chambre">
    <div class="chambreDetail">
      <div class="chambreDetailTitre">
        Nos <br/> Chambres
      </div>
      <CarteText 
      class="chambreDetailCarte"
      :carte="carteChambre"
      />
    </div>
    

    <ChambreParallax
    :chambres = chambres
    />

  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChambreParallax from './chambreParallax.vue';
import CarteText from '../carteText.vue';

export default {
    name: "SectionChambre",
    data() {
        return {
            chambres: [
                {
                    id: "atelier",
                    name: "L atelier",
                    image: require("~/assets/atelier5.jpg"),
                    personnes: "1 - 4 personnes",
                    prix: "70€ - 106€ / nuit"
                },
                {
                    id: "mansarde",
                    name: "La Mansarde",
                    image: require("~/assets/mansarde.jpg"),
                    personnes: "1 - 3 personnes",
                    prix: "60€ - 78€ / nuit"
                },
                {
                    id: "romance",
                    name: "La Romance",
                    image: require("~/assets/romance.webp"),
                    personnes: "1 - 4 personnes",
                    prix: "65€ - 101€ / nuit"
                },
            ],
            carteChambre: {
                text: ` Venez vous ressourcer tout au long de l'année, dans notre ancienne ferme
                        du XVII° siècle.
                        Dans ce lieu agréablement calme de Gironde, nous vous accueillons & mettons
                        à votre disposition trois chambres d'hôtes spacieuses.`,
                lottie: "https://assets9.lottiefiles.com/packages/lf20_onwiwmfr.json"
            },
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
          trigger: ".chambre",
          pin: ".chambreDetail",
          start: "10px top",
          end: "bottom bottom",
        });
      },
    },
    components: { ChambreParallax, CarteText }
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

.chambre {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: $colorBlue;
  overflow-x: hidden;
  &Detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-bottom: solid 50px $colorBlue;
    &Titre {
      margin: 50px 15px;
      text-align: center;
      font-family: "Ballet Harmony", sans-serif;
      font-size: 5rem;
      color: $colorYellow;
    }
  }
}

@media all and (min-width: 1025px)  {
  .chambre {
    flex-direction: row-reverse;
    align-items: flex-start;
    border-top: solid 10px $colorBlue;
    &Detail {
      width: 40%;
      text-align: center;
      align-items: center;
      border-bottom: none;
    }
  }
}
</style>