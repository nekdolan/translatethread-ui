<template>
  <div class="hidden lg:block sticky top-20 left-4">
    <img
      class="ml-2 w-48 h-48"
      :src="
        'https://webhook.translatethread.com/qrcode?link=https://e.translatethread.com/thread/' +
          $route.query.id
      "
    />
    <p class="ml-4 text-xs text-gray-400">scan qr code to open on mobile</p>
  </div>
</template>
