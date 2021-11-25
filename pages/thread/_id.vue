<template>
  <div
    class="min-h-screen h-full w-full bg-gray-900 flex flex-col justify-between"
  >
    <navigation />
    <div class="grid grid-cols grid-cols-12 w-full mb-auto">
      <div class="col-span-2 hidden lg:block">
        <QRCode />
      </div>
      <thread :thread-object="threadObject" class="lg:col-start-3 lg:col-span-7 col-span-12 w-full" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Thread from "~/components/Thread.vue";
import Footer from "~/components/Footer.vue";
import QRCode from "~/components/QRCode.vue";

export default {
  components: {
    Navigation,
    QRCode,
    Thread,
    Footer,
  },
  async asyncData({ store, route }) {
    const { data } = await store.dispatch('thread/fetchTranslatedThread', route.params.id);
    return { threadObject: data }
  },
  computed: {
    title() {
      return `${this.threadObject.Thread[0].Author} @${this.threadObject.Thread[0].AuthorHandle}`
    },
    authorHandle() {
      return this.threadObject.Thread[0].AuthorHandle
    }
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
          content: `successfully translated thread by @${this.authorHandle}`,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: `https://api.translatethread.com/${this.$route.params.id}.jpeg`,
        },
        {
          hid: "og:image:alt",
          name: "og:image:alt",
          content: "Translate Thread",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: `https://api.translatethread.com/thread/${this.$route.params.id}`,
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
          content: `translated version of thread by @${this.authorHandle} is available now.`,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `https://api.translatethread.com/${this.$route.params.id}.jpeg`,
        },
        {
          hid: "twitter:domain",
          name: "twitter:domain",
          content: `https://api.translatethread.com/thread/${this.$route.params.id}`,
        },
      ],
    };
  },
};
</script>
