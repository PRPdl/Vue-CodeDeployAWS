<template>
  <div>
    <p class="custom-button">
      <slot name="heading">
        <span class="default-text">Title Not Found!</span>
      </slot>
    </p>
    <hr />
    <slot name="table">
      <span>Table Not Found!</span>
    </slot>
    <slot name="danger">
        <p>No information.</p>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: "",
  },
};
</script>