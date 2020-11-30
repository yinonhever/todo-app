<template>
  <div class="todo-list">
    <Draggable
      v-model="items"
      item-key="text"
      tag="transition-group"
      :component-data="{ tag: 'div', name: 'flip-list', type: 'transition' }"
      ghostClass="ghost"
      @start="isDragging = true"
      @end="isDragging = false"
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

<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}
</style>
