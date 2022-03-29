<template>
    <div class="parallax">
        
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "Parallax",
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
    },
    methods: {
    },
}

</script>

<style scoped lang="scss">



</style>