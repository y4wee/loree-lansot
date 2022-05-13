<template>
    <div class="header">
        <img
        class="headerImage"
        :src="chambre[chambreIndex].image" 
        :alt="'photo de la chambre qui a pour nom ' + chambre[chambreIndex].name"
        >
        <div class="headerLogo">
            <div class="headerLogoBorder">
                <div class="headerLogoSegment headerLogoBefore"></div>
                <div class="headerLogoSegment headerLogoAfter"></div>
            </div>
            <div class="headerLogoText"> {{ chambre[chambreIndex].text }} </div>
        </div>
        <div class="headerArrow">
            <div class="headerArrowSegment headerArrowLeft"></div>
            <div class="headerArrowSegment headerArrowRight"></div>
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

.header {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    user-select: none;
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
            font-family: "Ballet Harmony", sans-serif;
            font-size: 4rem;
            color: $colorWhite;
        }
        &Border {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 65%;
            width: 100%;
            transform-origin: center;
            animation: scaleBorderY 1.2s both ease-in-out alternate infinite;
        }
        &Segment {
            border: solid 1px $colorWhite;
            height: 35%;
            max-height: 200px;
            width: 0%;
        }
        &Before {
            transform-origin: bottom;
            animation: scaleSegmentY 0.4s 0.35s both ease-in-out;
        }
        &After {
            transform-origin: top;
            animation: scaleSegmentY 0.4s 0.35s both ease-in-out;
        }
    }
    &Arrow {
        z-index: 5;
        position: absolute;
        bottom: 25px;
        border-right: solid 3px $colorWhite;
        border-bottom: solid 3px $colorYellow;
        padding: 30px;
        transform-origin: center;
        transform: rotateZ(45deg);
    }
}

@keyframes scaleSegmentY {
    from {
        transform: scaleY(0);
    }
    to {
        transform: scaleY(1);
    }
}
@keyframes scaleBorderY {
    from {
        transform: scaleY(0.85);
    }
    to {
        transform: scaleY(1);
    }
}
@keyframes scaleSegmentX {
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
}
@keyframes scaleBorderX {
    from {
        transform: scaleX(0.85);
    }
    to {
        transform: scaleX(1);
    }
}

@media all and (min-width: 800px) {
    .header {
        &Logo {
            &Text {
                font-size: 5rem;
            }
            &Border {
                flex-direction: row;
                height: 100%;
                width: 95%;
                max-width: 1200px;
                animation: scaleBorderX 1.2s both ease-in-out alternate infinite;
            }
            &Segment {
                height: 0%;
                width: 30%;
                max-width: 350px;
            }
            &Before {
                transform-origin: right;
                animation: scaleSegmentX 0.4s 0.35s both ease-in-out;
            }
            &After {
                transform-origin: left;
                animation: scaleSegmentX 0.4s 0.35s both ease-in-out;
            }
        }
        &Arrow {
            padding: 40px;
        }
    }
}
@media all and (min-width: 1025px) {
    .headerLogoText {
        font-size: 5.5rem;
    }
    .headerArrow {
        border-bottom: solid 3px $colorWhite;
        padding: 45px;
    }
}

</style>