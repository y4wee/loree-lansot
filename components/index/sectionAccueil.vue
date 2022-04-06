<template>
    <div class="accueil">
        <img src="~/assets/accueil143.png" alt="image accueil" class="accueilImg">
        <div class="accueilOverlay"></div>
        <Logo 
        class="accueilLogo"
        :animation = logoAnimation
        :className = logoClass
        :logoFill = logoFill
        :logoStroke = logoStroke
        />
        <div class="accueilPhone">
            <font-awesome-icon :icon="['fa', 'phone']" class="accueilPhoneIcon" />
            05.56.25.85.23
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from '../svg/logo.vue';

export default {
    name: "SectionAccueil",
    data() {
        return {
            logoAnimation: true,
            logoClass: "logoLoad",
            logoFill: "#f7f6f8",
            logoStroke: "#f7f6f8",
        };
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        // this.disableScrolling();
        gsap.fromTo(".accueilOverlay", { opacity: 1 }, { opacity: 0.3, duration: 0.8, delay: 1, });
        this.parallaxScroll();
    },
    methods: {
        parallaxScroll: function () {
            // parallax img accueil
            gsap.to(".accueilImg", {
                yPercent: 40,
                ease: "none",
                scrollTrigger: {
                    trigger: ".accueilImg",
                    // markers: true,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                },
            });
            // opacity overlay on scroll
            // gsap.to(".accueilOverlay", {
            //     opacity: 1,
            //     scrollTrigger: {
            //         trigger: ".accueil",
            //         // markers: true,
            //         start: "50% top",
            //         end: "70% top",
            //         scrub: 1
            //     },
            // })
        },
        noScrolling: function () {
            window.scrollTo(0, 0);
        },
        disableScrolling: function () {
            window.addEventListener("scroll", this.noScrolling);
        },
        enableScrolling: function () {
            window.removeEventListener("scroll", this.noScrolling);
        },
    },
    components: { Logo }
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
.accueil {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 100vh;
    overflow: hidden;
    &Phone {
        z-index: 1;
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        margin: 25px;
        color: $colorWhite;
        &Icon {
            margin-right: 10px;
            font-size: 1.4em;
        }
    }
    &Img {
        z-index: 1;
        position: absolute;
        object-position: 50% 30%;
        object-fit: cover;
        width: 100%;
        height: 100%;
        will-change: transform;
    }

    &Logo {
        position: relative;
        top: 20%;
        z-index: 10;
    }

    &Overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        // background: rgba(41, 19, 21, 1);
        // background: #232832;
        // background: #0d1317;
        background: $colorMain;
        opacity: 0.3;
        z-index: 1;
    }
}

</style>