<template>
  <header :class="classes" />
</template>

<script>
export default {
  computed: {
    dayMode() {
      return this.$store.getters.dayMode;
    },
    classes() {
      return this.dayMode ? "header light" : "header";
    },
  },
};
</script>
