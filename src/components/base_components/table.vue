<template>
  <div>
      <p>Active Since {{timePassedChange}}</p>
       <table>
           <tr>
               <th>Name</th>
               <th>Address</th>
               <th>Phone</th>
           </tr>
           <tr :key="idx" v-for="(person,idx) in persons">
               <td :key='value' v-for="value in person">{{ value }}</td>
           </tr>
       </table>
  </div>
</template>

<script>
export default {
    name:'customTable',
    data() {
        return {
            timePassed: 500
        }
    },
props: {
    persons: Array,

},
created() {
    setInterval(() => {
        this.timePassed++
    }, 1000);
},
computed: {
    timePassedChange(){
        if(this.timePassed < 60) {
            return this.timePassed + ' seconds';
        }
        else {
            const minute = Math.floor(this.timePassed/60);
            const seconds = (this.timePassed - (minute*60));
            return minute + ' minutes ' + seconds + ' seconds';
        }
    }
}
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

</style>