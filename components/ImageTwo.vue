<template>
  <div class="h-64 w-full mt-5 p-0.5">
    <div class="flex h-full w-full">
      <img
        v-on:click="clicked(0)"
        class="w-1/2 border border-gray-300 border-2 rounded-l-lg overflow-hidden"
        :src="mediaEntities[0].media_url_https"
        id="1"
      />
      <img
        v-on:click="clicked(1)"
        class="w-1/2 border border-gray-300 border-2 rounded-r-lg ml-0.5 overflow-hidden"
        :src="mediaEntities[1].media_url_https"
        id="2"
      />
    </div>
    <modal
      v-if="showModal"
      :mediaEntities="mediaEntities"
      v-on:close="showModal = false"
      :clickedIndex="clickedIndex"
    />
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "ImageTwo",
  props: ["mediaEntities"],
  components: { Modal },
  data() {
    return {
      showModal: false,
      clickedIndex: -1,
    };
  },
  computed: {
    height: function() {
      if (!mediaEntities || mediaEntities.length == 0) {
        return;
      }
    },
  },
  methods: {
    clicked: function(index) {
      this.clickedIndex = index;
      this.showModal = true;
    },
  },
};
</script>
