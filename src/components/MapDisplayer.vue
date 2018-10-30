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
        v-for="star in stars"
        :lat-lng="star"
        :key="star.name">
        <l-popup :content="star.name"/>
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
      stars: [
        { name: 'Parquet à poser', lng: 300, lat: 300 },
        { name: 'Carrelage à poser', lng: 500, lat: 700 },
        { name: 'Mur à casser', lng: 1040, lat: 300 },
        { name: 'Raccorder les eaux', lng: 1250, lat: 440 },
      ],
      travel: []

      // travel: [[145.0, 175.2], [8.3, 218.7]]
    }
  },
  mounted () {
    this.$nextTick(() => {
      if(this.show){
        this.map = this.$refs.mymap.mapObject;
        this.map.setView([500, 700], 0);
        this.map.addControl(new L.Control.Fullscreen());
      }
        // this.map.fitBounds(bounds);
    })
  },
}
</script>