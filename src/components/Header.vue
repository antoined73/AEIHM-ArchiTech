<template>
    <section  ref="header" class="hero is-primary">
      <div class="hero-body compact">
        <div class="container">
          <h1 class="title is-size-4-touch">
            ArchiTech
          </h1>
          <h2 class="subtitle is-size-7-touch">
            Being more efficient, in all conditions.
          </h2>
        </div>
      </div>
          <!-- Hero footer: will stick at the bottom -->
      <div v-if="showmenu" class="hero-foot">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <li :class="{ 'is-active': !planActive}"><a @click="btnTodo()">TodoList</a></li>
              <li :class="{ 'is-active': planActive}"><a @click="btnPlan()">Plan</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
</template>

<script>
export default {
    props : {
        showmenu : Boolean,
        planActive : Boolean
    },
    methods : {
      btnPlan(){
        this.$emit('btnPlanClicked');
        this.planActive = true;
      },
      btnTodo(){
        this.$emit('btnTodoClicked');
        this.planActive = false;
      }
    }
}
</script>

