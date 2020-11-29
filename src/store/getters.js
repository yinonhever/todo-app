export default {
    filteredItems(state) {
        localStorage.setItem("todoItems", JSON.stringify(state.items));

        if (state.filter === "completed")
            return state.items.filter(item => item.completed);
        else if (state.filter === "active")
            return state.items.filter(item => !item.completed);
        else return state.items;
    },
    currentFilter(state) {
        return state.filter;
    },
    itemsCount(state) {
        return state.items.filter(item => !item.completed).length;
    },
    dayMode(state) {
        return state.dayMode;
    }
};