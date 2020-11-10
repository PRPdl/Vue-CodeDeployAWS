<template>
  <div class="subComponent">
     
    <span>Email: <input type="text" :value="value" @input="handleInput"></span>
    <p>{{ value }}</p>

  </div>
</template>

<script>
export default {
  name: "subComponent",
  data() {
    return {};
  },
  props: {
    time: '',
    value:{
      type: String,
      required: true
    }
  },
  mounted()  {
    setInterval(()=>{
      this.$emit('update:time', this.time +1);
    },1000);
  },
  methods: {
    handleInput(e){
        const value = e.target.value.toLowerCase();

        if(value !== e.target.value){
          e.target.value = value;
        }

       this.$emit('input', value);
    }
  }

};
</script>
