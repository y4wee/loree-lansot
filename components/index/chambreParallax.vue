<template>
    <div class="chambreParallax">
        <div class="chambreParallaxContainer" 
        v-for="chambre in chambres" 
        :key="chambre.image"
        >
            <img :src="chambre.image" alt="photo maison l'orée de lansot" class="chambreParallaxContainerImage">
            <div class="chambreDetail">
                <h2> {{ chambre.name }} </h2>
                <div class="chambreDetailPersonnes">{{ chambre.personnes }}</div>
                <div class="chambreDetailPrix">{{ chambre.prix }}</div>
                <div :data-hash="'/' + chambre.id" class="chambreDetailLink" @click="linkTo">
                    Plus de détails..
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: "ChambreParallax",
    props: ["chambres"],
    mounted() {
        this.parallaxScrolling();
    },
    methods: {
        parallaxScrolling: function() {
            document.querySelectorAll(".chambreParallaxContainerImage").forEach(image => {
                new simpleParallax(image, {
                    customWrapper: ".chambreParallaxContainer",
                    orientation: "down",
                    delay: .2,
                    transition: 'cubic-bezier(0,0,0,1)'
                });
            })
        },
        linkTo: function(e) {
            let tl = gsap.timeline();

            tl.delay(0.3)

            tl.to("body", { overflow: "hidden", duration: 0 });
            tl.to(".overlayTransition", { opacity: 1, duration: 0 })
            tl.to(".overlayTransition", { yPercent: 0, duration: 0.3, ease: "power1.out" })
            tl.then(() => {
                this.$router.push(e.target.dataset.hash);
            })
        }
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
.chambreParallax {
    width: 100%;
    &Container {
        z-index: 1;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        user-select: none;
        &Image {
            position: absolute;
            object-position: center;
            object-fit: cover;
            height: 80%;
            width: 100%;
        }
    }
}
.chambreDetail {
    position: absolute;
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
    width: 90%;
    max-width: 500px;
    box-shadow: inset 0 0 80px 100px $colorBlue;
    border-radius: 30px;
    font-size: 1.1rem;
    color: $colorWhite;
    & h2 {
        font-family: 'Ballet Harmony', sans-serif;
        font-size: 4rem;
        text-align: center;
        color: $colorYellow;
        margin: 0 0 20px 0;
    }
    &Link {
        margin-top: 15px;
        color: $colorWhite;
        border-bottom: solid 2px $colorYellow;
        cursor: pointer;
    }
}
@media all and (min-width: 1025px) {
    .chambreParallax {
        width: 60%;
        border-right: solid 10px $colorBlue;
        &Container {
            z-index: 1;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
            user-select: none;
            &Image {
                position: absolute;
                object-position: center;
                object-fit: cover;
                height: 80%;
                width: 100%;
            }
        }
    }
    .chambreDetail {
        position: absolute;
        top: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 30vh;
        width: 90%;
        max-width: 500px;
        box-shadow: inset 0 0 80px 100px $colorBlue;
        border-radius: 30px;
        font-size: 1.1rem;
        color: $colorWhite;
        & h2 {
            font-family: 'Ballet Harmony', sans-serif;
            font-size: 4rem;
            text-align: center;
            color: $colorYellow;
            margin: 0 0 20px 0;
        }
        &Link {
            margin-top: 15px;
            color: $colorWhite;
            border-bottom: solid 2px $colorYellow;
            cursor: pointer;
        }
    }
}

</style>