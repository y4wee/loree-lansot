<template>
    <div class="title">
        <div class="titleHeight"> {{ text }} </div>
        <div class="titleContainer titleContainerLeft">
            <div class="titleContainerLeftText"> {{ text }} </div>
        </div>
        <div class="titleContainer titleContainerRight">
            <div class="titleContainerRightText"> {{ text }} </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Title",
    props: ["text"],
    mounted() {
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
$colorYellow: #c4721c;

.title {
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 50px 0;
    font-family: "Ballet Harmony", sans-serif;
    font-size: 5rem;
    text-align: center;
    &Height {
        color: transparent;
    }
    &Container {
        position: absolute;
        display: flex;
        align-items: center;
        width: 50%;
        min-height: 100%;
        overflow: hidden;
        &Left {
            left: 0;
            &Text {
                position: absolute;
                right: 0;
                width: 200%;
                transform: translateX(50%);
                color: $colorYellow;
            }
        }
        &Right {
            right: 0;
            &Text {
                position: absolute;
                left: 0;
                width: 200%;
                transform: translateX(-50%);
                color: $colorBlue;
            }
        }
    }
}

</style>