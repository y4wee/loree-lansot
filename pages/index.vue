<template>
  <div class="main">
    <SectionAccueil id="indexAccueil" />
    <SectionPresentation />
    <SectionChambre id="indexChambre" />
    <SectionService id="indexService" />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import SectionAccueil from '../components/index/sectionAccueil.vue';
import SectionPresentation from '~/components/index/sectionPresentation.vue';
import SectionChambre from '~/components/index/sectionChambre.vue';
import SectionService from '~/components/index/sectionService.vue';

export default {
    name: "IndexPage",
    mounted() {
    },
    components: { SectionAccueil, SectionPresentation, SectionChambre, SectionService }
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
}


</style>