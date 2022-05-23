<template>
    <div class="footer">
        <!-- <h2>Contactez Nous</h2> -->

        <!-- <div class="footerContact">
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
        </div> -->

        <Envelope />
<!-- 
        <div class="footerDev">
            Coded by&nbsp;
            <a href="https://quentin-jt.net" target="_blank">Quentin.jt</a>
        </div> -->
        <!-- <div class="footerBack"></div> -->
    </div>
</template>

<script>
import { gsap } from 'gsap';
import Envelope from './envelope.vue';

export default {
    name: "Footer",
    mounted() {
    },
    methods: {},
    components: { Envelope }
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

.footer {
    display: flex;
    flex-direction: column;
    background: $colorBlue;
    & h2 {
        text-align: center;
        margin: 20px 0 0;
        font-family: "Ballet Harmony", sans-serif;
        font-size: 4rem;
        color: $colorYellow;
    }
    &Contact {
        display: flex;
        flex-direction: column;
        &Phone {
            display: flex;
            align-items: center;
            margin: 10px;
            &Icon {
                margin-right: 10px;
                font-size: 1.4em;
                color: $colorYellow;
            }
            & a {
                text-decoration: underline $colorYellow;
                color: $colorWhite;
            }
        }
        &Email {
            display: flex;
            align-items: center;
            margin: 10px;
            &Icon {
                margin-right: 10px;
                font-size: 1.4em;
                color: $colorYellow;
            }
            & a {
                text-decoration: underline $colorYellow;
                // color: $colorYellow;
                color: $colorWhite;
            }
        }
    }
    &Dev {
        display: flex;
        justify-content: center;
        margin: 40px 0px 10px;
        font-size: 1.1rem;
        color: $colorWhite;
        & a {
            text-decoration: none;
            color: $colorGreen;
        }
    }
}
@media all and (min-width: 700px) {
    .footer {
        align-items: center;
        & h2 {
            font-size: 5rem;
        }
        &Contact {
            flex-direction: row;
            &Phone {
                margin: 15px 30px;
            }
            &Email {
                margin: 15px 30px;
            }
        }
    }
}


</style>