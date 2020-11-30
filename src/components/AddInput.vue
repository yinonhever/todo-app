<template>
  <form class="input-wrapper" @submit.prevent="addItem">
    <span class="radio" />
    <input
      type="text"
      class="input"
      placeholder="Create a new todo..."
      v-model.trim="newItem"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
    };
  },
  methods: {
    addItem() {
      this.$store.dispatch("addItem", this.newItem);
      this.newItem = "";
    },
  },
};
</script>
