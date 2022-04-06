<template>
  <div class="main">
    <SectionAccueil />
    <SectionPresentation />
    <SectionChambre />
    <SectionDejeuner />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import SectionAccueil from '../components/index/sectionAccueil.vue';
import SectionPresentation from '~/components/index/sectionPresentation.vue';
import SectionChambre from '~/components/index/sectionChambre.vue';
import SectionDejeuner from '~/components/index/sectionDejeuner.vue';

export default {
    name: "IndexPage",
    mounted() {
    },
    components: { SectionAccueil, SectionPresentation, SectionChambre, SectionDejeuner }
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

.main {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  // z-index: 1;
}


</style>