<template>
  <div class="container__header">
    <h1 class="container__logo">Todo</h1>
    <img
      class="container__icon"
      :src="icon"
      alt="header-icon"
      @click="toggleDayMode"
    />
  </div>
</template>

<script>
import iconMoon from "../images/icon-moon.svg";
import iconSun from "../images/icon-sun.svg";

export default {
  computed: {
    dayMode() {
      return this.$store.getters.dayMode;
    },
    icon() {
      return this.dayMode ? iconMoon : iconSun;
    },
  },
  methods: {
    toggleDayMode() {
      this.$store.dispatch("toggleDayMode");
    },
  },
};
</script>
