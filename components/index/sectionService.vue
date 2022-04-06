<template>
    <div class="dejeuner">
    
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
}

</style>