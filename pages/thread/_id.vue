<template>
  <div>
    <navigation />
    <div class="flex">
      <div><QRCode /></div>
      <thread class="lg:max-w-7xl" />
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
