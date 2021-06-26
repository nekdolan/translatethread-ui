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
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Tweet,
    Summary,
  },
  data() {
    return {
      threadObject: {},
      title: "Translated Thread",
      authorHandle: "",
    };
  },
  head() {
    return {
      title: this.title,
      link: [
        {
          rel: "icon",
          href: "/favicon.svg",
          type: "image/x-icon",
        },
      ],
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "content-type",
          "http-equiv": "Content-type",
          content: "text/html; charset=UTF-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "summary_large_image",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: `https://api.translatethread.com/${this.$route.query.id}.jpeg`,
        },
        {
          hid: "og:image:alt",
          name: "og:image:alt",
          content: "Translate Thread",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: `https://api.translatethread.com/thread/${this.$route.query.id}`,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: `translated version of thread by @${this.authorHandle} is available now.`,
        },
        {
          hid: "og:image:width",
          name: "og:image:width",
          content: "1200",
        },
        {
          hid: "og:image:height",
          name: "og:image:height",
          content: "628",
        },
        {
          hid: "og:image:type",
          name: "og:image:type",
          content: "image/png",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@translatethread",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@translatethread",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `successfully translated thread by @${this.authorHandle}`,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: `translated version of thread by @ ${this.authorHandle} is available now.`,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `https://api.translatethread.com/${this.$route.query.id}.jpeg`,
        },
        {
          hid: "twitter:domain",
          name: "twitter:domain",
          content: `https://api.translatethread.com/thread/${this.$route.query.id}`,
        },
      ],
    };
  },
  mounted: function() {
    // Ensure the browser navigates to the correct place in the page after
    // everything has be rehydrated.
    const id = this.$route.hash.replaceAll("#", "");
    this.$nextTick(() => this.scrollFix('[id="' + id + '"]'));
  },
  beforeMount: function() {
    this.fetchTranslatedThread(this.$route.query.id)
      .then((res) => {
        this.threadObject = res.data;
        this.title =
          this.threadObject.Thread[0].Author +
          " @" +
          this.threadObject.Thread[0].AuthorHandle;

        this.authorHandle = this.threadObject.Thread[0].AuthorHandle;
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  methods: {
    ...mapActions({ fetchTranslatedThread: "thread/fetchTranslatedThread" }),
    scrollFix: function(hash) {
      if (hash && document.querySelector(hash)) {
        location.href = hash;
      }
    },
  },
  computed: {
    ...mapGetters("thread", ["getTranslatedThread"]),
  },
};
</script>
