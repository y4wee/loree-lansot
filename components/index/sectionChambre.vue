<template>
  <div class="chambre">
    <div class="chambreDetail">
      <div class="chambreDetailTitre">
        Nos <br/> Chambres
      </div>
      <div class="chambreDetailText">
        Venez vous ressourcer tout au long de l'année, dans notre ancienne ferme
        du XVII° siècle.
        Dans ce lieu agréablement calme de Gironde, nous vous accueillons & mettons
        à votre disposition trois chambres d'hôtes spacieuses.
      </div>
    </div>
    

    <ChambreParallax
    :chambres = chambres
    />

  </div>
</template>

<script>
import { gsap } from 'gsap';
import ChambreParallax from './chambreParallax.vue';

export default {
    name: "SectionChambre",
    data() {
        return {
            chambres: [
                {
                    id: "atelier",
                    name: "L atelier",
                    image: require("~/assets/atelier.png"),
                    personnes: "1 - 4 personnes",
                    prix: "70€ - 106€ / nuit"
                },
                {
                    id: "mansarde",
                    name: "La Mansarde",
                    image: require("~/assets/mansarde.png"),
                    personnes: "1 - 3 personnes",
                    prix: "60€ - 78€ / nuit"
                },
                {
                    id: "romance",
                    name: "La Romance",
                    image: require("~/assets/romance.png"),
                    personnes: "1 - 4 personnes",
                    prix: "65€ - 101€ / nuit"
                },
            ]
        };
    },
    mounted() {
      this.animationTitle();
      this.animationText();
    },
    methods: {
        animationTitle: function() {
            let element = document.querySelector(".chambreDetailTitre");
            let callback = (entries) => {
                if(entries[0].isIntersecting) {
                    gsap.to(element, {
                        transform: "translateX(0)",
                        opacity: 1,
                        ease: "power1.out",
                        duration: 0.3,
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
            let element = document.querySelector(".chambreDetailText");
            let callback = (entries) => {
                if(entries[0].isIntersecting) {
                    gsap.to(element, {
                        transform: "translateX(0)",
                        opacity: 1,
                        ease: "power1.out",
                        duration: 0.3,
                        onComplete: observer.disconnect(),
                    });
                }
            }
            const observer = new IntersectionObserver(callback, {
                threshold: 0.7,
            });
            observer.observe(element);
        },
    },
    components: { ChambreParallax }
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

.chambre {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: $colorYellow;
  overflow-x: hidden;
  &Detail {
    display: flex;
    flex-direction: column;
    width: 100%;
    // border-top: solid 10px $colorBlue;
    border-bottom: solid 10px $colorBlue;

    &Titre {
      display: flex;
      align-items: center;
      font-family: "Ballet Harmony", sans-serif;
      font-size: 5rem;
      color: $colorWhite;
      margin: 40px 15px;
      opacity: 0;
      transform: translateX(12px);
    }

    &Text {
      font-size: 1.4rem;
      max-width: 700px;
      color: $colorBlue;
      margin: 0 10px 60px 10px;
      padding-left: 10px;
      border-left: solid 2px $colorWhite;
      opacity: 0;
      transform: translateX(12px);
    }
  }
}

</style>