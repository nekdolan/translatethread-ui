<template>
  <div>
    <navigation />
    <div class="flex w-full">
      <div class="hidden lg:block w-2/12">
        <QRCode />
      </div>
      <thread class="lg:max-w-7xl mx-auto lg:mx-0 w-full lg:w-10/12" />
    </div>
    <footer />
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
