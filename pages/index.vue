<template>
  <div class="main">
    <SectionAccueil />
    <SectionPresentation />
    <SectionChambre />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import SectionAccueil from '../components/index/sectionAccueil.vue';
import SectionPresentation from '~/components/index/sectionPresentation.vue';
import SectionChambre from '~/components/index/sectionChambre.vue';

export default {
    name: "IndexPage",
    mounted() {
    },
    components: { SectionAccueil, SectionPresentation, SectionChambre }
}
</script>

<style scoped lang="scss">
$colorGreen: #8FBF21; //good
$colorWhite: #f7f6f8; //good
$colorBlue: #0d1317;
$colorGray: #d1cfcf;
$colorBeige: #c0b193;
$colorOrange: #e25827;
$colorYellow: #c9853c;

.main {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
}


</style>