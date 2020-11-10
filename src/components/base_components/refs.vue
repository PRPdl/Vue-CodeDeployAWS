
<template>
  <div class="refs">
    <h2>This is for the refs component!</h2>
    <p v-for="car in 4" v-bind:key="car" ref="car">I am car number {{ car }}</p>
    <P>Yo have counted {{ this.counter }} times.</P>
    <input @keyup.enter="createNewSubmit" v-model="text" type="text" ref="input" />
    <p>{{ this.text }}</p>
    <button @click="createNewSubmit">Counter++</button>
    <p><a href="#" @click.prevent="handleClick">www.noevil.com</a></p>
    <p v-blink>This should blink.</p>
    <button @click="divVisible = !divVisible">Toggle visibility</button>
    
  </div>
</template>


<script>


/* eslint-disable */

export default {
  name: "refs",
  data() {
    return {
        text:'',
      counter: 0,
      divVisible: true,
    };
  },
  methods: {
    createNewSubmit() {
      event.preventDefault();
      this.counter++;
      console.log(this.$refs.car);
    },
    handleClick() {
      event.preventDefault();
    },
  },
  directives: {
    blink: (el) => {
      let isVisible = true;
      setInterval(() => {
        isVisible = !isVisible;
        el.style.visibility = isVisible ? "visible" : "hidden";
      }, 1000);
    },
  },
};
</script>