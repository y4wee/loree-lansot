<template>
    <div class="header">
        <img
        class="headerImage"
        :src="chambre[chambreIndex].image" 
        :alt="'photo de la chambre qui a pour nom ' + chambre[chambreIndex].name"
        >
        <div class="headerLogo">
            <img :src="chambre[chambreIndex].logo" :alt="'titre de la chambre ' + chambre[chambreIndex].name">
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
                    image: require("~/assets/atelier.png"),
                    logo: require("~/assets/atelierlogo1.svg"),
                },
                {
                    name: "mansarde",
                    image: require("~/assets/mansarde.png"),
                    logo: require("~/assets/mansardelogo1.svg"),
                },
                {
                    name: "romance",
                    image: require("~/assets/romance.png"),
                    logo: require("~/assets/romancelogo1.svg"),
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

.simpleParallax {
    height: 100%;
    width: 100%;
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
        & img {
            width: 90vw;
            max-width: 600px;
        }
    }
}

</style>