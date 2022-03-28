<template>
    <div class="accueil">
        <img src="~/assets/accueil14.jpg" alt="image accueil" class="accueilImg">
        <Logo 
        class="accueilLogo"
        :animation = logoAnimation
        :className = logoClass
        :logoFill = logoFill
        :logoStroke = logoStroke
        />
        <svg class="leafSvg" width="162" height="343" viewBox="0 0 162 343" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M85.5 1V135C85.1667 125.667 88 104.3 102 93.5C116 82.7 134.833 81 142.5 81.5L156 82.5C157.333 85 159.581 92.1105 160 100.5C160.5 110.5 161.5 119.5 154 135C148 147.4 138.167 156.5 134 159.5C126.5 165.5 106.6 178.2 87 181C67.4 183.8 52.8333 181.167 48 179.5C41.6667 178 26.2 171.5 15 157.5C3.8 143.5 1 128 1 122C8 120.333 26.4 118 44 122C61.6 126 72.5 135.833 75.5 140.5C79 144.5 85.5 155.7 85.5 172.5C85.5 189.3 85.5 316.667 85.5 342" stroke-linecap="round"/>
        </svg>

        <div class="accueilOverlay"></div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "SectionAccueil",
    data() {
        return {
            logoAnimation: true,
            logoClass: "logoLoad",
            logoFill: "#f7f6f8",
            logoStroke: "#f7f6f8",
        }
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".accueilOverlay", 
            {opacity: 1},
            {opacity: 0.3, duration: 0.8, delay: 1, onComplete: this.parallaxScroll})
        // this.parallaxScroll()
    },
    methods: {
        parallaxScroll: function() {
            // parallax img accueil
            gsap.to(".accueilImg", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    // scroller: ".main",
                    trigger: ".accueilImg",
                    // markers: true,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                },
            })
            // opacity overlay on scroll
            gsap.to(".accueilOverlay", {
                opacity: 1,
                scrollTrigger: {
                    // scroller: ".main",
                    trigger: ".accueil",
                    // markers: true,
                    start: "50% top",
                    end: "70% top",
                    scrub: 1
                },
            })
        }
    },
}

</script>

<style scoped lang="scss">

.leafSvg {
    stroke: #f7f6f8;
    stroke-width: 3px;
    z-index: 10;
    transform: translateY(10%);
}
.accueil {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 100vh;
    overflow: hidden;
    // width: 100%;
    // background: url("~/assets/accueil10.jpg");
    // background-position: 50% 30%;
    // background-position: center;
    background-size: cover;

    &Img {
        position: absolute;
        object-position: 50% 30%;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &Logo {
        // max-height: 25vh;
        width: 90%;
        max-height: 30vh;
        transform: translateY(25%);
    }

    &Overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background: rgba(41, 19, 21, 1);
        // background: #232832;
        // background: #0d1317;
        opacity: 0.3;
        z-index: 1;
    }
}

</style>