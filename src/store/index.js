import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const initialItems = [
    { text: "Welcome to our ToDo App", completed: false },
    { text: "Press Enter to add a new item", completed: false },
    { text: "Check an item to mark it as completed", completed: true },
    { text: "Hover and click X to delete an item", completed: false },
    { text: "Hope you enjoy!", completed: false }
];
const itemsFromStorage = JSON.parse(localStorage.getItem("todoItems")) || [];

export default createStore({
    state() {
        return {
            items: itemsFromStorage.length ? itemsFromStorage : initialItems,
            filter: null,
            dayMode: false,
        };
    },
    mutations,
    actions,
    getters
});