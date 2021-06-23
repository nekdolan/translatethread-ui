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
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9.75 9.75L14.25 14.25"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M14.25 9.75L9.75 14.25"
            />
          </svg>
        </div>
      </div>

      <div v-if="currentIndex > 0" class="fixed left-4 bottom-4 sm:bottom-1/2">
        <div
          class="text-gray-100 bg-gray-900 rounded-full py-5 font-bold w-16 h-16"
          v-on:click="currentIndex -= 1"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.25 6.75L4.75 12L10.25 17.25"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.25 12H5"
            />
          </svg>
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
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M13.75 6.75L19.25 12L13.75 17.25"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 12H4.75"
            />
          </svg>
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
