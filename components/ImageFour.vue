<template>
  <div v-if="mediaEntities" class="h-64 w-full mt-5 p-0.5 pr-2 lg:pr-0">
    <div class="flex h-full w-full">
      <div class="flex w-1/2 flex-col ml-0.5">
        <div class="h-1/2 border border-gray-300 overflow-hidden rounded-tl-xl">
          <img
            class="h-full w-full"
            v-on:click="clicked(0)"
            :src="mediaEntities[0].media_url_https"
            id="1"
          />
        </div>
        <div
          class="h-1/2 border border-gray-300 overflow-hidden rounded-bl-xl mt-0.5"
        >
          <img
            class="h-full w-full"
            v-on:click="clicked(1)"
            :src="mediaEntities[1].media_url_https"
            id="2"
          />
        </div>
      </div>

      <div class="flex w-1/2 flex-col ml-0.5">
        <div class="h-1/2 border border-gray-300 overflow-hidden rounded-tr-xl">
          <img
            class="h-full w-full"
            v-on:click="clicked(2)"
            :src="mediaEntities[2].media_url_https"
            id="3"
          />
        </div>
        <div
          class="h-1/2 border border-gray-300 overflow-hidden rounded-br-xl mt-0.5"
        >
          <img
            class="h-full w-full"
            v-on:click="clicked(3)"
            :src="mediaEntities[3].media_url_https"
            id="4"
          />
        </div>
      </div>
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
  name: "ImageFour",
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
      if (!this.mediaEntities || this.mediaEntities.length == 0) {
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
