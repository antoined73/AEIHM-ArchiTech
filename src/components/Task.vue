<template>
   <div class="box">
       <div class="field is-grouped">
            <label class="control checkbox is-large">
                <input @click="$emit('checkboxChecked')"  type="checkbox" class="is-large">
            </label>
            <p class="control">
                <strong>{{this.task.title}}</strong>
                <br>
                {{this.task.body}}
            </p>
       </div>
    </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
        task: {
            type: Object,
            required: true
        }
  }
}
</script>