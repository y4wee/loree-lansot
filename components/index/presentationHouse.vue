<template>
    <div class="house">
        <div class="houseContainer" v-for="(image, index) in images" :key="index" :data-index="index">
            <svg class="houseContainerSvg" width="100%" height="100%" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <mask :id="'myMask' + index">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <rect :class="image.class + ' houseContainerSvgMask maskPhoto' + index" x="0" y="3.5%" :width="image.width" height="95%" fill="black" />
                </mask>

                <image class="houseContainerSvgImageBack" :xlink:href="image.url" x="0" y="0" width="100%" />
                <rect class="houseContainerSvgImageFront" x="0" y="0" width="100%" height="100%" :mask="`url(#myMask${index})`" />

                <rect 
                :class="image.class + ' houseContainerSvgMask houseContainerSvgRect maskPhoto' + index" 
                x="0" y="3.5%" :width="image.width" height="95%" fill="none" />
            </svg>
        </div>
    
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: "PresentationHouse",
    data() {
        return {
            images: [
                { url: require("~/assets/house1.png"), class: "maskLeft", origin: "top left", xFrom: "12%", xTo: "18%", width: "80%", height: "95%" },
                { url: require("~/assets/house4.png"), class: "maskRight", origin: "top right", xFrom: "8%", xTo: "2%", width: "80%", height: "95%" },
                { url: require("~/assets/house2.png"), class: "maskLeft", origin: "top left", xFrom: "12%", xTo: "18%", width: "80%", height: "95%" },
                { url: require("~/assets/house3.png"), class: "maskRight", origin: "top right", xFrom: "8%", xTo: "2%", width: "80%", height: "95%" },
                { url: require("~/assets/house5.png"), class: "maskLeft", origin: "top left", xFrom: "12%", xTo: "18%", width: "80%", height: "95%" }
            ],
        };
    },
    mounted() {
        this.animationImages();
    },
    methods: {
        animationImages: function() {
            document.querySelectorAll(".houseContainer").forEach(container => {
                let i = container.dataset.index;
                let callback = (entries) => {
                    if(entries[0].isIntersecting) {
                        gsap.to(`.maskPhoto${i}`, {
                            transform: `translateX(${this.images[i].xTo})`,
                            opacity: 1,
                            ease: "power1.out",
                            duration: 0.3,
                            onComplete: observer.disconnect(),
                        });
                    }
                }
                const observer = new IntersectionObserver(callback, {
                    threshold: 0.8,
                });
                observer.observe(container);
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
        border-top: solid 10px $colorBlue;
        &Svg {
            &ImageFront {
                fill: rgba($color: black, $alpha: 0.85);
            }
            &Mask {
                opacity: 0;
                will-change: transform;
            }
            &Rect {
                stroke: $colorWhite;
                stroke-width: 5px;
            }
        }
    }
}
.maskLeft {
    transform-origin: top left;
    transform: translateX(12%);
}
.maskRight {
    transform-origin: top right;
    transform: translateX(8%);
}


</style>