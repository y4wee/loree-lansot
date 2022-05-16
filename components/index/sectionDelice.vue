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
            <div class="deliceDejeunerCarte">
                <div class="deliceDejeunerCarteText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sequi quod optio sit? Dolor ipsum minus hic. 
                    Corporis laborum voluptate, possimus odit culpa, 
                    ut temporibus earum ratione hic ipsam sed porro amet quaerat! 
                    Ex ipsa inventore in repudiandae optio neque ullam eius iure!
                    Iste, magni est assumenda numquam recusandae doloremque laudantium.
                </div>
                <lottie-player 
                    class="infoLeaf"
                    src="https://assets6.lottiefiles.com/packages/lf20_hts2bhx2.json"
                    background="transparent"
                    style="width: 180px; height: 180px;"
                    autoplay
                    loop>
                </lottie-player>
                <div class="deliceDejeunerCarteBorder deliceDejeunerCarteBorderTop"></div>
                <div class="deliceDejeunerCarteBorder deliceDejeunerCarteBorderBottom"></div>
            </div>
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

export default {
    name: "Delice",
    mounted() {
    },
    methods: {},
    components: { MosaiqueDejeuner }
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
        // margin: 40px 15px;
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
        &Carte {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: calc(100% - 60px);
            max-width: 700px;
            min-height: 300px;
            margin: 20px 0 50px;
            padding: 20px;
            background: $colorBeige;
            box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.7);
            text-align: center;
            &Text {
                color: $colorBlue;
                margin: 20px 0;
            }
            &Border {
                position: absolute;
                width: 50%;
                height: 50%;
                &Top {
                    top: 10px;
                    left: 10px;
                    border-top: solid 2px $colorBlue;
                    border-left: solid 2px $colorBlue;
                }
                &Bottom {
                    bottom: 10px;
                    right: 10px;
                    border-bottom: solid 2px $colorBlue;
                    border-right: solid 2px $colorBlue;
                }
            }
        }
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