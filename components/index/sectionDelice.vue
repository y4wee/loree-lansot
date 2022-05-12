<template>
    <div class="delice">
        <h1 class="deliceTitle">Nos Delices</h1>
        <section class="deliceDejeuner">
            <h2>Nos petits <br /> dejeuners</h2>
        </section>

        <section class="deliceRepas">
            <h2>Nos<br /> Plateaux repas</h2>
        </section>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: "Delice",
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

.delice {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-x: hidden;
    background: $colorBeige;
    color: $colorBlue;
    border-top: solid 10px $colorBlue;
    &Title {
        font-family: "Ballet Harmony", sans-serif;
        font-size: 5rem;
        margin: 40px 15px;
    }
}

</style>