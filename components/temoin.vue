<template>
    <div class="temoin">
    
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "Temoin",
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
    },
    methods: {
    },
}

</script>

<style scoped lang="scss">



</style>