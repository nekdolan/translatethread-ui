<template>
  <div class="h-full mt-1 lg:mt-4">
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
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Tweet,
    Summary
  },
  data() {
    return {
      threadObject: {}
    };
  },
  mounted: function() {
    // Ensure the browser navigates to the correct place in the page after
    // everything has be rehydrated.
    const id = this.$route.hash.replaceAll("#", "");
    this.$nextTick(() => this.scrollFix('[id="' + id + '"]'));
  },
  beforeMount: function() {
    this.fetchTranslatedThread(this.$route.params.id)
      .then(res => {
        this.threadObject = res.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  methods: {
    ...mapActions({ fetchTranslatedThread: "thread/fetchTranslatedThread" }),
    scrollFix: function(hash) {
      if (hash && document.querySelector(hash)) {
        location.href = hash;
      }
    }
  },
  computed: {
    ...mapGetters("thread", ["getTranslatedThread"])
  }
};
</script>
