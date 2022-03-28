<template>
    <div class="buttonNav" @click="buttonAnimation()">
        <div class="buttonNavBarre top"></div>
        <div class="buttonNavBarre mid"></div>
        <div class="buttonNavBarre bottom"></div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: "ButtonNav",
    mounted() {
    },
    methods: {
        buttonAnimation: function() {
            let tl = gsap.timeline();

            tl.to("")
        }
    },
}

</script>

<style scoped lang="scss">

    .buttonNav {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 35px;
        width: 35px;
        margin-right: 3%;
        &Barre {
            background: #f7f6f8;
            height: 3px;
            width: 100%;
            border-radius: 30px;
            transform-origin: right;
            transition: transform 0.3s ease-in;
            &.mid {
                transform: scaleX(0.7);
            }
        }
        &:hover .buttonNavBarre.top{
            transform: rotateZ(-45deg);
        }
        &:hover .buttonNavBarre.mid{
            transform: scaleX(0);
        }
        &:hover .buttonNavBarre.bottom{
            transform: rotateZ(45deg);
        }
    }

</style>