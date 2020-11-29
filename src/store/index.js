import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const initialItems = [
    { text: "Welcome to our ToDo App", completed: false },
    { text: "To add a new item, type it above and press Enter", completed: false },
    { text: "Check an item to mark it as completed", completed: false },
    { text: "Hover and click on the X to delete an item", completed: false },
    { text: "Hope you enjoy!", completed: false },
];
const itemsFromStorage = JSON.parse(localStorage.getItem("todoItems")) || [];

export default createStore({
    state() {
        return {
            items: itemsFromStorage.length > 0 ? itemsFromStorage : initialItems,
            filter: null,
            dayMode: false,
        };
    },
    mutations,
    actions,
    getters
});