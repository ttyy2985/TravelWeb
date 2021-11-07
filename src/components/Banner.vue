<template>
  <!-- banner -->
  <div
    class="
      banner
      w-full
      bg-white bg-contain bg-no-repeat bg-right-bottom
      flex
      justify-between
      items-center
      px-6
      h-152
      md:h-233
      2xl:h-335
      shadow-lg
      rounded-2xl
    "
    :style="{ backgroundImage: `url(${require(`../assets/icon/bg-${bgSize}.png`)})` }"
  >
    <h1 class="text-left font-bold text-3xl md:text-6xl">探索。<br />福爾摩沙</h1>
  </div>
  <!-- banner end -->
</template>

<script>
export default {
  name: "Home",
  computed: {
    bgSize() {
      if (this.$root.windowWidth > 768) return "xl";
      if (this.$root.windowWidth <= 768 && this.windowWidth > 376) return "md";
      if (this.$root.windowWidth <= 376) return "sm";
    },
  },
};
</script>
