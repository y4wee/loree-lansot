<template>
    <div class="accueil">
        <Logo 
        class="accueilLogo"
        :animation = logoAnimation
        :className = logoClass
        :logoFill = logoFill
        :logoStroke = logoStroke
        />
        <div class="accueilOverlay"></div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: "SectionAccueil",
    data() {
        return {
            logoAnimation: true,
            logoClass: "logoLoad",
            logoFill: "white",
            logoStroke: "white",
        }
    },
    mounted() {
        gsap.to(".accueilOverlay", {opacity: 0.4, duration: 0.8, delay: 1})
    },
    methods: {
    },
}

</script>

<style scoped lang="scss">

.accueil {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100vh;
    width: 100vw;
    background: url("~/assets/accueil31.png");
    background-position: center;
    background-size: cover;

    &Logo {
        height: 30vh;
        transform: translateY(-15%);
    }

    &Overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(41, 19, 21, 1);
        opacity: 1;
        z-index: 1;
    }
}

</style>