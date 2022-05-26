<template>
    <div class="accueil">
        <img 
        srcset="~/assets/accueil/accueilSmall.webp 600w,
                ~/assets/accueil/accueilMedium.webp 1024w,
                ~/assets/accueil/accueilLarge.webp 1920w"
        sizes="100vw"
        alt="image accueil" 
        class="accueilImg">

        <Logo 
            class="accueilLogo"
            :animation = logoAnimation
            :className = logoClass
            :logoFill = logoFill
            :logoStroke = logoStroke 
        />

        <div class="accueilUtils">
            <h1 class="accueilUtilsTitle">Chambres d'hôtes</h1>
            <div class="accueilUtilsButton">
                <div class="accueilUtilsButtonBack"></div>
                <div class="accueilUtilsButtonText" @click="buttonScrollTo">Reserver</div>
            </div>
        </div>

        <div class="accueilOverlay"></div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
        gsap.registerPlugin(ScrollToPlugin);
        this.parallaxScroll();
        console.log(this.widthInner);
    },
    computed: {
        widthInner: function() {
            return document.querySelector("body").offsetWidth
        }
    },
    methods: {
        parallaxScroll: function() {
            let image = document.querySelector(".accueilImg")
            new simpleParallax(image, {
                customWrapper: ".accueil",
                orientation: "down",
                delay: .2,
	            transition: 'cubic-bezier(0,0,0,1)'
            });
        },
        buttonScrollTo: function(e) {
            gsap.to(window, {scrollTo: "#indexFooter", duration: 1, ease: "power3.inOut"})
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
$colorYellow: #c4721c;
.accueil {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 100vh;
    overflow: hidden;
    user-select: none;
    &Overlay {
        z-index: 2;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba($color: black, $alpha: 0.45);
    }
    &Phone {
        z-index: 3;
        display: none;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        margin: 25px;
        color: $colorWhite;
        &Icon {
            margin-right: 10px;
            font-size: 1.5rem;
        }
        & a {
            text-decoration: none;
            color: $colorYellow;
        }
    }
    &Img {
        z-index: 1;
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        &::before {
            width: 100%;
            height: 100%;
            background: rgba($color: black, $alpha: 1.0);
        }
    }
    &Utils {
        z-index: 3;
        position: absolute;
        bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 200px;
        width: calc(100% - 20px);
        max-width: 350px;
        &Title {
            margin: 50px 0 15px;
            color: $colorWhite;
            font-size: 1.2rem;
            font-weight: normal;
        }
        &Button {
            z-index: 4;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60%;
            height: 50px;
            &Text {
                z-index: 5;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                border: solid 2px $colorYellow;
                color: $colorYellow;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.7);
            }
            &Back {
                position: absolute;
                top: 10px;
                left: 10px;
                width: 100%;
                height: 100%;
                background: $colorBlue;
                box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.7);
                transition: transform 0.2s ease-out;
            }
            &:hover .accueilUtilsButtonBack {
                transform: translate(-10px, -10px);
            }
        }
    }

    &Logo {
        z-index: 30;
        position: relative;
        top: 20%;
        z-index: 30;
    }
}

</style>