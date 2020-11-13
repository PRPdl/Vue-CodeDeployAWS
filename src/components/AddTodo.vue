<template>
    <div class="addTodo">
        <h3>Add Todo</h3>
        <div class="add">
            <form id="frm" @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo">
                <button type="submit"> Submit </button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'Addtodo',
    data() {
        return {
            title: null
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        
        onSubmit(e){
            e.preventDefault();
            if(this.title != null) {
            this.addTodo(this.title);
            this.title= null;
            var frm = document.getElementById('frm');
            frm.reset();
            return false
            }
        }
    }
}
</script>

<style scoped>
    form {
  display: flex;
}
input[type="text"] {
  flex: 8;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 4;
  background: #2dc581;
  color: rgb(218, 28, 28);
  border: 1px #41b883 solid;
  cursor: pointer;
}
button {
    background-color: #41b883;
}
</style>