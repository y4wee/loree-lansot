<template>
    <div class="delice">
        <div class="deliceOverlay"></div>
        <div class="deliceTitle">
            <div class="deliceTitleText">
                <div class="deliceTitleTextLeft">Nos Delices</div>
            </div>
            <div class="deliceTitleText">
                <div class="deliceTitleTextRight">Nos Delices</div>
            </div>
        </div>
        <!-- <h1 class="deliceTitle">Nos Delices</h1> -->
        <section class="deliceDejeuner">
            <CarteText 
            class="deliceDejeunerCarte"
            :carte="carte"
            />
            <MosaiqueDejeuner />
        </section>

        <section class="deliceRepas">
            <h2>Nos<br /> Plateaux repas</h2>
        </section>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import MosaiqueDejeuner from './mosaiqueDejeuner.vue';
import CarteText from '../carteText.vue';

export default {
    name: "Delice",
    data() {
        return {
            carte: {
                text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sequi quod optio sit? Dolor ipsum minus hic. 
                        Corporis laborum voluptate, possimus odit culpa, 
                        ut temporibus earum ratione hic ipsam sed porro amet quaerat! 
                        Ex ipsa inventore in repudiandae optio neque ullam eius iure!
                        Iste, magni est assumenda numquam recusandae doloremque laudantium.`,
                icon: "https://assets6.lottiefiles.com/packages/lf20_hts2bhx2.json"
            }
        }
    },
    mounted() {
    },
    methods: {},
    components: { MosaiqueDejeuner, CarteText }
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

.delice {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-x: hidden;
    background: $colorWhite;
    border-top: solid 10px $colorBlue;
    border-bottom: solid 10px $colorWhite;
    user-select: none;
    &Overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 50%;
        background: $colorBlue;
    }
    &Title {
        z-index: 2;
        display: flex;
        align-items: center;
        width: 100%;
        height: 300px;
        font-family: "Ballet Harmony", sans-serif;
        font-size: 5rem;
        text-align: center;
        &Text {
            position: relative;
            display: flex;
            align-items: center;
            width: 50%;
            height: 100%;
            overflow: hidden;
            &Left {
                position: absolute;
                right: 0;
                transform: translateX(50%);
                color: $colorYellow;
            }
            &Right {
                position: absolute;
                left: 0;
                transform: translateX(-50%);
                color: $colorBlue;
            }
        }
    }
    &Dejeuner {
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
@media all and (min-width: 1025px) {
    .delice {
        &Dejeuner {
            &Carte {
                align-self: flex-start;
                margin: 20px 5% 50px;
            }
        }
    }
}

</style>