<template>
    <div class="envelope">

        <div class="envelopeContainer">
            <div class="envelopeBack"></div>

            <div class="envelopeLetter">
                <div class="envelopeLetterContainer">

                    <div class="envelopeLetterContainerText">Contactez Nous</div>

                    <div class="envelopeLetterContainerContact envelopeLetterContainerEmail">
                        <font-awesome-icon :icon="['fa', 'envelope']" class="envelopeLetterContainerEmailIcon" />
                        <a href="mailto:sophie.jambert@gmail.com">sophie.jambert@gmail.com</a>
                    </div>

                    <div class="envelopeLetterContainerContact envelopeLetterContainerPhone">
                        <font-awesome-icon :icon="['fa', 'phone']" class="envelopeLetterContainerPhoneIcon" />
                        <div class="envelopeLetterContainerPhoneNumber">
                            <a href="tel:0556258523">05.56.25.85.23</a> <br />
                            <a href="tel:0612186397">06.12.18.63.97</a>
                        </div>
                    </div>

                    <div class="envelopeLetterContainerMargin"></div>

                </div>
            </div>

            <div class="envelopeBottom">
                <div class="envelopeBottomText">
                    Coded by
                    <a href="https://quentin-jt.net" target="_blank">Quentin.jt</a>
                </div>
            </div>

            <div class="envelopeLeft"></div>
            <div class="envelopeRight"></div>
            <div class="envelopeTop envelopeTop1">
                <div class="envelopeTopLogo">
                    <span class="envelopeTopLogoWord1">lOree</span>
                    <span class="envelopeTopLogoWord2">de</span>
                    <span class="envelopeTopLogoWord3">Lansot</span>
                </div>
            </div>
            <div class="envelopeTop envelopeTop2"></div>
        </div>

        <div class="envelopeShadow"></div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "Envelope",
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.animationReveal();
    },
    methods: {
        animationReveal: function() {
            let element = document.querySelector(".envelopeContainer");
            let callback = (entries) => {
                if(entries[0].isIntersecting) {
                    let tl = gsap.timeline();
                    tl.to(".envelopeTop1", { rotateX: "90deg", duration: 0.25, ease: "power1.in" })
                    tl.to(".envelopeTop2", { rotateX: "180deg", duration: 0.25, ease: "power1.out" })
                    tl.to(".envelopeLetterContainer", { translateY: "0%", duration: 0.3, ease: "power1.inOut", delay: -0.3 })
                } else {
                    let tl = gsap.timeline();
                    tl.to(".envelopeLetterContainer", { translateY: "100%", duration: 0.3, ease: "power1.inOut" })
                    tl.to(".envelopeTop2", { rotateX: "90deg", duration: 0.25, ease: "power1.in", delay: -0.3 })
                    tl.to(".envelopeTop1", { rotateX: "0deg", duration: 0.25, ease: "power1.out" })
                }
            }
            const observer = new IntersectionObserver(callback, {
                threshold: 0.7,
            });
            observer.observe(element);
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
$colorYellow: #c4721c;

@keyframes scaleShadow {
    from {
        transform: scaleX(1) scaleY(1);
    }
    to {
        transform: scaleX(0.9) scaleY(0.9);
    }
}
@keyframes levitation {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-20px);
    }
}

.envelope {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 200px;
    &Container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: calc(100vw - 20px);
        max-width: 500px;
        height: 60vw;
        max-height: 300px;
        margin: 0 10px;
        box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.8);
        animation: levitation 3s infinite alternate ease-in-out;
        will-change: tranform;
    }
    &Back {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgb(206, 205, 206);
    }
    &Letter {
        z-index: 2;
        position: relative;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: calc(100% - 20px);
        height: 200%;
        overflow: hidden;
        &Container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: calc(100% - 20px);
            padding: 10px;
            background: $colorBeige;
            color: $colorBlue;
            box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.8);
            transform: translateY(100%);
            &::before {
                content: "";
                position: absolute;
                top: 10px;
                left: 10px;
                width: 30%;
                height: 30%;
                border-top: solid 2px $colorBlue;
                border-left: solid 2px $colorBlue;
            }
            &Text {
                margin: 20px 0;
                font-family: "Ballet Harmony", sans-serif;
                font-size: 2.5rem;
                color: $colorBlue;
            }
            &Contact {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 1rem;
            }
            &Email {
                &Icon {
                    font-size: 1.3rem;
                    color: $colorYellow;
                }
            }
            &Phone {
                margin: 10px 0 25px;
                &Icon {
                    font-size: 1.3rem;
                    color: $colorYellow;
                }
            }
            & a {
                color: $colorBlue;
                text-decoration: underline $colorYellow;
            }
            &Margin {
                width: calc(100vw - 20px);
                max-width: 500px;
                height: 30vw;
                max-height: 150px;
            }
        }
    }
    &Bottom {
        z-index: 3;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 50%;
        background: #e0dfe0;
        clip-path: polygon(50% 0, 100% 100%, 0 100%);
        &Text {
            display: flex;
            justify-content: center;
            align-items: center;
            color: $colorBlue;
            font-size: 0.8rem;
            margin: 10px 0;
            & a {
                text-decoration: none;
                color: $colorGreen;
            }
        }
    }
    &Left {
        z-index: 3;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: #eae9eb;
        clip-path: polygon(0 0, 100% 50%, 0 100%);
    }
    &Right {
        z-index: 3;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background: #eae9eb;
        clip-path: polygon(100% 0, 100% 100%, 0 50%);
    }
    &Top {
        position: absolute;
        top: 0;
        width: 100%;
        height: 50%;
        clip-path: polygon(0 0, 100% 0, 50% 100%);
        transform-origin: top;
        &Logo {
            position: absolute;
            top: calc(50% - 75px);
            left: calc(50% - 75px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 150px;
            font-family: "Ballet Harmony", sans-serif;
            border: solid 2px $colorBlue;
            border-radius: 50%;
            transform: scale(0.3);
            &Word1 {
                position: relative;
                top: 20px;
                left: 15px;
                font-size: 2.1rem;
            }
            &Word2 {
                position: relative;
                font-size: 1.5rem;
                top: 5px;
                left: 10px;
            }
            &Word3 {
                position: relative;
                left: -10px;
                bottom: 15px;
                font-size: 3rem;
            }
        }
        &1 {
            z-index: 3;
            background: $colorWhite;
            transform: rotateX(0deg);
        }
        &2 {
            z-index: 1;
            background: rgb(206, 205, 206);
            transform: rotateX(90deg);
        }
    }
    &Shadow {
        width: calc(100vw - 20px);
        max-width: 500px;
        height: 10px;
        margin: 25px 0;
        background: rgba($color: #000000, $alpha: 0.7);
        border-radius:50%;
        transform-origin: center;
        animation: scaleShadow 3s infinite alternate ease-in-out;
    }
}

@media all and (min-width: 450px) {
    .envelopeTopLogo {
        transform: scale(0.6);
    }
}

</style>