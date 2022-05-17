<template>
    <div class="mosaique">
        <div :class="'mosaiqueContainer ' + image.class" v-for="(image, index) in images" :key="index" :data-index="index">
            <img :src="image.url" :alt="image.alt" class="mosaiqueContainerImage">
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "Mosaique",
    data() {
        return {
            images: [
                { url: require("~/assets/dejeuner/dejeuner.jpg"), class: "imageWidth1", alt: "18%", width: "80%", height: "95%" },
                { url: require("~/assets/dejeuner/petitdej.jpg"), class: "imageWidth2", alt: "2%", width: "80%", height: "95%" },
                { url: require("~/assets/dejeuner/gateau.jpg"), class: "imageWidth3", alt: "18%", width: "80%", height: "95%" },
                { url: require("~/assets/dejeuner/choco.jpg"), class: "imageWidth3", alt: "2%", width: "80%", height: "95%" },
                { url: require("~/assets/dejeuner/brioche.webp"), class: "imageWidth1", alt: "18%", width: "80%", height: "95%" },
                { url: require("~/assets/dejeuner/napolitain.webp"), class: "imageWidth2", alt: "18%", width: "80%", height: "95%" }
            ],
        };
    },
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
$colorYellow: #c4721c;

.mosaique {
    display: flex;
    flex-flow: wrap;
    width: 100%;
    justify-content: center;
    &Container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
        overflow: hidden;
        margin: 5px;
        box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.7);
        transition: transform 0.2s ease-in-out;
        &.imageWidth1 {
            width: calc(33% - 10px);
        }
        &.imageWidth2 {
            width: calc(66% - 10px);
        }
        &.imageWidth3 {
            width: calc(99% - 10px);
        }
        &:hover {
            transform: scale(1.01);
        }
        &Image {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
}
@media all and (min-width: 1025px) {
    .mosaique {
        width: 75%;
        align-self: flex-end;
    }
}

</style>