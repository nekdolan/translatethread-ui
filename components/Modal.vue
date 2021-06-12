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
        v-on:click="$emit('close', '')"
      ></div>

      <div class="fixed bottom-8 right-1/2 sm:top-4 sm:right-4 z-20">
        <div v-on:click="$emit('close', '')">
          <i class="text-gray-100 text-xl far fa-times-circle"></i>
        </div>
      </div>

      <div v-if="currentIndex > 0" class="fixed left-4 bottom-4 sm:bottom-1/2">
        <div
          class="text-gray-100 bg-gray-900 rounded-full py-5 font-bold w-16 h-16"
          v-on:click="currentIndex -= 1"
        >
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
      </div>

      <div
        v-if="currentIndex < mediaEntities.length - 1"
        class="fixed right-4 bottom-4 sm:bottom-1/2"
      >
        <div
          class="text-gray-100 bg-gray-900 rounded-full py-5 font-bold w-16 h-16"
          v-on:keyup.right="window.alert('hello')"
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
        class="inline-block my-auto rounded-lg text-left shadow-xl transform transition-all sm:align-middle sm:my-8 sm:max-w-lg sm:w-full"
      >
        <div class="overflow-hidden rounded-2xl">
          <img :src="mediaEntities[currentIndex].media_url_https" />
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
