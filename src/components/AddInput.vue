<template>
  <form class="input-wrapper" @submit.prevent="addItem">
    <span class="radio" />
    <input
      type="text"
      class="input"
      placeholder="Create a new todo..."
      v-model.trim="newItem"
      aria-label="New item"
    />
    <button class="input-wrapper__button" aria-label="Add item">
      <i class="fas fa-arrow-right" />
    </button>
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
