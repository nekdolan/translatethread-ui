<template>
  <div v-if="entity" class="h-64 w-full mt-5 p-0.5">
    <div class="flex h-full w-full">
      <div
        class="w-1/2 border border-gray-300 rounded-l-lg overflow-hidden p-1"
      >
        <img :src="entity.media_url_https" id="1" />
      </div>
      <div class="flex w-1/2 flex-col ml-0.5">
        <div
          class="h-1/2 border border-gray-300 border-2 overflow-hidden rounded-tr-lg p-1"
        >
          <img :src="entity.media_url_https" id="2" />
        </div>
        <div
          class="h-1/2 border border-gray-300 overflow-hidden rounded-br-lg mt-0.5 p-1"
        >
          <img :src="entity.media_url_https" id="2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageThree",
  props: ["mediaEntities"],
  computed: {
    height: function() {
      if (!this.mediaEntities || this.mediaEntities.length == 0) {
        return;
      }
    },
    entity: function() {
      if (!this.mediaEntities || this.mediaEntities.length == 0) {
        return;
      }

      return this.mediaEntities[0];
    }
  }
};
</script>
