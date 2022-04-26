<template>
    <div class="navLinks">
        <!-- <div v-for="(link, index) in links" :key="index" 
        :class="'navLinksText ' + link.name" 
        :data-hash="link.hash" 
        @click="linkScrollTo"
        > {{ link.name }} </div> -->

        <div class="navLinksMain" v-if="routerName === '/index'">
            <div v-for="(link, index) in linksIndex" :key="index" 
            :class="'navLinksText ' + link.name" 
            :data-hash="link.hash" 
            @click="linkScrollTo"
            > {{ link.name }} </div>
        </div>

        <div class="navLinksMain" v-else>
            <div v-for="(link, index) in linksChambre" :key="index" 
            :class="'navLinksText ' + link.name" 
            :data-hash="link.hash" 
            @click="linkTo"
            > {{ link.name }} </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default {
    name: "NavLinks",
    props: ["navOn"],
    mounted() {
        gsap.registerPlugin(ScrollToPlugin);
        console.log(this.routerName)
    },
    computed: {
        routerName: function() {
            return this.$route.path
        }
    },
    methods: {
        animationLinks: function() {
            gsap.killTweensOf(".navLinksText");
            document.querySelectorAll(".navLinksText").forEach((link, index) => {
                let delay = 0.5 + (0.12 * index);
                gsap.fromTo(link, {
                    opacity: 0,
                    yPercent: 20
                }, {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.2,
                    delay: delay,
                    ease: "power1.in"
                })
            })
        },
        linkScrollTo: function(e) {
            gsap.to(window, {scrollTo: e.target.dataset.hash, duration: 1, ease: "power3.inOut"})
            this.$emit('event');
        },
        linkTo: function(e) {
            console.log(e.target.dataset.hash)
            console.log(this.$route.params.chambre)
            // console.log(e.target.classList[1])
            // this.$route.push(`/${hash}`)
            if(e.target.classList[1] === "Contact") {
                gsap.to(window, {scrollTo: e.target.dataset.hash, duration: 1, ease: "power3.inOut"})
                this.$emit('event');
            } else if (e.target.dataset.hash === this.routerName) {
                gsap.to(window, {scrollTo: 0, duration: 1, ease: "power3.inOut"})
                this.$emit('event');
            } else {
                this.$router.push(e.target.dataset.hash)
            }
        }
    },
    data() {
        return {
            linksIndex: [
                {
                    name: "Accueil",
                    hash: "#indexAccueil"
                },
                {
                    name: "Chambres",
                    hash: "#indexChambre"
                },
                {
                    name: "Service",
                    hash: "#indexService"
                },
                {
                    name: "Contact",
                    hash: "#indexFooter"
                },
            ],
            linksChambre: [
                {
                    name: "Atelier",
                    hash: "/atelier"
                },
                {
                    name: "Mansarde",
                    hash: "/mansarde"
                },
                {
                    name: "Romance",
                    hash: "/romance"
                },
                {
                    name: "Contact",
                    hash: "#indexFooter"
                },
            ]
        }
    },
    watch: {
            navOn(newState) {
                if(newState === true) {
                    this.animationLinks();
                }
            },
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

.navLinks {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 70%;
    top: 25vh;
    &Main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &Text {
        margin: 2.2vh 0;
        color: $colorYellow;
        font-family: 'Paytone One', sans-serif;
        font-size: 1.4rem;
        cursor: pointer;
        opacity: 0;
        will-change: transform;
    }
}

</style>