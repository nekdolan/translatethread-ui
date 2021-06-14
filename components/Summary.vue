<template>
  <div
    v-if="summary"
    class="text-center mx-auto max-w-xl border-b border-gray-500 border-opacity-10 pb-2 mt-2"
  >
    <div class="grid grid-cols grid-cols-6 lg:grid-cols-12 mx-auto">
      <div class="hidden lg:inline col-span-3 border-r my-auto">
        <div
          class="text-xs border border-blue-200 text-gray-200 hover:bg-blue-100 hover:text-blue-700 mx-2 my-2 rounded-lg w-28 py-1 px-1"
        >
          <a href="">
            <p class="mr-0.5 text-xs font-semibold">
              <i class="fab fa-twitter text-blue-400" alt="tweet"></i>
              Tweet Thread
            </p>
          </a>
        </div>
      </div>

      <div class="col-span-2 border-r">
        <p class="text-sm text-gray-50">{{ summary.TweetCount }}</p>
        <p class="text-xs text-gray-500 mt-0.5">
          # of tweets
        </p>
      </div>
      <div class="col-span-2 border-r">
        <p class="text-sm text-gray-50">{{ summary.CharCount }}</p>
        <p class="text-xs text-gray-500 mt-0.5">characters</p>
      </div>
      <div class="col-span-2 lg:border-r">
        <p class="text-sm text-gray-50">{{ summary.TimeTaken }}</p>
        <p class="text-xs text-gray-500 mt-0.5">to translate</p>
      </div>
      <div class="col-span-2 hidden lg:inline my-auto ml-2">
        <div
          class="border border-blue-200 text-gray-200 hover:bg-blue-100 hover:text-blue-700  mx-2 my-2 w-20 rounded-lg px-1 py-1"
        >
          <a target="_blank" href="https://twitter.com/translatethread">
            <p class="text-xs font-semibold">
              <i class="mr-0.5 fas fa-user-plus text-blue-400" alt="tweet"></i>
              Follow
            </p>
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
};
</script>
