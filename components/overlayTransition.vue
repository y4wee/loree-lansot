<template>
    <div class="overlayTransition">
    
    </div>
</template>

<script>
import { gsap } from 'gsap';


export default {
    name: "OverlayTransition",
    mounted() {
        this.overlayLoading();
    },
    computed: {
        routerName: function() {
            return this.$route.path
        },
    },
    watch: {
            routerName(newState) {
                console.log(newState)
                this.overlayLoading();
            }
    },
    methods: {
        overlayLoading: function() {
            let tl = gsap.timeline();
            if(this.routerName === "/") {
                tl.delay(1)
            } else {
                tl.delay(0.3)
            }
            tl.to(".overlayTransition", { opacity: 0, duration: 0.8 })
            tl.to(".overlayTransition", { yPercent: -100, duration: 0 }, )
            tl.to("body", { overflow: "visible", duration: 0 });
        },
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

.overlayTransition {
    z-index: 30;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 140vh;
    background: $colorBlue;
}

</style>