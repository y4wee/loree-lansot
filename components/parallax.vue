<template>
    <div class="parallax">
        <div class="parallaxContainer" 
        v-for="image in images" 
        :key="image.url"
        >
            <img :src="image.url" alt="photo maison l'orée de lansot" class="parallaxContainerImage">
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "Parallax",
    props: ["images"],
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.parallaxScrolling();
    },
    methods: {
        parallaxScrolling: function() {
            document.querySelectorAll(".parallaxContainerImage").forEach(image => {
                gsap.to(image, {
                    yPercent: 35,
                    ease: "none",
                    scrollTrigger: {
                        trigger: image,
                        markers: true,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    },
                })
            })
            
        }
    },
}

</script>

<style scoped lang="scss">
$colorBrown: #291315;
$colorGreen: #8FBF21; //good
$colorWhite: #f7f6f8; //good
$colorBlue: #0d1317;
$colorGray: #d1cfcf;
$colorBeige: #c0b193;
$colorOrange: #e25827;
$colorYellow: #c9853c;
    .parallax {
        width: 100%;
        &Container {
            height: 100vh;
            width: 100%;
            &Image {
                object-position: center;
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }
    }

</style>