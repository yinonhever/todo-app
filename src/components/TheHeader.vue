<template>
  <header :class="classes">
    <div class="header__bg header__bg--dark" />
    <div class="header__bg header__bg--light" />
  </header>
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
