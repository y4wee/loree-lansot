<template>
    <div class="house">
        <div class="houseContainer" v-for="(image, index) in images" :key="index" :data-index="index">
            <img :src="image.url" alt="photo maison" class="houseContainerImage">
            <svg class="houseContainerSvg" width="100%" height="100%" viewBox="0 0 1000 1000"  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">

                <mask :id="'myMask' + index">
                    <rect class="houseContainerSvgBack" x="0" y="0" width="100%" height="100%" fill="white" />
                    <rect :class="image.class + ' houseContainerSvgMask maskPhoto' + index" :x="image.xTo" y="3.5%" :width="image.width" height="95%" fill="black" />
                </mask>

                <rect class="houseContainerSvgImageFront" x="0" y="0" width="100%" height="100%" :mask="`url(#myMask${index})`" />
                <rect 
                :class="image.class + ' houseContainerSvgMask houseContainerSvgRect maskPhoto' + index" 
                :x="image.xTo" y="3.5%" :width="image.width" height="95%" fill="none" />

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
                { url: require("~/assets/house/house1.jpg"), class: "maskLeft", xTo: "18%", width: "80%", height: "95%" },
                { url: require("~/assets/house/house2.jpg"), class: "maskRight", xTo: "2%", width: "80%", height: "95%" },
                { url: require("~/assets/house/house3.jpg"), class: "maskLeft", xTo: "18%", width: "80%", height: "95%" },
                { url: require("~/assets/house/house4.jpg"), class: "maskRight", xTo: "2%", width: "80%", height: "95%" },
                { url: require("~/assets/house/house5.jpg"), class: "maskLeft", xTo: "18%", width: "80%", height: "95%" }
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
                            transform: "translateX(0)",
                            opacity: 1,
                            ease: "power1.out",
                            duration: 0.25,
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
$colorYellow: #c4721c;

.house {
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &Container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 60vh;
        overflow: hidden;
        border-top: solid 10px $colorBlue;
        &Image {
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        &Svg {
            position: absolute;
            z-index: 2;
            &ImageFront {
                fill: rgba($color: black, $alpha: 0.85);
            }
            &Mask {
                opacity: 0;
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
    transform: translateX(-10px);
}
.maskRight {
    transform-origin: top right;
    transform: translateX(10px);
}
@media all and (min-width: 1025px){
    .house {
        width: 40%;
        &Container {
            height: 70vh;
            border-top: none;
            border-bottom: solid 10px $colorWhite;
        }
    }
}

</style>