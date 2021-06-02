<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->

      <div
        class="fixed inset-0 bg-gray-900 bg-opacity-95 transition-opacity"
        aria-hidden="true"
      ></div>

      <div
        v-if="currentIndex > 0"
        class="fixed absolute inset-y-1/2 inset-x-1/4"
      >
        <div
          class="text-gray-100 bg-gray-900 rounded-full py-4 font-bold w-16 h-16"
          v-on:click="currentIndex -= 1"
        >
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
      </div>

      <div
        v-if="currentIndex < mediaEntities.length - 1"
        class="fixed absolute inset-y-1/2 inset-x-3/4"
      >
        <div
          class="text-gray-100 bg-gray-900 rounded-full py-4 font-bold w-16 h-16"
          v-on:click="currentIndex += 1"
        >
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
      <div
        class="inline-block align-bottom rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="flex">
          <div class="flex overflow-hidden rounded-2xl">
            <img :src="mediaEntities[currentIndex].media_url_https" />
          </div>
          <div
            v-on:click="$emit('close', '')"
            class="-mt-10 -mr-20 text-2xl text-gray-100"
          >
            <i class="far fa-times-circle"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: ["mediaEntities", "clickedIndex"],
  data() {
    return {
      currentIndex: this.clickedIndex,
    };
  },
};
</script>
