export default {
    addItem(state, payload) {
        state.items.push(payload);
    },
    toggleCompleted(state, index) {
        state.items[index].completed = !state.items[index].completed;
    },
    deleteItem(state, payload) {
        state.items = state.items.filter(item => item.text !== payload);
    },
    clearCompleted(state) {
        state.items = state.items.filter(item => !item.completed);
    },
    setFilter(state, payload) {
        state.filter = payload;
    },
    clearFilter(state) {
        state.filter = null;
    },
    setDayMode(state) {
        state.dayMode = !state.dayMode;
    }
};