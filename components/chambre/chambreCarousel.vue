<template>
    <div class="carousel">
        <div class="carouselContainer">
            <div class="carouselImages">
                <img class="carouselImagesEach" v-for="(image, index) in chambre[chambreIndex].images"
                :key="index"
                :src="image"
                :alt=" 'image du carousel ' + chambre[chambreIndex].name"
                >
            </div>
            <div class="carouselButton carouselButtonLeft" @click="changeSlide(-1)">
                <font-awesome-icon :icon="['fa', 'angle-left']" />
            </div>
            <div class="carouselButton carouselButtonRight" @click="changeSlide(1)">
                <font-awesome-icon :icon="['fa', 'angle-right']" />
            </div>

            <div class="carouselDots">
                <div class="carouselDotsEach" v-for="(image, index) in chambre[chambreIndex].images"
                :key="index"
                @click="selectSlide(index)"
                ></div>
            </div>
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
                            require("~/assets/atelier/atelier1.jpg"),
                            require("~/assets/atelier/atelier2.jpg"),
                            require("~/assets/atelier/atelier3.jpg"),
                            require("~/assets/atelier/atelier4.jpg"),
                            require("~/assets/atelier/atelier5.jpg"),
                            require("~/assets/atelier/atelier6.jpg"),
                            require("~/assets/atelier/atelier7.jpg"),
                            require("~/assets/atelier/atelier8.jpg"),
                        ],
                },
                {
                    name: "mansarde",
                    images:
                        [
                            require("~/assets/mansarde/mansarde1.jpg"),
                            require("~/assets/mansarde/mansarde2.jpg"),
                            require("~/assets/mansarde/mansarde3.jpg"),
                            require("~/assets/mansarde/mansarde4.jpg"),
                            require("~/assets/mansarde/mansarde5.jpg"),
                        ],
                },
                {
                    name: "romance",
                    images: 
                        [
                            require("~/assets/romance/romance1.jpg"),
                            require("~/assets/romance/romance2.jpg"),
                            require("~/assets/romance/romance3.jpg"),
                            require("~/assets/romance/romance4.jpg"),
                            require("~/assets/romance/romance5.jpg"),
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
$colorYellow: #c4721c;

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

.carousel {
    z-index: 5;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    background: $colorBlue;
    &Container {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 80vh;
        background: $colorBlue;
        overflow: hidden;
    }
    &Images {
        position: relative;
        width: 100%;
        height: 100%;
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
        z-index: 6;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 60px;
        color: $colorYellow;
        font-size: 2rem;
        cursor: pointer;
        &Left {
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &Right {
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    &Dots {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        background: rgba($color: #000000, $alpha: 0.85);
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
@media all and (min-width: 1025px) {
    .carousel {
        align-self: flex-end;
        margin: 50px 10px 50px 0;
        background: $colorWhite;
        &Container {
            height: calc(100vh - 100px);
            box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.7);
        }
    }
}
</style>