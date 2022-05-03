<template>
    <div class="footer">
        <div class="footerContact">
            <h2>Contactez <br/> Nous</h2>
            <div class="footerContactPhone">
                <font-awesome-icon :icon="['fa', 'phone']" class="footerContactPhoneIcon" />
                <div class="footerContactPhoneNumber">
                    <a href="tel:0556258523">- 05.56.25.85.23</a> <br />
                    <a href="tel:0612186397">- 06.12.18.63.97</a>
                </div>
            </div>
            <div class="footerContactEmail">
                <font-awesome-icon :icon="['fa', 'envelope']" class="footerContactEmailIcon" />
                <a href="mailto:sophie.jambert@gmail.com">sophie.jambert@gmail.com</a>
            </div>
        </div>
        <div class="footerDev">
            Coded by&nbsp;
            <a href="https://quentin-jt.net" target="_blank">Quentin.jt</a>
        </div>
        <div class="footerBack"></div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "Footer",
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
    },
    methods: {
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

.footer {
    display: flex;
    flex-direction: column;
    background: $colorBlue;
    color: $colorWhite;
    &Contact {
        display: flex;
        flex-direction: column;
        & h2 {
            margin: 40px 15px;
            // font-family: 'Paytone One', sans-serif;
            font-family: "Ballet Harmony", sans-serif;
            font-size: 5rem;
        }
        &Phone {
            display: flex;
            align-items: center;
            margin: 10px;
            &Icon {
                margin-right: 10px;
                font-size: 1.4em;
            }
            & a {
                text-decoration: none;
                color: $colorYellow;
            }
        }
        &Email {
            display: flex;
            align-items: center;
            margin: 10px;
            &Icon {
                margin-right: 10px;
                font-size: 1.4em;
            }
            & a {
                text-decoration: none;
                color: $colorYellow;
            }
        }
    }
    &Dev {
        display: flex;
        justify-content: center;
        margin: 40px 0px 10px;
        & a {
            text-decoration: none;
            color: $colorGreen;
        }
    }
}


</style>