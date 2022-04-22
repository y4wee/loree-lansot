<template>
    <div class="info">
        <div class="infoText">
            {{ chambre[chambreIndex].text }}
        </div>

        <div class="infoPrix">
            <p>Tarifs petit déjeuner inclus :</p>
            <ul class="infoPrixListe">
                <li v-for="(eachPrice, index) in chambre[chambreIndex].prix" :key="index">
                    {{ eachPrice }}
                </li>
            </ul>
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
                    prix: [ "70 € pour 1 ou 2 personnes.",
                            "88 € pour 3 adultes.",
                            "106 € pour 4 adultes.",
                            "85 € pour 2 adultes et 1 enfant.",
                            "100 € pour 2 adultes et 2 enfants."]
                },
                {
                    name: "mansarde",
                    text: ` Elle se situe à l'étage, c'est une chambre très cozy,
                            elle dispose d'un lit en 140, d'une méridienne en 90,
                            elle a un wc, une belle douche et un lavabo.`,
                    prix: [ "60 € pour 1 ou 2 personnes.",
                            "78 € pour 3 adultes.",
                            "75 € pour 2 adultes et 1 enfant." ]
                },
                {
                    name: "romance",
                    text: ` Chambre en rez de jardin, chaleureuse et spacieuse, alliant modernité et ancien.
                            Elle dispose d'un lit en 140 et d'un convertible en 120.
                            Elle a une grande douche à l'italienne, d'un WC et d'un lavabo.`,
                    prix: [ "65 € pour 1 ou 2 personnes.",
                            "83 € pour 3 adultes.",
                            "101 € pour 4 adultes.",
                            "80 € pour 2 adultes et 1 enfant.",
                            "95 € pour 2 adultes et 2 enfants"]
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
    width: 100%;
    background: $colorBeige;
    border-top: solid 10px $colorBlue;
    border-bottom: solid 10px $colorBlue;
    &Text {
        max-width: 700px;
        margin: 50px 10px;
        font-size: 1.4rem;
        color: $colorBlue;
    }
    &Prix {
        display: flex;
        flex-direction: column;
        max-width: 700px;
        margin: 0 10px;
        font-size: 1.4rem;
        color: $colorBlue;
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