<template>
    <div class="delice">
        <HalfTitle 
        :text="'Nos Delices'"
        />
        <section class="deliceDejeuner">
            <CarteText 
            class="deliceDejeunerCarte"
            :carte="carteDejeuner"
            />
            <MosaiqueDejeuner 
            class="deliceDejeunerMosaique"
            />
        </section>

        <section class="deliceRepas">
            <CarteText 
            class="deliceRepasCarte"
            :carte="carteRepas"
            />
            <div class="deliceRepasPhoto">
                <img class="deliceRepasPhotoImage" src="~/assets/dejeuner/repas.jpg" alt="photo plateau repas de l'orée de lansot">
            </div>
        </section>
    </div>
</template>

<script>
import MosaiqueDejeuner from './mosaiqueDejeuner.vue';
import CarteText from '../carteText.vue';
import HalfTitle from '../halfTitle.vue';

export default {
    name: "Delice",
    data() {
        return {
            carteDejeuner: {
                text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sequi quod optio sit? Dolor ipsum minus hic. 
                        Corporis laborum voluptate, possimus odit culpa, 
                        ut temporibus earum ratione hic ipsam sed porro amet quaerat! 
                        Ex ipsa inventore in repudiandae optio neque ullam eius iure!
                        Iste, magni est assumenda numquam recusandae doloremque laudantium.`,
                lottie: "https://assets3.lottiefiles.com/packages/lf20_gbypohim.json"
            },
            carteRepas: {
                text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sequi quod optio sit? Dolor ipsum minus hic. 
                        Corporis laborum voluptate, possimus odit culpa, 
                        ut temporibus earum ratione hic ipsam sed porro amet quaerat! 
                        Ex ipsa inventore in repudiandae optio neque ullam eius iure!
                        Iste, magni est assumenda numquam recusandae doloremque laudantium.`,
                lottie: "https://assets10.lottiefiles.com/packages/lf20_2cmperww.json"
            },
        }
    },
    mounted() {
    },
    methods: {},
    components: { MosaiqueDejeuner, CarteText, HalfTitle }
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
    justify-content: space-evenly;
    width: 100%;
    overflow-x: hidden;
    background: $colorWhite;
    border-top: solid 10px $colorBlue;
    border-bottom: solid 10px $colorWhite;
    user-select: none;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 50%;
        background: $colorBlue;
    }
    &Dejeuner {
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &Mosaique {
            margin: 50px 0;
        }
    }
    &Repas {
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &Photo {
            display: flex;
            justify-content: center;
            align-items: center;
            width: calc(100% - 20px);
            height: 300px;
            margin: 50px 10px;
            box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.7);
            overflow: hidden;
            &Image {
                object-fit: cover;
                width: 101%;
                height: 101%;
            }
        }
    }
}
@media all and (min-width: 750px) {
    .delice {
        &Repas {
            &Photo {
                height: auto;
                max-height: 600px;
            }
        }
    }
}
@media all and (min-width: 1025px) {
    .delice {
        &Dejeuner {
            &Carte {
                align-self: flex-start;
                margin: 0 5%;
            }
            &Mosaique {
                margin: 50px 5%;
            }
        }
        &Repas {
            &Carte {
                align-self: flex-start;
                margin: 0 5%;
            }
            &Photo {
                align-self: flex-end;
                width: 75%;
                margin: 50px 5%;
            }
        }
    }
}

</style>