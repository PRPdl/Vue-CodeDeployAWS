<template>
  <div class="test">
   
   <span>  <input type="number" v-model="num"/> <button type="submit" v-on:click="numberTotlal = Number(num)">Update</button> </span> 
   <P>Updated 5 Seconds ago- items: {{ oldNumber }}</P>
   <p> Items: {{ number }} </p>
    <p> Total Cost: {{ numberTotlal }}</p>
    <span>Update Occupation: <input type="text" v-model="name.Occupation"/></span>
    <p>Name: {{ name.FirstName }} || Occupation: {{ name.Occupation }}</p>
    <P>Initial Cost: {{ cart.totalCost | formatCurrency('$') }}</P>
    <P>Discount: {{ cart.totalDiscount | formatCurrency('$') }}</P>
    <P>Final Cost: {{ cart.finalCost() | formatCurrency('$') }}</P>
    <p><input type="number" v-model="cart.totalDiscount"/></p>
    <refs></refs>
    <custom-header></custom-header>

  
    
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "test",
  data() {
    return {
     num:null,
     number:[],
     oldNumber:[],
     name: {
       FirstName: 'Pradip',
       LastName: 'Poudel',
       Occupation: '',
     },
     cart: {
       totalCost: 2500000,
       totalDiscount: 1234,
       finalCost: function() {
         return (this.totalCost - this.totalDiscount);
       },
     }
    }
  },
  computed: {
    numberTotlal: {
      get() {
        if(this.number && this.number.length) {
        return this.number.reduce((sum, value) => sum + value);
        }
      },
      set(newValue) {
        
        this.number.push(newValue);
      }
    }
  },
  watch: {
    number() {
      const newNumber = this.number;

      setTimeout(() => {
        this.oldNumber = newNumber;
      }, 5000);
    },

    name: {
      handler(val,oldVal) {
      console.log(val, oldVal);
      },
      deep:true

    }
      
    
  }
  
  
};

</script>
