<template>
  <div
    v-if="summary"
    class="text-center mx-auto max-w-xl border-b border-gray-500 border-opacity-10 pb-2 mt-2"
  >
    <div class="grid grid-cols grid-cols-6 lg:grid-cols-12 mx-auto">
      <div class="hidden lg:inline col-span-3 border-r border-gray-500 my-auto">
        <div
          class="text-xs border border-blue-200 text-gray-200 hover:bg-blue-100 hover:text-blue-700 mx-2 my-2 rounded-lg w-28 py-1 px-1"
        >
          <a
            class="twitter-share-button flex"
            target="_blank"
            :href="tweetLinKParams"
          >
            <p class="mr-0.5 text-xs font-semibold">
              <i class="fab fa-twitter text-blue-400" alt="tweet"></i>
              Tweet Thread
            </p>
          </a>
        </div>
      </div>

      <div class="col-span-2 border-r border-gray-500">
        <p class="text-sm text-gray-50">{{ summary.TweetCount }}</p>
        <p class="text-xs text-gray-500 mt-0.5">
          # of tweets
        </p>
      </div>
      <div class="col-span-2 border-r border-gray-500">
        <p class="text-sm text-gray-50">{{ summary.CharCount }}</p>
        <p class="text-xs text-gray-500 mt-0.5">characters</p>
      </div>
      <div class="col-span-2 lg:border-r border-gray-500">
        <p class="text-sm text-gray-50">{{ summary.TimeTaken }}</p>
        <p class="text-xs text-gray-500 mt-0.5">to translate</p>
      </div>
      <div class="col-span-2 hidden lg:inline my-auto ml-2">
        <div
          class="border border-blue-200 text-gray-200 hover:bg-blue-100 hover:text-blue-700  mx-2 my-2 w-20 rounded-lg px-1 py-1"
        >
          <a
            target="_blank"
            href="https://twitter.com/translatethread"
            class="flex"
          >
            <span class="text-xs text-blue-400">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="8"
                  r="3.25"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12.25 19.25H6.94953C5.77004 19.25 4.88989 18.2103 5.49085 17.1954C6.36247 15.7234 8.23935 14 12.25 14"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 14.75V19.25"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M19.25 17L14.75 17"
                />
              </svg> </span
            ><span class="text-xs font-semibold mt-1">
              Follow
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: ["summary"],
  computed: {
    tweetLinKParams: function() {
      return (
        "https://twitter.com/intent/tweet?text=Read the translated version of thread by " +
        this.summary.Author +
        " here " +
        "https://translatethread.com" +
        this.$route.fullPath
      );
    },
  },
};
</script>
