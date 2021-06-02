<template>
  <div :class="classWithDynamicHeight(entity)">
    <img
      v-on:click="showModal = true"
      :src="entity.media_url_https"
      class="min-w-full min-h-full"
    />
    <modal
      v-if="showModal"
      :mediaEntities="mediaEntities"
      v-on:close="showModal = false"
    />
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "ImageOne",
  props: ["mediaEntities"],
  components: { Modal },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    classWithDynamicHeight: function(entity) {
      // at some stage use name=360x360 format to enhance image handling
      // https://pbs.twimg.com/media/E16_0QAUcAUMDBR?format=jpg&name=360x360
      // https://pbs.twimg.com/media/E16_0QAUcAUMDBR.jpg

      return (
        "h-" +
        this.calculatedHeight(entity) +
        " w-full mt-5 border border-gray-300 rounded rounded-lg p-0.5 overflow-hidden"
      );
    },
    calculatedHeight: function(entity) {
      const defaultHeight = 72;
      const minHeight = 40;
      const maxHeight = 72;
      if (!entity || !entity.sizes || !entity.sizes.large) {
        return defaultHeight;
      }

      //512 is our width
      //how about mobile
      const factor = entity.sizes.large.w / 512;
      var approxHeight = entity.sizes.large.h;
      if (factor > 1) {
        approxHeight = entity.sizes.large.h / factor;
      }

      const calculatedHeight = Math.floor(approxHeight / 16) * 4;
      if (calculatedHeight < minHeight) {
        return minHeight;
      }

      if (calculatedHeight > maxHeight) {
        return maxHeight;
      }

      return calculatedHeight;
    },
  },
  computed: {
    entity: function() {
      if (!this.mediaEntities || this.mediaEntities.length == 0) {
        return;
      }

      return this.mediaEntities[0];
    },
  },
};
</script>
