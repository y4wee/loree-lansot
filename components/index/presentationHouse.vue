<template>
    <div class="house">
        <div class="houseContainer" v-for="(image, index) in images" :key="index" :data-index="index">
            <svg class="houseContainerSvg" width="100%" height="100%" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <mask :id="'myMask' + index">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <rect :class="'houseContainerSvgMask maskPhoto' + index" x="0" y="0" :width="image.width" height="95%" fill="black" />
                </mask>

                <image class="houseContainerSvgImageBack" :xlink:href="image.url" x="0" y="0" width="100%" />
                <rect class="houseContainerSvgImageFront" x="0" y="0" width="100%" height="100%" :mask="`url(#myMask${index})`" />

                <rect 
                :class="'houseContainerSvgMask houseContainerSvgRect maskPhoto' + index + ' houseContainerSvgMask' + image.direction" 
                x="0" y="0" :width="image.width" height="95%" fill="none" />
            </svg>
        </div>
    
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "PresentationHouse",
    data() {
        return {
            images: [
                { url: require("~/assets/house1.png"), origin: "top left", xFrom: "2%", xTo: "18%", width: "80%", height: "95%" },
                { url: require("~/assets/house4.png"), origin: "top right", xFrom: "18%", xTo: "2%", width: "80%", height: "95%" },
                { url: require("~/assets/house2.png"), origin: "top left", xFrom: "2%", xTo: "18%", width: "80%", height: "95%" },
                { url: require("~/assets/house3.png"), origin: "top right", xFrom: "18%", xTo: "2%", width: "80%", height: "95%" },
                { url: require("~/assets/house5.png"), origin: "top left", xFrom: "2%", xTo: "18%", width: "80%", height: "95%" }
            ],
        };
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.animationScrolling();
    },
    methods: {
        animationScrolling: function() {
            document.querySelectorAll(".houseContainer").forEach(container => {
                let i = container.dataset.index;
                gsap.fromTo(`.maskPhoto${i}`,
                {
                    transformOrigin: this.images[i].origin,
                    transform: `translate(${this.images[i].xFrom}, 3.5%) scale(0.4)`
                }, 
                {
                    transform: `translate(${this.images[i].xTo}, 3.5%) scale(1)`,
                    ease: "power1.out",
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: container,
                        // markers: true,
                        start: "top 75%",
                        end: "bottom 70%",
                    },
                });
            })
        },
    }
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

.house {
    z-index: 1;
    width: 100%;
    background: $colorBeige;
    display: flex;
    flex-direction: column;
    align-items: center;
    &Container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow: hidden;
        border-top: solid 10px $colorWhite;
        &Svg {
            &ImageFront {
                fill: rgba($color: black, $alpha: 0.90);
            }
            &Rect {
                stroke: $colorGreen;
                stroke-width: 5px;
            }
        }
    }
}


</style>