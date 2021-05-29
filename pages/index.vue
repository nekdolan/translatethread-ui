<template>
  <div>
    <navigation />
    <thread />
    <footer />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Thread from "~/components/Thread.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navigation,
    Thread,
    Footer
  }
};
</script>
