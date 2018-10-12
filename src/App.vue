<template>
  <div id="app">
    <section class="hero is-primary">
      <div class="hero-body">
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
      <div class="hero-foot is-hidden-desktop">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active"><a>TodoList</a></li>
              <li><a>Plan</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <mq-layout mq="mobile">
      <div class="column is-one-third-widescreen">
          <TodoList/>
        </div>
    </mq-layout>
    <mq-layout mq="mobile+">
      <section class="columns is-gapless is-desktop">
        <div class="column is-one-third-widescreen">
          <TodoList/>
        </div>
        <div class="column">
          <MapDisplayer/>
        </div>
    </section>
    </mq-layout>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import MapDisplayer from './components/MapDisplayer.vue'


export default {
  name: 'app',
  components: {
    TodoList,
    MapDisplayer
  }
}
</script>

<style>
.is-fullheight{
  height: 100%;

}
</style>
