<template>
    <div>
        <Nav />
        <Nuxt/>
        <Footer/>
    </div>
</template>

<script>
import Nav from "~/components/nav/nav.vue";
export default {
    name: "IndexPage",
    components: { Nav }
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