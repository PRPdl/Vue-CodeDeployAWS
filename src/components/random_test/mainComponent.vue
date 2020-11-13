<template>
  <div>
      
      <h1>This is main Component</h1>
      <h3>Designed by {{ name }} </h3>
      <p><router-link to="/user/Pradip">User Detail</router-link></p>

            <custom-button v-slot="{ secondaryDetails }">
                   <p v-if="secondaryDetails"> {{ secondaryDetails.address }} || {{secondaryDetails.occupation }} </p>
            </custom-button>

            <p>Selected Option: {{type }} </p>
            <select-option ref="option" ></select-option>

            <color-bar :key="num" v-for="(num, i) in numbers" @click.native="numbers.splice(i,1)">
            {{ num }}
            </color-bar>

            <render-component></render-component>

        
  </div>
</template>

<script>
import selectOption from '@/components/base_components/selectOption.vue';
import colorBar from '@/components/base_components/colorBar.vue';


import Vue from 'vue';


Vue.component('render-component', {
render() {
    const props = {
        href: "http://www.arjunpaudel.com"
    };
    return (
        
       <div>
       <button onClick={this.handleEvent}>Click me! </button>
       <p> You have clicked me {this.counter} times</p>
       <MyTest/>
       <a class="hello"{...props}> Arjun Paudel</a>

       </div>
    )

},

data () {
    return {
        counter : 0,
    }
},
methods: {
    handleEvent() {
        this.counter += 1; 
    }
}

});

export default {
    
name: 'mainComponent',
data() {
    return {
       name: 'Pradip',
        type: '',
        numbers: ['one', 'two', 'three', 'four', 'five'],
        netData: '',
    }
    
},

methods: {
    optionUpdate(value){
        this.type = value;
    }
},
mounted() {
    
    
},
components: {
    selectOption, colorBar
},

}

</script>
