<template>
  <div class="todo-list__filter-area">
    <span class="todo-list__count">{{ itemsCount }} items left</span>
    <div class="todo-list__filters">
      <span class="todo-list__filter" @click="filterAll">All</span>
      <span :class="activeFilterClasses" @click="filterActive">Active</span>
      <span :class="completedFilterClasses" @click="filterCompleted">
        Completed
      </span>
    </div>
    <span class="todo-list__clear" @click="clearCompleted">
      Clear Completed
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    itemsCount() {
      return this.$store.getters.itemsCount;
    },
    currentFilter() {
      return this.$store.getters.currentFilter;
    },
    activeFilterClasses() {
      return this.currentFilter === "active"
        ? "todo-list__filter todo-list__filter--active"
        : "todo-list__filter";
    },
    completedFilterClasses() {
      return this.currentFilter === "completed"
        ? "todo-list__filter todo-list__filter--active"
        : "todo-list__filter";
    },
  },
  methods: {
    filterAll() {
      this.$store.dispatch("setFilter", null);
    },
    filterActive() {
      this.$store.dispatch("setFilter", "active");
    },
    filterCompleted() {
      this.$store.dispatch("setFilter", "completed");
    },
    clearCompleted() {
      this.$store.dispatch("clearCompleted");
    },
  },
};
</script>
