<template>
  <div>
    <div class="container">
      <add-todo />
      <filter-todo />
      <h3>ToDo</h3>
      <div class="legend">
        <span class="aa d-none d-sm-flex">Double click to mark as complete</span>
        <span> <span class="incomplete-box"></span> = Incomplete </span>
        <span> <span class="complete-box"></span> = Complete </span>
      </div>
      <div
       class="todo" :key="todo.id" 
      @dblclick="onDblClick(todo)" 
      v-for="todo in allTodos"
      v-bind:class="{'is-complete': todo.completed}">
        {{ todo.title }}
        <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "./AddTodo.vue";
import FilterTodo from "./FilterTodo.vue";

export default {
  name: "todos",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {

      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }

      this.updateTodo(updTodo);
    }
  
  },
  computed: mapGetters(["allTodos"]),

  created() {
    this.fetchTodos();
  },
  components: {
    AddTodo,
    FilterTodo,
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: rgb(231, 136, 136);
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}</style
>>
