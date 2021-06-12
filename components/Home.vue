<template>
  <div class="flex flex-col">
    <Hero />
    <HowItWorks />
    <Architecture />
    <TechStack />
  </div>
</template>

<script>
import TechStack from "~/components/TechStack.vue";
import HowItWorks from "~/components/HowItWorks.vue";
import Architecture from "~/components/Architecture.vue";
import Hero from "~/components/Hero.vue";

export default {
  components: {
    TechStack,
    Architecture,
    HowItWorks,
    Hero,
  },
};
</script>
