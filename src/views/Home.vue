<template>
  <div class="home">
    <Banner />
    <ArticleSetion category="ScenicSpot" iconName="location_purple" title="熱門景點" />
    <ArticleSetion category="Restaurant" iconName="location_purple" title="美食品嘗" />
    <ArticleSetion category="Hotel" iconName="location_purple" title="住宿推薦" />
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
