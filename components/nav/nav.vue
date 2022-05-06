<template>
    <div class="nav">
        <div class="navOverlay"></div>
        <div class="navButton" @click="navAnimation()">
            <div class="navButtonBarre top"></div>
            <div class="navButtonBarre mid"></div>
            <div class="navButtonBarre bottom"></div>
        </div>

        <div class="navMain">
            <svg class="navMainSvg" width="100%" height="100%" viewBox="0 0 243 629" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path data-duration="0.8" data-delay="0" class="navMainSvgPath p1" d="M155.546 50.436C155.232 41.6498 157.899 21.5359 171.078 11.3691C184.258 1.20225 201.987 -0.398086 209.204 0.0725995L221.913 1.01397C223.168 3.3674 225.283 10.061 225.678 17.9586C226.149 27.3724 227.09 35.8447 220.03 50.436C214.382 62.109 205.125 70.6754 201.202 73.4995C194.142 79.1478 175.409 91.1032 156.958 93.739C138.507 96.3749 124.794 93.8959 120.244 92.327C114.282 90.9149 99.7226 84.796 89.1792 71.6168C78.6358 58.4376 76 43.8464 76 38.1981C82.5896 36.6292 99.9108 34.4326 116.479 38.1981C133.047 41.9636 143.308 51.2204 146.132 55.6135C149.427 59.379 155.546 69.9223 155.546 85.7374C155.546 101.552 155.546 355.944 155.546 379.792"  stroke-linecap="round"/>
                <path data-duration="0.8" data-delay="0" class="navMainSvgPath p2" d="M155.546 380C154.531 394 141.1 426.6 95.5 445C38.5 468 36 476.5 30.5 495C25 513.5 9.5 523 1 527.5M155.546 380C156.864 393.5 155.5 423.7 139.5 436.5C119.5 452.5 95.5 473 87.5 502C83.1 518 58 522.667 46 523M155.546 380C157.864 394.167 165.4 427.7 177 448.5C191.5 474.5 163.092 486.5 155.546 507C148 527.5 149 527.5 150.5 536C152 544.5 176 580.5 174.5 589.5C173 598.5 167.5 621.5 171 628.5M155.546 380C157.864 394.667 173.1 429.7 219.5 456.5C226.333 462.167 240.4 475.8 242 485"  stroke-linecap="round"/>
                <path data-duration="1" data-delay="0.5" class="navMainSvgPath p3" d="M96 445.014C91.3333 438.681 76.9 429.414 56.5 443.014M31 495.014C34.8333 502.681 40.9 520.414 34.5 530.014M88 502.014C91.5 505.847 95.9 516.814 85.5 530.014M177.5 448.514C186.5 454.681 206.3 471.014 213.5 487.014C222.5 507.014 223 509.014 227 511.514C230.2 513.514 237.667 517.014 241 518.514M151 536.014C146.167 537.681 136.1 544.014 134.5 556.014C132.5 571.014 134.5 580.514 125 593.014M175 589.514C179.167 590.014 187.9 591.814 189.5 595.014C191.1 598.214 191.5 604.014 191.5 606.514C191.167 608.181 191.9 612.214 197.5 615.014M220 456.514C225.5 458.681 225.3 460.814 242.5 460.014M107.5 561.514C114.5 549.014 110.5 529.514 109 523.014C107.5 516.514 109.5 510.014 110.5 502.014C111.5 494.014 123.5 477.014 134.5 464.014C143.3 453.614 141.833 441.347 140 436.514C144 442.681 151.5 457.614 149.5 468.014C147 481.014 136.5 489.014 140 502.014C142.8 512.414 143.167 512.681 143 511.514" stroke-linecap="round"/>
                <path data-duration="0.9" data-delay="1.2" class="navMainSvgPath p4" d="M213.91 488C208.743 490.833 199.11 499.7 201.91 512.5M227.41 512.5C228.576 519 228.01 533 216.41 537C204.81 541 205.243 555.667 206.91 562.5M109.41 524C104.743 524.333 96.0095 529.3 98.4095 546.5M149.91 469C150.44 472 152.492 478.8 156.455 482M189.91 596C195.743 595.333 208.71 596.2 213.91 605"  stroke-linecap="round"/>
            </svg>
            <NavLinks 
            :navOn = navOn
            @event="navAnimation()"
            />
        </div>

    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavLinks from './navLinks.vue';

