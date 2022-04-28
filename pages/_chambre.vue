<template>
    <div class="chambre">
        <div class="buttonBack" @click="linkTo">
            <font-awesome-icon :icon="['fa', 'angle-left']" />
        </div>
        <ChambreHeader 
        :chambreIndex="chambreIndex"
        />
        <ChambreInfo 
        :chambreIndex="chambreIndex"
        />
        <ChambreCarousel 
        :chambreIndex="chambreIndex"
        />
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChambreHeader from '~/components/chambre/chambreHeader.vue';
import ChambreInfo from '~/components/chambre/chambreInfo.vue';
import ChambreCarousel from '~/components/chambre/chambreCarousel.vue';

export default {
    name: "Chambre",
    data() {
        return {
            showButton: true,
            chambre: ["atelier", "mansarde", "romance"],
        };
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.runTimeout();
    },
    computed: {
        chambreIndex: function() {
            return this.chambre.indexOf(this.$route.params.chambre)
        }
    },
    methods: {
        // timeout pour hide or show le buttonBack while scrolling
        runTimeout: function() {
            let myTimeout;
            window.addEventListener("scroll", () => {
                if(this.$route.path !== "/") {
                    if(this.showButton) {
                        this.showButton = !this.showButton;
                        this.hideButtonBack();
                    }
                    if(myTimeout != undefined) {
                        clearTimeout(myTimeout);
                        myTimeout = setTimeout(() => {
                            this.showButtonBack();
                        }, 400)
                    } else {
                        myTimeout = setTimeout(() => {
                            this.showButtonBack();
                        }, 400)
                    }  
                }
            }) 
        },
        hideButtonBack: function() {
            gsap.to(".buttonBack", {xPercent: -300, duration: 0.25, ease: "back.in"})
        },
        showButtonBack: function() {
            this.showButton = !this.showButton;
            gsap.to(".buttonBack", {xPercent: 0, duration: 0.25, ease: "back.out"})
        },
        linkTo: function(e) {
            let tl = gsap.timeline();

            tl.delay(0.3)

            tl.to("body", { overflow: "hidden", duration: 0 });
            tl.to(".overlayTransition", { opacity: 1, duration: 0 })
            tl.to(".overlayTransition", { yPercent: 0, duration: 0.3, ease: "power1.out" })
            tl.then(() => {
                this.$router.push("/");
            })
            
        }
    },
    components: { ChambreHeader, ChambreInfo, ChambreCarousel }
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

.chambre {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $colorBlue;
    border-bottom: solid 10px $colorWhite;
}
.buttonBack {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    margin: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border: solid 2px $colorWhite;
    border-radius: 50%;
    font-size: 1.5rem;
    color: $colorWhite;
    cursor: pointer;
}
</style>