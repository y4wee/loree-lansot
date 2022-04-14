<template>
    <div class="header">
        <img 
        class="headerImage"
        :src="chambreImage[chambreIndex].url" 
        :alt="'photo de la chambre qui a pour nom ' + chambre[chambreIndex]"
        >
        <div class="headerLogo">{{ currentChambre }}</div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "ChambreHeader",
    props: ["currentChambre"],
    data() {
        return {
            chambre: ["atelier", "mansarde", "romance"],
            chambreImage: [
                { url: require("~/assets/atelier.png") },
                { url: require("~/assets/mansarde.png") },
                { url: require("~/assets/romance.png") },
            ],
            chambreLogo: [

            ]
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
    computed: {
        chambreIndex: function() {
            return this.chambre.indexOf(this.currentChambre)
        }
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
        font-size: 2rem;
        color: $colorGreen;
    }
}

</style>