<template>
  <div class=" bg-gray-900">
    <Navigation />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Home from "~/components/Home.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navigation,
    Home,
    Footer,
  },
};
</script>
