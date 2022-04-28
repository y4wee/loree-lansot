<template>
    <div class="dejeuner">
        <div class="container">
            <img src="~/assets/house1.png" alt="test photo">
            <div class="containerCadre">

            </div>
        </div>
    
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "Dejeuner",
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
    },
    methods: {
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

.dejeuner {
    z-index: 1;
    height: 100vh;
    width: 100%;
    background: $colorBeige;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    overflow: hidden;
    // background: black;
    & img {
        object-position: center;
        object-fit: cover;
        width: 100%;
        filter: blur(5px) saturate(130%) brightness(70%);
        // height: 100%;
    }
    &Cadre {
        position: absolute;
        width: 80%;
        height: 80%;
        border: solid 2px $colorWhite;
        backdrop-filter: blur(-200px) saturate(130%) brightness(70%);
    }
}

</style>