<template>
  <div class="mainPanel">
      <h1>This is main Component</h1>
      <h3>Designed by {{ name }} </h3>
      Totla colors count {{ colorsTotal }}
        <subComponent :time.sync="timePassed" v-model="name">
            <custom-button>
                <h2 slot="heading">Users Details</h2>
                <make-table slot="table" :persons='persons'></make-table>
                <h3 style="color:red" slot="danger">{{ this.warning }}</h3>
            </custom-button>
        </subComponent>
        <h1>Sub component has been mounted since: {{this.timePassed}} seconds</h1>
      
      
  </div>
</template>

<script>
export default {
name: 'mainComponent',
data() {
    return {
        warning:'Table might not have live data avilable.',
        name: 'Pradip',
        type: 'Table',
        timePassed: 0,
        colors: [
            'red','blue','gold', 'orange', 'indigo', 'purple', 'magenta','skyblue','#0ff'
        ],
        persons: [
            {
                name:'Pradip',
                address: '53 Man Ave, Blair Athol',
                phone: '0426267158'
            },
            {
                name:'Arjun',
                address: '53 Man Ave, Blair Athol',
                phone: '0426267158'
            },
            {
                name:'Prashanta',
                address: '53 Man Ave, Blair Athol',
                phone: '0426267158'
            }
        ]
    }
    
},
computed: {
    colorsTotal() {
        return this.colors.length;
    }
}
}
</script>

<style>

</style>