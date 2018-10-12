<template>
    <div class="content">
        <div id="todolist"  class="notification">
            <h1 class="title has-text-centered">Todo list</h1>
            <TaskForm 
                v-on:addButtonPressed="addTodo($event)"
                @keydown.enter="addTodo"
            />
            <div id="list">
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
            { id: nextTodoId++, title:"my first task", body:"some precisions on the message"},
            { id: nextTodoId++, title:"my second task", body:"some precisions on the message 2"},
            { id: nextTodoId++, title:"my third task", body:"some precisions on the message 3"},
            { id: nextTodoId++, title:"my third task", body:"some precisions on the message 3"},
            { id: nextTodoId++, title:"my third task", body:"some precisions on the message 3"},
            { id: nextTodoId++, title:"my third task", body:"some precisions on the message 3"}
        ]
      }
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

    #todollist {
        height: 100%;
        overflow-y: auto;
        flex-direction: column;
    }

    .is-fullheight{
        height: 100%;
    }
</style>
