<template>
  <div id="app">
    <h1>Jquery To Do List</h1>
    <p>Simple Todo List with adding and filter by diff status.</p>
    <input class="input-text" type="text" name="listInfo" id="listInfo" />
    <button @click="addList">add</button>
    <ToDoList></ToDoList>
    <ul id="filters">
      <li>
        <a href="#" data-filter="all">ALL</a>
      </li>
      <li>
        <a href="#" data-filter="active">Active</a>
      </li>
      <li>
        <a href="#" data-filter="complete" v-on:click="clear">Complete</a>
      </li>
    </ul>
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList";

export default {
  name: "app",
  components: {
    ToDoList
  },
  data() {
    return {
      myListObject: {}
    };
  },
  methods: {
    addList() {
      let message = document.getElementById("listInfo").value;
      this.myListObject = {
        info: message,
        type: 0
      };
      this.$store.commit("pushList", this.myListObject);
    }
  }
};
</script>