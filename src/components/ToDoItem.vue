<template>
  <div :class="classes">
    <span class="todo-item__radio" @click="toggleCompleted">
      <img
        v-if="completed"
        class="todo-item__check"
        src="../images/icon-check.svg"
        alt="completed"
      />
    </span>
    <p class="todo-item__text" @click="toggleCompleted">{{ text }}</p>
    <img
      class="todo-item__delete"
      src="../images/icon-cross.svg"
      alt="delete"
      @click="deleteItem"
    />
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    completed: Boolean,
  },
  computed: {
    classes() {
      return this.completed ? "todo-item completed" : "todo-item";
    },
  },
  methods: {
    toggleCompleted() {
      this.$store.dispatch("toggleCompleted", this.text);
    },
    deleteItem() {
      this.$store.dispatch("deleteItem", this.text);
    },
  },
};
</script>
