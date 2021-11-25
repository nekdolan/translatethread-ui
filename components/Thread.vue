<template>
  <div class="h-full mt-1 lg:mt-4 items-right">
    <Summary :summary="threadObject.Summary" />
    <Tweet
      v-for="tweet in threadObject.Thread"
      :tweet="tweet"
      :key="tweet.ID"
    />
  </div>
</template>

<script>
import Tweet from "~/components/Tweet.vue";
import Summary from "~/components/Summary.vue";

export default {
  components: {
    Tweet,
    Summary,
  },
  props: {
    threadObject: {
      type: Object,
      required: true
    }
  },
  mounted: function() {
    // Ensure the browser navigates to the correct place in the page after
    // everything has be rehydrated.
    const id = this.$route.hash.replaceAll("#", "");
    this.$nextTick(() => this.scrollFix('[id="' + id + '"]'));
  },
  methods: {
    scrollFix: function(hash) {
      if (hash && document.querySelector(hash)) {
        location.href = hash;
      }
    },
  },
};
</script>
