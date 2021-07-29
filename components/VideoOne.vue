<template>
  <div :class="classWithDynamicHeight(entity)">
    <video controls class="min-w-full min-h-full">
      <source :src="firstmp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoOne",
  props: ["mediaEntities"],
  methods: {
    classWithDynamicHeight: function(entity) {
      // at some stage use name=360x360 format to enhance image handling
      // https://pbs.twimg.com/media/E16_0QAUcAUMDBR?format=jpg&name=360x360
      // https://pbs.twimg.com/media/E16_0QAUcAUMDBR.jpg
      console.log(this.calculatedHeight(entity));

      return (
        "h-" +
        this.calculatedHeight(entity) +
        " w-full mt-5 rounded rounded-xl overflow-hidden"
      );
    },
    calculatedHeight: function(entity) {
      const defaultHeight = 68;
      const minHeight = 40;
      const maxHeight = 68;
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
    clicked: function(index) {
      this.clickedIndex = index;
      this.showModal = true;
    },
  },
  computed: {
    entity: function() {
      if (!this.mediaEntities || this.mediaEntities.length == 0) {
        return;
      }

      return this.mediaEntities[0];
    },
    firstmp4: function() {
      if (!this.mediaEntities || this.mediaEntities.length == 0) {
        return;
      }

      const firstMedia = this.mediaEntities[0];
      //TODO: consider bitrate?
      for (let i = 0; i < firstMedia.video_info.variants.length; i++) {
        if (firstMedia.video_info.variants[i].content_type == "video/mp4") {
          return firstMedia.video_info.variants[i].url;
        }
      }
    },
  },
};
</script>