export default {
    name: "Nav",
    data() {
        return {
            buttonNavOn: true,
            navOn: false,
            showButton: true,
        };
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.runTimeout();
        this.hideSvg();
    },
    methods: {
        runTimeout: function() {
            let myTimeout;
            window.addEventListener("scroll", () => {
                if(!this.navOn) {
                    if(this.showButton) {
                        this.showButton = !this.showButton;
                        this.hideNavButton();
                    }
                    if(myTimeout != undefined) {
                        clearTimeout(myTimeout);
                        myTimeout = setTimeout(() => {
                            this.showNavButton();
                        }, 400)
                    } else {
                        myTimeout = setTimeout(() => {
                            this.showNavButton();
                        }, 400)
                    }
                }    
            }) 
        },
        hideNavButton: function() {
            gsap.to(".navButton", {xPercent: 300, duration: 0.25, ease: "back.in"})
        },
        showNavButton: function() {
            this.showButton = !this.showButton;
            gsap.to(".navButton", {xPercent: 0, duration: 0.25, ease: "back.out"})
        },
        // animation quand clik sur le boutton nav
        navAnimation: function () {
            let tl = gsap.timeline();
            if (this.buttonNavOn) {
                tl.to("body", {overflow: "hidden", duration: 0})
                tl.to(".nav", {pointerEvents: "all", duration: 0})
                tl.to(".navButtonBarre.mid", { scaleX: 0, duration: 0.2, ease: "power2.in" });
                tl.to(".navButtonBarre.top", { rotateZ: -42, duration: 0.3, ease: "power2.inOut" }, "-=0.15");
                tl.to(".navButtonBarre.bottom", { rotateZ: 42, duration: 0.3, ease: "power2.inOut" }, "-=0.3");
                tl.to(".navOverlay", { opacity: 1, duration: 0.3, ease: "none" }, "-=0.2");
                tl.to(".navMain", { opacity: 1, duration: 0, onComplete: this.showSvg });

                this.buttonNavOn = !this.buttonNavOn;
                this.navOn = !this.navOn;
            }
            else {
                tl.to("body", {overflow: "visible", duration: 0})
                tl.to(".navMain", { opacity: 0, duration: 0.3, ease: "power2.in", onComplete: this.hideSvg });
                tl.to(".navOverlay", { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.3");
                tl.to(".navButtonBarre.top", { rotateZ: 0, duration: 0.3, ease: "power2.inOut" }, "-=0.2");
                tl.to(".navButtonBarre.bottom", { rotateZ: 0, duration: 0.3, ease: "power2.inOut" }, "-=0.3");
                tl.to(".navButtonBarre.mid", { scaleX: 1, duration: 0.2, ease: "power2.out" }, "-=0.15");
                tl.to(".nav", {pointerEvents: "none", duration: 0})

                this.buttonNavOn = !this.buttonNavOn;
                this.navOn = !this.navOn;
            }
        },
        // montre le svg 
        showSvg: function () {
            let totalDuration = 0;
            document.querySelectorAll(".navMainSvgPath").forEach((path, index) => {
                let duration = parseFloat(path.dataset.duration);
                let delay = totalDuration - parseFloat(path.dataset.delay);
                totalDuration += duration;
                gsap.to(path, { strokeDashoffset: 0, duration: duration, ease: "none", delay: delay });
            });
        },
        // cache le svg
        hideSvg: function () {
            gsap.killTweensOf(".navMainSvgPath");
            document.querySelectorAll(".navMainSvgPath").forEach((path, index) => {
                let length = path.getTotalLength();
                gsap.to(path, { strokeDashoffset: length, strokeDasharray: length, duration: 0 });
            });
        }
    },
    components: { NavLinks }
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

.nav {
    z-index: 40;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    pointer-events: none;
    user-select: none;
    transform: translateZ(10px);
    &Button {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        height: 35px;
        width: 35px;
        margin: 25px;
        cursor: pointer;
        pointer-events: all;
        &Barre {
            background: $colorWhite;
            height: 3px;
            width: 100%;
            border-radius: 30px;
            transform-origin: right;
            &.mid {
                width: 70%;
            }
        }
    }
    &Overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        // backdrop-filter: blur(5px) saturate(130%) brightness(70%);
        background: rgba($color: black, $alpha: 0.90);
        opacity: 0;
    }
    &Main {
        display: flex;
        height: 100%;
        width: 100%;
        max-width: 350px;
        opacity: 0;
        &Svg {
            position: absolute;
            top: 85px;
            right: 0;
            height: 80vh;
            width: auto;
            stroke: $colorWhite;
            stroke-width: 2px;
            overflow: visible;
        }
    }
}
@media all and (min-width: 1025px) {
    .navButtonBarre {
        background: $colorYellow;
    }
}
</style>