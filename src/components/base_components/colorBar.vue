<template>
    <p :style="{ backgroundColor: color }">
        <slot>Default</slot>
    </p>
</template>

<script>
const randomColor = () => `hsl(${Math.floor(Math.random() * 360)}, 75%, 85%)`;

export default {
    data () {
        return {
            color: randomColor()
        }
    }
}
</script>