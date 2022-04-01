<template>
    <div class="chambreParallax">
        <div class="chambreParallaxContainer" 
        v-for="chambre in chambres" 
        :key="chambre.image"
        >
            <img :src="chambre.image" alt="photo maison l'orée de lansot" class="chambreParallaxContainerImage">
            <div class="containerDetail">
                <h2> {{ chambre.name }} </h2>
                <div class="containerDetailLink">
                    Plus de détails..
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "ChambreParallax",
    props: ["chambres"],
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.parallaxScrolling();
    },
    methods: {
        parallaxScrolling: function() {
            document.querySelectorAll(".chambreParallaxContainerImage").forEach(image => {
                gsap.to(image, {
                    yPercent: 35,
                    ease: "none",
                    scrollTrigger: {
                        trigger: image,
                        // markers: true,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    },
                })
            })
            
        }
    },
}

</script>

<style scoped lang="scss">
@import url('http://fonts.cdnfonts.com/css/ballet-harmony');

$colorBrown: #291315;
$colorGreen: #8FBF21; //good
$colorWhite: #f7f6f8; //good
$colorBlue: #131b1e;
$colorGray: #d1cfcf;
$colorBeige: #c0b193;
$colorOrange: #e25827;
$colorYellow: #c9853c;
.chambreParallax {
    width: 100%;
    &Container {
        z-index: 1;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        &Image {
            object-position: center;
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }
}
.containerDetail {
    position: absolute;
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
    width: 90%;
    max-width: 500px;
    backdrop-filter: blur(5px) saturate(130%) brightness(70%);
    border-radius: 30px;
    & h2 {
        font-family: 'Ballet Harmony', sans-serif;
        font-size: 5.5vh;
        color: $colorYellow;
        margin: 0 0 30px 0;
    }
    &Link {
        font-size: 2vh;
        color: $colorWhite;
        text-decoration: underline solid $colorWhite;
    }
}

</style>