<template>
  <div
    class="min-h-screen h-full w-full bg-gray-900 flex flex-col justify-between"
  >
    <navigation />
    <div class="grid grid-cols grid-cols-12 w-full mb-auto">
      <div class="col-span-2 hidden lg:block">
        <QRCode />
      </div>
      <thread class="lg:col-start-3 lg:col-span-7 col-span-12 w-full" />
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
};
</script>
