<template>
    <div class="header">
        <img
        class="headerImage"
        :src="chambre[chambreIndex].image" 
        :alt="'photo de la chambre qui a pour nom ' + chambre[chambreIndex].name"
        >
        <div class="headerLogo">
            <div class="headerLogoText">

                {{ chambre[chambreIndex].text }}
                
                <lottie-player
                    class="headerLogoLottie headerLogoLottieTop"
                    src="https://assets6.lottiefiles.com/packages/lf20_bbne9r3v.json"
                    background="transparent"
                    autoplay
                    loop>
                </lottie-player>
                <lottie-player
                    class="headerLogoLottie headerLogoLottieDown"
                    src="https://assets6.lottiefiles.com/packages/lf20_bbne9r3v.json"
                    background="transparent"
                    autoplay
                    loop>
                </lottie-player>
            </div>
        </div>
        <div class="headerOverlay"></div>
    </div>
</template>

<script>

export default {
    name: "ChambreHeader",
    props: ["chambreIndex"],
    data() {
        return {
            chambre: [
                {
                    name: "atelier",
                    image: require("~/assets/atelier5.jpg"),
                    text: "Latelier",
                },
                {
                    name: "mansarde",
                    image: require("~/assets/mansarde.jpg"),
                    text: "Mansarde",
                },
                {
                    name: "romance",
                    image: require("~/assets/romance.webp"),
                    text: "Romance",
                },
            ],
        }
    },
    mounted() {
        this.parallaxScroll();
    },
    methods: {
        parallaxScroll: function() {
            let image = document.querySelector(".headerImage")
            new simpleParallax(image, {
                customWrapper: ".header",
                orientation: "down",
                delay: .2,
	            transition: 'cubic-bezier(0,0,0,1)'
            });
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


@keyframes fadeLottie {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    
}
.header {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    user-select: none;
    overflow: hidden;
    &Overlay {
        z-index: 2;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba($color: black, $alpha: 0.45);
    }
    &Image {
        position: absolute;
        object-position: center;
        object-fit: cover;
        height: 80%;
        width: 100%;
    }
    &Logo {
        z-index: 5;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        &Text {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            font-family: "Ballet Harmony", sans-serif;
            font-size: 4rem;
            color: $colorWhite;
            &::before {
                content: "";
                position: absolute;
                top: -5px;
                right: -5px;
                width: 10px;
                height: 10px;
                background: $colorGreen;
                border-radius: 50%;
                border: solid 2px $colorWhite;
            }
            &::after {
                content: "";
                position: absolute;
                bottom: -10px;
                left: -5px;
                width: 10px;
                height: 10px;
                background: $colorGreen;
                border-radius: 50%;
                border: solid 2px $colorWhite;
            }
        }
        &Lottie {
            position: absolute;
            width: 180px;
            height: 180px;
            animation: fadeLottie 1s 1s both ease-in-out;
            &Top {
                top: -160px;
                right: -40px;
                transform: rotateZ(-50deg);
            }
            &Down {
                bottom: -160px;
                left: -45px;
                transform: rotateZ(130deg);
            }
        }
    }
}

@media all and (min-width: 800px) {
    .header {
        &Logo {
            &Text {
                font-size: 4.5rem;
            }
        }
    }
}
@media all and (min-width: 1025px) {
    .headerLogoText {
        font-size: 5.5rem;
    }
    .headerLogoLottie {
            position: absolute;
            width: 220px;
            height: 220px;
            &Top {
                top: -195px;
                right: -50px;
                transform: rotateZ(-50deg);
            }
            &Down {
                bottom: -195px;
                left: -55px;
                transform: rotateZ(130deg);
            }
        }
}

</style>