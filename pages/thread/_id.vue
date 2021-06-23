<template> </template>
<script>
export default {
  beforeMount: function() {
    window.location.href = "/thread?id=" + this.$route.params.id;
  },
};
</script>
