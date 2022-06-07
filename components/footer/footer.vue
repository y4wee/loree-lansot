<template>
    <div class="footer">

        <Envelope />
        <div class="footerCopyright">
            ©{{ date }}
        </div>
    </div>
</template>

<script>
import Envelope from './envelope.vue';

export default {
    name: "Footer",
    components: { Envelope },
    computed: {
        date: function() {
            return new Date().getFullYear()
        }
    }
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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $colorBlue;
    &Copyright {
        color: $colorWhite;
    }
}

</style>