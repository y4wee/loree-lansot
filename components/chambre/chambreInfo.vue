<template>
    <div class="info">
        <div class="infoText">
            {{ chambre[chambreIndex].text }}
        </div>

        <div class="infoPrix">
            <span class="infoPrixTitre">Nos Tarifs</span>
            <p>(petit-déjeuner inclus)</p>
            <div class="infoPrixListe">
                <div v-for="(eachPrice, index) in chambre[chambreIndex].prix" :key="index" class="infoPrixListeEach" >
                    <span class="infoPrixListeText"> {{ eachPrice.text }} </span>
                    <span class="infoPrixListePrix"> {{ eachPrice.prix }} </span>
                </div>
            </div>
        </div>

        <div class="infoIcon">

        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: "ChambreInfo",
    props: ["chambreIndex"],
    data() {
        return {
            chambre: [
                {
                    name: "atelier",
                    text: ` Chambre style atelier, faite en bonne partie avec des matériaux chinés ou récupérés,
                            elle est spacieuse et en duplex, elle dispose de 2 couchage en 140,
                            de 2 grandes douches, un wc et 2 lavabos. Le prix pour la nuitée est provisoire, car
                            il reste quelques finitions. Le SPA est à disposition uniquement pour cette chambre, de juillet à août
                            (l'accès aux enfants de moins de 10 ans est interdit)`,
                    prix: [ {
                                text: "1 ou 2 personnes",
                                prix: "70€"
                            },
                            {
                                text: "3 adultes",
                                prix: "88€"
                            },
                            {
                                text: "4 adultes",
                                prix: "106€"
                            },
                            {
                                text: "2 adultes et 1 enfant",
                                prix: "85€"
                            },
                            {
                                text: "2 adultes et 2 enfant",
                                prix: "100€"
                            } ]
                },
                {
                    name: "mansarde",
                    text: ` Elle se situe à l'étage, c'est une chambre très cozy,
                            elle dispose d'un lit en 140, d'une méridienne en 90,
                            elle a un wc, une belle douche et un lavabo.`,
                    prix: [ {
                                text: "1 ou 2 personnes",
                                prix: "60€"
                            },
                            {
                                text: "3 adultes",
                                prix: "78€"
                            },
                            {
                                text: "2 adultes et 1 enfant",
                                prix: "75€"
                            } ]
                },
                {
                    name: "romance",
                    text: ` Chambre en rez de jardin, chaleureuse et spacieuse, alliant modernité et ancien.
                            Elle dispose d'un lit en 140 et d'un convertible en 120.
                            Elle a une grande douche à l'italienne, d'un WC et d'un lavabo.`,
                    prix: [ {
                                text: "1 ou 2 personnes",
                                prix: "65€"
                            },
                            {
                                text: "3 adultes",
                                prix: "83€"
                            },
                            {
                                text: "4 adultes",
                                prix: "101€"
                            },
                            {
                                text: "2 adultes et 1 enfant",
                                prix: "80€"
                            },
                            {
                                text: "2 adultes et 2 enfant",
                                prix: "95€"
                            } ]
                },
            ],
        }
    },
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

.info {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: $colorBlue;
    border-top: solid 10px $colorWhite;
    border-bottom: solid 10px $colorWhite;
    &Text {
        max-width: 700px;
        margin: 50px 10px;
        font-size: 1.4rem;
        color: $colorWhite;
    }
    &Prix {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95%;
        max-width: 700px;
        margin: 50px 10px;
        font-size: 1.4rem;
        background: $colorBeige;
        color: $colorBlue;
        border-radius: 30px;
        box-shadow: 0 5px 10px 0 black;
        &Titre {
            margin-top: 20px;
            font-family: "Ballet Harmony", sans-serif;
            font-size: 5rem;
            color: $colorYellow;
        }
        & p {
            margin: 0;
            font-size: 0.9rem;
        }
        &Liste {
            width: 90%;
            max-width: 600px;
            font-size: 1.3rem;
            margin: 20px 0;
            &Each {
                display: flex;
                justify-content: space-between;
                margin: 10px 0;
                border-bottom: solid 1px $colorWhite;
            }
            &Prix {
                color: $colorYellow;
            }
        }
    }
    &Icon {
        display: flex;
        flex-direction: column;
        max-width: 700px;
        margin: 0 10px;
        background: $colorYellow;
    }
}

</style>