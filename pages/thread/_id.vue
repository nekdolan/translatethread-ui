<template>
  <div class="h-full bg-gray-900">
    <navigation />
    <div class="grid grid-cols grid-cols-12 w-full">
      <div class="col-span-2 hidden lg:block">
        <QRCode />
      </div>
      <thread class="col-start-3 col-span-7 w-full" />
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
