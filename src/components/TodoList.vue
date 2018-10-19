<template>
    <div v-if="show" class="content is-fullheight">
        <div class="notification todolist">
            <h1 class="title has-text-centered">Todo list</h1>
            <TaskForm 
                v-on:addButtonPressed="addTodo($event)"
                @keydown.enter="addTodo"
            />
            <div class="list">
                <Task
                    v-for="t in tasks"
                    :key="t.id"
                    :task="t"
                    v-on:checkboxChecked="removeTodo(t.id)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Task from "./Task.vue"
import TaskForm from "./TaskForm.vue"

let nextTodoId = 1;

export default {
  name: 'TodoList',
  components: {
    Task,
    TaskForm
  },
  data () {
      return {
          newTodoText: '',
          tasks: [
            { id: nextTodoId++, title:"Parquet à poser", body:"Dans le salon"},
            { id: nextTodoId++, title:"Carrelage à poser", body:"Dans la cuisine"},
            { id: nextTodoId++, title:"Mur à casser", body:"Dans le salon"},
            { id: nextTodoId++, title:"Raccorder les eaux", body:"Dans les toilettes"}
        ]
      }
  },
  props : {
      show : Boolean
  },
  methods: {
    addTodo (text) {
        const trimmedText = text.trim()
        if (trimmedText) {
            this.tasks.push({
                id: nextTodoId++,
                title: trimmedText
            })
        }
    },
    removeTodo (idToRemove) {
        this.tasks = this.tasks.filter(task => {
            return task.id !== idToRemove
        });
    }
  }
}
</script>

<style>

    .todolist {
        height: 100%;
        overflow-y: auto;
    }

    .is-fullheight{
        height: 100%;
    }

    .list:last-child{
        margin-bottom: 50px; 
    }
</style>
