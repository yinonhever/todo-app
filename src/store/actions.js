export default {
    addItem(context, payload) {
        if (payload && !context.state.items.find(item => item.text === payload)) {
            const newItem = { text: payload, completed: false };
            context.commit("addItem", newItem);
        }
    },
    toggleCompleted(context, payload) {
        const index = context.state.items.findIndex(item => item.text === payload);
        context.commit("toggleCompleted", index);
    },
    deleteItem(context, payload) {
        context.commit("deleteItem", payload);
    },
    clearCompleted(context) {
        context.commit("clearCompleted");
    },
    setFilter(context, payload) {
        context.commit("setFilter", payload);
    },
    reorderList(context, payload) {
        context.commit("reorderList", payload);
    },
    toggleDayMode(context) {
        context.commit("setDayMode");
    }
};