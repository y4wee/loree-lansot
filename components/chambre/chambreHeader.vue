<template>
    <div class="header">
        <img 
        class="headerImage"
        :src="chambre[chambreIndex].image" 
        :alt="'photo de la chambre qui a pour nom ' + chambre[chambreIndex].name"
        >
        <div class="headerLogo">
            <img :src="chambre[chambreIndex].logo" :alt="'titre de la chambre ' + chambre[chambreIndex].name">
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "ChambreHeader",
    props: ["chambreIndex"],
    data() {
        return {
            chambre: [
                {
                    name: "atelier",
                    image: require("~/assets/atelier.png"),
                    logo: require("~/assets/atelierlogo1.svg"),
                },
                {
                    name: "mansarde",
                    image: require("~/assets/mansarde.png"),
                    logo: require("~/assets/mansardelogo1.svg"),
                },
                {
                    name: "romance",
                    image: require("~/assets/romance.png"),
                    logo: require("~/assets/romancelogo1.svg"),
                },
            ],
        }
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.parallaxScroll();
    },
    methods: {
        parallaxScroll: function () {
            // parallax img accueil
            gsap.to(".headerImage", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".headerImage",
                    // markers: true,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.01
                },
            });
        },
    },
}

</script>

<style scoped lang="scss">

$colorBrown: #291315;
$colorGreen: #8FBF21; //good
$colorWhite: #f7f6f8; //good
$colorBlue: #131b1e;
$colorGray: #d1cfcf;
$colorBeige: #c0b193;
$colorOrange: #e25827;
$colorYellow: #c9853c;

.header {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    user-select: none;
    &Image {
        position: absolute;
        object-position: center;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    &Logo {
        z-index: 5;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        & img {
            max-width: 90vw;
            height: 40vh;
        }
    }
}

</style>