<template>
    <div>
        <OverlayTransition />
        <Nav />
        <Nuxt />
        <Footer id="indexFooter"/>
    </div>
</template>

<script>
import Nav from "~/components/nav/nav.vue";
import Footer from "~/components/footer/footer.vue";
import OverlayTransition from "~/components/overlayTransition.vue";
export default {
    name: "IndexPage",
    components: { Nav, Footer, OverlayTransition }
}
</script>

<style lang="scss">

$colorBrown: #291315;
$colorGreen: #8FBF21; //good
$colorWhite: #f7f6f8; //good
$colorBlue: #131b1e;
$colorGray: #d1cfcf;
$colorBeige: #c0b193;
$colorOrange: #e25827;
$colorYellow: #c4721c;
html {
    scrollbar-width: none;
}
body {
    margin: 0;
//   height: 100vh;
//   width: 100vw;
//   overflow: none;
    font-family: 'Noto Serif JP', serif;
    word-spacing: 4px;
    overflow-x: hidden;
    -ms-overflow-style: none;
    // scrollbar-width: none;
    background: $colorWhite;
}
body::-webkit-scrollbar {
  display: none;
}
@font-face {
    font-family: "Ballet Harmony";
    src: local("Ballet Harmony"),
     url(~assets/BalletHarmony.ttf) format("truetype");
}

</style>