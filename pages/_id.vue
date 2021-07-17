<template> </template>
<script>
export default {
  beforeMount: function() {
    console.log(this.$route.params.id);
    window.location.href =
      "https://l.translatethread.com/" + this.$route.params.id;
  },
};
</script>
