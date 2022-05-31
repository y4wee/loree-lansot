<template>
  <div class="main">
    <SectionAccueil id="indexAccueil" />
    <SectionPresentation />
    <SectionChambre id="indexChambre" />
    <SectionDelice id="indexDelice" />
  </div>
</template>

<script>
import SectionAccueil from '../components/index/sectionAccueil.vue';
import SectionPresentation from '~/components/index/sectionPresentation.vue';
import SectionChambre from '~/components/index/sectionChambre.vue';
import SectionDelice from '~/components/index/sectionDelice.vue';

export default {
    name: "IndexPage",
    head() {
      return {
        title: "L'Orée de Lansot",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    },
    mounted() {
    },
    components: { SectionAccueil, SectionPresentation, SectionChambre, SectionDelice }
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

.main {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
}


</style>