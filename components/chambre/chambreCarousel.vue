<template>
    <div class="carousel">
        <div class="carouselImages">
            <img class="carouselImagesEach" v-for="(image, index) in chambre[chambreIndex].images"
                :key="index" 
                :src="image" 
                :alt=" 'image du carousel ' + chambre[chambreIndex].name">
            <div class="carouselButton carouselButtonLeft" @click="changeSlide(-1)">
                <font-awesome-icon :icon="['fa', 'angle-left']" />
            </div>
            <div class="carouselButton carouselButtonRight" @click="changeSlide(1)">
                <font-awesome-icon :icon="['fa', 'angle-right']" />
            </div>
        </div>

        <div class="carouselDots">
            <div class="carouselDotsEach" v-for="(image, index) in chambre[chambreIndex].images" 
            :key="index"
            @click="selectSlide(index)"
            ></div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "ChambreCarousel",
    props: ["chambreIndex"],
    data() {
        return {
            slideIndex: 0,
            chambre: [
                {
                    name: "atelier",
                    images: 
                        [
                            require("~/assets/atelier2.png"),
                            require("~/assets/atelier3.png"),
                            require("~/assets/atelier4.png"),
                        ],
                },
                {
                    name: "mansarde",
                    images:
                        [
                            require("~/assets/mansarde2.png"),
                            require("~/assets/mansarde3.png"),
                        ],
                },
                {
                    name: "romance",
                    images: 
                        [
                            require("~/assets/romance2.png"),
                            require("~/assets/romance3.png"),
                            require("~/assets/romance4.png"),
                        ],
                },
            ],
        }
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.showSlide(this.slideIndex);
    },
    methods: {
        changeSlide: function(n) {
            this.slideIndex += n
            this.showSlide(this.slideIndex)
        },
        selectSlide: function(n) {
            this.slideIndex = n
            this.showSlide(this.slideIndex)
        },
        showSlide: function(n) {
            let slides = document.querySelectorAll(".carouselImagesEach");
            let dots = document.querySelectorAll(".carouselDotsEach");

            if (n > slides.length - 1) {this.slideIndex = 0}
            if (n < 0) {this.slideIndex = slides.length - 1}
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" carouselDotsActive", "");
            }
            slides[this.slideIndex].style.display = "block";
            dots[this.slideIndex].className += " carouselDotsActive";
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

.carousel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    // flex-direction: column;
    width: 100%;
    // height: 100vh;
    background: $colorBeige;
    &Images {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 80vh;
        background: $colorBlue;
        overflow: hidden;
        & img {
            display: none;
            position: absolute;
            object-position: center;
            object-fit: cover;
            height: 100%;
            width: 100%;
            animation: fadeImage 1.3s ease-in-out both;
        }
    }
    &Button {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 60px;
        color: $colorGreen;
        font-size: 2rem;
        backdrop-filter: blur(5px) saturate(130%) brightness(70%);
        cursor: pointer;
        &Left {
            left: 0;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        &Right {
            right: 0;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }
    }
    &Dots {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10vh;
        backdrop-filter: blur(5px) saturate(130%) brightness(70%);
        &Each {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: $colorWhite;
            margin: 0 9px;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            transform: scale(1);
        }
        &Active {
            transform: scale(1.3);
            background: $colorGreen;
        }
    }
}
@keyframes fadeImage {
    from {
        opacity: 0.2;
        transform: scale(1.05);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

</style>