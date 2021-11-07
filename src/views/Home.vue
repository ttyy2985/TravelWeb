<template>
  <div class="home">
    <Banner />
    <ArticleSetion iconName="location_purple" title="熱門景點" />
    <ArticleSetion iconName="location_purple" title="美食品嘗" />
    <ArticleSetion iconName="" subtitle="住宿推薦" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import ArticleSetion from "@/components/ArticleSetion.vue";
export default {
  name: "Home",
  components: {
    Banner,
    ArticleSetion,
  },
};
</script>
