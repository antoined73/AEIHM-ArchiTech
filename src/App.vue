<template>
<div class="is-fullheight">
    <mq-layout mq="mobile"  class="is-fullheight">
      <Header :planActive="showPlan" :showmenu="true" @btnPlanClicked="toggleToPlan()" @btnTodoClicked="toggleToList()"/>
      <div class="column fullColumn is-one-third-widescreen is-fullheight">
        <TodoList :show="showTodo"/>
        <MapDisplayer :show="showPlan"/>
      </div>
    </mq-layout>
    <mq-layout mq="tablet"  class="is-fullheight">
      <Header :planActive="showPlan" :showmenu="true" @btnPlanClicked="toggleToPlan()" @btnTodoClicked="toggleToList()"/>
        <div class="column fullColumn is-one-third-widescreen is-fullheight">
          <TodoList :show="showTodo"/>
          <MapDisplayer :show="showPlan"/>
        </div>
    </mq-layout>
    <mq-layout mq="laptop+" class="is-fullheight">
      <Header ref="desktopHeader"/>
      <section ref="desktopEnv" class="columns is-gapless">
        <div class="column is-one-third-widescreen is-fullheight">
          <TodoList :show="true" class="is-fullheight"/>
        </div>
        <div class="column">
          <MapDisplayer :show="true"/>
        </div>
      </section>
    </mq-layout>
</div>
</template>

<script>
import Header from './components/Header.vue'
import TodoList from './components/TodoList.vue'
import MapDisplayer from './components/MapDisplayer.vue'


export default {
  name: 'app',
  components: {
    TodoList,
    MapDisplayer,
    Header
  },
  data() {
    return {
      showPlan : false,
      showTodo : true
    }
  },
  methods : {
    toggleToPlan() {
      this.showPlan = true;
      this.showTodo = false;
    },
    toggleToList() {
      this.showPlan = false;
      this.showTodo = true;
    }
  },
  mounted (){
    this.$nextTick(() => {
      if(this.$refs.desktopEnv != null){
        
        const h = window.innerHeight - this.$refs.desktopHeader.$el.clientHeight;
        this.$refs.desktopEnv.style.height = h+ "px";
      }
    });

    // Detect Device Type
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // When ready, auto-scroll 1px to hide URL bar
        window.addEventListener("load", function () {
            // Set a timeout...
            setTimeout(function () {
                // Hide the address bar!
                window.scrollTo(0, 1);
            }, 0);
        });
    }
  }
}
</script>

<style>

.compact {
  padding: 1.5rem 1.5rem !important;
}

.is-fullheight {
  height: 100%;
}

.fullColumn{
  padding: 0 0 0 0 !important;
}
</style>
