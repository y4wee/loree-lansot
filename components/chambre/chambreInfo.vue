<template>
    <div class="info">
        <div class="infoCarte">

            <div class="infoCarteDetail" >
                <div class="infoCarteDetailText" v-if="chambre[chambreIndex].name === 'atelier'">
                    Chambre style atelier,<br /> faite en bonne partie avec des matériaux chinés ou récupérés et
                    pouvant accueillir jusqu'à <span class="infoCarteDetailTextColor">quatre personnes</span>. <br />
                    Elle est spacieuse et en duplex, disposant de <span class="infoCarteDetailTextColor">deux couchages en 140</span>,
                    <span class="infoCarteDetailTextColor">deux grandes douches</span> à l'italienne,
                    deux lavabos et un <span class="infoCarteDetailTextColor">wc</span>. <br />
                    <!-- Le <span class="infoCarteDetailTextColor">SPA</span> est à disposition uniquement pour cette chambre,
                    de juillet à août (l'accès aux enfants de moins de 10 ans est interdit). -->
                </div>
                <div class="infoCarteDetailText" v-if="chambre[chambreIndex].name === 'mansarde'">
                    Chambre très cozy, <br />
                    elle se situe à l'étage et peut accueillir jusqu'à <span class="infoCarteDetailTextColor">deux personnes</span>. <br /> 
                    disposant d'un <span class="infoCarteDetailTextColor">lit en 140</span>
                    et une <span class="infoCarteDetailTextColor">méridienne en 90</span>,
                    une belle <span class="infoCarteDetailTextColor">douche à l'italienne</span>,
                    un lavabo et un <span class="infoCarteDetailTextColor">wc</span>.
                </div>
                <div class="infoCarteDetailText" v-if="chambre[chambreIndex].name === 'romance'">
                    Chambre en rez de jardin,<br />
                    chaleureuse et spacieuse, alliant modernité et ancien.<br />
                    Elle peut accueillir jusqu'à <span class="infoCarteDetailTextColor">deux personnes</span> 
                    et dispose d'un <span class="infoCarteDetailTextColor">lit en 140</span>,
                    un <span class="infoCarteDetailTextColor">convertible en 120</span>,
                    une <span class="infoCarteDetailTextColor">grande douche à l'italienne</span>, 
                    un lavabo et un <span class="infoCarteDetailTextColor">WC</span>.
                </div>
                <lottie-player class="infoCarteDetailBird"
                    src="https://assets2.lottiefiles.com/packages/lf20_2n1cqhnt.json"
                    background="transparent"
                    style="width: 250px; height: 250px;"
                    autoplay
                    loop
                    >
                </lottie-player>
            </div>

            <div class="infoCartePrix">
                <div class="infoCartePrixText">
                    Decouvrez les tarifs de cette chambre avec le <span class="infoCartePrixTextColor">petit déjeuner inclus</span> :
                </div>
                <div class="infoCartePrixListe">
                    <div v-for="(eachPrice, index) in chambre[chambreIndex].prix" :key="index" class="infoCartePrixListeEach" >
                        <span class="infoCartePrixListeText"> {{ eachPrice.text }} </span>
                        <span class="infoCartePrixListeColor"> {{ eachPrice.prix }} </span>
                    </div>
                </div>
           </div>

           <div class="infoCarteArrhes">
               En cas d'annulation les arrhes ne seront pas remboursées mais valables pour une durée d'un an. <br />
               Le tarif pour un enfant partageant la chambre des parents est de 18€.
           </div>

           <div class="infoCarteButton">
                <div class="infoCarteButtonBack"></div>
                <div class="infoCarteButtonText" @click="buttonScrollTo">Reserver</div>
           </div>

        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: "ChambreInfo",
    props: ["chambreIndex"],
    data() {
        return {
            //data chambres pour creation html par boucle
            chambre: [
                {
                    name: "atelier",
                    text: ` Chambre style atelier, faite en bonne partie avec des matériaux chinés ou récupérés et pouvant accueillir jusqu'à quatre personnes,
                            elle est spacieuse et en duplex, elle dispose de deux couchages en 140, deux grandes douches,
                            un wc et deux lavabos. Le SPA est à disposition uniquement pour cette chambre,
                            de juillet à août (l'accès aux enfants de moins de 10 ans est interdit).`,
                    services: [ { icon: "user-group", text: "1 - 4 personnes" },
                                { icon: "bed", text: "2 couchages en 140" },
                                { icon: "shower", text: "2 douches italiennes" },
                                { icon: "toilet", text: "1 wc" },
                                { 
                                    icon: "hot-tub-person", 
                                    text: "SPA uniquement pour cette chambre, de juillet à août. (l'accès aux enfants de moins de 10 ans est interdit)" 
                                }],
                    prix: [ { text: "1 ou 2 personnes", prix: "80€" },
                            { text: "3 adultes", prix: "100€" },
                            { text: "4 adultes", prix: "120€" },
                            { text: "taxe de sejour par adulte", prix: "0.50€/jour" },
                            { text: "Arrhes", prix: "40%" } ]
                },
                {
                    name: "mansarde",
                    text: ` Elle se situe à l'étage, c'est une chambre très cozy,
                            elle dispose d'un lit en 140, d'une méridienne en 90,
                            elle a un wc, une belle douche et un lavabo.  `,
                    services: [ { icon: "user-group", text: "1 - 3 personnes" },
                                { icon: "bed", text: "1 lit en 140 et 1 méridienne en 90" },
                                { icon: "shower", text: "1 douche italienne" },
                                { icon: "toilet", text: "1 wc" }],
                    prix: [ { text: "1 ou 2 personnes", prix: "65€" },
                            { text: "taxe de sejour par adulte", prix: "0.50€/jour" },
                            { text: "Arrhes", prix: "40%" }]
                },
                {
                    name: "romance",
                    text: ` Chambre en rez de jardin, chaleureuse et spacieuse, alliant modernité et ancien.
                            Elle dispose d'un lit en 140 et d'un convertible en 120.
                            Elle a une grande douche à l'italienne, d'un WC et d'un lavabo. `,
                    services: [ { icon: "user-group", text: "1 - 4 personnes" },
                                { icon: "bed", text: "1 lit en 140 et 1 lit convertible en 120" },
                                { icon: "shower", text: "1 douche italiennes" },
                                { icon: "toilet", text: "1 wc" }],
                    prix: [ { text: "1 ou 2 personnes", prix: "70€" },
                            { text: "taxe de sejour par adulte", prix: "0.50€/jour" },
                            { text: "Arrhes", prix: "40%" }]
                },
            ],
        }
    },
    mounted() {
        this.animationCarte();
    },
    methods: {
        buttonScrollTo: function(e) {
            gsap.to(window, {scrollTo: "#indexFooter", duration: 1, ease: "power3.inOut"})
        },
        // animation quand la carte prix rentre dans le viewport
        animationCarte: function() {
            let element = document.querySelector(".infoCarte");
            let callback = (entries) => {
                if(entries[0].isIntersecting) {
                    gsap.to(element, {
                        transform: "translateY(0)",
                        opacity: 1,
                        ease: "power1.out",
                        duration: 0.5,
                        onComplete: observer.disconnect(),
                    });
                }
            }
            const observer = new IntersectionObserver(callback, {
                threshold: 0.5,
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

@keyframes dotMove {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-5px);
    }
}

.info {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-bottom: solid 10px $colorBlue;
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 50%;
        background: $colorBlue;
    }
    &Carte {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100% - 60px);
        margin: 50px 0;
        padding: 20px;
        background: $colorBeige;
        box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.7);
        overflow: hidden;
        user-select: none;
        opacity: 0;
        transform: translateY(100px);
        &::before {
            content: "";
            position: absolute;
            top: 10px;
            left: 10px;
            width: 50%;
            height: 50%;
            max-height: 250px;
            border-top: solid 2px $colorBlue;
            border-left: solid 2px $colorBlue;
        }
        &::after {
            content: "";
            position: absolute;
            bottom: 10px;
            right: 10px;
            width: 50%;
            height: 50%;
            max-height: 250px;
            border-bottom: solid 2px $colorBlue;
            border-right: solid 2px $colorBlue;
        }
        &Detail {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            color: $colorBlue;
            margin: 20px 0 200px;
            &Text {
                &Color {
                    color: $colorYellow;
                }
            }
            &Bird {
                position: absolute;
                align-self: flex-end;
                bottom: -200px;
                right: -41px;
            }
        }
        &Prix {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            &Text {
                &Color {
                    color: $colorYellow;
                }
            }
            &Liste {
                display: flex;
                flex-direction: column;
                margin: 20px 0;
                &Each {
                    position: relative;
                    margin: 5px 0;
                    &::before {
                        content: "";
                        position: absolute;
                        top: 0.9rem;
                        left: -10px;
                        width: 5px;
                        border: solid 1px $colorWhite;
                        animation: dotMove 0.8s alternate infinite ease-in-out;
                    }
                }
                &Color {
                    color: $colorYellow;
                }
            }
        }
        &Button {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 75%;
            max-width: 300px;
            height: 50px;
            margin: 20px 0 30px;
            &Text {
                z-index: 5;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                border: solid 2px $colorYellow;
                color: $colorYellow;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.7);
            }
            &Back {
                position: absolute;
                top: 10px;
                left: 10px;
                width: 100%;
                height: 100%;
                background: $colorBlue;
                box-shadow: 2px 2px 5px 0 rgba($color: #000000, $alpha: 0.7);
                transition: transform 0.2s ease-out;
            }
            &:hover .infoCarteButtonBack {
                transform: translate(-10px, -10px);
            }
            
        }
    }
}
@media all and (min-width: 1025px) {
    .info {
        min-height: 100vh;
        max-width: 600px;
        border-bottom: none;
        padding-left: 50px;
    }
}

</style>