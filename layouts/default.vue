<template>
    <div>
        <Nav />
        <Nuxt />
        <Footer id="indexFooter"/>
    </div>
</template>

<script>
import Nav from "~/components/nav/nav.vue";
import Footer from "~/components/footer/footer.vue";
export default {
    name: "IndexPage",
    components: { Nav, Footer }
}
</script>

<style lang="scss">
body {
    margin: 0;
//   height: 100vh;
//   width: 100vw;
//   overflow: none;
    font-family: 'Noto Serif JP', serif;
    word-spacing: 4px;
}

</style>