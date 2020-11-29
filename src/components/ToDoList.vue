<template>
  <div class="todo-list">
    <ToDoItem
      v-for="item in items"
      :key="item.text"
      :text="item.text"
      :completed="item.completed"
    />
    <FilterArea />
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem";
import FilterArea from "./FilterArea";

export default {
  components: { ToDoItem, FilterArea },
  computed: {
    items() {
      return this.$store.getters.filteredItems;
    },
  },
};
</script>
