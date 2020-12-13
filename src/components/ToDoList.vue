<template>
  <div class="todo-list">
    <Draggable
      v-model="items"
      item-key="text"
      :animation="200"
      :disabled="false"
      ghostClass="ghost"
    >
      <template #item="{element}">
        <ToDoItem :text="element.text" :completed="element.completed" />
      </template>
    </Draggable>
    <FilterArea />
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import ToDoItem from "./ToDoItem";
import FilterArea from "./FilterArea";

export default {
  components: { ToDoItem, FilterArea, Draggable },
  computed: {
    items: {
      get() {
        return this.$store.getters.filteredItems;
      },
      set(value) {
        this.$store.dispatch("reorderList", value);
      },
    },
  },
};
</script>

<style lang="scss">
.ghost {
  opacity: 0.5;
  background-color: rgba(#484b6a, 0.5);
}
</style>
