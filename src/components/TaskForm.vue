<template>
    <div class="field is-grouped">
        <p class="control is-expanded">
            <input v-model="newTaskTitle" class="input is-large" type="text" placeholder="Add a todo">
        </p>
        <p class="control">
            <a class="button is-success is-large" @click="$emit('addButtonPressed', newTaskTitle)">
            Add
            </a>
        </p>
    </div>
</template>

<script>

export default {
  name: 'TaskForm',
  data () {
      return{
          newTaskTitle : ''
      }
  }
}
</script>