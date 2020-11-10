<template>
    <div>
        <select name="option" id="option" v-model="optionValue"  @change="optionChange">
            <option value="null" disabled>Select Card</option>
            <option value="AXPS">American XPS</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
        </select>
    </div>
</template>

<script>
export default {
    data () {
        return {
        optionValue: null,
        name: 'Pradip'
        }
    },
    methods: {
        optionChange() {
            this.$emit('selectOption', this.optionValue);
        }
    }
}
</script>