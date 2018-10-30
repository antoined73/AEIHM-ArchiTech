<template>
    <section v-if="show" ref="header" class="hero is-primary invisible-on-landscape">
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
              <li :class="{ 'is-active': !planIsActive}"><a @click="btnTodo()">TodoList</a></li>
              <li :class="{ 'is-active': planIsActive}"><a @click="btnPlan()">Plan</a></li>
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
    data() {
      return{
        show : true,
        planIsActive: false
      }
    },
    methods : {
      btnPlan(){
        this.$emit('btnPlanClicked');
        this.planIsActive = true;
      },
      btnTodo(){
        this.$emit('btnTodoClicked');
        this.planIsActive = false;
      },
      updateShowHideHeader() {
        if(window.innerWidth < 1023){
          if (window.innerHeight > window.innerWidth) {
            // alert("You are now in portrait");
            this.show = true;
          } else {
            // alert("You are now in landscape");
            this.show = false;
          }
        }
      }
    },
    created(){
      window.addEventListener('resize', this.updateShowHideHeader);
    },
    mounted(){
      this.planIsActive = this.planActive;
    }
    
}
</script>