<template>
    <div class="accueil">
        <div class="accueilUtils">
            <h1 class="accueilUtilsTitle">Chambres d ' Hôtes</h1>
            <div class="accueilUtilsButton" @click="buttonScrollTo">
                Réserver
            </div>
        </div>
        
        <img src="~/assets/accueil3.jpg" alt="image accueil" class="accueilImg">
        <Logo 
            class="accueilLogo"
            :animation = logoAnimation
            :className = logoClass
            :logoFill = logoFill
            :logoStroke = logoStroke
        />
        <div class="accueilPhone">
            <font-awesome-icon :icon="['fa', 'phone']" class="accueilPhoneIcon" />
            <a href="tel:0612186397">- 06.12.18.63.97</a>
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
$colorYellow: #c9853c;
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
        bottom: 12%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &Title {
            margin: 30px 0;
            color: $colorWhite;
            font-size: 1.5rem;
            font-weight: normal;
        }
        &Button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 50px;
            border-radius: 30px;
            background: $colorGreen;
            box-shadow: 0 4px 5px 0 rgba($color: black, $alpha: 0.7);
            font-size: 1.5rem;
            font-weight: bold;
            color: $colorBlue;
            cursor: pointer;
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