<template>
  <div id="app" class="bg-gray-50">
    <Sidebar />
    <div class="2xl:ml-384 p-6">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Noto Sans TC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @apply box-border;
}
</style>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>
