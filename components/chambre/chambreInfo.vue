<template>
    <div class="info">
        <lottie-player 
            class="infoLeaf"
            src="https://assets8.lottiefiles.com/packages/lf20_hyfprsvc.json"
            background="transparent"
            color="black"
            speed="1"
            style="width: 300px; height: 300px;"
            autoplay>
        </lottie-player>
        <div class="infoText">
            {{ chambre[chambreIndex].text }}
        </div>

        <div class="infoServices">
            <div v-for="(service, index) in chambre[chambreIndex].services" :key="index" class="infoServicesEach">
                <font-awesome-icon :icon="['fa', service.icon]" class="infoServicesEachIcon" />
                <span class="infoServicesEachText"> {{ service.text }} </span>
            </div>
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
                            elle est spacieuse et en duplex`,
                    services: [ { icon: "user-group", text: "1 - 4 personnes" },
                                { icon: "bed", text: "2 couchages en 140" },
                                { icon: "shower", text: "2 douches italiennes" },
                                { icon: "toilet", text: "1 wc" },
                                { 
                                    icon: "hot-tub-person", 
                                    text: "SPA uniquement pour cette chambre, de juillet à août. (l'accès aux enfants de moins de 10 ans est interdit)" 
                                }],
                    prix: [ { text: "1 ou 2 personnes", prix: "70€" },
                            { text: "3 adultes", prix: "88€" },
                            { text: "4 adultes", prix: "106€" },
                            { text: "2 adultes et 1 enfant", prix: "85€" },
                            { text: "2 adultes et 2 enfant", prix: "100€" } ]
                },
                {
                    name: "mansarde",
                    text: ` Chambre chaleureuse et très cozy se situant à l'étage. `,
                    services: [ { icon: "user-group", text: "1 - 3 personnes" },
                                { icon: "bed", text: "1 lit en 140 et 1 méridienne en 90" },
                                { icon: "shower", text: "1 douche italienne" },
                                { icon: "toilet", text: "1 wc" }],
                    prix: [ { text: "1 ou 2 personnes", prix: "60€" },
                            { text: "3 adultes", prix: "78€" },
                            { text: "2 adultes et 1 enfant", prix: "75€" } ]
                },
                {
                    name: "romance",
                    text: ` Chambre en rez de jardin, chaleureuse et spacieuse, alliant modernité et ancien.`,
                    services: [ { icon: "user-group", text: "1 - 4 personnes" },
                                { icon: "bed", text: "1 lit en 140 et 1 lit convertible en 120" },
                                { icon: "shower", text: "1 douche italiennes" },
                                { icon: "toilet", text: "1 wc" }],
                    prix: [ { text: "1 ou 2 personnes", prix: "65€" },
                            { text: "3 adultes", prix: "83€" },
                            { text: "4 adultes", prix: "101€" },
                            { text: "2 adultes et 1 enfant", prix: "80€" },
                            { text: "2 adultes et 2 enfant", prix: "95€" } ]
                },
            ],
        }
    },
    mounted() {
        this.animationText();
        this.animationServices();
        this.animationPrix();
        
    },
    methods: {
        animationText: function() {
            let element = document.querySelector(".infoText");
            let callback = (entries) => {
                if(entries[0].isIntersecting) {
                    gsap.to(element, {
                        transform: "translateX(0)",
                        opacity: 1,
                        ease: "power1.out",
                        duration: 0.8,
                        onComplete: observer.disconnect(),
                    });
                }
            }
            const observer = new IntersectionObserver(callback, {
                threshold: 0.8,
            });
            observer.observe(element);
        },
        animationServices: function() {
            document.querySelectorAll(".infoServicesEach").forEach(service => {
                let callback = (entries) => {
                    if(entries[0].isIntersecting) {
                        gsap.to(service, {
                            transform: "translateY(0)",
                            opacity: 1,
                            ease: "power1.out",
                            duration: 0.3,
                            onComplete: observer.disconnect(),
                        });
                    }
                }
                const observer = new IntersectionObserver(callback, {
                    threshold: 1,
                });
                observer.observe(service);
            })
        },
        animationPrix: function() {
            let element = document.querySelector(".infoPrix");
            let callback = (entries) => {
                if(entries[0].isIntersecting) {
                    gsap.to(element, {
                        transform: "translateY(0)",
                        opacity: 1,
                        ease: "power1.out",
                        duration: 0.3,
                        onComplete: observer.disconnect(),
                    });
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
$colorYellow: #c9853c;

.info {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: $colorBlue;
    font-size: 1.2rem;
    border-top: solid 10px $colorWhite;
    border-bottom: solid 10px $colorWhite;
    &Leaf {
        position: absolute;
        top: -220px;
    }
    // section text description
    &Text {
        max-width: 700px;
        margin: 50px 10px;
        color: $colorWhite;
        border-left: solid 2px $colorYellow;
        padding-left: 10px;
        opacity: 0;
        transform: translateX(10%);
    }
    // section service icon plus text
    &Services {
        max-width: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &Each {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px;
            opacity: 0;
            transform: translateY(15%);
            &Icon {
                font-size: 1.5rem;
                color: $colorGreen;
            }
            &Text {
                color: $colorWhite;
                text-align: center;
            }
        }
    }
    // section carte tarifs nuit par personne
    &Prix {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95%;
        max-width: 700px;
        margin: 50px 0;
        background: $colorBeige;
        color: $colorBlue;
        border-radius: 30px;
        box-shadow: 0 5px 10px 0 black;
        will-change: transform;
        opacity: 0;
        transform: translateY(20%);
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
                border-bottom: solid 2px $colorWhite;
            }
            &Prix {
                color: $colorYellow;
            }
        }
    }
}

</style>