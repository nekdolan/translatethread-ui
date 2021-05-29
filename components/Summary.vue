<template>
  <div
    v-if="summary"
    class="text-center mx-auto max-w-xl border-b border-gray-500 border-opacity-10 pb-2"
  >
    <div class="grid grid-cols grid-cols-8 lg:grid-cols-12 mx-auto">
      <div class="hidden lg:inline col-span-2 border-r">
        <div class="hover:text-gray-900 text-blue-500">
          <a href="">
            <p class="px-4 -mt-0.5">
              <i class="fab fa-twitter" alt="tweet"></i>
            </p>
            <p class="text-xs">Tweet Thread</p>
          </a>
        </div>
      </div>

      <div class="col-span-3 border-r">
        <p class="text-sm">{{ summary.TweetCount }}</p>
        <p class="text-xs text-gray-500 mt-0.5">
          # of tweets in thread
        </p>
      </div>
      <div class="col-span-3 border-r">
        <p class="text-sm">{{ summary.CharCount }}</p>
        <p class="text-xs text-gray-500 mt-0.5">characters translated</p>
      </div>
      <div class="col-span-2 border-r">
        <p class="text-sm">{{ summary.TimeTaken }}</p>
        <p class="text-xs text-gray-500 mt-0.5">to translate</p>
      </div>
      <div class="col-span-2 hidden lg:inline">
        <div class="hover:text-gray-900 text-blue-500">
          <a target="_blank" href="https://twitter.com/translatethread">
            <p class="px-4 -mt-0.5">
              <i class="fas fa-user-plus" alt="tweet"></i>
            </p>
            <p class="text-xs">Follow Me</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: ["summary"]
};
</script>
