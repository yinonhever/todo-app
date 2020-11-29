<template>
  <main :class="classes">
    <slot />
  </main>
</template>

<script>
export default {
  computed: {
    dayMode() {
      return this.$store.getters.dayMode;
    },
    classes() {
      return this.dayMode ? "layout light" : "layout";
    },
  },
};
</script>
