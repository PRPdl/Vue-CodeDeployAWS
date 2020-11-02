import Vue from 'vue'

Vue.filter('formatCurrency', function(value, symbol){
    return symbol + (value/100).toFixed(2);
  });