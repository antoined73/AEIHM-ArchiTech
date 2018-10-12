<template>
<div>
    <!-- <canvas v-el:myCanvas/> -->
    <figure class="image is-5by3">
        <img v-el:img src="../assets/plan1.jpg" />
    </figure>
</div>
</template>

<script>
import Task from "./Task.vue"
import TaskForm from "./TaskForm.vue"

export default {
  name: 'MapDisplayer',
  components: {
    Task,
    TaskForm
  },
  mounted(){

        this.$$.myCanvas.style.position = "absolute";
        this.$$.myCanvas.style.left = this.$el.img.offsetLeft + "px";
        this.$$.myCanvas.style.top = this.$el.img.offsetTop+ "px";

        var ctx = this.$h.myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(250, 210, 200, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#00ff00';
        ctx.stroke();
  },
  data () {
      return {
          image : "'../assets/plan1.jpg'"
      }
  }
}
</script>