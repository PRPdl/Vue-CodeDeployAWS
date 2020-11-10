<template>
  <div>
    <slot :secondaryDetails="customer.secondaryDetails">
      <P :key="info" v-for="info in customer.primaryDetails">
        {{ info }}
      </P>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {
        primaryDetails: {
          fName: "Pradip",
          lName: "Poudel",
          age: 25
        },
        secondaryDetails: {
          address: '53 Manual Ave',
          occupation: 'None'
        }

      },
    };
  },
};
</script>