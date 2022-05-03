<template>
    <div class="service">
        <h1 class="serviceTitle">Nos <br/> Services</h1>
        <section class="serviceDejeuner">
            <h2>Nos petits <br /> dejeuners</h2>
        </section>

        <section class="serviceRepas">
            <h2>Nos<br /> Plateaux repas</h2>
        </section>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: "Service",
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
$colorYellow: #c9853c;

.service {
    display: flex;
    flex-direction: column;
    // align-items: center;
    width: 100%;
    overflow-x: hidden;
}

</style>