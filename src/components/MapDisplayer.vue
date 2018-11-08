<template>
<div v-if="show" class="is-fullheight">
     <l-map
      ref="mymap"
      :min-zoom="minZoom"
      :crs="crs">
      <l-image-overlay
        :url="url"
        :bounds="bounds"/>
      <l-marker
        v-for="marker in markers"
        :lat-lng="marker"
        :key="marker.id">
        <l-popup :content="getMarkerContent(marker)"/>
      </l-marker>
      <l-polyline :lat-lngs="travel"/>
</l-map>
</div>
</template>

<script>
import L from 'leaflet';
import { LMap, LImageOverlay, LMarker, LPopup, LPolyline } from 'vue2-leaflet';

import { Fullscreen } from "leaflet-fullscreen";

import Image from "../assets/plan1.jpg";

export default {
  name: 'MapDisplayer',
  components: {
    LMap,
    LImageOverlay,
    LMarker,
    LPopup,
    LPolyline
  },
  props : {
      show : Boolean
  },
  data() {
    return {
      map: null,
      url: Image,
      bounds: [[0, 0], [1021.5, 1500]],
      minZoom: -2,
      crs: L.CRS.Simple,
      travel: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      if(this.show){
        this.map = this.$refs.mymap.mapObject;
        this.map.setView([500, 700], 0);
        this.map.addControl(new L.Control.Fullscreen());
      }
    })
  },
  computed : {
    markers(){
      return this.$store.getters.getMarkersOfUnfinishedTasksForSelectedUser;
    }
  },
  methods : {
    getMarkerContent(marker){
      const content = this.$store.getters.getTaskLinkedToMarker(marker).title;
      return content;
    }
  }
}
</script>