<template>
    <div class="footer">

        <Envelope />
        
    </div>
</template>

<script>
import { gsap } from 'gsap';
import Envelope from './envelope.vue';

export default {
    name: "Footer",
    mounted() {
    },
    methods: {},
    components: { Envelope }
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

.footer {
    position: relative;
    display: flex;
    background: $colorBlue;
}

</style>