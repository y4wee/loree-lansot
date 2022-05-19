<template>
    <div class="carte">
        <div class="carteText">
            {{ carte.text }}
        </div>
        <lottie-player v-if="carte.lottie"
            class="carteLottie"
            :src="carte.lottie"
            background="transparent"
            style="width: 180px; height: 180px;"
            autoplay
            loop>
        </lottie-player>
        <div class="carteBorder carteBorderTop"></div>
        <div class="carteBorder carteBorderBottom"></div>
    </div>
</template>

<script>

export default {
    name: "Carte",
    props: [ "carte" ],
    mounted() {
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

.carte {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 60px);
    max-width: 700px;
    padding: 20px;
    background: $colorBeige;
    box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.7);
    text-align: center;
    user-select: none;
    &Text {
        color: $colorBlue;
        margin: 20px 0;
    }
    &Border {
        position: absolute;
        width: 50%;
        height: 50%;
        &Top {
            top: 10px;
            left: 10px;
            border-top: solid 2px $colorBlue;
            border-left: solid 2px $colorBlue;
        }
        &Bottom {
            bottom: 10px;
            right: 10px;
            border-bottom: solid 2px $colorBlue;
            border-right: solid 2px $colorBlue;
        }
    }
}

</style>