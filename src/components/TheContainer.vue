<template>
  <main class="container">
    <ContainerHeader />
    <AddInput />
    <ToDoList />
    <ContainerFooter />
  </main>
</template>

<script>
import ContainerHeader from "./ContainerHeader";
import AddInput from "./AddInput";
import ToDoList from "./ToDoList";
import ContainerFooter from "./ContainerFooter";

export default {
  components: { AddInput, ToDoList, ContainerHeader, ContainerFooter },
};
</script>
