<template>
  <div class="h-64 w-full mt-5 p-0.5">
    <div
      class="flex h-full w-full"
      v-for="entity in mediaEntities"
      :key="entity.id"
    >
      <img
        class="w-1/2 border border-gray-300 border-2 rounded-l-lg overflow-hidden p-1"
        :src="entity.media_url_https"
        id="1"
      />
      <img
        class="w-1/2 border border-gray-300 border-2 rounded-r-lg ml-1 overflow-hidden p-1"
        :src="entity.media_url_https"
        id="2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageTwo",
  props: ["mediaEntities"],
  computed: {
    height: function() {
      if (!mediaEntities || mediaEntities.length == 0) {
        return;
      }
    }
  }
};
</script>
